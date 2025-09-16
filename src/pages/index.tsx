import type { GetStaticProps, NextPage } from 'next';
import { supabase } from '../lib/supabaseClient';
import { Product } from '../types';
import Hero from '../components/Hero';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Image from 'next/image';

interface HomePageProps {
  featuredProducts: Product[];
}

const Home: NextPage<HomePageProps> = ({ featuredProducts }) => {
  return (
    <div className="min-h-screen">
      <Hero />

      {/* Deskripsi Singkat */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Tentang Kami</h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kami adalah UMKM lokal yang berkomitmen menyediakan produk berkualitas tinggi dengan harga terjangkau. 
            Setiap produk dibuat dengan penuh cinta dan perhatian untuk kepuasan Anda.
          </p>
        </div>

        {/* Profil Usaha */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-600 text-2xl">🏆</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Kualitas Premium</h3>
              <p className="text-gray-600 text-sm">Bahan terbaik, proses teliti, hasil memuaskan.</p>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-600 text-2xl">🚚</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Pengiriman Cepat</h3>
              <p className="text-gray-600 text-sm">Dikirim dalam 1x24 jam setelah konfirmasi pesanan.</p>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-600 text-2xl">💬</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Layanan Ramah</h3>
              <p className="text-gray-600 text-sm">Tim kami siap membantu Anda kapan saja.</p>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Siap memulai?</h3>
          <p className="text-gray-600 mb-6">Jelajahi katalog produk kami sekarang!</p>
          <Button onClick={() => window.location.href = '/products'}>
            Lihat Produk
          </Button>
        </div>
      </section>

      {/* Produk Unggulan */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Produk Unggulan</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <Image 
                  src={product.image_url} 
                  alt={product.name} 
                  width={400} 
                  height={300} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                  <p className="text-emerald-600 font-semibold mb-3">Rp{product.price.toLocaleString('id-ID')}</p>
                  <a 
                    href={`https://wa.me/6282196809592?text=${encodeURIComponent(`Halo, saya tertarik dengan ${product.name} - Rp${product.price.toLocaleString('id-ID')}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
                  >
                    Pesan via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data: featuredProducts } = await supabase
    .from<'products', Product>('products')
    .select('*')
    .limit(3);

  return {
    props: {
      featuredProducts: featuredProducts || [],
    },
    revalidate: 60,
  };
};

export default Home;