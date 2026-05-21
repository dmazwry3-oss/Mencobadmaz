// ===== NersLab - Logbook Praktik Klinik =====

// ===== Tab Navigation =====
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

// Set default date to today
const today = new Date().toISOString().split('T')[0];
document.getElementById('logTanggal').value = today;
document.getElementById('refleksiTanggal').value = today;

// ===== 1. Catatan Harian =====
document.getElementById('btnSimpanLog').addEventListener('click', function() {
    const data = {
        type: 'catatan',
        tanggal: document.getElementById('logTanggal').value,
        ruangan: document.getElementById('logRuangan').value,
        shift: document.getElementById('logShift').value,
        aktivitas: document.getElementById('logAktivitas').value,
        diagnosis: document.getElementById('logDiagnosis').value,
        pembimbing: document.getElementById('logPembimbing').value,
        catatan: document.getElementById('logCatatan').value,
        timestamp: new Date().toISOString()
    };

    if (!data.tanggal || !data.ruangan || !data.aktivitas) {
        alert('Mohon isi minimal: tanggal, ruangan, dan aktivitas.');
        return;
    }

    saveToStorage('logbook_entries', data);
    alert('Catatan berhasil disimpan!');
    clearCatatanForm();
});

function clearCatatanForm() {
    document.getElementById('logAktivitas').value = '';
    document.getElementById('logDiagnosis').value = '';
    document.getElementById('logCatatan').value = '';
}



// ===== 2. Checklist Kompetensi =====
const kompetensiData = {
    'Kebutuhan Dasar': [
        'Memandikan pasien di tempat tidur',
        'Oral hygiene',
        'Mobilisasi pasien',
        'Pemberian nutrisi (NGT/oral)',
        'Perawatan kulit/pencegahan dekubitus'
    ],
    'Pemeriksaan Fisik': [
        'Pengukuran TTV lengkap',
        'Pemeriksaan head to toe',
        'Pengkajian nyeri (PQRST)',
        'Pengkajian status neurologi (GCS)',
        'Auskultasi paru dan jantung'
    ],
    'Tindakan Invasif': [
        'Pemasangan infus',
        'Injeksi IM/IV/SC',
        'Pemasangan kateter urine',
        'Pengambilan darah vena',
        'Pemasangan NGT'
    ],
    'Manajemen Luka': [
        'Perawatan luka bersih',
        'Perawatan luka kotor/infeksi',
        'Angkat jahitan',
        'Balut bidai/kompres',
        'Dokumentasi kondisi luka'
    ],
    'Pemberian Obat': [
        'Pemberian obat oral',
        'Pemberian obat injeksi',
        'Pemberian obat topikal',
        'Pemberian obat via nebulizer',
        'Penghitungan dosis obat'
    ],
    'Oksigenasi': [
        'Pemberian oksigen (nasal/masker)',
        'Suctioning',
        'Nebulizer',
        'Fisioterapi dada',
        'Monitoring SpO2'
    ],
    'Komunikasi & Edukasi': [
        'Komunikasi terapeutik',
        'Edukasi pasien/keluarga',
        'Informed consent',
        'Handover/SBAR',
        'Dokumentasi askep'
    ]
};

function loadKompetensi() {
    const container = document.getElementById('kompetensiList');
    const saved = JSON.parse(localStorage.getItem('kompetensi_progress') || '{}');
    container.innerHTML = '';

    let totalItems = 0;
    let checkedItems = 0;

    Object.keys(kompetensiData).forEach(category => {
        const catDiv = document.createElement('div');
        catDiv.style.marginBottom = '16px';
        catDiv.innerHTML = `<div style="font-weight:700;color:var(--primary);margin-bottom:8px;font-size:0.9rem;text-transform:uppercase;">${category}</div>`;

        kompetensiData[category].forEach(item => {
            totalItems++;
            const key = `${category}_${item}`;
            const isChecked = saved[key] || false;
            if (isChecked) checkedItems++;

            const div = document.createElement('div');
            div.className = `checklist-item ${isChecked ? 'checked' : ''}`;
            div.innerHTML = `
                <input type="checkbox" id="komp-${key.replace(/\s/g, '-')}" data-key="${key}" ${isChecked ? 'checked' : ''}>
                <label for="komp-${key.replace(/\s/g, '-')}">${item}</label>
            `;
            div.querySelector('input').addEventListener('change', function() {
                if (this.checked) div.classList.add('checked');
                else div.classList.remove('checked');
            });
            catDiv.appendChild(div);
        });

        container.appendChild(catDiv);
    });

    // Update progress display
    const percentage = totalItems > 0 ? Math.round((checkedItems / totalItems) * 100) : 0;
    document.getElementById('kompetensiProgress').innerHTML = `
        <div style="text-align:center;margin-bottom:12px;">
            <span style="font-size:2rem;font-weight:700;color:var(--primary);">${checkedItems}/${totalItems}</span>
            <span style="color:var(--gray-500);display:block;">kompetensi tercapai (${percentage}%)</span>
        </div>
        <div class="progress-bar"><div class="progress-fill" style="width:${percentage}%"></div></div>
    `;
}

document.getElementById('btnSaveKompetensi').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('#kompetensiList input[type="checkbox"]');
    const progress = {};
    checkboxes.forEach(cb => {
        progress[cb.dataset.key] = cb.checked;
    });
    localStorage.setItem('kompetensi_progress', JSON.stringify(progress));
    alert('Progress kompetensi disimpan!');
    loadKompetensi();
});

// ===== 3. Refleksi =====
document.getElementById('btnSimpanRefleksi').addEventListener('click', function() {
    const data = {
        type: 'refleksi',
        tanggal: document.getElementById('refleksiTanggal').value,
        deskripsi: document.getElementById('refleksiDeskripsi').value,
        perasaan: document.getElementById('refleksiPerasaan').value,
        evaluasi: document.getElementById('refleksiEvaluasi').value,
        analisis: document.getElementById('refleksiAnalisis').value,
        kesimpulan: document.getElementById('refleksiKesimpulan').value,
        rencana: document.getElementById('refleksiRencana').value,
        timestamp: new Date().toISOString()
    };

    if (!data.tanggal || !data.deskripsi) {
        alert('Mohon isi minimal: tanggal dan deskripsi pengalaman.');
        return;
    }

    saveToStorage('logbook_entries', data);
    alert('Refleksi berhasil disimpan!');
    clearRefleksiForm();
});

function clearRefleksiForm() {
    document.getElementById('refleksiDeskripsi').value = '';
    document.getElementById('refleksiPerasaan').value = '';
    document.getElementById('refleksiEvaluasi').value = '';
    document.getElementById('refleksiAnalisis').value = '';
    document.getElementById('refleksiKesimpulan').value = '';
    document.getElementById('refleksiRencana').value = '';
}



// ===== 4. Riwayat =====
function loadRiwayat() {
    const entries = JSON.parse(localStorage.getItem('logbook_entries') || '[]');
    const container = document.getElementById('riwayatList');

    if (entries.length === 0) {
        container.innerHTML = '<p style="color:var(--gray-400);text-align:center;">Belum ada catatan tersimpan.</p>';
        return;
    }

    // Sort by date descending
    entries.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    let html = '';
    entries.forEach((entry, idx) => {
        if (entry.type === 'catatan') {
            html += `
                <div class="card" style="border-left:4px solid var(--primary);margin-bottom:12px;">
                    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:8px;">
                        <span class="badge badge-high"><i class="fas fa-pen"></i> Catatan</span>
                        <span style="color:var(--gray-500);font-size:0.8rem;">${formatDate(entry.tanggal)}</span>
                    </div>
                    <p><strong>Ruangan:</strong> ${entry.ruangan} | <strong>Shift:</strong> ${entry.shift}</p>
                    <p><strong>Aktivitas:</strong> ${entry.aktivitas}</p>
                    ${entry.diagnosis ? `<p><strong>Kasus:</strong> ${entry.diagnosis}</p>` : ''}
                    ${entry.pembimbing ? `<p><strong>Pembimbing:</strong> ${entry.pembimbing}</p>` : ''}
                    ${entry.catatan ? `<p><strong>Catatan:</strong> ${entry.catatan}</p>` : ''}
                    <button class="btn btn-danger btn-sm" onclick="deleteEntry(${idx})"><i class="fas fa-trash"></i> Hapus</button>
                </div>
            `;
        } else if (entry.type === 'refleksi') {
            html += `
                <div class="card" style="border-left:4px solid var(--accent);margin-bottom:12px;">
                    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:8px;">
                        <span class="badge badge-med"><i class="fas fa-lightbulb"></i> Refleksi</span>
                        <span style="color:var(--gray-500);font-size:0.8rem;">${formatDate(entry.tanggal)}</span>
                    </div>
                    <p><strong>Deskripsi:</strong> ${entry.deskripsi}</p>
                    ${entry.kesimpulan ? `<p><strong>Pembelajaran:</strong> ${entry.kesimpulan}</p>` : ''}
                    ${entry.rencana ? `<p><strong>Rencana:</strong> ${entry.rencana}</p>` : ''}
                    <button class="btn btn-danger btn-sm" onclick="deleteEntry(${idx})"><i class="fas fa-trash"></i> Hapus</button>
                </div>
            `;
        }
    });

    container.innerHTML = html;
}

function deleteEntry(idx) {
    if (!confirm('Yakin ingin menghapus catatan ini?')) return;
    const entries = JSON.parse(localStorage.getItem('logbook_entries') || '[]');
    entries.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    entries.splice(idx, 1);
    localStorage.setItem('logbook_entries', JSON.stringify(entries));
    loadRiwayat();
}

// Export data
document.getElementById('btnExport').addEventListener('click', function() {
    const entries = JSON.parse(localStorage.getItem('logbook_entries') || '[]');
    const kompetensi = JSON.parse(localStorage.getItem('kompetensi_progress') || '{}');

    const exportData = {
        logbook: entries,
        kompetensi: kompetensi,
        exportDate: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `nerslab-logbook-${today}.json`;
    a.click();
    URL.revokeObjectURL(url);
});

// Clear all
document.getElementById('btnClearAll').addEventListener('click', function() {
    if (!confirm('PERINGATAN: Semua data logbook akan dihapus permanen. Lanjutkan?')) return;
    if (!confirm('Anda yakin? Data tidak bisa dikembalikan.')) return;
    localStorage.removeItem('logbook_entries');
    localStorage.removeItem('kompetensi_progress');
    loadRiwayat();
    alert('Semua data telah dihapus.');
});

// ===== Utility Functions =====
function saveToStorage(key, data) {
    const entries = JSON.parse(localStorage.getItem(key) || '[]');
    entries.push(data);
    localStorage.setItem(key, JSON.stringify(entries));
}

function formatDate(dateStr) {
    if (!dateStr) return '-';
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString('id-ID', options);
}

// ===== Initialize =====
loadKompetensi();
