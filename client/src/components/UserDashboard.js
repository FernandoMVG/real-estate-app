// src/pages/UserDashboard.js
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import api from '../api';

const UserDashboard = () => {
  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get('/users/me');
        console.log('response dashboard', response);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (!user) {
      fetchUser();
    } else {
      setLoading(false);
    }
  }, [user, setUser]);

  if (loading) {
    return <div className="container mx-auto p-4">Cargando...</div>;
  }

  if (!user) {
    return <div className="container mx-auto p-4">Error al cargar la información del usuario.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Mi Dashboard</h2>
      <div className="bg-white shadow-md rounded p-4">
        <h3 className="text-xl font-semibold mb-4">Información del Usuario</h3>
        <p><strong>Nombre de usuario:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
    </div>
  );
};

export default UserDashboard;
