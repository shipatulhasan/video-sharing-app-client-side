import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar'

const Main = () => {
    return (
        <div>
            <Navbar />
            <ScrollRestoration />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;