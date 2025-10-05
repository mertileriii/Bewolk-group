# Bewolk Web Sitesi

Modern, responsive ve etkileşimli web sitesi.

## 📁 Dosya Yapısı

```
bewolk/
├── index.html          # Ana HTML dosyası
├── styles.css          # CSS stilleri
├── script.js           # JavaScript etkileşimleri
├── assets/             # Medya dosyaları
│   ├── images/         # Görseller
│   │   ├── logo.png    # Site logosu
│   │   ├── favicon.ico # Site ikonu
│   │   ├── team-photo.jpg # Ekip fotoğrafı
│   │   └── portfolio/  # Portföy görselleri
│   │       ├── ecommerce-project.jpg
│   │       ├── fitness-app.jpg
│   │       ├── brand-identity.jpg
│   │       └── corporate-website.jpg
│   ├── icons/          # İkonlar
│   └── fonts/          # Özel fontlar
└── README.md           # Bu dosya
```

## 🎨 Grafik Tasarımları Entegre Etme

### 1. Görselleri Yerleştirme
- Tüm görselleri `assets/images/` klasörüne koyun
- Portföy görsellerini `assets/images/portfolio/` klasörüne koyun
- Logo dosyasını `assets/images/logo.png` olarak kaydedin
- Favicon'u `assets/images/favicon.ico` olarak kaydedin

### 2. Görsel Boyutları (Önerilen)
- **Logo**: 200x60px (PNG, şeffaf arka plan)
- **Ekip Fotoğrafı**: 400x400px (JPG)
- **Portföy Görselleri**: 600x400px (JPG)
- **Favicon**: 32x32px (ICO)

### 3. Dosya Adlandırma
- Türkçe karakter kullanmayın
- Boşluk yerine tire (-) kullanın
- Küçük harf kullanın
- Örnek: `ecommerce-project.jpg`

## 🚀 Özelleştirme

### Renkleri Değiştirme
`styles.css` dosyasında aşağıdaki renk kodlarını değiştirin:
```css
:root {
    --primary-color: #6366f1;    /* Ana renk */
    --secondary-color: #667eea;  /* İkincil renk */
    --accent-color: #764ba2;     /* Vurgu rengi */
}
```

### İçerikleri Güncelleme
`index.html` dosyasında:
- Şirket bilgilerini güncelleyin
- İletişim bilgilerini değiştirin
- Hizmet açıklamalarını düzenleyin
- Portföy projelerini güncelleyin

### Yeni Sayfalar Ekleme
1. Yeni HTML dosyası oluşturun
2. `styles.css` ve `script.js` dosyalarını dahil edin
3. Navigasyon menüsüne link ekleyin

## 📱 Responsive Tasarım

Site tüm cihazlarda mükemmel çalışır:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobil**: 320px - 767px

## 🔧 Teknik Özellikler

- **HTML5**: Semantik yapı
- **CSS3**: Modern özellikler (Grid, Flexbox, Animations)
- **JavaScript**: Vanilla JS (framework yok)
- **Responsive**: Mobile-first yaklaşım
- **SEO**: Arama motoru dostu
- **Performance**: Optimize edilmiş kod

## 🌐 Tarayıcı Desteği

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📞 Destek

Herhangi bir sorunuz için:
- E-posta: info@bewolk.com
- Telefon: +90 (555) 123 45 67

## 📄 Lisans

© 2024 Bewolk. Tüm hakları saklıdır.
