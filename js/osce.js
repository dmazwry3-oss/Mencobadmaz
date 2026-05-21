// ===== NersLab - Simulasi OSCE =====

const osceDB = {
    cuciTangan: {
        title: 'Cuci Tangan (Hand Hygiene) - 6 Langkah WHO',
        checklist: [
            { item: 'Persiapan: melepas perhiasan, menggulung lengan baju', category: 'Persiapan' },
            { item: 'Basahi tangan dengan air mengalir', category: 'Pelaksanaan' },
            { item: 'Tuangkan sabun secukupnya (2-3 mL)', category: 'Pelaksanaan' },
            { item: 'Langkah 1: Gosok kedua telapak tangan', category: 'Pelaksanaan' },
            { item: 'Langkah 2: Gosok punggung tangan kiri dengan telapak kanan dan sebaliknya', category: 'Pelaksanaan' },
            { item: 'Langkah 3: Gosok sela-sela jari', category: 'Pelaksanaan' },
            { item: 'Langkah 4: Gosok buku-buku jari (posisi terkunci)', category: 'Pelaksanaan' },
            { item: 'Langkah 5: Gosok ibu jari secara memutar dan sebaliknya', category: 'Pelaksanaan' },
            { item: 'Langkah 6: Gosok ujung jari memutar di telapak tangan', category: 'Pelaksanaan' },
            { item: 'Bilas tangan dengan air mengalir', category: 'Pelaksanaan' },
            { item: 'Keringkan tangan dengan tissue/handuk bersih', category: 'Pelaksanaan' },
            { item: 'Tutup kran menggunakan tissue (jika kran manual)', category: 'Pelaksanaan' },
            { item: 'Durasi cuci tangan: 40-60 detik', category: 'Evaluasi' }
        ]
    },
    ttv: {
        title: 'Pemeriksaan Tanda-Tanda Vital (TTV)',
        checklist: [
            { item: 'Identifikasi pasien (nama, tanggal lahir)', category: 'Persiapan' },
            { item: 'Jelaskan prosedur dan tujuan kepada pasien', category: 'Persiapan' },
            { item: 'Cuci tangan', category: 'Persiapan' },
            { item: 'Siapkan alat: tensimeter, stetoskop, termometer, jam/timer', category: 'Persiapan' },
            { item: 'Pastikan pasien dalam posisi nyaman (duduk/berbaring) minimal 5 menit', category: 'Persiapan' },
            { item: 'Ukur tekanan darah: pasang manset 2-3 cm di atas fossa cubiti', category: 'Pelaksanaan' },
            { item: 'Palpasi arteri brachialis, letakkan stetoskop', category: 'Pelaksanaan' },
            { item: 'Pompa manset 20-30 mmHg di atas hilangnya pulsasi', category: 'Pelaksanaan' },
            { item: 'Kempeskan perlahan (2-3 mmHg/detik), catat sistolik dan diastolik', category: 'Pelaksanaan' },
            { item: 'Hitung nadi: palpasi arteri radialis selama 60 detik (atau 15 detik x 4)', category: 'Pelaksanaan' },
            { item: 'Kaji irama, kekuatan, dan keteraturan nadi', category: 'Pelaksanaan' },
            { item: 'Hitung respirasi: observasi gerakan dada selama 60 detik', category: 'Pelaksanaan' },
            { item: 'Ukur suhu tubuh: tempatkan termometer sesuai lokasi (aksila/oral/rektal)', category: 'Pelaksanaan' },
            { item: 'Catat semua hasil pemeriksaan', category: 'Evaluasi' },
            { item: 'Informasikan hasil kepada pasien', category: 'Evaluasi' },
            { item: 'Rapikan alat, cuci tangan', category: 'Evaluasi' },
            { item: 'Dokumentasikan di rekam medis', category: 'Evaluasi' }
        ]
    },
    injeksi: {
        title: 'Injeksi Intramuskular (IM)',
        checklist: [
            { item: 'Verifikasi identitas pasien (minimal 2 identitas)', category: 'Persiapan' },
            { item: 'Cek 6 Benar obat (pasien, obat, dosis, waktu, cara, dokumentasi)', category: 'Persiapan' },
            { item: 'Cek tanggal kadaluarsa dan kondisi obat', category: 'Persiapan' },
            { item: 'Jelaskan prosedur kepada pasien, minta persetujuan', category: 'Persiapan' },
            { item: 'Cuci tangan, gunakan sarung tangan bersih', category: 'Persiapan' },
            { item: 'Siapkan alat: spuit sesuai volume, jarum IM (21-23G), kapas alkohol, plester', category: 'Persiapan' },
            { item: 'Aspirasi obat dengan teknik aseptik', category: 'Pelaksanaan' },
            { item: 'Tentukan lokasi injeksi (vastus lateralis/ventrogluteal/deltoid)', category: 'Pelaksanaan' },
            { item: 'Desinfeksi area injeksi dengan kapas alkohol (melingkar dari dalam ke luar)', category: 'Pelaksanaan' },
            { item: 'Regangkan kulit, tusukkan jarum 90 derajat dengan cepat', category: 'Pelaksanaan' },
            { item: 'Aspirasi (tarik plunger): cek apakah ada darah', category: 'Pelaksanaan' },
            { item: 'Jika tidak ada darah, injeksikan obat perlahan', category: 'Pelaksanaan' },
            { item: 'Cabut jarum dengan cepat, tekan dengan kapas', category: 'Pelaksanaan' },
            { item: 'Buang jarum di safety box tanpa recap', category: 'Pelaksanaan' },
            { item: 'Observasi reaksi pasien (alergi, nyeri)', category: 'Evaluasi' },
            { item: 'Lepas sarung tangan, cuci tangan', category: 'Evaluasi' },
            { item: 'Dokumentasikan: obat, dosis, waktu, lokasi, reaksi', category: 'Evaluasi' }
        ]
    },
    infus: {
        title: 'Pemasangan Infus (IV Line)',
        checklist: [
            { item: 'Verifikasi identitas pasien dan instruksi dokter', category: 'Persiapan' },
            { item: 'Jelaskan prosedur kepada pasien', category: 'Persiapan' },
            { item: 'Cuci tangan', category: 'Persiapan' },
            { item: 'Siapkan alat: infus set, cairan, IV catheter, tourniquet, kapas alkohol, plester, perlak', category: 'Persiapan' },
            { item: 'Cek cairan infus (jenis, jumlah, kadaluarsa, kejernihan)', category: 'Persiapan' },
            { item: 'Isi infus set dengan cairan, pastikan tidak ada udara', category: 'Pelaksanaan' },
            { item: 'Pasang perlak dan pengalas di bawah tangan pasien', category: 'Pelaksanaan' },
            { item: 'Pasang tourniquet 10-15 cm di atas lokasi tusukan', category: 'Pelaksanaan' },
            { item: 'Pilih vena yang sesuai (vena metacarpal/cephalic/basilica)', category: 'Pelaksanaan' },
            { item: 'Gunakan sarung tangan steril', category: 'Pelaksanaan' },
            { item: 'Desinfeksi area tusukan dengan kapas alkohol', category: 'Pelaksanaan' },
            { item: 'Tusukkan IV catheter dengan sudut 15-30 derajat, bevel menghadap atas', category: 'Pelaksanaan' },
            { item: 'Observasi flashback darah di chamber', category: 'Pelaksanaan' },
            { item: 'Tarik mandrin sambil mendorong catheter masuk', category: 'Pelaksanaan' },
            { item: 'Lepas tourniquet', category: 'Pelaksanaan' },
            { item: 'Sambungkan dengan infus set, buka klem', category: 'Pelaksanaan' },
            { item: 'Fiksasi catheter dengan plester transparan', category: 'Pelaksanaan' },
            { item: 'Atur tetesan sesuai instruksi', category: 'Pelaksanaan' },
            { item: 'Catat tanggal pemasangan pada plester', category: 'Evaluasi' },
            { item: 'Observasi tanda infiltrasi/phlebitis', category: 'Evaluasi' },
            { item: 'Rapikan pasien, buang sampah, cuci tangan', category: 'Evaluasi' },
            { item: 'Dokumentasikan di rekam medis', category: 'Evaluasi' }
        ]
    },
    kateter: {
        title: 'Pemasangan Kateter Urine',
        checklist: [
            { item: 'Verifikasi identitas dan instruksi dokter', category: 'Persiapan' },
            { item: 'Jelaskan prosedur, tujuan, dan minta informed consent', category: 'Persiapan' },
            { item: 'Siapkan alat steril: kateter Foley, urine bag, spuit 10cc, aquadest, jelly, duk steril', category: 'Persiapan' },
            { item: 'Pasang sampiran/tirai untuk privasi pasien', category: 'Persiapan' },
            { item: 'Cuci tangan, gunakan sarung tangan steril', category: 'Persiapan' },
            { item: 'Posisikan pasien: wanita (dorsal recumbent), pria (supinasi)', category: 'Pelaksanaan' },
            { item: 'Pasang duk steril', category: 'Pelaksanaan' },
            { item: 'Bersihkan area genital dengan cairan antiseptik', category: 'Pelaksanaan' },
            { item: 'Oleskan jelly pada ujung kateter', category: 'Pelaksanaan' },
            { item: 'Masukkan kateter perlahan hingga urine keluar', category: 'Pelaksanaan' },
            { item: 'Dorong kateter 2-3 cm lagi setelah urine keluar', category: 'Pelaksanaan' },
            { item: 'Kembangkan balon kateter dengan aquadest (10-15 mL)', category: 'Pelaksanaan' },
            { item: 'Tarik kateter perlahan sampai terasa tahanan (balon di bladder neck)', category: 'Pelaksanaan' },
            { item: 'Sambungkan dengan urine bag', category: 'Pelaksanaan' },
            { item: 'Fiksasi kateter (pria: di abdomen, wanita: di paha atas)', category: 'Pelaksanaan' },
            { item: 'Gantung urine bag di bawah level bladder', category: 'Evaluasi' },
            { item: 'Observasi warna, jumlah, dan kejernihan urine', category: 'Evaluasi' },
            { item: 'Rapikan pasien, lepas sarung tangan, cuci tangan', category: 'Evaluasi' },
            { item: 'Dokumentasikan: ukuran kateter, volume balon, respon pasien', category: 'Evaluasi' }
        ]
    },
    komunikasi: {
        title: 'Komunikasi Terapeutik',
        checklist: [
            { item: 'Fase Prainteraksi: kaji data pasien, siapkan rencana', category: 'Persiapan' },
            { item: 'Fase Orientasi: salam terapeutik, perkenalkan diri', category: 'Pelaksanaan' },
            { item: 'Validasi perasaan pasien', category: 'Pelaksanaan' },
            { item: 'Buat kontrak: topik, waktu, tempat', category: 'Pelaksanaan' },
            { item: 'Gunakan teknik mendengar aktif (active listening)', category: 'Pelaksanaan' },
            { item: 'Tunjukkan empati verbal dan non-verbal', category: 'Pelaksanaan' },
            { item: 'Kontak mata sesuai budaya', category: 'Pelaksanaan' },
            { item: 'Gunakan pertanyaan terbuka', category: 'Pelaksanaan' },
            { item: 'Refleksi perasaan pasien', category: 'Pelaksanaan' },
            { item: 'Klarifikasi informasi yang belum jelas', category: 'Pelaksanaan' },
            { item: 'Berikan informasi/edukasi sesuai kebutuhan', category: 'Pelaksanaan' },
            { item: 'Gunakan bahasa yang mudah dipahami', category: 'Pelaksanaan' },
            { item: 'Fase Terminasi: evaluasi perasaan pasien', category: 'Evaluasi' },
            { item: 'Evaluasi pencapaian tujuan', category: 'Evaluasi' },
            { item: 'Buat rencana tindak lanjut', category: 'Evaluasi' },
            { item: 'Akhiri dengan salam', category: 'Evaluasi' }
        ]
    },
    oksigen: {
        title: 'Pemberian Oksigen (Nasal Kanul)',
        checklist: [
            { item: 'Verifikasi identitas pasien dan instruksi dokter', category: 'Persiapan' },
            { item: 'Kaji tanda-tanda hipoksia (sianosis, sesak, SpO2)', category: 'Persiapan' },
            { item: 'Jelaskan prosedur kepada pasien', category: 'Persiapan' },
            { item: 'Cuci tangan', category: 'Persiapan' },
            { item: 'Siapkan alat: tabung O2/flowmeter, humidifier, nasal kanul, air steril', category: 'Persiapan' },
            { item: 'Isi humidifier dengan air steril sampai batas', category: 'Pelaksanaan' },
            { item: 'Sambungkan nasal kanul ke flowmeter', category: 'Pelaksanaan' },
            { item: 'Atur flow rate sesuai instruksi (1-6 L/mnt)', category: 'Pelaksanaan' },
            { item: 'Cek aliran O2 dengan merasakan di tangan', category: 'Pelaksanaan' },
            { item: 'Pasang nasal kanul pada hidung pasien', category: 'Pelaksanaan' },
            { item: 'Fiksasi selang di belakang telinga dan di bawah dagu', category: 'Pelaksanaan' },
            { item: 'Pastikan pasien nyaman, tidak ada tekanan berlebih', category: 'Pelaksanaan' },
            { item: 'Observasi SpO2 dengan pulse oximetry', category: 'Evaluasi' },
            { item: 'Kaji tanda-tanda perbaikan (sesak berkurang, sianosis hilang)', category: 'Evaluasi' },
            { item: 'Cek iritasi hidung dan kekeringan mukosa', category: 'Evaluasi' },
            { item: 'Dokumentasikan: flow rate, SpO2, respon pasien', category: 'Evaluasi' }
        ]
    },
    luka: {
        title: 'Perawatan Luka (Wound Care)',
        checklist: [
            { item: 'Verifikasi identitas pasien', category: 'Persiapan' },
            { item: 'Jelaskan prosedur dan tujuan', category: 'Persiapan' },
            { item: 'Kaji nyeri pasien, berikan analgetik jika perlu (30 menit sebelumnya)', category: 'Persiapan' },
            { item: 'Cuci tangan, siapkan alat steril: set ganti balutan, NaCl, kassa, plester', category: 'Persiapan' },
            { item: 'Gunakan sarung tangan bersih untuk membuka balutan lama', category: 'Pelaksanaan' },
            { item: 'Observasi balutan lama (rembesan, bau, warna)', category: 'Pelaksanaan' },
            { item: 'Buang balutan kotor di tempat sampah infeksius', category: 'Pelaksanaan' },
            { item: 'Ganti sarung tangan dengan sarung tangan steril', category: 'Pelaksanaan' },
            { item: 'Kaji luka: ukuran, kedalaman, warna dasar luka, eksudat, bau, tepi luka', category: 'Pelaksanaan' },
            { item: 'Bersihkan luka dengan NaCl 0.9% dari dalam ke luar', category: 'Pelaksanaan' },
            { item: 'Keringkan area sekitar luka dengan kassa steril', category: 'Pelaksanaan' },
            { item: 'Aplikasikan topikal/wound dressing sesuai kondisi luka', category: 'Pelaksanaan' },
            { item: 'Tutup dengan kassa steril, fiksasi dengan plester', category: 'Pelaksanaan' },
            { item: 'Rapikan pasien, buang sampah infeksius', category: 'Evaluasi' },
            { item: 'Lepas sarung tangan, cuci tangan', category: 'Evaluasi' },
            { item: 'Dokumentasikan: kondisi luka, tindakan, respon pasien', category: 'Evaluasi' }
        ]
    }
};



// ===== OSCE Logic =====
let timerInterval = null;
let timeLeft = 0;
let totalTime = 0;
let isPaused = false;
let currentStation = null;

const osceSetup = document.getElementById('osceSetup');
const timerCard = document.getElementById('timerCard');
const checklistCard = document.getElementById('checklistCard');
const osceResult = document.getElementById('osceResult');
const osceStation = document.getElementById('osceStation');
const btnStartOsce = document.getElementById('btnStartOsce');

// Enable start button
osceStation.addEventListener('change', function() {
    btnStartOsce.disabled = !this.value;
});

// Start OSCE
btnStartOsce.addEventListener('click', function() {
    const station = osceStation.value;
    const mode = document.getElementById('osceMode').value;
    const minutes = parseInt(document.getElementById('osceTimer').value) || 10;

    if (!station || !osceDB[station]) return;

    currentStation = osceDB[station];
    totalTime = minutes * 60;
    timeLeft = totalTime;
    isPaused = false;

    // Show UI
    osceSetup.style.display = 'none';
    timerCard.style.display = 'block';
    checklistCard.style.display = 'block';
    osceResult.style.display = 'none';

    document.getElementById('stationTitle').textContent = currentStation.title;
    document.getElementById('modeLabel').textContent = mode === 'ujian' ? 'MODE UJIAN' : 'MODE LATIHAN';

    // Build checklist
    buildChecklist(currentStation.checklist);

    // Start timer if ujian mode
    if (mode === 'ujian') {
        startTimer();
    } else {
        document.getElementById('timerDisplay').textContent = 'LATIHAN';
        document.getElementById('timerDisplay').classList.remove('warning', 'danger');
        document.getElementById('timerProgress').style.width = '100%';
    }
});

function buildChecklist(items) {
    const container = document.getElementById('checklistContainer');
    container.innerHTML = '';

    let currentCategory = '';
    items.forEach((item, idx) => {
        if (item.category !== currentCategory) {
            currentCategory = item.category;
            const catHeader = document.createElement('div');
            catHeader.style.cssText = 'font-weight:700;color:var(--primary);margin:16px 0 8px;font-size:0.85rem;text-transform:uppercase;';
            catHeader.textContent = currentCategory;
            container.appendChild(catHeader);
        }

        const div = document.createElement('div');
        div.className = 'checklist-item';
        div.innerHTML = `
            <input type="checkbox" id="check-${idx}" data-idx="${idx}">
            <label for="check-${idx}">${idx + 1}. ${item.item}</label>
        `;
        div.querySelector('input').addEventListener('change', function() {
            if (this.checked) {
                div.classList.add('checked');
            } else {
                div.classList.remove('checked');
            }
        });
        container.appendChild(div);
    });
}

// Timer Functions
function startTimer() {
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        if (!isPaused) {
            timeLeft--;
            updateTimerDisplay();
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                timerInterval = null;
                alert('Waktu habis! Station OSCE selesai.');
                finishOsce();
            }
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const display = document.getElementById('timerDisplay');
    display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    const progress = (timeLeft / totalTime) * 100;
    document.getElementById('timerProgress').style.width = `${progress}%`;

    // Color warnings
    display.classList.remove('warning', 'danger');
    if (timeLeft <= 60) {
        display.classList.add('danger');
    } else if (timeLeft <= totalTime * 0.3) {
        display.classList.add('warning');
    }
}

// Pause/Resume
document.getElementById('btnPause').addEventListener('click', function() {
    isPaused = !isPaused;
    this.innerHTML = isPaused
        ? '<i class="fas fa-play"></i> Resume'
        : '<i class="fas fa-pause"></i> Pause';
});

// Stop/Finish
document.getElementById('btnStop').addEventListener('click', finishOsce);

function finishOsce() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }

    const checkboxes = document.querySelectorAll('#checklistContainer input[type="checkbox"]');
    const total = checkboxes.length;
    let checked = 0;
    const missed = [];

    checkboxes.forEach((cb, idx) => {
        if (cb.checked) {
            checked++;
        } else {
            missed.push(currentStation.checklist[idx].item);
        }
    });

    const percentage = Math.round((checked / total) * 100);

    // Show result
    timerCard.style.display = 'none';
    checklistCard.style.display = 'none';
    osceResult.style.display = 'block';

    document.getElementById('osceScore').textContent = `${percentage}%`;
    document.getElementById('osceScoreBar').style.width = `${percentage}%`;

    let grade = '';
    if (percentage >= 85) grade = '<span style="color:green;font-size:1.2rem;"><i class="fas fa-trophy"></i> LULUS - Kompeten</span>';
    else if (percentage >= 70) grade = '<span style="color:orange;font-size:1.2rem;"><i class="fas fa-exclamation-circle"></i> BATAS - Perlu perbaikan</span>';
    else grade = '<span style="color:red;font-size:1.2rem;"><i class="fas fa-times-circle"></i> BELUM LULUS - Perlu latihan ulang</span>';

    document.getElementById('osceGrade').innerHTML = grade;

    let feedbackHTML = `<p style="margin-bottom:12px;"><strong>Terlaksana:</strong> ${checked}/${total} langkah</p>`;
    if (missed.length > 0) {
        feedbackHTML += `<div class="alert alert-warning"><strong>Langkah yang terlewat:</strong><ul style="margin-top:8px;padding-left:20px;">`;
        missed.forEach(m => {
            feedbackHTML += `<li style="margin-bottom:4px;">${m}</li>`;
        });
        feedbackHTML += '</ul></div>';
    } else {
        feedbackHTML += '<div class="alert alert-success"><i class="fas fa-check-circle"></i> Semua langkah terlaksana dengan baik!</div>';
    }

    document.getElementById('osceFeedback').innerHTML = feedbackHTML;
}

// Retry same station
document.getElementById('btnRetryOsce').addEventListener('click', function() {
    osceResult.style.display = 'none';
    timerCard.style.display = 'block';
    checklistCard.style.display = 'block';

    // Reset checklist
    document.querySelectorAll('#checklistContainer input[type="checkbox"]').forEach(cb => {
        cb.checked = false;
        cb.closest('.checklist-item').classList.remove('checked');
    });

    // Reset timer
    const mode = document.getElementById('osceMode').value;
    timeLeft = totalTime;
    isPaused = false;
    document.getElementById('btnPause').innerHTML = '<i class="fas fa-pause"></i> Pause';

    if (mode === 'ujian') {
        startTimer();
    }
});

// Back to menu
document.getElementById('btnBackOsce').addEventListener('click', function() {
    osceResult.style.display = 'none';
    osceSetup.style.display = 'block';
    osceStation.value = '';
    btnStartOsce.disabled = true;
});
