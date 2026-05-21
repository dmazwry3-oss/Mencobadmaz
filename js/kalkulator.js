// ===== NersLab - Kalkulator Obat & Infus =====

// ===== Tab Navigation =====
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        document.getElementById('tab-' + this.dataset.tab).classList.add('active');
    });
});

// ===== 1. Kalkulator Dosis Obat =====
document.getElementById('btnHitungDosis').addEventListener('click', function() {
    const dosisPerKg = parseFloat(document.getElementById('dosisPerKg').value);
    const bb = parseFloat(document.getElementById('beratBadan').value);
    const sediaan = parseFloat(document.getElementById('sediaanObat').value);
    const frekuensi = parseInt(document.getElementById('frekuensi').value);

    if (!dosisPerKg || !bb || !sediaan) {
        alert('Mohon isi semua field yang diperlukan.');
        return;
    }

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
                <li><strong>Dosis total per hari:</strong> ${dosisPerKg} mg/kgBB x ${bb} kg = <strong>${dosisTotal.toFixed(2)} mg/hari</strong></li>
                <li><strong>Dosis per pemberian:</strong> ${dosisTotal.toFixed(2)} mg / ${frekuensi} kali = <strong>${dosisPerPemberian.toFixed(2)} mg/kali</strong></li>
                <li><strong>Jumlah sediaan per pemberian:</strong> ${dosisPerPemberian.toFixed(2)} mg / ${sediaan} mg = <strong>${jumlahSediaan.toFixed(2)} tablet/mL</strong></li>
            </ol>
        </div>
        <div class="alert alert-info" style="margin-top:12px;">
            <i class="fas fa-info-circle"></i> Berikan <strong>${jumlahSediaan.toFixed(2)}</strong> tablet/mL setiap pemberian, <strong>${frekuensi}x sehari</strong>.
        </div>
    `;
});



// ===== 2. Kalkulator Tetesan Infus =====
document.getElementById('btnHitungInfus').addEventListener('click', function() {
    const volume = parseFloat(document.getElementById('volumeInfus').value);
    const waktu = parseFloat(document.getElementById('waktuInfus').value);
    const faktor = parseInt(document.getElementById('faktorTetes').value);

    if (!volume || !waktu) {
        alert('Mohon isi volume cairan dan waktu pemberian.');
        return;
    }

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
                <li><strong>Rumus:</strong> TPM = (Volume x Faktor Tetes) / (Waktu dalam menit)</li>
                <li><strong>Konversi waktu:</strong> ${waktu} jam = ${waktuMenit} menit</li>
                <li><strong>Perhitungan:</strong> (${volume} mL x ${faktor} tetes/mL) / ${waktuMenit} menit</li>
                <li><strong>Hasil:</strong> ${(volume * faktor).toFixed(0)} / ${waktuMenit} = <strong>${tpm.toFixed(2)} tpm ≈ ${Math.round(tpm)} tpm</strong></li>
            </ol>
        </div>
        <div class="alert alert-info" style="margin-top:12px;">
            <i class="fas fa-info-circle"></i> Atur tetesan infus <strong>${Math.round(tpm)} tetes/menit</strong> menggunakan infus set ${faktor === 60 ? 'mikro' : 'makro'} (${faktor} tetes/mL).
        </div>
        <div class="alert alert-warning" style="margin-top:8px;">
            <i class="fas fa-exclamation-triangle"></i> <strong>Tips:</strong> Hitung per 15 detik = ${Math.round(tpm / 4)} tetes untuk memudahkan pengaturan di lapangan.
        </div>
    `;
});

// ===== 3. Konversi Satuan =====
const konversiTable = {
    'g_mg': 1000,
    'g_mcg': 1000000,
    'mg_g': 0.001,
    'mg_mcg': 1000,
    'mcg_g': 0.000001,
    'mcg_mg': 0.001,
    'L_mL': 1000,
    'L_cc': 1000,
    'mL_L': 0.001,
    'mL_cc': 1,
    'cc_L': 0.001,
    'cc_mL': 1,
    'g_g': 1, 'mg_mg': 1, 'mcg_mcg': 1, 'L_L': 1, 'mL_mL': 1, 'cc_cc': 1
};

document.getElementById('btnKonversi').addEventListener('click', function() {
    const nilai = parseFloat(document.getElementById('nilaiKonversi').value);
    const dari = document.getElementById('dariSatuan').value;
    const ke = document.getElementById('keSatuan').value;

    if (isNaN(nilai)) {
        alert('Mohon masukkan nilai yang valid.');
        return;
    }

    const key = `${dari}_${ke}`;
    const faktor = konversiTable[key];

    const hasil = document.getElementById('hasilKonversi');

    if (faktor === undefined) {
        hasil.style.display = 'block';
        hasil.innerHTML = `<div class="alert alert-danger"><i class="fas fa-times-circle"></i> Konversi dari ${dari} ke ${ke} tidak tersedia. Pastikan satuan dalam kelompok yang sama (berat: g/mg/mcg, volume: L/mL/cc).</div>`;
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
                <li><strong>Faktor konversi:</strong> 1 ${dari} = ${faktor.toLocaleString('id-ID')} ${ke}</li>
                <li><strong>Perhitungan:</strong> ${nilai} x ${faktor.toLocaleString('id-ID')} = <strong>${hasilNilai.toLocaleString('id-ID')} ${ke}</strong></li>
            </ol>
        </div>
    `;
});



// ===== 4. Latihan Soal =====
const soalBank = [
    {
        soal: 'Dokter meresepkan Amoxicillin 25 mg/kgBB/hari dibagi 3 dosis untuk anak BB 20 kg. Sediaan sirup 125 mg/5 mL. Berapa mL yang diberikan per pemberian?',
        jawaban: 6.67,
        toleransi: 0.1,
        penjelasan: 'Dosis/hari = 25 x 20 = 500 mg. Per pemberian = 500/3 = 166.67 mg. Volume = (166.67/125) x 5 = 6.67 mL.'
    },
    {
        soal: 'Pasien mendapat infus RL 1000 mL dalam 12 jam menggunakan infus set makro (20 tetes/mL). Berapa tetes per menit?',
        jawaban: 28,
        toleransi: 1,
        penjelasan: 'TPM = (1000 x 20) / (12 x 60) = 20000/720 = 27.78 ≈ 28 tpm.'
    },
    {
        soal: 'Dokter meresepkan Dopamine 5 mcg/kgBB/menit untuk pasien BB 70 kg. Sediaan Dopamine 200 mg dalam 250 mL NaCl. Berapa mL/jam yang diatur pada syringe pump?',
        jawaban: 26.25,
        toleransi: 0.5,
        penjelasan: 'Dosis/menit = 5 x 70 = 350 mcg/menit. Konsentrasi = 200.000 mcg / 250 mL = 800 mcg/mL. mL/menit = 350/800 = 0.4375 mL/menit. mL/jam = 0.4375 x 60 = 26.25 mL/jam.'
    },
    {
        soal: 'Anak BB 15 kg mendapat Paracetamol 15 mg/kgBB/kali. Sediaan drop 100 mg/mL. Berapa mL per pemberian?',
        jawaban: 2.25,
        toleransi: 0.05,
        penjelasan: 'Dosis = 15 x 15 = 225 mg. Volume = 225/100 = 2.25 mL per pemberian.'
    },
    {
        soal: 'Pasien mendapat NaCl 0.9% 500 mL dalam 6 jam menggunakan infus set mikro (60 tetes/mL). Berapa tetes per menit?',
        jawaban: 83,
        toleransi: 1,
        penjelasan: 'TPM = (500 x 60) / (6 x 60) = 30000/360 = 83.33 ≈ 83 tpm.'
    },
    {
        soal: 'Dokter meresepkan Gentamicin 5 mg/kgBB/hari dosis tunggal IV untuk pasien BB 60 kg. Sediaan vial 80 mg/2 mL. Berapa mL yang disuntikkan?',
        jawaban: 7.5,
        toleransi: 0.1,
        penjelasan: 'Dosis = 5 x 60 = 300 mg. Konsentrasi = 80 mg/2 mL = 40 mg/mL. Volume = 300/40 = 7.5 mL.'
    },
    {
        soal: 'Heparin drip 25.000 unit dalam 500 mL NaCl. Dokter meminta 1000 unit/jam. Berapa mL/jam pada infusion pump?',
        jawaban: 20,
        toleransi: 0.5,
        penjelasan: 'Konsentrasi = 25.000 unit / 500 mL = 50 unit/mL. mL/jam = 1000/50 = 20 mL/jam.'
    },
    {
        soal: 'Bayi BB 3.5 kg mendapat Ampicillin 50 mg/kgBB/kali setiap 6 jam IV. Sediaan vial 500 mg dilarutkan dalam 5 mL aquabidest. Berapa mL per pemberian?',
        jawaban: 1.75,
        toleransi: 0.05,
        penjelasan: 'Dosis = 50 x 3.5 = 175 mg. Konsentrasi = 500 mg/5 mL = 100 mg/mL. Volume = 175/100 = 1.75 mL.'
    }
];

let currentSoal = null;

document.getElementById('btnSoalBaru').addEventListener('click', function() {
    const idx = Math.floor(Math.random() * soalBank.length);
    currentSoal = soalBank[idx];

    document.getElementById('soalLatihan').innerHTML = `
        <div class="alert alert-info">
            <strong><i class="fas fa-question-circle"></i> Soal:</strong><br><br>${currentSoal.soal}
        </div>
    `;

    document.getElementById('jawabanGroup').style.display = 'block';
    document.getElementById('btnCekJawaban').style.display = 'inline-flex';
    document.getElementById('jawabanUser').value = '';
    document.getElementById('hasilLatihan').style.display = 'none';
});

document.getElementById('btnCekJawaban').addEventListener('click', function() {
    if (!currentSoal) return;

    const jawaban = parseFloat(document.getElementById('jawabanUser').value);
    if (isNaN(jawaban)) {
        alert('Masukkan jawaban berupa angka.');
        return;
    }

    const selisih = Math.abs(jawaban - currentSoal.jawaban);
    const benar = selisih <= currentSoal.toleransi;

    const hasil = document.getElementById('hasilLatihan');
    hasil.style.display = 'block';
    hasil.innerHTML = `
        <div class="alert ${benar ? 'alert-success' : 'alert-danger'}" style="margin-top:16px;">
            ${benar
                ? '<i class="fas fa-check-circle"></i> <strong>Benar!</strong> Jawaban Anda tepat.'
                : `<i class="fas fa-times-circle"></i> <strong>Kurang tepat.</strong> Jawaban yang benar: <strong>${currentSoal.jawaban}</strong>`
            }
        </div>
        <div class="calc-steps" style="margin-top:12px;">
            <h4><i class="fas fa-lightbulb"></i> Penjelasan:</h4>
            <p>${currentSoal.penjelasan}</p>
        </div>
    `;
});
