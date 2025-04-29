'use client';

import React, { useState } from 'react';
import products from '@/app/component/data/product';
import ProductCard from './productcard';

export default function Page() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.title} added to cart`);
  };

  const addToFavorites = (product) => {
    setFavorites([...favorites, product]);
    alert(`${product.title} added to favorites`);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (category === 'all' || product.category === category)
  );

  const limitedProducts = filteredProducts.slice(0, 10);

  return (
    <main className="min-h-screen bg-amber-200 p-5">
      <div className="min-h-screen">
        <section className="text-center mt-8">
          <h1 className="text-2xl font-bold capitalize">Your No. 1 shopping store for everything</h1>
          <p className="text-gray-500 font-extrabold">Find the best products for you</p>
        </section>

        <section className="mb-6">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full mb-4"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full mb-4"
          >
            <option value="all">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="books">Books</option>
            <option value="foods">Foods</option>
            <option value="clothing">Clothing</option>
          </select>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {limitedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              addToFavorites={addToFavorites}
            />
          ))}
        </section>
      </div>

      <footer className="text-center mt-8 py-4 text-white bg-gray-800">
        <p>&copy; {new Date().getFullYear()} DShop Store. All rights reserved.</p>
      </footer>
    </main>
  );
}
