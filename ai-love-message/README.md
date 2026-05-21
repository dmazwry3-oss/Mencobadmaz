# 💌 AI Love Message Generator

Website romantis untuk membuat pesan manis, lucu, dan personal untuk orang tersayang menggunakan AI (Google Gemini). Bisa dibagikan lewat link atau WhatsApp!

## ✨ Fitur

- 🎨 4 tema visual: Pink Love, Night Sky, Cute Sticker, Elegant Letter
- 🎭 7 mood pesan: Romantis, Lucu, Bucin, Minta Maaf, Semangat, Ulang Tahun, Kangen
- 💞 5 tipe hubungan: Pasangan, Sahabat, Crush, Keluarga, Teman Dekat
- 🔗 Link shareable (tanpa database)
- 💬 Bagikan ke WhatsApp
- 📋 Salin pesan
- 💾 Auto-save ke localStorage
- 🎉 Animasi hati melayang & efek kejutan
- 📱 Responsive (mobile & desktop)
- 🛡️ API key aman di backend (Cloudflare Worker)
- 🔄 Fallback otomatis jika AI error

## 📁 Struktur File

```
ai-love-message/
├── index.html      → Halaman utama (GitHub Pages)
├── styles.css      → Stylesheet dengan tema & animasi
├── script.js       → Logic frontend (form, API call, sharing)
├── worker.js       → Cloudflare Worker (proxy ke Gemini API)
└── README.md       → Dokumentasi ini
```

## 🚀 Cara Deploy

### 1. Upload ke GitHub Pages (Frontend)

1. **Push ke GitHub:**
   ```bash
   # Buat repository baru di GitHub
   # Clone repository
   git clone https://github.com/USERNAME/ai-love-message.git
   cd ai-love-message

   # Copy file-file project
   # index.html, styles.css, script.js, README.md
   
   git add .
   git commit -m "Initial commit: AI Love Message Generator"
   git push origin main
   ```

2. **Aktifkan GitHub Pages:**
   - Buka repository di GitHub
   - Pergi ke **Settings** → **Pages**
   - Di bagian **Source**, pilih **Deploy from a branch**
   - Pilih branch `main` dan folder `/ (root)`
   - Klik **Save**
   - Tunggu beberapa menit, website akan live di:
     ```
     https://USERNAME.github.io/ai-love-message/
     ```

### 2. Deploy Cloudflare Worker (Backend)

#### Cara A: Via Cloudflare Dashboard (Mudah)

1. **Buka [Cloudflare Workers Dashboard](https://dash.cloudflare.com/)**
2. Klik **Workers & Pages** → **Create Application** → **Create Worker**
3. Beri nama worker, misal: `love-message-worker`
4. Klik **Deploy**
5. Setelah ter-deploy, klik **Quick Edit**
6. Hapus kode default, lalu **paste seluruh isi `worker.js`**
7. Klik **Save and Deploy**

#### Cara B: Via Wrangler CLI (Advanced)

1. **Install Wrangler:**
   ```bash
   npm install -g wrangler
   ```

2. **Login ke Cloudflare:**
   ```bash
   wrangler login
   ```

3. **Buat file `wrangler.toml`:**
   ```toml
   name = "love-message-worker"
   main = "worker.js"
   compatibility_date = "2024-01-01"

   [vars]
   # Jangan taruh API key di sini! Gunakan secrets.
   ```

4. **Deploy:**
   ```bash
   wrangler deploy
   ```

### 3. Set Environment Variable (API Key)

#### ⚠️ PENTING: Jangan pernah hardcode API key!

**Via Dashboard:**
1. Buka Worker yang sudah di-deploy
2. Pergi ke **Settings** → **Variables**
3. Di bagian **Environment Variables**, klik **Add variable**
4. Isi:
   - Variable name: `GEMINI_API_KEY`
   - Value: `(API key Google Gemini kamu)`
5. Klik **Encrypt** (agar tidak terlihat)
6. Klik **Save and Deploy**

**Via Wrangler CLI:**
```bash
wrangler secret put GEMINI_API_KEY
# Paste API key saat diminta
```

### 4. Hubungkan Frontend ke Worker

Buka file `script.js`, cari baris ini di bagian atas:

```javascript
const WORKER_ENDPOINT = 'https://love-message-worker.YOUR_USERNAME.workers.dev/generate';
```

Ganti dengan URL worker kamu yang sebenarnya:

```javascript
const WORKER_ENDPOINT = 'https://love-message-worker.USERNAME.workers.dev/generate';
```

> **Tips:** URL worker bisa dilihat di Cloudflare Dashboard setelah deploy.

### 5. (Opsional) Batasi CORS di Worker

Untuk keamanan production, buka `worker.js` dan update `ALLOWED_ORIGINS`:

```javascript
const ALLOWED_ORIGINS = [
    'https://USERNAME.github.io',
    // tambahkan domain lain jika perlu
];
```

Lalu uncomment kode pembatasan di fungsi `getAllowedOrigin()`.

## 🔑 Cara Mendapatkan API Key Gemini

1. Buka [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Login dengan akun Google
3. Klik **Create API Key**
4. Pilih project atau buat baru
5. Copy API key yang muncul
6. **Simpan di tempat aman, jangan share ke siapapun!**

## 🧪 Cara Test Lokal

### Frontend saja (tanpa AI):
```bash
# Pakai live server sederhana
npx serve .
# atau
python -m http.server 8000
# atau
php -S localhost:8000
```

Website akan berjalan dengan pesan fallback (template lokal) jika Worker belum di-setup.

### Worker lokal (dengan Wrangler):
```bash
# Buat file .dev.vars di folder worker
echo "GEMINI_API_KEY=your_api_key_here" > .dev.vars

# Jalankan worker secara lokal
wrangler dev worker.js
```

Worker akan berjalan di `http://localhost:8787`. Update `WORKER_ENDPOINT` di `script.js` untuk testing:

```javascript
const WORKER_ENDPOINT = 'http://localhost:8787/generate';
```

### Test endpoint Worker:
```bash
curl -X POST http://localhost:8787/generate \
  -H "Content-Type: application/json" \
  -d '{
    "recipientName": "Sayang",
    "senderName": "Aku",
    "relationship": "Pasangan",
    "mood": "Romantis",
    "theme": "Pink Love"
  }'
```

## 🛡️ Peringatan Keamanan

| ⚠️ | Jangan Pernah... |
|---|---|
| 🚫 | Menaruh API key di file frontend (index.html, script.js, styles.css) |
| 🚫 | Commit API key ke repository GitHub |
| 🚫 | Share API key di chat, forum, atau media sosial |
| 🚫 | Menaruh API key di file yang ter-push ke GitHub |
| ✅ | Simpan API key HANYA di Cloudflare Worker environment variables |
| ✅ | Gunakan fitur **Encrypt** di Cloudflare dashboard |
| ✅ | Gunakan `wrangler secret` untuk CLI |
| ✅ | Tambahkan `.dev.vars` ke `.gitignore` |

### Tambahkan ke `.gitignore`:
```
.dev.vars
node_modules/
.wrangler/
```

## 🔧 Konfigurasi

### Mengganti Model Gemini

Buka `worker.js`, ubah baris:
```javascript
const GEMINI_MODEL = "gemini-2.0-flash";
```

Model yang tersedia:
- `gemini-2.0-flash` (cepat, recommended)
- `gemini-1.5-flash` (alternatif cepat)
- `gemini-1.5-pro` (lebih bagus, lebih lambat)

### Menambah Mood/Hubungan Baru

1. Tambahkan option di `index.html` pada element `<select>`
2. AI akan otomatis menyesuaikan berdasarkan input

### Menambah Tema Baru

1. Tambahkan CSS variables baru di `styles.css`
2. Tambahkan option tema di `index.html`
3. Tambahkan logic di `script.js` fungsi `applyTheme()`

## 📱 Kompatibilitas

- ✅ Chrome (Android & Desktop)
- ✅ Safari (iOS & macOS)
- ✅ Firefox
- ✅ Samsung Internet
- ✅ Edge
- ✅ Opera

## 💡 Tips Penggunaan

- Link shareable menyimpan data di URL (base64 encoded), tidak perlu database
- Pesan terakhir otomatis tersimpan di browser (localStorage)
- Jika AI gagal/lambat, website tetap menampilkan pesan template yang bagus
- Tombol kejutan menampilkan animasi emoji celebration

## 📄 Lisensi

Dibuat dengan 💖 - Bebas digunakan dan dimodifikasi untuk keperluan personal.

---

*Sebarkan cinta, bukan kebencian ✨*
