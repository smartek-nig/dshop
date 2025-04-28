'use client';
import { useContext } from 'react';
import { ProductContext } from './productcontext';
import Productcard from './productcard';

function HomePage() {
  const { product, loading, error } = useContext(ProductContext);

  if (loading) {
    return <div>Loading product...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="homepage">
      <h1>Our Products</h1>
      
      
      <div className="product-grid">
        {product.map(product => (
          <Productcard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;