import React from 'react';
import { useParams } from 'react-router-dom';
import PropertyDetailsBuy from './PropertyDetailsBuy';
import PropertyDetailsRent from './PropertyDetailsRent';

const PropertyDetailsWrapper = ({ buyProperties, rentProperties }) => {
  const { purpose, id } = useParams();
  const properties = purpose === 'buy' ? buyProperties : rentProperties;
  const property = properties.find(property => property._id === parseInt(id));

  if (purpose === 'buy') {
    return <PropertyDetailsBuy property={property} />;
  } else if (purpose === 'rent') {
    return <PropertyDetailsRent property={property} />;
  }
  return null;
};

export default PropertyDetailsWrapper;