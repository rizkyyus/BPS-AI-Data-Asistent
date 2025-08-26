import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-bps-primary mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Halaman Tidak Ditemukan
            </h2>
            <p className="text-gray-600 mb-8">
              Maaf, halaman yang Anda cari tidak dapat ditemukan. 
              Silakan kembali ke halaman utama atau gunakan navigasi di atas.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="bg-bps-primary hover:bg-bps-secondary">
                <Home className="h-4 w-4 mr-2" />
                Kembali ke Beranda
              </Button>
            </Link>
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
              className="border-bps-secondary text-bps-secondary hover:bg-bps-gray"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Halaman Sebelumnya
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
