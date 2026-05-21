// ===== NersLab v2 - Kuis & Tryout UKOM =====

function showToast(msg, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    const icons = { success: 'check-circle', error: 'times-circle', info: 'info-circle', warning: 'exclamation-triangle' };
    toast.innerHTML = `<i class="fas fa-${icons[type]}"></i> <span>${msg}</span>`;
    container.appendChild(toast);
    setTimeout(() => { toast.classList.add('hiding'); setTimeout(() => toast.remove(), 300); }, 3000);
}

// ===== Quiz Database =====
const quizDB = {
    kmb: [
        { q: 'Pasien post-operasi appendektomi mengeluh nyeri skala 7. Intervensi prioritas adalah...', options: ['Mengajarkan teknik distraksi', 'Kolaborasi pemberian analgetik', 'Mengkaji tanda vital', 'Memberikan posisi nyaman'], answer: 1, explanation: 'Nyeri skala 7 (berat) memerlukan analgetik segera. Teknik non-farmakologis sebagai pendamping.' },
        { q: 'Tanda hipoglikemia pada pasien DM adalah...', options: ['Poliuria, polidipsi, polifagi', 'Gemetar, keringat dingin, pusing, takikardia', 'Kussmaul breathing, dehidrasi', 'Edema, oliguria, hipertensi'], answer: 1, explanation: 'Hipoglikemia (GDS <70 mg/dL): gemetar, keringat dingin, pusing, takikardia, lemas. Poliuria/polidipsi = hiperglikemia.' },
        { q: 'Posisi tepat untuk pasien orthopnea adalah...', options: ['Supinasi', 'Trendelenburg', 'Semi-Fowler atau Fowler', 'Pronasi'], answer: 2, explanation: 'Semi-Fowler (30-45°) atau Fowler (45-60°) membantu ekspansi paru optimal dengan gravitasi.' },
        { q: 'Diet pasien gagal ginjal kronik adalah...', options: ['Tinggi protein, rendah kalium', 'Rendah protein, rendah kalium, rendah natrium', 'Tinggi kalium, tinggi natrium', 'Tinggi protein, tinggi natrium'], answer: 1, explanation: 'GGK: rendah protein (kurangi beban ginjal), rendah kalium (cegah hiperkalemia), rendah natrium (cegah retensi cairan).' },
        { q: 'Virchow Triad yang meningkatkan risiko DVT meliputi...', options: ['Hipertensi, diabetes, obesitas', 'Stasis vena, cedera endotel, hiperkoagulabilitas', 'Demam, leukositosis, nyeri', 'Edema, sianosis, takikardia'], answer: 1, explanation: 'Virchow Triad: stasis vena (immobilisasi), cedera endotel, hiperkoagulabilitas. Ketiganya meningkatkan risiko trombus.' }
    ],

    anak: [
        { q: 'Tanda dehidrasi berat pada anak menurut WHO adalah...', options: ['Mata cekung, turgor lambat >2 detik, letargis', 'Demam tinggi, muntah, diare', 'Nafsu makan turun, rewel, batuk', 'Edema, oliguria, hipertensi'], answer: 0, explanation: 'Dehidrasi berat WHO: mata sangat cekung, turgor sangat lambat (>2 detik), letargis/tidak sadar. Perlu rehidrasi IV segera.' },
        { q: 'Dosis Paracetamol untuk anak adalah...', options: ['5-8 mg/kgBB/kali', '10-15 mg/kgBB/kali', '20-25 mg/kgBB/kali', '1-3 mg/kgBB/kali'], answer: 1, explanation: 'Paracetamol anak: 10-15 mg/kgBB/kali, setiap 4-6 jam, max 5x/hari atau 60 mg/kgBB/hari.' },
        { q: 'Fase kritis DHF terjadi pada hari ke...', options: ['Hari 1-2', 'Hari 3-7 (saat suhu turun)', 'Hari 8-10', 'Hari 14'], answer: 1, explanation: 'Fase kritis DHF: transisi demam ke afebris (hari 3-7). Risiko syok meningkat karena kebocoran plasma.' },
        { q: 'Tanda distres pernapasan pada bayi adalah...', options: ['Retraksi dinding dada, napas cuping hidung, grunting', 'Batuk ringan tanpa demam', 'Tidur nyenyak, nafsu makan baik', 'Menangis kuat, aktif bergerak'], answer: 0, explanation: 'Distres napas: retraksi (interkostal/subkostal), napas cuping hidung, grunting, takipnea, sianosis. Perlu intervensi segera.' },
        { q: 'ORS pada anak diare tanpa dehidrasi (<2 tahun) diberikan...', options: ['50-100 ml per BAB cair', 'Hanya jika anak minta minum', 'Tidak perlu, cukup ASI', '500 ml sekaligus tiap 4 jam'], answer: 0, explanation: 'WHO: anak <2 tahun 50-100 ml ORS tiap BAB cair, anak >2 tahun 100-200 ml tiap BAB cair.' }
    ],
    maternitas: [
        { q: 'Tanda bahaya kehamilan yang perlu penanganan segera adalah...', options: ['Mual ringan pagi hari', 'Perdarahan pervaginam, kejang, pandangan kabur', 'Sering BAK trimester 1', 'Nyeri pinggang ringan'], answer: 1, explanation: 'Tanda bahaya: perdarahan pervaginam, kejang, pandangan kabur (preeklampsia), demam tinggi, ketuban pecah, gerakan janin berkurang.' },
        { q: 'Tanda toksisitas MgSO4 pada preeklampsia adalah...', options: ['Refleks patella hilang, RR <16x/mnt, oliguria', 'Demam, batuk, pilek', 'Nafsu makan meningkat, BAK lancar', 'TD naik, sakit kepala'], answer: 0, explanation: 'Toksisitas MgSO4: refleks patella hilang, RR <16x/mnt, oliguria (<30ml/jam). Antidotum: Calcium Gluconas 10%.' },
        { q: 'IMD idealnya dilakukan dalam waktu...', options: ['6 jam setelah lahir', '1 jam pertama (golden hour)', '24 jam setelah lahir', 'Setelah bayi dimandikan'], answer: 1, explanation: 'IMD dalam 1 jam pertama (golden hour). Bayi skin-to-skin di dada ibu, mencari puting sendiri. Meningkatkan bonding & keberhasilan ASI.' },
        { q: 'TFU 1 minggu post-partum berada di...', options: ['Setinggi pusat', 'Pertengahan pusat-simfisis', 'Tidak teraba di atas simfisis', 'Di atas pusat'], answer: 1, explanation: 'Involusi uterus: hari 1 = pusat, hari 7 = pertengahan pusat-simfisis, hari 14 = tidak teraba. Jika lambat = subinvolusi.' },
        { q: 'Kontrasepsi untuk ibu menyusui eksklusif 6 bulan pertama adalah...', options: ['Pil KB kombinasi', 'MAL, kondom, atau pil progestin', 'Tidak ada yang aman', 'Hanya kondom'], answer: 1, explanation: 'Ibu menyusui: MAL (jika syarat terpenuhi), kondom, pil progestin (mini-pill). KB kombinasi dihindari karena estrogen kurangi ASI.' }
    ],

    jiwa: [
        { q: 'Komunikasi terapeutik pada pasien halusinasi yang tepat adalah...', options: ['Ikut membenarkan halusinasi', 'Mengalihkan ke realitas, tanyakan isi tanpa menghakimi', 'Memarahi dan menyangkal', 'Mendiamkan dan pergi'], answer: 1, explanation: 'Tidak menyangkal/membenarkan. Tanyakan isi halusinasi, bantu mengenali, alihkan ke aktivitas nyata.' },
        { q: 'Tanda risiko bunuh diri yang perlu pengawasan ketat adalah...', options: ['Verbalisasi ingin mati, rencana spesifik, memberikan barang berharga', 'Menangis saat ditinggal keluarga', 'Menolak makan sekali', 'Sulit tidur satu malam'], answer: 0, explanation: 'Risiko tinggi: verbalisasi ingin mati, rencana spesifik, membagikan barang berharga. Perlu pengawasan 1:1.' },
        { q: 'SP 1 isolasi sosial adalah...', options: ['Langsung kelompok besar', 'Bina trust dan identifikasi penyebab isolasi', 'Berikan antidepresan', 'Latih interaksi kelompok besar'], answer: 1, explanation: 'SP 1: bina trust, identifikasi penyebab dan keuntungan/kerugian berinteraksi. SP selanjutnya bertahap.' },
        { q: 'Tindakan awal pada perilaku kekerasan adalah...', options: ['Langsung restrain', 'De-eskalasi verbal, jarak aman, tawarkan pilihan', 'Tinggalkan sendirian', 'Balas dengan nada keras'], answer: 1, explanation: 'De-eskalasi verbal prioritas: bicara tenang, jarak aman, tawarkan pilihan. Restrain = pilihan terakhir.' },
        { q: 'Efek samping ekstrapiramidal antipsikotik tipikal meliputi...', options: ['Diare, mual, muntah', 'Distonia, akatisia, parkinsonism, tardive dyskinesia', 'Hiperglikemia, BB naik', 'Insomnia, sakit kepala'], answer: 1, explanation: 'EPS: distonia akut, akatisia (gelisah), parkinsonism (tremor, rigiditas), tardive dyskinesia. Atasi dengan Trihexyphenidyl.' }
    ],
    komunitas: [
        { q: 'Model yang memandang komunitas sebagai partner dalam keperawatan komunitas adalah...', options: ['Community as Partner Model', 'Model medis individual', 'Model psikoanalisis', 'Model behavioristik'], answer: 0, explanation: 'Community as Partner Model (Anderson & McFarlane): mengkaji 8 subsistem komunitas.' },
        { q: 'Indikator PHBS rumah tangga berjumlah...', options: ['5', '10', '15', '20'], answer: 1, explanation: '10 indikator: persalinan nakes, ASI eksklusif, timbang balita, air bersih, cuci tangan sabun, jamban sehat, berantas jentik, buah-sayur, aktivitas fisik, tidak merokok.' },
        { q: 'Surveilans epidemiologi bertujuan untuk...', options: ['Mengobati pasien individual', 'Mengumpulkan dan menganalisis data kesehatan untuk keputusan', 'Membuat resep obat', 'Melakukan operasi'], answer: 1, explanation: 'Surveilans: pengumpulan data sistematis, analisis, interpretasi, diseminasi untuk program kesehatan masyarakat.' },
        { q: 'Imunisasi dasar lengkap bayi 0-11 bulan meliputi...', options: ['Hanya BCG dan Polio', 'HB-0, BCG, Polio, DPT-HB-Hib, Campak/MR', 'Hanya Campak', 'Tidak ada yang wajib'], answer: 1, explanation: 'Imunisasi dasar: HB-0 (0-24jam), BCG+Polio1 (1bln), DPT-HB-Hib+Polio (2,3,4bln), Campak/MR (9bln).' },
        { q: 'Peran perawat komunitas sebagai educator meliputi...', options: ['Memberikan resep obat', 'Penyuluhan kesehatan untuk perubahan perilaku', 'Melakukan operasi', 'Hanya merawat di RS'], answer: 1, explanation: 'Educator: penyuluhan kesehatan, edukasi individu/kelompok/masyarakat untuk perubahan perilaku sehat.' }
    ],

    gerontik: [
        { q: 'Perubahan fisiologis pada lansia yang meningkatkan risiko jatuh adalah...', options: ['Peningkatan massa otot', 'Penurunan visus, propriosepsi, dan keseimbangan', 'Peningkatan refleks', 'Peningkatan densitas tulang'], answer: 1, explanation: 'Lansia: penurunan visus, propriosepsi, keseimbangan, massa otot, dan densitas tulang. Semua meningkatkan risiko jatuh.' },
        { q: 'Instrumen pengkajian risiko jatuh pada lansia di RS adalah...', options: ['Skala Morse Fall Scale', 'Skala Norton', 'Skala Braden', 'Skala Glasgow'], answer: 0, explanation: 'Morse Fall Scale: menilai riwayat jatuh, diagnosis sekunder, alat bantu jalan, terapi IV, gaya berjalan, status mental.' },
        { q: 'Penyebab tersering demensia pada lansia adalah...', options: ['Depresi', 'Alzheimer Disease', 'Stroke', 'Parkinson'], answer: 1, explanation: 'Alzheimer Disease (60-70% kasus demensia). Ditandai penurunan memori progresif, disorientasi, gangguan bahasa.' },
        { q: 'Kebutuhan protein pada lansia sehat per hari adalah...', options: ['0.5 g/kgBB', '0.8-1.0 g/kgBB', '2.0 g/kgBB', '3.0 g/kgBB'], answer: 1, explanation: 'Lansia sehat: 0.8-1.0 g/kgBB/hari. Cukup untuk mempertahankan massa otot tanpa membebani ginjal.' },
        { q: 'Teori penuaan "Free Radical Theory" menjelaskan bahwa...', options: ['Penuaan diprogram secara genetik', 'Radikal bebas merusak sel dan jaringan secara kumulatif', 'Penuaan disebabkan stres psikologis', 'Hormon menurun menyebabkan penuaan'], answer: 1, explanation: 'Free Radical Theory: radikal bebas (ROS) menyebabkan kerusakan oksidatif pada DNA, protein, lipid sel secara kumulatif.' }
    ],
    gadar: [
        { q: 'Urutan BLS dewasa menurut AHA adalah...', options: ['A-B-C', 'C-A-B (Compression-Airway-Breathing)', 'B-A-C', 'D-C-A'], answer: 1, explanation: 'AHA: C-A-B. Compression 30x dulu, Airway buka, Breathing 2 napas. Rasio 30:2. Sirkulasi prioritas.' },
        { q: 'Kecepatan kompresi CPR dewasa adalah...', options: ['60-80x/mnt', '100-120x/mnt', '140-160x/mnt', '80-100x/mnt'], answer: 1, explanation: 'CPR dewasa: 100-120x/mnt, kedalaman 5-6 cm, full recoil, minimal interupsi.' },
        { q: 'Warna triase MERAH menunjukkan...', options: ['Meninggal', 'Prioritas tinggi, penanganan segera', 'Luka ringan', 'Bisa ditunda'], answer: 1, explanation: 'MERAH=immediate (mengancam jiwa), KUNING=delayed, HIJAU=minor, HITAM=deceased.' },
        { q: 'Tanda syok anafilaksis khas adalah...', options: ['Demam dan batuk', 'Urtikaria, angioedema, bronkospasme, hipotensi', 'Nyeri dada kiri', 'Kejang perlahan'], answer: 1, explanation: 'Anafilaksis: onset cepat, urtikaria, angioedema, bronkospasme (wheezing), hipotensi. Penanganan: Epinephrine IM.' },
        { q: 'Obat pertama pada cardiac arrest adalah...', options: ['Atropine', 'Epinephrine 1 mg IV', 'Amiodarone', 'Lidocaine'], answer: 1, explanation: 'Epinephrine 1 mg IV/IO tiap 3-5 menit pada semua ritme cardiac arrest. Meningkatkan perfusi koroner dan serebral.' }
    ],

    manajemen: [
        { q: 'Metode penugasan keperawatan yang paling profesional adalah...', options: ['Metode fungsional', 'Metode tim', 'Metode primary nursing', 'Metode kasus'], answer: 2, explanation: 'Primary nursing: satu perawat bertanggung jawab penuh 24 jam untuk pasien tertentu. Paling profesional dan holistik.' },
        { q: 'Komunikasi SBAR dalam handover meliputi...', options: ['Situation, Background, Assessment, Recommendation', 'Subject, Body, Analysis, Result', 'Simple, Brief, Accurate, Relevant', 'Standard, Basic, Advanced, Review'], answer: 0, explanation: 'SBAR: Situation (kondisi saat ini), Background (riwayat), Assessment (penilaian), Recommendation (saran tindakan).' },
        { q: 'Dalam manajemen konflik, pendekatan kolaborasi berarti...', options: ['Satu pihak menang, satu kalah', 'Kedua pihak mencari solusi win-win', 'Menghindari konflik', 'Satu pihak mengalah total'], answer: 1, explanation: 'Kolaborasi (win-win): kedua pihak bekerja sama mencari solusi yang memuaskan semua. Paling ideal tapi butuh waktu.' },
        { q: 'Patient safety goal yang berkaitan dengan identifikasi pasien minimal menggunakan...', options: ['1 identitas', '2 identitas (nama + tanggal lahir/MR)', '3 identitas', 'Hanya nomor kamar'], answer: 1, explanation: 'JCI/KARS: identifikasi pasien minimal 2 identitas (nama lengkap + tanggal lahir atau nomor rekam medis). Bukan nomor kamar.' },
        { q: 'Discharge planning idealnya dimulai sejak...', options: ['Hari terakhir rawat', 'Sejak pasien masuk RS (admission)', '1 jam sebelum pulang', 'Setelah dokter memutuskan pulang'], answer: 1, explanation: 'Discharge planning dimulai sejak admission. Perencanaan dini memastikan kontinuitas perawatan dan kesiapan pasien/keluarga.' }
    ],
    farmakologi: [
        { q: 'Efek samping kortikosteroid jangka panjang adalah...', options: ['Hipoglikemia', 'Cushing syndrome, osteoporosis, hiperglikemia, imunosupresi', 'Bradikardia', 'Hipotermia'], answer: 1, explanation: 'Kortikosteroid lama: Cushing (moon face), osteoporosis, hiperglikemia, imunosupresi, ulkus peptik. Perlu tapering off.' },
        { q: 'Antidotum overdosis Paracetamol adalah...', options: ['Naloxone', 'N-Acetylcysteine (NAC)', 'Flumazenil', 'Atropine'], answer: 1, explanation: 'NAC menggantikan glutathion untuk menetralisir metabolit toksik (NAPQI). Efektif dalam 8-10 jam post overdosis.' },
        { q: 'Efek samping khas ACE Inhibitor adalah...', options: ['Edema perifer', 'Batuk kering', 'Konstipasi', 'Hiperkalemia berat'], answer: 1, explanation: 'ACE Inhibitor (Captopril, Ramipril): batuk kering akibat akumulasi bradikinin. Ganti ARB jika tidak toleran.' },
        { q: 'Tanda toksisitas Digoxin adalah...', options: ['Hipertensi, takikardia', 'Mual, muntah, halo kuning, bradikardia', 'Diare, demam', 'Nyeri sendi, ruam'], answer: 1, explanation: 'Toksisitas Digoxin: mual, muntah, halo kuning/hijau, bradikardia, aritmia. Cek nadi sebelum pemberian (<60 = tahan).' },
        { q: 'Prinsip 6 Benar pemberian obat meliputi...', options: ['Pasien, obat, dosis, waktu, cara, dokumentasi', 'Pasien, obat, dosis, waktu, cara, edukasi', 'Obat, dosis, cara, resep, label, expired', 'Warna, bentuk, rasa, ukuran, bau, tekstur'], answer: 0, explanation: '6 Benar: Pasien, Obat, Dosis, Waktu, Cara/Rute, Dokumentasi. Beberapa tambahkan: edukasi, kadaluarsa, indikasi.' }
    ],

    etika: [
        { q: 'Prinsip etika keperawatan "non-maleficence" berarti...', options: ['Berbuat baik', 'Tidak merugikan/membahayakan pasien', 'Keadilan', 'Menghormati otonomi'], answer: 1, explanation: 'Non-maleficence: "do no harm" - tidak melakukan tindakan yang merugikan atau membahayakan pasien.' },
        { q: 'Informed consent harus memenuhi syarat...', options: ['Cukup tanda tangan saja', 'Informasi lengkap, pemahaman, sukarela, dan kompeten', 'Hanya persetujuan lisan', 'Hanya untuk operasi besar'], answer: 1, explanation: 'Informed consent: informasi lengkap tentang tindakan/risiko/alternatif, pasien paham, diberikan secara sukarela, pasien kompeten.' },
        { q: 'Perawat yang membocorkan rahasia medis pasien melanggar prinsip...', options: ['Beneficence', 'Confidentiality (kerahasiaan)', 'Justice', 'Veracity'], answer: 1, explanation: 'Confidentiality: kewajiban menjaga kerahasiaan informasi pasien. Pelanggaran dapat dituntut secara hukum dan etik.' },
        { q: 'Menurut UU Keperawatan No. 38/2014, praktik keperawatan mandiri memerlukan...', options: ['Hanya ijazah', 'STR (Surat Tanda Registrasi) dan SIPP', 'Hanya rekomendasi RS', 'Tidak ada persyaratan'], answer: 1, explanation: 'UU 38/2014: perawat praktik mandiri wajib memiliki STR dan SIPP (Surat Izin Praktik Perawat) yang masih berlaku.' },
        { q: 'Prinsip "autonomy" dalam etika keperawatan berarti...', options: ['Perawat bebas menentukan tindakan sendiri', 'Menghormati hak pasien untuk membuat keputusan sendiri', 'Memprioritaskan keluarga pasien', 'Mengikuti semua instruksi dokter'], answer: 1, explanation: 'Autonomy: menghormati hak pasien untuk membuat keputusan tentang perawatannya sendiri berdasarkan informasi yang cukup.' }
    ]
};


// ===== Quiz Logic =====
let currentQuiz = [];
let currentIndex = 0;
let score = 0;
let mode = 'latihan';
let userAnswers = [];
let questionTimer = null;
let timePerQuestion = 90;
let timeLeft = 0;

const categoryNames = { kmb:'KMB', anak:'Anak', maternitas:'Maternitas', jiwa:'Jiwa', komunitas:'Komunitas', gerontik:'Gerontik', gadar:'Gawat Darurat', manajemen:'Manajemen', farmakologi:'Farmakologi', etika:'Etika & Hukum' };

const quizSetup = document.getElementById('quizSetup');
const quizProgress = document.getElementById('quizProgress');
const questionCard = document.getElementById('questionCard');
const quizResult = document.getElementById('quizResult');
const quizCategory = document.getElementById('quizCategory');
const quizMode = document.getElementById('quizMode');
const btnStartQuiz = document.getElementById('btnStartQuiz');

// Show timer setting for tryout
quizMode.addEventListener('change', function() {
    document.getElementById('timerSetting').style.display = this.value === 'tryout' ? 'block' : 'none';
});

// Enable start button
quizCategory.addEventListener('change', function() { btnStartQuiz.disabled = !this.value; });

// Start Quiz
btnStartQuiz.addEventListener('click', function() {
    const cat = quizCategory.value;
    mode = quizMode.value;
    timePerQuestion = mode === 'tryout' ? parseInt(document.getElementById('quizTime').value) : 0;
    if (!cat || !quizDB[cat]) return;

    currentQuiz = [...quizDB[cat]].sort(() => Math.random() - 0.5);
    currentIndex = 0;
    score = 0;
    userAnswers = [];

    quizSetup.style.display = 'none';
    quizProgress.style.display = 'block';
    questionCard.style.display = 'block';
    quizResult.style.display = 'none';

    document.getElementById('quizInfo').textContent = categoryNames[cat] || cat;
    showToast(`Kuis ${categoryNames[cat]} dimulai! ${currentQuiz.length} soal.`, 'info');
    showQuestion();
});


function showQuestion() {
    const q = currentQuiz[currentIndex];
    const total = currentQuiz.length;
    document.getElementById('quizCounter').textContent = `Soal ${currentIndex + 1} / ${total}`;
    document.getElementById('quizProgressBar').style.width = `${((currentIndex) / total) * 100}%`;
    document.getElementById('questionText').innerHTML = `<strong>Soal ${currentIndex + 1}:</strong> ${q.q}`;

    const container = document.getElementById('optionsContainer');
    container.innerHTML = '';
    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + i)}</span> ${opt}`;
        btn.addEventListener('click', () => selectAnswer(i, btn));
        container.appendChild(btn);
    });

    document.getElementById('explanationBox').style.display = 'none';
    document.getElementById('btnNext').style.display = 'none';

    // Timer for tryout mode
    const timerBadge = document.getElementById('quizTimer');
    if (mode === 'tryout' && timePerQuestion > 0) {
        timeLeft = timePerQuestion;
        timerBadge.style.display = 'inline-flex';
        timerBadge.textContent = `${timeLeft}s`;
        clearInterval(questionTimer);
        questionTimer = setInterval(() => {
            timeLeft--;
            timerBadge.textContent = `${timeLeft}s`;
            if (timeLeft <= 10) timerBadge.style.background = '#fee2e2';
            if (timeLeft <= 0) { clearInterval(questionTimer); autoSkip(); }
        }, 1000);
    } else {
        timerBadge.style.display = 'none';
    }
}

function autoSkip() {
    const q = currentQuiz[currentIndex];
    userAnswers.push({ question: q.q, selected: -1, correct: q.answer, isCorrect: false });
    document.querySelectorAll('.quiz-option').forEach(o => o.classList.add('disabled'));
    document.querySelectorAll('.quiz-option')[q.answer].classList.add('correct');
    if (mode === 'latihan') {
        document.getElementById('explanationBox').innerHTML = `<i class="fas fa-clock"></i> <strong>Waktu habis!</strong><br><br><strong>Pembahasan:</strong> ${q.explanation}`;
        document.getElementById('explanationBox').style.display = 'flex';
    }
    document.getElementById('btnNext').style.display = 'inline-flex';
    showToast('Waktu habis untuk soal ini!', 'warning');
}

function selectAnswer(index, btn) {
    clearInterval(questionTimer);
    const q = currentQuiz[currentIndex];
    const options = document.querySelectorAll('.quiz-option');
    const isCorrect = index === q.answer;

    options.forEach(o => o.classList.add('disabled'));
    userAnswers.push({ question: q.q, selected: index, correct: q.answer, isCorrect, options: q.options, explanation: q.explanation });

    if (isCorrect) { score++; btn.classList.add('correct'); }
    else { btn.classList.add('wrong'); options[q.answer].classList.add('correct'); }

    // Show explanation
    if (mode === 'latihan') {
        const expBox = document.getElementById('explanationBox');
        let expHTML = isCorrect
            ? `<i class="fas fa-check-circle" style="color:var(--success);"></i> <div><strong>Benar!</strong><br><br><strong>Pembahasan:</strong> ${q.explanation}</div>`
            : `<i class="fas fa-times-circle" style="color:var(--danger);"></i> <div><strong>Salah.</strong> Jawaban benar: <strong>${String.fromCharCode(65 + q.answer)}. ${q.options[q.answer]}</strong><br><br><strong>Pembahasan:</strong> ${q.explanation}</div>`;
        expBox.innerHTML = expHTML;
        expBox.style.display = 'flex';
        expBox.className = `alert ${isCorrect ? 'alert-success' : 'alert-danger'}`;
    }
    document.getElementById('btnNext').style.display = 'inline-flex';
}


// Next Question
document.getElementById('btnNext').addEventListener('click', function() {
    currentIndex++;
    if (currentIndex < currentQuiz.length) showQuestion();
    else showResult();
});

function showResult() {
    clearInterval(questionTimer);
    quizProgress.style.display = 'none';
    questionCard.style.display = 'none';
    quizResult.style.display = 'block';
    document.getElementById('quizTimer').style.display = 'none';

    const total = currentQuiz.length;
    const pct = Math.round((score / total) * 100);

    document.getElementById('finalScore').textContent = `${score}/${total}`;
    document.getElementById('resultBar').style.width = `${pct}%`;

    let grade = '';
    if (pct >= 80) grade = '<div class="alert alert-success"><i class="fas fa-trophy"></i><span><strong>Excellent!</strong> Anda menguasai materi ini dengan sangat baik. Pertahankan!</span></div>';
    else if (pct >= 60) grade = '<div class="alert alert-warning"><i class="fas fa-thumbs-up"></i><span><strong>Cukup Baik.</strong> Masih ada ruang untuk perbaikan. Fokus di soal yang salah.</span></div>';
    else grade = '<div class="alert alert-danger"><i class="fas fa-book-reader"></i><span><strong>Perlu Belajar Lagi.</strong> Perbanyak latihan dan baca pembahasan dengan teliti. Semangat!</span></div>';
    document.getElementById('resultGrade').innerHTML = grade;

    // Stats
    const wrong = total - score;
    const skipped = userAnswers.filter(a => a.selected === -1).length;
    document.getElementById('resultStats').innerHTML = `
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:12px;text-align:center;">
            <div style="background:var(--success-light);padding:14px;border-radius:var(--radius-sm);">
                <div style="font-size:1.5rem;font-weight:800;color:var(--success);">${score}</div>
                <div style="font-size:0.75rem;color:var(--gray-600);">Benar</div>
            </div>
            <div style="background:var(--danger-light);padding:14px;border-radius:var(--radius-sm);">
                <div style="font-size:1.5rem;font-weight:800;color:var(--danger);">${wrong - skipped}</div>
                <div style="font-size:0.75rem;color:var(--gray-600);">Salah</div>
            </div>
            <div style="background:var(--warning-light);padding:14px;border-radius:var(--radius-sm);">
                <div style="font-size:1.5rem;font-weight:800;color:var(--warning);">${skipped}</div>
                <div style="font-size:0.75rem;color:var(--gray-600);">Terlewat</div>
            </div>
            <div style="background:var(--primary-light);padding:14px;border-radius:var(--radius-sm);">
                <div style="font-size:1.5rem;font-weight:800;color:var(--primary);">${pct}%</div>
                <div style="font-size:0.75rem;color:var(--gray-600);">Persentase</div>
            </div>
        </div>
    `;

    // Detail review
    let detailHTML = '<h4 style="font-size:0.9rem;margin-bottom:12px;color:var(--gray-700);margin-top:8px;">Review Jawaban:</h4>';
    userAnswers.forEach((ua, i) => {
        const icon = ua.isCorrect ? '<i class="fas fa-check-circle" style="color:var(--success);"></i>' : '<i class="fas fa-times-circle" style="color:var(--danger);"></i>';
        const detail = ua.isCorrect ? 'Benar' : (ua.selected === -1 ? 'Tidak dijawab' : `Salah (jawaban: ${String.fromCharCode(65 + ua.correct)})`);
        detailHTML += `<div class="checklist-item" style="font-size:0.85rem;">${icon}<span><strong>Soal ${i+1}:</strong> ${detail}</span></div>`;
    });
    document.getElementById('resultDetails').innerHTML = detailHTML;

    // Save stats to localStorage
    saveQuizHistory(quizCategory.value, score, total, pct);
    showToast(`Kuis selesai! Skor: ${pct}%`, pct >= 60 ? 'success' : 'warning');
}

function saveQuizHistory(cat, score, total, pct) {
    const history = JSON.parse(localStorage.getItem('nerslab_quiz_history') || '[]');
    history.push({ category: cat, score, total, percentage: pct, date: new Date().toISOString() });
    localStorage.setItem('nerslab_quiz_history', JSON.stringify(history));
}

// Retry
document.getElementById('btnRetry').addEventListener('click', function() {
    currentIndex = 0; score = 0; userAnswers = [];
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
