import { useState } from 'react';
import Button from './ui/Button';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulasi subscribe (bisa diintegrasikan ke Supabase/email service)
    setTimeout(() => {
      if (email.includes('@')) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    }, 1000);
  };

  return (
    <div className="bg-emerald-50 p-8 rounded-xl">
      <h3 className="text-xl font-bold mb-4">Dapatkan Update Produk Terbaru</h3>
      <p className="text-gray-600 mb-4">Langganan newsletter kami dan jangan lewatkan promo spesial!</p>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Masukkan email Anda"
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          required
        />
        <Button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Mengirim...' : 'Berlangganan'}
        </Button>
      </form>

      {status === 'success' && (
        <p className="mt-3 text-emerald-600 font-medium">Berhasil! Cek email Anda.</p>
      )}
      {status === 'error' && (
        <p className="mt-3 text-red-600">Email tidak valid. Coba lagi.</p>
      )}
    </div>
  );
};

export default NewsletterForm;