import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BuildIcon from '@mui/icons-material/Build';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SecurityIcon from '@mui/icons-material/Security';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const PorQueLuxMotors = () => {
  const razones = [
    {
      icon: <VerifiedIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
      titulo: 'Certificación de Calidad',
      descripcion: 'Todos nuestros vehículos pasan por 150 puntos de inspección antes de ser puestos a la venta.'
    },
    {
      icon: <LocalShippingIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
      titulo: 'Entrega a Domicilio',
      descripcion: 'Entregamos tu vehículo donde tú elijas, en cualquier punto de España peninsular.'
    },
    {
      icon: <BuildIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
      titulo: 'Garantía Mecánica',
      descripcion: '12 meses de garantía en todas las piezas mecánicas, sin límite de kilometraje.'
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
      titulo: 'Atención Personalizada',
      descripcion: 'Asesores expertos disponibles 24/7 para resolver todas tus dudas.'
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
      titulo: 'Compra Segura',
      descripcion: '30 días o 1.000 km de prueba. Si no te convence, te devolvemos el dinero.'
    },
    {
      icon: <ThumbUpIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
      titulo: 'Los Mejores Precios',
      descripcion: 'Precios transparentes y competitivos, sin sorpresas ni costes ocultos.'
    }
  ];

  return (
    <Box 
      sx={{ 
        width: '100%',
        minHeight: 'calc(100vh - 64px)',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        justifyContent: 'center',
        pt: '64px',
        px: { xs: 2, sm: 4 }
      }}
    >
      <Container 
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ width: '100%' }}
        >
          <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
            ¿Por qué elegir LuxMotors?
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" sx={{ mb: 8 }}>
            Redefiniendo la experiencia de comprar un coche de ocasión
          </Typography>

          {/* Historia y Misión */}
          <Card sx={{ mb: 8 }}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <CardMedia
                  component="img"
                  height="400"
                  image="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=1000"
                  alt="LuxMotors showroom"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Typography variant="h4" gutterBottom>
                    Nuestra Historia
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Fundada en 2020, LuxMotors nació con una visión clara: revolucionar el mercado de coches de ocasión en España. Nos propusimos eliminar la desconfianza y la incertidumbre que tradicionalmente han rodeado la compra de vehículos usados.
                  </Typography>
                  <Typography variant="body1">
                    Hoy, somos líderes en el sector, con más de 10.000 clientes satisfechos y una valoración media de 4.8/5 en satisfacción del cliente. Nuestro compromiso con la calidad, la transparencia y el servicio al cliente nos distingue en el mercado.
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>

          {/* Razones para elegirnos */}
          <Grid container spacing={4}>
            {razones.map((razon, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card sx={{ height: '100%' }}>
                    <CardContent sx={{ p: 4, textAlign: 'center' }}>
                      <Box sx={{ mb: 2 }}>
                        {razon.icon}
                      </Box>
                      <Typography variant="h6" gutterBottom>
                        {razon.titulo}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {razon.descripcion}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Estadísticas */}
          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
              LuxMotors en Números
            </Typography>
            <Grid container spacing={4} sx={{ mt: 2 }}>
              <Grid item xs={12} sm={4}>
                <Typography variant="h3" color="primary" sx={{ fontWeight: 'bold' }}>
                  10.000+
                </Typography>
                <Typography variant="body1">Clientes Satisfechos</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h3" color="primary" sx={{ fontWeight: 'bold' }}>
                  1.850+
                </Typography>
                <Typography variant="body1">Vehículos Disponibles</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h3" color="primary" sx={{ fontWeight: 'bold' }}>
                  4.8/5
                </Typography>
                <Typography variant="body1">Valoración Media</Typography>
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default PorQueLuxMotors; 