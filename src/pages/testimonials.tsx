import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { supabase } from '../lib/supabaseClient';
import { Testimonial } from '../types';
import TestimonialCard from '../components/TestimonialCard';
import TestimonialForm from '../components/TestimonialForm';
import Card from '../components/ui/Card';

const Testimonials: NextPage = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTestimonials = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from<'testimonials', Testimonial>('testimonials')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setTestimonials(data);
    }
    setLoading(false);
  };

  // Fetch saat pertama kali load
  useEffect(() => {
    fetchTestimonials();
  }, []);

  // Callback setelah testimoni baru dikirim
  const handleTestimonialSubmitted = () => {
    fetchTestimonials(); // Refresh daftar
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Testimoni Pelanggan</h1>
        <p className="text-gray-600 text-center mb-12">Apa kata pelanggan kami? Beri tahu pengalaman Anda juga!</p>

        {/* Form Testimoni */}
        <div className="mb-12">
          <TestimonialForm onSubmitted={handleTestimonialSubmitted} />
        </div>

        {/* Daftar Testimoni */}
        {loading ? (
          <div className="text-center py-12">Loading...</div>
        ) : testimonials.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testi) => (
              <TestimonialCard key={testi.id} testimonial={testi} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">Belum ada testimoni.</div>
        )}
      </div>
    </div>
  );
};

export default Testimonials;