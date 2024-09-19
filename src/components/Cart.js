import React from 'react';

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountedPrice = totalPrice * 0.9;

  return (
    <div className="cart-page">
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <h3>{item.title}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: 
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
            {item.quantity}
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
          </p>
          <p>Total: ${item.price * item.quantity}</p>
          <button onClick={() => removeFromCart(item)}>Remove from Cart</button>
        </div>
      ))}
      <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
      <h3>Discounted Price: ${discountedPrice.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
