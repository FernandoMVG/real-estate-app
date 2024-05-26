import React from 'react';
import { Link } from 'react-router-dom';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import BathtubIcon from '@mui/icons-material/Bathtub';
import LocalParkingIcon from '@mui/icons-material/LocalParking';

const formatCurrency = (price, currency) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: currency }).format(price);
};

const PropertyCard = ({ property }) => {
  const { _id, profilePictures, address, description, bedrooms, bathrooms, parking, price } = property;

  return (
    <Link to={`/property/${property.purpose === 'For Sale' ? 'buy' : 'rent'}/${_id}`} className="block rounded-lg shadow-lg overflow-hidden">
      <img src={`https://${process.env.REACT_APP_BUCKET_NAME}.s3.${process.env.REACT_APP_BUCKET_REGION}.amazonaws.com/${profilePictures[0]?.url || 'placeholder-image.jpg'}`} alt={address.fullAddress} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{address.fullAddress}</h3>
        <div className="h-24 overflow-hidden">
          <p className="mt-2 text-gray-600">{description.substring(0, 60)}...</p>
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
        <p className="mt-4 text-lg font-semibold text-gray-900">
          {formatCurrency(price.amount.toString(), price.currency)}
        </p>
      </div>
    </Link>
  );
};

export default PropertyCard;
