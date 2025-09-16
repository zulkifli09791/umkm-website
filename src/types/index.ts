export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
  created_at?: string;
}

export interface Testimonial {
  id: string;
  customer_name: string;
  rating: number;
  message: string;
  created_at?: string;
}