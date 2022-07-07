import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import {
  Typography, Toolbar, AppBar, 
  Box, Button, IconButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface Props{
  setEventOpen: any
  eventOpen:boolean
  session: any
  setSession: any
  setUser: any
}

export default function NavBar({eventOpen, setEventOpen, session, setSession, setUser}:Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/iniciar-sesion');
  }
  const handleClose = () => {
    setSession(null);
    setUser(null);
    window.localStorage.removeItem('session');
    navigate('/');
  }
  const handleDrawerToggle = () => {
    setEventOpen(!eventOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
       <AppBar
        position="fixed"
        color='transparent'
        sx={{
          color: 'primary.contrastText',
        }}
      >
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="Menu"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Coffee Shop S&S
          </Typography>
          <Typography variant="body1" component="div">
          +86 852 346 000
          </Typography>
          {session ? 
          <Button color="inherit" size="large"
          sx={{fontFamily: "Rufina"}}
          onClick={handleClose}>
            Cerrar sesión
          </Button>
          :
          <Button color="inherit" size="large"
          sx={{fontFamily: "Rufina"}}
          onClick={handleClick}>
            Iniciar sesión
          </Button>
          
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}
