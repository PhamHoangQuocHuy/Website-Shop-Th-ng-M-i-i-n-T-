// liệt kê sp đã bỏ vào giỏ hàng
import React from 'react'
import { useContext } from 'react';
import { ShopContext } from './shopcontext';
const cartitems = (props) => {
    const { id, name, image, price, brand } = props.data;
    const { viewProductDetails, addToCart, cartItems, removeToCart, updateCartItemCount } = useContext(ShopContext);

    return <>
        <tbody key={id}>
            <tr>
                <td className='col-3'>
                    <div className="p-2 img-cart">
                        <img src={image} alt="" className='img-fluid ' />
                    </div>
                </td>
                <td className='col-3'>
                    <p>Product brand: <span className="price">{brand}</span></p>
                    <p>Product name:  <span className='price'>{name}</span></p>
                    <p>Price: <span className="price">{price}</span></p>
                    <p>Items in stock: <span className="text-danger">1000</span></p>
                </td>

                <td className='text-center'>
                    {/* Add */}
                    <button className='add-btn mx-2'
                        onClick={() => {
                            addToCart(id);
                        }
                        }
                    > +
                    </button>
                    <input type="text" value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                    {/* Remove */}
                    <button className='add-btn mx-2'
                        onClick={() => {
                            removeToCart(id);
                        }
                        }
                    > -
                    </button>
                </td>

                <td>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control"
                            placeholder="Enter Coupon code..." aria-label="Recipient's username"
                            aria-describedby="basic-addon2" />
                        <button className="input-group-text" id="basic-addon2">Search</button>
                    </div>
                </td>
            </tr>
            <div className="mb-3"></div>
        </tbody>
    </>
}

export default cartitems
