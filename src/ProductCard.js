import React from 'react';
import { useCart } from './CartContext';

const ProductCard = ({ image, name, price }) => {
  const { addToCart } = useCart();

  const handleClick = () => {
    addToCart({ image, name, price });
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={handleClick}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
