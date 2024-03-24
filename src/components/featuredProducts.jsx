import React from 'react'
import { PRODUCTS } from './product'
const featuredProducts = () => {
  return <>
    <div className="row mt-4">
      {PRODUCTS.map(product => (
        <div className="col-3 mt-3">
          <div key={product.id}>
            <div className="card h-100 m-auto">
              <img src={product.image} alt="" className='card-img-top img-fluid m-auto p-3' />
              <div className="card-details">
                <div className="tittle m-2">
                  <span>{product.brand}</span>
                  <h5>{product.name}</h5>
                </div>
                <div className="card-footer text-center">
                  <p className='mb-3'>{product.status}</p>
                  <p className='text-danger'><strike>{product.rate}</strike></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
}

export default featuredProducts
