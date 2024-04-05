import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

const contact = () => {
  return <>
    <section className="contact-wrapper p-5">
      <div className="container-xxl">
        <div className="row">
          <div className="text-center mb-3">
            <h1>Reach Out To Us</h1>
            <p className='contact-p fs-3'>We are only a step away from you</p>
          </div>
        </div>
      </div>
    </section>

    <section className=' p-5'>
      <div className="container-xxl">
        <div className="row">
          <div className="d-flex align-items-center justify-content-center">
            <div className="col-6 d-flex align-items-center">
              <map name="">
                <iframe className='contact-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.954410425893!2d106.67525717488199!3d10.737997189408482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f62a90e5dbd%3A0x674d5126513db295!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgU8OgaSBHw7Ju!5e0!3m2!1svi!2s!4v1712316694237!5m2!1svi!2s"
                  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </map>
            </div>

            <section className="col-6 contact-info">
              <div className="text-center mt-2">
                <h2>Contact Information</h2>
              </div>
              <div className="footer-details mx-4">
                <p className='mb-3 text-center'><b>Address:</b> 180 Cao Lỗ, Phường 4, Quận 8 TP.HCM</p>
                <p className='mb-3  text-center'><b>Phone:</b><a href="tel:+84 123456789"> Call us: +84 123456789</a></p>
                <p className='mb-3 text-center'><b>Open at: </b> 7AM - 10PM</p>
              </div>
              <p className='text-center mb-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Vitae, fugit, ratione quam sint obcaecati in,
                voluptatibus voluptatem autem harum cupiditate molestiae quasi?
                Aliquid pariatur necessitatibus provident amet vel eum omnis?
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sit nulla esse id velit nostrum commodi molestiae, animi a voluptatibus labore maiores ex culpa?
                Perspiciatis recusandae alias quisquam animi, harum quaerat?
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>

    <section className='form p-5'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-8 col-md-10 col-sm-12 m-auto">
            <div className="card p-5">
              <h2 className='text-center mb-4 text-success'>Leave Us A message</h2>
              <div className=" d-flex align-items-center justify-content-center">
                <div className="row g-3">
                  <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                  </div>
                  <div className='col-12'>
                    <label htmlFor="exampleFormControlInput1" className="form-label mb-3">Enter Your Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />

                  </div>
                  <div className="col-12">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Type in your message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                  <div className='col-12 text-center gap-2'>
                    <button id='button-link' className='btn-submit' type="submit">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default contact
