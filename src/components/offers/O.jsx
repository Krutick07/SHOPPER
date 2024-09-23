import React from 'react'
import './offers.css'
import img from '../Assets/exlcusive-image.png';

export const O = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check now</button>
        </div>
        <div className="offers-right">
            <img src={img} alt="" />
        </div>
    </div>
  )
}
