import React from 'react';
import { IoMdCall } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { HiOutlineInboxIn } from "react-icons/hi";
import { VscAccount } from "react-icons/vsc";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { useContext } from 'react';
import { ShopContext } from './shopcontext';

const Header = () => {
  const location = useLocation();
  const { getTotalCartProducts } = useContext(ShopContext);
  const totalProducts = getTotalCartProducts();
  return (
    <>
      <header className='header-top-strip p-1 px-4 shadow-sd'>
        <div className="container-xxl">
          <div className="row align-items-center justify-content-between">
            <div className="col-3">
              <p><strong>The trending outfits at 100% off</strong></p>
            </div>
            <div className="col-3 d-flex justify-content-end">
              <a href="tel:+84 123456789" className='d-flex align-items-center'>
                <IoMdCall className='fs-3 me-2' />
                Call us: +84 123456789
              </a>
              <Link to="/contact" className='d-flex align-items-center ms-4'>
                <MdMailOutline className='fs-3 me-2' />
                Contact
              </Link>
            </div>
          </div>
        </div>
      </header>

      <header className='header-upper px-3 sticky-top'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2 m-auto text-center">
              <Link to='/'><img src={logo} alt="Logo" className='img-fluid logo' /></Link>
            </div>
            <div className="col-5 mt-2">
              <div className="input-group mb-3">
                <input type="text" className="form-control p-2" placeholder="Search product" aria-label="Search" />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
              </div>
            </div>
            <div className="nav-links col-5 align-items-center d-flex justify-content-between">
              <Link to={'/'} className={location.pathname === '/' ? 'active' : 'inactive'} style={{ marginRight: '10px' }}>Home</Link>
              <Link to={'/shop'} className={location.pathname === '/shop' ? 'active' : 'inactive'} style={{ marginRight: '10px' }}>Shop</Link>
              <Link to={'/blog'} className={location.pathname === '/blog' ? 'active' : 'inactive'} style={{ marginRight: '10px' }}>Blog</Link>
              <Link to={'/about'} className={location.pathname === '/about' ? 'active' : 'inactive'} style={{ marginRight: '10px' }}>About</Link>
              <Link to={'/contact'} className={location.pathname === '/contact' ? 'active' : 'inactive'} style={{ marginRight: '10px' }}>Contact</Link>

              <div className='nav-links-nav d-flex align-items-center justify-content-between'>
                <Link to={'/login'} className={location.pathname === '/login' ? 'active' : 'inactive'}>
                  <div className='d-flex align-items-center mx-2'>
                    <span><VscAccount className='fs-3' size="20px" /></span>
                    <p>Account</p>
                  </div>
                </Link>
                <Link to={'/cart'} className={location.pathname === '/cart' ? 'active' : 'inactive'}>
                  <div className='d-flex align-items-center mx-2'>
                    <LiaShoppingCartSolid className='fs-3' />
                    <p>Cart
                      {totalProducts > 0 && `(${totalProducts})`}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
