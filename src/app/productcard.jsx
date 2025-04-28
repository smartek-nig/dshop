import { Heart, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function productcard({product, addtocart, addtofavorite}) {
    <div className='product-card border-gray-500 rounded p-4 shadow-neutral-200 hover:shadow-lg transition duration-300 bg-white'>
        <Link href={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} width={400} height={400}
        loading='lazy'
        className='w-full h-80 object-cover rounded zoom-out-image cursor-pointer mb-3 hover:scale-100 transition-transform duration-300'/>
        </Link>

        <h2 className='text-lg font-bold text-black mb-2'>{product.title}</h2>
        <p className='text-yellow-300'>{product.description[0]}</p>
        <p className='text-blue-300 font-semibold mt-2'>{product.price}</p>
        <p className='text-blue-100 mt-2'>&#9733; &#9733; &#9733; &#9734; {product.rating}</p>

        <div>
          <button onClick={() => addtocart(product.id)} className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer transition duration-300'>
            <ShoppingCart className='mr-2'/>
          </button>

          <button onClick={() => addtofavorite(product)} className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer transition duration-300'>
            <Heart className='mr-2'/>
          </button>
        </div>

        <Link href={`/product/${product.id}`} className='text-blue-400 hover:underline mt-2 block'>
        view more
        </Link>

    </div>
}
 