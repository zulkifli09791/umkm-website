import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { supabase } from '../lib/supabaseClient';
import { Product } from '../types';
import { generateWhatsAppMessage } from '../lib/whatsapp';
import SearchBar from '../components/ui/SearchBar';
import ProductCard from '../components/ProductCard';
import Card from '../components/ui/Card';

const Products: NextPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    let result = products;

    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (searchQuery) {
      result = result.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(result);
  }, [selectedCategory, searchQuery, products]);

  const fetchProducts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from<Product>('products')
      .select('*');

    if (!error && data) {
      setProducts(data);
      const cats = [...new Set(data.map(p => p.category))];
      setCategories(cats);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Katalog Produk</h1>

        {/* Search & Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <SearchBar 
            value={searchQuery} 
            onChange={setSearchQuery} 
            placeholder="Cari produk..." 
          />
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg transition ${
                selectedCategory === 'all'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Semua
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg transition ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="text-center py-12">Loading...</div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">Produk tidak ditemukan.</div>
        )}
      </div>
    </div>
  );
};

export default Products;