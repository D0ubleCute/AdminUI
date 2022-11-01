import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';
import Layout from './components/layout/Layout';
import Product from './pages/Product';
import Employee from './pages/Employee';

const App = () => {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/customers' element={<Customers />} />
                <Route path='/products' element={<Product />} />
                <Route path='/employee' element={<Employee />} />
            </Route>
        </Routes>
        
    );
};

export default App;