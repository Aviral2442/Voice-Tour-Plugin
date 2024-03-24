import React from 'react';
import {Footer} from './footer';

const MainLayout = ({ children }) => {
    return (
        <>
            {children}
            <Footer />
        </>
    )
}

export default MainLayout;