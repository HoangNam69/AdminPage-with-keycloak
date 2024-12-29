import React from 'react'
import Header from './Header'
import Footer from './Footer'

function MainLayout({ children }) {
    return (
        <div className='admin'>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default MainLayout;