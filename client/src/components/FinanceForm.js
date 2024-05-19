import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, MenuItem } from '@mui/material';

const FinanceForm = () => {
  const [amount, setAmount] = useState('');
  const [property, setProperty] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes implementar la lógica para enviar la solicitud de financiamiento
    console.log('Solicitud de financiamiento:', { amount, property });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" gutterBottom>
        Financiar Propiedad
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Cantidad"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            select
            label="Propiedad"
            value={property}
            onChange={(e) => setProperty(e.target.value)}
            fullWidth
            required
          >
            {/* Aquí puedes cargar las propiedades disponibles para financiamiento */}
            <MenuItem value="propiedad1">Propiedad 1</MenuItem>
            <MenuItem value="propiedad2">Propiedad 2</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" fullWidth>
            Solicitar Financiamiento
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default FinanceForm;