import React from 'react';
import { Link } from 'react-router-dom';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import BathtubIcon from '@mui/icons-material/Bathtub';
import LocalParkingIcon from '@mui/icons-material/LocalParking';

const PropertyCard = ({ property }) => {
  const { _id, images, location, description, bedrooms, bathrooms, parking, price } = property;

  return (
    <Link to={`/property/buy/${_id}`} className="block rounded-lg shadow-lg overflow-hidden">
      <img src={images[0]} alt={location.address} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{location.address}</h3>
        <div className="h-24 overflow-hidden"> {/* Agrega un contenedor con altura fija */}
          <p className="mt-2 text-gray-600">{description.substring(0, 100)}...</p>
        </div>
        <div className="mt-4 flex items-center">
          <div className="flex items-center mr-4">
            <BedroomParentIcon className="w-5 h-5 text-gray-500" />
            <span className="ml-1 text-gray-700">{bedrooms}</span>
          </div>
          <div className="flex items-center mr-4">
            <BathtubIcon className="w-5 h-5 text-gray-500" />
            <span className="ml-1 text-gray-700">{bathrooms}</span>
          </div>
          {parking && (
            <div className="flex items-center">
              <LocalParkingIcon className="w-5 h-5 text-gray-500" />
            </div>
          )}
        </div>
        <p className="mt-4 text-lg font-semibold text-gray-900">${price}</p>
      </div>
    </Link>
  );
};

export default PropertyCard;