import { Box, Drawer, Typography, Slider, FormGroup, FormControlLabel, Checkbox, TextField, Button, Grid, Card, CardMedia, CardContent, IconButton, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import FilterListIcon from '@mui/icons-material/FilterList';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import SpeedIcon from '@mui/icons-material/Speed';
import { useState } from 'react';

const Comprar = () => {
  const [priceRange, setPriceRange] = useState([5000, 50000]);
  const [yearRange, setYearRange] = useState([2015, 2024]);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const filters = (
    <Box sx={{ p: 4, width: { sm: 320 }, backgroundColor: '#fff' }}>
      <Typography variant="h5" sx={{ mb: 4, fontWeight: 'bold', color: '#1976d2' }}>
        Filtros de búsqueda
      </Typography>
      
      <Box sx={{ mb: 5 }}>
        <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600, color: '#2c3e50' }}>
          Precio
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          {priceRange[0].toLocaleString()}€ - {priceRange[1].toLocaleString()}€
        </Typography>
        <Slider
          value={priceRange}
          onChange={(e, newValue) => setPriceRange(newValue)}
          valueLabelDisplay="auto"
          min={5000}
          max={100000}
          sx={{
            color: '#1976d2',
            '& .MuiSlider-thumb': {
              width: 14,
              height: 14,
              '&:hover, &.Mui-focusVisible': {
                boxShadow: '0 0 0 8px rgba(25, 118, 210, 0.16)',
              },
            },
          }}
        />
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box sx={{ mb: 5 }}>
        <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600, color: '#2c3e50' }}>
          Año
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          {yearRange[0]} - {yearRange[1]}
        </Typography>
        <Slider
          value={yearRange}
          onChange={(e, newValue) => setYearRange(newValue)}
          valueLabelDisplay="auto"
          min={2000}
          max={2024}
          sx={{
            color: '#1976d2',
            '& .MuiSlider-thumb': {
              width: 14,
              height: 14,
            },
          }}
        />
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box sx={{ mb: 5 }}>
        <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600, color: '#2c3e50' }}>
          Kilometraje
        </Typography>
        <TextField
          fullWidth
          placeholder="Máx. km"
          type="number"
          size="small"
          sx={{
            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': {
                borderColor: '#1976d2',
              },
            },
          }}
        />
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box sx={{ mb: 5 }}>
        <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600, color: '#2c3e50' }}>
          Tipo de carrocería
        </Typography>
        <FormGroup>
          {['SUV y 4x4', 'Compacto', 'Berlina', 'Familiar', 'Furgoneta', 'Cabrio'].map((tipo) => (
            <FormControlLabel
              key={tipo}
              control={
                <Checkbox 
                  sx={{
                    color: '#90a4ae',
                    '&.Mui-checked': {
                      color: '#1976d2',
                    },
                  }}
                />
              }
              label={<Typography color="text.secondary">{tipo}</Typography>}
            />
          ))}
        </FormGroup>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box sx={{ mb: 5 }}>
        <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600, color: '#2c3e50' }}>
          Combustible
        </Typography>
        <FormGroup>
          {['Gasolina', 'Diésel', 'Híbrido', 'Eléctrico'].map((fuel) => (
            <FormControlLabel
              key={fuel}
              control={
                <Checkbox 
                  sx={{
                    color: '#90a4ae',
                    '&.Mui-checked': {
                      color: '#1976d2',
                    },
                  }}
                />
              }
              label={<Typography color="text.secondary">{fuel}</Typography>}
            />
          ))}
        </FormGroup>
      </Box>

      <Button 
        variant="contained" 
        fullWidth
        sx={{ 
          mt: 2,
          py: 1.5,
          backgroundColor: '#1976d2',
          '&:hover': {
            backgroundColor: '#1565c0',
          },
          boxShadow: '0 4px 6px rgba(25, 118, 210, 0.25)',
        }}
      >
        Aplicar Filtros
      </Button>
    </Box>
  );

  const coches = [
    {
      id: 1,
      marca: 'VW',
      modelo: 'Golf GTI',
      año: 2020,
      precio: 22500,
      km: 45000,
      combustible: 'Gasolina',
      potencia: '245 CV',
      imagen: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600'
    },
    {
      id: 2,
      marca: 'BMW',
      modelo: 'Serie 3',
      año: 2021,
      precio: 35900,
      km: 30000,
      combustible: 'Diésel',
      potencia: '190 CV',
      imagen: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600'
    },
    {
      id: 3,
      marca: 'Audi',
      modelo: 'A3',
      año: 2022,
      precio: 29900,
      km: 15000,
      combustible: 'Híbrido',
      potencia: '204 CV',
      imagen: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=600'
    },
    {
      id: 4,
      marca: 'Mercedes',
      modelo: 'Clase A',
      año: 2021,
      precio: 32500,
      km: 25000,
      combustible: 'Gasolina',
      potencia: '163 CV',
      imagen: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600'
    },
    {
      id: 5,
      marca: 'Porsche',
      modelo: 'Cayman',
      año: 2023,
      precio: 68900,
      km: 5000,
      combustible: 'Gasolina',
      potencia: '300 CV',
      imagen: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600'
    },
    {
      id: 6,
      marca: 'Ford',
      modelo: 'Mustang',
      año: 2021,
      precio: 45900,
      km: 20000,
      combustible: 'Gasolina',
      potencia: '330 CV',
      imagen: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=600'
    },
  ];

  return (
    <Box sx={{ 
      display: 'flex',
      minHeight: 'calc(100vh - 112px)',
      bgcolor: '#f5f5f5'
    }}>
      {/* Sidebar con filtros */}
      <Box
        sx={{
          width: { xs: '100%', md: 320 },
          flexShrink: 0,
          position: 'fixed',
          left: 0,
          top: '112px',
          height: 'calc(100vh - 112px)',
          overflowY: 'auto',
          bgcolor: 'white',
          borderRight: '1px solid #e0e0e0',
          display: { xs: 'none', md: 'block' },
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#555',
          },
        }}
      >
        {filters}
      </Box>

      {/* Contenedor principal de las tarjetas */}
      <Box
        sx={{
          flexGrow: 1,
          p: 3,
          ml: { xs: 0, md: '320px' },
          width: { xs: '100%', md: 'calc(100% - 320px)' }
        }}
      >
        <Grid container spacing={3}>
          {coches.map((coche) => (
            <Grid item xs={12} sm={6} lg={4} key={coche.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ height: '100%' }}
              >
                <Card 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    '&:hover': {
                      boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                      transform: 'translateY(-4px)',
                      transition: 'all 0.3s ease',
                    },
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="220"
                      image={coche.imagen}
                      alt={`${coche.marca} ${coche.modelo}`}
                      sx={{ 
                        objectFit: 'cover',
                      }}
                    />
                    <IconButton
                      sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        '&:hover': { 
                          backgroundColor: 'rgba(255, 255, 255, 1)',
                          transform: 'scale(1.1)',
                        },
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <FavoriteIcon sx={{ color: '#e91e63' }} />
                    </IconButton>
                  </Box>
                  <CardContent sx={{ 
                    flexGrow: 1, 
                    p: 2.5,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '200px' // Altura fija para el contenido
                  }}>
                    <Box>
                      <Typography 
                        variant="h6" 
                        gutterBottom 
                        sx={{ 
                          fontWeight: 'bold',
                          fontSize: '1.1rem',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}
                      >
                        {coche.marca} {coche.modelo}
                      </Typography>
                      <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold', mb: 2 }}>
                        {coche.precio.toLocaleString()}€
                      </Typography>
                      <Grid container spacing={2} sx={{ mb: 2 }}>
                        <Grid item xs={6}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <SpeedIcon sx={{ color: '#666' }} />
                            <Typography variant="body2" color="text.secondary">
                              {coche.km.toLocaleString()} km
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <LocalGasStationIcon sx={{ color: '#666' }} />
                            <Typography variant="body2" color="text.secondary">
                              {coche.combustible}
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{ 
                        py: 1,
                        backgroundColor: '#1976d2',
                        '&:hover': {
                          backgroundColor: '#1565c0',
                        },
                      }}
                    >
                      Ver detalles
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Comprar; 