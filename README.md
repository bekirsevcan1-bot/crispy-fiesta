# 🚕 Taksi Çepte - Antalya Bölge Seçim Sistemi

Antalya'nın tüm semtleri, mahalleleri, sokakları ve caddelerini içeren taksi uygulaması.

## 📍 Özellikler

- ✅ **10 Semt** - Muratpaşa, Kepez, Konyaaltı, Aksu, Kaş, Kaleiçi, Manavgat, Alanya, Side, Serik
- ✅ **48+ Mahalle** - Her semt içinde çoklu mahalleler
- ✅ **500+ Sokak/Cadde** - Detaylı yol ve cadde verileri
- ✅ **Arama Özellikleri** - Semt, mahalle ve sokak araması
- ✅ **Duyarlı Tasarım** - Mobil cihazlarla uyumlu
- ✅ **Kolay Navigasyon** - 3 adımlı bölge seçimi

## 🎯 Semtler

1. **Muratpaşa** - 6 mahalle
2. **Kepez** - 5 mahalle
3. **Konyaaltı** - 5 mahalle
4. **Aksu** - 5 mahalle
5. **Kaş** - 5 mahalle
6. **Kaleiçi** - 5 mahalle
7. **Manavgat** - 5 mahalle
8. **Alanya** - 5 mahalle
9. **Side** - 5 mahalle
10. **Serik** - 4 mahalle

## 📁 Dosya Yapısı

```
crispy-fiesta/
├── index.html          # Ana HTML dosyası (UI)
├── data.js            # Antalya bölge verileri
├── app.js             # Uygulama mantığı
├── README.md          # Dokumentasyon
└── .vscode/           # VS Code ayarları
```

## 🚀 Başlangıç

1. Dosyaları indirin
2. `index.html` dosyasını web tarayıcısında açın
3. Semt → Mahalle → Sokak/Cadde seçin
4. "Taksi Çağır" butonuna tıklayın

## 💡 Kullanım

### Adım 1: Semt Seçin
Soldaki listeden Antalya'nın 10 semtinden birini seçin.

### Adım 2: Mahalle Seçin
Ortadaki listeden seçili semtin mahallelerinden birini seçin.

### Adım 3: Sokak/Cadde Seçin
Alt kısımdaki listeden sokak veya caddeyi seçin.

### Adım 4: Taksi Çağırın
"🚕 Taksi Çağır" butonuna tıklayarak taksi talep edin.

## 🔍 Arama Özelliği

- Semt araması yapabilirsiniz
- Mahalle araması yapabilirsiniz
- Sokak/Cadde araması yapabilirsiniz

Gerçek zamanlı filtreleme ile istediğinizi hızlıca bulabilirsiniz.

## 📊 İstatistikler

- **Toplam Semtler**: 10
- **Toplam Mahalleler**: 48+
- **Toplam Sokak/Cadde**: 500+

## 🛠️ Teknolojiler

- HTML5
- CSS3 (Gradient, Grid, Flexbox)
- Vanilla JavaScript
- Responsive Design

## 🐛 Sorun Giderme

### Sorun: Bölgeler gözükmüyor
**Çözüm**: Tüm dosyaları (index.html, data.js, app.js) aynı klasörde olduğundan emin olun.

### Sorun: Arama çalışmıyor
**Çözüm**: Tarayıcının JavaScript desteğini kontrol edin. Tarayıcıyı yenileyin.

### Sorun: Taksi çağrısı başarısız
**Çözüm**: Tüm alanları (semt, mahalle, sokak) doldurduğunuzdan emin olun.

## 📝 Veri Güncelleme

Yeni sokak/cadde eklemek için `data.js` dosyasını düzenleyin:

```javascript
"YeniSemt": {
    "mahalleler": {
        "YeniMahalle": [
            "Sokak/Cadde 1",
            "Sokak/Cadde 2"
        ]
    }
}
```

## 🎨 Özelleştirme

Renkleri değiştirmek için `index.html` içindeki CSS bölümünü düzenleyin:

```css
/* Ana renk */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## 📧 İletişim

Sorular veya öneriler için lütfen bir issue oluşturun.

## 📄 Lisans

MIT Lisansı

---

**Versiyon**: 1.0.0  
**Son Güncelleme**: Ağustos 2024  
**Durum**: ✅ Aktif ve Kullanıma Hazır
