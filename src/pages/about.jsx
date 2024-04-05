import React from 'react'
import img1 from '../assets/images/about1.jpg'
import { Link } from 'react-router-dom'
import video1 from '../assets/images/1.mp4'
import img2 from '../assets/images/blog1.jpg'
import img3 from '../assets/images/blog2.jpg'
import img4 from '../assets/images/blog3.jpg'
import img5 from '../assets/images/blog4.jpg'
import Marquee from 'react-fast-marquee'

import Img1 from '../assets/images/FastOrder.png'
import Img2 from '../assets/images/QuickDelivery.png'
import Img3 from '../assets/images/HighSave.png'
import Img4 from '../assets/images/Support.png'
import Img5 from '../assets/images/OnlineOrder.png'
import Hero from '../components/hero'

const about = () => {
  return <>
    <section className="about-wrapper p-5 mb-3">
      <div className="container-xxl">
        <div className="row">
          <div className="text-center">
            <h1 className="text-white">#Know Us</h1>
            <p className='text-white fs-3'>Get to know us more</p>
          </div>
        </div>
      </div>
    </section>

    <section className="know-us p-5 mb-3">
      <div className="container-xxl">
        <div className="row">
          <div className="d-flex">
            <div className="col-6">
              <img src={img1} alt="" className='img-fluid p-3' />
            </div>
            <div className="col-6 d-flex flex-column text-center justify-content-center p-3">
              <div className='mb-3'>
                <h1>Who are We</h1>
              </div>
              <div className='mb-3'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Esse, eum aliquam mollitia natus consequatur ea culpa repudiandae quos modi harum eligendi
                  at ex officiis aperiam unde nulla fuga reprehenderit tempore.
                  <br />
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eveniet esse nisi officiis excepturi nostrum molestiae,
                  quam sint quia itaque quos totam sed soluta enim quaerat?
                  Velit quisquam cupiditate iure ut?
                </p>
              </div >
              <div className='mt-5'>
                <Link className='fs-3' to={'./contact'}>Contact us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='download p-3'>
      <div className="container-xxl">
        <div className="row">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div className='mb-4'>
              <h2 className='text-center'>Download Our {" "}
                <Link className='fs-2'><b>App</b></Link></h2>
            </div>
            <div className="col-6 mb-3">
              <video loop autoPlay muted src={video1}></video>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='blogs'>
      <div className="container-xxl">
        <div className="row">
          <div className="text-center mb-4">
            <h1>What Our Customer Say...</h1>
            <p>Our customers never miss a bit on providing feedback</p>
          </div>
          <div className="col-6 p-2">
            <div className="card blog-details-page mb-3">
              <div className=" d-flex">
                <div className="col-4">
                  <img src={img2} alt="" className='img-fluid ' />
                </div>
                <div className="card-body col-8 p-4">
                  <span><b>Marvel Clein</b></span>
                  <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Atque, repellat aspernatur.
                    Iste neque praesentium distinctio placeat vitae est dolores non,
                    tenetur exercitationem obcaecati ducimus dolorem?
                    Quia praesentium sapiente consequatur est.</p>
                </div>
              </div>
            </div>

          </div>
          <div className="col-6 p-2">
            <div className="card blog-details-page mb-3">
              <div className=" d-flex">
                <div className="col-4">
                  <img src={img3} alt="" className='img-fluid ' />
                </div>
                <div className="card-body col-8 p-4">
                  <span><b>Marvel Clein</b></span>
                  <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Atque, repellat aspernatur.
                    Iste neque praesentium distinctio placeat vitae est dolores non,
                    tenetur exercitationem obcaecati ducimus dolorem?
                    Quia praesentium sapiente consequatur est.</p>
                </div>
              </div>
            </div>

          </div>
          <div className="col-6 p-2">
            <div className="card blog-details-page mb-3">
              <div className=" d-flex">
                <div className="col-4">
                  <img src={img4} alt="" className='img-fluid ' />
                </div>
                <div className="card-body col-8 p-4">
                  <span><b>Marvel Clein</b></span>
                  <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Atque, repellat aspernatur.
                    Iste neque praesentium distinctio placeat vitae est dolores non,
                    tenetur exercitationem obcaecati ducimus dolorem?
                    Quia praesentium sapiente consequatur est.</p>
                </div>
              </div>
            </div>

          </div>
          <div className="col-6 p-2">
            <div className="card blog-details-page mb-3">
              <div className=" d-flex">
                <div className="col-4">
                  <img src={img5} alt="" className='img-fluid ' />
                </div>
                <div className="card-body col-8 p-4">
                  <span><b>Marvel Clein</b></span>
                  <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Atque, repellat aspernatur.
                    Iste neque praesentium distinctio placeat vitae est dolores non,
                    tenetur exercitationem obcaecati ducimus dolorem?
                    Quia praesentium sapiente consequatur est.</p>
                </div>
              </div>
            </div>

          </div>
          <div className="col-6 p-2">
            <div className="card blog-details-page mb-3">
              <div className=" d-flex">
                <div className="col-4">
                  <img src={img3} alt="" className='img-fluid ' />
                </div>
                <div className="card-body col-8 p-4">
                  <span><b>Marvel Clein</b></span>
                  <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Atque, repellat aspernatur.
                    Iste neque praesentium distinctio placeat vitae est dolores non,
                    tenetur exercitationem obcaecati ducimus dolorem?
                    Quia praesentium sapiente consequatur est.</p>
                </div>
              </div>
            </div>

          </div>
          <div className="col-6 p-2">
            <div className="card blog-details-page mb-3">
              <div className=" d-flex">
                <div className="col-4">
                  <img src={img2} alt="" className='img-fluid ' />
                </div>
                <div className="card-body col-8 p-4">
                  <span><b>Marvel Clein</b></span>
                  <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Atque, repellat aspernatur.
                    Iste neque praesentium distinctio placeat vitae est dolores non,
                    tenetur exercitationem obcaecati ducimus dolorem?
                    Quia praesentium sapiente consequatur est.</p>
                </div>
              </div>
            </div>

          </div>


        </div>
      </div>
    </section>

    <section className='marquee p-5'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 p-3">
            <Marquee speed={100} className='p-2 slide'>
              <div className="card">
                <img src={Img1} alt="" className='img-fluid' />
                <p className='card-text'>Fast Order</p>
              </div>
              <div className="card mx-3">
                <img src={Img2} alt="" className='img-fluid' />
                <p className='card-text'>Quick Shipping</p>
              </div>
              <div className="card mx-3">
                <img src={Img3} alt="" className='img-fluid' />
                <p className='card-text'>High Save</p>
              </div>
              <div className="card mx-3">
                <img src={Img4} alt="" className='img-fluid' />
                <p className='card-text'>24/7 Support</p>
              </div>
              <div className="card mx-3 ">
                <img src={Img5} alt="" className='img-fluid' />
                <p className='card-text'>Online Order</p>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default about
