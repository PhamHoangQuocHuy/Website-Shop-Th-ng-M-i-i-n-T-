import React from 'react'
import Blog1 from '../assets/images/blog1.jpg'
import Blog2 from '../assets/images/blog2.jpg'
import Blog3 from '../assets/images/blog3.jpg'
import Blog4 from '../assets/images/blog4.jpg'

const blogs = () => {
    return <>
        <div className="col-3">
            <div className="card">
                <img src={Blog1} alt="" className='card-img-top img-fluid mb-3 p-5' />
                <div className="card-body mb-3">
                    <p className='mb-3'>Some quick example text to build on the 
                    card title and make up the bulk of the cards content.</p>
                    <button className="button-blog">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card">
                <img src={Blog2} alt="" className='card-img-top img-fluid mb-3 p-5' />
                <div className="card-body mb-3">
                    <p className='mb-3'>Some quick example text to build on the 
                    card title and make up the bulk of the cards content.</p>
                    <button className="button-blog">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card">
                <img src={Blog3} alt="" className='card-img-top img-fluid mb-3 p-5' />
                <div className="card-body mb-3">
                    <p className='mb-3'>Some quick example text to build on the 
                    card title and make up the bulk of the cards content.</p>
                    <button className="button-blog">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card">
                <img src={Blog4} alt="" className='card-img-top img-fluid mb-3 p-5' />
                <div className="card-body mb-3">
                    <p className='mb-3'>Some quick example text to build on the 
                    card title and make up the bulk of the cards content.</p>
                    <button className="button-blog">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    </>
}

export default blogs
