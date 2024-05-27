// src/components/PrivateRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  console.log('user privateroute', user);
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
