import React, { useContext } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import { useParams } from 'react-router-dom';
import { Breadcrum } from '../componnents/Breadcrum/Breadcrum';
import { ProductDisplay } from '../componnents/productdisplay/ProductDisplay';
import { Descriptionbox } from '../componnents/Descriptionbox/Descriptionbox';
import { RelatedProducts } from '../componnents/RelatedProducts/RelatedProducts';

export const Products = () => {
    const {All_product} = useContext(ShopContext);
    const {productId} = useParams();
    const product = All_product.find((e)=> e.id===Number(productId));

  return (
    <div>
        <Breadcrum product={product}></Breadcrum>
        <ProductDisplay product={product}/>
        <Descriptionbox></Descriptionbox>
        <RelatedProducts/>
    </div>
  )
}
