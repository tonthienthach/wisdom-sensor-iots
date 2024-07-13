import React from 'react'
import Footer from './../../components/user/Footer/Footer'

const LayoutMain = ({ children }) => {
    return (
        <div className='layout-main'>
            {children}
            <Footer />
        </div>
    )
}

export default LayoutMain
