import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';

const carTypes = [
  {
    type: 'SUV y 4x4',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600',
    description: 'Versatilidad y potencia'
  },
  {
    type: 'Compacto',
    image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=600',
    description: 'Ágil y económico'
  },
  {
    type: 'Furgoneta',
    image: 'https://images.unsplash.com/photo-1611842117759-e89835e65882?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Espacio y funcionalidad'
  },
  {
    type: 'Berlina',
    image: 'https://images.unsplash.com/photo-1617654112368-307921291f42?auto=format&fit=crop&w=600',
    description: 'Elegancia y confort'
  },
  {
    type: 'Híbrido',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=600',
    description: 'Eficiencia sostenible'
  },
  {
    type: 'Familiar',
    image: 'https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?auto=format&fit=crop&w=600',
    description: 'Espacio familiar'
  },
  {
    type: 'Eléctrico',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=600',
    description: '100% sostenible'
  },
  {
    type: 'Cabrio',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=600',
    description: 'Libertad al volante'
  }
];

const CarTypes = () => {
  return (
    <Box sx={{ py: 8, px: 4, backgroundColor: '#f5f5f5' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h3" align="center" sx={{ mb: 6, fontWeight: 'bold', color: '#1976d2' }}>
          Encuentra tu vehículo ideal
        </Typography>
      </motion.div>

      <Grid container spacing={3}>
        {carTypes.map((car, index) => (
          <Grid item xs={12} sm={6} md={3} key={car.type}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 2,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  '&:hover': {
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={car.image}
                  alt={car.type}
                  sx={{ 
                    objectFit: 'cover',
                    backgroundColor: '#fff',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)'
                    }
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" align="center">
                    {car.type}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" align="center">
                    {car.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CarTypes; 