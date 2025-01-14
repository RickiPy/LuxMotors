import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 'bold',
              mb: 3,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Más garantías que un usado,
            <br />
            más barato que uno nuevo
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              maxWidth: '600px',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            }}
          >
            Encuentra tu coche reacondicionado entre nuestros más de +1.850 coches mecánicamente impecables.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: '#1976d2',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                }}
              >
                Comprar
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                Vender
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HeroSection; 