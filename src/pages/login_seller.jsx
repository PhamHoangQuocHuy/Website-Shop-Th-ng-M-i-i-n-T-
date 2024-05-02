import React from 'react'
import a1 from '../assets/images/a1.png'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const login = () => {
    return <>
        <section className='justify-content-between'>
            <div className="container-xxl">
                <div className="row my-5 py-5 justify-content-between ">
                    <div className="col-8 ">
                        <h3 className='h3-seller login-content'>Bán hàng chuyên nghiệp</h3>
                        <p className='d-flex align-items-center justify-content-center'>
                            Quản lý shop của bạn một cách hiệu quả hơn trên
                            <br />KUPITIE với KUPITIE - Kênh Người bán</p>
                        <div className='d-flex jsutify-content-center align-items-center'>
                            <img className='a1-img my-5' src={a1} alt="" />
                        </div>
                    </div>
                    <div className="col-4">
                        <form action="" className='form-login d-flex flex-column justify-content-center align-items-center'>
                            <h2 className='d-flex justify-content-center align-items-center my-2 mb-3'>Login</h2>
                            <input className='input1 my-4' type="text" placeholder='Email/Số điện thoại/Tên đăng nhập' autoComplete='on' name='loginKey' />
                            <input className='input1 mb-4' type="password" placeholder='Mật khẩu' autoComplete='current-password' name='password' />
                            <button className='btn-login mb-3'>ĐĂNG NHẬP</button>
                            <div className='d-flex justify-content-between w-100 mt-3'>
                                <Link to={'/forgotpassword_seller'} className='fgp mb-2'>Quên mật khẩu?</Link>
                                <Link to={'/signup_seller'} className='regis'>Đăng ký</Link>
                            </div>
                            <span className='sp-option my-2 mb-4'>HOẶC</span>
                            <div className='api'>
                                <button className='log-fb-icon mb-4'><FaFacebook className='text-info'/>FACEBOOK</button>
                                <button className='log-gg-icon'><FcGoogle/>GOOGLE</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default login
