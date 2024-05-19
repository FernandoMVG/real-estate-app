import React from 'react';
import { Typography, Grid, Box, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BathroomIcon from '@mui/icons-material/Bathroom';
import LocalParkingIcon from '@mui/icons-material/LocalParking';

const PropertyDetails = () => {
  // Simula los datos de la propiedad
  const property = {
    images: ['https://via.placeholder.com/600x400'], // Reemplaza con URLs de imágenes reales
    location: {
      address: 'Calle Falsa 123',
      city: 'Ciudad Falsa',
      state: 'Estado Falso',
    },
    description: 'Descripción de la propiedad. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus...',
    bedrooms: 3,
    bathrooms: 2,
    parking: true,
    price: 250000,
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        {property.location.address}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <img src={property.images[0]} alt={property.location.address} style={{ width: '100%' }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            {property.description}
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <HomeIcon /> {property.bedrooms}
              </Grid>
              <Grid item>
                <BathroomIcon /> {property.bathrooms}
              </Grid>
              {property.parking && (
                <Grid item>
                  <LocalParkingIcon />
                </Grid>
              )}
            </Grid>
          </Box>
          <Typography variant="h6" sx={{ mt: 2 }}>
            ${property.price}
          </Typography>
          <Button variant="contained" sx={{ mt: 2 }}>
            Hacer una oferta
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PropertyDetails;