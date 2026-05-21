// ===== NersLab v2 - Kalkulator Obat & Infus =====

function showToast(msg, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    const icons = { success: 'check-circle', error: 'times-circle', info: 'info-circle', warning: 'exclamation-triangle' };
    toast.innerHTML = `<i class="fas fa-${icons[type]}"></i> <span>${msg}</span>`;
    container.appendChild(toast);
    setTimeout(() => { toast.classList.add('hiding'); setTimeout(() => toast.remove(), 300); }, 3000);
}

// Tab Navigation
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        document.getElementById('tab-' + this.dataset.tab).classList.add('active');
    });
});

// ===== Validation Helper =====
function validateField(id, min, max) {
    const el = document.getElementById(id);
    const val = parseFloat(el.value);
    const group = el.closest('.form-group');
    if (isNaN(val) || val < min || (max && val > max)) {
        group.classList.add('error');
        return false;
    }
    group.classList.remove('error');
    return true;
}
function clearErrors() { document.querySelectorAll('.form-group.error').forEach(g => g.classList.remove('error')); }


// ===== 1. Kalkulator Dosis Obat =====
document.getElementById('btnHitungDosis').addEventListener('click', function() {
    clearErrors();
    const v1 = validateField('dosisPerKg', 0.01);
    const v2 = validateField('beratBadan', 0.5, 300);
    const v3 = validateField('sediaanObat', 0.01);
    if (!v1 || !v2 || !v3) { showToast('Mohon perbaiki input yang tidak valid.', 'error'); return; }

    const dosisPerKg = parseFloat(document.getElementById('dosisPerKg').value);
    const bb = parseFloat(document.getElementById('beratBadan').value);
    const sediaan = parseFloat(document.getElementById('sediaanObat').value);
    const frekuensi = parseInt(document.getElementById('frekuensi').value);

    const dosisTotal = dosisPerKg * bb;
    const dosisPerPemberian = dosisTotal / frekuensi;
    const jumlahSediaan = dosisPerPemberian / sediaan;

    const hasil = document.getElementById('hasilDosis');
    hasil.style.display = 'block';
    hasil.innerHTML = `
        <div class="calc-result">
            <div class="result-value">${dosisPerPemberian.toFixed(2)} mg</div>
            <div class="result-unit">per pemberian (${frekuensi}x sehari)</div>
        </div>
        <div class="calc-steps">
            <h4><i class="fas fa-list-ol"></i> Langkah Perhitungan:</h4>
            <ol>
                <li><strong>Dosis total/hari:</strong> ${dosisPerKg} mg/kgBB × ${bb} kg = <strong>${dosisTotal.toFixed(2)} mg/hari</strong></li>
                <li><strong>Dosis per pemberian:</strong> ${dosisTotal.toFixed(2)} mg ÷ ${frekuensi} kali = <strong>${dosisPerPemberian.toFixed(2)} mg/kali</strong></li>
                <li><strong>Jumlah sediaan:</strong> ${dosisPerPemberian.toFixed(2)} mg ÷ ${sediaan} mg/tab = <strong>${jumlahSediaan.toFixed(2)} tablet/mL</strong></li>
            </ol>
        </div>
        <div class="alert alert-info" style="margin-top:14px;">
            <i class="fas fa-info-circle"></i>
            <span>Berikan <strong>${jumlahSediaan.toFixed(2)} tablet/mL</strong> setiap pemberian, <strong>${frekuensi}x sehari</strong>.</span>
        </div>`;
    showToast('Dosis berhasil dihitung!', 'success');
    hasil.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

// ===== 2. Kalkulator Tetesan Infus =====
document.getElementById('btnHitungInfus').addEventListener('click', function() {
    clearErrors();
    const v1 = validateField('volumeInfus', 1);
    const v2 = validateField('waktuInfus', 0.5, 48);
    if (!v1 || !v2) { showToast('Mohon perbaiki input yang tidak valid.', 'error'); return; }

    const volume = parseFloat(document.getElementById('volumeInfus').value);
    const waktu = parseFloat(document.getElementById('waktuInfus').value);
    const faktor = parseInt(document.getElementById('faktorTetes').value);
    const waktuMenit = waktu * 60;
    const tpm = (volume * faktor) / waktuMenit;

    const hasil = document.getElementById('hasilInfus');
    hasil.style.display = 'block';
    hasil.innerHTML = `
        <div class="calc-result">
            <div class="result-value">${Math.round(tpm)} tpm</div>
            <div class="result-unit">tetes per menit</div>
        </div>
        <div class="calc-steps">
            <h4><i class="fas fa-list-ol"></i> Langkah Perhitungan:</h4>
            <ol>
                <li><strong>Rumus:</strong> TPM = (Volume × Faktor Tetes) ÷ Waktu (menit)</li>
                <li><strong>Konversi waktu:</strong> ${waktu} jam = ${waktuMenit} menit</li>
                <li><strong>Hitung:</strong> (${volume} mL × ${faktor}) ÷ ${waktuMenit} menit</li>
                <li><strong>Hasil:</strong> ${(volume * faktor)} ÷ ${waktuMenit} = <strong>${tpm.toFixed(2)} ≈ ${Math.round(tpm)} tpm</strong></li>
            </ol>
        </div>
        <div class="alert alert-info" style="margin-top:14px;">
            <i class="fas fa-info-circle"></i>
            <span>Atur <strong>${Math.round(tpm)} tetes/menit</strong> (per 15 detik = <strong>${Math.round(tpm/4)} tetes</strong>) menggunakan infus set ${faktor === 60 ? 'mikro' : 'makro'} (${faktor} tpm/mL).</span>
        </div>`;
    showToast('Tetesan infus berhasil dihitung!', 'success');
    hasil.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});


// ===== 3. Konversi Satuan =====
const konversiTable = {
    'g_mg':1000,'g_mcg':1000000,'mg_g':0.001,'mg_mcg':1000,
    'mcg_g':0.000001,'mcg_mg':0.001,'L_mL':1000,'L_cc':1000,
    'mL_L':0.001,'mL_cc':1,'cc_L':0.001,'cc_mL':1,
    'g_g':1,'mg_mg':1,'mcg_mcg':1,'L_L':1,'mL_mL':1,'cc_cc':1
};

document.getElementById('btnKonversi').addEventListener('click', function() {
    clearErrors();
    if (!validateField('nilaiKonversi', 0)) { showToast('Masukkan nilai yang valid.', 'error'); return; }
    const nilai = parseFloat(document.getElementById('nilaiKonversi').value);
    const dari = document.getElementById('dariSatuan').value;
    const ke = document.getElementById('keSatuan').value;
    const key = `${dari}_${ke}`;
    const faktor = konversiTable[key];
    const hasil = document.getElementById('hasilKonversi');

    if (faktor === undefined) {
        hasil.style.display = 'block';
        hasil.innerHTML = `<div class="alert alert-danger"><i class="fas fa-times-circle"></i><span>Konversi <strong>${dari}</strong> ke <strong>${ke}</strong> tidak tersedia. Gunakan satuan dalam kelompok sama (berat: g/mg/mcg, volume: L/mL/cc).</span></div>`;
        showToast('Konversi tidak tersedia untuk satuan berbeda kelompok.', 'error');
        return;
    }
    const hasilNilai = nilai * faktor;
    hasil.style.display = 'block';
    hasil.innerHTML = `
        <div class="calc-result">
            <div class="result-value">${hasilNilai.toLocaleString('id-ID')} ${ke}</div>
            <div class="result-unit">${nilai} ${dari} = ${hasilNilai.toLocaleString('id-ID')} ${ke}</div>
        </div>
        <div class="calc-steps">
            <h4><i class="fas fa-list-ol"></i> Langkah:</h4>
            <ol>
                <li><strong>Faktor:</strong> 1 ${dari} = ${faktor.toLocaleString('id-ID')} ${ke}</li>
                <li><strong>Hitung:</strong> ${nilai} × ${faktor.toLocaleString('id-ID')} = <strong>${hasilNilai.toLocaleString('id-ID')} ${ke}</strong></li>
            </ol>
        </div>`;
    showToast('Konversi berhasil!', 'success');
});


// ===== 4. Latihan Soal =====
const soalBank = [
    { soal: 'Amoxicillin 25 mg/kgBB/hari dibagi 3 dosis untuk anak BB 20 kg. Sediaan sirup 125 mg/5 mL. Berapa mL per pemberian?', jawaban: 6.67, toleransi: 0.1, penjelasan: 'Dosis/hari = 25×20 = 500 mg. Per pemberian = 500÷3 = 166.67 mg. Volume = (166.67÷125)×5 = 6.67 mL.' },
    { soal: 'Infus RL 1000 mL dalam 12 jam, infus set makro (20 tpm/mL). Berapa tetes per menit?', jawaban: 28, toleransi: 1, penjelasan: 'TPM = (1000×20)÷(12×60) = 20000÷720 = 27.78 ≈ 28 tpm.' },
    { soal: 'Dopamine 5 mcg/kgBB/menit untuk pasien BB 70 kg. Sediaan 200 mg/250 mL NaCl. Berapa mL/jam pada syringe pump?', jawaban: 26.25, toleransi: 0.5, penjelasan: 'Dosis/menit = 5×70 = 350 mcg/mnt. Konsentrasi = 200.000 mcg÷250 mL = 800 mcg/mL. mL/mnt = 350÷800 = 0.4375. mL/jam = 0.4375×60 = 26.25 mL/jam.' },
    { soal: 'Anak BB 15 kg, Paracetamol 15 mg/kgBB/kali. Sediaan drop 100 mg/mL. Berapa mL per pemberian?', jawaban: 2.25, toleransi: 0.05, penjelasan: 'Dosis = 15×15 = 225 mg. Volume = 225÷100 = 2.25 mL.' },
    { soal: 'NaCl 0.9% 500 mL dalam 6 jam, infus set mikro (60 tpm/mL). Berapa tetes per menit?', jawaban: 83, toleransi: 1, penjelasan: 'TPM = (500×60)÷(6×60) = 30000÷360 = 83.33 ≈ 83 tpm.' },
    { soal: 'Gentamicin 5 mg/kgBB/hari dosis tunggal IV, pasien BB 60 kg. Sediaan 80 mg/2 mL. Berapa mL yang disuntikkan?', jawaban: 7.5, toleransi: 0.1, penjelasan: 'Dosis = 5×60 = 300 mg. Konsentrasi = 80÷2 = 40 mg/mL. Volume = 300÷40 = 7.5 mL.' },
    { soal: 'Heparin 25.000 unit/500 mL NaCl. Dokter minta 1000 unit/jam. Berapa mL/jam pada infusion pump?', jawaban: 20, toleransi: 0.5, penjelasan: 'Konsentrasi = 25.000÷500 = 50 unit/mL. mL/jam = 1000÷50 = 20 mL/jam.' },
    { soal: 'Bayi BB 3.5 kg, Ampicillin 50 mg/kgBB/kali tiap 6 jam IV. Sediaan 500 mg/5 mL. Berapa mL per pemberian?', jawaban: 1.75, toleransi: 0.05, penjelasan: 'Dosis = 50×3.5 = 175 mg. Konsentrasi = 500÷5 = 100 mg/mL. Volume = 175÷100 = 1.75 mL.' },
    { soal: 'Infus D5% 1500 mL dalam 24 jam dengan infus set makro (20 tpm/mL). Berapa tetes per menit?', jawaban: 21, toleransi: 1, penjelasan: 'TPM = (1500×20)÷(24×60) = 30000÷1440 = 20.83 ≈ 21 tpm.' },
    { soal: 'Ceftriaxone 50 mg/kgBB/hari dibagi 2 dosis untuk anak BB 25 kg. Sediaan vial 1000 mg dilarutkan 10 mL. Berapa mL per pemberian?', jawaban: 6.25, toleransi: 0.1, penjelasan: 'Dosis/hari = 50×25 = 1250 mg. Per dosis = 1250÷2 = 625 mg. Konsentrasi = 1000÷10 = 100 mg/mL. Volume = 625÷100 = 6.25 mL.' }
];

let currentSoal = null;

document.getElementById('btnSoalBaru').addEventListener('click', function() {
    const idx = Math.floor(Math.random() * soalBank.length);
    currentSoal = soalBank[idx];
    document.getElementById('soalLatihan').innerHTML = `<div class="alert alert-info"><i class="fas fa-question-circle"></i><div><strong>Soal:</strong><br><br>${currentSoal.soal}</div></div>`;
    document.getElementById('jawabanGroup').style.display = 'block';
    document.getElementById('btnCekJawaban').style.display = 'inline-flex';
    document.getElementById('jawabanUser').value = '';
    document.getElementById('hasilLatihan').style.display = 'none';
    showToast('Soal baru dimuat!', 'info');
});

document.getElementById('btnCekJawaban').addEventListener('click', function() {
    if (!currentSoal) return;
    const jawaban = parseFloat(document.getElementById('jawabanUser').value);
    if (isNaN(jawaban)) { showToast('Masukkan jawaban berupa angka.', 'error'); return; }

    const selisih = Math.abs(jawaban - currentSoal.jawaban);
    const benar = selisih <= currentSoal.toleransi;
    const hasil = document.getElementById('hasilLatihan');
    hasil.style.display = 'block';
    hasil.innerHTML = `
        <div class="alert ${benar ? 'alert-success' : 'alert-danger'}" style="margin-top:16px;">
            <i class="fas fa-${benar ? 'check-circle' : 'times-circle'}"></i>
            <span>${benar ? '<strong>Benar!</strong> Jawaban Anda tepat.' : `<strong>Kurang tepat.</strong> Jawaban benar: <strong>${currentSoal.jawaban}</strong>`}</span>
        </div>
        <div class="calc-steps" style="margin-top:12px;">
            <h4><i class="fas fa-lightbulb"></i> Penjelasan Langkah:</h4>
            <p style="line-height:1.7;">${currentSoal.penjelasan}</p>
        </div>`;
    showToast(benar ? 'Jawaban benar!' : 'Jawaban kurang tepat.', benar ? 'success' : 'error');
});
