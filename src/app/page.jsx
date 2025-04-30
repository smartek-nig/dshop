'use client';

import React, { useState } from 'react';
import products from '@/app/component/data/product';
import ProductCard from './productcard';
import Footer from './component/Footer';
import styles from './component/dshop.module.css'


export default function Page() {
  

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.title} added to cart`);
  };

  const addToFavorites = (product) => {
  }

  return (
    <div className={styles.div}>
      <div className={styles.hero}>
        <select onChange={(e) => setCategory(e.target.value)}
          className='p-2 border border-gray-300 rounded flex items-right'>
            <option value="All" className='text-white'>All category</option>
            <option value="Fasion" className='text-black'>Fashion</option>
            <option value="Electronics" className='text-black'>Electronics</option>
            <option value="Product" className='text-black'>Product</option>
            <option value="Books" className='text-black'>Books</option>
            <option value="Sports" className='text-black'>Sports</option>
            <option value="Beauty" className='text-black'>Beauty</option>

        </select>

        <search/>
        <div className={styles.content}>
          <aside>
            <h1 className='text-2xl font-bold capitalize'>dshop store</h1>
            <p className='text-lg font-bold capitalize'>your No 1 online store for luxury</p>
            <p className='text-lg font-extrabold text-red-400 shadow-md mt-2 uppercase'></p>

            <button type='submit' className='bg-red-800 text-white p-8 rounded-md my-8 hover:animate-pulse '>20% OFF first Order</button>
          </aside>

        </div>
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'></section>

        <Footer />

      </div>

    </div>
  )
}