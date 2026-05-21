// ===== NersLab v2 - Simulasi OSCE =====

function showToast(msg, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    const icons = { success: 'check-circle', error: 'times-circle', info: 'info-circle', warning: 'exclamation-triangle' };
    toast.innerHTML = `<i class="fas fa-${icons[type]}"></i> <span>${msg}</span>`;
    container.appendChild(toast);
    setTimeout(() => { toast.classList.add('hiding'); setTimeout(() => toast.remove(), 300); }, 3000);
}

// ===== OSCE Database =====
const osceDB = {
    cuciTangan: {
        title: 'Cuci Tangan 6 Langkah WHO',
        scenario: 'Anda akan melakukan tindakan keperawatan pada pasien. Lakukan prosedur cuci tangan sesuai standar WHO (40-60 detik) sebelum kontak dengan pasien.',
        checklist: [
            { item: 'Melepas perhiasan, menggulung lengan baju', cat: 'Persiapan' },
            { item: 'Basahi tangan dengan air mengalir', cat: 'Pelaksanaan' },
            { item: 'Tuangkan sabun 2-3 mL', cat: 'Pelaksanaan' },
            { item: 'Gosok kedua telapak tangan', cat: 'Pelaksanaan' },
            { item: 'Gosok punggung tangan kiri-kanan', cat: 'Pelaksanaan' },
            { item: 'Gosok sela-sela jari', cat: 'Pelaksanaan' },
            { item: 'Gosok buku-buku jari (posisi terkunci)', cat: 'Pelaksanaan' },
            { item: 'Gosok ibu jari memutar', cat: 'Pelaksanaan' },
            { item: 'Gosok ujung jari di telapak tangan', cat: 'Pelaksanaan' },
            { item: 'Bilas dengan air mengalir', cat: 'Pelaksanaan' },
            { item: 'Keringkan dengan tissue/handuk bersih', cat: 'Pelaksanaan' },
            { item: 'Tutup kran dengan tissue', cat: 'Pelaksanaan' },
            { item: 'Durasi 40-60 detik', cat: 'Evaluasi' }
        ]
    },
    ttv: {
        title: 'Pemeriksaan Tanda-Tanda Vital',
        scenario: 'Tn. X, 45 tahun, baru masuk ruang rawat inap. Lakukan pemeriksaan TTV lengkap (TD, Nadi, RR, Suhu) dan dokumentasikan hasilnya.',
        checklist: [
            { item: 'Identifikasi pasien (2 identitas)', cat: 'Persiapan' },
            { item: 'Jelaskan prosedur dan tujuan', cat: 'Persiapan' },
            { item: 'Cuci tangan', cat: 'Persiapan' },
            { item: 'Siapkan alat (tensimeter, stetoskop, termometer, timer)', cat: 'Persiapan' },
            { item: 'Pastikan pasien istirahat 5 menit', cat: 'Persiapan' },
            { item: 'Pasang manset 2-3 cm di atas fossa cubiti', cat: 'Pelaksanaan' },
            { item: 'Palpasi arteri brachialis, letakkan stetoskop', cat: 'Pelaksanaan' },
            { item: 'Pompa 20-30 mmHg di atas hilangnya pulsasi', cat: 'Pelaksanaan' },
            { item: 'Kempeskan 2-3 mmHg/detik, catat sistolik/diastolik', cat: 'Pelaksanaan' },
            { item: 'Palpasi arteri radialis 60 detik, kaji irama', cat: 'Pelaksanaan' },
            { item: 'Observasi pernapasan 60 detik', cat: 'Pelaksanaan' },
            { item: 'Ukur suhu (aksila/oral/rektal)', cat: 'Pelaksanaan' },
            { item: 'Catat semua hasil', cat: 'Evaluasi' },
            { item: 'Informasikan hasil kepada pasien', cat: 'Evaluasi' },
            { item: 'Rapikan alat, cuci tangan', cat: 'Evaluasi' },
            { item: 'Dokumentasikan di rekam medis', cat: 'Evaluasi' }
        ]
    },

    injeksiIM: {
        title: 'Injeksi Intramuskular (IM)',
        scenario: 'Dokter menginstruksikan pemberian Ceftriaxone 1g IM pada Tn. Y. Lakukan prosedur injeksi IM dengan teknik yang benar dan aman.',
        checklist: [
            { item: 'Verifikasi identitas pasien (2 identitas)', cat: 'Persiapan' },
            { item: 'Cek 6 Benar obat', cat: 'Persiapan' },
            { item: 'Cek kadaluarsa dan kondisi obat', cat: 'Persiapan' },
            { item: 'Jelaskan prosedur, minta persetujuan', cat: 'Persiapan' },
            { item: 'Cuci tangan, sarung tangan bersih', cat: 'Persiapan' },
            { item: 'Siapkan alat (spuit, jarum IM 21-23G, kapas alkohol)', cat: 'Persiapan' },
            { item: 'Aspirasi obat dengan teknik aseptik', cat: 'Pelaksanaan' },
            { item: 'Tentukan lokasi (vastus lateralis/ventrogluteal/deltoid)', cat: 'Pelaksanaan' },
            { item: 'Desinfeksi melingkar dari dalam ke luar', cat: 'Pelaksanaan' },
            { item: 'Regangkan kulit, tusuk 90 derajat cepat', cat: 'Pelaksanaan' },
            { item: 'Aspirasi cek darah', cat: 'Pelaksanaan' },
            { item: 'Injeksikan obat perlahan', cat: 'Pelaksanaan' },
            { item: 'Cabut jarum cepat, tekan kapas', cat: 'Pelaksanaan' },
            { item: 'Buang jarum di safety box tanpa recap', cat: 'Pelaksanaan' },
            { item: 'Observasi reaksi pasien', cat: 'Evaluasi' },
            { item: 'Lepas sarung tangan, cuci tangan', cat: 'Evaluasi' },
            { item: 'Dokumentasikan (obat, dosis, waktu, lokasi)', cat: 'Evaluasi' }
        ]
    },
    injeksiIV: {
        title: 'Injeksi Intravena (IV) Bolus',
        scenario: 'Ny. Z memerlukan pemberian Furosemide 20mg IV bolus melalui three-way stopcock. Lakukan prosedur injeksi IV dengan aman.',
        checklist: [
            { item: 'Verifikasi identitas pasien', cat: 'Persiapan' },
            { item: 'Cek 6 Benar obat', cat: 'Persiapan' },
            { item: 'Cek kompatibilitas obat dengan cairan infus', cat: 'Persiapan' },
            { item: 'Jelaskan prosedur kepada pasien', cat: 'Persiapan' },
            { item: 'Cuci tangan, sarung tangan bersih', cat: 'Persiapan' },
            { item: 'Siapkan alat (spuit, obat, kapas alkohol, NaCl flush)', cat: 'Persiapan' },
            { item: 'Aspirasi obat dengan teknik aseptik', cat: 'Pelaksanaan' },
            { item: 'Desinfeksi port injeksi/three-way', cat: 'Pelaksanaan' },
            { item: 'Klem infus (jika perlu)', cat: 'Pelaksanaan' },
            { item: 'Sambungkan spuit ke port, aspirasi cek patensi', cat: 'Pelaksanaan' },
            { item: 'Injeksikan obat perlahan sesuai kecepatan yang tepat', cat: 'Pelaksanaan' },
            { item: 'Flush dengan NaCl 0.9% 5-10 mL', cat: 'Pelaksanaan' },
            { item: 'Buka klem infus kembali', cat: 'Pelaksanaan' },
            { item: 'Observasi reaksi (alergi, phlebitis, ekstravasasi)', cat: 'Evaluasi' },
            { item: 'Buang spuit di safety box', cat: 'Evaluasi' },
            { item: 'Lepas sarung tangan, cuci tangan', cat: 'Evaluasi' },
            { item: 'Dokumentasikan pemberian obat', cat: 'Evaluasi' }
        ]
    },

    infus: {
        title: 'Pemasangan Infus (IV Line)',
        scenario: 'Dokter menginstruksikan pemasangan infus RL 500cc/8 jam pada Tn. A. Pasang IV line dan atur tetesan sesuai instruksi.',
        checklist: [
            { item: 'Verifikasi identitas dan instruksi', cat: 'Persiapan' },
            { item: 'Jelaskan prosedur', cat: 'Persiapan' },
            { item: 'Cuci tangan', cat: 'Persiapan' },
            { item: 'Siapkan alat (infus set, cairan, IV cath, tourniquet, kapas, plester)', cat: 'Persiapan' },
            { item: 'Cek cairan (jenis, jumlah, kadaluarsa, kejernihan)', cat: 'Persiapan' },
            { item: 'Isi infus set, pastikan tidak ada udara', cat: 'Pelaksanaan' },
            { item: 'Pasang perlak dan pengalas', cat: 'Pelaksanaan' },
            { item: 'Pasang tourniquet 10-15 cm di atas lokasi', cat: 'Pelaksanaan' },
            { item: 'Pilih vena yang sesuai', cat: 'Pelaksanaan' },
            { item: 'Sarung tangan steril', cat: 'Pelaksanaan' },
            { item: 'Desinfeksi area tusukan', cat: 'Pelaksanaan' },
            { item: 'Tusuk IV cath 15-30 derajat, bevel atas', cat: 'Pelaksanaan' },
            { item: 'Observasi flashback', cat: 'Pelaksanaan' },
            { item: 'Tarik mandrin, dorong catheter', cat: 'Pelaksanaan' },
            { item: 'Lepas tourniquet', cat: 'Pelaksanaan' },
            { item: 'Sambungkan infus set, buka klem', cat: 'Pelaksanaan' },
            { item: 'Fiksasi dengan plester transparan', cat: 'Pelaksanaan' },
            { item: 'Atur tetesan sesuai instruksi', cat: 'Pelaksanaan' },
            { item: 'Catat tanggal pemasangan', cat: 'Evaluasi' },
            { item: 'Observasi tanda infiltrasi/phlebitis', cat: 'Evaluasi' },
            { item: 'Rapikan, cuci tangan, dokumentasi', cat: 'Evaluasi' }
        ]
    },
    kateter: {
        title: 'Pemasangan Kateter Urine',
        scenario: 'Dokter menginstruksikan pemasangan kateter Foley No. 16 pada Ny. B karena retensi urine. Lakukan dengan teknik steril.',
        checklist: [
            { item: 'Verifikasi identitas dan instruksi', cat: 'Persiapan' },
            { item: 'Jelaskan prosedur, informed consent', cat: 'Persiapan' },
            { item: 'Siapkan alat steril (kateter Foley, urine bag, spuit, aquadest, jelly, duk)', cat: 'Persiapan' },
            { item: 'Pasang sampiran/privasi', cat: 'Persiapan' },
            { item: 'Cuci tangan, sarung tangan steril', cat: 'Persiapan' },
            { item: 'Posisikan pasien (dorsal recumbent/supinasi)', cat: 'Pelaksanaan' },
            { item: 'Pasang duk steril', cat: 'Pelaksanaan' },
            { item: 'Bersihkan area genital dengan antiseptik', cat: 'Pelaksanaan' },
            { item: 'Oleskan jelly pada ujung kateter', cat: 'Pelaksanaan' },
            { item: 'Masukkan kateter perlahan hingga urine keluar', cat: 'Pelaksanaan' },
            { item: 'Dorong 2-3 cm lagi setelah urine keluar', cat: 'Pelaksanaan' },
            { item: 'Kembangkan balon (10-15 mL aquadest)', cat: 'Pelaksanaan' },
            { item: 'Tarik perlahan sampai terasa tahanan', cat: 'Pelaksanaan' },
            { item: 'Sambungkan urine bag', cat: 'Pelaksanaan' },
            { item: 'Fiksasi kateter', cat: 'Pelaksanaan' },
            { item: 'Gantung urine bag di bawah bladder', cat: 'Evaluasi' },
            { item: 'Observasi warna dan jumlah urine', cat: 'Evaluasi' },
            { item: 'Rapikan, cuci tangan, dokumentasi', cat: 'Evaluasi' }
        ]
    },

    komunikasi: {
        title: 'Komunikasi Terapeutik',
        scenario: 'Anda bertugas merawat Ny. C yang baru didiagnosis kanker payudara stadium 2. Pasien tampak cemas dan menangis. Lakukan komunikasi terapeutik fase orientasi hingga terminasi.',
        checklist: [
            { item: 'Prainteraksi: kaji data, siapkan rencana', cat: 'Persiapan' },
            { item: 'Salam terapeutik, perkenalkan diri', cat: 'Pelaksanaan' },
            { item: 'Validasi perasaan pasien', cat: 'Pelaksanaan' },
            { item: 'Buat kontrak (topik, waktu, tempat)', cat: 'Pelaksanaan' },
            { item: 'Active listening', cat: 'Pelaksanaan' },
            { item: 'Empati verbal dan non-verbal', cat: 'Pelaksanaan' },
            { item: 'Kontak mata sesuai budaya', cat: 'Pelaksanaan' },
            { item: 'Pertanyaan terbuka', cat: 'Pelaksanaan' },
            { item: 'Refleksi perasaan', cat: 'Pelaksanaan' },
            { item: 'Klarifikasi informasi', cat: 'Pelaksanaan' },
            { item: 'Berikan informasi/edukasi', cat: 'Pelaksanaan' },
            { item: 'Bahasa mudah dipahami', cat: 'Pelaksanaan' },
            { item: 'Terminasi: evaluasi perasaan', cat: 'Evaluasi' },
            { item: 'Evaluasi pencapaian tujuan', cat: 'Evaluasi' },
            { item: 'Buat rencana tindak lanjut', cat: 'Evaluasi' },
            { item: 'Akhiri dengan salam', cat: 'Evaluasi' }
        ]
    },
    oksigen: {
        title: 'Pemberian Oksigen (Nasal Kanul)',
        scenario: 'Tn. D, 65 tahun, SpO2 90%, sesak napas. Dokter instruksikan O2 nasal kanul 3 L/menit. Lakukan pemberian oksigen.',
        checklist: [
            { item: 'Verifikasi identitas dan instruksi', cat: 'Persiapan' },
            { item: 'Kaji tanda hipoksia (sianosis, sesak, SpO2)', cat: 'Persiapan' },
            { item: 'Jelaskan prosedur', cat: 'Persiapan' },
            { item: 'Cuci tangan', cat: 'Persiapan' },
            { item: 'Siapkan alat (tabung O2, humidifier, nasal kanul, air steril)', cat: 'Persiapan' },
            { item: 'Isi humidifier dengan air steril', cat: 'Pelaksanaan' },
            { item: 'Sambungkan nasal kanul ke flowmeter', cat: 'Pelaksanaan' },
            { item: 'Atur flow rate sesuai instruksi', cat: 'Pelaksanaan' },
            { item: 'Cek aliran O2 di tangan', cat: 'Pelaksanaan' },
            { item: 'Pasang nasal kanul pada hidung', cat: 'Pelaksanaan' },
            { item: 'Fiksasi di belakang telinga', cat: 'Pelaksanaan' },
            { item: 'Pastikan nyaman, tidak ada tekanan', cat: 'Pelaksanaan' },
            { item: 'Observasi SpO2 dengan pulse oximetry', cat: 'Evaluasi' },
            { item: 'Kaji perbaikan (sesak berkurang, sianosis hilang)', cat: 'Evaluasi' },
            { item: 'Cek iritasi hidung', cat: 'Evaluasi' },
            { item: 'Dokumentasikan (flow, SpO2, respon)', cat: 'Evaluasi' }
        ]
    },
    luka: {
        title: 'Perawatan Luka (Wound Care)',
        scenario: 'Tn. E, post-op appendektomi hari ke-2. Lakukan ganti balutan luka operasi dengan teknik steril.',
        checklist: [
            { item: 'Verifikasi identitas pasien', cat: 'Persiapan' },
            { item: 'Jelaskan prosedur', cat: 'Persiapan' },
            { item: 'Kaji nyeri, berikan analgetik 30 menit sebelumnya jika perlu', cat: 'Persiapan' },
            { item: 'Cuci tangan, siapkan alat steril', cat: 'Persiapan' },
            { item: 'Sarung tangan bersih, buka balutan lama', cat: 'Pelaksanaan' },
            { item: 'Observasi balutan (rembesan, bau, warna)', cat: 'Pelaksanaan' },
            { item: 'Buang balutan di sampah infeksius', cat: 'Pelaksanaan' },
            { item: 'Ganti sarung tangan steril', cat: 'Pelaksanaan' },
            { item: 'Kaji luka (ukuran, warna dasar, eksudat, tepi)', cat: 'Pelaksanaan' },
            { item: 'Bersihkan dengan NaCl 0.9% dari dalam ke luar', cat: 'Pelaksanaan' },
            { item: 'Keringkan sekitar luka', cat: 'Pelaksanaan' },
            { item: 'Aplikasikan dressing sesuai kondisi luka', cat: 'Pelaksanaan' },
            { item: 'Tutup kassa steril, fiksasi plester', cat: 'Pelaksanaan' },
            { item: 'Rapikan, buang sampah infeksius', cat: 'Evaluasi' },
            { item: 'Lepas sarung tangan, cuci tangan', cat: 'Evaluasi' },
            { item: 'Dokumentasikan kondisi luka', cat: 'Evaluasi' }
        ]
    },

    pemfis: {
        title: 'Pemeriksaan Fisik Dasar (Head to Toe)',
        scenario: 'Tn. F, 55 tahun, baru masuk rawat inap dengan keluhan umum. Lakukan pemeriksaan fisik dasar secara head to toe dan dokumentasikan temuan.',
        checklist: [
            { item: 'Cuci tangan, perkenalkan diri', cat: 'Persiapan' },
            { item: 'Jelaskan prosedur, minta persetujuan', cat: 'Persiapan' },
            { item: 'Siapkan alat (stetoskop, penlight, reflex hammer)', cat: 'Persiapan' },
            { item: 'Kaji keadaan umum dan kesadaran (GCS)', cat: 'Pelaksanaan' },
            { item: 'Inspeksi kepala: rambut, kulit kepala', cat: 'Pelaksanaan' },
            { item: 'Inspeksi mata: konjungtiva, sklera, pupil', cat: 'Pelaksanaan' },
            { item: 'Inspeksi telinga, hidung, mulut, tenggorokan', cat: 'Pelaksanaan' },
            { item: 'Inspeksi dan palpasi leher (JVP, tiroid, KGB)', cat: 'Pelaksanaan' },
            { item: 'Inspeksi dada: simetris, retraksi', cat: 'Pelaksanaan' },
            { item: 'Auskultasi paru: suara napas, ronkhi, wheezing', cat: 'Pelaksanaan' },
            { item: 'Auskultasi jantung: BJ I-II, murmur, gallop', cat: 'Pelaksanaan' },
            { item: 'Inspeksi abdomen: distensi, luka', cat: 'Pelaksanaan' },
            { item: 'Auskultasi bising usus', cat: 'Pelaksanaan' },
            { item: 'Palpasi abdomen: nyeri tekan, organomegali', cat: 'Pelaksanaan' },
            { item: 'Inspeksi ekstremitas: edema, CRT, akral', cat: 'Pelaksanaan' },
            { item: 'Cek kekuatan otot dan ROM', cat: 'Pelaksanaan' },
            { item: 'Inspeksi kulit: warna, turgor, lesi', cat: 'Pelaksanaan' },
            { item: 'Dokumentasikan semua temuan', cat: 'Evaluasi' },
            { item: 'Rapikan pasien, cuci tangan', cat: 'Evaluasi' }
        ]
    }
};


// ===== OSCE Logic =====
let timerInterval = null;
let timeLeft = 0;
let totalTime = 0;
let isPaused = false;
let currentStation = null;
let currentMode = 'latihan';

const osceSetup = document.getElementById('osceSetup');
const scenarioCard = document.getElementById('scenarioCard');
const timerCard = document.getElementById('timerCard');
const checklistCard = document.getElementById('checklistCard');
const examHiddenMsg = document.getElementById('examHiddenMsg');
const osceResult = document.getElementById('osceResult');
const reviewChecklist = document.getElementById('reviewChecklist');
const osceStation = document.getElementById('osceStation');
const btnStartOsce = document.getElementById('btnStartOsce');

osceStation.addEventListener('change', function() { btnStartOsce.disabled = !this.value; });

// Start OSCE
btnStartOsce.addEventListener('click', function() {
    const station = osceStation.value;
    currentMode = document.getElementById('osceMode').value;
    const minutes = parseInt(document.getElementById('osceTimer').value) || 10;
    if (!station || !osceDB[station]) return;

    currentStation = osceDB[station];
    totalTime = minutes * 60;
    timeLeft = totalTime;
    isPaused = false;

    osceSetup.style.display = 'none';
    scenarioCard.style.display = 'block';
    timerCard.style.display = 'block';
    osceResult.style.display = 'none';
    reviewChecklist.style.display = 'none';

    // Scenario
    document.getElementById('scenarioText').innerHTML = `<i class="fas fa-info-circle"></i><div>${currentStation.scenario}</div>`;
    document.getElementById('stationTitle').innerHTML = `<i class="fas fa-clipboard-check"></i> ${currentStation.title}`;
    document.getElementById('modeLabel').textContent = currentMode === 'ujian' ? 'MODE UJIAN' : 'MODE LATIHAN';

    // Mode handling
    if (currentMode === 'latihan') {
        checklistCard.style.display = 'block';
        examHiddenMsg.style.display = 'none';
        document.getElementById('checklistHint').textContent = 'Centang setiap langkah yang sudah dilakukan';
        buildChecklist(currentStation.checklist, 'checklistContainer');
    } else {
        checklistCard.style.display = 'none';
        examHiddenMsg.style.display = 'block';
    }

    startTimer();
    showToast(`Station "${currentStation.title}" dimulai! Mode: ${currentMode}`, 'info');
});

function buildChecklist(items, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    let currentCat = '';
    items.forEach((item, idx) => {
        if (item.cat !== currentCat) {
            currentCat = item.cat;
            const h = document.createElement('div');
            h.style.cssText = 'font-weight:700;color:var(--primary);margin:16px 0 8px;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.5px;';
            h.textContent = currentCat;
            container.appendChild(h);
        }
        const div = document.createElement('div');
        div.className = 'checklist-item';
        div.innerHTML = `<input type="checkbox" id="chk-${containerId}-${idx}" data-idx="${idx}"><label for="chk-${containerId}-${idx}">${idx+1}. ${item.item}</label>`;
        div.querySelector('input').addEventListener('change', function() { div.classList.toggle('checked', this.checked); });
        container.appendChild(div);
    });
}


// Timer
function startTimer() {
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        if (!isPaused) {
            timeLeft--;
            updateTimerDisplay();
            if (timeLeft <= 0) { clearInterval(timerInterval); showToast('Waktu habis!', 'warning'); finishOsce(); }
        }
    }, 1000);
}

function updateTimerDisplay() {
    const m = Math.floor(timeLeft / 60), s = timeLeft % 60;
    const display = document.getElementById('timerDisplay');
    display.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    document.getElementById('timerProgress').style.width = `${(timeLeft/totalTime)*100}%`;
    display.classList.remove('warning','danger');
    if (timeLeft <= 60) display.classList.add('danger');
    else if (timeLeft <= totalTime * 0.3) display.classList.add('warning');
}

document.getElementById('btnPause').addEventListener('click', function() {
    isPaused = !isPaused;
    this.innerHTML = isPaused ? '<i class="fas fa-play"></i> Resume' : '<i class="fas fa-pause"></i> Pause';
});

document.getElementById('btnStop').addEventListener('click', finishOsce);

function finishOsce() {
    clearInterval(timerInterval);
    let checked = 0, total = currentStation.checklist.length, missed = [];

    if (currentMode === 'latihan') {
        document.querySelectorAll('#checklistContainer input[type="checkbox"]').forEach((cb, idx) => {
            if (cb.checked) checked++;
            else missed.push(currentStation.checklist[idx].item);
        });
    } else {
        // In exam mode, show checklist now for self-assessment
        checklistCard.style.display = 'block';
        examHiddenMsg.style.display = 'none';
        document.getElementById('checklistHint').textContent = 'Centang langkah-langkah yang SUDAH Anda lakukan tadi (self-assessment):';
        buildChecklist(currentStation.checklist, 'checklistContainer');

        // Show a confirm button
        const confirmBtn = document.createElement('button');
        confirmBtn.className = 'btn btn-success';
        confirmBtn.innerHTML = '<i class="fas fa-check"></i> Konfirmasi Penilaian';
        confirmBtn.style.marginTop = '16px';
        confirmBtn.addEventListener('click', () => {
            confirmBtn.remove();
            calculateOsceResult();
        });
        document.getElementById('checklistContainer').appendChild(confirmBtn);

        timerCard.style.display = 'none';
        scenarioCard.style.display = 'none';
        showToast('Centang langkah yang sudah Anda lakukan, lalu konfirmasi.', 'info');
        return;
    }

    showOsceResult(checked, total, missed);
}

function calculateOsceResult() {
    let checked = 0, total = currentStation.checklist.length, missed = [];
    document.querySelectorAll('#checklistContainer input[type="checkbox"]').forEach((cb, idx) => {
        if (cb.checked) checked++;
        else missed.push(currentStation.checklist[idx].item);
    });
    showOsceResult(checked, total, missed);
}

function showOsceResult(checked, total, missed) {
    const pct = Math.round((checked / total) * 100);
    timerCard.style.display = 'none';
    scenarioCard.style.display = 'none';
    checklistCard.style.display = 'none';
    osceResult.style.display = 'block';

    document.getElementById('osceScore').textContent = `${pct}%`;
    document.getElementById('osceScoreBar').style.width = `${pct}%`;

    let grade = '';
    if (pct >= 85) grade = '<div class="alert alert-success"><i class="fas fa-trophy"></i><span><strong>LULUS - Kompeten!</strong> Anda melakukan hampir semua langkah dengan benar.</span></div>';
    else if (pct >= 70) grade = '<div class="alert alert-warning"><i class="fas fa-exclamation-circle"></i><span><strong>BATAS LULUS.</strong> Beberapa langkah penting terlewat. Perlu perbaikan.</span></div>';
    else grade = '<div class="alert alert-danger"><i class="fas fa-times-circle"></i><span><strong>BELUM LULUS.</strong> Banyak langkah terlewat. Pelajari kembali dan ulangi latihan.</span></div>';
    document.getElementById('osceGrade').innerHTML = grade;

    let fb = `<p style="margin-bottom:12px;font-size:0.9rem;"><strong>Terlaksana:</strong> ${checked}/${total} langkah</p>`;
    if (missed.length > 0) {
        fb += `<div class="alert alert-warning" style="margin-top:8px;"><i class="fas fa-list"></i><div><strong>Langkah terlewat:</strong><ul style="margin-top:8px;padding-left:18px;">`;
        missed.forEach(m => fb += `<li style="margin-bottom:4px;font-size:0.85rem;">${m}</li>`);
        fb += '</ul></div></div>';
    } else {
        fb += '<div class="alert alert-success"><i class="fas fa-check-circle"></i><span>Semua langkah terlaksana!</span></div>';
    }
    document.getElementById('osceFeedback').innerHTML = fb;
    showToast(`OSCE selesai! Skor: ${pct}%`, pct >= 70 ? 'success' : 'warning');
}

// Retry
document.getElementById('btnRetryOsce').addEventListener('click', function() {
    osceResult.style.display = 'none';
    reviewChecklist.style.display = 'none';
    scenarioCard.style.display = 'block';
    timerCard.style.display = 'block';

    timeLeft = totalTime; isPaused = false;
    document.getElementById('btnPause').innerHTML = '<i class="fas fa-pause"></i> Pause';

    if (currentMode === 'latihan') {
        checklistCard.style.display = 'block';
        buildChecklist(currentStation.checklist, 'checklistContainer');
    } else {
        checklistCard.style.display = 'none';
        examHiddenMsg.style.display = 'block';
    }
    startTimer();
});

// Back
document.getElementById('btnBackOsce').addEventListener('click', function() {
    osceResult.style.display = 'none'; reviewChecklist.style.display = 'none';
    scenarioCard.style.display = 'none'; timerCard.style.display = 'none';
    checklistCard.style.display = 'none'; examHiddenMsg.style.display = 'none';
    osceSetup.style.display = 'block';
    osceStation.value = ''; btnStartOsce.disabled = true;
});
