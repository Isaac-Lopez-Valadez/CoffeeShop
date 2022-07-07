import React, {useEffect, useState} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
  Typography, Box, Toolbar, Grid,
  Card, CardHeader, CardContent,
  CardMedia, Button
} from '@mui/material';
import { getMenu } from './../../services/servicesCoffee';
import Platillo from './../../components/platillo/Platillo';

interface MenuPlatillo{
  id: number;
  name: string;
  description: string;
  price: string;
  img?: string;
};

const MainBody = () => { //este está a medias pero ya cumplí con lo que quería
  //Me falta los demas menus como bebidas, ensaldas, postres, etc. (puedo generar componentes para los botones y mostrar los platillos "map")
  const [agregados, setAgregados] = useState ([]);
  const [ensaladas, setEnsaladas] = useState ([]);
  const [entradas, setEntradas] = useState ([]);
  const [fondo, setFondo] = useState ([]);
  const [postres, setPostres] = useState ([]);
  const [sandwichs, setSandwichs] = useState ([]);
  const [bebidas, setBebidas] = useState ([]);
  const [showFondo, setShowFondo] = useState(false);
  
  const handlerFondos = () =>{
    setShowFondo((showFondo)=>!showFondo);
  }

  useEffect(() => {
    getMenu().then(response => {
      const { agregados, ensaladas, entradas,
            fondo, postres, sandwichs } = response;
      const bebidas = response['jugos-bebidas'];
      setAgregados(agregados);
      setEnsaladas(ensaladas);
      setEntradas(entradas);
      setFondo(fondo);
      setPostres(postres);
      setSandwichs(sandwichs);
      setBebidas(bebidas);
    });
  },[]);

  return (
  <Box component="main"
    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - 55px)` }, backgroundColor:'#e0e0e0' }}>

    <Toolbar />
    <Typography variant="h1" component="div" align='center'>
    Entradas
    </Typography>
    <Typography  variant="body1" component="div" align='center'>
    This is a section of your menu. Give your section a brief description
    </Typography>

    <Box m={5}>
      <Grid container spacing={3}>

        <Grid item xs={12} sm={6}>
        {<img style={{ height:'100%', width: '100%' }} src={'./../../../public/main/entradas.png'} alt={'foto'} />}
        </Grid>

        {entradas.map((platillo: MenuPlatillo, index) =>{
          if(index <= 2){
            return <Platillo platillo={platillo}/>
          } else if(showFondo){
            return <Platillo platillo={platillo}/>
          }
        })}
      </Grid>
    </Box>

    <Typography variant="h1" component="div" align='center'>
      Platos de Fondo
    </Typography>
    <Typography  variant="body1" component="div" align='center'>
      This is a section of your menu. Give your section a brief description
    </Typography>
      <Box m={5}>
      <Grid container spacing={3}>

        <Grid item xs={12} sm={6}>
        {<img style={{ height:'100%', width: '100%' }} src={'./../../../public/main/entradas.png'} alt={'foto'} />}
        </Grid>

        {fondo.map((platillo: MenuPlatillo, index) =>{
          if(index <= 2){
            return <Platillo platillo={platillo}/>
          } else if(showFondo){
            return <Platillo platillo={platillo}/>
          }
        })}
        <Grid xs={1} sx={{ml: 2, mt:30}}>
        <Button
        variant="outlined"
        size="medium"
        onClick={handlerFondos}
        sx={{color:'#121212', borderColor:'#121212'}}>
          {showFondo ? 'Ver menos' : 'Ver más'}
        </Button>
        </Grid>     
      </Grid>
    </Box>
    
    <Typography variant="h1" component="div" align='center'>
     Sandwichs
    </Typography>
    <Typography  variant="body1" component="div" align='center'>
      This is a section of your menu. Give your section a brief description
    </Typography>
    <Box m={5}>
      <Grid container spacing={3}>

        <Grid item xs={12} sm={6}>
        {<img style={{ height:'100%', width: '100%' }} src={'./../../../public/main/entradas.png'} alt={'foto'} />}
        </Grid>

        {sandwichs.map((platillo: MenuPlatillo, index) =>{
          if(index <= 2){
            return <Platillo platillo={platillo}/>
          } else if(showFondo){
            return <Platillo platillo={platillo}/>
          }
        })}
        <Grid xs={1} sx={{ml: 2, mt:30}}>
        <Button
        variant="outlined"
        size="medium"
        onClick={handlerFondos}//ajustar sandwich
        sx={{color:'#121212', borderColor:'#121212'}}>
          {showFondo ? 'Ver menos' : 'Ver más'}
        </Button>
        </Grid>     
      </Grid>
    </Box>

    <Typography variant="h1" component="div" align='center'>
     Ensaladas
    </Typography>
    <Typography  variant="body1" component="div" align='center'>
      This is a section of your menu. Give your section a brief description
    </Typography>
    <Box m={5}>
      <Grid container spacing={3}>

        <Grid item xs={12} sm={6}>
        {<img style={{ height:'100%', width: '100%' }} src={'./../../../public/main/entradas.png'} alt={'foto'} />}
        </Grid>

        {ensaladas.map((platillo: MenuPlatillo, index) =>{
          if(index <= 2){
            return <Platillo platillo={platillo}/>
          } else if(showFondo){
            return <Platillo platillo={platillo}/>
          }
        })}
        <Grid xs={1} sx={{ml: 2, mt:30}}>
        <Button
        variant="outlined"
        size="medium"
        onClick={handlerFondos}//ajustar ensaladas
        sx={{color:'#121212', borderColor:'#121212'}}>
          {showFondo ? 'Ver menos' : 'Ver más'}
        </Button>
        </Grid>     
      </Grid>
    </Box>
      
    <Typography variant="h1" component="div" align='center'>
     Postres
    </Typography>
    <Typography  variant="body1" component="div" align='center'>
      This is a section of your menu. Give your section a brief description
    </Typography>
    <Box m={5}>
      <Grid container spacing={3}>

        <Grid item xs={12} sm={6}>
        {<img style={{ height:'100%', width: '100%' }} src={'./../../../public/main/entradas.png'} alt={'foto'} />}
        </Grid>

        {postres.map((platillo: MenuPlatillo, index) =>{
          if(index <= 2){
            return <Platillo platillo={platillo}/>
          } else if(showFondo){
            return <Platillo platillo={platillo}/>
          }
        })}
        <Grid xs={1} sx={{ml: 2, mt:30}}>
        <Button
        variant="outlined"
        size="medium"
        onClick={handlerFondos}//ajustar postres
        sx={{color:'#121212', borderColor:'#121212'}}>
          {showFondo ? 'Ver menos' : 'Ver más'}
        </Button>
        </Grid>     
      </Grid>
    </Box>

    <Typography variant="h1" component="div" align='center'>
      Platos de Agregados
    </Typography>
    <Typography  variant="body1" component="div" align='center'>
      This is a section of your menu. Give your section a brief description
    </Typography>
    <Box m={5}>
      <Grid container spacing={3}>

        <Grid item xs={12} sm={6}>
        {<img style={{ height:'100%', width: '100%' }} src={'./../../../public/main/entradas.png'} alt={'foto'} />}
        </Grid>

        {agregados.map((platillo: MenuPlatillo, index) =>{
          if(index <= 2){
            return <Platillo platillo={platillo}/>
          } else if(showFondo){
            return <Platillo platillo={platillo}/>
          }
        })}
        <Grid xs={1} sx={{ml: 2, mt:30}}>
        <Button
        variant="outlined"
        size="medium"
        onClick={handlerFondos}//ajustar agregados
        sx={{color:'#121212', borderColor:'#121212'}}>
          {showFondo ? 'Ver menos' : 'Ver más'}
        </Button>
        </Grid>     
      </Grid>
    </Box>

    <Typography variant="h1" component="div" align='center'>
     Bebidas
    </Typography>
    <Typography  variant="body1" component="div" align='center'>
      This is a section of your menu. Give your section a brief description
    </Typography>
    <Box m={5}>
      <Grid container spacing={3}>

        <Grid item xs={12} sm={6}>
        {<img style={{ height:'100%', width: '100%' }} src={'./../../../public/main/entradas.png'} alt={'foto'} />}
        </Grid>

        {bebidas.map((platillo: MenuPlatillo, index) =>{
          if(index <= 2){
            return <Platillo platillo={platillo}/>
          } else if(showFondo){
            return <Platillo platillo={platillo}/>
          }
        })}
        <Grid xs={1} sx={{ml: 2, mt:30}}>
        <Button
        variant="outlined"
        size="medium"
        onClick={handlerFondos}//ajustar bebidas
        sx={{color:'#121212', borderColor:'#121212'}}>
          {showFondo ? 'Ver menos' : 'Ver más'}
        </Button>
        </Grid>     
      </Grid>
    </Box>

  </Box>
  )
}

export default MainBody