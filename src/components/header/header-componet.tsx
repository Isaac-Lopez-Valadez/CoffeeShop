import { useState, useEffect } from 'react'
import { Box, Typography, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import {useNavigate} from 'react-router-dom';

interface Props{
  setEventOpen: any
  eventOpen: boolean
}

function Header(props : any) {
  const { path } = props;
  let bgUrl:string = '';
  let title:string = '';
  let showInfo: boolean = false;
  let aling: any = 'inherit'

  switch(path){
    case 'menu':
      bgUrl = 'public/img/menu.png';
      title = 'Menú';
      showInfo = true;
    break;
    case 'pedidos':
      bgUrl = 'public/img/pedidos.png';
      title = 'Pedidos';
      aling = 'center'
    break;
    case 'usuarios':
      bgUrl = 'public/img/usuarios.png';
      title = 'Usuarios';
    break;
    case 'iniciar-sesion':
      bgUrl = 'public/img/usuarios.png';
      title = 'Iniciar Sesión';
    break;
  }

  return (
    <Box
    sx={{
      backgroundImage: `url(./../../../${bgUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '40rem',
      width: '100%',
    }}> 
      <Box
      color='primary.contrastText'
      mt={25}
      ml={12}
      >
      <Typography variant="h1" component="div" align={aling}>
        {title}
      </Typography>
      {
        showInfo && <Typography variant="h6" component="div"  gutterBottom>
        Conoce nuestra variada carta
      </Typography>
      }
      

      </Box>
    { showInfo && <Box
    sx={{
      height: '7rem',
      width: '30rem',
      ml: '60%',
    }}>
      <Box display='flex' flexDirection= 'column'>
        <Box display='flex' mb={3} color='primary.contrastText'>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Open Time
          </Typography>
          <Typography variant="body2" component="div">
            Sunday - Friday
          </Typography>
        </Box>
      <Divider sx={{backgroundColor:'primary.contrastText', mb: '18px'}}/>
      <Box display='flex' color='primary.contrastText'>
        <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
          Brunch 11:00–12:00
        </Typography>
        <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
          Lunch 13:00–17:00
        </Typography>
        <Typography variant="body2" component="div">
          Dinner 18:00–20:00
        </Typography>
      </Box>
      </Box>

    </Box>
    }
    </Box>
  )
}

export default Header;