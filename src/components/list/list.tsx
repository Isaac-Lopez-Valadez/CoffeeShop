import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom'
import {
  List, ListItem, ListItemIcon, ListItemText,
  ListItemButton, Divider, Drawer, Toolbar
} from '@mui/material';

import CoffeeIcon from '@mui/icons-material/Coffee';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const drawerWidth = 240;

interface Props{
  setEventOpen: any
  eventOpen:boolean
  user:any
}

const Listas = ({setEventOpen, eventOpen, user}: Props) => {
 const [rol, setRol] = useState(null);
 let open = eventOpen;
 const navigate = useNavigate();

 const handleDrawerToggle = () => {
  setEventOpen(!eventOpen);
 };
 const handleClick = (path:string) => {
  navigate(`/${path}`);
 }
 useEffect(()=>{
  if(user){
    const {roles} = user;
    setRol(roles[0]);
  }else{
    setRol(null)
  }
 });
  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
      }}
    >
    <Toolbar sx={{backgroundColor:'#e0e0e0'}}/>
    <Divider />
    <List sx={{backgroundColor:'#e0e0e0', height:'100%'}}>
      <ListItem disablePadding>
        <ListItemButton
        onClick={() => handleClick('menu')}>
          <ListItemIcon>
            <CoffeeIcon />
          </ListItemIcon>
          <ListItemText primary={'Menú'} />
        </ListItemButton>
      </ListItem>
      {(rol === 'admin' || rol === 'user') && <ListItem disablePadding>
        <ListItemButton
        onClick={() => handleClick('pedidos')}>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary={'Pedidos'} />
        </ListItemButton>
      </ListItem>
      }
      {(rol === 'admin') && <ListItem disablePadding>
        <ListItemButton
        onClick={() => handleClick('usuarios')}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary={'Usuarios'} />
        </ListItemButton>
      </ListItem>
      }
    </List>
    <Divider />
  </Drawer>
  )
}

export default Listas;