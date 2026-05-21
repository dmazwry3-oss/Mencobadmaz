// ===== NersLab - Askep Case Generator =====

const casesDB = {
    dewasa: [
        {
            id: 'nyeri-akut',
            title: 'Nyeri Akut Post-Appendektomi',
            scenario: 'Tn. A, 35 tahun, masuk RS dengan keluhan nyeri perut kanan bawah sejak 2 hari lalu. Telah dilakukan appendektomi laparoskopi hari ini. Pasien mengeluh nyeri pada area operasi dengan skala 7/10, tampak meringis, TD 140/90 mmHg, N 98x/mnt, S 37.2C, RR 22x/mnt.',
            patientInfo: 'Nama: Tn. A | Usia: 35 thn | Dx Medis: Post Appendektomi Laparoskopi H-0',
            answer: {
                dataSubjektif: 'Pasien mengatakan nyeri pada area operasi, nyeri seperti ditusuk-tusuk, skala nyeri 7/10, nyeri bertambah saat bergerak.',
                dataObjektif: 'Tampak meringis, memegang area operasi, TD 140/90 mmHg, N 98x/mnt, S 37.2C, RR 22x/mnt, terdapat luka operasi di kuadran kanan bawah abdomen.',
                masalahKeperawatan: 'Nyeri Akut berhubungan dengan agen pencedera fisik (prosedur operasi) dibuktikan dengan pasien mengeluh nyeri skala 7/10, tampak meringis, TD meningkat.',
                tujuanLuaran: 'Setelah dilakukan tindakan keperawatan 1x24 jam, tingkat nyeri menurun dengan kriteria hasil: keluhan nyeri menurun, meringis menurun, skala nyeri turun menjadi 3/10, TTV dalam batas normal.',
                intervensi: '1. Identifikasi lokasi, karakteristik, durasi, frekuensi nyeri\n2. Berikan teknik nonfarmakologis (napas dalam, distraksi)\n3. Kolaborasi pemberian analgetik\n4. Atur posisi nyaman\n5. Edukasi penyebab dan strategi meredakan nyeri',
                rasional: '1. Pengkajian nyeri komprehensif untuk menentukan intervensi tepat\n2. Teknik nonfarmakologis membantu mengurangi persepsi nyeri\n3. Analgetik menghambat transmisi nyeri\n4. Posisi nyaman mengurangi tekanan pada area luka\n5. Edukasi meningkatkan kepatuhan dan koping pasien',
                evalS: 'Pasien mengatakan nyeri berkurang, skala 3/10',
                evalO: 'Meringis berkurang, TD 120/80 mmHg, N 82x/mnt, pasien tampak lebih rileks',
                evalA: 'Masalah nyeri akut teratasi sebagian',
                evalP: 'Lanjutkan intervensi, monitor TTV per 4 jam, evaluasi nyeri berkala'
            }
        },
        {
            id: 'hipertensi',
            title: 'Hipertensi Grade II',
            scenario: 'Ny. B, 55 tahun, datang ke Puskesmas dengan keluhan sakit kepala dan pusing sejak 3 hari. Riwayat hipertensi tidak terkontrol. TD 180/110 mmHg, N 88x/mnt, S 36.5C, RR 20x/mnt. Pasien mengaku sering makan asin dan jarang olahraga.',
            patientInfo: 'Nama: Ny. B | Usia: 55 thn | Dx Medis: Hipertensi Grade II',
            answer: {
                dataSubjektif: 'Pasien mengeluh sakit kepala dan pusing sejak 3 hari, riwayat hipertensi, sering makan asin, jarang olahraga.',
                dataObjektif: 'TD 180/110 mmHg, N 88x/mnt, S 36.5C, RR 20x/mnt, tampak memegang kepala, wajah kemerahan.',
                masalahKeperawatan: 'Risiko Perfusi Serebral Tidak Efektif berhubungan dengan hipertensi dibuktikan dengan TD 180/110 mmHg, keluhan sakit kepala dan pusing.',
                tujuanLuaran: 'Setelah dilakukan tindakan keperawatan 3x24 jam, perfusi serebral meningkat dengan kriteria hasil: sakit kepala menurun, TD dalam rentang normal, pusing berkurang.',
                intervensi: '1. Monitor TTV terutama tekanan darah\n2. Monitor tanda-tanda peningkatan TIK\n3. Kolaborasi pemberian antihipertensi\n4. Edukasi diet rendah garam (DASH)\n5. Anjurkan aktivitas fisik teratur\n6. Atur posisi kepala elevasi 30 derajat',
                rasional: '1. Memantau perubahan hemodinamik\n2. Deteksi dini komplikasi neurologis\n3. Menurunkan TD secara farmakologis\n4. Diet rendah garam membantu kontrol TD\n5. Olahraga teratur menurunkan TD sistolik\n6. Elevasi kepala membantu drainase vena serebral',
                evalS: 'Pasien mengatakan sakit kepala berkurang, pusing berkurang',
                evalO: 'TD 150/95 mmHg, N 80x/mnt, tampak lebih nyaman',
                evalA: 'Masalah risiko perfusi serebral teratasi sebagian, TD masih di atas normal',
                evalP: 'Lanjutkan terapi antihipertensi, edukasi kepatuhan minum obat, kontrol diet'
            }
        }
    ],
    anak: [
        {
            id: 'demam-anak',
            title: 'Demam pada Anak (DHF)',
            scenario: 'An. C, 8 tahun, BB 25 kg, dirawat dengan diagnosis DHF hari ke-3. Suhu 39.5C, pasien tampak lemah, nafsu makan menurun, trombosit 85.000/uL, Ht 42%. Ibu pasien mengatakan anak rewel dan tidak mau minum.',
            patientInfo: 'Nama: An. C | Usia: 8 thn | BB: 25 kg | Dx Medis: DHF Grade II H-3',
            answer: {
                dataSubjektif: 'Ibu mengatakan anak demam sejak 3 hari, rewel, tidak mau makan dan minum, badan lemas.',
                dataObjektif: 'S 39.5C, tampak lemah, mukosa bibir kering, turgor kulit menurun, trombosit 85.000/uL, Ht 42%, nafsu makan menurun, akral hangat.',
                masalahKeperawatan: 'Hipertermia berhubungan dengan proses infeksi virus dengue dibuktikan dengan suhu 39.5C, tampak lemah, akral hangat.',
                tujuanLuaran: 'Setelah dilakukan tindakan keperawatan 1x24 jam, termoregulasi membaik dengan kriteria hasil: suhu tubuh dalam rentang normal (36.5-37.5C), menggigil menurun, kulit merah menurun.',
                intervensi: '1. Monitor suhu tubuh per 4 jam\n2. Berikan kompres hangat pada lipatan tubuh\n3. Anjurkan minum banyak (sesuai kebutuhan cairan anak)\n4. Kolaborasi pemberian antipiretik (Paracetamol 10-15mg/kgBB)\n5. Monitor trombosit dan hematokrit\n6. Longgarkan pakaian',
                rasional: '1. Memantau perkembangan suhu tubuh\n2. Kompres hangat membantu vasodilatasi dan pengeluaran panas\n3. Cairan adekuat mencegah dehidrasi akibat demam\n4. Antipiretik menurunkan set-point suhu di hipotalamus\n5. Trombosit dan Ht sebagai indikator keparahan DHF\n6. Pakaian longgar membantu evaporasi panas',
                evalS: 'Ibu mengatakan anak sudah mau minum, demam berkurang',
                evalO: 'S 37.8C, anak tampak lebih aktif, minum 800ml/hari, trombosit 90.000/uL',
                evalA: 'Masalah hipertermia teratasi sebagian',
                evalP: 'Lanjutkan monitoring TTV, cairan adekuat, cek lab ulang besok'
            }
        }
    ],
    maternitas: [
        {
            id: 'preeklampsia',
            title: 'Preeklampsia pada Ibu Hamil',
            scenario: 'Ny. D, 28 tahun, G1P0A0 hamil 34 minggu, masuk RS dengan keluhan sakit kepala hebat, pandangan kabur, dan kaki bengkak. TD 160/100 mmHg, protein urine +2, BB naik 3 kg dalam 1 minggu, edema pada ekstremitas bawah.',
            patientInfo: 'Nama: Ny. D | Usia: 28 thn | G1P0A0 UK 34 minggu | Dx Medis: Preeklampsia Berat',
            answer: {
                dataSubjektif: 'Pasien mengeluh sakit kepala hebat, pandangan kabur, kaki bengkak membesar dalam 1 minggu terakhir.',
                dataObjektif: 'TD 160/100 mmHg, protein urine +2, edema ekstremitas bawah grade 2, BB naik 3 kg/minggu, refleks patella meningkat, UK 34 minggu.',
                masalahKeperawatan: 'Risiko Cedera pada Ibu dan Janin berhubungan dengan preeklampsia berat dibuktikan dengan TD 160/100 mmHg, proteinuria +2, edema, keluhan pandangan kabur.',
                tujuanLuaran: 'Setelah dilakukan tindakan keperawatan 1x24 jam, risiko cedera menurun dengan kriteria hasil: TD dalam batas yang dapat diterima, tidak ada tanda eklampsia (kejang), kondisi janin stabil.',
                intervensi: '1. Monitor TD per 2 jam\n2. Monitor tanda-tanda eklampsia (kejang, penurunan kesadaran)\n3. Kolaborasi pemberian MgSO4 sesuai protokol\n4. Bed rest dengan posisi miring kiri\n5. Monitor DJJ dan gerakan janin\n6. Monitor output urine per 24 jam\n7. Edukasi tanda bahaya kehamilan',
                rasional: '1. Deteksi dini perburukan hipertensi\n2. Eklampsia merupakan komplikasi yang mengancam jiwa\n3. MgSO4 mencegah kejang pada preeklampsia berat\n4. Posisi miring kiri meningkatkan perfusi uteroplasenta\n5. Pemantauan kesejahteraan janin\n6. Output urine < 30ml/jam menandakan gangguan ginjal\n7. Meningkatkan kewaspadaan pasien dan keluarga',
                evalS: 'Pasien mengatakan sakit kepala sedikit berkurang, pandangan membaik',
                evalO: 'TD 150/95 mmHg, tidak ada kejang, DJJ 140x/mnt regular, urine output 50ml/jam',
                evalA: 'Risiko cedera terkontrol, belum sepenuhnya teratasi',
                evalP: 'Lanjutkan monitoring ketat, evaluasi pemberian MgSO4, rencana terminasi kehamilan jika kondisi memburuk'
            }
        }
    ],
    lansia: [
        {
            id: 'risiko-jatuh',
            title: 'Risiko Jatuh pada Lansia',
            scenario: 'Tn. E, 72 tahun, dirawat di bangsal dengan riwayat jatuh di kamar mandi 2 hari lalu. Mengalami fraktur colles sinistra. Pasien menggunakan kacamata, berjalan lambat, sering pusing saat berdiri. TD 130/85 mmHg (duduk), 110/70 mmHg (berdiri). Skor Morse Fall Scale: 55 (risiko tinggi).',
            patientInfo: 'Nama: Tn. E | Usia: 72 thn | Dx Medis: Fraktur Colles Sinistra + Hipotensi Ortostatik',
            answer: {
                dataSubjektif: 'Pasien mengatakan sering pusing saat berdiri dari duduk, penglihatan kurang jelas, takut jatuh lagi.',
                dataObjektif: 'Usia 72 tahun, riwayat jatuh, TD ortostatik (turun >20 mmHg saat berdiri), menggunakan kacamata, gaya berjalan lambat dan tidak stabil, skor Morse 55 (risiko tinggi), fraktur colles sinistra dalam gips.',
                masalahKeperawatan: 'Risiko Jatuh berhubungan dengan hipotensi ortostatik, gangguan penglihatan, dan riwayat jatuh dibuktikan dengan skor Morse 55, perubahan TD ortostatik, gaya berjalan tidak stabil.',
                tujuanLuaran: 'Setelah dilakukan tindakan keperawatan selama perawatan, risiko jatuh menurun dengan kriteria hasil: tidak terjadi jatuh berulang, pasien mampu mobilisasi aman dengan bantuan.',
                intervensi: '1. Pasang gelang risiko jatuh (kuning)\n2. Pasang pagar tempat tidur\n3. Edukasi pasien berdiri perlahan (bertahap)\n4. Pastikan lantai kering dan pencahayaan cukup\n5. Letakkan bel dan kebutuhan dalam jangkauan\n6. Anjurkan menggunakan alas kaki anti-slip\n7. Kolaborasi fisioterapi untuk latihan keseimbangan',
                rasional: '1. Identifikasi visual risiko jatuh bagi petugas\n2. Mencegah jatuh dari tempat tidur\n3. Mencegah hipotensi ortostatik\n4. Mengurangi faktor risiko lingkungan\n5. Mencegah pasien bangkit sendiri tanpa bantuan\n6. Mengurangi risiko terpeleset\n7. Meningkatkan kekuatan dan keseimbangan',
                evalS: 'Pasien mengatakan sudah lebih hati-hati saat berdiri, pusing berkurang jika berdiri perlahan',
                evalO: 'Tidak ada kejadian jatuh selama perawatan, pasien mampu berdiri dengan bantuan walker, TD ortostatik membaik',
                evalA: 'Risiko jatuh terkontrol, pasien kooperatif dengan edukasi',
                evalP: 'Lanjutkan edukasi keluarga, rencana pulang dengan modifikasi lingkungan rumah'
            }
        }
    ],
    gawatdarurat: [
        {
            id: 'syok-hipovolemik',
            title: 'Syok Hipovolemik',
            scenario: 'Tn. F, 40 tahun, dibawa ke IGD setelah kecelakaan motor. Perdarahan aktif dari luka terbuka di paha kanan. TD 80/50 mmHg, N 130x/mnt (lemah), RR 28x/mnt, S 36C, akral dingin, pucat, CRT >3 detik, kesadaran somnolen, estimasi kehilangan darah 1500ml.',
            patientInfo: 'Nama: Tn. F | Usia: 40 thn | Dx Medis: Syok Hipovolemik ec Trauma',
            answer: {
                dataSubjektif: 'Pasien tidak dapat memberikan keterangan (kesadaran somnolen). Pengantar mengatakan pasien kecelakaan motor 30 menit lalu dengan perdarahan banyak.',
                dataObjektif: 'TD 80/50 mmHg, N 130x/mnt (lemah, cepat), RR 28x/mnt, S 36C, GCS E3V3M5=11, akral dingin dan pucat, CRT >3 detik, luka terbuka paha kanan dengan perdarahan aktif, estimasi blood loss 1500ml.',
                masalahKeperawatan: 'Hipovolemia berhubungan dengan kehilangan cairan/darah aktif dibuktikan dengan TD 80/50 mmHg, nadi lemah dan cepat, akral dingin, CRT >3 detik, perdarahan aktif.',
                tujuanLuaran: 'Setelah dilakukan tindakan keperawatan 1 jam pertama, status cairan membaik dengan kriteria hasil: TD >90/60 mmHg, nadi kuat teraba, akral hangat, CRT <3 detik, perdarahan terkontrol.',
                intervensi: '1. Hentikan perdarahan dengan balut tekan\n2. Pasang IV line 2 jalur dengan cairan kristaloid (RL/NaCl) tetes cepat\n3. Monitor TTV per 15 menit\n4. Kolaborasi pemeriksaan darah lengkap dan crossmatch\n5. Kolaborasi transfusi darah\n6. Posisikan Trendelenburg (kaki lebih tinggi)\n7. Pasang kateter urine, monitor output\n8. Jaga kehangatan tubuh pasien',
                rasional: '1. Menghentikan kehilangan darah lebih lanjut\n2. Resusitasi cairan untuk mengganti volume sirkulasi\n3. Evaluasi ketat respons terhadap resusitasi\n4. Menentukan kebutuhan transfusi dan golongan darah\n5. Mengganti komponen darah yang hilang\n6. Meningkatkan venous return ke jantung\n7. Output urine indikator perfusi ginjal (target >0.5ml/kg/jam)\n8. Mencegah hipotermia yang memperburuk koagulopati',
                evalS: 'Pasien mulai sadar, mengeluh nyeri di paha kanan',
                evalO: 'TD 95/65 mmHg, N 110x/mnt, CRT 2 detik, akral mulai hangat, perdarahan terkontrol, urine output 30ml/jam, GCS E4V4M6=14',
                evalA: 'Hipovolemia teratasi sebagian, hemodinamik mulai stabil',
                evalP: 'Lanjutkan resusitasi cairan, rencana operasi debridement, monitoring ketat ICU'
            }
        }
    ]
};



// ===== DOM Elements =====
const caseCategory = document.getElementById('caseCategory');
const caseList = document.getElementById('caseList');
const caseButtons = document.getElementById('caseButtons');
const caseDisplay = document.getElementById('caseDisplay');
const caseScenario = document.getElementById('caseScenario');
const patientInfo = document.getElementById('patientInfo');
const askepForm = document.getElementById('askepForm');
const answerDisplay = document.getElementById('answerDisplay');
const answerContent = document.getElementById('answerContent');
const feedbackDisplay = document.getElementById('feedbackDisplay');
const feedbackContent = document.getElementById('feedbackContent');

let currentCase = null;

// ===== Event: Category Selection =====
caseCategory.addEventListener('change', function() {
    const category = this.value;
    caseList.style.display = 'none';
    caseDisplay.style.display = 'none';
    askepForm.style.display = 'none';
    answerDisplay.style.display = 'none';
    feedbackDisplay.style.display = 'none';
    caseButtons.innerHTML = '';

    if (category && casesDB[category]) {
        caseList.style.display = 'block';
        casesDB[category].forEach(c => {
            const btn = document.createElement('button');
            btn.className = 'btn btn-outline btn-sm';
            btn.textContent = c.title;
            btn.addEventListener('click', () => loadCase(c));
            caseButtons.appendChild(btn);
        });
    }
});

// ===== Load Case =====
function loadCase(caseData) {
    currentCase = caseData;
    caseScenario.innerHTML = `<strong>${caseData.title}</strong><br><br>${caseData.scenario}`;
    patientInfo.innerHTML = `<p class="alert alert-warning"><i class="fas fa-id-card"></i> ${caseData.patientInfo}</p>`;
    caseDisplay.style.display = 'block';
    askepForm.style.display = 'block';
    answerDisplay.style.display = 'none';
    feedbackDisplay.style.display = 'none';
    resetForm();
}

// ===== Reset Form =====
function resetForm() {
    document.getElementById('dataSubjektif').value = '';
    document.getElementById('dataObjektif').value = '';
    document.getElementById('masalahKeperawatan').value = '';
    document.getElementById('tujuanLuaran').value = '';
    document.getElementById('intervensi').value = '';
    document.getElementById('rasional').value = '';
    document.getElementById('evalS').value = '';
    document.getElementById('evalO').value = '';
    document.getElementById('evalA').value = '';
    document.getElementById('evalP').value = '';
    answerDisplay.style.display = 'none';
    feedbackDisplay.style.display = 'none';
}

// ===== Check Answer =====
document.getElementById('btnCheck').addEventListener('click', function() {
    if (!currentCase) return;

    const fields = [
        { id: 'dataSubjektif', label: 'Data Subjektif' },
        { id: 'dataObjektif', label: 'Data Objektif' },
        { id: 'masalahKeperawatan', label: 'Diagnosis Keperawatan' },
        { id: 'tujuanLuaran', label: 'Luaran' },
        { id: 'intervensi', label: 'Intervensi' },
        { id: 'rasional', label: 'Rasional' },
        { id: 'evalS', label: 'Evaluasi S' },
        { id: 'evalO', label: 'Evaluasi O' },
        { id: 'evalA', label: 'Evaluasi A' },
        { id: 'evalP', label: 'Evaluasi P' }
    ];

    let filled = 0;
    let empty = [];
    fields.forEach(f => {
        if (document.getElementById(f.id).value.trim().length > 0) {
            filled++;
        } else {
            empty.push(f.label);
        }
    });

    const percentage = Math.round((filled / fields.length) * 100);
    let feedbackHTML = `<div class="score-display">
        <div class="score-number">${percentage}%</div>
        <div class="score-label">Kelengkapan Pengisian</div>
    </div>
    <div class="progress-bar"><div class="progress-fill" style="width:${percentage}%"></div></div>`;

    if (empty.length > 0) {
        feedbackHTML += `<div class="alert alert-warning" style="margin-top:16px;">
            <strong>Bagian yang belum diisi:</strong> ${empty.join(', ')}
        </div>`;
    }

    if (percentage === 100) {
        feedbackHTML += `<div class="alert alert-success" style="margin-top:16px;">
            <i class="fas fa-check-circle"></i> Semua bagian sudah terisi! Bandingkan dengan contoh jawaban untuk evaluasi kualitas konten.
        </div>`;
    }

    feedbackContent.innerHTML = feedbackHTML;
    feedbackDisplay.style.display = 'block';
    feedbackDisplay.scrollIntoView({ behavior: 'smooth' });
});

// ===== Show Answer =====
document.getElementById('btnShowAnswer').addEventListener('click', function() {
    if (!currentCase) return;
    const a = currentCase.answer;

    answerContent.innerHTML = `
        <div class="alert alert-info" style="margin-bottom:16px;">
            <i class="fas fa-info-circle"></i> Ini adalah contoh jawaban untuk referensi belajar. Jawaban Anda mungkin berbeda dan tetap benar selama sesuai dengan kondisi kasus.
        </div>
        <h4>1. Pengkajian</h4>
        <p><strong>Data Subjektif:</strong><br>${a.dataSubjektif}</p>
        <p><strong>Data Objektif:</strong><br>${a.dataObjektif}</p>
        <hr style="margin:16px 0;">
        <h4>2. Diagnosis Keperawatan</h4>
        <p>${a.masalahKeperawatan}</p>
        <hr style="margin:16px 0;">
        <h4>3. Luaran Keperawatan</h4>
        <p>${a.tujuanLuaran}</p>
        <hr style="margin:16px 0;">
        <h4>4. Intervensi & Rasional</h4>
        <p><strong>Intervensi:</strong><br>${a.intervensi.replace(/\n/g, '<br>')}</p>
        <p><strong>Rasional:</strong><br>${a.rasional.replace(/\n/g, '<br>')}</p>
        <hr style="margin:16px 0;">
        <h4>5. Evaluasi SOAP</h4>
        <p><strong>S:</strong> ${a.evalS}</p>
        <p><strong>O:</strong> ${a.evalO}</p>
        <p><strong>A:</strong> ${a.evalA}</p>
        <p><strong>P:</strong> ${a.evalP}</p>
    `;

    answerDisplay.style.display = 'block';
    answerDisplay.scrollIntoView({ behavior: 'smooth' });
});

// ===== Reset Button =====
document.getElementById('btnReset').addEventListener('click', resetForm);
