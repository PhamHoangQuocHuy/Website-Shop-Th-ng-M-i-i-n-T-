/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react'
import { PRODUCTS, PRODUCTS1 } from '../components/product';

// context
export const ShopContext = createContext(null);
// function
const getDefaultCart = () => {
  const cart = [];

  for (let i = 0; i < PRODUCTS.length + PRODUCTS1.length; i++)
   {
    cart[i] = 0;
  }
  
  return cart;
}; //  Khởi tạo một mảng cart với số lượng mặt hàng là 0


const shopcontext = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const getTotalCartAmount = () => {
    let totalAmount = 0;
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      let itemInfo = PRODUCTS.find((product) => product.id === Number(item)) 
      || PRODUCTS1.find((product) => product.id === Number(item));
      totalAmount += cartItems[item] * itemInfo.price;
    }
  }
  return totalAmount.toFixed(2);
  };

  const getTotalCartProducts = () => {
    let totalProducts = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalProducts += cartItems[item];
      }
    }
    return totalProducts;
  }; // Tính tổng số lượng sản phẩm có trong giỏ hàng
  

  const addToCart = (productId) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: prev[productId] + 1
    }));
  }; // Tăng số lượng của một sản phẩm
  
  const removeToCart = (productId) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: prev[productId] - 1
    }));
  }; // Giảm số lượng của một sản phẩm
  
  const updateCartItemCount = (newAmount, productId) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: newAmount
    }));
  }; // Cập nhật số lượng mới cho một sản phẩm
  const clearCart = () => {
    const updatedCartItems = {};
    for (const productId in cartItems) {
      updatedCartItems[productId] = 0;
    }
    setCartItems(updatedCartItems);
  };  // Làm trống giỏ hàng

  const resetCart = () => {
    setCartItems([]);
  }; //Đặt lại giỏ hàng về trạng thái ban đầu

  const [selectedProduct, setSelectedProduct] = useState(null);

  const viewProductDetails = (productId) => {
    setSelectedProduct(productId);
  }; // Xem chi tiết sản phẩm

  const closeProductDetails = () => {
    setSelectedProduct(null);
  }; // Đóng thông tin chi tiết sản phẩm 
  

  const contextValue = {
    cartItems,
    addToCart,
    removeToCart,
    updateCartItemCount,
    getTotalCartAmount,
    getTotalCartProducts,
    clearCart,
    resetCart,
    viewProductDetails,
    closeProductDetails,
    selectedProduct,
  }; // Hàm chứa tất cả các trạng thái 

  console.log(cartItems); // In giá trị hiện tại của cartItems ra console

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}; // Xử lý dữ liệu giỏ hàng


export default shopcontext