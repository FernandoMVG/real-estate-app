import React from 'react';
import { Typography, Grid, List, ListItem, ListItemText } from '@mui/material';

const UserDashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Typography variant="h6" gutterBottom>
          Mis Propiedades Favoritas
        </Typography>
        <List>
          {/* Aquí puedes cargar las propiedades favoritas del usuario */}
          <ListItem>
            <ListItemText primary="Propiedad 1" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Propiedad 2" />
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="h6" gutterBottom>
          Mis Ofertas
        </Typography>
        <List>
          {/* Aquí puedes cargar las ofertas del usuario */}
          <ListItem>
            <ListItemText primary="Oferta 1" secondary="Estado: Pendiente" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Oferta 2" secondary="Estado: Aceptada" />
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="h6" gutterBottom>
          Vender/Rentar Propiedad
        </Typography>
        {/* Aquí puedes agregar formularios para vender o rentar propiedades */}
      </Grid>
    </Grid>
  );
};

export default UserDashboard;