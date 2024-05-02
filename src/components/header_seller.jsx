import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
const header = () => {
    return <>
        <header className='header p-3'>
            <div className="container-xxl">
                <div className="row justify-content-center align-items-center">
                    <div className="col-6">
                        <div className='d-flex align-items-center'>
                            <Link to={'/'}><img className='logo' src={logo} alt="" /></Link>
                            <h2 className='mx-2 my-2'>Kênh người bán</h2>
                        </div>
                    </div>
                    <div className="col-6">
                        <Link to={'/'} className='need-help d-flex justify-content-end'>Bạn cần giúp đỡ ?</Link>
                    </div>
                </div>
            </div>
        </header>
    </>
}

export default header
