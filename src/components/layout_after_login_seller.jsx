import React from 'react'
import Header_after_login from './header_after_login_seller'
import { Outlet } from 'react-router-dom'
const layout_after_login = () => {
    return <>
        <Header_after_login />
        <Outlet />
    </>
}

export default layout_after_login
