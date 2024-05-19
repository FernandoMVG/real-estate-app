import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import { Button } from '@mui/material';

const Buy = () => {
  const [properties] = useState([
    {
      _id: 1,
      images: ['https://via.placeholder.com/350x200'], // Reemplaza con URLs de imágenes reales
      location: {
        address: 'Calle Falsa 123',
        city: 'Ciudad Falsa',
        state: 'Estado Falso',
      },
      description: 'Descripción de la propiedad 1. Lorem ipsum dolor sit amet...',
      bedrooms: 3,
      bathrooms: 2,
      parking: true,
      price: 250000,
    },
    {
      _id: 2,
      images: ['https://via.placeholder.com/350x200'], // Reemplaza con URLs de imágenes reales
      location: {
        address: 'Avenida Siempre Viva 742',
        city: 'Springfield',
        state: 'Oregon',
      },
      description: 'Descripción de la propiedad 2. Lorem ipsum dolor sit amet...',
      bedrooms: 4,
      bathrooms: 3,
      parking: false,
      price: 400000,
    },
    // Agrega más propiedades aquí...
  ]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Propiedades en Venta</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {properties.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Buy;