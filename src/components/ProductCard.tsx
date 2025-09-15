import React from 'react';
import { Product } from '../types';
import { generateWhatsAppMessage } from '../lib/whatsapp';
import Image from 'next/image';
import Card from './ui/Card';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const whatsappLink = generateWhatsAppMessage(product.name, product.price);

  return (
    <Card>
      <div className="relative overflow-hidden rounded-lg mb-4">
        <Image
          src={product.image_url}
          alt={product.name}
          width={400}
          height={300}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="font-bold text-lg mb-2">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
      <p className="text-emerald-600 font-bold text-xl mb-4">Rp{product.price.toLocaleString('id-ID')}</p>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition font-medium"
      >
        Pesan via WhatsApp
      </a>
    </Card>
  );
};

export default ProductCard;