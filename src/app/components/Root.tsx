import { Outlet, Link, useLocation } from 'react-router';
import { Activity, Menu, X, User } from 'lucide-react';
import { useState } from 'react';

export default function Root() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Results', path: '/results' },
    { name: 'Dataset Info', path: '/dataset-info' },
    { name: 'Research', path: '/research' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-2 rounded-lg group-hover:scale-105 transition-transform">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                MediPredict AI
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm transition-colors ${
                    isActive(item.path)
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/auth"
                className="ml-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-md hover:from-blue-700 hover:to-cyan-700 transition-all flex items-center space-x-1"
              >
                <User className="w-4 h-4" />
                <span>Sign In</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-blue-50"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-sm ${
                    isActive(item.path)
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:bg-blue-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/auth"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-md text-sm"
              >
                Sign In
              </Link>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-cyan-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Activity className="w-6 h-6" />
                </div>
                <span className="text-xl">MediPredict AI</span>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed">
                Advanced ML-based disease prediction system providing accurate risk assessments
                for early detection and prevention. Empowering healthcare professionals and
                researchers with cutting-edge AI technology.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-blue-100">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
                <li><Link to="/dataset-info" className="hover:text-white transition-colors">Dataset Info</Link></li>
                <li><Link to="/research" className="hover:text-white transition-colors">Research</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-blue-100">
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-sm text-blue-100">
            <p>&copy; 2026 MediPredict AI. All rights reserved. For research and educational purposes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
