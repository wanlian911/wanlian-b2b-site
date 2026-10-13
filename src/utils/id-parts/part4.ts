// Data produk bahasa Indonesia Bagian 4 — Slug 44–46
import type { Product } from '../products';

export const productsIdPart4: Record<string, Product> = {
  'underground-fire-hydrant-sa': {
    id: '44', slug: 'underground-fire-hydrant-sa', name: 'Hidran Kebakaran Bawah Tanah (Seri SA)', category: 'Hidran Pemadam & Adaptor Pompa',
    description: 'Hidran kebakaran bawah tanah seri SA Wanlian dipasang rata dengan permukaan tanah, sehingga bodi katup di dalam tanah terlindung dari pembekuan musim dingin dan benturan kendaraan. Hidran ini memiliki dua outlet KWS65 (65 mm atau kombinasi 65/80 mm) untuk mobil pemadam dan jalur selang, serta menjadi solusi standar untuk jalan kota, kawasan industri, dan jaringan proteksi kebakaran gudang di iklim dingin.',
    features: ['Pemasangan bawah tanah rata permukaan melindungi bodi dari embun beku dan benturan', 'Dua outlet KWS65 (pilihan 65/80 mm) dengan tutup berantai untuk sambungan cepat', 'Bodi besi cor ulet tugas berat dengan lapisan bubuk merah antikorosi penuh', 'Katup bawah dengan dudukan kuningan untuk penutupan andal dan perawatan rendah', 'Pilihan drainase antideku tersedia untuk wilayah yang sangat dingin'],
    specs: { 'Inlet nominal': 'DN100 / DN150', 'Konfigurasi outlet': '2 x 65 mm (KWS65), pilihan 65 + 80 mm', 'Tekanan nominal': '1.6 MPa (PN16)', 'Tinggi pemasangan': '0.71 - 0.92 m (tergantung model, termasuk siku)', 'Material bodi': 'Besi cor ulet QT450', 'Aplikasi': 'Jalan kota, jaringan kebakaran luar ruangan di iklim dingin' },
    materials: { 'Bodi hidran': 'Besi cor ulet (QT450)', 'Outlet & bonnet': 'Besi cor ulet, berlapis bubuk merah', 'Katup bawah': 'Dudukan kuningan / gasket EPDM', 'Tutup': 'Besi cor / paduan seng dengan rantai pengaman' },
    image: '/assets/products/underground-fire-hydrant-sa.webp', seoTitle: 'Hidran Kebakaran Bawah Tanah SA DN100/DN150 | Antideku', seoDescription: 'Hidran bawah tanah SA dengan dua outlet KWS65, bodi besi cor ulet, dan 1.6 MPa untuk jaringan kota serta industri. Wanlian Fluid.',
    faqs: [
      { question: 'Apa perbedaan hidran bawah tanah SA dan hidran atas tanah SS?', answer: 'Hidran SA sebagian besar berada di bawah permukaan tanah; hanya bonnet dan tutup outlet yang terlihat. Bodi terlindung dari pembekuan dan benturan kendaraan. Hidran SS berdiri sepenuhnya di atas tanah. SA sesuai untuk iklim dingin dan jalan dengan lalu lintas tinggi.' },
      { question: 'Ukuran outlet apa yang tersedia?', answer: 'Standarnya adalah dua outlet KWS berukuran 65 mm. Model DN150 juga tersedia dengan kombinasi 65 dan 80 mm. Atas permintaan, standar kopling KWS, BS336, atau NIST lainnya dapat diterapkan.' },
      { question: 'Berapa tinggi pemasangan hidran SA?', answer: 'Termasuk siku, tinggi pemasangan sekitar 0.71 m pada model bodi kecil SA100/65 dan hingga 0.92 m pada model SA150, sehingga dapat disesuaikan dengan kemiringan jalan dan kedalaman beku setempat.' },
      { question: 'Apakah hidran SA dapat membeku pada musim dingin?', answer: 'Karena bodi katup berada di dalam tanah, hidran SA jauh lebih tahan beku daripada tipe atas tanah. Pilihan drainase antideku tersedia untuk wilayah sangat dingin agar bodi terkuras sepenuhnya setelah digunakan.' }
    ]
  },
  'dry-alarm-valve-zsfc': {
    id: '45', slug: 'dry-alarm-valve-zsfc', name: 'Katup Alarm Kering (Seri ZSFC)', category: 'Sprinkler Pemadam & Katup Alarm',
    description: 'Katup alarm kering ZSFC merupakan katup kontrol utama untuk sistem sprinkler pipa kering dan pre-action. Dalam kondisi normal, tekanan udara atau nitrogen di sisi sistem menahan klape tetap tertutup, sedangkan sisi air tetap terisi. Saat sprinkler yang teraktifkan melepaskan udara sistem, katup terbuka otomatis dan air mengisi pipa kering menuju sprinkler yang mengeluarkan air. Ideal untuk bangunan tanpa pemanas, gudang di iklim dingin, dan sistem pre-action.',
    features: ['Klape yang dikendalikan tekanan udara untuk kondisi tertutup yang andal pada sistem kering dan pre-action', 'Pembukaan seketika saat udara sistem dilepaskan oleh sprinkler yang teraktifkan', 'Mekanisme alarm terintegrasi dengan ruang tunda dan gong alarm bermotor air untuk peringatan awal', 'Bodi besi cor ulet tugas berat untuk seluruh siklus tekanan pipa kering', 'Sambungan berflensa tersedia dalam DN100 - DN200'],
    specs: { 'Rentang ukuran': 'DN100 / DN150 / DN200 (ZSFC100 / ZSFC150 / ZSFC200)', 'Tekanan nominal': '1.6 MPa (PN16)', 'Sisi sistem': 'Udara / nitrogen (tipikal 0.03 - 0.05 MPa)', 'Tipe sambungan': 'Berflensa', 'Aksesori': 'Ruang tunda, gong alarm bermotor air, manometer' },
    materials: { 'Bodi katup': 'Besi cor ulet (QT450)', 'Klape / dudukan': 'Besi cor ulet berlapis EPDM / NBR', 'Ruang tunda': 'Besi cor / kuningan', 'Gong alarm': 'Paduan aluminium', 'Trim & fitting': 'Baja galvanis / kuningan' },
    image: '/assets/products/dry-alarm-valve-zsfc.webp', seoTitle: 'Katup Alarm Kering ZSFC DN100-DN200 | Sprinkler', seoDescription: 'Katup alarm kering ZSFC 1.6 MPa untuk sistem sprinkler pipa kering dan pre-action, lengkap dengan ruang tunda dan gong alarm.',
    faqs: [
      { question: 'Apa perbedaan katup alarm kering dan katup alarm basah ZSFZ?', answer: 'Katup alarm basah melindungi sistem yang pipanya selalu terisi air. Katup alarm kering ZSFC melindungi sistem pipa kering yang jaringannya berada di bawah tekanan udara dan kosong dari air hingga sprinkler terbuka. Gunakan ZSFC di area yang dapat membeku atau memerlukan proteksi pre-action.' },
      { question: 'Dalam ukuran apa katup alarm kering ZSFC tersedia?', answer: 'Seri ZSFC tersedia dalam DN100, DN150, dan DN200 (ZSFC100 / ZSFC150 / ZSFC200), dengan tekanan nominal 1.6 MPa dan sambungan berflensa.' },
      { question: 'Perangkat alarm apa yang disertakan?', answer: 'Kelompok katup mencakup ruang tunda, gong alarm bermotor air, serta manometer inlet dan outlet sehingga tekanan udara sisi sistem dan tekanan air sisi pasokan dapat diperiksa.' },
      { question: 'Apakah ZSFC dapat digunakan dalam sistem pre-action?', answer: 'Ya. Katup alarm kering ZSFC berfungsi sebagai katup kontrol air pada sistem pre-action dan bekerja dengan perangkat kontrol pre-action. Air memasuki pipa kering setelah sprinkler dan sistem deteksi sama-sama teraktifkan.' }
    ]
  },
  'esfr-sprinkler-head': {
    id: '46', slug: 'esfr-sprinkler-head', name: 'Kepala Sprinkler ESFR dengan Pemadaman Awal dan Respons Cepat', category: 'Sprinkler Pemadam & Katup Alarm',
    description: 'Kepala sprinkler ESFR (Early Suppression Fast Response) menghasilkan debit air sangat tinggi dengan respons termal cepat, dan dirancang untuk menekan atau mengendalikan kebakaran berat di gudang rak tinggi, gudang barang, dan fasilitas industri besar. Deflektor besar yang dioptimalkan untuk aliran dengan faktor K tinggi serta ampul kaca 74 °C memberikan cakupan dan kecepatan respons sesuai NFPA 13 / GB 50084 untuk proteksi penyimpanan.',
    features: ['Debit keluaran tinggi (faktor K sesuai NFPA 13) untuk menekan kebakaran gudang yang berkembang cepat', 'Respons cepat dengan ampul kaca 74 °C untuk pemadaman awal', 'Deflektor besar yang dioptimalkan untuk distribusi air luas dan merata di bawah rak', 'Orientasi menggantung dan tegak (PY / UY) untuk tata letak rak dan penyimpanan terbuka', 'Konstruksi kuningan tempa tahan lama, dikemas 50 unit per kotak untuk proyek'],
    specs: { 'Seri model': 'ESFR-202 / ESFR-242 / ESFR-363, ZSTX-161', 'Kelas suhu': '74 °C (165 °F)', 'Orientasi': 'Menggantung (PY) / tegak (UY)', 'Sambungan ulir': 'R1/2" / R3/4" NPT', 'Kemasan': '50 unit / kotak', 'Aplikasi': 'Gudang rak tinggi, gudang barang, fasilitas industri' },
    materials: { 'Rangka bodi': 'Kuningan tempa (H59)', 'Ampul kaca': 'Ampul kaca respons cepat 74 °C', 'Deflektor': 'Baja tahan karat / paduan tembaga, desain debit tinggi' },
    image: '/assets/products/esfr-sprinkler-head.webp', seoTitle: 'Kepala Sprinkler ESFR 74 °C | Gudang Rak Tinggi', seoDescription: 'Kepala sprinkler ESFR dengan pemadaman awal dan respons cepat, ampul kaca 74 °C, orientasi menggantung atau tegak, serta debit tinggi untuk gudang.',
    faqs: [
      { question: 'Apa yang membedakan sprinkler ESFR dari sprinkler standar?', answer: 'Sprinkler ESFR dirancang untuk menyemprotkan air dalam jumlah sangat besar dengan cepat guna menekan kebakaran yang berkembang pesat. Produk menggunakan faktor K tinggi dan ampul 74 °C respons cepat, serta ditujukan untuk gudang rak tinggi yang tidak memadai dengan sprinkler standar.' },
      { question: 'Kelas suhu apa yang digunakan sprinkler ESFR ini?', answer: 'Semua model ESFR dalam seri ini menggunakan ampul kaca respons cepat 74 °C (165 °F), kelas yang umum untuk lingkungan penyimpanan dan industri.' },
      { question: 'Apakah sprinkler ESFR tersedia dalam orientasi menggantung dan tegak?', answer: 'Ya. Seri ini tersedia dalam tipe menggantung (PY, menghadap ke bawah) dan tegak (UY, menghadap ke atas), sehingga dapat disesuaikan dengan tata letak penyimpanan terbuka dan lingkungan rak.' },
      { question: 'Untuk apa sprinkler ESFR digunakan?', answer: 'Sprinkler ESFR melindungi gudang rak tinggi, gudang barang, pusat distribusi, dan fasilitas industri besar, terutama saat kriteria proteksi penyimpanan NFPA 13 / GB 50084 berlaku.' }
    ]
  }
};
