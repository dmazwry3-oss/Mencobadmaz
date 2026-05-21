/* ============================================
   AI Love Message Generator - Cloudflare Worker
   Proxy backend untuk Gemini API
   
   Deploy ke Cloudflare Workers.
   Set environment variable: GEMINI_API_KEY
   ============================================ */

// Model Gemini yang digunakan (bisa diganti sesuai kebutuhan)
const GEMINI_MODEL = "gemini-2.0-flash";

// Allowed origins (ganti dengan domain GitHub Pages kamu)
const ALLOWED_ORIGINS = [
    'https://YOUR_USERNAME.github.io',
    'http://localhost',
    'http://127.0.0.1',
    'null' // untuk file:// protocol saat testing lokal
];

// Fallback response jika Gemini gagal
function getFallbackResponse(recipientName) {
    return {
        success: false,
        data: {
            title: `Untuk ${recipientName || 'Kamu'}`,
            opening: "Ada pesan kecil buat kamu...",
            message: "Di antara semua hal indah di dunia ini, kehadiranmu adalah yang paling berharga. Terima kasih sudah menjadi bagian dari hidupku yang paling berarti.",
            closing: "Dengan sepenuh hati, selalu untukmu.",
            buttonText: "Buka pesan ini 💌"
        },
        error: "Gagal menghubungi AI, menggunakan pesan template."
    };
}

// Handler utama
export default {
    async fetch(request, env) {
        // Handle CORS preflight
        if (request.method === 'OPTIONS') {
            return handleCORS(request);
        }

        // Hanya terima POST ke /generate
        const url = new URL(request.url);
        
        if (url.pathname === '/generate' && request.method === 'POST') {
            return handleGenerate(request, env);
        }

        // Health check endpoint
        if (url.pathname === '/' && request.method === 'GET') {
            return new Response(JSON.stringify({ 
                status: 'ok', 
                service: 'AI Love Message Generator Worker',
                version: '1.0.0'
            }), {
                headers: { 'Content-Type': 'application/json' }
            });
        }

        return new Response(JSON.stringify({ error: 'Not Found' }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};

// ============ GENERATE HANDLER ============
async function handleGenerate(request, env) {
    const origin = request.headers.get('Origin') || '';
    
    try {
        // Parse request body
        const body = await request.json();
        const { recipientName, senderName, relationship, mood, theme } = body;

        // Validasi input
        if (!recipientName || !relationship || !mood) {
            return jsonResponse({
                success: false,
                error: 'Missing required fields: recipientName, relationship, mood'
            }, 400, origin);
        }

        // Cek API key tersedia
        if (!env.GEMINI_API_KEY) {
            console.error('GEMINI_API_KEY not configured');
            return jsonResponse(getFallbackResponse(recipientName), 200, origin);
        }

        // Buat prompt untuk Gemini
        const prompt = buildPrompt(recipientName, senderName, relationship, mood, theme);

        // Panggil Gemini API
        const geminiResponse = await callGemini(prompt, env.GEMINI_API_KEY);

        if (geminiResponse.success) {
            return jsonResponse({
                success: true,
                data: geminiResponse.data
            }, 200, origin);
        } else {
            // Gemini gagal, gunakan fallback
            return jsonResponse(getFallbackResponse(recipientName), 200, origin);
        }

    } catch (error) {
        console.error('Worker error:', error);
        
        // Coba parse recipientName dari body untuk fallback
        let recipientName = 'Kamu';
        try {
            const body = await request.clone().json();
            recipientName = body.recipientName || 'Kamu';
        } catch (e) {}

        return jsonResponse(getFallbackResponse(recipientName), 200, origin);
    }
}

// ============ GEMINI API CALL ============
async function callGemini(prompt, apiKey) {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`;

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }],
                generationConfig: {
                    temperature: 0.9,
                    topP: 0.95,
                    topK: 40,
                    maxOutputTokens: 500,
                    responseMimeType: "application/json"
                },
                safetySettings: [
                    {
                        category: "HARM_CATEGORY_HARASSMENT",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    },
                    {
                        category: "HARM_CATEGORY_HATE_SPEECH",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    },
                    {
                        category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                        threshold: "BLOCK_LOW_AND_ABOVE"
                    },
                    {
                        category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    }
                ]
            })
        });

        if (!response.ok) {
            console.error(`Gemini API error: ${response.status} ${response.statusText}`);
            return { success: false };
        }

        const result = await response.json();

        // Extract text from Gemini response
        const text = result?.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!text) {
            console.error('No text in Gemini response');
            return { success: false };
        }

        // Parse JSON dari response Gemini
        const parsed = parseGeminiJSON(text);

        if (parsed) {
            return { success: true, data: parsed };
        }

        return { success: false };

    } catch (error) {
        console.error('Gemini fetch error:', error);
        return { success: false };
    }
}

// ============ PARSE GEMINI JSON ============
function parseGeminiJSON(text) {
    try {
        // Coba parse langsung
        const data = JSON.parse(text);
        
        // Validasi struktur
        if (data.title && data.message) {
            return {
                title: data.title || 'Untuk Kamu',
                opening: data.opening || 'Ada pesan untukmu...',
                message: data.message || '',
                closing: data.closing || 'Dengan cinta.',
                buttonText: data.buttonText || '💝 Buka Kejutan'
            };
        }
    } catch (e) {
        // Jika gagal parse langsung, coba extract JSON dari text
        try {
            const jsonMatch = text.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                const data = JSON.parse(jsonMatch[0]);
                if (data.title && data.message) {
                    return {
                        title: data.title || 'Untuk Kamu',
                        opening: data.opening || 'Ada pesan untukmu...',
                        message: data.message || '',
                        closing: data.closing || 'Dengan cinta.',
                        buttonText: data.buttonText || '💝 Buka Kejutan'
                    };
                }
            }
        } catch (e2) {
            console.error('Failed to parse Gemini JSON:', e2);
        }
    }

    return null;
}

// ============ PROMPT BUILDER ============
function buildPrompt(recipientName, senderName, relationship, mood, theme) {
    return `Kamu adalah penulis pesan personal berbahasa Indonesia. Buatkan pesan yang natural, manis, emosional, dan tidak terdengar seperti AI.

Data:
- Nama penerima: ${recipientName}
- Nama pengirim: ${senderName || '(tidak disebutkan)'}
- Hubungan: ${relationship}
- Mood: ${mood}
- Tema visual: ${theme || 'Pink Love'}

Aturan:
- Bahasa Indonesia natural.
- Jangan terlalu lebay.
- Jangan vulgar.
- Jangan seksual.
- Jangan menyebut AI.
- Maksimal 90 kata untuk pesan utama.
- Buat terasa personal, hangat, dan cocok dibagikan ke pasangan atau sahabat.
- Kalau nama pengirim kosong atau "(tidak disebutkan)", jangan sebut nama pengirim.
- Output harus valid JSON saja tanpa markdown.

Format JSON:
{
  "title": "Untuk ...",
  "opening": "...",
  "message": "...",
  "closing": "...",
  "buttonText": "..."
}`;
}

// ============ CORS HANDLING ============
function handleCORS(request) {
    const origin = request.headers.get('Origin') || '';
    
    return new Response(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': getAllowedOrigin(origin),
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '86400',
        }
    });
}

function getAllowedOrigin(origin) {
    // Untuk development, izinkan semua origin
    // Untuk production, batasi ke domain tertentu saja
    // Uncomment baris di bawah untuk membatasi:
    // if (ALLOWED_ORIGINS.some(allowed => origin.startsWith(allowed))) {
    //     return origin;
    // }
    // return ALLOWED_ORIGINS[0];
    
    return origin || '*';
}

// ============ JSON RESPONSE HELPER ============
function jsonResponse(data, status = 200, origin = '') {
    return new Response(JSON.stringify(data), {
        status,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': getAllowedOrigin(origin),
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        }
    });
}
