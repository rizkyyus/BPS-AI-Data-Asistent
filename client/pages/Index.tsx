import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BarChart3, Search, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

export default function Index() {
  const features = [
    {
      icon: <Search className="h-8 w-8 text-bps-primary" />,
      title: "Pencarian Cepat",
      description: "Temukan data statistik yang Anda butuhkan dengan pertanyaan sederhana menggunakan AI assistant."
    },
    {
      icon: <Shield className="h-8 w-8 text-bps-primary" />,
      title: "Sumber Resmi BPS",
      description: "Semua data bersumber dari portal resmi Badan Pusat Statistik untuk menjamin akurasi informasi."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-bps-primary" />,
      title: "Data Terkini",
      description: "Akses data statistik terbaru tentang sosial, ekonomi, demografi, dan pembangunan Kota Medan."
    },
    {
      icon: <Clock className="h-8 w-8 text-bps-primary" />,
      title: "Respon Instan",
      description: "Dapatkan jawaban ringkas disertai tautan ke sumber data resmi dalam hitungan detik."
    }
  ];

  const popularQuestions = [
    "Data inflasi di Kota Medan tahun 2024",
    "Jumlah penduduk Kota Medan tahun 2023",
    "Tingkat pengangguran Medan 2024",
    "Tren pertumbuhan ekonomi Sumatera Utara"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-bps-gray via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-bps-primary">AI Data Assistant</span>
              <br />
              BPS Kota Medan
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Temukan data statistik lebih cepat dan akurat dengan bantuan AI. 
              Cukup tanyakan apa yang Anda butuhkan!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/ai-assistant">
                <Button size="lg" className="bg-bps-secondary hover:bg-bps-button-hover text-white px-8 py-3 text-lg">
                  Mulai Bertanya
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="https://medankota.bps.go.id/id" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="border-bps-secondary text-bps-secondary hover:bg-bps-gray px-8 py-3 text-lg">
                  Portal Resmi BPS
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Menggunakan AI Data Assistant?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Platform yang dirancang untuk memudahkan akses data statistik resmi BPS Kota Medan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-20 bg-bps-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Contoh Pertanyaan Populer
            </h2>
            <p className="text-lg text-gray-600">
              Klik salah satu pertanyaan di bawah untuk langsung mencoba AI Assistant
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {popularQuestions.map((question, index) => (
              <Link key={index} to={`/ai-assistant?q=${encodeURIComponent(question)}`}>
                <Card className="hover:shadow-md transition-shadow duration-300 cursor-pointer border-gray-200 hover:border-bps-primary">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-gray-700 font-medium">"{question}"</p>
                      <ArrowRight className="h-4 w-4 text-bps-primary ml-2 flex-shrink-0" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/ai-assistant">
              <Button size="lg" className="bg-bps-secondary hover:bg-bps-button-hover text-white px-8 py-3">
                Mulai Bertanya Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-bps-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Siap Mencari Data Statistik?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Gunakan AI Assistant untuk mendapatkan informasi statistik Kota Medan secara cepat dan akurat
          </p>
          <Link to="/ai-assistant">
            <Button size="lg" variant="secondary" className="bg-white text-bps-secondary hover:bg-gray-100 px-8 py-3 text-lg">
              Mulai Sekarang
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
