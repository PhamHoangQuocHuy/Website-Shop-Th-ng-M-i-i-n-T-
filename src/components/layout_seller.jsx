import React from 'react'
import Header_seller from './header_seller'
import Footer_seller from './footer_seller'
import { Outlet } from 'react-router-dom'
const layout = () => {
    return <>
        <Header_seller />
        <Outlet />
        <Footer_seller />
    </>
}

export default layout
