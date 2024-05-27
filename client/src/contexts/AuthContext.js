// src/contexts/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import api from '../api';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        try {
          const response = await api.get('/users/me');
          console.log('response authcontext', response);
          setUser(response.data);
        } catch (error) {
          console.log('error fetch en AuthContext', error);
          console.error('Error verificando autenticación:', error);
        }
      }
    };

    fetchUser();
  }, []);

  const logout = async () => {
    try {
      await api.post('/auth/logout');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      setUser(null);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
