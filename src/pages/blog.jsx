import React from 'react'
import img1 from '../assets/images/blog-details-1.jpg'
import img2 from '../assets/images/blog-details-2.jpg'
import img3 from '../assets/images/blog-details-3.jpg'
import img4 from '../assets/images/blog-details-4.jpg'

const blog = () => {
  return <>
    <section className='blog-wrapper p-5'>
      <div className="container-xxl">
        <div className="row">
          <div className="text-center">
            <h1 className='text-white mb-3'>#Read more</h1>
            <p className='text-white fs-3'>Get to know what our Customer Say...</p>
          </div>
        </div>
      </div>
    </section>

    <section className="blog-details p-5">
      <div className="container-xxl">
        <div className="row">
          <div className="text-center">
            <h1 className='fs-2 mb-3'>Explore More On Our Library</h1>
            <p className='mb-5'>Why We Have Trending Outfit Everywhere</p>
          </div>
          <div className="card blog-details-page mb-3">
            <div className="p-4 d-flex">
              <div className="col-4">
                <img src={img1} alt="" className='img-fluid img-rounded-start' />
              </div>
              <div className="card-body col-8 p-4">
                <span><b>Marvel Clein</b></span>
                <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Atque, repellat aspernatur.
                  Iste neque praesentium distinctio placeat vitae est dolores non,
                  tenetur exercitationem obcaecati ducimus dolorem?
                  Quia praesentium sapiente consequatur est.</p>
                <div className="card-footer mt-4">
                  <p>Last update: now</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card blog-details-page mb-3">
            <div className="p-4 d-flex">
              <div className="col-4">
                <img src={img2} alt="" className='img-fluid img-rounded-start' />
              </div>
              <div className="card-body col-8 p-4">
                <span><b>Marvel Clein</b></span>
                <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Atque, repellat aspernatur.
                  Iste neque praesentium distinctio placeat vitae est dolores non,
                  tenetur exercitationem obcaecati ducimus dolorem?
                  Quia praesentium sapiente consequatur est.</p>
                <div className="card-footer mt-4">
                  <p>Last update: now</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card blog-details-page mb-3">
            <div className="p-4 d-flex">
              <div className="col-4">
                <img src={img3} alt="" className='img-fluid img-rounded-start' />
              </div>
              <div className="card-body col-8 p-4">
                <span><b>Marvel Clein</b></span>
                <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Atque, repellat aspernatur.
                  Iste neque praesentium distinctio placeat vitae est dolores non,
                  tenetur exercitationem obcaecati ducimus dolorem?
                  Quia praesentium sapiente consequatur est.</p>
                <div className="card-footer mt-4">
                  <p>Last update: now</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card blog-details-page mb-3">
            <div className="p-4 d-flex">
              <div className="col-4">
                <img src={img4} alt="" className='img-fluid img-rounded-start' />
              </div>
              <div className="card-body col-8 p-4">
                <span><b>Marvel Clein</b></span>
                <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Atque, repellat aspernatur.
                  Iste neque praesentium distinctio placeat vitae est dolores non,
                  tenetur exercitationem obcaecati ducimus dolorem?
                  Quia praesentium sapiente consequatur est.</p>
                <div className="card-footer mt-4">
                  <p>Last update: now</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card blog-details-page mb-3">
            <div className="p-4 d-flex">
              <div className="col-4">
                <img src={img2} alt="" className='img-fluid img-rounded-start' />
              </div>
              <div className="card-body col-8 p-4">
                <span><b>Marvel Clein</b></span>
                <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Atque, repellat aspernatur.
                  Iste neque praesentium distinctio placeat vitae est dolores non,
                  tenetur exercitationem obcaecati ducimus dolorem?
                  Quia praesentium sapiente consequatur est.</p>
                <div className="card-footer mt-4">
                  <p>Last update: now</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </>
}

export default blog
