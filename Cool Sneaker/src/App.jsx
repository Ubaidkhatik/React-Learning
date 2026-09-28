


import React, { useState } from 'react';
function App() {
  const product = {
    name: 'Cool Sneakers',
    price: 79.99,
    image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/394371/02/sv01/fnd/IND/fmt/png/Smashic-Comfort-Casual-Sneakers',
    description: 'These sneakers are stylish and comfortable.',
    review: 'Very good product!',
  };

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    alert(`Added ${quantity} ${product.name}(s) to cart`);
  };

  return (
    <div style={{ maxWidth: 400, margin: '20px auto', fontFamily: 'Arial' }}>
      <h2>{product.name}</h2>
      <img src={product.image} alt="Product" style={{ width: '100%' }} />
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>

      <label>
        Quantity:
        <input
          type="number"
          value={quantity}
          min={1}
          onChange={e => setQuantity(Number(e.target.value))}
        />
      </label>

      <button onClick={handleAddToCart}>Add to Cart</button>

      <h3>Review:</h3>
      <p>{product.review}</p>
    </div>
  );
}

export default App;