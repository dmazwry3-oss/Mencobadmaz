// ===== NersLab v2 - Askep Case Generator =====

// Toast utility
function showToast(msg, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    const icons = { success: 'check-circle', error: 'times-circle', info: 'info-circle', warning: 'exclamation-triangle' };
    toast.innerHTML = `<i class="fas fa-${icons[type] || 'info-circle'}"></i> <span>${msg}</span>`;
    container.appendChild(toast);
    setTimeout(() => { toast.classList.add('hiding'); setTimeout(() => toast.remove(), 300); }, 3000);
}

// ===== Cases Database =====
const casesDB = {
    dewasa: [
        {
            id: 'nyeri-akut', title: 'Nyeri Akut Post-Appendektomi',
            scenario: 'Tn. A, 35 tahun, masuk RS dengan keluhan nyeri perut kanan bawah sejak 2 hari. Telah dilakukan appendektomi laparoskopi hari ini. Pasien mengeluh nyeri area operasi skala 7/10, tampak meringis, TD 140/90 mmHg, N 98x/mnt, S 37.2C, RR 22x/mnt.',
            patientInfo: 'Tn. A | 35 thn | Post Appendektomi Laparoskopi H-0',

            answer: {
                dataSubjektif: 'Pasien mengatakan nyeri pada area operasi, nyeri seperti ditusuk-tusuk, skala 7/10, nyeri bertambah saat bergerak.',
                dataObjektif: 'Tampak meringis, memegang area operasi, TD 140/90 mmHg, N 98x/mnt, S 37.2C, RR 22x/mnt, luka operasi di kuadran kanan bawah abdomen.',
                masalahKeperawatan: 'Nyeri Akut b.d. agen pencedera fisik (prosedur operasi) d.d. pasien mengeluh nyeri skala 7/10, tampak meringis, TD meningkat.',
                tujuanLuaran: 'Setelah dilakukan tindakan keperawatan 1x24 jam, tingkat nyeri menurun dengan kriteria hasil: keluhan nyeri menurun, meringis menurun, skala nyeri 3/10, TTV dalam batas normal.',
                intervensi: '1. Identifikasi lokasi, karakteristik, durasi, frekuensi nyeri\n2. Berikan teknik nonfarmakologis (napas dalam, distraksi)\n3. Kolaborasi pemberian analgetik\n4. Atur posisi nyaman\n5. Edukasi penyebab dan strategi meredakan nyeri',
                rasional: '1. Pengkajian nyeri komprehensif untuk intervensi tepat\n2. Teknik nonfarmakologis mengurangi persepsi nyeri\n3. Analgetik menghambat transmisi nyeri\n4. Posisi nyaman mengurangi tekanan pada luka\n5. Edukasi meningkatkan koping pasien',
                evalS: 'Pasien mengatakan nyeri berkurang, skala 3/10',
                evalO: 'Meringis berkurang, TD 120/80 mmHg, N 82x/mnt, tampak lebih rileks',
                evalA: 'Masalah nyeri akut teratasi sebagian',
                evalP: 'Lanjutkan intervensi, monitor TTV per 4 jam, evaluasi nyeri berkala'
            }
        },
        {
            id: 'dm-tipe2', title: 'Diabetes Mellitus Tipe 2',
            scenario: 'Ny. G, 50 tahun, masuk RS dengan keluhan lemas, sering haus, sering BAK, dan pandangan kabur sejak 2 minggu. GDS 380 mg/dL, HbA1c 9.2%, BB turun 5 kg dalam 1 bulan. TD 130/85 mmHg, N 88x/mnt, S 36.8C, RR 20x/mnt. Riwayat DM tidak terkontrol.',
            patientInfo: 'Ny. G | 50 thn | DM Tipe 2 Tidak Terkontrol',

            answer: {
                dataSubjektif: 'Pasien mengatakan lemas, sering haus (polidipsi), sering BAK (poliuria), pandangan kabur, BB turun tanpa diet.',
                dataObjektif: 'GDS 380 mg/dL, HbA1c 9.2%, BB turun 5 kg/bulan, TD 130/85 mmHg, N 88x/mnt, mukosa bibir kering, turgor kulit menurun.',
                masalahKeperawatan: 'Ketidakstabilan Kadar Glukosa Darah b.d. resistensi insulin d.d. GDS 380 mg/dL, poliuria, polidipsi, lemas, penurunan BB.',
                tujuanLuaran: 'Setelah dilakukan tindakan keperawatan 3x24 jam, kestabilan kadar glukosa darah meningkat dengan kriteria hasil: GDS 80-200 mg/dL, keluhan lemas menurun, poliuria berkurang.',
                intervensi: '1. Monitor kadar glukosa darah sebelum dan sesudah makan\n2. Monitor tanda hipoglikemia/hiperglikemia\n3. Kolaborasi pemberian insulin/OHO sesuai instruksi\n4. Anjurkan diet DM (karbohidrat kompleks, porsi kecil sering)\n5. Edukasi manajemen diabetes (tanda bahaya, aktivitas fisik, perawatan kaki)',
                rasional: '1. Memantau efektivitas terapi dan respons tubuh\n2. Deteksi dini komplikasi akut\n3. Insulin/OHO mengontrol kadar glukosa darah\n4. Diet tepat membantu stabilisasi gula darah\n5. Edukasi meningkatkan kepatuhan dan self-care',
                evalS: 'Pasien mengatakan lemas berkurang, haus berkurang, BAK tidak sesering sebelumnya',
                evalO: 'GDS 210 mg/dL, turgor kulit membaik, pasien tampak lebih bugar, makan sesuai diet',
                evalA: 'Masalah ketidakstabilan glukosa darah teratasi sebagian, GDS masih sedikit di atas target',
                evalP: 'Lanjutkan terapi insulin, monitor GDS per 8 jam, evaluasi diet, edukasi lanjutan'
            }
        },
        {
            id: 'gastritis', title: 'Gastritis Akut',
            scenario: 'Tn. H, 28 tahun, datang ke IGD dengan keluhan nyeri ulu hati hebat sejak 6 jam, mual, muntah 3x, dan perut kembung. Pasien mengaku sering telat makan dan minum kopi 4-5 gelas/hari. TD 120/80 mmHg, N 90x/mnt, S 37C, RR 20x/mnt, nyeri tekan epigastrium.',
            patientInfo: 'Tn. H | 28 thn | Gastritis Akut',

            answer: {
                dataSubjektif: 'Pasien mengatakan nyeri ulu hati hebat sejak 6 jam, mual, sudah muntah 3 kali, perut kembung, sering telat makan, minum kopi berlebihan.',
                dataObjektif: 'TD 120/80 mmHg, N 90x/mnt, S 37C, RR 20x/mnt, nyeri tekan epigastrium, tampak memegang perut, wajah pucat.',
                masalahKeperawatan: 'Nyeri Akut b.d. agen pencedera fisiologis (iritasi mukosa lambung) d.d. pasien mengeluh nyeri ulu hati, nyeri tekan epigastrium, tampak meringis.',
                tujuanLuaran: 'Setelah dilakukan tindakan keperawatan 1x24 jam, tingkat nyeri menurun dengan kriteria hasil: nyeri ulu hati berkurang, mual menurun, pasien tampak nyaman.',
                intervensi: '1. Kaji skala nyeri dan karakteristik\n2. Berikan posisi semi-fowler\n3. Kolaborasi pemberian antasida/PPI\n4. Anjurkan makan porsi kecil tapi sering\n5. Edukasi hindari makanan pedas, asam, kopi, dan alkohol\n6. Ajarkan teknik relaksasi napas dalam',
                rasional: '1. Menentukan intervensi yang tepat\n2. Mengurangi tekanan pada lambung dan refluks\n3. Menetralisir/menurunkan produksi asam lambung\n4. Mencegah lambung kosong yang memperparah iritasi\n5. Menghindari faktor pencetus iritasi mukosa\n6. Mengurangi ketegangan dan persepsi nyeri',
                evalS: 'Pasien mengatakan nyeri ulu hati berkurang, mual hilang',
                evalO: 'Nyeri tekan epigastrium berkurang, wajah rileks, N 78x/mnt, tidak muntah lagi',
                evalA: 'Masalah nyeri akut teratasi',
                evalP: 'Edukasi diet lambung, kontrol ulang, kepatuhan minum obat'
            }
        },
        {
            id: 'pneumonia', title: 'Pneumonia',
            scenario: 'Tn. I, 60 tahun, dirawat dengan keluhan batuk berdahak kuning-kehijauan sejak 5 hari, sesak napas, demam 38.5C, nyeri dada saat batuk. Riwayat merokok 30 tahun. TD 130/80 mmHg, N 100x/mnt, S 38.5C, RR 28x/mnt, SpO2 92%, ronkhi di paru kanan bawah. Rontgen: infiltrat di lobus kanan bawah.',
            patientInfo: 'Tn. I | 60 thn | Community-Acquired Pneumonia',

            answer: {
                dataSubjektif: 'Pasien mengatakan batuk berdahak kuning-kehijauan sejak 5 hari, sesak napas, demam, nyeri dada saat batuk, riwayat merokok 30 tahun.',
                dataObjektif: 'TD 130/80 mmHg, N 100x/mnt, S 38.5C, RR 28x/mnt, SpO2 92%, ronkhi paru kanan bawah, sputum purulen, rontgen: infiltrat lobus kanan bawah.',
                masalahKeperawatan: 'Bersihan Jalan Napas Tidak Efektif b.d. hipersekresi jalan napas (infeksi) d.d. batuk berdahak purulen, ronkhi, RR 28x/mnt, SpO2 92%.',
                tujuanLuaran: 'Setelah dilakukan tindakan keperawatan 3x24 jam, bersihan jalan napas meningkat dengan kriteria hasil: batuk efektif, sputum berkurang, ronkhi berkurang, SpO2 >95%, RR 16-20x/mnt.',
                intervensi: '1. Monitor pola napas, SpO2, dan bunyi napas\n2. Berikan posisi semi-fowler/fowler\n3. Ajarkan teknik batuk efektif\n4. Kolaborasi pemberian O2, nebulizer, dan antibiotik\n5. Anjurkan minum air hangat untuk mengencerkan sputum\n6. Lakukan fisioterapi dada dan postural drainage',
                rasional: '1. Memantau status respirasi dan deteksi perburukan\n2. Memaksimalkan ekspansi paru\n3. Membantu pengeluaran sputum secara efektif\n4. O2 mengatasi hipoksia, nebulizer mengencerkan dahak, antibiotik mengatasi infeksi\n5. Hidrasi membantu mukolitik alami\n6. Membantu mobilisasi sekret dari saluran napas',
                evalS: 'Pasien mengatakan sesak berkurang, batuk masih ada tapi dahak lebih mudah keluar',
                evalO: 'RR 22x/mnt, SpO2 96% dengan O2 3L, ronkhi berkurang, S 37.5C, sputum lebih encer',
                evalA: 'Masalah bersihan jalan napas teratasi sebagian',
                evalP: 'Lanjutkan terapi O2 dan antibiotik, fisioterapi dada 2x/hari, monitor SpO2'
            }
        }
    ],
    anak: [
        {
            id: 'dhf-anak', title: 'Demam Berdarah (DHF) pada Anak',
            scenario: 'An. C, 8 tahun, BB 25 kg, dirawat dengan DHF hari ke-3. Suhu 39.5C, pasien tampak lemah, nafsu makan menurun, trombosit 85.000/uL, Ht 42%. Ibu mengatakan anak rewel dan tidak mau minum.',
            patientInfo: 'An. C | 8 thn | BB 25 kg | DHF Grade II H-3',
            answer: {
                dataSubjektif: 'Ibu mengatakan anak demam 3 hari, rewel, tidak mau makan dan minum, badan lemas.',
                dataObjektif: 'S 39.5C, tampak lemah, mukosa bibir kering, turgor kulit menurun, trombosit 85.000/uL, Ht 42%, nafsu makan menurun, akral hangat.',
                masalahKeperawatan: 'Hipertermia b.d. proses infeksi virus dengue d.d. suhu 39.5C, tampak lemah, akral hangat.',
                tujuanLuaran: 'Setelah dilakukan tindakan keperawatan 1x24 jam, termoregulasi membaik dengan kriteria hasil: suhu 36.5-37.5C, menggigil menurun, kulit merah menurun.',
                intervensi: '1. Monitor suhu per 4 jam\n2. Berikan kompres hangat pada lipatan tubuh\n3. Anjurkan minum banyak\n4. Kolaborasi Paracetamol 10-15 mg/kgBB\n5. Monitor trombosit dan hematokrit\n6. Longgarkan pakaian',
                rasional: '1. Memantau perkembangan suhu\n2. Vasodilatasi membantu pengeluaran panas\n3. Mencegah dehidrasi akibat demam\n4. Antipiretik menurunkan set-point suhu\n5. Indikator keparahan DHF\n6. Membantu evaporasi panas',
                evalS: 'Ibu mengatakan anak sudah mau minum, demam berkurang',
                evalO: 'S 37.8C, anak lebih aktif, minum 800ml/hari, trombosit 90.000/uL',
                evalA: 'Masalah hipertermia teratasi sebagian',
                evalP: 'Lanjutkan monitoring TTV, cairan adekuat, cek lab ulang besok'
            }
        },

        {
            id: 'demam-tifoid', title: 'Demam Tifoid pada Anak',
            scenario: 'An. J, 10 tahun, BB 30 kg, dirawat dengan keluhan demam naik turun sejak 7 hari (terutama sore-malam), lidah kotor, mual, nyeri perut, BAB cair 2x. Widal test O 1/320. TD 100/60 mmHg, N 80x/mnt, S 39C (sore), RR 22x/mnt.',
            patientInfo: 'An. J | 10 thn | BB 30 kg | Demam Tifoid',
            answer: {
                dataSubjektif: 'Ibu mengatakan anak demam naik turun 7 hari terutama sore/malam, mual, nyeri perut, BAB cair 2x, nafsu makan menurun.',
                dataObjektif: 'S 39C (sore), TD 100/60 mmHg, N 80x/mnt (bradikardia relatif), lidah kotor/typhoid tongue, nyeri tekan abdomen, Widal O 1/320, BAB cair.',
                masalahKeperawatan: 'Hipertermia b.d. proses infeksi bakteri Salmonella typhi d.d. suhu 39C, demam naik turun, Widal positif.',
                tujuanLuaran: 'Setelah dilakukan tindakan keperawatan 3x24 jam, termoregulasi membaik dengan kriteria hasil: suhu normal, pola demam hilang, anak tampak nyaman.',
                intervensi: '1. Monitor suhu per 4 jam (catat pola demam)\n2. Kolaborasi antibiotik (Chloramphenicol/Ceftriaxone)\n3. Berikan kompres hangat saat demam\n4. Anjurkan tirah baring dan diet lunak rendah serat\n5. Monitor komplikasi (perdarahan usus, perforasi)\n6. Edukasi keluarga tentang hygiene dan pencegahan',
                rasional: '1. Pola step-ladder fever khas tifoid, memantau respons terapi\n2. Antibiotik membunuh bakteri penyebab\n3. Menurunkan suhu secara non-farmakologis\n4. Tirah baring mencegah komplikasi usus, diet lunak mengurangi kerja usus\n5. Perforasi dan perdarahan usus komplikasi serius\n6. Tifoid ditularkan fecal-oral, edukasi mencegah penularan',
                evalS: 'Ibu mengatakan demam berkurang, anak sudah mau makan sedikit',
                evalO: 'S 37.5C, lidah mulai bersih, BAB normal, N 82x/mnt, nyeri perut berkurang',
                evalA: 'Hipertermia teratasi sebagian, proses penyembuhan berlangsung',
                evalP: 'Lanjutkan antibiotik sampai selesai, monitor suhu, tingkatkan diet bertahap'
            }
        }
    ],
    maternitas: [
        {
            id: 'preeklampsia', title: 'Preeklampsia Berat',
            scenario: 'Ny. D, 28 tahun, G1P0A0 hamil 34 minggu, masuk RS dengan sakit kepala hebat, pandangan kabur, kaki bengkak. TD 160/100 mmHg, protein urine +2, BB naik 3 kg/minggu, edema ekstremitas bawah, refleks patella meningkat.',
            patientInfo: 'Ny. D | 28 thn | G1P0A0 UK 34 mgg | Preeklampsia Berat',
            answer: {
                dataSubjektif: 'Pasien mengeluh sakit kepala hebat, pandangan kabur, kaki bengkak membesar 1 minggu terakhir.',
                dataObjektif: 'TD 160/100 mmHg, protein urine +2, edema ekstremitas bawah grade 2, BB naik 3 kg/minggu, refleks patella meningkat.',
                masalahKeperawatan: 'Risiko Cedera pada Ibu dan Janin b.d. preeklampsia berat d.d. TD 160/100 mmHg, proteinuria +2, edema, pandangan kabur.',
                tujuanLuaran: 'Setelah dilakukan tindakan 1x24 jam, risiko cedera menurun: TD terkontrol, tidak ada kejang, kondisi janin stabil.',
                intervensi: '1. Monitor TD per 2 jam\n2. Monitor tanda eklampsia\n3. Kolaborasi MgSO4 sesuai protokol\n4. Bed rest posisi miring kiri\n5. Monitor DJJ dan gerakan janin\n6. Monitor output urine/24 jam\n7. Edukasi tanda bahaya',
                rasional: '1. Deteksi dini perburukan\n2. Eklampsia mengancam jiwa\n3. MgSO4 mencegah kejang\n4. Miring kiri meningkatkan perfusi uteroplasenta\n5. Pemantauan kesejahteraan janin\n6. Oliguria menandakan gangguan ginjal\n7. Meningkatkan kewaspadaan',
                evalS: 'Sakit kepala sedikit berkurang, pandangan membaik',
                evalO: 'TD 150/95 mmHg, tidak ada kejang, DJJ 140x/mnt regular, urine output 50ml/jam',
                evalA: 'Risiko cedera terkontrol, belum sepenuhnya teratasi',
                evalP: 'Lanjutkan monitoring ketat, evaluasi MgSO4, rencana terminasi jika memburuk'
            }
        }
    ],

    lansia: [
        {
            id: 'risiko-jatuh', title: 'Risiko Jatuh pada Lansia',
            scenario: 'Tn. E, 72 tahun, riwayat jatuh di kamar mandi. Fraktur colles sinistra. Menggunakan kacamata, berjalan lambat, pusing saat berdiri. TD duduk 130/85 mmHg, TD berdiri 110/70 mmHg. Skor Morse 55 (risiko tinggi).',
            patientInfo: 'Tn. E | 72 thn | Fraktur Colles + Hipotensi Ortostatik',
            answer: {
                dataSubjektif: 'Pasien mengatakan sering pusing saat berdiri, penglihatan kurang jelas, takut jatuh lagi.',
                dataObjektif: 'Usia 72 tahun, riwayat jatuh, TD ortostatik (turun >20 mmHg), skor Morse 55, gaya berjalan tidak stabil, fraktur colles dalam gips.',
                masalahKeperawatan: 'Risiko Jatuh b.d. hipotensi ortostatik, gangguan penglihatan, riwayat jatuh d.d. skor Morse 55, TD ortostatik, gaya berjalan tidak stabil.',
                tujuanLuaran: 'Selama perawatan, risiko jatuh menurun: tidak terjadi jatuh berulang, pasien mobilisasi aman dengan bantuan.',
                intervensi: '1. Pasang gelang risiko jatuh kuning\n2. Pasang pagar TT\n3. Edukasi berdiri perlahan (bertahap)\n4. Pastikan lantai kering, pencahayaan cukup\n5. Letakkan bel dalam jangkauan\n6. Alas kaki anti-slip\n7. Kolaborasi fisioterapi',
                rasional: '1. Identifikasi visual bagi petugas\n2. Mencegah jatuh dari TT\n3. Mencegah hipotensi ortostatik\n4. Mengurangi faktor risiko lingkungan\n5. Mencegah bangkit tanpa bantuan\n6. Mengurangi risiko terpeleset\n7. Meningkatkan keseimbangan',
                evalS: 'Pasien lebih hati-hati saat berdiri, pusing berkurang jika perlahan',
                evalO: 'Tidak ada kejadian jatuh, mampu berdiri dengan walker, TD ortostatik membaik',
                evalA: 'Risiko jatuh terkontrol',
                evalP: 'Lanjutkan edukasi keluarga, modifikasi lingkungan rumah'
            }
        }
    ],
    gawatdarurat: [
        {
            id: 'syok-hipovolemik', title: 'Syok Hipovolemik',
            scenario: 'Tn. F, 40 tahun, kecelakaan motor. Perdarahan aktif paha kanan. TD 80/50 mmHg, N 130x/mnt lemah, RR 28x/mnt, S 36C, akral dingin pucat, CRT >3 detik, somnolen, estimasi blood loss 1500ml.',
            patientInfo: 'Tn. F | 40 thn | Syok Hipovolemik ec Trauma',
            answer: {
                dataSubjektif: 'Pasien tidak mampu memberikan keterangan (somnolen). Pengantar: kecelakaan 30 menit lalu, perdarahan banyak.',
                dataObjektif: 'TD 80/50 mmHg, N 130x/mnt lemah, RR 28x/mnt, S 36C, GCS E3V3M5=11, akral dingin pucat, CRT >3 detik, luka terbuka paha kanan perdarahan aktif.',
                masalahKeperawatan: 'Hipovolemia b.d. kehilangan darah aktif d.d. TD 80/50 mmHg, nadi lemah cepat, akral dingin, CRT >3 detik, perdarahan aktif.',
                tujuanLuaran: 'Setelah 1 jam pertama, status cairan membaik: TD >90/60 mmHg, nadi kuat, akral hangat, CRT <3 detik, perdarahan terkontrol.',
                intervensi: '1. Hentikan perdarahan dengan balut tekan\n2. Pasang IV 2 jalur, kristaloid tetes cepat\n3. Monitor TTV per 15 menit\n4. Kolaborasi crossmatch dan transfusi\n5. Posisi Trendelenburg\n6. Pasang kateter, monitor output\n7. Jaga kehangatan',
                rasional: '1. Menghentikan kehilangan darah\n2. Resusitasi volume sirkulasi\n3. Evaluasi respons resusitasi\n4. Mengganti komponen darah\n5. Meningkatkan venous return\n6. Output urine indikator perfusi ginjal\n7. Mencegah hipotermia yang perburuk koagulopati',
                evalS: 'Pasien mulai sadar, mengeluh nyeri paha kanan',
                evalO: 'TD 95/65 mmHg, N 110x/mnt, CRT 2 detik, akral hangat, perdarahan terkontrol, urine 30ml/jam, GCS 14',
                evalA: 'Hipovolemia teratasi sebagian, hemodinamik mulai stabil',
                evalP: 'Lanjutkan resusitasi, rencana operasi debridement, monitoring ICU'
            }
        }
    ]
};


// ===== Stepper Logic =====
const stepIds = ['stepSelect', 'stepScenario', 'stepPengkajian', 'stepDiagnosis', 'stepLuaran', 'stepIntervensi', 'stepEvaluasi', 'stepResult'];
const stepLabels = ['Kasus', 'Skenario', 'Pengkajian', 'Diagnosis', 'Luaran', 'Intervensi', 'Evaluasi', 'Hasil'];
let currentStep = 0;
let currentCase = null;

function buildStepper() {
    const nav = document.getElementById('stepperNav');
    nav.innerHTML = '';
    for (let i = 2; i < stepLabels.length - 1; i++) {
        if (i > 2) {
            const line = document.createElement('div');
            line.className = 'step-line' + (currentStep > i ? ' done' : '');
            nav.appendChild(line);
        }
        const item = document.createElement('div');
        let cls = 'step-item';
        if (currentStep === i) cls += ' active';
        else if (currentStep > i) cls += ' done';
        item.className = cls;
        item.innerHTML = `<div class="step-circle">${currentStep > i ? '<i class="fas fa-check"></i>' : (i - 1)}</div><span class="step-label">${stepLabels[i]}</span>`;
        nav.appendChild(item);
    }
    const pct = Math.max(0, ((currentStep - 2) / 5) * 100);
    document.getElementById('askepProgress').style.width = pct + '%';
}

function showStep(idx) {
    stepIds.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el) el.style.display = (i === idx) ? 'block' : 'none';
    });
    const stepper = document.getElementById('askepStepper');
    stepper.style.display = (idx >= 2 && idx < 7) ? 'block' : 'none';
    if (idx >= 2) buildStepper();
    currentStep = idx;
}

function nextStep() { if (currentStep < stepIds.length - 1) showStep(currentStep + 1); }
function prevStep() { if (currentStep > 2) showStep(currentStep - 1); }

// ===== Event: Category Selection =====
document.getElementById('caseCategory').addEventListener('change', function() {
    const cat = this.value;
    const caseList = document.getElementById('caseList');
    const caseButtons = document.getElementById('caseButtons');
    caseList.style.display = 'none';
    caseButtons.innerHTML = '';
    if (cat && casesDB[cat]) {
        caseList.style.display = 'block';
        casesDB[cat].forEach(c => {
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
    document.getElementById('caseScenario').innerHTML = `<i class="fas fa-info-circle"></i><div><strong>${caseData.title}</strong><br><br>${caseData.scenario}</div>`;
    document.getElementById('patientInfo').innerHTML = `<div class="alert alert-warning"><i class="fas fa-id-card"></i><span><strong>Identitas:</strong> ${caseData.patientInfo}</span></div>`;
    showStep(1);
    showToast('Kasus dimuat. Baca skenario dengan teliti.', 'info');
}

// Start Askep
document.getElementById('btnStartAskep').addEventListener('click', () => {
    resetForm();
    showStep(2);
});

// Submit
document.getElementById('btnSubmitAskep').addEventListener('click', () => {
    if (!currentCase) return;
    calculateScore();
    showStep(7);
    showToast('Askep selesai! Lihat skor dan feedback Anda.', 'success');
});

// ===== Scoring with Specific Feedback =====
function calculateScore() {
    const fields = [
        { id: 'dataSubjektif', label: 'Data Subjektif', weight: 10 },
        { id: 'dataObjektif', label: 'Data Objektif', weight: 15 },
        { id: 'masalahKeperawatan', label: 'Diagnosis Keperawatan', weight: 20 },
        { id: 'tujuanLuaran', label: 'Luaran/Tujuan', weight: 15 },
        { id: 'intervensi', label: 'Intervensi', weight: 15 },
        { id: 'rasional', label: 'Rasional', weight: 10 },
        { id: 'evalS', label: 'Evaluasi S', weight: 4 },
        { id: 'evalO', label: 'Evaluasi O', weight: 4 },
        { id: 'evalA', label: 'Evaluasi A', weight: 4 },
        { id: 'evalP', label: 'Evaluasi P', weight: 3 }
    ];

    let totalScore = 0;
    let maxScore = 0;
    let feedbackItems = [];

    fields.forEach(f => {
        maxScore += f.weight;
        const val = document.getElementById(f.id).value.trim();
        if (val.length > 20) {
            totalScore += f.weight;
            feedbackItems.push({ label: f.label, status: 'good', msg: 'Terisi dengan baik' });
        } else if (val.length > 0) {
            totalScore += Math.round(f.weight * 0.5);
            feedbackItems.push({ label: f.label, status: 'partial', msg: 'Terisi tapi kurang lengkap' });
        } else {
            feedbackItems.push({ label: f.label, status: 'empty', msg: 'Belum diisi' });
        }
    });

    const pct = Math.round((totalScore / maxScore) * 100);
    document.getElementById('askepScoreNum').textContent = pct + '%';
    document.getElementById('askepScoreBar').style.width = pct + '%';

    // Build feedback HTML
    let html = '';
    if (pct >= 80) html += '<div class="alert alert-success"><i class="fas fa-check-circle"></i><span><strong>Sangat Baik!</strong> Dokumentasi askep Anda sudah lengkap. Bandingkan dengan contoh jawaban.</span></div>';
    else if (pct >= 60) html += '<div class="alert alert-warning"><i class="fas fa-exclamation-circle"></i><span><strong>Cukup Baik.</strong> Beberapa bagian perlu dilengkapi agar dokumentasi lebih komprehensif.</span></div>';
    else html += '<div class="alert alert-danger"><i class="fas fa-times-circle"></i><span><strong>Perlu Perbaikan.</strong> Masih banyak bagian yang kosong/kurang lengkap.</span></div>';

    // Specific feedback
    const specifics = getSpecificFeedback(pct);
    if (specifics.length) {
        html += '<div style="margin-top:16px;"><h4 style="font-size:0.9rem;margin-bottom:10px;color:var(--gray-700);">Feedback Spesifik:</h4>';
        specifics.forEach(s => { html += `<div class="alert alert-info" style="margin-bottom:8px;padding:10px 14px;"><i class="fas fa-lightbulb"></i><span>${s}</span></div>`; });
        html += '</div>';
    }

    // Detail per field
    html += '<div style="margin-top:16px;"><h4 style="font-size:0.9rem;margin-bottom:10px;color:var(--gray-700);">Detail Penilaian:</h4>';
    feedbackItems.forEach(item => {
        const icon = item.status === 'good' ? '<i class="fas fa-check-circle" style="color:var(--success);"></i>' : item.status === 'partial' ? '<i class="fas fa-minus-circle" style="color:var(--warning);"></i>' : '<i class="fas fa-times-circle" style="color:var(--danger);"></i>';
        html += `<div class="checklist-item">${icon}<span><strong>${item.label}:</strong> ${item.msg}</span></div>`;
    });
    html += '</div>';

    document.getElementById('askepFeedback').innerHTML = html;
}


function getSpecificFeedback(pct) {
    const fb = [];
    const diagnosis = document.getElementById('masalahKeperawatan').value;
    const intervensi = document.getElementById('intervensi').value;
    const luaran = document.getElementById('tujuanLuaran').value;
    const evalA = document.getElementById('evalA').value;

    if (diagnosis && !diagnosis.toLowerCase().includes('b.d') && !diagnosis.toLowerCase().includes('berhubungan dengan'))
        fb.push('Diagnosis sebaiknya menggunakan format: <strong>Masalah b.d. Etiologi d.d. Tanda/Gejala</strong> sesuai SDKI.');
    if (diagnosis && diagnosis.length > 5 && diagnosis.toLowerCase().includes('b.d'))
        fb.push('Format diagnosis sudah sesuai. Pastikan data mayor mendukung diagnosis Anda.');
    if (intervensi && intervensi.split('\n').length < 3)
        fb.push('Intervensi sebaiknya minimal 3-5 tindakan yang mencakup observasi, terapeutik, edukasi, dan kolaborasi.');
    if (luaran && !luaran.toLowerCase().includes('kriteria hasil') && !luaran.toLowerCase().includes('kriteria'))
        fb.push('Luaran sebaiknya mencantumkan <strong>kriteria hasil</strong> yang terukur dan spesifik.');
    if (evalA && evalA.length > 0 && !evalA.toLowerCase().includes('teratasi'))
        fb.push('Evaluasi Analisis sebaiknya menyatakan apakah masalah teratasi/teratasi sebagian/belum teratasi.');
    if (pct === 100) fb.push('Semua komponen terisi lengkap! Bandingkan isi dengan contoh untuk evaluasi kualitas konten.');
    return fb;
}

// ===== Show Answer =====
document.getElementById('btnShowAnswer').addEventListener('click', function() {
    if (!currentCase) return;
    const a = currentCase.answer;
    document.getElementById('answerContent').innerHTML = `
        <h4 style="margin-top:16px;color:var(--gray-800);">1. Pengkajian</h4>
        <p style="margin:8px 0;"><strong>Data Subjektif:</strong> ${a.dataSubjektif}</p>
        <p style="margin:8px 0;"><strong>Data Objektif:</strong> ${a.dataObjektif}</p>
        <hr style="margin:16px 0;border:none;border-top:1px solid var(--gray-100);">
        <h4 style="color:var(--gray-800);">2. Diagnosis Keperawatan (SDKI)</h4>
        <p style="margin:8px 0;">${a.masalahKeperawatan}</p>
        <hr style="margin:16px 0;border:none;border-top:1px solid var(--gray-100);">
        <h4 style="color:var(--gray-800);">3. Luaran (SLKI)</h4>
        <p style="margin:8px 0;">${a.tujuanLuaran}</p>
        <hr style="margin:16px 0;border:none;border-top:1px solid var(--gray-100);">
        <h4 style="color:var(--gray-800);">4. Intervensi (SIKI) & Rasional</h4>
        <p style="margin:8px 0;"><strong>Intervensi:</strong><br>${a.intervensi.replace(/\n/g,'<br>')}</p>
        <p style="margin:8px 0;"><strong>Rasional:</strong><br>${a.rasional.replace(/\n/g,'<br>')}</p>
        <hr style="margin:16px 0;border:none;border-top:1px solid var(--gray-100);">
        <h4 style="color:var(--gray-800);">5. Evaluasi SOAP</h4>
        <p style="margin:4px 0;"><strong>S:</strong> ${a.evalS}</p>
        <p style="margin:4px 0;"><strong>O:</strong> ${a.evalO}</p>
        <p style="margin:4px 0;"><strong>A:</strong> ${a.evalA}</p>
        <p style="margin:4px 0;"><strong>P:</strong> ${a.evalP}</p>
    `;
    document.getElementById('answerDisplay').style.display = 'block';
    document.getElementById('answerDisplay').scrollIntoView({ behavior: 'smooth' });
});

// Reset
document.getElementById('btnResetAskep').addEventListener('click', () => { resetForm(); showStep(2); showToast('Form direset. Silakan mengerjakan ulang.', 'info'); });
document.getElementById('btnNewCase').addEventListener('click', () => { resetForm(); showStep(0); });

function resetForm() {
    ['dataSubjektif','dataObjektif','masalahKeperawatan','tujuanLuaran','intervensi','rasional','evalS','evalO','evalA','evalP'].forEach(id => { document.getElementById(id).value = ''; });
    document.getElementById('answerDisplay').style.display = 'none';
}

// Initialize
showStep(0);
