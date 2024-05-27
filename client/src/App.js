// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Buy from './pages/Buy';
import Rent from './pages/Rent';
import Finance from './pages/Finance';
import PropertyDetailsBuy from './pages/PropertyDetailsBuy';
import PropertyDetailsRent from './pages/PropertyDetailsRent';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import UserDashboard from './components/UserDashboard';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './contexts/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/rent" element={<Rent />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/property/buy/:id" element={<PropertyDetailsBuy />} />
            <Route path="/property/rent/:id" element={<PropertyDetailsRent />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/dashboard" element={<PrivateRoute><UserDashboard /></PrivateRoute>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
