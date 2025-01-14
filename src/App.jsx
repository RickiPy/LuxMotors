import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Header from './components/Header';
import CarTypes from './components/CarTypes';
import HeroSection from './components/HeroSection';
import Comprar from './pages/Comprar';
import Vender from './pages/Vender';
import Financiacion from './pages/Financiacion';
import PorQueLuxMotors from './pages/PorQueLuxMotors';
import LiveChat from './components/LiveChat';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h2: {
      fontWeight: 700,
      fontSize: '3.5rem',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h3: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h6: {
      fontWeight: 600,
    },
  },
});

const HomePage = () => (
  <Box sx={{ width: '100%' }}>
    <HeroSection />
    <CarTypes />
  </Box>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ 
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          width: '100vw',
          overflow: 'hidden'
        }}>
          <Header />
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flex: 1,
            width: '100%',
            marginTop: '64px'
          }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/comprar" element={<Comprar />} />
              <Route path="/vender" element={<Vender />} />
              <Route path="/financiacion" element={<Financiacion />} />
              <Route path="/por-que-luxmotors" element={<PorQueLuxMotors />} />
            </Routes>
          </Box>
          <LiveChat />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
