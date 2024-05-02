import React from 'react'
import { Link } from 'react-router-dom'
import gif1 from '../assets/images/signup_details.gif'
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const signup = () => {
    return <>
        <section className='bg-banner justify-content-between'>
            <div className="container-xxl">
                <div className="row my-5 py-5 justify-content-between ">
                    <div className="col-8 d-flex flex-column justify-content-center align-items-center">
                        <h3 className='h3-seller signup-content'>Trở thành Người <br /> bán ngay hôm nay</h3>
                        <img className='signup-details mt-2' src={gif1} alt="" />
                        <div className='d-flex jsutify-content-center align-items-center'>
                            {/*  */}
                        </div>
                    </div>
                    <div className="col-4">
                        <form action="" className='form-login d-flex flex-column justify-content-center align-items-center'>
                            <h2 className='d-flex justify-content-center align-items-center my-2 mb-3'>SIGN UP</h2>
                            <input className='input1 my-4' type="text" placeholder='Email/Số điện thoại/Tên đăng nhập' autoComplete='on' name='loginKey' />
                            <input className='input1 mb-4' type="password" placeholder='Mật khẩu' autoComplete='current-password' name='password' />
                            <button className='btn-login mb-3'>ĐĂNG KÝ</button>
                            <div className='d-flex justify-content-between w-100 mt-3'>
                                <Link to={'/forgotpassword_seller'} className='fgp mb-2'>Quên mật khẩu?</Link>
                                <Link to={'/login_seller'} className='regis'>Đăng nhập</Link>
                            </div>
                            <span className='sp-option my-2'>HOẶC</span>
                            <div className='api'>
                                <button className='log-fb-icon mb-4'><FaFacebook className='text-info' />FACEBOOK</button>
                                <button className='log-gg-icon'><FcGoogle />GOOGLE</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    </>
}

export default signup
