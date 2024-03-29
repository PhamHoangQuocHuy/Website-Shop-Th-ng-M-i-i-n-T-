//
import React, { useContext } from 'react'
import { ShopContext } from './shopcontext';
import ReactStars from "react-rating-stars-component";

function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
        return text;
    }
    return text.substring(0, maxLength) + '...';
} // Hàm dùng giới hạn nội dung


const prod = (props) => {
    const { id, name, image, price, brand } = props.data;
    const { viewProductDetails, addToCart, cartItems } = useContext(ShopContext);
    const cartItemsCount = cartItems[id];
    return <>
        <div key={id} className="col-3">
            <div className="card">
                <img src={image} alt="" className='img-fluid card-img-top ' />
                <div className="card-details p-3">
                    <span> {brand} </span>
                    <h5 className='my-3'> {truncateText(name, 20)} </h5>
                    <ReactStars
                        count={5}
                        edit={false}
                        value={4}
                        size={24}
                        activeColor="#ffd700"
                    />
                    <p className='price mb-3'> {price} <span className='text-danger'> &nbsp; <strike>{price * 2}</strike></span></p>
                    <div className='d-flex align-items-center justify-content-around mb-2'>
                        <button className='view-button' onClick={() => viewProductDetails(id)}>View Details</button>
                        <button onClick={() => addToCart(id)}> Add To Cart {cartItemsCount > 0 && `(${cartItemsCount})`} </button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default prod
