import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../lib/supabaseClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { customer_name, rating, message } = req.body;

  // Validasi sederhana
  if (!customer_name || !message || !rating || rating < 1 || rating > 5) {
    return res.status(400).json({ error: 'Data tidak valid' });
  }

  const { data, error } = await supabase
    .from('testimonials')
    .insert([
      {
        customer_name: customer_name.trim(),
        rating: parseInt(rating),
        message: message.trim(),
      },
    ])
    .select();

  if (error) {
    console.error('Supabase insert error:', error);
    return res.status(500).json({ error: 'Gagal menyimpan testimoni' });
  }

  return res.status(201).json({ message: 'Testimoni berhasil disimpan', data });
}