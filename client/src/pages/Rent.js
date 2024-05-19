// Rent.js
import React from 'react';
import {Typography } from '@mui/material';
import PropertyCard from '../components/PropertyCard';
import { rentProperties } from '../propertiesData';
import { Link } from 'react-router-dom';

const Rent = () => {
  return (
    <>
      <Typography variant="h4" align="center" sx={{ mt: 3 }}>
        Propiedades en Renta
      </Typography>
      <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> {/* Reemplaza Grid con clases de Tailwind CSS */}
        {rentProperties.map((property) => (
          <Link key={property._id} to={`/property/rent/${property._id}`}>
            <PropertyCard property={property} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Rent;