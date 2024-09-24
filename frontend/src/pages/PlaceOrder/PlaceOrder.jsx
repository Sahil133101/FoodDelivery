import React, { useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../Context/StoreContext';

const PlaceOrder = () => {

  const {gettotalcartAmount} = useContext(StoreContext);
  return (
    <form className='place-order'>
      <div className="left">
        <p className='title'>Delivery Information</p>
        <div className="multi-field">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email Address' />
        <input type="text" placeholder='Street' />
        <div className="multi-field">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-field">
          <input type="text" placeholder='Pin code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder="Phone number" />
      </div>

      <div className="right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{gettotalcartAmount()}</p>
            </div>
            <hr  className='Divider' />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{gettotalcartAmount()===0 ? 0 :40}</p>
            </div>
            <hr   className='Divider'/>
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{gettotalcartAmount() ===0 ?0 :gettotalcartAmount()+40}</b>
            </div>
          </div>
          <div>
            <button >PROCEED TO PAYMENT</button> {/* Added checkout functionality */}
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
