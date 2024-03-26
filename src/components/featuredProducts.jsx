import React from 'react'
import { PRODUCTS } from './product'
function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
} // Hàm dùng giới hạn nội dung

const FeaturedProducts = () => {
  return (
    <>
      <div className="row mt-4">
        {PRODUCTS.map(product => (
          <div className="col-3 mt-3" key={product.id}>
            <div className="card h-100 m-auto">
              <img src={product.image} alt="" className='card-img-top img-fluid m-auto p-2' />
              <div className="card-details">
                <div className="title m-2">
                  <span className='products-brand p-2'>{truncateText(product.brand, 10)}</span>
                  <h5 className='p-2'>{truncateText(product.name, 25)}</h5>
                </div>
                <div className="card-footer text-center">
                  <p className='mb-1'>{product.status}</p>
                  <p className='text-danger'><strike>{truncateText(product.rate, 10)}</strike></p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default FeaturedProducts;
