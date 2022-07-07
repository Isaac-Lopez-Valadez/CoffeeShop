import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {ThemeProvider} from '@mui/system';
import { Box } from '@mui/material';
import theme from './themeConfig';

import Menu from './components/menu/menu-component'
import Listas from './components/list/list';
import Header from './components/header/header-componet';
import NotFound from './components/notFound/notFound-componet';

import MenuMain from './pages/MenuMain/MenuMain';
import LoginMain from './pages/LoginMain/LoginMain';
import PedidosMain from './pages/PedidosMain/PedidosMain';
import UsuariosMain from './pages/UsuariosMain/UsuariosMain';
import decodeJWT from './functions/decodeJWT';

function App() {
  const [eventOpen, setEventOpen] = useState(false);
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(()=>{
    const sessionJSON = window.localStorage.getItem('session');
    if(sessionJSON){
      const session = JSON.parse(sessionJSON);
      setUser(decodeJWT(session.access_token));
      setSession(session);
    }
  }, []);
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Menu setEventOpen={setEventOpen} eventOpen={eventOpen} session={session} setSession={setSession} setUser={setUser}/>
        <Listas setEventOpen={setEventOpen} eventOpen={eventOpen} user={user} />

        <Routes>
          <Route path='/' element={<Header path={'menu'}/>}/>
          <Route path='/menu' element={<Header path={'menu'}/>}/>
          <Route path='/pedidos' element={<Header path={'pedidos'}/>}/>
          <Route path='/usuarios' element={<Header path={'usuarios'}/>}/>
          <Route path='/iniciar-sesion' element={<Header path={'iniciar-sesion'}/>}/>
          <Route path='/*' element={<NotFound />} />
        </Routes>

        <Routes>
          <Route path='/' element={<MenuMain />}/>
          <Route path='/menu' element={<MenuMain />}/>
          <Route path='/pedidos' element={<PedidosMain user={user}/>}/>
          <Route path='/usuarios' element={<UsuariosMain user={user}/>}/>
          <Route path='/iniciar-sesion' element={<LoginMain setSession={setSession} setUser={setUser} session={session}/>}/>

        </Routes>

      </Box>
    </ThemeProvider>
    </BrowserRouter>
    
  )
}

export default App
