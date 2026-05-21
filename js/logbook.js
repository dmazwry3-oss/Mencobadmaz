// ===== NersLab v2 - Logbook Praktik Klinik =====

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
        if (this.dataset.tab === 'riwayat') loadRiwayat();
        if (this.dataset.tab === 'kompetensi') loadKompetensi();
    });
});

// Set default dates
const today = new Date().toISOString().split('T')[0];
document.getElementById('logTanggal').value = today;
document.getElementById('refleksiTanggal').value = today;

// ===== 1. Catatan Harian =====
document.getElementById('btnSimpanLog').addEventListener('click', function() {
    const ruangan = document.getElementById('logRuangan');
    const aktivitas = document.getElementById('logAktivitas');
    let valid = true;

    if (!ruangan.value) { ruangan.closest('.form-group').classList.add('error'); valid = false; }
    else ruangan.closest('.form-group').classList.remove('error');
    if (!aktivitas.value.trim()) { aktivitas.closest('.form-group').classList.add('error'); valid = false; }
    else aktivitas.closest('.form-group').classList.remove('error');

    if (!valid) { showToast('Isi minimal ruangan dan aktivitas.', 'error'); return; }

    const data = {
        type: 'catatan',
        tanggal: document.getElementById('logTanggal').value,
        ruangan: ruangan.value,
        shift: document.getElementById('logShift').value,
        aktivitas: aktivitas.value,
        diagnosis: document.getElementById('logDiagnosis').value,
        keterampilan: document.getElementById('logKeterampilan').value,
        pembimbing: document.getElementById('logPembimbing').value,
        catatan: document.getElementById('logCatatan').value,
        timestamp: new Date().toISOString()
    };
    saveEntry(data);
    showToast('Catatan praktik berhasil disimpan!', 'success');
    aktivitas.value = '';
    document.getElementById('logDiagnosis').value = '';
    document.getElementById('logKeterampilan').value = '';
    document.getElementById('logCatatan').value = '';
});


// ===== 2. Checklist Kompetensi =====
const kompetensiData = {
    'Kebutuhan Dasar': ['Memandikan pasien','Oral hygiene','Mobilisasi pasien','Pemberian nutrisi (NGT/oral)','Pencegahan dekubitus'],
    'Pemeriksaan Fisik': ['Pengukuran TTV','Pemeriksaan head to toe','Pengkajian nyeri (PQRST)','GCS','Auskultasi paru & jantung'],
    'Tindakan Invasif': ['Pemasangan infus','Injeksi IM/IV/SC','Pemasangan kateter urine','Pengambilan darah vena','Pemasangan NGT'],
    'Manajemen Luka': ['Perawatan luka bersih','Perawatan luka infeksi','Angkat jahitan','Balut bidai','Dokumentasi luka'],
    'Pemberian Obat': ['Obat oral','Obat injeksi','Obat topikal','Nebulizer','Perhitungan dosis'],
    'Oksigenasi': ['O2 nasal/masker','Suctioning','Nebulizer','Fisioterapi dada','Monitoring SpO2'],
    'Komunikasi & Dokumentasi': ['Komunikasi terapeutik','Edukasi pasien/keluarga','Informed consent','Handover SBAR','Dokumentasi askep']
};

function loadKompetensi() {
    const container = document.getElementById('kompetensiList');
    const saved = JSON.parse(localStorage.getItem('nerslab_kompetensi') || '{}');
    container.innerHTML = '';
    let total = 0, checked = 0;

    Object.keys(kompetensiData).forEach(cat => {
        const catDiv = document.createElement('div');
        catDiv.style.marginBottom = '16px';
        catDiv.innerHTML = `<div style="font-weight:700;color:var(--primary);margin-bottom:8px;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.5px;">${cat}</div>`;
        kompetensiData[cat].forEach(item => {
            total++;
            const key = `${cat}_${item}`;
            const isChecked = saved[key] || false;
            if (isChecked) checked++;
            const div = document.createElement('div');
            div.className = `checklist-item ${isChecked ? 'checked' : ''}`;
            div.innerHTML = `<input type="checkbox" id="k-${key.replace(/\s/g,'-')}" data-key="${key}" ${isChecked?'checked':''}><label for="k-${key.replace(/\s/g,'-')}">${item}</label>`;
            div.querySelector('input').addEventListener('change', function() { div.classList.toggle('checked', this.checked); });
            catDiv.appendChild(div);
        });
        container.appendChild(catDiv);
    });

    const pct = total > 0 ? Math.round((checked/total)*100) : 0;
    document.getElementById('kompetensiProgress').innerHTML = `
        <div style="text-align:center;margin-bottom:12px;">
            <span style="font-size:2.5rem;font-weight:800;color:var(--primary);">${checked}/${total}</span>
            <span style="color:var(--gray-500);display:block;font-size:0.85rem;">kompetensi tercapai (${pct}%)</span>
        </div>
        <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>`;
}

document.getElementById('btnSaveKompetensi').addEventListener('click', function() {
    const progress = {};
    document.querySelectorAll('#kompetensiList input[type="checkbox"]').forEach(cb => { progress[cb.dataset.key] = cb.checked; });
    localStorage.setItem('nerslab_kompetensi', JSON.stringify(progress));
    loadKompetensi();
    showToast('Progress kompetensi disimpan!', 'success');
});


// ===== 3. Refleksi =====
document.getElementById('btnSimpanRefleksi').addEventListener('click', function() {
    const deskripsi = document.getElementById('refleksiDeskripsi');
    if (!deskripsi.value.trim()) { deskripsi.closest('.form-group').classList.add('error'); showToast('Isi minimal deskripsi pengalaman.', 'error'); return; }
    deskripsi.closest('.form-group').classList.remove('error');

    const data = {
        type: 'refleksi',
        tanggal: document.getElementById('refleksiTanggal').value,
        deskripsi: deskripsi.value,
        perasaan: document.getElementById('refleksiPerasaan').value,
        evaluasi: document.getElementById('refleksiEvaluasi').value,
        analisis: document.getElementById('refleksiAnalisis').value,
        kesimpulan: document.getElementById('refleksiKesimpulan').value,
        rencana: document.getElementById('refleksiRencana').value,
        timestamp: new Date().toISOString()
    };
    saveEntry(data);
    showToast('Refleksi berhasil disimpan!', 'success');
    ['refleksiDeskripsi','refleksiPerasaan','refleksiEvaluasi','refleksiAnalisis','refleksiKesimpulan','refleksiRencana'].forEach(id => { document.getElementById(id).value = ''; });
});

// ===== 4. Riwayat =====
function loadRiwayat() {
    const entries = JSON.parse(localStorage.getItem('nerslab_logbook') || '[]');
    const container = document.getElementById('riwayatList');
    if (entries.length === 0) {
        container.innerHTML = '<div class="empty-state"><i class="fas fa-book-open"></i><h4>Belum ada catatan</h4><p>Catatan dan refleksi akan muncul di sini setelah disimpan.</p></div>';
        return;
    }
    entries.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    let html = '';
    entries.forEach((e, idx) => {
        const date = formatDate(e.tanggal);
        if (e.type === 'catatan') {
            html += `<div class="card" style="border-left:4px solid var(--primary);padding:18px;">
                <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:10px;">
                    <span class="badge badge-primary"><i class="fas fa-pen"></i> Catatan</span>
                    <span style="color:var(--gray-400);font-size:0.75rem;">${date}</span>
                </div>
                <p style="font-size:0.85rem;margin-bottom:4px;"><strong>Ruangan:</strong> ${e.ruangan} | <strong>Shift:</strong> ${e.shift}</p>
                <p style="font-size:0.85rem;margin-bottom:4px;"><strong>Aktivitas:</strong> ${e.aktivitas}</p>
                ${e.diagnosis ? `<p style="font-size:0.85rem;margin-bottom:4px;"><strong>Kasus:</strong> ${e.diagnosis}</p>` : ''}
                ${e.keterampilan ? `<p style="font-size:0.85rem;margin-bottom:4px;"><strong>Keterampilan:</strong> ${e.keterampilan}</p>` : ''}
                ${e.pembimbing ? `<p style="font-size:0.85rem;margin-bottom:4px;"><strong>CI:</strong> ${e.pembimbing}</p>` : ''}
                <button class="btn btn-danger btn-sm" style="margin-top:8px;" onclick="deleteEntry(${idx})"><i class="fas fa-trash"></i> Hapus</button>
            </div>`;
        } else {
            html += `<div class="card" style="border-left:4px solid var(--warning);padding:18px;">
                <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:10px;">
                    <span class="badge badge-warning"><i class="fas fa-lightbulb"></i> Refleksi</span>
                    <span style="color:var(--gray-400);font-size:0.75rem;">${date}</span>
                </div>
                <p style="font-size:0.85rem;margin-bottom:4px;"><strong>Deskripsi:</strong> ${e.deskripsi}</p>
                ${e.kesimpulan ? `<p style="font-size:0.85rem;margin-bottom:4px;"><strong>Pembelajaran:</strong> ${e.kesimpulan}</p>` : ''}
                ${e.rencana ? `<p style="font-size:0.85rem;"><strong>Rencana:</strong> ${e.rencana}</p>` : ''}
                <button class="btn btn-danger btn-sm" style="margin-top:8px;" onclick="deleteEntry(${idx})"><i class="fas fa-trash"></i> Hapus</button>
            </div>`;
        }
    });
    container.innerHTML = html;
}

function deleteEntry(idx) {
    if (!confirm('Yakin hapus catatan ini?')) return;
    const entries = JSON.parse(localStorage.getItem('nerslab_logbook') || '[]');
    entries.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    entries.splice(idx, 1);
    localStorage.setItem('nerslab_logbook', JSON.stringify(entries));
    loadRiwayat();
    showToast('Catatan dihapus.', 'info');
}


// ===== 5. Export Functions =====

// Export PDF (simple printable format)
document.getElementById('btnExportPDF').addEventListener('click', function() {
    const entries = JSON.parse(localStorage.getItem('nerslab_logbook') || '[]');
    if (entries.length === 0) { showToast('Tidak ada data untuk diexport.', 'warning'); return; }

    const printWin = window.open('', '_blank');
    let html = `<html><head><title>Logbook Praktik - NersLab</title>
        <style>body{font-family:Arial,sans-serif;padding:20px;font-size:12px;}
        h1{text-align:center;color:#1e40af;} h2{color:#374151;border-bottom:2px solid #e5e7eb;padding-bottom:8px;margin-top:24px;}
        .entry{border:1px solid #e5e7eb;padding:12px;margin:8px 0;border-radius:8px;}
        .badge{display:inline-block;padding:2px 8px;border-radius:12px;font-size:10px;font-weight:bold;}
        .cat{background:#dbeafe;color:#1e40af;} .ref{background:#fef3c7;color:#d97706;}
        p{margin:4px 0;} strong{color:#374151;}
        @media print{body{padding:10px;}}</style></head><body>`;
    html += `<h1>Logbook Praktik Klinik - NersLab</h1><p style="text-align:center;color:#6b7280;">Diexport: ${new Date().toLocaleDateString('id-ID', {weekday:'long',year:'numeric',month:'long',day:'numeric'})}</p>`;

    const catatan = entries.filter(e => e.type === 'catatan');
    const refleksi = entries.filter(e => e.type === 'refleksi');

    if (catatan.length) {
        html += `<h2>Catatan Praktik (${catatan.length} entri)</h2>`;
        catatan.forEach(e => {
            html += `<div class="entry"><span class="badge cat">Catatan</span> <strong>${formatDate(e.tanggal)}</strong>
                <p><strong>Ruangan:</strong> ${e.ruangan} | <strong>Shift:</strong> ${e.shift}</p>
                <p><strong>Aktivitas:</strong> ${e.aktivitas}</p>
                ${e.diagnosis ? `<p><strong>Kasus:</strong> ${e.diagnosis}</p>` : ''}
                ${e.keterampilan ? `<p><strong>Keterampilan:</strong> ${e.keterampilan}</p>` : ''}
                ${e.pembimbing ? `<p><strong>CI:</strong> ${e.pembimbing}</p>` : ''}</div>`;
        });
    }
    if (refleksi.length) {
        html += `<h2>Refleksi (${refleksi.length} entri)</h2>`;
        refleksi.forEach(e => {
            html += `<div class="entry"><span class="badge ref">Refleksi</span> <strong>${formatDate(e.tanggal)}</strong>
                <p><strong>Deskripsi:</strong> ${e.deskripsi}</p>
                ${e.perasaan ? `<p><strong>Perasaan:</strong> ${e.perasaan}</p>` : ''}
                ${e.evaluasi ? `<p><strong>Evaluasi:</strong> ${e.evaluasi}</p>` : ''}
                ${e.analisis ? `<p><strong>Analisis:</strong> ${e.analisis}</p>` : ''}
                ${e.kesimpulan ? `<p><strong>Kesimpulan:</strong> ${e.kesimpulan}</p>` : ''}
                ${e.rencana ? `<p><strong>Rencana:</strong> ${e.rencana}</p>` : ''}</div>`;
        });
    }
    html += '</body></html>';
    printWin.document.write(html);
    printWin.document.close();
    printWin.print();
    showToast('PDF siap dicetak!', 'success');
});

// Export CSV
document.getElementById('btnExportCSV').addEventListener('click', function() {
    const entries = JSON.parse(localStorage.getItem('nerslab_logbook') || '[]');
    if (entries.length === 0) { showToast('Tidak ada data.', 'warning'); return; }

    let csv = 'Tipe,Tanggal,Ruangan,Shift,Aktivitas,Diagnosis,Keterampilan,Pembimbing,Catatan,Deskripsi,Perasaan,Evaluasi,Analisis,Kesimpulan,Rencana\n';
    entries.forEach(e => {
        const row = [
            e.type, e.tanggal, e.ruangan||'', e.shift||'', esc(e.aktivitas), esc(e.diagnosis), esc(e.keterampilan), e.pembimbing||'', esc(e.catatan),
            esc(e.deskripsi), esc(e.perasaan), esc(e.evaluasi), esc(e.analisis), esc(e.kesimpulan), esc(e.rencana)
        ];
        csv += row.join(',') + '\n';
    });

    downloadFile(csv, `nerslab-logbook-${today}.csv`, 'text/csv');
    showToast('CSV berhasil didownload!', 'success');
});

// Export JSON
document.getElementById('btnExportJSON').addEventListener('click', function() {
    const entries = JSON.parse(localStorage.getItem('nerslab_logbook') || '[]');
    const kompetensi = JSON.parse(localStorage.getItem('nerslab_kompetensi') || '{}');
    if (entries.length === 0 && Object.keys(kompetensi).length === 0) { showToast('Tidak ada data.', 'warning'); return; }

    const data = JSON.stringify({ logbook: entries, kompetensi, exportDate: new Date().toISOString() }, null, 2);
    downloadFile(data, `nerslab-logbook-${today}.json`, 'application/json');
    showToast('JSON berhasil didownload!', 'success');
});

// Clear all
document.getElementById('btnClearAll').addEventListener('click', function() {
    if (!confirm('PERINGATAN: Semua data logbook akan dihapus permanen!')) return;
    if (!confirm('Yakin? Data tidak bisa dikembalikan.')) return;
    localStorage.removeItem('nerslab_logbook');
    localStorage.removeItem('nerslab_kompetensi');
    loadRiwayat();
    loadKompetensi();
    showToast('Semua data dihapus.', 'info');
});


// ===== Utilities =====
function saveEntry(data) {
    const entries = JSON.parse(localStorage.getItem('nerslab_logbook') || '[]');
    entries.push(data);
    localStorage.setItem('nerslab_logbook', JSON.stringify(entries));
}

function formatDate(d) {
    if (!d) return '-';
    return new Date(d).toLocaleDateString('id-ID', { weekday:'long', year:'numeric', month:'long', day:'numeric' });
}

function esc(val) {
    if (!val) return '';
    return '"' + val.replace(/"/g, '""').replace(/\n/g, ' ') + '"';
}

function downloadFile(content, filename, type) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}

// ===== Initialize =====
loadKompetensi();
