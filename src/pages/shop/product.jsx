import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';



export const Product = (props) => {
    const {id, productName, price, productImage} = props.data;

    const {addToCart} = useContext(ShopContext);

  
    return (
    <div className='product'>
        <img src={productImage} alt= "product" /> 
        <div className='description'>
            <p><b>{productName}</b></p>
            <p>${price}</p>
        </div>
        <button className='addToCartBttn' onClick={()=>addToCart(id)}>
             Add to Cart</button>

    </div>
  )
}
