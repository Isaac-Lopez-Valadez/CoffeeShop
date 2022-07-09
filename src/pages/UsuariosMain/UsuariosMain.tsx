import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { getUser } from './../../services/servicesCoffee';
import { Box, Typography, Toolbar} from '@mui/material';
import { height } from '@mui/system';

interface User{
  id: number
  name: string
  username: string
  birthday: number
  email: string
  phone: string
  roles: [string]
  img: string
}

const UsuariosMain = ({user}:any) => {
  const navigate = useNavigate();
  const [users, setUsert] = useState ([]);

  const userFunction = async (tokenType: string, accessToken: string) => {
    try {
    const getUsers = await getUser(tokenType, accessToken);
    setUsert(getUsers);
    } catch (e) {
      console.log(e);
  }
};

  useEffect(() =>{
    if(user){
      if(user.roles[0] !== 'admin') navigate('/')
    }else{navigate('/')}
    const tokenString:any = window.localStorage.getItem('session');
    if(tokenString){
      const {access_token: accessToken, token_type: tokenType} = JSON.parse(tokenString);
      userFunction(tokenType, accessToken)
    }

  },[]) 

  return (
    <Box component="main"
    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - 55px)` }, backgroundColor:'#EBF0E4', }}>
      <Toolbar />
      {users && users.map((user: User) => {
        const date = new Date(user.birthday).toUTCString().substring(0,16);
        return (
        <Box key={user.id} sx={{ display: 'flex', flexDirection: 'row', height:'70%', width: { sm: `calc(70% - 55px)`}, ml: '5%', mb: '2%'}} >
        {<img style={{ height:'25%', width: '25%' }} src={`${user.img}`} alt={'foto'} />}
        <Box ml={12}>
          <Typography variant="h4" component="div">
            {user.name}
          </Typography>
          <Typography variant="h4" component="div">
            {user.roles[0]} 
          </Typography>
          <Typography variant="h4" component="div">
           Cumpleaños: {date}
          </Typography>
          <Typography variant="h4" component="div" color='#9CAA00'>
            {user.email}
          </Typography>
          <Typography variant="h4" component="div" color='#9CAA00'>
            {user.phone}
          </Typography>
        </Box>
      </Box>
      )}
      )}
      

    </Box>
  )
}

export default UsuariosMain