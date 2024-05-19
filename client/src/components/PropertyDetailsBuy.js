import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import BathroomIcon from '@mui/icons-material/Bathroom';
import LocalParkingIcon from '@mui/icons-material/LocalParking';

const PropertyDetailsBuy = ({ property }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">{property.location.address}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <img src={property.images[0]} alt={property.location.address} className="w-full h-96 object-cover" />
        </div>
        <div>
          <p className="text-gray-700">{property.description}</p>
          <div className="mt-4 flex items-center">
            {/* ... iconos de habitaciones, baños y parking ... */}
          </div>
          <p className="mt-4 text-2xl font-bold text-gray-900">${property.price}</p>
          <div className="mt-4 flex">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
              Hacer una oferta
            </button>
            <Link to={`/finance?propertyId=${property._id}`} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Financiar Propiedad
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsBuy;