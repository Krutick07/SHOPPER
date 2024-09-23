import React, { useContext } from 'react'
import './css/ShopCategory.css'
import { ShopContext } from '../contexts/ShopContext'
import dropdown from '../componnents/Assets/dropdown.png'
import { I } from '../componnents/items/I.jsx'
import All_product from '../componnents/Assets/All_product.js'

export const ShopCategory = (props) => {
  const { All_product } = useContext(ShopContext);

  return (
    <div className='shopcategory'>
      <img src={props.banner} alt="" />
      {/*<div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span>out of {All_product.length} products
          <div className="shopcategory-sort">
            Sort by <img className='shopbanner' src={dropdown} alt="" />
          </div>
        </p>
      </div>*/}
      <div className="shopcategory-products">
        {All_product.map((item,i)=>{
          if(props.category===item.category){
            return <I key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More 
      </div>
    </div>
  )
}