import { 
  Box, 
  Typography, 
  Stack, 
  IconButton, 
  Button, 
  Chip, 
  Divider 
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';

const PortfolioBanner = () => {
  return (
    <Box 
      sx={{ 
        width: '100%', 
        background: 'linear-gradient(to right, #1e3a8a, #1976d2)',
        color: 'white',
        py: { xs: 0.5, md: 1 },
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1200
      }}
    >
      <Box sx={{ 
        maxWidth: 'lg', 
        mx: 'auto', 
        px: 2,
      }}>
        {/* Versión móvil */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between', alignItems: 'center' }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <img 
              src="/logo.png" 
              alt="Ricki Logo" 
              style={{ height: '24px', width: 'auto' }}
            />
            <Typography sx={{ fontWeight: 'bold', color: '#bfdbfe' }}>
              Ricki
            </Typography>
            <Typography sx={{ color: '#93c5fd' }}>|</Typography>
            <Typography sx={{ color: '#bfdbfe' }}>
              Fullstack Dev
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <IconButton
              href="https://github.com/RickiPy"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{ 
                color: '#94a3b8',
                '&:hover': { color: '#bfdbfe' }
              }}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton
              href="https://linkedin.com/in/ricardo-vargas-barral-0a3891289"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{ 
                color: '#94a3b8',
                '&:hover': { color: '#bfdbfe' }
              }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton
              href="https://ricki.dev"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{ 
                color: '#94a3b8',
                '&:hover': { color: '#bfdbfe' }
              }}
            >
              <LanguageIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Box>

        {/* Versión escritorio */}
        <Box sx={{ 
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <img 
              src="/logo.png" 
              alt="Ricki Logo" 
              style={{ height: '24px', width: 'auto' }}
            />
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography sx={{ color: '#93c5fd' }}>|</Typography>
              <Typography>Proyecto de Portafolio por</Typography>
              <Typography sx={{ fontWeight: 'bold', color: '#bfdbfe' }}>
                Ricki
              </Typography>
              <Typography sx={{ color: '#93c5fd' }}>|</Typography>
              <Typography sx={{ color: '#bfdbfe' }}>
                Fullstack Developer
              </Typography>
            </Stack>
          </Stack>

          <Stack direction="row" spacing={3} alignItems="center">
            <Stack direction="row" spacing={2}>
              <Button
                href="https://github.com/RickiPy"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<GitHubIcon />}
                size="small"
                sx={{ 
                  color: '#94a3b8',
                  '&:hover': { color: '#bfdbfe' }
                }}
              >
                GitHub
              </Button>
              <Button
                href="https://linkedin.com/in/ricardo-vargas-barral-0a3891289"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<LinkedInIcon />}
                size="small"
                sx={{ 
                  color: '#94a3b8',
                  '&:hover': { color: '#bfdbfe' }
                }}
              >
                LinkedIn
              </Button>
              <Button
                href="https://ricki.dev"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<LanguageIcon />}
                size="small"
                sx={{ 
                  color: '#94a3b8',
                  '&:hover': { color: '#bfdbfe' }
                }}
              >
                Portfolio
              </Button>
            </Stack>
            <Divider orientation="vertical" flexItem sx={{ bgcolor: '#1e40af' }} />
            <Stack direction="row" spacing={1}>
              <Chip 
                label="React"
                size="small"
                sx={{
                  bgcolor: 'rgba(30, 58, 138, 0.5)',
                  color: '#93c5fd',
                  border: '1px solid rgba(59, 130, 246, 0.5)',
                  fontSize: '0.75rem'
                }}
              />
              <Chip 
                label="Material-UI"
                size="small"
                sx={{
                  bgcolor: 'rgba(30, 58, 138, 0.5)',
                  color: '#93c5fd',
                  border: '1px solid rgba(59, 130, 246, 0.5)',
                  fontSize: '0.75rem'
                }}
              />
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default PortfolioBanner; 