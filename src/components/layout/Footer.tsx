import Link from 'next/link';
import SocialMedia from '../SocialMedia';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">UMKMku</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              UMKM lokal yang menyediakan produk berkualitas dengan harga terjangkau dan pelayanan ramah.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-white transition">Beranda</Link></li>
              <li><Link href="/products" className="hover:text-white transition">Produk</Link></li>
              <li><Link href="/testimonials" className="hover:text-white transition">Testimoni</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <address className="text-gray-400 text-sm not-italic leading-relaxed">
              Jl. Contoh No. 123<br />
              Kota Contoh, Indonesia<br />
              📞 +62 812-3456-7890<br />
              ✉️ hello@umkmku.id
            </address>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Dapatkan promo dan update produk terbaru!</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email Anda"
                className="px-4 py-2 text-sm text-gray-800 rounded-l-lg focus:outline-none w-full"
                required
              />
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-r-lg transition"
              >
                →
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <SocialMedia />
          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            © {new Date().getFullYear()} UMKMku. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;