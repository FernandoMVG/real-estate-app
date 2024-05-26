// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Buy from './pages/Buy';
import Rent from './pages/Rent';
import Finance from './pages/Finance';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm'; // Asegúrate de que el nombre del archivo es correcto
import UserDashboard from './components/UserDashboard';
import PropertyDetailsBuy from './pages/PropertyDetailsBuy';
import PropertyDetailsRent from './pages/PropertyDetailsRent';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <AuthProvider>
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
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/dashboard" element={<PrivateRoute><UserDashboard /></PrivateRoute>} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
