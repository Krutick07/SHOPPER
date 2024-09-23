import React from 'react'
import './item.css';
import { Link } from 'react-router-dom';

export const I = (props) => {
  return (
    <div className='item'>
        <Link to={`/prodcut/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
        <p>{props.name}</p>
        <div className="item-price">
            <div className="itemprice-new">
                ${props.new_price}
            </div>
            <div className="itemprice-old">
                ${props.old_price}
            </div>
        </div>
    </div>
  )
}

export default I;