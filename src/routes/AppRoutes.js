import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from '../components/layouts/MainLayout'
import Registration from '../components/Registration';
import Login from '../components/Login'


function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<MainLayout><Registration /></MainLayout>} />
                <Route path='/register' element={<MainLayout><Registration /></MainLayout>} />
                <Route path='/login' element={<MainLayout><Login /></MainLayout>} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;