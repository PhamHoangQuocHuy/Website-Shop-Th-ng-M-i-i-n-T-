//hiển thị sp
import React, { useContext } from 'react'
import { ShopContext } from './shopcontext';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

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
        <div key={id} className="col-3 mb-4">
            <div className="card">
                <div className="p-2">
                    <img src={image} alt="" className='img-fluid card-img-top ' />
                </div>
                <div className="card-details p-3">
                    <span> {brand} </span>
                    <h5 className='my-2'> {truncateText(name, 20)} </h5>
                    <ReactStars
                        count={5}
                        edit={false}
                        value={4}
                        size={24}
                        activeColor="#ffd700"
                    />
                    <p className='price my-2'> {price} <span className='text-danger'> &nbsp; <strike>{price * 2}</strike></span></p>
                    <div className='action-buttons d-flex align-items-center justify-content-around mb-2'>
                        <div className="col-6 d-flex align-items-center justify-content-around my-3">
                            <Link to={'/details'} className='view-button' onClick={() => viewProductDetails(id)}>View Details</Link>
                        </div>
                        <div className="col-6 d-flex align-items-center justify-content-around">
                            <button className='add-to-cart'
                                onClick={() => {
                                    addToCart(id);
                                    event.target.classlist.toggle("text-success");
                                }
                                }
                            > Add To Cart {cartItemsCount > 0 && `(${cartItemsCount})`} </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    </>
}

export default prod
