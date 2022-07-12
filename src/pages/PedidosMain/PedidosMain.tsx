import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { getOrder, getUser, getMenu } from '../../services/servicesCoffee';
import { Box, Typography, Toolbar, Stack, 
  Avatar, Divider, Button, Grid, TextField} from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

  const PedidosMain = ({ user }: any) => {
    const [orders, setOrders] = useState([]);
    const [users, setUsers] = useState([]);
    const [menus, setMenus] = useState([]);

    const navigate = useNavigate();

    const getOrderData = async (tokenType: string, accessToken: string) => {
      const menu:[] = [];
      try {
      const getOrders = await getOrder(tokenType, accessToken);
      const getUsers = await getUser(tokenType, accessToken);
      const getMenus = await getMenu();
      const cloneMenus  = Object.values(getMenus);
      cloneMenus.forEach((platillos: any)=> platillos.forEach((platillo: any) => menu.push(platillo)));
      setOrders(getOrders);
      setUsers(getUsers);
      setMenus(menu);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() =>{
    if(!user)navigate('/');
    const tokenString:any = window.localStorage.getItem('session');
    if(tokenString){
      const {access_token: accessToken, token_type: tokenType} = JSON.parse(tokenString);
      getOrderData(tokenType, accessToken)
    }
  },[]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const table = data.keys();
  };

  return (
    <Box component="main"
    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - 55px)` }, backgroundColor:'#EBF0E4', }}>
    <Toolbar />
     <Grid sx={{width: '90%', ml: '3%', mb: '2%'}} container spacing={8}>
      
      {orders && orders.map((order:any )=> {
        const date = new Date(order.created_at).toUTCString().split(' ');
        const user = users.find((user:any )=> user.id === order.waiter);
        return (
        <Grid key={order.id} item xs={12} sm={5} m={1}>
          <Stack direction="row" spacing={1}>
            <Avatar alt="Remy Sharp" src={user.img} />
            <Typography variant="body2" sx={{ padding: 1, color: '#5E6600'}}>
              {user.name}
            </Typography>
            <Typography variant="body2" sx={{ padding: 1, color: '#5E6600', fontWeight: 'bold'}}>
            ∙
            </Typography>
            <Typography variant="body2" sx={{ padding: 1, color: '#5E6600'}}>
              {`${date[2]} ${date[1]}, ${date[3]} `}
            </Typography>
            <Typography variant="body2" sx={{ padding: 1, color: '#5E6600', fontWeight: 'bold'}}>
            ∙
            </Typography>
            <Typography variant="body2" sx={{ padding: 1, color: '#5E6600'}}>
              {date[4]}
            </Typography>
            <Typography variant="body2" sx={{ padding: 1, color: '#5E6600', fontWeight: 'bold'}}>
            ∙
            </Typography>
            <Typography variant="body2" sx={{ padding: 1, color: '#5E6600'}}>
            ID: {order.id}
            </Typography>
          </Stack>
          <Toolbar />
    
          <Box display='flex' flexDirection= 'column'>
          <Typography variant="h4">
            Mesa {order.table}
          </Typography>
          <Divider sx={{ mt: 2, mb:3}}/>
          {order.order.map((order: any, index: number) =>{
            const platillo = menus.find((menu: any) => menu.id=== order.product);
            return(
            <Typography key={index} variant="body1">
            {`${platillo.name} : ${order.quantity}`}
            </Typography>
            );
          })}
          </Box>
          <Toolbar />
          <Box ml={18} >
          <Button color="inherit" size="large" endIcon={<ArrowRightAltIcon />}  sx={{fontFamily: "Rufina"}}>
            Marcar como entregada
          </Button>
          </Box>
          </Grid>);
      })}
     </Grid>
     <Toolbar />
     <Toolbar />
      <Typography variant="h1" component="div" align='center'>
      Nuevo pedido
      </Typography>
      <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="Table"
                label="Mesa"
                name="Table"
                autoComplete="Mesa"
              />
              <TextField
                margin="normal"
                required
                name="Product"
                label="Producto"
                id="Product"
                autoComplete="Producto"
                sx={{ width: '70%', mr:2 }}
              />
              <TextField
                margin="normal"
                required
                name="Quantity"
                label="Cantidad"
                id="Quantity"
                autoComplete="Cantidad"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="success"
                sx={{ mt: 3, mb: 2 }}
              >
                Crear pedido
              </Button>
            </Box>
          </Box>
    </Box>
  )
}

export default PedidosMain