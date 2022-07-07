import React, { useEffect } from 'react'
import {
  Box, Toolbar, Typography,
  TextField, Button
} from '@mui/material';
import { useNavigate }from 'react-router-dom';
import { login } from  './../../services/servicesCoffee';
import decodeJWT from './../../functions/decodeJWT';

const LoginMain = ({setSession, setUser, session}: any) => {
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userFrom = data.get('User');
    const passwordFrom = data.get('Password');
    try{
      const session = await login(userFrom, passwordFrom);
      setSession(session);
      setUser(decodeJWT(session.access_token))
      window.localStorage.setItem('session', JSON.stringify(session));
      navigate('/pedidos');
    }catch(err){
      console.log("ERROR", err);
    }
  };

  useEffect(()=>{
    if(session) navigate('/')
  },[]);

  console.log('login',session)
  return (
    <Box component="main"
    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - 55px)` }, backgroundColor:'#EBF0E4' }}>

      <Toolbar />
      <Typography variant="h1" component="div" align='center'>
        Acceso Trabajadores
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
                id="User"
                label="User"
                name="User"
                autoComplete="User"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="Password"
                label="Password"
                type="Password"
                id="Password"
                autoComplete="current-Password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="success"
                sx={{ mt: 3, mb: 2 }}
              >
                Acceder
              </Button>
            </Box>
          </Box>

    </Box>
  )
}

export default LoginMain;