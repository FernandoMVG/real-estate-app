import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Buy from './pages/Buy';
import Rent from './pages/Rent';
import Finance from './pages/Finance';
import PropertyDetailsBuy from './pages/PropertyDetailsBuy';
import PropertyDetailsRent from './pages/PropertyDetailsRent';
import Profile from './pages/Profile';
import Login from './components/Login';
import Register from './components/Register';
import { refreshToken } from './api';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await refreshToken();
                if (response.data.accessToken) {
                    setIsAuthenticated(true);
                    setUser(response.data.user); // Suponiendo que el backend devuelve el usuario en el token refresh
                }
            } catch (error) {
                setIsAuthenticated(false);
            }
        };
        checkAuth();
    }, []);

    return (
        <Router>
            <Navbar user={user} setUser={setUser} />
            <div className="pt-16">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/buy" element={<Buy />} />
                    <Route path="/rent" element={<Rent />} />
                    <Route path="/finance" element={<Finance />} />
                    <Route path="/property/buy/:id" element={<PropertyDetailsBuy />} />
                    <Route path="/property/rent/:id" element={<PropertyDetailsRent />} />
                    <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
                    <Route path="/login" element={isAuthenticated ? <Navigate to="/profile" /> : <Login setUser={setUser} />} />
                    <Route path="/register" element={isAuthenticated ? <Navigate to="/profile" /> : <Register setUser={setUser} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
