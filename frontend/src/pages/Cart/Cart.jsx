import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/StoreContext';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, gettotalcartAmount } = useContext(StoreContext);

  return (
    <div className='Cart'>
      <div className="cart-item">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₹{item.price * cartItems[item._id]}</p>
                  <p className='cross' onClick={() => removeFromCart(item._id)}> X </p> {/* Added remove functionality */}
                </div>
                <hr />
              </div>
            )
          }
          
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>
            
            Cart Total
          </h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
            <p>₹{gettotalcartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{ gettotalcartAmount() + 2 }</b>
            </div>
           
          </div>
          <div>
        <button className='cart-submit'>Checkout</button> {/* Added checkout functionality */}
        </div>
        </div>
     
       
      </div>
      <div className="cart-promocode">
        <div>
          <p>
            If you have a promo code, Enter it here
          </p>
          <div className='cart-promocode-input'>
            <input type="text" placeholder="Enter Promo Code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Cart;
