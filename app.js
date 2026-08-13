// Taksi Çepte - Antalya Bölge Seçim Sistemi
// Uygulama Mantığı

let selectedDistrict = null;
let selectedMahalle = null;
let selectedSokak = null;

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    renderDistricts();
    setupEventListeners();
    updateStatistics();
}

function renderDistricts() {
    const ilceList = document.getElementById('ilceList');
    ilceList.innerHTML = '';
    
    const districts = Object.keys(antalyaData);
    
    districts.forEach(district => {
        const div = document.createElement('div');
        div.className = 'list-item';
        div.innerHTML = `
            <span class="icon">📍</span>
            <span>${district}</span>
            <span class="badge">${Object.keys(antalyaData[district].mahalleler).length} mahalle</span>
        `;
        div.onclick = () => selectDistrict(district);
        ilceList.appendChild(div);
    });
}

function selectDistrict(district) {
    selectedDistrict = district;
    selectedMahalle = null;
    selectedSokak = null;
    
    // Semti seçili olarak işaretle
    document.querySelectorAll('#ilceList .list-item').forEach(item => {
        item.classList.remove('selected');
    });
    event.currentTarget.classList.add('selected');
    
    // Mahalleleri göster
    renderMahalleler(district);
    
    // Sokak/cadde listesini temizle
    document.getElementById('sokakList').innerHTML = '<p style="color: #999;">Lütfen mahalle seçin...</p>';
    document.getElementById('selectedInfo').style.display = 'none';
    
    // Arama kutularını temizle
    document.getElementById('mahalleSearch').value = '';
    document.getElementById('sokakSearch').value = '';
}

function renderMahalleler(district) {
    const mahalleList = document.getElementById('mahalleList');
    mahalleList.innerHTML = '';
    
    const mahalleler = Object.keys(antalyaData[district].mahalleler);
    
    mahalleler.forEach(mahalle => {
        const sokakSayisi = antalyaData[district].mahalleler[mahalle].length;
        const div = document.createElement('div');
        div.className = 'list-item';
        div.innerHTML = `
            <span class="icon">🏘️</span>
            <span>${mahalle}</span>
            <span class="badge">${sokakSayisi} yol</span>
        `;
        div.onclick = () => selectMahalle(district, mahalle);
        mahalleList.appendChild(div);
    });
}

function selectMahalle(district, mahalle) {
    selectedMahalle = mahalle;
    selectedSokak = null;
    
    // Mahalleyi seçili olarak işaretle
    document.querySelectorAll('#mahalleList .list-item').forEach(item => {
        item.classList.remove('selected');
    });
    event.currentTarget.classList.add('selected');
    
    // Sokak/caddeler listesini göster
    renderSokaklar(district, mahalle);
    
    document.getElementById('selectedInfo').style.display = 'none';
}

function renderSokaklar(district, mahalle) {
    const sokakList = document.getElementById('sokakList');
    sokakList.innerHTML = '';
    
    const sokaklar = antalyaData[district].mahalleler[mahalle];
    
    if (!sokaklar || sokaklar.length === 0) {
        sokakList.innerHTML = '<p style="color: #999;">Sokak/cadde bulunamadı</p>';
        return;
    }
    
    sokaklar.forEach(sokak => {
        const div = document.createElement('div');
        div.className = 'list-item';
        div.innerHTML = `
            <span class="icon">🛣️</span>
            <span>${sokak}</span>
        `;
        div.onclick = () => selectSokak(district, mahalle, sokak);
        sokakList.appendChild(div);
    });
}

function selectSokak(district, mahalle, sokak) {
    selectedSokak = sokak;
    
    // Sokağı seçili olarak işaretle
    document.querySelectorAll('#sokakList .list-item').forEach(item => {
        item.classList.remove('selected');
    });
    event.currentTarget.classList.add('selected');
    
    // Seçili lokasyonı göster
    showSelectedInfo(district, mahalle, sokak);
}

function showSelectedInfo(district, mahalle, sokak) {
    const infoBox = document.getElementById('selectedInfo');
    const selectedLocation = document.getElementById('selectedLocation');
    
    selectedLocation.textContent = `${sokak}, ${mahalle}, ${district} / ANTALYA`;
    infoBox.style.display = 'block';
    
    // Sayfayı kaydır
    infoBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Arama özellikleri
document.getElementById('ilceSearch').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const items = document.querySelectorAll('#ilceList .list-item');
    
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(searchTerm) ? 'flex' : 'none';
    });
});

document.getElementById('mahalleSearch').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const items = document.querySelectorAll('#mahalleList .list-item');
    
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(searchTerm) ? 'flex' : 'none';
    });
});

document.getElementById('sokakSearch').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const items = document.querySelectorAll('#sokakList .list-item');
    
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(searchTerm) ? 'flex' : 'none';
    });
});

function updateStatistics() {
    const ilceSayisi = Object.keys(antalyaData).length;
    let mahalleSayisi = 0;
    
    Object.keys(antalyaData).forEach(district => {
        mahalleSayisi += Object.keys(antalyaData[district].mahalleler).length;
    });
    
    document.getElementById('ilceSayisi').textContent = ilceSayisi;
    document.getElementById('mahalleSayisi').textContent = mahalleSayisi;
}

function taksiCagir() {
    if (!selectedDistrict || !selectedMahalle || !selectedSokak) {
        alert('Lütfen semt, mahalle ve sokak/cadde seçiniz!');
        return;
    }
    
    const location = `${selectedSokak}, ${selectedMahalle}, ${selectedDistrict}`;
    const message = `🚕 Taksi Çağrısı Başarılı!\n\nLokasyon: ${location}\n\nSürücü en kısa sürede gelecektir.`;
    
    alert(message);
    
    // Konsola da log edelim
    console.log('Taksi Çağrısı:', {
        semit: selectedDistrict,
        mahalle: selectedMahalle,
        sokakCadde: selectedSokak,
        timestamp: new Date().toLocaleString('tr-TR')
    });
}

// Sekme odağı değiştiğinde
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
        console.log('Taksi Çepte uygulaması etkin');
    }
});
