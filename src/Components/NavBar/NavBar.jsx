
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import "./NavBar.css";
import logo from '../../assets/Logo-DBZ.png';


const StyledButton = styled(Button)(({ theme }) => ({
  position: 'relative',
  color: '#ffffff',
  margin: '0 10px',
  padding: '8px 16px',
  fontFamily: "'Roboto Condensed', sans-serif",
  fontWeight: 'bold',
  letterSpacing: '1px',
  transition: 'all 0.3s ease',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '2px',
    backgroundColor: '#FFD700',
    transform: 'scaleX(0)',
    transformOrigin: 'right',
    transition: 'transform 0.3s ease',
  },
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    transform: 'translateY(-2px)',
    '&::before': {
      transform: 'scaleX(1)',
      transformOrigin: 'left',
    },
  },
  '&:active': {
    transform: 'translateY(1px)',
  },
}));

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="fixed" 
        sx={{
          backgroundColor: '#000000',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <Toolbar sx={{ padding: '10px 24px' }}>
          <Box 
            component="div" 
            sx={{ 
              display: 'flex', 
              alignItems: 'center',
              '&:hover img': {
                transform: 'scale(1.1)',
              },
            }}
          >
            <img 
              src={logo} 
              alt="Logo" 
              style={{
                height: '50px',
                transition: 'transform 0.3s ease',
              }}
            />
          </Box>
          
          <Box 
            sx={{ 
              flexGrow: 1, 
              display: 'flex', 
              justifyContent: 'flex-end',
              gap: '10px',
            }}
          >
            <StyledButton component={Link} to="/">
              INICIO
            </StyledButton>
            <StyledButton component={Link} to="/humans">
              HUMANOS
            </StyledButton>
            <StyledButton component={Link} to="/non-humans">
              NO HUMANOS
            </StyledButton>
            <StyledButton component={Link} to="/AboutPage">
              ACERCA DE
            </StyledButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
};

export default Navbar;