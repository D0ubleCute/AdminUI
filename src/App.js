import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/customers' element={<Customers />} />
            </Routes>
        </div>
    );
};

export default App;