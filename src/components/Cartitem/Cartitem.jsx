import React, { useContext } from 'react'
import './Cartitem.css'
import { ShopContext } from '../../contexts/ShopContext'
import remove from '../Assets/remove.png'

export const Cartitem = () => {
    const {gettotalcartamount,All_product,cartitems,removefromcart} = useContext(ShopContext);

  return (
    <div className='Cartitem'>
        <div className="cartitem-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        
        {All_product.map((e)=>{
        if (cartitems[e.id]>0) {
            return <div>
                        <div className="cartitem-format cartitem-format-main">
                            <img className='carticon-product' src={e.image} alt="" />
                            <p>{e.name}</p>
                            <p>{e.new_price}</p>
                            <button className='cartitem-quantity'>{cartitems[e.id]}</button>
                            <p>${e.new_price*cartitems[e.id]}</p>
                            <img className='remove-icon' src={remove} onClick={()=>{removefromcart(e.id)}} alt="" />
                        </div>
                        <hr />
                    </div>
            }

            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitem-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="total-item">
                        <p>Subtotal</p>
                        <p>${gettotalcartamount()}</p>
                    </div>
                    <hr />
                    <div className="total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="total-item">
                        <h3>Total</h3>
                        <h3>${gettotalcartamount()}</h3>
                        <button>PROCEED TO CHECKOUT</button>
                    </div>
                    <div className="cartitem-promocode">
                        <p>If you have a promo code, Enter it here</p>
                        <div className='promobox'>
                            <input type="text"  placeholder='promocode'/>
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
