# 💌 AI Love Message Generator

Website romantis untuk membuat pesan manis, lucu, dan personal untuk orang tersayang menggunakan AI (Google Gemini). Bisa dibagikan lewat link atau WhatsApp!

## ✨ Fitur

- 🎨 4 tema visual: Pink Love, Night Sky, Cute Sticker, Elegant Letter
- 🎭 7 mood pesan: Romantis, Lucu, Bucin, Minta Maaf, Semangat, Ulang Tahun, Kangen
- 💞 5 tipe hubungan: Pasangan, Sahabat, Crush, Keluarga, Teman Dekat
- 🤖 AI-powered menggunakan Google Gemini API
- 🔗 Link shareable (tanpa database)
- 💬 Bagikan ke WhatsApp
- 📋 Salin pesan
- 💾 Auto-save ke localStorage
- 🎉 Animasi hati melayang & efek kejutan
- 📱 Responsive (mobile & desktop)
- 🔄 Fallback otomatis jika AI error

## 📁 Struktur File

```
ai-love-message/
├── index.html      → Halaman utama
├── styles.css      → Stylesheet dengan tema & animasi
├── script.js       → Logic frontend (form, Gemini API, sharing)
└── README.md       → Dokumentasi ini
```

## 🚀 Cara Deploy ke GitHub Pages

### 1. Push ke GitHub

```bash
# Buat repository baru di GitHub, lalu:
git clone https://github.com/USERNAME/REPO-NAME.git
cd REPO-NAME

# Copy semua file (index.html, styles.css, script.js)
git add .
git commit -m "Initial commit: AI Love Message Generator"
git push origin main
```

### 2. Aktifkan GitHub Pages

1. Buka repository di GitHub
2. Pergi ke **Settings** → **Pages**
3. Di bagian **Source**, pilih **Deploy from a branch**
4. Pilih branch `main` dan folder `/ (root)` atau subfolder sesuai lokasi file
5. Klik **Save**
6. Tunggu beberapa menit, website akan live di:
   ```
   https://USERNAME.github.io/REPO-NAME/ai-love-message/
   ```

### 3. Selesai! 🎉

Website langsung bisa dipakai tanpa setup backend apapun.

## 🔑 Cara Mendapatkan API Key Gemini

1. Buka [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Login dengan akun Google
3. Klik **Create API Key**
4. Pilih project atau buat baru
5. Copy API key yang muncul

### Memasukkan API Key

Buka file `script.js`, ganti value di baris ini:

```javascript
const GEMINI_API_KEY = 'YOUR_API_KEY_HERE';
```

## 🧪 Cara Test Lokal

```bash
# Pakai live server sederhana
npx serve .
# atau
python -m http.server 8000
# atau
php -S localhost:8000
```

Buka `http://localhost:8000` di browser.

## 🔧 Konfigurasi

### Mengganti Model Gemini

Buka `script.js`, ubah baris:
```javascript
const GEMINI_MODEL = 'gemini-2.0-flash';
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

## 💡 Tips

- Link shareable menyimpan data di URL (base64 encoded), tidak perlu database
- Pesan terakhir otomatis tersimpan di browser (localStorage)
- Jika AI gagal/lambat, website tetap menampilkan pesan template yang bagus
- Tombol kejutan menampilkan animasi emoji celebration

## 📄 Lisensi

Dibuat dengan 💖 - Bebas digunakan dan dimodifikasi untuk keperluan personal.

---

*Sebarkan cinta, bukan kebencian ✨*
