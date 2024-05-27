// src/pages/Profile.js
import React, { useContext, useState, useEffect } from 'react';
import AuthContext from '../contexts/AuthContext';
import api from '../api';
import { Alert, Button, TextField, Avatar } from '@mui/material';

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    profilePicture: '',
    password: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username,
        email: user.email,
        profilePicture: user.profilePicture || '',
        password: '',
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put(`/users/${user._id}`, formData);
      setUser(response.data);
      setMessage('Perfil actualizado exitosamente');
      setIsEditing(false);
    } catch (error) {
      setError(error.response?.data?.error || 'Error al actualizar el perfil');
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setMessage(null);
    setError(null);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Perfil de Usuario</h2>
      {message && <Alert severity="success">{message}</Alert>}
      {error && <Alert severity="error">{error}</Alert>}
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4 flex justify-center">
          <Avatar src={formData.profilePicture} alt={formData.username} style={{ width: '100px', height: '100px' }} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Nombre de Usuario</label>
          {isEditing ? (
            <TextField
              name="username"
              value={formData.username}
              onChange={handleChange}
              fullWidth
              required
            />
          ) : (
            <p className="text-gray-700">{user.username}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Correo Electrónico</label>
          {isEditing ? (
            <TextField
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
            />
          ) : (
            <p className="text-gray-700">{user.email}</p>
          )}
        </div>
        {isEditing && (
          <>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Contraseña</label>
              <TextField
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                fullWidth
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">URL de Imagen de Perfil</label>
              <TextField
                name="profilePicture"
                value={formData.profilePicture}
                onChange={handleChange}
                fullWidth
              />
            </div>
          </>
        )}
        <div className="flex items-center justify-between">
          {isEditing ? (
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Guardar Cambios
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={handleEditClick}
            >
              Editar Perfil
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
