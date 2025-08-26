// Data BPS Kota Medan berdasarkan scraping dari portal resmi
import rawCsv from './data fix.csv?raw';
export interface BPSDataItem {
  category: string;
  subject_id: number;
  url: string;
  title: string;
  description: string;
  scraped_at: string;
  table_count: number;
}

const bpsDataStatic: BPSDataItem[] = [
  // Statistik Demografi dan Sosial
  {
    category: "Statistik Demografi dan Sosial",
    subject_id: 519,
    url: "https://medankota.bps.go.id/id/statistics-table?subject=519",
    title: "Kependudukan dan Migrasi",
    description: "Mencakup pekerjaan dalam statistik populasi dan demografis, topik seperti demografi, statistik vital, struktur dan pertumbuhan populasi, proyeksi demografis, keluarga dan rumah tangga (perkawinan, perceraian, ukuran rumah tangga), migrasi, pengungsi, dan pencari suaka.",
    scraped_at: "2025-08-21T15:30:22.212532",
    table_count: 1
  },
  {
    category: "Statistik Demografi dan Sosial",
    subject_id: 520,
    url: "https://medankota.bps.go.id/id/statistics-table?subject=520",
    title: "Tenaga Kerja",
    description: "Mencakup statistik tentang angkatan kerja, pasar tenaga kerja, lapangan kerja dan pengangguran; topik yang lebih rinci meliputi populasi yang aktif secara ekonomi, kondisi tenaga kerja, kesehatan dan keselamatan di tempat kerja (kecelakaan di tempat kerja, cedera dan penyakit akibat kerja, masalah kesehatan terkait pekerjaan), waktu kerja dan kondisi kerja lainnya, pemogokan dan larangan bekerja, lowongan pekerjaan, penciptaan lapangan kerja.",
    scraped_at: "2025-08-21T15:30:28.687034",
    table_count: 1
  },
  {
    category: "Statistik Demografi dan Sosial",
    subject_id: 521,
    url: "https://medankota.bps.go.id/id/statistics-table?subject=521",
    title: "Pendidikan",
    description: "Termasuk partisipasi pendidikan, buta huruf, lembaga dan sistem pendidikan, sumber daya manusia dan keuangan yang diinvestasikan dalam pendidikan, pembelajaran seumur hidup, pelatihan kejuruan dan pembelajaran orang dewasa, dampak pendidikan, penilaian kinerja siswa, dll.",
    scraped_at: "2025-08-21T15:30:35.246896",
    table_count: 1
  },
  {
    category: "Statistik Demografi dan Sosial",
    subject_id: 522,
    url: "https://medankota.bps.go.id/id/statistics-table?subject=522",
    title: "Kesehatan",
    description: "Mencakup aktivitas statistik terkait kesehatan dan kematian, termasuk topik seperti harapan hidup, status kesehatan, kesehatan dan keselamatan, penentu kesehatan (termasuk gaya hidup, nutrisi, merokok, penyalahgunaan alkohol), sumber daya dan pengeluaran kesehatan, sistem perawatan kesehatan, morbiditas dan mortalitas (termasuk kematian bayi dan anak), masuk rumah sakit, penyebab penyakit dan kematian, penyakit tertentu (misalnya AIDS), kecacatan, konsumsi dan penjualan farmasi, tenaga kesehatan, remunerasi profesi kesehatan, status kesehatan lingkungan, ketidaksetaraan kesehatan, neraca kesehatan.",
    scraped_at: "2025-08-21T15:30:41.632211",
    table_count: 1
  },
  {
    category: "Statistik Demografi dan Sosial",
    subject_id: 523,
    url: "https://medankota.bps.go.id/id/statistics-table?subject=523",
    title: "Konsumsi dan Pendapatan",
    description: "Mencakup statistik pendapatan dan pengeluaran rumah tangga dari sudut pandang rumah tangga (semua jenis pendapatan dan pengeluaran), termasuk topik seperti distribusi pendapatan, pendapatan dalam bentuk natura, transfer pendapatan yang diterima dan dibayarkan, pengukuran kemiskinan berbasis pendapatan atau pengeluaran, perlindungan konsumen, pola konsumsi, barang konsumsi dan barang tahan lama, kekayaan dan utang rumah tangga.",
    scraped_at: "2025-08-21T15:30:48.110227",
    table_count: 1
  },
  {
    category: "Statistik Demografi dan Sosial",
    subject_id: 524,
    url: "https://medankota.bps.go.id/id/statistics-table?subject=524",
    title: "Perlindungan Sosial",
    description: "Berurusan dengan statistik tentang langkah-langkah untuk melindungi orang dari risiko pendapatan yang tidak memadai terkait dengan pengangguran, kesehatan yang buruk, cacat, usia tua, tanggung jawab orang tua, atau pendapatan yang tidak memadai setelah kehilangan pasangan atau orang tua, dll., termasuk statistik tentang penerima pensiun, skema jaminan sosial, pengeluaran perlindungan sosial, dll.",
    scraped_at: "2025-08-21T15:30:54.468253",
    table_count: 1
  },
  {
    category: "Statistik Demografi dan Sosial",
    subject_id: 525,
    url: "https://medankota.bps.go.id/id/statistics-table?subject=525",
    title: "Pemukiman dan Perumahan",
    description: "Mencakup kegiatan statistik tentang perumahan, tempat tinggal, dan pemukiman manusia.",
    scraped_at: "2025-08-21T15:31:00.869516",
    table_count: 1
  },
  {
    category: "Statistik Demografi dan Sosial",
    subject_id: 526,
    url: "https://medankota.bps.go.id/id/statistics-table?subject=526",
    title: "Hukum dan Kriminal",
    description: "Kegiatan termasuk kejahatan, hukuman, pengoperasian sistem peradilan pidana, keadilan, keselamatan, korban, tingkat pembersihan, populasi penjara, produksi obat-obatan terlarang, perdagangan dan penggunaan, dll.",
    scraped_at: "2025-08-21T15:31:07.417153",
    table_count: 1
  },
  {
    category: "Statistik Demografi dan Sosial",
    subject_id: 527,
    url: "https://medankota.bps.go.id/id/statistics-table?subject=527",
    title: "Budaya",
    description: "Statistik yang berhubungan dengan kegiatan budaya dalam masyarakat, seperti teater, bioskop, museum, perpustakaan, media massa, produksi buku, olahraga, dll., termasuk pengeluaran dan pembiayaan budaya.",
    scraped_at: "2025-08-21T15:31:13.799755",
    table_count: 1
  },
  {
    category: "Statistik Demografi dan Sosial",
    subject_id: 528,
    url: "https://medankota.bps.go.id/id/statistics-table?subject=528",
    title: "Aktivitas Politik dan Komunitas Lainnya",
    description: "Statistik jumlah pemilih, partisipasi dalam kegiatan politik dan masyarakat lainnya, keanggotaan serikat pekerja, dialog sosial, masyarakat sipil, modal sosial, dll.",
    scraped_at: "2025-08-21T15:31:20.249088",
    table_count: 1
  },
  {
    category: "Statistik Demografi dan Sosial",
    subject_id: 529,
    url: "https://medankota.bps.go.id/id/statistics-table?subject=529",
    title: "Penggunaan Waktu",
    description: "Statistik tentang penggunaan waktu oleh individu, seringkali terkait dengan keseimbangan kehidupan kerja (rekonsiliasi tanggung jawab keluarga dan pekerjaan berbayar); pekerjaan yang tidak dibayar.",
    scraped_at: "2025-08-21T15:31:26.599541",
    table_count: 1
  },

  // Statistik Ekonomi
  {
    category: "Statistik Ekonomi",
    subject_id: 530,
    url: "https://medankota.bps.go.id/id/statistics-table?subject=530",
    title: "Statistik Makroekonomi",
    description: "Semua kegiatan yang berkaitan dengan statistik ekonomi secara luas pada tingkat makro, atau berbeda dari Neraca Nasional, baik tahunan, triwulanan, atau bulanan. Contohnya adalah database ekonomi makro yang menggabungkan akun nasional dan indikator ekonomi makro lainnya seperti Indikator Ekonomi Utama (OECD), dll.; kecenderungan bisnis dan survei pendapat konsumen, pertumbuhan ekonomi, stabilitas dan penyesuaian struktural, indikator siklus, statistik untuk analisis siklus bisnis.",
    scraped_at: "2025-08-21T15:31:33.053310",
    table_count: 1
  },
  {
    category: "Statistik Ekonomi",
    subject_id: 531,
    url: "https://medankota.bps.go.id/id/statistics-table?subject=531",
    title: "Neraca Ekonomi",
    description: "Mencakup pekerjaan pada Neraca Ekonomi dengan harga saat ini dan konstan, berurusan dengan topik-topik seperti implementasi Sistem Neraca Ekonomi, Produk Domestik Bruto (PDB), Pendapatan Nasional Bruto (PDB), perekonomian non-observed dan informal, pengukuran modal, tabel input-output, neraca, dll.",
    scraped_at: "2025-08-21T15:31:39.496127",
    table_count: 1
  },
  {
    category: "Statistik Ekonomi",
    subject_id: 532,
    url: "https://medankota.bps.go.id/id/statistics-table?subject=532",
    title: "Statistik Bisnis",
    description: "Statistik ekonomi luas tentang kegiatan perusahaan, mencakup pekerjaan pada statistik ekonomi di berbagai sektor, berkaitan dengan topik seperti statistik kegiatan ekonomi perusahaan, demografi bisnis, investasi bisnis, layanan bisnis, permintaan layanan, kinerja industri, kelompok perusahaan , produksi industri, komoditas, struktur penjualan dan jasa, hasil industri jasa, lembaga nirlaba.",
    scraped_at: "2025-08-21T15:31:45.855906",
    table_count: 1
  },
  {
    category: "Statistik Ekonomi",
    subject_id: 533,
    url: "https://medankota.bps.go.id/id/statistics-table?subject=533",
    title: "Statistik sektoral",
    description: "Kegiatan statistik yang berhubungan dengan salah satu cabang industri atau layanan tertentu yang disebutkan pada tingkat klasifikasi tiga digit.",
    scraped_at: "2025-08-21T15:31:52.133355",
    table_count: 1
  },
  {
    category: "Statistik Ekonomi",
    subject_id: 534,
    url: "https://medankota.bps.go.id/id/statistics-table?subject=534",
    title: "Keuangan Pemerintah, Fiskal dan Statistik Sektor Publik",
    description: "Semua statistik yang terkait dengan sektor pemerintah, termasuk utang dan defisit, pendapatan dan pengeluaran, rekening sektor pemerintah, pemerintah pusat, tarif dan pendapatan pajak, sistem pajak dan manfaat, pembiayaan pensiun negara dan skema jaminan sosial negara lainnya, pekerjaan sektor publik.",
    scraped_at: "2025-08-21T15:31:58.463335",
    table_count: 1
  },
  {
    category: "Statistik Ekonomi",
    subject_id: 535,
    url: "https://medankota.bps.go.id/id/statistics-table?subject=535",
    title: "Perdagangan Internasional dan Neraca Pembayaran",
    description: "Berurusan dengan statistik semua transaksi lintas batas yang dicatat dalam neraca pembayaran, termasuk topik seperti perdagangan barang dan jasa, posisi dan utang eksternal, investasi asing langsung, perdagangan afiliasi asing, tarif, akses pasar, bantuan luar negeri , bantuan pembangunan, aliran sumber daya ke negara-negara berkembang.",
    scraped_at: "2025-08-21T15:32:04.943123",
    table_count: 1
  },
  {
    category: "Statistik Ekonomi",
    subject_id: 536,
    url: "https://medankota.bps.go.id/id/statistics-table?subject=536",
    title: "Harga-Harga",
    description: "Mencakup semua aktivitas statistik yang berhubungan dengan harga, termasuk Paritas Daya Beli (PPP) dan perbandingan PDB internasional, mencakup topik seperti Indeks Harga Konsumen (CPI), inflasi, Indeks Harga Produsen (PPI), indeks harga untuk produk dan layanan tertentu ( misalnya produk Teknologi Informasi dan Komunikasi).",
    scraped_at: "2025-08-21T15:32:11.339593",
    table_count: 1
  },
  {
    category: "Statistik Ekonomi",
    subject_id: 537,
    url: "https://medankota.bps.go.id/id/statistics-table?subject=537",
    title: "Biaya Tenaga Kerja",
    description: "Kegiatan statistik tentang biaya tenaga kerja, penghasilan dan upah, baik untuk statistik struktural maupun jangka pendek.",
    scraped_at: "2025-08-21T15:32:17.704386",
    table_count: 1
  },
  {
    category: "Statistik Ekonomi",
    subject_id: 538,
    url: "https://medankota.bps.go.id/id/statistics-table?subject=538",
    title: "Ilmu Pengetahuan, Teknologi, dan Inovasi",
    description: "Termasuk Penelitian dan Pengembangan (R&D), inovasi, paten, sumber daya manusia (dalam sains, teknologi, dan inovasi), industri teknologi tinggi dan layanan berbasis pengetahuan, bioteknologi, pembiayaan R&D, dan inovasi.",
    scraped_at: "2025-08-21T15:32:24.106361",
    table_count: 1
  },
  {
    category: "Statistik Ekonomi",
    subject_id: 557,
    url: "https://medankota.bps.go.id/id/statistics-table?subject=557",
    title: "Pertanian, Kehutanan, Perikanan",
    description: "Mencakup semua statistik terkait pertanian, kehutanan, dan perikanan, mis. statistik moneter pertanian (akun ekonomi pertanian), struktur pertanian (struktur pertanian), perdagangan produk pertanian, input tenaga kerja pertanian, produksi tanaman dan hewan, komoditas pertanian, statistik agroindustri (termasuk produksi dan keamanan pangan), pertanian organik dan pangan organik , pengeluaran pemerintah untuk pertanian, perikanan dan kehutanan, tabel sumber dan penggunaan produk, statistik hasil hutan dan hutan, penilaian sumber daya hutan dan kebakaran hutan, perdagangan hasil hutan, perikanan.",
    scraped_at: "2025-08-21T15:32:30.367790",
    table_count: 1
  },
  {
    category: "Statistik Ekonomi",
    subject_id: 558,
    url: "https://medankota.bps.go.id/id/statistics-table?subject=558",
    title: "Energi",
    description: "Pasokan energi, penggunaan energi, keseimbangan energi, keamanan pasokan, pasar energi, perdagangan energi, efisiensi energi, sumber energi terbarukan, pengeluaran pemerintah untuk energi.",
    scraped_at: "2025-08-21T15:32:36.708851",
    table_count: 1
  },
  {
    category: "Statistik Ekonomi",
    subject_id: 559,
    url: "https://medankota.bps.go.id/id/statistics-table?subject=559",
    title: "Pertambangan, Manufaktur, Konstruksi",
    description: "Statistik kegiatan industri tertentu, mis. baja, galangan kapal, dan konstruksi, memperdagangkan produk khusus yang terkait dengan pertambangan, manufaktur, dan konstruksi.",
    scraped_at: "2025-08-21T15:32:43.113840",
    table_count: 1
  },
  {
    category: "Statistik Ekonomi",
    subject_id: 560,
    url: "https://medankota.bps.go.id/id/statistics-table?subject=560",
    title: "Transportasi",
    description: "Mencakup statistik semua moda transportasi (udara, kereta api, jalan raya, perairan darat, laut), termasuk topik seperti infrastruktur transportasi, peralatan, arus lalu lintas, mobilitas pribadi, keselamatan, konsumsi energi, perusahaan transportasi, angkutan penumpang dan barang, transportasi tren sektor, kecelakaan lalu lintas jalan.",
    scraped_at: "2025-08-21T15:32:49.508308",
    table_count: 1
  },
  {
    category: "Statistik Ekonomi",
    subject_id: 561,
    url: "https://medankota.bps.go.id/id/statistics-table?subject=561",
    title: "Pariwisata",
    description: "Mencakup statistik mengenai aktivitas pengunjung (seperti kedatangan/keberangkatan, menginap semalam, pengeluaran, tujuan kunjungan, dll.) yang terkait dengan berbagai bentuk pariwisata (inbound, domestik dan outbound), kegiatan industri pariwisata dan infrastruktur, ketenagakerjaan dan akun satelit pariwisata.",
    scraped_at: "2025-08-21T15:32:55.889430",
    table_count: 1
  },
  {
    category: "Statistik Ekonomi",
    subject_id: 562,
    url: "https://medankota.bps.go.id/id/statistics-table?subject=562",
    title: "Perbankan, Asuransi dan Finansial",
    description: "Statistik uang, perbankan dan pasar keuangan, termasuk rekening keuangan, jumlah uang beredar, suku bunga, nilai tukar, indikator pasar saham, sekuritas, profitabilitas bank, asuransi sektor swasta dan statistik dana pensiun, Indikator Kesehatan Keuangan.",
    scraped_at: "2025-08-21T15:33:02.363307",
    table_count: 1
  },

  // Statistik Lingkungan Hidup dan Multi-domain
  {
    category: "Statistik Lingkungan Hidup dan Multi-domain",
    subject_id: 539,
    url: "https://medankota.bps.go.id/id/statistics-table?subject=539",
    title: "Lingkungan",
    description: "Termasuk topik seperti iklim, perubahan iklim (termasuk pengukuran aspek sosial ekonomi dari dampak perubahan iklim, kerentanan dan adaptasi), keanekaragaman hayati, lingkungan dan kesehatan, sumber daya alam, tanah, air, udara, lanskap, limbah, pengeluaran lingkungan, pengeluaran untuk perlindungan lingkungan, neraca lingkungan, indikator agri-lingkungan, tekanan lingkungan, dampak lingkungan dari industri, transportasi, energi dll., pemantauan lingkungan, analisis aliran material, indikator decoupling lingkungan, polusi, ekosistem, penggunaan dan tutupan lahan, perlindungan lingkungan, kawasan lindung nasional.",
    scraped_at: "2025-08-21T15:33:08.823345",
    table_count: 1
  },
  {
    category: "Statistik Lingkungan Hidup dan Multi-domain",
    subject_id: 540,
    url: "https://medankota.bps.go.id/id/statistics-table?subject=540",
    title: "Statistik Regional dan Statistik Area Kecil",
    description: "Kegiatan yang berkaitan dengan statistik regional dan statistik yang mengacu pada wilayah sub-nasional atau wilayah berdasarkan unit administrasi, statistik perkotaan dan pedesaan, pembangunan pedesaan, akun regional, tipologi regional, dan kesenjangan regional.",
    scraped_at: "2025-08-21T15:33:15.463323",
    table_count: 1
  },
  {
    category: "Statistik Lingkungan Hidup dan Multi-domain",
    subject_id: 541,
    url: "https://medankota.bps.go.id/id/statistics-table?subject=541",
    title: "Statistik dan Indikator Multi-Domain",
    description: "Berurusan dengan pekerjaan konseptual atau data berdasarkan pendekatan tematik khusus untuk keluaran yang melintasi beberapa bidang studi ekonomi, sosial atau lingkungan.",
    scraped_at: "2025-08-21T15:33:21.918319",
    table_count: 1
  },
  {
    category: "Statistik Lingkungan Hidup dan Multi-domain",
    subject_id: 542,
    url: "https://medankota.bps.go.id/id/statistics-table?subject=542",
    title: "Buku Tahunan dan Ringkasan Sejenis",
    description: "Publikasi statistik multi-domain, basis data, dan produk data lainnya tanpa fokus tematik atau berorientasi masalah tertentu.",
    scraped_at: "2025-08-21T15:33:28.403425",
    table_count: 1
  },
  {
    category: "Statistik Lingkungan Hidup dan Multi-domain",
    subject_id: 563,
    url: "https://medankota.bps.go.id/id/statistics-table?subject=563",
    title: "Kondisi Tempat Tinggal, Kemiskinan, dan Permasalahan Sosial Lintas Sektor",
    description: "Termasuk pekerjaan pada metode multidimensi untuk mengukur kemiskinan, kondisi kehidupan dalam arti luas, inklusi/eksklusi sosial, indikator sosial, dan situasi sosial.",
    scraped_at: "2025-08-21T15:33:34.808995",
    table_count: 1
  },
  {
    category: "Statistik Lingkungan Hidup dan Multi-domain",
    subject_id: 564,
    url: "https://medankota.bps.go.id/id/statistics-table?subject=564",
    title: "Gender dan Kelompok Populasi Khusus",
    description: "Kondisi kehidupan dan peran mereka dalam masyarakat: perbandingan laki-laki/perempuan dan situasi kelompok populasi khusus seperti anak-anak, remaja, perempuan, lanjut usia, orang cacat, kelompok minoritas, dll.",
    scraped_at: "2025-08-21T15:33:41.166404",
    table_count: 1
  },
  {
    category: "Statistik Lingkungan Hidup dan Multi-domain",
    subject_id: 565,
    url: "https://medankota.bps.go.id/id/statistics-table?subject=565",
    title: "Masyarakat Informasi",
    description: "Statistik yang memungkinkan untuk menilai penggunaan dan dampak teknologi informasi dan komunikasi pada masyarakat, termasuk akses dan penggunaan TIK (termasuk Internet), pengeluaran dan investasi TIK, infrastruktur TIK, jaringan telekomunikasi, komunikasi elektronik, e-government, perdagangan elektronik , e-learning, penetrasi broadband, layanan TIK, tarif komunikasi, infrastruktur jaringan, pendapatan, pengeluaran dan investasi operator, indikator Internet, perdagangan peralatan telekomunikasi.",
    scraped_at: "2025-08-21T15:33:47.576097",
    table_count: 1
  },
  {
    category: "Statistik Lingkungan Hidup dan Multi-domain",
    subject_id: 566,
    url: "https://medankota.bps.go.id/id/statistics-table?subject=566",
    title: "Globalisasi",
    description: "Berurusan dengan mengukur aktivitas ekonomi perusahaan multinasional, serta dengan upaya untuk mengukur globalisasi melalui berbagai komponen dari bidang studi lainnya.",
    scraped_at: "2025-08-21T15:33:54.046544",
    table_count: 1
  },
  {
    category: "Statistik Lingkungan Hidup dan Multi-domain",
    subject_id: 567,
    url: "https://medankota.bps.go.id/id/statistics-table?subject=567",
    title: "Indikator Millenium Development Goals (MDGs)",
    description: "Mengerjakan serangkaian indikator untuk memantau pencapaian Tujuan Pembangunan Milenium yang disepakati di KTT Milenium PBB.",
    scraped_at: "2025-08-21T15:34:00.467586",
    table_count: 1
  },
  {
    category: "Statistik Lingkungan Hidup dan Multi-domain",
    subject_id: 568,
    url: "https://medankota.bps.go.id/id/statistics-table?subject=568",
    title: "Perkembangan Berkelanjutan",
    description: "Mengerjakan indikator dan kerangka kerja untuk memantau dimensi ekonomi, sosial dan lingkungan dari pembangunan berkelanjutan.",
    scraped_at: "2025-08-21T15:34:07.071472",
    table_count: 1
  },
  {
    category: "Statistik Lingkungan Hidup dan Multi-domain",
    subject_id: 569,
    url: "https://medankota.bps.go.id/id/statistics-table?subject=569",
    title: "Kewiraswastaan",
    description: "Pengukuran determinan, kinerja dan dampak kegiatan kewirausahaan orang dan organisasi.",
    scraped_at: "2025-08-21T15:34:13.510939",
    table_count: 1
  }
];

interface BpsCsvRow {
  parent_category: string;
  parent_subject_id: string;
  parent_title: string;
  parent_url: string;
  row_number: string;
  title: string;
  last_updated: string;
  url: string;
  extracted_at: string;
}

const splitCsvLine = (line: string): string[] => {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += ch;
    }
  }
  result.push(current);
  return result.map(s => s.trim());
};

const parseCsvToItems = (csv: string): BPSDataItem[] => {
  if (!csv || csv.trim().length === 0) return [];
  const lines = csv.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
  if (lines.length <= 1) return [];
  const header = splitCsvLine(lines[0]);
  const rows: BpsCsvRow[] = [] as unknown as BpsCsvRow[];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line || line.trim() === '') continue;
    const cols = splitCsvLine(line);
    const row: Record<string, string> = {};
    for (let c = 0; c < header.length; c++) {
      row[header[c]] = cols[c] ?? '';
    }
    rows.push(row as unknown as BpsCsvRow);
  }

  const items: BPSDataItem[] = rows.map(r => {
    const subjectId = parseInt((r.parent_subject_id || '').replace(/[^0-9-]/g, ''), 10);
    return {
      category: r.parent_category || '',
      subject_id: Number.isFinite(subjectId) ? subjectId : 0,
      url: r.url || r.parent_url || '',
      title: r.title || r.parent_title || '',
      description: r.parent_title || '',
      scraped_at: r.extracted_at || r.last_updated || '',
      table_count: 1,
    };
  });

  return items.filter(it => it.category && it.subject_id && it.title && it.url);
};

export const bpsData: BPSDataItem[] = (() => {
  try {
    const parsed = parseCsvToItems(rawCsv);
    return parsed.length > 0 ? parsed : bpsDataStatic;
  } catch {
    return bpsDataStatic;
  }
})();

// Helper function untuk kategori
export const getCategories = (): string[] => {
  return Array.from(new Set(bpsDataStatic.map(item => item.category)));
};

// Interface untuk scoring hasil pencarian
interface SearchResult {
  item: BPSDataItem;
  score: number;
  matchType: 'exact_title' | 'partial_title' | 'description' | 'category';
}

// Fungsi untuk membersihkan dan normalize text
const normalizeText = (text: string): string => {
  return text.toLowerCase()
    .replace(/[^\w\s]/g, ' ') // Replace punctuation with spaces
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .trim();
};

// Stopwords umum bahasa Indonesia dan istilah generik yang tidak informatif untuk pencarian BPS
const STOPWORDS = new Set<string>([
  'kota','medan','jumlah','tahun','menurut','dan','di','yang','ke','atas','dari','pada','dengan','per','persen','(persen)','(tahun)','(jiwa)','(km)','(miliar','rupiah)','(ribu','rupiah)','triwulanan','harga','berlaku','konstan','atas','dasar','lahir','baru','lama','rata','rata-rata','menjadi','sektor','kecamatan','kabupaten','kota','provinsi','sumatera','utara','data','dataset','tabel'
]);

// Fungsi untuk menghitung similarity score dengan scoring yang lebih akurat
const calculateSimilarityScore = (query: string, target: string, field: 'title' | 'description' | 'category'): number => {
  const normalizedQuery = normalizeText(query);
  const normalizedTarget = normalizeText(target);
  
  const queryWords = normalizedQuery
    .split(' ')
    .filter(word => word.length > 2 && !STOPWORDS.has(word));
  const targetWords = normalizedTarget
    .split(' ')
    .filter(word => word.length > 2 && !STOPWORDS.has(word));
  
  if (queryWords.length === 0) return 0;
  
  let score = 0;
  let exactMatches = 0;
  let partialMatches = 0;

  // Strong boost for exact/equality in title
  if (field === 'title') {
    if (normalizedTarget === normalizedQuery) {
      score += 200; // strongest
    } else if (normalizedTarget.includes(normalizedQuery)) {
      score += 120; // very strong
    }
  }
  
  // Check for exact/partial matches by word
  for (const queryWord of queryWords) {
    if (normalizedTarget.includes(queryWord)) {
      if (targetWords.includes(queryWord)) {
        exactMatches++;
        score += field === 'title' ? 12 : field === 'category' ? 8 : 5;
      } else {
        partialMatches++;
        score += field === 'title' ? 3 : field === 'category' ? 2 : 1;
      }
    }
  }
  
  // Bonus for starting with query
  if (normalizedTarget.startsWith(normalizedQuery)) {
    score += field === 'title' ? 25 : field === 'category' ? 15 : 10;
  }

  // Weighted by contiguous overlap length (n-gram approximation)
  const contiguousBonus = (() => {
    const q = normalizedQuery.split(' ').filter(w => w && !STOPWORDS.has(w));
    const t = normalizedTarget.split(' ').filter(w => w && !STOPWORDS.has(w));
    let maxRun = 0;
    for (let i = 0; i < t.length; i++) {
      let run = 0;
      for (let j = 0; j < q.length && i + j < t.length; j++) {
        if (t[i + j] === q[j]) run++; else break;
      }
      if (run > maxRun) maxRun = run;
    }
    return maxRun;
  })();
  if (contiguousBonus >= 2) {
    score += (field === 'title' ? 15 : 8) * contiguousBonus;
  }
  
  // Calculate match percentage
  const matchPercentage = (exactMatches + partialMatches * 0.5) / queryWords.length;
  score *= (1 + matchPercentage);
  
  return score;
};

// Improved search function dengan scoring yang lebih akurat
export const searchBPSData = (query: string): BPSDataItem[] => {
  if (!query || query.trim().length < 2) return [];
  
  const results: SearchResult[] = [];
  const normalizedQuery = normalizeText(query);

  // Fast-path: exact title match returns immediately at the top
  const exactMatches = bpsData.filter(item => normalizeText(item.title) === normalizedQuery);
  if (exactMatches.length > 0) {
    return [...exactMatches, ...bpsData.filter(it => !exactMatches.includes(it))];
  }
  
  for (const item of bpsData) {
    let maxScore = 0;
    let matchType: SearchResult['matchType'] = 'description';
    
    // Score untuk title match (prioritas tertinggi)
    const titleScore = calculateSimilarityScore(normalizedQuery, item.title, 'title');
    if (titleScore > maxScore) {
      maxScore = titleScore;
      matchType = normalizeText(item.title) === normalizedQuery || normalizeText(item.title).includes(normalizedQuery)
        ? 'exact_title'
        : 'partial_title';
    }
    
    // Score untuk category match (prioritas sedang)
    const categoryScore = calculateSimilarityScore(normalizedQuery, item.category, 'category');
    if (categoryScore > maxScore) {
      maxScore = categoryScore;
      matchType = 'category';
    }
    
    // Score untuk description match (prioritas rendah)
    const descScore = calculateSimilarityScore(normalizedQuery, item.description, 'description');
    if (descScore > maxScore) {
      maxScore = descScore;
      matchType = 'description';
    }
    
    if (maxScore > 1) {
      results.push({ item, score: maxScore, matchType });
    }
  }
  
  results.sort((a, b) => {
    const matchTypePriority = {
      'exact_title': 4,
      'partial_title': 3,
      'category': 2,
      'description': 1
    } as const;
    const priorityDiff = matchTypePriority[b.matchType] - matchTypePriority[a.matchType];
    if (priorityDiff !== 0) return priorityDiff;
    return b.score - a.score;
  });

  let ordered = results.map(r => r.item);

  // Enforcement: ensure at least one result whose title contains any non-stopword from query
  const queryTerms = normalizedQuery.split(' ').filter(w => w.length > 2 && !STOPWORDS.has(w));
  const titleContains = (it: BPSDataItem) => {
    const t = normalizeText(it.title);
    return queryTerms.some(qt => t.includes(qt));
  };

  const hasTermInTop = ordered.some(titleContains);
  if (!hasTermInTop && queryTerms.length > 0) {
    const fallback = bpsData.find(titleContains);
    if (fallback) {
      ordered = [fallback, ...ordered.filter(it => it !== fallback)];
    }
  }

  // Promote all items whose title contains any query term to the top block
  if (queryTerms.length > 0) {
    const preferred = ordered.filter(titleContains);
    const others = ordered.filter(it => !titleContains(it));
    ordered = [...preferred, ...others];
  }
  
  return ordered;
};

// Enhanced suggestions dengan scoring yang lebih baik
export const getSuggestions = (partialQuery: string): BPSDataItem[] => {
  if (partialQuery.length < 2) return [];
  
  const results = searchBPSData(partialQuery);
  return results.slice(0, 5); // Limit to 5 suggestions
};

// Fungsi khusus untuk mendeteksi keywords yang spesifik
export const detectSpecificKeywords = (query: string): BPSDataItem[] => {
  const normalizedQuery = normalizeText(query);
  const keywordMap: Record<string, number[]> = {
    'penduduk': [519], // Kependudukan dan Migrasi
    'populasi': [519],
    'demografi': [519],
    'migrasi': [519],
    'kerja': [520], // Tenaga Kerja
    'pengangguran': [520],
    'tenaga': [520],
    'angkatan': [520],
    'pendidikan': [521], // Pendidikan
    'sekolah': [521],
    'belajar': [521],
    'kesehatan': [522], // Kesehatan
    'medis': [522],
    'rumah sakit': [522],
    'penyakit': [522],
    'konsumsi': [523], // Konsumsi dan Pendapatan
    'pendapatan': [523],
    'ekonomi': [530, 531], // Ekonomi Makro & Neraca Ekonomi
    'makro': [530],
    'pdb': [531],
    'inflasi': [536], // Harga-Harga
    'harga': [536],
    'biaya': [537],
    'upah': [537],
    'pertanian': [557],
    'perikanan': [557],
    'kehutanan': [557],
    'energi': [558],
    'transportasi': [560],
    'pariwisata': [561],
    'bank': [562],
    'keuangan': [562],
    'lingkungan': [539],
    'kemiskinan': [563],
    'gender': [564],
  };
  
  const matchedIds = new Set<number>();
  
  for (const [keyword, ids] of Object.entries(keywordMap)) {
    if (normalizedQuery.includes(keyword)) {
      ids.forEach(id => matchedIds.add(id));
    }
  }
  
  return bpsData.filter(item => matchedIds.has(item.subject_id));
};
