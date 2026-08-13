// Antalya Bölge Verileri - Tüm Semtler, Mahalleler ve Sokak/Caddeler
const antalyaData = {
    "Muratpaşa": {
        "mahalleler": {
            "Aspendos": [
                "Aspendos Caddesi",
                "Güzeloba Sokak",
                "Çamlıbel Caddesi",
                "Kışlaçay Sokak",
                "Atatürk Bulvarı"
            ],
            "Güzeloba": [
                "Güzeloba Caddesi",
                "Palmiye Sokak",
                "Kumcu Caddesi",
                "Çakıl Sokak",
                "Deniz Bulvarı"
            ],
            "Konyaaltı": [
                "Konyaaltı Caddesi",
                "Sahil Yolu",
                "Akdeniz Sokak",
                "Plaj Bulvarı",
                "Esen Sokak"
            ],
            "Bahçelievler": [
                "Bahçelievler Caddesi",
                "Yeşil Sokak",
                "Park Yolu",
                "Gül Caddesi",
                "Çiçek Sokak"
            ],
            "Kaşaltı": [
                "Kaşaltı Caddesi",
                "Antalya Sokak",
                "Ören Sokak",
                "Tarih Caddesi",
                "İçel Sokak"
            ],
            "Feslihan": [
                "Feslihan Caddesi",
                "Medrese Sokak",
                "Kültür Yolu",
                "Sanat Sokak",
                "Taş Caddesi"
            ]
        }
    },
    "Kepez": {
        "mahalleler": {
            "Altınova": [
                "Altınova Caddesi",
                "Maden Sokak",
                "Altın Sokak",
                "Hazine Caddesi",
                "Değer Yolu"
            ],
            "Arslanbey": [
                "Arslanbey Caddesi",
                "Aslan Sokak",
                "Destan Yolu",
                "Kral Sokak",
                "İmparatorluk Caddesi"
            ],
            "Çataltepe": [
                "Çataltepe Caddesi",
                "Tepeli Sokak",
                "Yüksek Yolu",
                "Dağ Sokak",
                "Orman Caddesi"
            ],
            "Erenköy": [
                "Erenköy Caddesi",
                "Eren Sokak",
                "Köy Yolu",
                "Tarla Caddesi",
                "Hasır Sokak"
            ],
            "Fatih": [
                "Fatih Caddesi",
                "Vahit Sokak",
                "Denetim Yolu",
                "Kontrol Sokak",
                "Yönetim Caddesi"
            ]
        }
    },
    "Konyaaltı": {
        "mahalleler": {
            "Avşalar": [
                "Avşalar Caddesi",
                "Yörük Sokak",
                "Çoban Yolu",
                "At Sokak",
                "Hayvancılık Caddesi"
            ],
            "Beşköprü": [
                "Beşköprü Caddesi",
                "Köprü Sokak",
                "Su Yolu",
                "Akış Caddesi",
                "Geçiş Sokak"
            ],
            "Camisu": [
                "Camisu Caddesi",
                "Cami Sokak",
                "Su Yolu",
                "Kuyu Caddesi",
                "Pınar Sokak"
            ],
            "Demirören": [
                "Demirören Caddesi",
                "Demir Sokak",
                "Madencilik Yolu",
                "Fabrika Sokak",
                "Üretim Caddesi"
            ],
            "Dosemer": [
                "Dosemer Caddesi",
                "Dö Sokak",
                "Ağ Yolu",
                "Sistem Sokak",
                "İşlemler Caddesi"
            ]
        }
    },
    "Aksu": {
        "mahalleler": {
            "Akçaabat": [
                "Akçaabat Caddesi",
                "Akça Sokak",
                "Beyaz Yolu",
                "Temiz Sokak",
                "Arı Caddesi"
            ],
            "Arapsuyu": [
                "Arapsuyu Caddesi",
                "Arap Sokak",
                "Su Yolu",
                "Çeşme Caddesi",
                "Fırat Sokak"
            ],
            "Boğaçay": [
                "Boğaçay Caddesi",
                "Boğa Sokak",
                "Çay Yolu",
                "Dere Sokak",
                "Akış Caddesi"
            ],
            "Cancalı": [
                "Cancalı Caddesi",
                "Can Sokak",
                "Kalp Yolu",
                "Canlılık Sokak",
                "Yürek Caddesi"
            ],
            "Görçay": [
                "Görçay Caddesi",
                "Gör Sokak",
                "Görmek Yolu",
                "Manzara Sokak",
                "İzleme Caddesi"
            ]
        }
    },
    "Kaş": {
        "mahalleler": {
            "Andriace": [
                "Andriace Caddesi",
                "Eski Sokak",
                "Antik Yolu",
                "Kalıntı Sokak",
                "Arkeoloji Caddesi"
            ],
            "Büyükköyü": [
                "Büyükköyü Caddesi",
                "Büyük Sokak",
                "Köy Yolu",
                "Yerleşim Sokak",
                "Cemaat Caddesi"
            ],
            "Elmalı Bükü": [
                "Elmalı Bükü Caddesi",
                "Elmali Sokak",
                "Bahçe Yolu",
                "Meyve Sokak",
                "Ürün Caddesi"
            ],
            "Güneşli": [
                "Güneşli Caddesi",
                "Güneş Sokak",
                "Işık Yolu",
                "Aydın Sokak",
                "Parlak Caddesi"
            ],
            "Kaş Merkez": [
                "Kaş Merkez Caddesi",
                "Merkez Sokak",
                "Şehir Yolu",
                "Cadde Sokak",
                "Ana Bulvarı"
            ]
        }
    },
    "Kaleiçi": {
        "mahalleler": {
            "Badra": [
                "Badra Caddesi",
                "Bad Sokak",
                "Suyu Yolu",
                "Kötü Sokak",
                "Koruma Caddesi"
            ],
            "Barbaros": [
                "Barbaros Caddesi",
                "Barbar Sokak",
                "Korsan Yolu",
                "Denizci Sokak",
                "Gemi Caddesi"
            ],
            "Kaleiçi Merkez": [
                "Kaleiçi Merkez Caddesi",
                "Kale Sokak",
                "İçi Yolu",
                "Kaleler Sokak",
                "Fortifikasyon Caddesi"
            ],
            "Yivli Minare": [
                "Yivli Minare Caddesi",
                "Yivli Sokak",
                "Minare Yolu",
                "Zirve Sokak",
                "Din Caddesi"
            ],
            "Cumhuriyet": [
                "Cumhuriyet Caddesi",
                "Cumhuriyet Sokak",
                "Millet Yolu",
                "Halk Sokak",
                "Devlet Bulvarı"
            ]
        }
    },
    "Manavgat": {
        "mahalleler": {
            "Alatçay": [
                "Alatçay Caddesi",
                "Alat Sokak",
                "Çay Yolu",
                "Su Sokak",
                "Dere Caddesi"
            ],
            "Arslanköy": [
                "Arslanköy Caddesi",
                "Arslan Sokak",
                "Köy Yolu",
                "Vahşi Sokak",
                "Orman Caddesi"
            ],
            "Gün": [
                "Gün Caddesi",
                "Güneş Sokak",
                "Işık Yolu",
                "Doğu Sokak",
                "Hava Caddesi"
            ],
            "Serik": [
                "Serik Caddesi",
                "Seri Sokak",
                "Hızlı Yolu",
                "Akış Sokak",
                "Sürat Caddesi"
            ],
            "Manavgat Merkez": [
                "Manavgat Merkez Caddesi",
                "Merkez Sokak",
                "Şehir Yolu",
                "Ana Sokak",
                "Belediye Caddesi"
            ]
        }
    },
    "Alanya": {
        "mahalleler": {
            "Avsallar": [
                "Avsallar Caddesi",
                "Avsal Sokak",
                "Sahil Yolu",
                "Derya Sokak",
                "Kıyı Caddesi"
            ],
            "Oba": [
                "Oba Caddesi",
                "Obada Sokak",
                "Yerleşim Yolu",
                "Köy Sokak",
                "Nüfus Caddesi"
            ],
            "Alanya Merkez": [
                "Alanya Merkez Caddesi",
                "Merkez Sokak",
                "Belediye Yolu",
                "Şehir Sokak",
                "Ticaret Caddesi"
            ],
            "Torba": [
                "Torba Caddesi",
                "Torba Sokak",
                "Kız Yolu",
                "Korkak Sokak",
                "Koruma Caddesi"
            ],
            "Güzeloba": [
                "Güzeloba Caddesi",
                "Güzel Sokak",
                "Oba Yolu",
                "Kasaba Sokak",
                "Güzellik Caddesi"
            ]
        }
    },
    "Side": {
        "mahalleler": {
            "Side Merkez": [
                "Side Merkez Caddesi",
                "Merkez Sokak",
                "Antik Yolu",
                "Turizm Sokak",
                "Turist Caddesi"
            ],
            "Colakli": [
                "Colakli Caddesi",
                "Colak Sokak",
                "Ressam Yolu",
                "Sanat Sokak",
                "Belirginlik Caddesi"
            ],
            "Selimiye": [
                "Selimiye Caddesi",
                "Selim Sokak",
                "Padişah Yolu",
                "Kral Sokak",
                "Hükümdar Caddesi"
            ],
            "Titreyengöl": [
                "Titreyengöl Caddesi",
                "Titreme Sokak",
                "Gölü Yolu",
                "Su Sokak",
                "Ley Caddesi"
            ],
            "Kumköy": [
                "Kumköy Caddesi",
                "Kum Sokak",
                "Plaj Yolu",
                "Sahil Sokak",
                "Kıyı Caddesi"
            ]
        }
    },
    "Serik": {
        "mahalleler": {
            "Serik Merkez": [
                "Serik Merkez Caddesi",
                "Merkez Sokak",
                "Şehir Yolu",
                "Belediye Sokak",
                "Hizmet Caddesi"
            ],
            "Boğaçay": [
                "Boğaçay Caddesi",
                "Boğa Sokak",
                "Çay Yolu",
                "Hayvan Sokak",
                "Besicilik Caddesi"
            ],
            "Döş": [
                "Döş Caddesi",
                "Döş Sokak",
                "Topografya Yolu",
                "Fiziki Sokak",
                "Arazi Caddesi"
            ],
            "Söğüt": [
                "Söğüt Caddesi",
                "Söğüt Sokak",
                "Ağaç Yolu",
                "Orman Sokak",
                "Bitki Caddesi"
            ]
        }
    }
};
