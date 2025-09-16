import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-emerald-600">UMKMku</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-emerald-600 font-medium transition">Beranda</Link>
            <Link href="/products" className="text-gray-700 hover:text-emerald-600 font-medium transition">Produk</Link>
            <Link href="/testimonials" className="text-gray-700 hover:text-emerald-600 font-medium transition">Testimoni</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-emerald-600 font-medium transition" onClick={() => setIsMenuOpen(false)}>Beranda</Link>
              <Link href="/products" className="text-gray-700 hover:text-emerald-600 font-medium transition" onClick={() => setIsMenuOpen(false)}>Produk</Link>
              <Link href="/testimonials" className="text-gray-700 hover:text-emerald-600 font-medium transition" onClick={() => setIsMenuOpen(false)}>Testimoni</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;