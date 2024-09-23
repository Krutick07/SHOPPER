import React from 'react';
import './populer.css';
import data_product from '../Assets/data.js';
import { I } from '../items/I.jsx';

export const Populer = () => {
  return (
    <div className='populer'>
        <h1>POPULER IN WOMEN</h1>
        <hr/>
        <div className="populer-item">
            {data_product.map((product, i) => (
                <I 
                    key={i} 
                    id={product.id} 
                    name={product.name} 
                    image={product.image} 
                    new_price={product.new_price} 
                    old_price={product.old_price} 
                />
            ))}
        </div>
    </div>
  );
};