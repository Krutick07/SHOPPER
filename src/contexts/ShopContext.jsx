import React, { createContext, useState } from 'react'
import './ShopContext.css'
import All_product from '../componnents/Assets/All_product';
import { cart } from '../pages/Cart';

export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {};
    for(let i=0; i < All_product.length+1 ; i++){
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) =>{

    const [cartitems,setCartitems] = useState(getDefaultCart());
    

    const addtocart = (itemid) => {
        setCartitems((prev) => ({...prev,[itemid]:prev[itemid]+1}))
        console.log(cartitems);
    }

    const removefromcart = (itemid) => {
        setCartitems((prev) => ({...prev,[itemid]:prev[itemid]-1}))
    }

    const gettotalcartamount = () =>{
        let totalamount = 0;
        for(const item in cartitems){
            if(cartitems[item]>0){
                let iteminfo = All_product.find((product)=>product.id === Number(item));
                totalamount += iteminfo.new_price*cartitems[item];
            }
            return totalamount;
        }
    }

    const contextvalue = {gettotalcartamount,All_product,cartitems,addtocart,removefromcart};

    return(
        <ShopContext.Provider value={contextvalue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;