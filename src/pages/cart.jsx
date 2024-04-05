import React from 'react'
import { PRODUCTS, PRODUCTS1 } from '../components/product'
import Cartitems from '../components/cartitems'
import { ShopContext } from '../components/shopcontext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
const cart = () => {
  const { getTotalCartAmount, getTotalCartProducts, clearCart, cartItems } = useContext(ShopContext);
  const TotalAmount = getTotalCartAmount();
  const totalProducts = getTotalCartProducts();
  return <>
    {TotalAmount > 0 ?
      <section className='cart-item p-5'>
        <div className="container-xxl">
          <div className="row">
            <table>
              <thead className='my-2'>
                <th className='col-3 text-center'>Product Image</th>
                <th className='col-3 text-center'>Product Details</th>
                <th className='col-3 text-center'>Edit</th>
                <th className='col-3 text-center'>Coupon</th>
              </thead>
              {[...PRODUCTS, ...PRODUCTS1].map((product) => {
                if (cartItems[product.id] != 0) {
                  return <Cartitems key={product.id} data={product} />
                }
              })}
              <div className="mb-3 text-center p-3"></div>
              <Link className='clear-cart' onClick={() => clearCart(id)}>Clear cart</Link>
            </table>
          </div>
        </div>
        <hr />
        <div className="mt-4 p-3 cart-total d-flex justify-content-between">
          <div>
            <button className='continue-shopping-btn' >Continue Shopping</button>
          </div>
          <div>
            <h3>Total</h3>
            <p className='my-2'>Total Products: {totalProducts}</p>
            <p className='total mb-4'>{TotalAmount}vnđ</p>
            <Link to={'/checkout'}><button className='check-out-btn'>Check Out</button></Link>
          </div>
        </div>
      </section>
      :
      <section className='p-3'>
        <div className="container-xxl">
          <div className="row">
            <div className="text-center">
              <h3>Your Cart Is Empty !!!</h3>
              <p>Click here to <Link to={'/shop'}>add items</Link></p>
            </div>
          </div>
        </div>
      </section>
    }

  </>
}

export default cart
