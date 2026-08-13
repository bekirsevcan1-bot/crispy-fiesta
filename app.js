// Taksi Çepte - Antalya Bölge Seçim Sistemi & Canlı Konum
let selectedDistrict = null;
let selectedMahalle = null;
let selectedSokak = null;
let userLiveCoords = null; // Canlı konum koordinatları için

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
    if (!ilceList) return;
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
        div.onclick = (e) => selectDistrict(district, e);
        ilceList.appendChild(div);
    });
}

function selectDistrict(district, event) {
    selectedDistrict = district;
    selectedMahalle = null;
    selectedSokak = null;
    userLiveCoords = null; // Manuel seçimde GPS modunu sıfırla
    
    document.querySelectorAll('#ilceList .list-item').forEach(item => {
        item.classList.remove('selected');
    });
    if (event && event.currentTarget) event.currentTarget.classList.add('selected');
    
    renderMahalleler(district);
    
    const sokakList = document.getElementById('sokakList');
    if (sokakList) sokakList.innerHTML = '<p style="color: #999;">Lütfen mahalle seçin...</p>';
    
    const selectedInfo = document.getElementById('selectedInfo');
    if (selectedInfo) selectedInfo.style.display = 'none';
    
    if (document.getElementById('mahalleSearch')) document.getElementById('mahalleSearch').value = '';
    if (document.getElementById('sokakSearch')) document.getElementById('sokakSearch').value = '';
}

function renderMahalleler(district) {
    const mahalleList = document.getElementById('mahalleList');
    if (!mahalleList) return;
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
        div.onclick = (e) => selectMahalle(district, mahalle, e);
        mahalleList.appendChild(div);
    });
}

function selectMahalle(district, mahalle, event) {
    selectedMahalle = mahalle;
    selectedSokak = null;
    
    document.querySelectorAll('#mahalleList .list-item').forEach(item => {
        item.classList.remove('selected');
    });
    if (event && event.currentTarget) event.currentTarget.classList.add('selected');
    
    renderSokaklar(district, mahalle);
    
    const selectedInfo = document.getElementById('selectedInfo');
    if (selectedInfo) selectedInfo.style.display = 'none';
}

function renderSokaklar(district, mahalle) {
    const sokakList = document.getElementById('sokakList');
    if (!sokakList) return;
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
        div.onclick = (e) => selectSokak(district, mahalle, sokak, e);
        sokakList.appendChild(div);
    });
}

function selectSokak(district, mahalle, sokak, event) {
    selectedSokak = sokak;
    
    document.querySelectorAll('#sokakList .list-item').forEach(item => {
        item.classList.remove('selected');
    });
    if (event && event.currentTarget) event.currentTarget.classList.add('selected');
    
    showSelectedInfo(`${sokak}, ${mahalle}, ${district} / ANTALYA`);
}

function showSelectedInfo(locationText) {
    const infoBox = document.getElementById('selectedInfo');
    const selectedLocation = document.getElementById('selectedLocation');
    
    if (selectedLocation) selectedLocation.textContent = locationText;
    if (infoBox) {
        infoBox.style.display = 'block';
        infoBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// -------------------------------------------------------------
// YENİ EKLENEN CANLI KONUM (GPS) FONKSİYONU
// -------------------------------------------------------------
function getCanliKonum() {
    if (!navigator.geolocation) {
        alert("Tarayıcınız veya cihazınız canlı konum özelliğini desteklemiyor.");
        return;
    }

    const infoBox = document.getElementById('selectedInfo');
    const selectedLocation = document.getElementById('selectedLocation');
    
    if (selectedLocation) selectedLocation.textContent = "📍 Canlı konum alınıyor, lütfen bekleyin...";
    if (infoBox) infoBox.style.display = 'block';

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            userLiveCoords = { lat, lng };

            // Ters Geocoding (Koordinatı adrese çevirme)
            fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
                .then(res => res.json())
                .then(data => {
                    const address = data.display_name || `Enlem: ${lat.toFixed(4)}, Boylam: ${lng.toFixed(4)}`;
                    selectedDistrict = data.address?.town || data.address?.city_district || "Canlı Konum";
                    selectedMahalle = data.address?.suburb || data.address?.neighbourhood || "";
                    selectedSokak = data.address?.road || "";
                    
                    showSelectedInfo(`🎯 Canlı Konumunuz: ${address}`);
                })
                .catch(() => {
                    showSelectedInfo(`🎯 Canlı Konum Alındı (Koordinat: ${lat.toFixed(4)}, ${lng.toFixed(4)})`);
                });
        },
        (error) => {
            let errorMsg = "Konum alınamadı.";
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    errorMsg = "Konum izni reddedildi! Lütfen tarayıcı ayarlarından konuma izin verin.";
                    break;
                case error.POSITION_UNAVAILABLE:
                    errorMsg = "Cihazın konum/GPS bilgisine ulaşılamıyor.";
                    break;
                case error.TIMEOUT:
                    errorMsg = "Konum alma isteği zaman aşımına uğradı.";
                    break;
            }
            alert(errorMsg);
            if (selectedLocation) selectedLocation.textContent = "Konum alınamadı.";
        },
        { enableHighAccuracy: false, timeout: 10000 }
    );
}

// Event Listeners ve Arama Fonksiyonları
function setupEventListeners() {
    const ilceSearch = document.getElementById('ilceSearch');
    if (ilceSearch) {
        ilceSearch.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            document.querySelectorAll('#ilceList .list-item').forEach(item => {
                const text = item.textContent.toLowerCase();
                item.style.display = text.includes(searchTerm) ? 'flex' : 'none';
            });
        });
    }

    const mahalleSearch = document.getElementById('mahalleSearch');
    if (mahalleSearch) {
        mahalleSearch.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            document.querySelectorAll('#mahalleList .list-item').forEach(item => {
                const text = item.textContent.toLowerCase();
                item.style.display = text.includes(searchTerm) ? 'flex' : 'none';
            });
        });
    }

    const sokakSearch = document.getElementById('sokakSearch');
    if (sokakSearch) {
        sokakSearch.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            document.querySelectorAll('#sokakList .list-item').forEach(item => {
                const text = item.textContent.toLowerCase();
                item.style.display = text.includes(searchTerm) ? 'flex' : 'none';
            });
        });
    }
}

function updateStatistics() {
    if (typeof antalyaData === 'undefined') return;
    const ilceSayisi = Object.keys(antalyaData).length;
    let mahalleSayisi = 0;
    
    Object.keys(antalyaData).forEach(district => {
        mahalleSayisi += Object.keys(antalyaData[district].mahalleler).length;
    });
    
    const ilceSpan = document.getElementById('ilceSayisi');
    const mahalleSpan = document.getElementById('mahalleSayisi');
    if (ilceSpan) ilceSpan.textContent = ilceSayisi;
    if (mahalleSpan) mahalleSpan.textContent = mahalleSayisi;
}

function taksiCagir() {
    if (!userLiveCoords && (!selectedDistrict || !selectedMahalle || !selectedSokak)) {
        alert('Lütfen listeden semt/mahalle seçiniz veya Canlı Konum butonunu kullanınız!');
        return;
    }
    
    const locationText = document.getElementById('selectedLocation')?.textContent || "Konum Belirtilmedi";
    const message = `🚕 Taksi Çağrısı Başarılı!\n\nLokasyon: ${locationText}\n\nSürücü en kısa sürede gelecektir.`;
    
    alert(message);
    
    console.log('Taksi Çağrısı:', {
        location: locationText,
        coords: userLiveCoords,
        timestamp: new Date().toLocaleString('tr-TR')
    });
}
