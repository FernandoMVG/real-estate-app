import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import BathroomIcon from '@mui/icons-material/Bathroom';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import { Button } from '@mui/material';

const PropertyCard = ({ property }) => {
  const { _id, images, location, description, bedrooms, bathrooms, parking, price } = property;

  return (
    <Card sx={{ maxWidth: 600, m: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={images[0]} // Mostrar la primera imagen del carrusel
        alt={location.address}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {location.address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description.substring(0, 100)}...
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Grid container spacing={1} alignItems="center">
            <Grid item>
              <HomeIcon /> {bedrooms}
            </Grid>
            <Grid item>
              <BathroomIcon /> {bathrooms}
            </Grid>
            {parking && (
              <Grid item>
                <LocalParkingIcon />
              </Grid>
            )}
          </Grid>
        </Box>
        <Typography variant="h6" sx={{ mt: 2 }}>
          ${price}
        </Typography>
        <Button component={Link} to={`/property/${_id}`} variant="contained" sx={{ mt: 2 }}>
          Ver más
        </Button>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;