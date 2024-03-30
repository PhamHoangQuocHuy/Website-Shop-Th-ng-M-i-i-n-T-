import React from 'react'
import { PRODUCTS, PRODUCTS1 } from './product';
import { useContext } from 'react';
import { ShopContext } from '../components/shopcontext';

const productdetails = () => {
    const productId = selectedProduct || 0;
    const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS1.find((p) => p.id === productId);
    const { addToCart, cartItems,closeProductDetails, viewProductDetails, selectedProduct } = useContext(ShopContext);
    return <>

    </>
}

export default productdetails
