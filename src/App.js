import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'

import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';
import Layout from './components/layout/Layout';
import Product from './pages/Product';
import Employee from './pages/Employee';
import LogIn from './pages/Author/LogIn';

const App = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<Navigate to="/dashboard" />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/customers' element={<Customers />} />
                <Route path='/products' element={<Product />} />
                <Route path='/employee' element={<Employee />} />
            </Route>
            <Route path='/login' element={<LogIn />} />
        </Routes>

    );
};

export default App;