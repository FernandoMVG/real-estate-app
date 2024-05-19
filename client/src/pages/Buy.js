// Buy.js
import React from 'react';
import PropertyCard from '../components/PropertyCard';
import { buyProperties } from '../propertiesData'; // Importa buyProperties
import { Link } from 'react-router-dom';
import '../Styles.css';

const Buy = () => {

  // Aquí podrías tener alguna lógica para obtener las propiedades y establecerlas en el estado

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Propiedades en Venta</h2>
      <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {buyProperties.map((property) => (
          <Link key={property._id} to={`/property/buy/${property._id}`}>
            <PropertyCard property={property} /> 
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Buy;