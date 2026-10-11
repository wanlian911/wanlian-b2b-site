// Türkçe ürün verileri Bölüm 3 — Slug'lar 30–43
import type { Product } from '../products';

export const productsTrPart3: Record<string, Product> = {
  'adjustable-pistol-grip-fire-nozzle': {
    id: '30', slug: 'adjustable-pistol-grip-fire-nozzle',
    name: 'Ayarlanabilir Tabanca Saplı Yangın Lansmanı',
    category: 'Yangın Hortum Makaraları & Dolapları',
    description: 'Alüminyum alaşımdan üretilen profesyonel tabanca saplı yangın lansmanı; 150-500 LPM değişken debi kontrolü ve düz jetten sis püskürtmeye kadar çeşitli püskürtme şekilleri sunar. Ergonomik sap ve geri tepmesiz tasarım, yangınla mücadelede güvenilir kullanım sağlar.',
    features: ['Düz jetten geniş sis püskürtmeye kadar ayarlanabilir püskürtme şekilleri', '150-500 LPM arasında değişken debi', 'Güvenli kavrama için parmak girintili ergonomik tabanca sapı', 'Hafif ve dayanıklı alüminyum alaşım', 'Kolay kullanım ve geri tepmesiz tasarım'],
    specs: { 'Ölçü': 'Giriş 1.5" / 2" / 2.5"', 'Debi aralığı': '150 - 500 LPM', 'Malzeme': 'Alüminyum alaşım', 'Model': 'QLD6.0/8III-B serisi', 'Uygulama': 'Yangınla mücadele, endüstriyel yangın güvenliği', 'Özelleştirme': 'Logo ve grafik tasarımı (OEM)' },
    materials: { 'Gövde': 'Alüminyum alaşım', 'Ayarlama halkası': 'Alüminyum / darbeye dayanıklı plastik', 'Sap': 'Yüksek darbe dayanımlı kauçuk kaplama' },
    image: '/assets/products/adjustable-pistol-grip-fire-nozzle.jpg',
    seoTitle: 'Ayarlanabilir Tabanca Saplı Lansman | 150-500 LPM',
    seoDescription: 'Alüminyum alaşımlı, 150-500 LPM ayarlanabilir debili tabanca saplı yangın lansmanı. Wanlian Fluid fabrika tedariki.',
    faqs: [
      { question: 'Bu lansman hangi debi ve püskürtme şekillerini sunar?', answer: 'Debi 150-500 LPM arasında ayarlanabilir. Püskürtme şekli düz jetten geniş sis püskürtmeye kadar değiştirilebilir; böylece lansman değiştirilmeden menzil ile ısı koruması arasında seçim yapılır.' },
      { question: 'Lansman hangi hortum ölçülerine uygundur?', answer: '1.5", 2" ve 2.5" girişlerle sunulur. 2.5" versiyon 65 mm düz katlanır hortuma (Model 8-65) doğrudan bağlanır; uygun adaptörle Storz veya dişli kaplinlere de bağlanabilir.' },
      { question: 'Lansman gövdesi hangi malzemeden üretilir?', answer: 'Gövde alüminyum alaşımdır. Ayarlama halkası alüminyum veya darbeye dayanıklı plastikten, tabanca sapı ise yüksek darbe dayanımlı kauçuk kaplamadan üretilir. Bu yapı ürünü hafif, korozyona dayanıklı ve konforlu kılar.' },
      { question: 'Lansman markama göre özelleştirilebilir mi?', answer: 'Evet. Lansman gövdesine OEM olarak logo ve grafik tasarımı uygulanabilir.' }
    ]
  },
  'abc-dry-powder-fire-extinguisher-5kg': {
    id: '31', slug: 'abc-dry-powder-fire-extinguisher-5kg', name: 'ABC Kuru Tozlu Yangın Söndürücü (5 kg)', category: 'Yangın Hortum Makaraları & Dolapları',
    description: 'ISO 7165 sertifikalı, taşınabilir 5 kg ABC kuru tozlu yangın söndürücü. A sınıfı (katı maddeler), B sınıfı (sıvılar), C sınıfı (gazlar) ve E sınıfı (elektrik) yangınlarda etkilidir. Manometreli ve emniyet pimli karbon çelik tüpü konut, ofis ve ticari yapılar için uygundur.',
    features: ['ISO 7165 standardına uygun taşınabilir ABC kuru tozlu söndürücü', 'A, B, C ve E sınıfı yangınlarda çok amaçlı kullanım', 'Kırmızı korozyon koruma kaplamalı karbon çelik tüp', 'Renk kodlu hazır olma göstergeli manometre', '3 kg / 4 kg / 5 kg dolum ağırlığı seçenekleri'],
    specs: { 'Kapasite': '5 kg (3 kg / 4 kg seçenekleri mevcut)', 'Standart': 'ISO 7165 / CCCF', 'Söndürücü madde': 'ABC kuru toz (%90 aktif madde)', 'Yangın sınıfları': 'A sınıfı (katılar), B (sıvılar), C (gazlar), E (elektrik)', 'Boşalma süresi': '8 - 15 saniye', 'Tüp malzemesi': 'Karbon çeliği', 'Garanti': '1 yıl' },
    materials: { 'Tüp': 'Karbon çeliği', 'Vana grubu': 'Pirinç', 'Boşaltma hortumu': 'Plastik nozullu PVC' },
    image: '/assets/products/abc-dry-powder-fire-extinguisher-5kg.webp',
    seoTitle: '5 kg ABC Kuru Tozlu Yangın Söndürücü | ISO 7165',
    seoDescription: 'A/B/C/E sınıfı yangınlar için ISO 7165 uyumlu taşınabilir 5 kg ABC kuru tozlu yangın söndürücü. Wanlian Fluid üretici tedariki.',
    faqs: [
      { question: 'ABC kuru tozlu söndürücü hangi yangın sınıflarını kapsar?', answer: 'A sınıfı katı maddeler, B sınıfı yanıcı sıvılar, C sınıfı yanıcı gazlar ve E sınıfı elektrik tesisatı yangınları için uygundur. F sınıfı yemeklik yağ ve D sınıfı metal yangınları için tasarlanmamıştır.' },
      { question: 'Bu üründeki ISO 7165 ve CCCF ne anlama gelir?', answer: 'ISO 7165 taşınabilir yangın söndürücülerin yapı, test ve işaretleme performans standardıdır. CCCF, yangın ürünleri için Çin zorunlu sertifikasyonudur. İhracatta sertifikalar kesin model ve hedef ülkeye göre doğrulanır.' },
      { question: 'Hangi ölçüler ve boşaltma performansı sunulur?', answer: '3 kg, 4 kg ve 5 kg dolum ağırlıkları mevcuttur. 5 kg model yaklaşık 8-15 saniyede boşalır; ABC tozunun aktif madde oranı %90 olarak belirtilmiştir.' },
      { question: 'Söndürücünün kullanıma hazır olduğunu nasıl kontrol ederim?', answer: 'Renk kodlu manometre dolum durumunu gösterir. İbre yeşil bölgede ve emniyet pimi sağlam olmalıdır. Ürün bir yıl garantilidir.' },
      { question: 'Kendi etiketimle yangın söndürücü sipariş edebilir miyim?', answer: 'Evet. Tüp rengi, etiket ve dil özelleştirilebilir. Minimum sipariş miktarı, baskı dosyası ve taşıma ambalajı teklif sırasında onaylanır.' }
    ]
  },
  'sqd100-1-6-fire-pump-adapter': {
    id: '32', slug: 'sqd100-1-6-fire-pump-adapter', name: 'SQD100-1.6 İtfaiye Pompa Bağlantısı (Çift Girişli)', category: 'Yangın Hidrantları & Pompa Bağlantıları',
    description: 'İki DN65 girişi (SQS65 / KWS65) ve flanşlı DN100 çıkışı bulunan SQD100-1.6 itfaiye pompa bağlantısı. Toz boyalı sfero döküm gövde, yangın pompasına güvenilir su beslemesi için entegre kontrol vanasına sahiptir.',
    features: ['İki itfaiye aracından eş zamanlı besleme için çift giriş', 'Debi ayarı için el çarklı entegre kontrol vanası', 'Korozyona dayanıklı toz boya kaplama', 'Kapaklardaki emniyet halatları kullanım sırasında kaybı önler', 'Havalimanları ve belediye yangın güvenliği için kompakt yapı'],
    specs: { 'Model': 'SQD100-1.6', 'Giriş': 'Kapaklı 2 × DN65 (2.5") (SQS65 / KWS65)', 'Çıkış': 'Flanşlı DN100 (4")', 'Basınç sınıfı': '1.6 MPa', 'Uzunluk': '120 mm', 'Yüzey': 'Kırmızı toz boyalı' },
    materials: { 'Gövde': 'Sfero döküm / dökme demir', 'El çarkı mili': 'Pirinç / paslanmaz çelik', 'Emniyet halatları': 'Örgülü çelik halat' },
    image: '/assets/products/sqd100-1-6-fire-pump-adapter.webp', seoTitle: 'SQD100-1.6 İtfaiye Pompa Bağlantısı | Çift Giriş',
    seoDescription: 'İki DN65 girişli, DN100 flanşlı çıkışlı SQD100-1.6 itfaiye pompa bağlantısı. Toz boyalı gövde, Çin üretici tedariki.',
    faqs: [
      { question: 'SQS65 ve KWS65 kapakları arasındaki fark nedir?', answer: 'Farklı uluslararası kaplin standartlarına uygundurlar. SQS65 uluslararası itfaiye standardını, KWS65 Alman standardını izler. İtfaiyenizin kullandığı standardı belirtmeniz gerekir.' },
      { question: 'İki itfaiye aracı SQD100ü aynı anda besleyebilir mi?', answer: 'Evet. İki DN65 girişi iki itfaiye aracının aynı anda bağlanmasına ve debilerin flanşlı DN100 çıkışında birleşmesine olanak verir.' },
      { question: 'SQD100de debi kontrol vanası var mı?', answer: 'Evet. El çarklı entegre kontrol vanası debiyi düzenler. Kapaklardaki örgülü çelik halatlar, çalışma sırasında kapakların kaybolmasını önler.' },
      { question: 'SQD100-1.6nın basınç sınıfı ve ölçüleri nedir?', answer: 'Ürün 1.6 MPa için tasarlanmış olup kompakt yapıda 120 mm uzunluğa sahiptir. Havalimanı, sanayi sahası ve belediye ağlarındaki pompa bağlantıları için uygundur.' }
    ]
  },
  'sp45f-flange-digital-balancing-valve': {
    id: '33', slug: 'sp45f-flange-digital-balancing-valve', name: 'SP45F Flanşlı Dijital Balans Vanası', category: 'Hidrolik Kontrol Vanaları',
    description: 'HVAC sistemlerinde hassas hidrolik balans için dijital kilitleme göstergeli, sfero döküm (QT450) SP45F flanşlı dijital balans vanası. Y tipi glob vana yapısında doğru debi ölçümü için iki basınç test noktası bulunur.',
    features: ['Hassas debi balansı için dijital kilitleme göstergesi', 'Doğru ölçüm için iki basınç test noktası', 'Uzun kullanım ömrü için sfero döküm (QT450) gövde', 'Düşük basınç kayıplı Y tipi glob vana yapısı', 'HVAC sistemleri ve su kontrolüne uygun'],
    specs: { 'Ölçü aralığı': 'DN50 - DN300', 'Malzeme': 'Sfero döküm (QT450)', 'Basınç': 'Orta basınç', 'Akışkanlar': 'Su, yağ, gaz', 'Yapı': 'Balans vanası (Y tipi glob vana)', 'Akışkan sıcaklığı': 'Normal sıcaklık', 'Garanti': '1 yıl', 'Özelleştirme': 'OEM / ODM' },
    materials: { 'Vana gövdesi': 'Sfero döküm (QT450)', 'El çarkı': 'Sfero döküm', 'Test noktaları': 'Paslanmaz çelik' }, image: '/assets/products/sp45f-flange-digital-balancing-valve.webp',
    seoTitle: 'SP45F Dijital Balans Vanası | HVAC', seoDescription: 'HVAC hidrolik balansı için göstergeli ve test noktalı SP45F DN50-DN300 dijital balans vanası. Wanlian Fluid fabrika tedariki.'
  },
  'z85x-stainless-steel-grooved-gate-valve': {
    id: '34', slug: 'z85x-stainless-steel-grooved-gate-valve', name: 'Z85X Paslanmaz Çelik Yivli Sürgülü Vana', category: 'Endüstriyel Vanalar & Pislik Tutucular',
    description: 'Su uygulamaları için yükselmeyen milli, kelepçeli tip Z85X paslanmaz çelik sürgülü vana. Döküm 316 paslanmaz çelik (CF8M) gövde, hızlı montaj için yivli uçlara sahiptir. Korozyon direncinin gerekli olduğu gaz, yağ ve su hatlarına uygundur.',
    features: ['Yüksek korozyon direnci için döküm 316 paslanmaz çelik (CF8M) gövde', 'Hızlı ve kolay montaj için yivli kelepçe bağlantısı', 'Manuel kumandalı yükselmeyen mil tasarımı', 'Gaz, yağ ve su akışkanlarına uygun', 'OEM ve OBM özelleştirme desteği'],
    specs: { 'Model': 'Z85X', 'Ölçü aralığı': 'DN40 - DN300 (2" - 12")', 'Malzeme': 'Paslanmaz çelik (CF8M)', 'Akışkanlar': 'Gaz, yağ, su', 'Kumanda': 'Manuel (yükselmeyen mil)', 'Yapı': 'Sürgülü vana', 'Garanti': '1 yıl', 'Özelleştirme': 'OEM / OBM' },
    materials: { 'Vana gövdesi': 'Döküm 316 paslanmaz çelik (CF8M)', 'Mil': 'Paslanmaz çelik', 'El çarkı': 'Sfero döküm / paslanmaz çelik' }, image: '/assets/products/z85x-stainless-steel-grooved-gate-valve.webp',
    seoTitle: 'Z85X Paslanmaz Çelik Yivli Sürgülü Vana | CF8M', seoDescription: 'Gaz, yağ ve su hatları için CF8M gövdeli Z85X DN40-DN300 paslanmaz çelik yivli sürgülü vana. Hızlı montaj, fabrika tedariki.'
  },
  'brass-gate-valve-z15w-16t': {
    id: '35', slug: 'brass-gate-valve-z15w-16t', name: 'ANSI Dövme Pirinç Sürgülü Vana (Z15W-16T)', category: 'Endüstriyel Vanalar & Pislik Tutucular',
    description: 'Yağ ve su uygulamaları için NPT dişli bağlantılı, manuel kumandalı Z15W-16T dövme pirinç sürgülü vana. Güvenilir sızdırmazlığa sahip kompakt yapı; su tedariki, HVAC ve endüstriyel boru hatlarında yaygın olarak kullanılır.',
    features: ['Dayanıklı kum döküm dokulu dövme pirinç gövde', 'Hızlı ve sızdırmaz montaj için NPT dişli uçlar', 'Kırmızı el çarklı yükselmeyen mil tasarımı', '200 WOG (su, yağ, gaz) sınıfı', 'OEM ve ODM özelleştirme seçeneği'],
    specs: { 'Ölçü aralığı': 'DN15 - DN100 (1/2" - 4")', 'Basınç': 'PN1.6 MPa (200 WOG)', 'Malzeme': 'Dövme pirinç', 'Bağlantı': 'NPT dişli', 'Akışkanlar': 'Yağ, su', 'Kumanda': 'Manuel', 'Sıcaklık': 'Normal sıcaklık', 'Garanti': '1 yıl', 'Standart': 'ANSI' },
    materials: { 'Vana gövdesi': 'Dövme pirinç', 'Mil': 'Pirinç', 'El çarkı': 'Kırmızı boyalı dökme demir' }, image: '/assets/products/brass-gate-valve-z15w-16t.webp',
    seoTitle: 'Z15W-16T Dövme Pirinç Sürgülü Vana | NPT Dişli', seoDescription: 'Su ve yağ sistemleri için NPT dişli ANSI Z15W-16T dövme pirinç sürgülü vana. PN1.6 MPa, manuel. Wanlian Fluid fabrika tedariki.'
  },
  'stainless-steel-fire-extinguisher-box': {
    id: '36', slug: 'stainless-steel-fire-extinguisher-box', name: 'Paslanmaz Çelik Yangın Söndürücü Dolabı (Hortum Makaralı)', category: 'Yangın Hortum Makaraları & Dolapları',
    description: 'Entegre yangın hortum makarası saklama alanına sahip, özelleştirilebilir paslanmaz çelik yangın söndürücü dolabı. Toz boyalı yüzey ve görüş penceresi; havalimanı, ticari ve endüstriyel yangın güvenliği tesisatlarına uygundur.',
    features: ['Toz boyalı 304 / 201 paslanmaz çelik yapı', 'Şeffaf görüş pencereli gömme kapak', 'Yangın hortum makarası veya yangın söndürücü saklama alanı', 'Dayanıklı, taşınabilir ve kolay monte edilir', 'Kırmızı veya gümüş renk seçenekleri, tamamen özelleştirilebilir (OEM)'],
    specs: { 'Malzeme': '304 / 201 paslanmaz çelik / demir', 'Tip': 'Yangın söndürücü dolabı / yangın hortum makarası dolabı', 'İşlev': 'Yangın hortum makarası veya yangın söndürücü saklama', 'Uygulama': 'Havalimanı yangın güvenliği, ticari binalar', 'Renk': 'Kırmızı, gümüş', 'Taşıma kapasitesi': '15 - 30 kN', 'Yüzey': 'Toz boya', 'Özelleştirme': 'Ölçüler ve logo (OEM)' },
    materials: { 'Dolap gövdesi': '304 / 201 paslanmaz çelik', 'Görüş penceresi': 'Temperli cam / plastik', 'Kilit': 'Paslanmaz çelik' }, image: '/assets/products/stainless-steel-fire-extinguisher-box.jpg',
    seoTitle: 'Hortum Makaralı Paslanmaz Çelik Yangın Dolabı', seoDescription: 'Hortum makarası için alanı, toz boyası ve görüş penceresi bulunan özelleştirilebilir paslanmaz çelik yangın dolabı. Çin üretici tedariki.'
  },
  'remote-control-float-valve-100x': {
    id: '37', slug: 'remote-control-float-valve-100x', name: 'Uzaktan Kumandalı Paslanmaz Çelik Şamandıra Vanası (100X-16P)', category: 'Hidrolik Kontrol Vanaları',
    description: 'Su depoları ve rezervuarlarda otomatik su seviyesi kontrolü için flanşlı bağlantıya sahip, döküm paslanmaz çelik (CF8) 100X-16P uzaktan kumandalı şamandıra vanası. Şamandıra pilot kumandalı hidrolik çalışma, güvenilir seviye düzenlemesi sağlar.',
    features: ['Korozyona dayanıklı paslanmaz çelik CF8 gövde', 'Otomatik seviye düzenlemesi için hidrolik şamandıra pilot kumandası', 'Kolay montaj için DN40-DN300 flanşlı bağlantı', '-50 °C ile 100 °C arasında geniş çalışma sıcaklığı', 'OEM ve ODM özelleştirme seçeneği'],
    specs: { 'Model': '100X-16P', 'Ölçü aralığı': 'DN40 - DN300', 'Basınç': '0 - 1.0 MPa (0 - 10 bar)', 'Malzeme': 'Paslanmaz çelik (CF8)', 'Bağlantı': 'Flanşlı', 'Akışkan': 'Su', 'Kumanda': 'Hidrolik (şamandıra pilot kumandalı)', 'Sıcaklık': '-50 °C ile 100 °C arası', 'Garanti': '1 yıl' },
    materials: { 'Vana gövdesi': 'Döküm paslanmaz çelik (CF8)', 'Pilot ve borulama': 'Paslanmaz çelik', 'Üst vana': 'Plastik saplı küresel vana' }, image: '/assets/products/remote-control-float-valve-100x.webp',
    seoTitle: '100X-16P Paslanmaz Çelik Uzaktan Kumandalı Şamandıra Vanası', seoDescription: 'Otomatik su seviyesi kontrolü için flanşlı, CF8 paslanmaz çelik 100X-16P uzaktan kumandalı şamandıra vanası. Fabrika tedariki.'
  },
  'ul-fm-resilient-seat-osy-gate-valve': {
    id: '38', slug: 'ul-fm-resilient-seat-osy-gate-valve', name: 'UL/FM Yangın Güvenliği Elastomer Yataklı OS&Y Sürgülü Vana', category: 'Endüstriyel Vanalar & Pislik Tutucular',
    description: 'Yangın güvenliği sistemleri için yivli uçlara sahip, UL ve FM sertifikalı elastomer yataklı OS&Y (dış vidalı ve boyunduruklu) sürgülü vana. Sfero döküm gövde ve yükselen mil, açık/kapalı konumu net biçimde gösterir.',
    features: ['Yangın güvenliği uygulamaları için UL ve FM sertifikalı', 'Net konum göstergeli yükselen milli OS&Y tasarımı', 'Hızlı mekanik kaplin bağlantısı için yivli uçlar', 'Sızdırmaz kapanma için elastomer yataklı sfero döküm gövde', 'OEM ve ODM özelleştirme seçeneği'],
    specs: { 'Ölçü aralığı': '2" - 10" (DN50 - DN250)', 'Malzeme': 'Sfero döküm', 'Bağlantı': 'Yivli uçlar', 'Akışkan': 'Su', 'Kumanda': 'Manuel (OS&Y yükselen milli)', 'Yapı': 'Sürgülü vana', 'Sıcaklık': 'Normal sıcaklık', 'Sertifikasyon': 'UL / FM listeli', 'Özelleştirme': 'OEM / ODM' },
    materials: { 'Vana gövdesi': 'Sfero döküm', 'Mil': 'Pirinç / paslanmaz çelik', 'Yatak': 'Elastomer (EPDM)', 'El çarkı': 'Sfero döküm' }, image: '/assets/products/ul-fm-resilient-seat-osy-gate-valve.webp',
    seoTitle: 'UL/FM OS&Y Elastomer Yataklı Sürgülü Vana | Yivli', seoDescription: 'Yangın sistemleri için UL/FM listeli, yivli uçlu OS&Y elastomer yataklı sürgülü vana. Sfero döküm ve yükselen mil. Wanlian Fluid.',
    faqs: [{ question: 'Bu OS&Y sürgülü vana gerçekten UL ve FM listeli mi?', answer: 'Model yangın güvenliği uygulamaları için listelidir. Kesin listeli model, sertifika numarası ve kapsam her siparişte doğrulanır; kabulden önce numara düzenleyen kuruluşta kontrol edilmelidir.' }, { question: 'Yangın ana hatlarında neden yivli uçlar kullanılır?', answer: 'Yivli uçlar kaynak veya cıvata yerine mekanik kaplin kullanır. Bu, montajı hızlandırır, sahada hizalamayı kolaylaştırır ve vana değişimini basitleştirir.' }, { question: 'OS&Y vananın yükselen mili neyi gösterir?', answer: 'Yükselen milli OS&Y tasarımında mil konumu bir bakışta görülebilir: tamamen yukarıda açık, aşağıda kapalı konumu ifade eder. Bu özellik yangın tesisatlarında izlenen kesme vanaları için önemlidir.' }, { question: 'Hangi ölçüler mevcuttur?', answer: 'EPDM elastomer yataklı sfero döküm gövdeyle 2-10 inç (DN50-DN250) aralığı mevcuttur; OEM/ODM özelleştirme yapılabilir.' }]
  },
  'metal-fire-extinguisher-box-red': {
    id: '39', slug: 'metal-fire-extinguisher-box-red', name: 'Makaralı Metal Yangın Söndürücü / Hidrant Dolabı (Kırmızı)', category: 'Yangın Hortum Makaraları & Dolapları',
    description: 'Yangın hortum makarası için depolama alanına sahip, kırmızı toz boyalı ve kapısında kullanım talimatları bulunan özelleştirilebilir metal yangın söndürücü dolabı. Havalimanı, ticari ve endüstriyel yangın güvenliği tesisatları için uygundur.',
    features: ['Toz boyalı kırmızı metal yapı', 'Yangın hortum makarası veya yangın söndürücü saklama alanı', 'Kapı üzerinde kullanım talimatları', 'Dayanıklı, kolay monte edilir ve kullanılır', 'Yapı, ölçü ve logo özelleştirilebilir (OEM)'],
    specs: { 'Malzeme': '304 / 201 paslanmaz çelik / demir', 'Tip': 'Yangın söndürücü dolabı / yangın hortum makarası dolabı', 'Uygulama': 'Havalimanı yangın güvenliği, ticari binalar', 'Renk': 'Kırmızı toz boya', 'İç çap': '350 mm', 'Uzunluk': '500 mm', 'Özelleştirme': 'Yapı ve logo (OEM)' },
    materials: { 'Dolap gövdesi': 'Metal (demir / paslanmaz çelik)', 'Kapı camı': 'Temperli cam', 'Kilit': 'Pirinç / çinko alaşımı' }, image: '/assets/products/metal-fire-extinguisher-box-red.jpg', seoTitle: 'Makaralı Metal Yangın Söndürücü Dolabı | Kırmızı', seoDescription: 'Hortum makarası ve kullanım talimatı bulunan kırmızı toz boyalı metal yangın söndürücü dolabı. Wanlian Fluid üretici tedariki.'
  },
  'horizontal-sidewall-fire-sprinkler-t-zstbs': {
    id: '40', slug: 'horizontal-sidewall-fire-sprinkler-t-zstbs', name: 'Yatay Yan Duvar Yangın Sprinkler Başlığı (T-ZSTBS)', category: 'Yangın Sprinkleri & Alarm Vanaları',
    description: 'Krom kaplamalı yüzeye ve kırmızı 68 °C cam ampule sahip yatay yan duvar yangın sprinkler başlığı T-ZSTBS. Oda çevresinde duvara montaj için tasarlanmış olup hızlı tepki veren yangın söndürme kapsamı sağlar.',
    features: ['Çevre kapsamı için yatay yan duvar tasarımı', '68 °C (155 °F) sıcaklık sınıfına sahip kırmızı cam ampul', 'Parlatılmış krom kaplama yüzey', 'Yönlendirilmiş su dağıtımı sağlayan kompakt dağıtıcı', 'Düşük ve normal tehlike sınıfı alanlara uygun'],
    specs: { 'Model': 'T-ZSTBS', 'Sıcaklık sınıfı': '68 °C (155 °F)', 'Ampul rengi': 'Kırmızı (Q5 tepki)', 'Malzeme': 'Krom kaplamalı pirinç / paslanmaz çelik', 'Bağlantı': '1/2" NPT dişli', 'Tepki': 'Standart tepki', 'Uygulama': 'Yangın sprinkler sistemleri (düşük / normal tehlike)' },
    materials: { 'Gövde': 'Krom kaplamalı pirinç', 'Cam ampul': 'Cam (kırmızı sıvı, 68 °C)', 'Dağıtıcı': 'Yönlendirme çentikli metal' }, image: '/assets/products/horizontal-sidewall-fire-sprinkler-t-zstbs.png', seoTitle: 'Yatay Yan Duvar Sprinkler Başlığı T-ZSTBS | 68 °C', seoDescription: '68 °C kırmızı cam ampullü, krom kaplamalı T-ZSTBS yatay yan duvar sprinkler başlığı. Wanlian Fluid fabrika tedariki.'
  },
  'd381x-16q-grooved-butterfly-valve': {
    id: '41', slug: 'd381x-16q-grooved-butterfly-valve', name: 'Yivli Kelebek Vana D381X-16Q (Sonsuz Dişli Kutulu)', category: 'Endüstriyel Vanalar & Pislik Tutucular',
    description: 'Yangın ve su hatları için sonsuz dişli kutulu D381X-16Q yivli kelebek vana. Sfero döküm (QT450) gövde elektroforetik kaplamalıdır, PN16 basınç sınıfına uygundur ve konum göstergesi için isteğe bağlı sinyal kilidi sunar.',
    features: ['Düzgün kumanda için el çarklı sonsuz dişli kutusu', 'Mekanik kaplinle hızlı montaj için yivli uçlar', 'Elektroforetik kaplamalı sfero döküm (QT450) gövde', 'Açık/kapalı konum göstergesi için isteğe bağlı sinyal kilidi', 'Yangın güvenliği ve su hatlarına uygun'],
    specs: { 'Model': 'D381X', 'Ölçü aralığı': 'DN50 - DN300', 'Malzeme': 'Sfero döküm (QT450)', 'Basınç': 'PN16', 'Bağlantı': 'Yivli uçlar', 'Kumanda': 'El çarklı sonsuz dişli kutusu', 'Taşıma kapasitesi': '10 - 50 kN', 'Kaplama': 'Elektroforetik', 'Özelleştirme': 'OEM' },
    materials: { 'Vana gövdesi': 'Sfero döküm (QT450)', 'Disk': 'Sfero döküm / paslanmaz çelik', 'Yatak': 'EPDM kauçuk kaplama', 'Kumanda': 'Dökme demir sonsuz dişli kutusu' }, image: '/assets/products/d381x-16q-grooved-butterfly-valve.webp', seoTitle: 'Yivli Kelebek Vana D381X-16Q | PN16', seoDescription: 'Su ve yangın hatları için sonsuz dişli kutulu D381X-16Q DN50-DN300 yivli kelebek vana. QT450, PN16. Fabrika tedariki.'
  },
  'zstdy-concealed-fire-sprinkler': {
    id: '42', slug: 'zstdy-concealed-fire-sprinkler', name: 'Gizli Tavan Yangın Sprinkler Başlığı ZSTDY', category: 'Yangın Sprinkleri & Alarm Vanaları',
    description: 'Dekoratif kapak plakalı, galvanik krom kaplamalı ZSTDY gizli tavan sprinkler başlığı; üst segment tavan montajları için tasarlanmıştır. 68 °C kırmızı cam ampullü paslanmaz çelik yapıya sahiptir ve UL listelidir.',
    features: ['Üst segment tavanlar için dekoratif kapak plakalı gizli tasarım', 'Galvanik krom kaplama ve paslanmaz çelik yapı', '68 °C (155 °F) sıcaklık sınıfına sahip kırmızı cam ampul', 'Sızdırmaz montaj için dişli ve conta yalıtımı', 'UL listeli, nitelikli tavan uygulamalarına uygun'],
    specs: { 'Model': 'ZSTDY', 'Ölçü aralığı': 'DN15 - DN20 (1/2" - 3/4")', 'Malzeme': 'Paslanmaz çelik', 'Sıcaklık sınıfı': '68 °C (155 °F)', 'Yüzey': 'Galvanik krom kaplama', 'Sertifikasyon': 'UL listeli', 'Uygulama': 'Gizli tavan yangın sprinkler sistemleri' },
    materials: { 'Sprinkler gövdesi': 'Paslanmaz çelik', 'Cam ampul': 'Cam (kırmızı sıvı, 68 °C)', 'Rozet / kapak': 'Krom yüzeyli pirinç' }, image: '/assets/products/zstdy-concealed-fire-sprinkler.webp', seoTitle: 'Kapaklı Gizli Tavan Sprinkler Başlığı ZSTDY', seoDescription: 'Dekoratif kapaklı, krom kaplamalı paslanmaz çelik ZSTDY DN15-DN20 gizli tavan sprinkler başlığı, UL listeli. Fabrika tedariki.'
  },
  'storz-coupling-2-5inch-aluminum': {
    id: '43', slug: 'storz-coupling-2-5inch-aluminum', name: '2.5" Alüminyum Storz İtfaiye Kaplini (Alman Standardı)', category: 'Yangın Hortum Makaraları & Dolapları',
    description: 'Kendinden sızdırmaz kenarlı, Alman standardına uygun alüminyum Storz hızlı kaplin. Çeyrek turla conta yerine oturur ve bağlantıyı aletsiz, damlatmadan kilitler. Alüminyum, pirinç veya krom kaplama seçenekleriyle 2.5 inç (65 mm) ölçüsünde; düz katlanır hortumlar için hortum kuyruklu, fabrikada monte edilmiş veya ayrı sunulur.',
    features: ['Alman standardına uygun Storz hızlı kaplin', 'Sızdırmaz bağlantı için kendinden sızdırmaz kenar', 'Pirinç veya krom kaplama seçenekli alüminyum yapı', 'Su ve köpük karışımına uygun', 'Kolay montaj, dayanıklı ve taşınabilir'],
    specs: { 'Ölçü': '2.5" (DN50 / DN65 / DN80 / DN100 / DN150)', 'Malzeme': 'Alüminyum (pirinç / krom kaplama seçenekleri)', 'Basınç': '1.6 MPa', 'Standart': 'Alman Storz standardı', 'Maksimum menzil': '28 m', 'Uygun akışkan': 'Temiz su ve köpük karışımı', 'Bağlantı': 'Hortum kuyruklu Storz hızlı bağlantı' },
    materials: { 'Kaplin gövdesi': 'Alüminyum alaşım', 'Conta': 'Kendinden sızdırmaz kauçuk', 'Seçenekler': 'Pirinç / krom kaplama' }, image: '/assets/products/storz-coupling-2-5inch-aluminum-overlay.png', infographic: '/assets/products/storz-coupling-2-5inch-aluminum-infographic.svg',
    seoTitle: '2.5" Alüminyum Storz Kaplin | Alman Standardı', seoDescription: 'Su ve köpük yangınla mücadele uygulamaları için kendinden sızdırmaz 2.5 inç Alman standardı alüminyum Storz kaplin. Fabrika tedariki.',
    faqs: [{ question: 'Storz kaplin hangi hortum ve bağlantı sistemlerine uygundur?', answer: 'Temiz su ve köpük karışımında hortum-hortum ve hortum-lansman bağlantıları için kullanılan, kendinden sızdırmaz kenarlı Alman standardı Storz hızlı kaplindir. BS336, NIST veya KWS gibi hidrant dişleri için uygun adaptör gerekir.' }, { question: 'Hangi basınç sınıfı ve ölçüler mevcuttur?', answer: 'Çalışma basıncı 1.6 MPa’dır. 2.5" (DN50 / DN65 / DN80 / DN100 / DN150) ölçülerinde alüminyum, isteğe bağlı pirinç veya krom kaplama seçenekleri bulunur.' }, { question: 'Kaplin hortum kuyruklarıyla birlikte mi teslim edilir?', answer: 'Evet. Storz bağlantısı düz katlanır hortumlara takılabilen hızlı bağlantı hortum kuyruklarına sahiptir; siparişe göre fabrikada monte edilmiş veya ayrı teslim edilebilir.' }, { question: 'Model 8-65 düz katlanır hortumla kullanılabilir mi?', answer: 'Evet. 2.5" ölçü, Model 8-65’in 65 mm konfigürasyonuna uygundur. Komple bir hat seti için düz katlanır hortumumuz ve ayarlanabilir tabanca saplı lansmanlarımızla birlikte kullanılabilir.' }]
  }
};
