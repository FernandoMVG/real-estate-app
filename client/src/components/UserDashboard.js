// src/pages/UserDashboard.js
import React, { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

const UserDashboard = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <div className="container mx-auto p-4">Cargando...</div>;
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
