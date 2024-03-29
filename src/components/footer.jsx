import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import Google from '../assets/images/Google-Play-Logo.jpg'
import AppStore from '../assets/images/AppStore.png'
import PaymentMethods from '../assets/images/PaymentMethods.jpg'
const footer = () => {
  return <>
    <footer className='footer p-5'>
      <div className="container-xxl">
        <div className="row">
          <div className="subscribe-footer col-12 d-flex align-items-center pt-3">
            <div className="col-8 text-center mb-3">
              <h3>Sign Up for a newsletter</h3>
              <p>Get email updates on all our <Link>special offers</Link></p>
            </div>
            <div className="col-4">
              <div className="input-group mb-3 text-center">
                <input type="text" className="form-control p-2" placeholder="Enter email here" aria-label="Search" />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Subscribe</button>
              </div>
            </div>
          </div>
          <hr className='m-2 mt-4' />
          
          <div className="col-4 d-flex flex-column pt">
            <h3 className='mb-4'>Contact Us</h3>
            <div className="footer-details">
              <p className='mb-3'><b>Address:</b>180 Cao Lỗ, Phường 4, Quận 8 TP.HCM</p>
              <p className='mb-3'><b>Phone:</b><a href="tel:+84 123456789"> Call us: +84 123456789</a></p>
              <p className='mb-3'><b>Open at: </b> 7AM - 10PM</p>
              <p className='mb-3'><b>Follow Us: </b></p>
              <div className="col-3 d-flex mb-3 social-icons justify-content-around">
                <Link className='footer-icon'><FaFacebookSquare className='fs-4' /></Link>
                <Link className='footer-icon'><FaTwitter className='fs-4' /></Link>
                <Link className='footer-icon'><IoLogoInstagram className='fs-4' /></Link>
              </div>
            </div>
          </div>
          <div className="col-2">
            <h3 className="mb-4">About</h3>
            <div className="footer-details d-flex flex-column">
              <Link className="mb-3 text-black ">About us</Link>
              <Link className="mb-3 text-black ">Delivery</Link>
              <Link className="mb-3 text-black ">Privacy Policy</Link>
              <Link className="mb-3 text-black ">Tax Policy</Link>
              <Link className="mb-3 text-black ">Fee Policy</Link>
              <Link className="mb-3 text-black ">Terms & Conditions</Link>
            </div>
          </div>
          <div className="col-2">
            <h3 className="mb-4">Account</h3>
            <div className="footer-details d-flex flex-column">
              <Link className="mb-3 text-black ">Profile</Link>
              <Link className="mb-3 text-black ">View cart</Link>
              <Link className="mb-3 text-black ">Help</Link>
              <Link className="mb-3 text-black ">Payments</Link>
              <Link className="mb-3 text-black ">My Wishlist</Link>
              <Link className="mb-3 text-black ">Coupons</Link>
            </div>
          </div>
          <div className="col-4">
            <h3 className="mb-3">Install App</h3>
            <div className="footer-details">
              <p>Available On Google Play Services & App Store</p>
              <div className='pay'>
                <Link><img src={Google} alt="" className='img-fluid p-4 my-3' /></Link>
                <Link><img src={AppStore} alt="" className='img-fluid p-4 my-3' /></Link>
              </div>
              <p className='mb-3'>Payment Methods</p>
              <Link className='paymen-methods'><img src={PaymentMethods} alt="" className='img-fluid pd-2' /></Link>
            </div>
          </div>
        </div>

        <hr />
        <div className="row d-flex align-items-center justify-content-between">
          <div className="col p-2">
            <p>&copy; Developed by Phạm Hoàng Quốc Huy 2024</p>
          </div>
          <div className="footer-details col d-flex justify-content-end">
            <Link className='mx-2 text-black'>Privacy Policy</Link>
            <Link className='mx-2 text-black'>Terms of Use</Link>
            <Link className='mx-2 text-black'>Contact Me</Link>
          </div>
        </div>
      </div>
    </footer>
  </>;
}

export default footer
