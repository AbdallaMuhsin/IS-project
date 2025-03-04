import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const {cartItems,food_list,removeFromCart,getTotalCartAmount} = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Revoke</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
            if(cartItems[item._id]>0)
            {
              return (
                <div>
                  <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>Tsh {item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>Tsh {item.price*cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
                </div>
              )
            }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Tsh {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Tsh {getTotalCartAmount()===0?0:1000}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>Tsh {getTotalCartAmount()===0?0:getTotalCartAmount()+1000}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have promo code, Enter here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='promo code'/>
              <button>submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
