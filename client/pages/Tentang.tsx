import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Shield, Target, Users, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

export default function Tentang() {
  const features = [
    {
      icon: <Target className="h-8 w-8 text-bps-secondary" />,
      title: "Tujuan",
      description: "Memudahkan akses data statistik resmi BPS Kota Medan melalui teknologi AI yang interaktif dan mudah digunakan."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-bps-secondary" />,
      title: "Data Akurat", 
      description: "Semua informasi bersumber langsung dari portal resmi Badan Pusat Statistik dan diperbarui secara berkala."
    },
    {
      icon: <Users className="h-8 w-8 text-bps-secondary" />,
      title: "Mudah Digunakan",
      description: "Interface yang ramah pengguna memungkinkan siapa saja untuk mendapatkan informasi statistik dengan cepat."
    },
    {
      icon: <Shield className="h-8 w-8 text-bps-secondary" />,
      title: "Terpercaya",
      description: "Platform yang dikembangkan dengan standar keamanan tinggi dan transparansi sumber data."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-bps-gray via-white to-blue-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Tentang AI Data Assistant
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi modern untuk mengakses data statistik Kota Medan dengan bantuan teknologi Artificial Intelligence
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Latar Belakang */}
            <Card className="mb-12">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Latar Belakang</h2>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    Badan Pusat Statistik (BPS) Kota Medan menyediakan data resmi terkait sosial, ekonomi, 
                    demografi, dan pembangunan. Namun, data sering kali tersebar dan sulit diakses dengan cepat. 
                    Pegawai BPS membutuhkan akses yang lebih ringkas, sementara masyarakat umum ingin cara sederhana 
                    untuk menemukan informasi yang mereka butuhkan.
                  </p>
                  <p className="mb-4">
                    Website AI Data Assistant hadir sebagai solusi inovatif. Dengan basis teknologi AI dan 
                    data scraping, pengguna cukup menanyakan sesuatu seperti <em>"Data inflasi di Kota Medan tahun 2024"</em>, 
                    maka AI akan memberikan jawaban ringkas beserta tautan ke sumber resmi BPS.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {features.map((feature, index) => (
                <Card key={index} className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* How It Works */}
            <Card className="mb-12">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Cara Kerja</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-bps-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      1
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Ajukan Pertanyaan</h3>
                    <p className="text-sm text-gray-600">Ketik pertanyaan tentang data statistik Medan</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-bps-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      2
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">AI Memproses</h3>
                    <p className="text-sm text-gray-600">AI mencari dan menganalisis data dari sumber BPS</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-bps-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      3
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Dapatkan Jawaban</h3>
                    <p className="text-sm text-gray-600">Terima jawaban ringkas dan akurat</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-bps-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      4
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Akses Sumber</h3>
                    <p className="text-sm text-gray-600">Klik tautan untuk data detail di portal BPS</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Disclaimer */}
            <Card className="bg-yellow-50 border-yellow-200 mb-12">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="h-6 w-6 text-yellow-600 mr-2" />
                  Disclaimer
                </h2>
                <div className="text-gray-700">
                  <p className="mb-4">
                    <strong>Penting untuk diketahui:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Semua data yang disajikan bersumber dari scraping portal resmi BPS Kota Medan</li>
                    <li>Untuk keperluan resmi dan data detail terbaru, silakan merujuk langsung ke <a href="https://medankota.bps.go.id/id" target="_blank" rel="noopener noreferrer" className="text-bps-secondary hover:underline">portal resmi BPS</a></li>
                    <li>AI Assistant memberikan ringkasan berdasarkan data yang tersedia, namun interpretasi dapat bervariasi</li>
                    <li>Website ini dikembangkan untuk memudahkan akses informasi, bukan sebagai pengganti sumber resmi</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Technology */}
            <Card className="mb-12">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Teknologi yang Digunakan</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Frontend</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• React.js dengan TypeScript</li>
                      <li>• Tailwind CSS untuk styling</li>
                      <li>• Responsive design untuk semua perangkat</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Backend & AI</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• AI processing untuk analisis query</li>
                      <li>• Data scraping dari portal BPS</li>
                      <li>• API terintegrasi untuk real-time data</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-bps-secondary text-white border-0">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">
                  Siap Menggunakan AI Data Assistant?
                </h2>
                <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
                  Mulai eksplorasi data statistik Kota Medan dengan cara yang lebih mudah dan cepat
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/ai-assistant">
                    <Button variant="secondary" size="lg" className="bg-white text-bps-secondary hover:bg-gray-100">
                      Mulai Bertanya
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
        </section>
      </div>
    </Layout>
  );
}
