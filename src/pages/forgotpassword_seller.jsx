import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";

const forgotpassword = () => {
    return <>
        <div className="forgot-password-container">
            <div className="form-container">
                <form className='form-fgp'>
                    <div className='d-flex justify-content-start align-items-center'>
                        <Link to={'/login_seller'}><IoMdArrowRoundBack className='return-icon' /></Link>
                        <h3 className='fgp-title mt-3 px-4 mx-2'>Reset password</h3>
                    </div>
                    <input className='input-fgp' type="email" placeholder='Email của bạn' required />
                    <button type="submit" className='btn-fgp'>Tiếp Theo</button>
                </form>
            </div>
        </div>
    </>
}

export default forgotpassword
