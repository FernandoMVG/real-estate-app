import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Buy from './pages/Buy';
import Rent from './pages/Rent';
import Finance from './pages/Finance';
import PropertyDetails from './components/PropertyDetails';
import LoginForm from './components/LoginForm';
import UserDashboard from './components/UserDashboard';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<UserDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;