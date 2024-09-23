import React, { useContext } from 'react'
import './ProductDisplay.css'
import star from '../Assets/star-.png'
import star_blank from '../Assets/star-blank.png'
import { useOutletContext } from 'react-router-dom'
import { ShopCategory } from '../../pages/ShopCategory'
import { ShopContext } from '../../contexts/ShopContext'

export const ProductDisplay = (props) => {
    const {product} = props;
    const {addtocart} = useContext(ShopContext);

  return (
    <div className='productdisplay'>
        <div className="diplay-left">
            <div className="display-img-list">
                <img src={product.image} />
                <img src={product.image} />
                <img src={product.image} />
                <img src={product.image} />
            </div>
            <div className="display-img">
                <img className='productdisplay-main-img' src={product.image}/>
            </div>
        </div>
        <div className="display-right">
            <h1>{product.name}</h1>
            <div className="display-right-star">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star_blank} alt="" />
                <p>(122)</p>
            </div>
            <div className="right-price">
                <div className="right-price-old">
                    ${product.old_price}
                </div>
                <div className="right-price-new">
                ${product.new_price}
                </div>
            </div>
            <div className="display-right-description">
                Upgrade your wardrobe with our Classic Cotton Crewneck T-Shirt, a must-have staple for any closet. This t-shirt is crafted from premium, 100% breathable cotton, ensuring all-day comfort and durability. Its timeless design features a relaxed fit and a soft, smooth texture that feels great against your skin.
            </div>
            <div className="display-right-size">
                <h1>Select Size</h1>
                <div className="display-right-size">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXl</div>
                </div>
                <button onClick={()=> {addtocart(product.id)}}>ADD TO CART</button>
                <p className="display-right-category">
                    <span>Category :</span>Women, T-shirt, Crop-Top
                </p>
                <p className="display-right-category">
                    <span>Tags :</span>Modern, Latest
                </p>
            </div>
        </div>
    </div>
  )
}
