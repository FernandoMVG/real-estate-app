import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Typography } from '@mui/material';
import PropertyCard from '../components/PropertyCard';

const Rent = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('/api/properties?purpose=rent');
        setProperties(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <>
      <Typography variant="h4" align="center" sx={{ mt: 3 }}>
        Propiedades en Renta
      </Typography>
      <Grid container justifyContent="center">
        {properties.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </Grid>
    </>
  );
};

export default Rent;