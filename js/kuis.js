// ===== NersLab - Kuis Keperawatan =====

const quizDB = {
    kmb: [
        {
            q: 'Pasien post-operasi appendektomi mengeluh nyeri skala 7. Intervensi keperawatan prioritas adalah...',
            options: ['Mengajarkan teknik distraksi', 'Kolaborasi pemberian analgetik', 'Mengkaji tanda vital', 'Memberikan posisi nyaman'],
            answer: 1,
            explanation: 'Pada nyeri skala 7 (berat), prioritas adalah kolaborasi pemberian analgetik untuk menurunkan nyeri secara cepat. Teknik non-farmakologis bisa diberikan sebagai pendamping.'
        },
        {
            q: 'Tanda dan gejala hipoglikemia pada pasien diabetes melitus adalah...',
            options: ['Poliuria, polidipsi, polifagi', 'Gemetar, keringat dingin, pusing, takikardia', 'Kussmaul breathing, dehidrasi', 'Edema, oliguria, hipertensi'],
            answer: 1,
            explanation: 'Hipoglikemia (GDS <70 mg/dL) ditandai dengan gemetar, keringat dingin, pusing, takikardia, lemas, dan bisa penurunan kesadaran. Poliuria/polidipsi adalah tanda hiperglikemia.'
        },
        {
            q: 'Posisi yang tepat untuk pasien dengan sesak napas (orthopnea) adalah...',
            options: ['Supinasi', 'Trendelenburg', 'Semi-Fowler atau Fowler', 'Pronasi'],
            answer: 2,
            explanation: 'Posisi Semi-Fowler (30-45 derajat) atau Fowler (45-60 derajat) membantu ekspansi paru optimal dan mengurangi sesak napas dengan memanfaatkan gravitasi.'
        },
        {
            q: 'Pada pasien gagal ginjal kronik, diet yang dianjurkan adalah...',
            options: ['Tinggi protein, rendah kalium', 'Rendah protein, rendah kalium, rendah natrium', 'Tinggi kalium, tinggi natrium', 'Tinggi protein, tinggi natrium'],
            answer: 1,
            explanation: 'Pasien GGK memerlukan diet rendah protein (mengurangi beban ginjal), rendah kalium (mencegah hiperkalemia), dan rendah natrium (mencegah retensi cairan dan hipertensi).'
        },
        {
            q: 'Tanda Virchow Triad yang meningkatkan risiko Deep Vein Thrombosis (DVT) meliputi...',
            options: ['Hipertensi, diabetes, obesitas', 'Stasis vena, cedera endotel, hiperkoagulabilitas', 'Demam, leukositosis, nyeri', 'Edema, sianosis, takikardia'],
            answer: 1,
            explanation: 'Virchow Triad terdiri dari: stasis vena (immobilisasi), cedera endotel pembuluh darah, dan hiperkoagulabilitas darah. Ketiganya meningkatkan risiko pembentukan trombus.'
        }
    ],
    anak: [
        {
            q: 'Tanda dehidrasi berat pada anak menurut WHO adalah...',
            options: ['Mata cekung, turgor kulit kembali lambat >2 detik, letargis', 'Demam tinggi, muntah, diare', 'Nafsu makan turun, rewel, batuk', 'Edema, oliguria, hipertensi'],
            answer: 0,
            explanation: 'Tanda dehidrasi berat WHO: mata sangat cekung, turgor kulit kembali sangat lambat (>2 detik), letargis/tidak sadar, tidak bisa minum. Memerlukan rehidrasi IV segera.'
        },
        {
            q: 'Dosis Paracetamol untuk anak adalah...',
            options: ['5-8 mg/kgBB/kali', '10-15 mg/kgBB/kali', '20-25 mg/kgBB/kali', '1-3 mg/kgBB/kali'],
            answer: 1,
            explanation: 'Dosis Paracetamol anak: 10-15 mg/kgBB/kali, dapat diberikan setiap 4-6 jam, maksimal 5 kali/hari atau 60 mg/kgBB/hari.'
        },
        {
            q: 'Pada anak dengan DHF, pemantauan fase kritis dilakukan pada hari ke...',
            options: ['Hari ke-1 sampai ke-2', 'Hari ke-3 sampai ke-7 (saat suhu turun)', 'Hari ke-8 sampai ke-10', 'Hari ke-14'],
            answer: 1,
            explanation: 'Fase kritis DHF terjadi saat transisi demam ke afebris (hari ke-3 sampai ke-7). Saat suhu turun, risiko syok meningkat karena kebocoran plasma. Monitoring ketat sangat penting.'
        },
        {
            q: 'Tanda distres pernapasan pada bayi/anak yang perlu diwaspadai adalah...',
            options: ['Retraksi dinding dada, napas cuping hidung, grunting', 'Batuk ringan tanpa demam', 'Tidur nyenyak, nafsu makan baik', 'Menangis kuat, aktif bergerak'],
            answer: 0,
            explanation: 'Tanda distres napas pada anak: retraksi (cekungan interkostal/subkostal), napas cuping hidung, grunting (merintih), takipnea, dan sianosis. Memerlukan intervensi segera.'
        },
        {
            q: 'Pemberian ORS (Oralit) pada anak diare tanpa dehidrasi menurut WHO adalah...',
            options: ['50-100 ml setiap BAB cair (usia <2 tahun)', 'Hanya jika anak minta minum', 'Tidak perlu, cukup ASI saja', '500 ml sekaligus setiap 4 jam'],
            answer: 0,
            explanation: 'WHO merekomendasikan: anak <2 tahun diberi 50-100 ml ORS tiap BAB cair, anak >2 tahun diberi 100-200 ml tiap BAB cair. Tujuannya mencegah dehidrasi.'
        }
    ],
    maternitas: [
        {
            q: 'Tanda bahaya kehamilan yang memerlukan penanganan segera adalah...',
            options: ['Mual ringan di pagi hari', 'Perdarahan pervaginam, kejang, pandangan kabur', 'Sering buang air kecil trimester 1', 'Nyeri pinggang ringan'],
            answer: 1,
            explanation: 'Tanda bahaya kehamilan: perdarahan pervaginam, kejang, pandangan kabur (tanda preeklampsia), demam tinggi, air ketuban pecah, gerakan janin berkurang. Memerlukan rujukan segera.'
        },
        {
            q: 'Pemberian MgSO4 pada preeklampsia berat, tanda toksisitas yang harus dipantau adalah...',
            options: ['Refleks patella hilang, RR <16x/mnt, oliguria', 'Demam, batuk, pilek', 'Nafsu makan meningkat, BAK lancar', 'Tekanan darah naik, sakit kepala'],
            answer: 0,
            explanation: 'Tanda toksisitas MgSO4: refleks patella menghilang (tanda awal), depresi pernapasan (RR <16x/mnt), oliguria (<30ml/jam). Jika muncul, hentikan MgSO4 dan berikan antidotum Calcium Gluconas.'
        },
        {
            q: 'Inisiasi Menyusu Dini (IMD) idealnya dilakukan dalam waktu...',
            options: ['6 jam setelah lahir', '1 jam pertama setelah lahir', '24 jam setelah lahir', 'Setelah bayi dimandikan'],
            answer: 1,
            explanation: 'IMD dilakukan dalam 1 jam pertama setelah lahir (golden hour). Bayi diletakkan di dada ibu skin-to-skin dan dibiarkan mencari puting sendiri. Ini meningkatkan keberhasilan menyusui dan bonding.'
        },
        {
            q: 'Involusi uterus normal post-partum, TFU (Tinggi Fundus Uteri) setelah 1 minggu berada di...',
            options: ['Setinggi pusat', 'Pertengahan pusat-simfisis', 'Tidak teraba di atas simfisis', 'Di atas pusat'],
            answer: 1,
            explanation: 'Involusi uterus: hari 1 setinggi pusat, hari 7 pertengahan pusat-simfisis, hari 14 tidak teraba di atas simfisis. Jika involusi terhambat, curigai subinvolusi (retensio sisa plasenta, infeksi).'
        },
        {
            q: 'Kontrasepsi yang boleh digunakan ibu menyusui eksklusif dalam 6 bulan pertama adalah...',
            options: ['Pil KB kombinasi', 'MAL (Metode Amenorea Laktasi), kondom, atau pil progestin', 'Tidak ada yang aman', 'Hanya kondom saja'],
            answer: 1,
            explanation: 'Ibu menyusui 6 bulan pertama bisa menggunakan MAL (jika memenuhi syarat), kondom, atau pil progestin (mini-pill). Pil KB kombinasi dihindari karena estrogen mengurangi produksi ASI.'
        }
    ],
    jiwa: [
        {
            q: 'Komunikasi terapeutik yang tepat pada pasien halusinasi adalah...',
            options: ['Ikut membenarkan halusinasi pasien', 'Mengalihkan perhatian ke realitas, menanyakan isi halusinasi tanpa menghakimi', 'Memarahi dan menyangkal isi halusinasi', 'Mendiamkan pasien dan pergi'],
            answer: 1,
            explanation: 'Prinsip komunikasi pada pasien halusinasi: tidak menyangkal atau membenarkan, tanyakan isi halusinasi, bantu pasien mengenali halusinasi, lalu alihkan ke aktivitas nyata (distraksi).'
        },
        {
            q: 'Tanda dan gejala risiko bunuh diri yang memerlukan pengawasan ketat adalah...',
            options: ['Pasien mengatakan ingin mati, memiliki rencana spesifik, memberikan barang berharga', 'Pasien menangis saat ditinggal keluarga', 'Pasien menolak makan satu kali', 'Pasien sulit tidur satu malam'],
            answer: 0,
            explanation: 'Risiko tinggi bunuh diri: verbalisasi ingin mati, rencana spesifik (cara, waktu, tempat), membagikan barang berharga, menarik diri, riwayat percobaan sebelumnya. Perlu pengawasan 1:1 dan lingkungan aman.'
        },
        {
            q: 'Strategi pelaksanaan (SP) untuk pasien dengan isolasi sosial tahap 1 adalah...',
            options: ['Langsung masukkan dalam kelompok besar', 'Membina hubungan saling percaya dan mengidentifikasi penyebab isolasi', 'Memberikan obat antidepresan', 'Melatih berinteraksi dengan kelompok besar'],
            answer: 1,
            explanation: 'SP 1 Isolasi Sosial: bina hubungan saling percaya, identifikasi penyebab dan keuntungan/kerugian berinteraksi. SP selanjutnya bertahap: interaksi 1 orang, kelompok kecil, lalu kelompok besar.'
        },
        {
            q: 'Pada pasien perilaku kekerasan, tindakan keperawatan awal yang paling tepat adalah...',
            options: ['Langsung restrain fisik', 'Teknik de-eskalasi verbal, jaga jarak aman, tawarkan pilihan', 'Tinggalkan pasien sendirian', 'Balas dengan nada tegas dan keras'],
            answer: 1,
            explanation: 'Prioritas pada perilaku kekerasan: de-eskalasi verbal (bicara tenang, jaga jarak aman, tawarkan pilihan, validasi perasaan). Restrain fisik adalah pilihan terakhir jika de-eskalasi gagal dan ada bahaya.'
        },
        {
            q: 'Efek samping ekstrapiramidal dari obat antipsikotik tipikal meliputi...',
            options: ['Diare, mual, muntah', 'Distonia, akatisia, parkinsonism, tardive dyskinesia', 'Hiperglikemia, penambahan berat badan', 'Insomnia, sakit kepala ringan'],
            answer: 1,
            explanation: 'Efek samping ekstrapiramidal (EPS) antipsikotik tipikal: distonia akut (kaku otot), akatisia (gelisah), parkinsonism (tremor, rigiditas), tardive dyskinesia (gerakan involunter). Diatasi dengan Trihexyphenidyl.'
        }
    ],
    komunitas: [
        {
            q: 'Dalam keperawatan komunitas, pendekatan yang digunakan untuk mengidentifikasi masalah kesehatan masyarakat adalah...',
            options: ['Community as partner model', 'Model medis individual', 'Model psikoanalisis', 'Model behavioristik'],
            answer: 0,
            explanation: 'Community as Partner Model (Anderson & McFarlane) memandang komunitas sebagai partner. Mengkaji 8 subsistem: lingkungan fisik, pendidikan, keamanan, transportasi, politik/pemerintahan, kesehatan/sosial, komunikasi, ekonomi.'
        },
        {
            q: 'Program PHBS (Perilaku Hidup Bersih dan Sehat) di tatanan rumah tangga meliputi...indikator.',
            options: ['5 indikator', '10 indikator', '15 indikator', '20 indikator'],
            answer: 1,
            explanation: '10 indikator PHBS Rumah Tangga: persalinan oleh nakes, ASI eksklusif, timbang balita, air bersih, cuci tangan dengan sabun, jamban sehat, berantas jentik, makan buah-sayur, aktivitas fisik, tidak merokok.'
        },
        {
            q: 'Surveilans epidemiologi bertujuan untuk...',
            options: ['Mengobati pasien individu', 'Mengumpulkan, menganalisis, dan menyebarkan data kesehatan untuk pengambilan keputusan', 'Membuat resep obat', 'Melakukan operasi pada pasien'],
            answer: 1,
            explanation: 'Surveilans epidemiologi: pengumpulan data kesehatan secara sistematis, analisis, interpretasi, dan diseminasi informasi untuk perencanaan, implementasi, dan evaluasi program kesehatan masyarakat.'
        },
        {
            q: 'Imunisasi dasar lengkap untuk bayi 0-11 bulan di Indonesia meliputi...',
            options: ['Hanya BCG dan Polio', 'HB-0, BCG, Polio, DPT-HB-Hib, Campak/MR', 'Hanya Campak saja', 'Tidak ada imunisasi wajib'],
            answer: 1,
            explanation: 'Imunisasi dasar lengkap: HB-0 (0-24 jam), BCG + Polio 1 (1 bulan), DPT-HB-Hib 1 + Polio 2 (2 bulan), DPT-HB-Hib 2 + Polio 3 (3 bulan), DPT-HB-Hib 3 + Polio 4 + IPV (4 bulan), Campak/MR (9 bulan).'
        },
        {
            q: 'Peran perawat komunitas sebagai educator meliputi...',
            options: ['Memberikan resep obat', 'Memberikan penyuluhan kesehatan dan edukasi untuk perubahan perilaku', 'Melakukan operasi', 'Hanya merawat pasien di RS'],
            answer: 1,
            explanation: 'Peran educator: memberikan penyuluhan kesehatan, edukasi individu/kelompok/masyarakat untuk meningkatkan pengetahuan, sikap, dan perilaku kesehatan. Menggunakan metode ceramah, diskusi, demonstrasi, dll.'
        }
    ],
    gadar: [
        {
            q: 'Urutan tindakan pada Basic Life Support (BLS) dewasa menurut AHA adalah...',
            options: ['Airway - Breathing - Compression', 'Compression - Airway - Breathing (C-A-B)', 'Breathing - Airway - Compression', 'Defibrillation - Compression - Airway'],
            answer: 1,
            explanation: 'AHA merekomendasikan C-A-B: mulai dari Compression (30 kompresi dada), Airway (buka jalan napas), Breathing (2 napas bantuan). Rasio 30:2. Kompresi dulu karena sirkulasi lebih kritis.'
        },
        {
            q: 'Kecepatan kompresi dada pada CPR dewasa yang benar adalah...',
            options: ['60-80 kali/menit', '100-120 kali/menit', '140-160 kali/menit', '80-100 kali/menit'],
            answer: 1,
            explanation: 'Kompresi dada CPR dewasa: kecepatan 100-120x/menit, kedalaman 5-6 cm, full recoil, minimal interupsi. Push hard, push fast, allow complete recoil.'
        },
        {
            q: 'Pada triase bencana, warna merah menunjukkan...',
            options: ['Pasien meninggal', 'Prioritas tinggi, perlu penanganan segera', 'Prioritas rendah, luka ringan', 'Bisa ditunda penanganannya'],
            answer: 1,
            explanation: 'Warna triase: MERAH (immediate/prioritas 1, mengancam jiwa), KUNING (delayed/prioritas 2, bisa ditunda), HIJAU (minor/prioritas 3, luka ringan), HITAM (deceased/meninggal atau tidak tertolong).'
        },
        {
            q: 'Tanda syok anafilaksis yang khas adalah...',
            options: ['Demam tinggi dan batuk', 'Urtikaria, angioedema, bronkospasme, hipotensi, takikardia', 'Nyeri dada kiri menjalar ke lengan', 'Kejang dan penurunan kesadaran perlahan'],
            answer: 1,
            explanation: 'Syok anafilaksis: onset cepat setelah paparan alergen, urtikaria/gatal, angioedema (bengkak wajah/bibir), bronkospasme (sesak, wheezing), hipotensi, takikardia. Penanganan: Epinephrine IM segera.'
        },
        {
            q: 'Obat pertama yang diberikan pada henti jantung (cardiac arrest) adalah...',
            options: ['Atropine', 'Epinephrine (Adrenaline) 1 mg IV', 'Amiodarone', 'Lidocaine'],
            answer: 1,
            explanation: 'Epinephrine 1 mg IV/IO diberikan setiap 3-5 menit pada cardiac arrest (semua ritme). Meningkatkan tekanan perfusi koroner dan serebral. Amiodarone diberikan pada VF/VT refrakter.'
        }
    ],
    farmakologi: [
        {
            q: 'Efek samping utama penggunaan kortikosteroid jangka panjang adalah...',
            options: ['Hipoglikemia', 'Cushing syndrome, osteoporosis, hiperglikemia, imunosupresi', 'Bradikardia', 'Hipotermia'],
            answer: 1,
            explanation: 'Kortikosteroid jangka panjang: Cushing syndrome (moon face, buffalo hump), osteoporosis, hiperglikemia, imunosupresi, gangguan penyembuhan luka, ulkus peptik, katarak. Perlu tapering off saat penghentian.'
        },
        {
            q: 'Antidotum untuk overdosis Paracetamol adalah...',
            options: ['Naloxone', 'N-Acetylcysteine (NAC)', 'Flumazenil', 'Atropine'],
            answer: 1,
            explanation: 'N-Acetylcysteine (NAC) adalah antidotum Paracetamol. Bekerja menggantikan glutathion yang habis untuk menetralisir metabolit toksik (NAPQI). Efektif jika diberikan dalam 8-10 jam setelah overdosis.'
        },
        {
            q: 'Obat golongan ACE Inhibitor yang sering digunakan untuk hipertensi memiliki efek samping khas berupa...',
            options: ['Edema perifer', 'Batuk kering', 'Konstipasi', 'Hiperkalemia berat'],
            answer: 1,
            explanation: 'ACE Inhibitor (Captopril, Ramipril, Lisinopril) efek samping khas: batuk kering (akibat akumulasi bradikinin). Jika tidak ditoleransi, bisa diganti ARB (Losartan, Valsartan) yang tidak menyebabkan batuk.'
        },
        {
            q: 'Pada pemberian Digoxin, tanda toksisitas yang harus diwaspadai adalah...',
            options: ['Hipertensi dan takikardia', 'Mual, muntah, gangguan penglihatan (halo kuning), bradikardia', 'Diare dan demam', 'Nyeri sendi dan ruam kulit'],
            answer: 1,
            explanation: 'Toksisitas Digoxin: mual, muntah, anoreksia, gangguan penglihatan (halo kuning/hijau), bradikardia, aritmia. Cek nadi sebelum pemberian (tahan jika <60x/mnt). Kadar terapeutik: 0.8-2.0 ng/mL.'
        },
        {
            q: 'Prinsip "6 Benar" dalam pemberian obat meliputi...',
            options: ['Benar pasien, obat, dosis, waktu, cara, dokumentasi', 'Benar pasien, obat, dosis, waktu, cara, edukasi', 'Benar obat, dosis, cara, resep, label, expired', 'Benar warna, bentuk, rasa, ukuran, bau, tekstur'],
            answer: 0,
            explanation: '6 Benar pemberian obat: Benar Pasien, Benar Obat, Benar Dosis, Benar Waktu, Benar Cara/Rute, Benar Dokumentasi. Beberapa referensi menambahkan: benar edukasi, benar kadaluarsa, benar indikasi.'
        }
    ],
    dasar: [
        {
            q: 'Teknik aseptik dalam pemasangan kateter urine bertujuan untuk...',
            options: ['Mempercepat prosedur', 'Mencegah infeksi saluran kemih (ISK) terkait kateter', 'Mengurangi nyeri pasien', 'Memudahkan fiksasi kateter'],
            answer: 1,
            explanation: 'Teknik aseptik pada kateterisasi: mencegah CAUTI (Catheter-Associated UTI). Meliputi: cuci tangan, sarung tangan steril, antiseptik area perineum, pertahankan sterilitas kateter, sistem drainase tertutup.'
        },
        {
            q: 'Waktu yang tepat untuk mencuci tangan menurut WHO (5 Moments) adalah...',
            options: ['Hanya sebelum menyentuh pasien', 'Sebelum kontak pasien, sebelum tindakan aseptik, setelah terpapar cairan tubuh, setelah kontak pasien, setelah kontak lingkungan pasien', 'Hanya setelah dari toilet', 'Sebelum dan sesudah makan saja'],
            answer: 1,
            explanation: 'WHO 5 Moments Hand Hygiene: 1) Sebelum kontak pasien, 2) Sebelum tindakan aseptik, 3) Setelah terpapar cairan tubuh, 4) Setelah kontak pasien, 5) Setelah kontak lingkungan sekitar pasien.'
        },
        {
            q: 'Nilai normal tekanan darah dewasa menurut klasifikasi adalah...',
            options: ['140/90 mmHg', '< 120/80 mmHg (normal)', '160/100 mmHg', '100/60 mmHg'],
            answer: 1,
            explanation: 'Klasifikasi TD dewasa: Normal <120/80 mmHg, Elevated 120-129/<80, Hipertensi Stage 1: 130-139/80-89, Hipertensi Stage 2: >=140/>=90 mmHg.'
        },
        {
            q: 'Dalam pengkajian nyeri, metode PQRST meliputi...',
            options: ['Pain, Quality, Region, Severity, Time', 'Provocative/Palliative, Quality, Region/Radiation, Severity, Timing', 'Pressure, Quantity, Rate, Stable, Temperature', 'Physical, Questionable, Rapid, Slow, Terminal'],
            answer: 1,
            explanation: 'PQRST: P (Provocative/Palliative - pencetus/pereda), Q (Quality - kualitas nyeri), R (Region/Radiation - lokasi/penjalaran), S (Severity - skala 0-10), T (Timing - onset, durasi, frekuensi).'
        },
        {
            q: 'Tujuan pemberian oksigen melalui nasal kanul dengan flow rate 2-4 L/menit menghasilkan FiO2 sekitar...',
            options: ['100%', '24-36%', '60-80%', '90-95%'],
            answer: 1,
            explanation: 'Nasal kanul: setiap 1 L/mnt menambah FiO2 sekitar 4%. Flow 1L=24%, 2L=28%, 3L=32%, 4L=36%, 5L=40%, 6L=44% (maksimal). Untuk FiO2 lebih tinggi, gunakan simple mask atau NRM.'
        }
    ]
};



// ===== Quiz Logic =====
let currentQuiz = [];
let currentIndex = 0;
let score = 0;
let mode = 'latihan';
let userAnswers = [];

const quizSetup = document.getElementById('quizSetup');
const quizProgress = document.getElementById('quizProgress');
const questionCard = document.getElementById('questionCard');
const quizResult = document.getElementById('quizResult');
const quizCategory = document.getElementById('quizCategory');
const quizMode = document.getElementById('quizMode');
const btnStartQuiz = document.getElementById('btnStartQuiz');

// Enable start button when category selected
quizCategory.addEventListener('change', function() {
    btnStartQuiz.disabled = !this.value;
});

// Start Quiz
btnStartQuiz.addEventListener('click', function() {
    const category = quizCategory.value;
    mode = quizMode.value;

    if (!category || !quizDB[category]) return;

    // Shuffle questions
    currentQuiz = [...quizDB[category]].sort(() => Math.random() - 0.5);
    currentIndex = 0;
    score = 0;
    userAnswers = [];

    quizSetup.style.display = 'none';
    quizProgress.style.display = 'block';
    questionCard.style.display = 'block';
    quizResult.style.display = 'none';

    document.getElementById('quizInfo').textContent = getCategoryName(category);
    showQuestion();
});

function getCategoryName(key) {
    const names = {
        kmb: 'KMB', anak: 'Anak', maternitas: 'Maternitas',
        jiwa: 'Jiwa', komunitas: 'Komunitas', gadar: 'Gawat Darurat',
        farmakologi: 'Farmakologi', dasar: 'Kep. Dasar'
    };
    return names[key] || key;
}

function showQuestion() {
    const q = currentQuiz[currentIndex];
    const total = currentQuiz.length;

    document.getElementById('quizCounter').textContent = `Soal ${currentIndex + 1} / ${total}`;
    document.getElementById('quizProgressBar').style.width = `${((currentIndex) / total) * 100}%`;

    document.getElementById('questionText').innerHTML = `<strong>Soal ${currentIndex + 1}:</strong> ${q.q}`;

    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + i)}</span> ${opt}`;
        btn.addEventListener('click', () => selectAnswer(i, btn));
        optionsContainer.appendChild(btn);
    });

    document.getElementById('explanationBox').style.display = 'none';
    document.getElementById('btnNext').style.display = 'none';
}

function selectAnswer(index, btn) {
    const q = currentQuiz[currentIndex];
    const options = document.querySelectorAll('.quiz-option');
    const isCorrect = index === q.answer;

    // Disable all options
    options.forEach(o => o.classList.add('disabled'));

    userAnswers.push({ question: q.q, selected: index, correct: q.answer, isCorrect });

    if (isCorrect) {
        score++;
        btn.classList.add('correct');
    } else {
        btn.classList.add('wrong');
        options[q.answer].classList.add('correct');
    }

    // Show explanation in latihan mode
    if (mode === 'latihan') {
        const expBox = document.getElementById('explanationBox');
        expBox.innerHTML = `<strong>${isCorrect ? '<i class="fas fa-check-circle" style="color:green;"></i> Benar!' : '<i class="fas fa-times-circle" style="color:red;"></i> Salah.'}</strong><br><br><strong>Pembahasan:</strong> ${q.explanation}`;
        expBox.style.display = 'block';
    }

    document.getElementById('btnNext').style.display = 'inline-flex';
}

// Next Question
document.getElementById('btnNext').addEventListener('click', function() {
    currentIndex++;
    if (currentIndex < currentQuiz.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    quizProgress.style.display = 'none';
    questionCard.style.display = 'none';
    quizResult.style.display = 'block';

    const total = currentQuiz.length;
    const percentage = Math.round((score / total) * 100);

    document.getElementById('finalScore').textContent = `${score}/${total}`;
    document.getElementById('resultBar').style.width = `${percentage}%`;

    let grade = '';
    if (percentage >= 80) grade = '<span style="color:green;">Excellent! Pertahankan!</span>';
    else if (percentage >= 60) grade = '<span style="color:orange;">Bagus! Terus belajar.</span>';
    else grade = '<span style="color:red;">Perlu belajar lebih. Semangat!</span>';

    document.getElementById('resultSummary').innerHTML = `<p>Persentase: <strong>${percentage}%</strong></p><p>${grade}</p>`;

    // Detailed review
    let detailHTML = '<h4 style="margin-bottom:12px;">Review Jawaban:</h4>';
    userAnswers.forEach((ua, i) => {
        const icon = ua.isCorrect ? '<i class="fas fa-check-circle" style="color:green;"></i>' : '<i class="fas fa-times-circle" style="color:red;"></i>';
        detailHTML += `<div class="checklist-item ${ua.isCorrect ? '' : ''}">
            ${icon} <span><strong>Soal ${i + 1}:</strong> ${ua.isCorrect ? 'Benar' : 'Salah (jawaban: ' + String.fromCharCode(65 + ua.correct) + ')'}</span>
        </div>`;
    });
    document.getElementById('resultDetails').innerHTML = detailHTML;
}

// Retry
document.getElementById('btnRetry').addEventListener('click', function() {
    currentIndex = 0;
    score = 0;
    userAnswers = [];
    currentQuiz.sort(() => Math.random() - 0.5);
    quizProgress.style.display = 'block';
    questionCard.style.display = 'block';
    quizResult.style.display = 'none';
    showQuestion();
});

// Back to menu
document.getElementById('btnBackToMenu').addEventListener('click', function() {
    quizSetup.style.display = 'block';
    quizProgress.style.display = 'none';
    questionCard.style.display = 'none';
    quizResult.style.display = 'none';
    quizCategory.value = '';
    btnStartQuiz.disabled = true;
});
