import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "AI Assistant", href: "/ai-assistant" },
    { name: "FAQ", href: "/faq" },
    { name: "Tentang", href: "/tentang" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-bps-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">BPS</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-bps-secondary">BPS Kota Medan</h1>
                <p className="text-sm text-gray-600">AI Data Assistant</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-bps-secondary bg-bps-gray"
                      : "text-gray-700 hover:text-bps-secondary hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive(item.href)
                        ? "text-bps-secondary bg-bps-gray"
                        : "text-gray-700 hover:text-bps-secondary hover:bg-gray-100"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-bps-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-bps-secondary font-bold">BPS</span>
                </div>
                <span className="font-bold text-lg">BPS Kota Medan</span>
              </div>
              <p className="text-blue-200">
                Badan Pusat Statistik Kota Medan menyediakan data statistik resmi untuk pembangunan daerah.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Layanan</h3>
              <ul className="space-y-2 text-blue-200">
                <li><Link to="/ai-assistant" className="hover:text-white transition-colors">AI Data Assistant</Link></li>
                <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><a href="https://medankota.bps.go.id/id" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Portal Resmi BPS</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Kontak</h3>
              <div className="text-blue-200 space-y-1">
                <p>Jl. Asrama No. 179, Medan</p>
                <p>Sumatera Utara 20123</p>
                <p>Telp: (061) 4567890</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-800 text-center text-blue-200">
            <p>&copy; 2024 BPS Kota Medan. Semua hak cipta dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
