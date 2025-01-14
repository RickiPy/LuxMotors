import { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper, 
  Slider, 
  Button, 
  Card, 
  CardContent 
} from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CalculateIcon from '@mui/icons-material/Calculate';
import SecurityIcon from '@mui/icons-material/Security';

const Financiacion = () => {
  const [precioVehiculo, setPrecioVehiculo] = useState(20000);
  const [entrada, setEntrada] = useState(2000);
  const [plazo, setPlazo] = useState(48);
  const [cuotaMensual, setCuotaMensual] = useState(0);

  useEffect(() => {
    const interes = 0.0599;
    const cantidadFinanciar = precioVehiculo - entrada;
    const cuota = (cantidadFinanciar * (1 + interes * plazo / 12)) / plazo;
    setCuotaMensual(Math.round(cuota));
  }, [precioVehiculo, entrada, plazo]);

  const beneficios = [
    {
      icon: <AccountBalanceIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
      titulo: 'Financiación Flexible',
      descripcion: 'Adapta las cuotas a tu presupuesto con plazos de hasta 96 meses'
    },
    {
      icon: <CalculateIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
      titulo: 'Sin Sorpresas',
      descripcion: 'TAE fijo del 5.99% sin comisiones ocultas'
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
      titulo: 'Seguridad Total',
      descripcion: 'Proceso 100% transparente y seguro con las mejores entidades'
    }
  ];

  return (
    <Container 
      maxWidth="lg" 
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 8,
        px: 2
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Financia tu vehículo
      </Typography>
      <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6 }}>
        Calcula tu cuota mensual y encuentra el plan perfecto para ti
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={7}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h6" gutterBottom>
              Calculadora de financiación
            </Typography>

            <Box sx={{ mb: 4 }}>
              <Typography gutterBottom>
                Precio del vehículo: {precioVehiculo.toLocaleString()}€
              </Typography>
              <Slider
                value={precioVehiculo}
                onChange={(e, newValue) => setPrecioVehiculo(newValue)}
                min={5000}
                max={100000}
                step={1000}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => `${value.toLocaleString()}€`}
              />
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography gutterBottom>
                Entrada: {entrada.toLocaleString()}€
              </Typography>
              <Slider
                value={entrada}
                onChange={(e, newValue) => setEntrada(newValue)}
                min={0}
                max={precioVehiculo * 0.5}
                step={500}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => `${value.toLocaleString()}€`}
              />
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography gutterBottom>
                Plazo: {plazo} meses
              </Typography>
              <Slider
                value={plazo}
                onChange={(e, newValue) => setPlazo(newValue)}
                min={12}
                max={96}
                step={12}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => `${value} meses`}
              />
            </Box>

            <Paper elevation={3} sx={{ p: 3, backgroundColor: '#f8f9fa', textAlign: 'center' }}>
              <Typography variant="h5" gutterBottom>
                Tu cuota mensual estimada
              </Typography>
              <Typography variant="h3" color="primary" sx={{ fontWeight: 'bold' }}>
                {cuotaMensual.toLocaleString()}€
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                TAE 5.99% | Comisión de apertura: 0€
              </Typography>
            </Paper>

            <Button variant="contained" fullWidth sx={{ mt: 3 }}>
              Solicitar financiación
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={5}>
          <Grid container spacing={3}>
            {beneficios.map((beneficio, index) => (
              <Grid item xs={12} key={index}>
                <Card>
                  <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    {beneficio.icon}
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        {beneficio.titulo}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {beneficio.descripcion}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Financiacion; 