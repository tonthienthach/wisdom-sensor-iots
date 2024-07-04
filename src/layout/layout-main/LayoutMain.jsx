import React from 'react'
import './layout-main.css'
import Footer from './../../components/user/Footer/Footer'
import Header from './../../components/user/Header/Header'

const LayoutMain = ({ children }) => {
    return (
        <div className='layout-main'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default LayoutMain
