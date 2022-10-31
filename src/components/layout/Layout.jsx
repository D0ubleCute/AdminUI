import React from 'react';
import './layout.css'

import TopNav from '../topnav/TopNav';
import Sidebar from '../sidebar/Sidebar';

import { BrowserRouter, Routes } from 'react-router-dom';

const Layout = () => {
    return (
        <BrowserRouter>
            <Routes render = {(props) => (
                <div className='layout'>
                    <Sidebar {...props}/>
                    <div className='layout__content'>
                        <TopNav></TopNav>
                    </div>
                </div>
            )}></Routes>
        </BrowserRouter>
    );
};

export default Layout;