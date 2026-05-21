/* ============================================
   AI Love Message Generator - Main Script
   Langsung memanggil Gemini API dari frontend
   Deploy di GitHub Pages (static site)
   ============================================ */

// ============ CONFIGURATION ============
// API Key Gemini
const GEMINI_API_KEY = 'AIzaSyD-lLz12FRQ4jqgXdPBVo-ZzREQRvTcStg';
const GEMINI_MODEL = 'gemini-2.0-flash';
const GEMINI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

// ============ DOM ELEMENTS ============
const formSection = document.getElementById('formSection');
const loadingSection = document.getElementById('loadingSection');
const resultSection = document.getElementById('resultSection');
const messageForm = document.getElementById('messageForm');
const btnGenerate = document.getElementById('btnGenerate');
const floatingElements = document.getElementById('floatingElements');

// Form inputs
const recipientInput = document.getElementById('recipientName');
const senderInput = document.getElementById('senderName');
const relationshipSelect = document.getElementById('relationship');
const moodSelect = document.getElementById('mood');

// Result elements
const resultTitle = document.getElementById('resultTitle');
const resultOpening = document.getElementById('resultOpening');
const resultMessage = document.getElementById('resultMessage');
const resultClosing = document.getElementById('resultClosing');
const btnSurprise = document.getElementById('btnSurprise');
const surpriseContent = document.getElementById('surpriseContent');

// Action buttons
const btnCopy = document.getElementById('btnCopy');
const btnLink = document.getElementById('btnLink');
const btnWhatsApp = document.getElementById('btnWhatsApp');
const btnReset = document.getElementById('btnReset');
const btnCopyLink = document.getElementById('btnCopyLink');

// Other
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const linkInfo = document.getElementById('linkInfo');
const shareLink = document.getElementById('shareLink');

// ============ STATE ============
let currentResult = null;
let currentTheme = 'Pink Love';

// ============ FALLBACK MESSAGES ============
const fallbackMessages = [
    {
        title: "Untuk {name}",
        opening: "Ada sesuatu yang ingin kusampaikan...",
        message: "Di antara jutaan bintang di langit, kamu adalah yang paling terang di mataku. Terima kasih sudah ada, sudah jadi tempat pulang yang paling nyaman. Kamu luar biasa.",
        closing: "Dengan sepenuh hati, selalu.",
        buttonText: "Buka hatiku 💝"
    },
    {
        title: "Untuk {name} tersayang",
        opening: "Pesan kecil dari hati yang tulus...",
        message: "Kalau aku bisa memilih satu keajaiban di dunia ini, aku akan memilih hari di mana aku pertama kali mengenalmu. Kamu mengubah segalanya jadi lebih indah.",
        closing: "Selamanya milikmu.",
        buttonText: "Kejutan untukmu ✨"
    },
    {
        title: "Hai {name}!",
        opening: "Ini untukmu, baca pelan-pelan ya...",
        message: "Kamu tahu nggak? Setiap hari aku bersyukur punya seseorang sepertimu. Yang bikin ketawa tanpa alasan, yang bikin hari buruk jadi nggak terlalu buruk. Kamu spesial.",
        closing: "Dari seseorang yang sangat menyayangimu 💕",
        buttonText: "Lihat ini 🥰"
    },
    {
        title: "Spesial untuk {name}",
        opening: "Ada yang mau bilang sesuatu padamu...",
        message: "Mungkin aku nggak selalu bisa bilang langsung, tapi kamu berarti lebih dari yang kamu tahu. Kehadiranmu seperti pelukan hangat di hari yang dingin.",
        closing: "Selalu di hati, sekarang dan nanti.",
        buttonText: "Buka pesan ini 💌"
    },
    {
        title: "Dear {name}",
        opening: "Bacalah ini saat kamu butuh senyuman...",
        message: "Aku mau kamu tahu, di antara semua orang yang pernah kutemui, kamu yang paling bikin aku merasa cukup. Cukup bahagia, cukup dicintai, cukup bersyukur.",
        closing: "Dengan cinta yang tak pernah berkurang.",
        buttonText: "Ada sesuatu untukmu 🎁"
    }
];

// ============ INITIALIZATION ============
document.addEventListener('DOMContentLoaded', () => {
    initFloatingElements();
    initThemeSelector();
    initFormHandlers();
    initActionButtons();
    checkShareableLink();
    loadLastResult();
});

// ============ FLOATING ELEMENTS ============
function initFloatingElements() {
    const emojis = ['💖', '💕', '✨', '🌟', '💝', '💗', '⭐', '🦋', '🌸', '💫'];
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => createFloatItem(emojis), i * 800);
    }
    
    setInterval(() => {
        if (document.querySelectorAll('.float-item').length < 20) {
            createFloatItem(emojis);
        }
    }, 2000);
}

function createFloatItem(emojis) {
    const item = document.createElement('span');
    item.className = 'float-item';
    item.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    item.style.left = Math.random() * 100 + '%';
    item.style.fontSize = (Math.random() * 1.5 + 0.8) + 'rem';
    item.style.animationDuration = (Math.random() * 8 + 8) + 's';
    item.style.animationDelay = Math.random() * 2 + 's';
    floatingElements.appendChild(item);
    
    setTimeout(() => {
        if (item.parentNode) {
            item.parentNode.removeChild(item);
        }
    }, 18000);
}

// ============ THEME SELECTOR ============
function initThemeSelector() {
    const themeOptions = document.querySelectorAll('.theme-option');
    
    themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            themeOptions.forEach(o => o.classList.remove('active'));
            option.classList.add('active');
            currentTheme = option.dataset.theme;
            applyTheme(currentTheme);
        });
    });
}

function applyTheme(theme) {
    document.body.classList.remove('theme-night-sky', 'theme-cute-sticker', 'theme-elegant-letter');
    
    switch (theme) {
        case 'Night Sky':
            document.body.classList.add('theme-night-sky');
            break;
        case 'Cute Sticker':
            document.body.classList.add('theme-cute-sticker');
            break;
        case 'Elegant Letter':
            document.body.classList.add('theme-elegant-letter');
            break;
    }
}

// ============ FORM HANDLING ============
function initFormHandlers() {
    messageForm.addEventListener('submit', handleFormSubmit);
    
    recipientInput.addEventListener('input', () => clearError('recipient'));
    relationshipSelect.addEventListener('change', () => clearError('relationship'));
    moodSelect.addEventListener('change', () => clearError('mood'));
}

function validateForm() {
    let isValid = true;
    
    if (!recipientInput.value.trim()) {
        showError('recipient');
        isValid = false;
    }
    
    if (!relationshipSelect.value) {
        showError('relationship');
        isValid = false;
    }
    
    if (!moodSelect.value) {
        showError('mood');
        isValid = false;
    }
    
    return isValid;
}

function showError(field) {
    const errorEl = document.getElementById(`error${capitalize(field)}`);
    const inputEl = field === 'recipient' ? recipientInput : 
                    field === 'relationship' ? relationshipSelect : moodSelect;
    
    errorEl.classList.add('show');
    inputEl.classList.add('error');
}

function clearError(field) {
    const errorEl = document.getElementById(`error${capitalize(field)}`);
    const inputEl = field === 'recipient' ? recipientInput : 
                    field === 'relationship' ? relationshipSelect : moodSelect;
    
    errorEl.classList.remove('show');
    inputEl.classList.remove('error');
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// ============ FORM SUBMISSION ============
async function handleFormSubmit(e) {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    const formData = {
        recipientName: recipientInput.value.trim(),
        senderName: senderInput.value.trim(),
        relationship: relationshipSelect.value,
        mood: moodSelect.value,
        theme: currentTheme
    };
    
    showLoading();
    
    try {
        const data = await callGeminiAPI(formData);
        displayResult(data, formData);
    } catch (error) {
        console.error('Error generating message:', error);
        const fallback = getFallbackMessage(formData.recipientName);
        displayResult(fallback, formData);
        showToast('Menggunakan pesan template (API sedang sibuk) 💫');
    }
}

// ============ GEMINI API CALL (LANGSUNG DARI FRONTEND) ============
async function callGeminiAPI(formData) {
    const { recipientName, senderName, relationship, mood, theme } = formData;
    
    // Buat prompt
    const prompt = `Kamu adalah penulis pesan personal berbahasa Indonesia. Buatkan pesan yang natural, manis, emosional, dan tidak terdengar seperti AI.

Data:
- Nama penerima: ${recipientName}
- Nama pengirim: ${senderName || '(tidak disebutkan)'}
- Hubungan: ${relationship}
- Mood: ${mood}
- Tema visual: ${theme}

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

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000); // 20s timeout

    try {
        const response = await fetch(GEMINI_ENDPOINT, {
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
                    { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
                    { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
                    { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_LOW_AND_ABOVE" },
                    { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" }
                ]
            }),
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            throw new Error(`Gemini API error: ${response.status}`);
        }

        const result = await response.json();

        // Extract text dari response Gemini
        const text = result?.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!text) {
            throw new Error('No text in Gemini response');
        }

        // Parse JSON dari response
        const parsed = parseGeminiJSON(text);

        if (parsed) {
            return parsed;
        }

        throw new Error('Failed to parse Gemini JSON');

    } catch (error) {
        clearTimeout(timeoutId);
        throw error;
    }
}

// ============ PARSE GEMINI JSON ============
function parseGeminiJSON(text) {
    try {
        // Coba parse langsung
        const data = JSON.parse(text);
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
        // Jika gagal, coba extract JSON dari text
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

// ============ FALLBACK MESSAGE ============
function getFallbackMessage(recipientName) {
    const randomIdx = Math.floor(Math.random() * fallbackMessages.length);
    const template = { ...fallbackMessages[randomIdx] };
    
    template.title = template.title.replace('{name}', recipientName);
    template.message = template.message.replace('{name}', recipientName);
    
    return template;
}

// ============ DISPLAY RESULT ============
function displayResult(data, formData) {
    currentResult = { ...data, formData };
    
    applyTheme(formData ? formData.theme : currentTheme);
    
    resultTitle.textContent = data.title || `Untuk ${formData?.recipientName || 'Kamu'}`;
    resultOpening.textContent = data.opening || 'Ada pesan kecil untukmu...';
    resultMessage.innerHTML = `<p>${escapeHtml(data.message || 'Kamu istimewa.')}</p>`;
    resultClosing.textContent = data.closing || 'Dengan cinta.';
    btnSurprise.textContent = data.buttonText || '💝 Buka Kejutan';
    
    surpriseContent.style.display = 'none';
    btnSurprise.style.display = 'inline-flex';
    
    hideLoading();
    formSection.style.display = 'none';
    resultSection.style.display = 'block';
    
    saveResult(currentResult);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============ LOADING STATE ============
function showLoading() {
    formSection.style.display = 'none';
    loadingSection.style.display = 'block';
    resultSection.style.display = 'none';
    btnGenerate.disabled = true;
    
    const btnText = btnGenerate.querySelector('.btn-text');
    const btnLoading = btnGenerate.querySelector('.btn-loading');
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline-flex';
}

function hideLoading() {
    loadingSection.style.display = 'none';
    btnGenerate.disabled = false;
    
    const btnText = btnGenerate.querySelector('.btn-text');
    const btnLoading = btnGenerate.querySelector('.btn-loading');
    btnText.style.display = 'inline';
    btnLoading.style.display = 'none';
}

// ============ ACTION BUTTONS ============
function initActionButtons() {
    btnSurprise.addEventListener('click', () => {
        surpriseContent.style.display = 'block';
        btnSurprise.style.display = 'none';
        triggerCelebration();
    });
    
    btnCopy.addEventListener('click', () => {
        if (!currentResult) return;
        const text = `${currentResult.title}\n\n${currentResult.opening}\n\n${currentResult.message}\n\n${currentResult.closing}`;
        copyToClipboard(text);
        showToast('Pesan berhasil disalin! 📋');
    });
    
    btnLink.addEventListener('click', () => {
        if (!currentResult) return;
        
        const shareData = {
            t: currentResult.title,
            o: currentResult.opening,
            m: currentResult.message,
            c: currentResult.closing,
            b: currentResult.buttonText,
            th: currentResult.formData?.theme || 'Pink Love'
        };
        
        const encoded = btoa(encodeURIComponent(JSON.stringify(shareData)));
        const url = `${window.location.origin}${window.location.pathname}?msg=${encoded}`;
        
        shareLink.value = url;
        linkInfo.style.display = 'block';
        showToast('Link berhasil dibuat! 🔗');
    });
    
    btnCopyLink.addEventListener('click', () => {
        copyToClipboard(shareLink.value);
        showToast('Link berhasil disalin! ✅');
    });
    
    btnWhatsApp.addEventListener('click', () => {
        if (!currentResult) return;
        
        const text = `💌 ${currentResult.title}\n\n${currentResult.opening}\n\n${currentResult.message}\n\n${currentResult.closing}`;
        
        let shareUrl = '';
        if (shareLink.value) {
            shareUrl = `\n\n🔗 Buka pesan lengkap: ${shareLink.value}`;
        }
        
        const waUrl = `https://wa.me/?text=${encodeURIComponent(text + shareUrl)}`;
        window.open(waUrl, '_blank');
    });
    
    btnReset.addEventListener('click', () => {
        resetToForm();
    });
}

// ============ SHAREABLE LINK READER ============
function checkShareableLink() {
    const urlParams = new URLSearchParams(window.location.search);
    const msgParam = urlParams.get('msg');
    
    if (msgParam) {
        try {
            const decoded = JSON.parse(decodeURIComponent(atob(msgParam)));
            
            const data = {
                title: decoded.t || 'Untuk Kamu',
                opening: decoded.o || 'Ada pesan untukmu...',
                message: decoded.m || '',
                closing: decoded.c || '',
                buttonText: decoded.b || '💝 Buka Kejutan',
                formData: { theme: decoded.th || 'Pink Love' }
            };
            
            document.body.classList.add('view-mode');
            applyTheme(decoded.th || 'Pink Love');
            displayResult(data, { theme: decoded.th || 'Pink Love' });
            
        } catch (error) {
            console.error('Error parsing shared link:', error);
        }
    }
}

// ============ LOCAL STORAGE ============
function saveResult(result) {
    try {
        localStorage.setItem('lastLoveMessage', JSON.stringify(result));
    } catch (e) {
        console.warn('Could not save to localStorage:', e);
    }
}

function loadLastResult() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('msg')) return;
    
    try {
        const saved = localStorage.getItem('lastLoveMessage');
        if (saved) {
            const result = JSON.parse(saved);
            currentResult = result;
        }
    } catch (e) {
        console.warn('Could not load from localStorage:', e);
    }
}

// ============ RESET ============
function resetToForm() {
    currentResult = null;
    resultSection.style.display = 'none';
    formSection.style.display = 'block';
    linkInfo.style.display = 'none';
    surpriseContent.style.display = 'none';
    btnSurprise.style.display = 'inline-flex';
    
    messageForm.reset();
    
    document.querySelectorAll('.theme-option').forEach(o => o.classList.remove('active'));
    document.querySelector('.theme-option[data-theme="Pink Love"]').classList.add('active');
    applyTheme('Pink Love');
    currentTheme = 'Pink Love';
    
    document.body.classList.remove('view-mode');
    
    if (window.location.search) {
        window.history.replaceState({}, '', window.location.pathname);
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============ CELEBRATION EFFECT ============
function triggerCelebration() {
    const celebrationEmojis = ['🎉', '💖', '🥰', '💕', '✨', '🌟', '💝', '🎊', '💗', '🦋'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const item = document.createElement('span');
            item.className = 'float-item';
            item.textContent = celebrationEmojis[Math.floor(Math.random() * celebrationEmojis.length)];
            item.style.left = Math.random() * 100 + '%';
            item.style.fontSize = (Math.random() * 2 + 1) + 'rem';
            item.style.animationDuration = (Math.random() * 4 + 3) + 's';
            floatingElements.appendChild(item);
            
            setTimeout(() => {
                if (item.parentNode) item.parentNode.removeChild(item);
            }, 7000);
        }, i * 100);
    }
}

// ============ UTILITY FUNCTIONS ============
function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).catch(() => {
            fallbackCopy(text);
        });
    } else {
        fallbackCopy(text);
    }
}

function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
    } catch (e) {
        console.warn('Copy failed:', e);
    }
    document.body.removeChild(textarea);
}

function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
