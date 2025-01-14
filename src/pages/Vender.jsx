import { Box, Container, Typography, TextField, Button, Grid, MenuItem, Paper, Stepper, Step, StepLabel } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const steps = ['Información básica', 'Detalles técnicos', 'Fotos y descripción'];

const Vender = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Grid container spacing={3} sx={{ maxWidth: 600 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Marca"
                  required
                  select
                >
                  {['Audi', 'BMW', 'Mercedes', 'Volkswagen', 'Toyota', 'Ford'].map((marca) => (
                    <MenuItem key={marca} value={marca}>
                      {marca}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Modelo"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Año"
                  type="number"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Kilometraje"
                  type="number"
                  required
                />
              </Grid>
            </Grid>
          </Box>
        );
      case 1:
        return (
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Grid container spacing={3} sx={{ maxWidth: 600 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Tipo de combustible"
                  required
                  select
                >
                  {['Gasolina', 'Diésel', 'Híbrido', 'Eléctrico'].map((fuel) => (
                    <MenuItem key={fuel} value={fuel}>
                      {fuel}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Potencia (CV)"
                  type="number"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Transmisión"
                  required
                  select
                >
                  {['Manual', 'Automática'].map((trans) => (
                    <MenuItem key={trans} value={trans}>
                      {trans}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Color"
                  required
                />
              </Grid>
            </Grid>
          </Box>
        );
      case 2:
        return (
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Grid container spacing={3} sx={{ maxWidth: 600 }}>
              <Grid item xs={12}>
                <Paper
                  variant="outlined"
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    cursor: 'pointer',
                    backgroundColor: '#f5f5f5',
                    '&:hover': {
                      backgroundColor: '#eeeeee',
                    },
                  }}
                >
                  <CloudUploadIcon sx={{ fontSize: 48, color: '#666' }} />
                  <Typography variant="body1" sx={{ mt: 2 }}>
                    Arrastra tus fotos aquí o haz clic para seleccionarlas
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Máximo 10 fotos (JPG, PNG)
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Descripción"
                  multiline
                  rows={4}
                  placeholder="Describe el estado del vehículo, equipamiento destacado, etc."
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Precio deseado (€)"
                  type="number"
                  required
                />
              </Grid>
            </Grid>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box 
      component="div"
      sx={{ 
        width: '100vw',
        minHeight: 'calc(100vh - 64px)',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        paddingTop: '64px'
      }}
    >
      <Box 
        component="div"
        sx={{ 
          width: '100%',
          maxWidth: '800px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: { xs: '20px', sm: '40px' }
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ 
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Vende tu coche con LuxMotors
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6 }}>
            Proceso rápido, seguro y al mejor precio del mercado
          </Typography>

          <Paper 
            elevation={3}
            sx={{ 
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: { xs: '20px', sm: '30px', md: '40px' },
              borderRadius: '8px'
            }}
          >
            <Box sx={{ width: '100%', maxWidth: '600px', mb: 4 }}>
              <Stepper activeStep={activeStep}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>

            {renderStepContent(activeStep)}

            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: 2,
              mt: 4
            }}>
              {activeStep !== 0 && (
                <Button 
                  variant="outlined"
                  onClick={handleBack}
                  sx={{ minWidth: 100 }}
                >
                  Atrás
                </Button>
              )}
              <Button
                variant="contained"
                onClick={activeStep === steps.length - 1 ? undefined : handleNext}
                sx={{ minWidth: 100 }}
              >
                {activeStep === steps.length - 1 ? 'Enviar' : 'Siguiente'}
              </Button>
            </Box>
          </Paper>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Vender; 