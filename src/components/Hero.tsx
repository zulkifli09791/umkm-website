import Image from 'next/image';
import Button from '../components/ui/Button';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 to-white py-20 md:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-emerald-100 rounded-full opacity-30"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-emerald-200 rounded-full opacity-20"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Produk Berkualitas untuk <span className="text-emerald-600">Kehidupan Sehari-hari</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Temukan berbagai produk buatan lokal yang dirancang dengan cinta, kualitas tinggi, dan harga terjangkau. Dukung UMKM Indonesia!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => window.location.href = '/products'}>
                Jelajahi Produk
              </Button>
              <Button variant="outline" onClick={() => window.location.href = '/testimonials'}>
                Lihat Testimoni
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white p-4 rounded-2xl shadow-xl">
              <Image
                src="/images/utamaumkm.jpg"
                alt="Produk UMKM Unggulan"
                width={600}
                height={400}
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg flex items-center space-x-3">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-emerald-600">⭐</span>
              </div>
              <div>
                <p className="text-sm font-medium">4.9/5.0</p>
                <p className="text-xs text-gray-500">dari 500+ ulasan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;