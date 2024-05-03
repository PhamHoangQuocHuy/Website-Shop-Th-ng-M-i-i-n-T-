//Hiển thị các thông tin chi tiết sản phẩm
import React from 'react'
import { PRODUCTS, PRODUCTS1 } from './product';
import { useContext } from 'react';
import { ShopContext } from '../components/shopcontext';
import { Link } from 'react-router-dom';
function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
        return text;
    }
    return text.substring(0, maxLength) + '...';
} // Hàm dùng giới hạn nội dung


const productdetails = () => {
    const { viewProductDetails, addToCart, cartItems,
        closeProductDetails, selectedProduct, updateCartItemCount, removeToCart,cartItemAmount
    } = useContext(ShopContext);
    
    const productId = selectedProduct || 0;
    const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS1.find((p) => p.id === productId);

    return <>
        <div className="d-flex">
            <div className='col-6'>
                <img src={product.image} alt="" className='img-fluid p-5' />
            </div>
            <div className="col-6 card p-3">
                <div className="p-4">
                    <span>{product.brand}</span>
                    <h3 className='my-3'>{product.name}</h3>
                    <div className="card-details">
                        <p className='my-3'><span className='fs-3 text-danger'>{product.price}vnđ </span>&nbsp; <strike>{product.price * 2}vnđ</strike></p>
                        <p className='my-3'>{product.des}</p>
                    </div>

                    <div className='text-center'>
                        <button
                            onClick={() => {
                                addToCart(product.id);
                                event.target.classList.toggle("red");
                            }}
                            className='btn-submit'>Add to cart{cartItemAmount > 0 && ` (${cartItemAmount})`} </button>
                            <Link className='mx-2' to={'/checkout'}><button className='btn-submit'>Buy now</button></Link>
                    </div>

                    <div className="input-group p-4">
                        <input type="text" className="form-control"
                            placeholder="Enter Coupon code..." aria-label="Recipient's username"
                            aria-describedby="basic-addon2" />
                        <button className="input-group-text" id="basic-addon2">Search</button>
                    </div>
                    <div className="card-footer">
                        <h3 className='price my-3 text-center'>More Products Of the same</h3>
                        <div className="row mt-4">
                            {PRODUCTS.map(product => (
                                <div className="col-3 mt-3" key={product.id}>
                                    <div className="card h-100 m-auto">
                                        <img src={product.image} alt="" className='card-img-top img-fluid m-auto p-2' />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="row mt-4">
                            {PRODUCTS1.map(product => (
                                <div className="col-3 mt-3" key={product.id}>
                                    <div className="card h-100 m-auto">
                                        <img src={product.image} alt="" className='card-img-top img-fluid m-auto p-2' />
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>

        </div>
    </>
}

export default productdetails
