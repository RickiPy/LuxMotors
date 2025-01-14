import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  IconButton, 
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  ListItemButton
} from '@mui/material';
import { motion } from 'framer-motion';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import PortfolioBanner from './PortfolioBanner';

const menuItems = [
  { text: 'Comprar', path: '/comprar' },
  { text: 'Vender', path: '/vender' },
  { text: 'Financiación', path: '/financiacion' },
  { text: '¿Por qué LuxMotors?', path: '/por-que-luxmotors' }
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle}>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={RouterLink}
              to={item.path}
              sx={{
                color: '#333',
                '&:hover': {
                  backgroundColor: 'rgba(25, 118, 210, 0.08)',
                }
              }}
            >
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton>
            <Button 
              variant="contained" 
              component="a"
              href="tel:919015000"
              fullWidth
            >
              919 015 000
            </Button>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <PortfolioBanner />

      <AppBar 
        position="fixed" 
        sx={{ 
          background: 'rgba(255, 255, 255, 0.95)', 
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          top: '48px',
          zIndex: 1100
        }}
      >
        <Toolbar>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box 
              component={RouterLink} 
              to="/"
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                textDecoration: 'none' 
              }}
            >
              <DirectionsCarIcon sx={{ color: '#1976d2', fontSize: 40, mr: 1 }} />
              <Typography variant="h5" component="div" sx={{ color: '#1976d2', fontWeight: 'bold' }}>
                LuxMotors
              </Typography>
            </Box>
          </motion.div>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: 'auto', color: '#333' }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', gap: 2 }}>
                {menuItems.map((item) => (
                  <motion.div
                    key={item.text}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      component={RouterLink}
                      to={item.path}
                      color="inherit"
                      sx={{ 
                        color: '#333',
                        '&:hover': {
                          backgroundColor: 'rgba(25, 118, 210, 0.08)',
                        }
                      }}
                    >
                      {item.text}
                    </Button>
                  </motion.div>
                ))}
              </Box>

              <Box>
                <Button 
                  variant="contained" 
                  component="a"
                  href="tel:919015000"
                  sx={{ mr: 2 }}
                >
                  651 100 704
                </Button>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Box sx={{ height: 'calc(48px + 64px)' }} />

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header; 