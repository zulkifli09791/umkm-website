'use client'; // Penting karena pakai state & event handler

import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import Button from './ui/Button';

interface TestimonialFormProps {
  onSubmitted: () => void; // Callback setelah sukses submit
}

const TestimonialForm = ({ onSubmitted }: TestimonialFormProps) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setError('Nama dan pesan wajib diisi.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    const { error: insertError } = await supabase
      .from('testimonials')
      .insert([
        {
          customer_name: name.trim(),
          rating: rating,
          message: message.trim(),
        },
      ]);

    if (insertError) {
      console.error('Error inserting testimonial:', insertError);
      setError('Gagal mengirim testimoni. Coba lagi nanti.');
    } else {
      setSuccess(true);
      onSubmitted(); // Refresh daftar testimoni
      // Reset form
      setName('');
      setRating(5);
      setMessage('');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-bold mb-4">Beri Testimoni Anda</h3>
      {success ? (
        <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-4">
          Terima kasih! Testimoni Anda telah dikirim dan akan segera ditampilkan.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <div className="bg-red-50 text-red-700 p-3 rounded">{error}</div>}

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nama Anda *
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rating *
            </label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={`text-2xl ${
                    star <= rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  aria-label={`Beri rating ${star} bintang`}
                >
                  ★
                </button>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-1">Anda memberi: {rating} dari 5 bintang</p>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Pesan Testimoni *
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              required
            />
          </div>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Mengirim...' : 'Kirim Testimoni'}
          </Button>
        </form>
      )}
    </div>
  );
};

export default TestimonialForm;