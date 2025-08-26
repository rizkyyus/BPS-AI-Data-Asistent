import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight, MessageSquare, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { bpsData, getCategories } from "@/data/bpsData";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  url?: string;
  relatedTopics?: string[];
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  // Generate FAQ from real BPS data
  const faqData: FAQItem[] = [
    {
      id: "1",
      question: "Bagaimana cara mencari data kependudukan dan migrasi Medan?",
      answer: "Anda bisa mengakses data lengkap tentang kependudukan dan migrasi melalui dataset resmi BPS. Data ini mencakup statistik populasi, demografis, struktur dan pertumbuhan populasi, proyeksi demografis, data keluarga dan rumah tangga, serta informasi migrasi di Kota Medan.",
      category: "Demografi",
      url: "https://medankota.bps.go.id/id/statistics-table?subject=519",
      relatedTopics: ["Kependudukan dan Migrasi"]
    },
    {
      id: "2", 
      question: "Dimana saya bisa mendapatkan data tenaga kerja dan pengangguran di Medan?",
      answer: "BPS Kota Medan menyediakan data komprehensif tentang tenaga kerja yang mencakup statistik angkatan kerja, pasar tenaga kerja, lapangan kerja dan pengangguran. Data ini juga membahas kondisi tenaga kerja, kesehatan dan keselamatan kerja, serta penciptaan lapangan kerja.",
      category: "Ketenagakerjaan",
      url: "https://medankota.bps.go.id/id/statistics-table?subject=520",
      relatedTopics: ["Tenaga Kerja"]
    },
    {
      id: "3",
      question: "Bagaimana cara mengakses data inflasi dan harga-harga di Medan?",
      answer: "Data inflasi dan harga-harga tersedia melalui dataset BPS yang mencakup semua aktivitas statistik harga, termasuk Indeks Harga Konsumen (CPI), inflasi, Indeks Harga Produsen (PPI), dan indeks harga untuk produk dan layanan tertentu di Kota Medan.",
      category: "Ekonomi",
      url: "https://medankota.bps.go.id/id/statistics-table?subject=536",
      relatedTopics: ["Harga-Harga"]
    },
    {
      id: "4",
      question: "Data pendidikan apa saja yang tersedia untuk Kota Medan?", 
      answer: "BPS menyediakan data pendidikan yang lengkap termasuk partisipasi pendidikan, tingkat buta huruf, informasi lembaga dan sistem pendidikan, sumber daya manusia dan keuangan yang diinvestasikan dalam pendidikan, pembelajaran seumur hidup, pelatihan kejuruan, dan penilaian kinerja siswa.",
      category: "Pendidikan",
      url: "https://medankota.bps.go.id/id/statistics-table?subject=521",
      relatedTopics: ["Pendidikan"]
    },
    {
      id: "5",
      question: "Bagaimana cara mendapatkan statistik ekonomi makro Medan?",
      answer: "Data statistik makroekonomi Kota Medan mencakup semua kegiatan ekonomi pada tingkat makro, database yang menggabungkan akun nasional dan indikator ekonomi makro, kecenderungan bisnis, pertumbuhan ekonomi, stabilitas dan penyesuaian struktural, serta analisis siklus bisnis.",
      category: "Ekonomi",
      url: "https://medankota.bps.go.id/id/statistics-table?subject=530",
      relatedTopics: ["Statistik Makroekonomi"]
    },
    {
      id: "6",
      question: "Data kesehatan apa yang tersedia dari BPS Medan?",
      answer: "BPS menyediakan statistik kesehatan dan kematian yang komprehensif, termasuk harapan hidup, status kesehatan, penentu kesehatan (gaya hidup, nutrisi), sumber daya dan pengeluaran kesehatan, sistem perawatan kesehatan, morbiditas dan mortalitas, serta data tenaga kesehatan di Kota Medan.",
      category: "Kesehatan",
      url: "https://medankota.bps.go.id/id/statistics-table?subject=522",
      relatedTopics: ["Kesehatan"]
    },
    {
      id: "7",
      question: "Bagaimana cara menggunakan AI Data Assistant?",
      answer: "AI Data Assistant sangat mudah digunakan! Cukup ketik pertanyaan Anda tentang statistik Medan, misalnya 'data penduduk Medan' atau 'inflasi 2024'. AI akan mencari dalam database BPS dan memberikan jawaban dengan link langsung ke sumber data resmi. Anda juga bisa melihat saran dataset saat mengetik.",
      category: "Penggunaan",
      relatedTopics: ["AI Assistant", "Tutorial"]
    },
    {
      id: "8",
      question: "Berapa banyak dataset yang tersedia di sistem ini?",
      answer: `Sistem AI Data Assistant terhubung dengan ${bpsData.length} dataset resmi dari BPS Kota Medan yang terbagi dalam ${getCategories().length} kategori utama: Statistik Demografi dan Sosial, Statistik Ekonomi, dan Statistik Lingkungan Hidup dan Multi-domain. Semua data diupdate secara berkala sesuai dengan portal resmi BPS.`,
      category: "Penggunaan",
      relatedTopics: ["Database", "BPS Data"]
    },
    {
      id: "9",
      question: "Apakah data yang diberikan akurat dan terpercaya?",
      answer: "Ya, semua data 100% bersumber dari portal resmi Badan Pusat Statistik (BPS) Kota Medan dan diperbarui secara berkala. AI Assistant hanya mengarahkan Anda ke sumber data resmi tanpa memodifikasi informasi. Untuk keperluan resmi, selalu rujuk langsung ke portal BPS yang tercantum di setiap respons.",
      category: "Akurasi",
      relatedTopics: ["Keandalan Data", "Sumber Resmi"]
    }
  ];

  const categories = [...new Set(faqData.map(item => item.category))];

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const askQuestion = (question: string) => {
    return `/ai-assistant?q=${encodeURIComponent(question)}`;
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Temukan jawaban untuk pertanyaan yang sering ditanyakan tentang AI Data Assistant dan database BPS Kota Medan
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-bps-secondary mb-2">{bpsData.length}</div>
                <div className="text-gray-600">Dataset Tersedia</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-bps-secondary mb-2">{getCategories().length}</div>
                <div className="text-gray-600">Kategori Utama</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-bps-secondary mb-2">100%</div>
                <div className="text-gray-600">Data Resmi BPS</div>
              </CardContent>
            </Card>
          </div>

          {/* Categories */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <span
                  key={category}
                  className="px-3 py-1 bg-bps-gray text-bps-secondary rounded-full text-sm font-medium"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4 mb-12">
            {faqData.map((item) => (
              <Card key={item.id} className="border border-gray-200">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-xs font-medium text-bps-secondary bg-bps-gray px-2 py-1 rounded">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.question}
                      </h3>
                    </div>
                    {openItems.includes(item.id) ? (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  
                  {openItems.includes(item.id) && (
                    <div className="px-6 pb-6 border-t border-gray-100">
                      <p className="text-gray-700 mt-4 leading-relaxed">
                        {item.answer}
                      </p>
                      
                      {/* Related Topics */}
                      {item.relatedTopics && (
                        <div className="mt-3">
                          <p className="text-sm font-medium text-gray-700 mb-2">Topik Terkait:</p>
                          <div className="flex flex-wrap gap-2">
                            {item.relatedTopics.map((topic, index) => (
                              <span 
                                key={index}
                                className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Action Buttons */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Link to={askQuestion(item.question)}>
                          <Button variant="outline" size="sm" className="text-bps-secondary border-bps-secondary hover:bg-bps-gray">
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Tanyakan ke AI Assistant
                          </Button>
                        </Link>
                        
                        {item.url && (
                          <a href={item.url} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm" className="text-green-600 border-green-600 hover:bg-green-50">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Akses Data Langsung
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Access to Popular Topics */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Akses Cepat Dataset Populer
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {bpsData.slice(0, 6).map((data, index) => (
                  <a
                    key={index}
                    href={data.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 border border-gray-200 rounded-lg hover:border-bps-secondary hover:shadow-md transition-all"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">{data.title}</h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{data.description.substring(0, 100)}...</p>
                    <div className="flex items-center text-bps-secondary text-sm">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Akses Dataset
                    </div>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="bg-bps-primary text-white border-0">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Siap Menjelajahi Data BPS Kota Medan?
              </h2>
              <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
                AI Data Assistant terhubung dengan {bpsData.length} dataset resmi BPS. Temukan informasi statistik yang Anda butuhkan dengan mudah dan cepat!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/ai-assistant">
                  <Button variant="secondary" size="lg" className="bg-white text-bps-secondary hover:bg-gray-100">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Mulai Bertanya ke AI
                  </Button>
                </Link>
                <a href="https://medankota.bps.go.id/id" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-bps-secondary">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Portal Resmi BPS
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
