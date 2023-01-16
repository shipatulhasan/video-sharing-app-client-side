import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../compoent/Footer';
import Navbar from '../compoent/Navbar'

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