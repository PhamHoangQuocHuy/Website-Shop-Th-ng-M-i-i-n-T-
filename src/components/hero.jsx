import React from 'react'
import Img1 from '../assets/images/FastOrder.png'
import Img2 from '../assets/images/QuickDelivery.png'
import Img3 from '../assets/images/HighSave.png'
import Img4 from '../assets/images/Support.png'
import Img5 from '../assets/images/OnlineOrder.png'

import { Link } from 'react-router-dom';
const hero = () => {
    return <>
        <div className="hero p-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="hero-details d-flex justify-content-around text-center mx-4">
                        <div className="card p-2">
                            <div className="cart-details p-2">
                                <Link><img src={Img1} alt="" className='img-fluid' />
                                    <p>Fast Order</p>
                                </Link>
                            </div>
                        </div>
                        <div className="card p-2">
                            <div className="cart-details p-2">
                                <Link><img src={Img2} alt="" className='img-fluid' />
                                    <p>Quick Shipping</p>
                                </Link>
                            </div>
                        </div>
                        <div className="card p-2">
                            <div className="cart-details p-2">
                                <Link><img src={Img3} alt="" className='img-fluid' />
                                    <p>High Save</p>
                                </Link>
                            </div>
                        </div>
                        <div className="card p-2">
                            <div className="cart-details p-2">
                                <Link><img src={Img4} alt="" className='img-fluid' />
                                    <p>24/7 Support</p>
                                </Link>
                            </div>
                        </div>
                        <div className="card p-2">
                            <div className="cart-details p-2">
                                <Link><img src={Img5} alt="" className='img-fluid' />
                                    <p>Online Order</p>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>
}

export default hero
