import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";

const header_after_login = () => {
    return <>
        <header className="header-top">
            <span className="header-support p-3">Hỗ trợ cài đặt 0347.811.175 Email:daigia.lazada@gmail.com</span>
            <div className="header-store-info">
                <span className="store-label">Cửa hàng</span>
                <select className="store-warehouse-select">
                    <option value="kho1">Kho 1</option>
                    <option value="kho2">Kho 2</option>
                    <option value="kho3">Kho 3</option>
                </select>
                <div className="header-divider"></div>
                <div className="user-greeting">
                    <span className='text-black d-flex justify-content-center align-items-center'>
                        Hello, Manager KD
                        <button data-bs-toggle="dropdown" aria-expanded="false" className='btn-drop'><RiArrowDropDownLine className='drop-down-icon' /></button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </span>
                </div>
            </div>
        </header>

    </>
}

export default header_after_login
