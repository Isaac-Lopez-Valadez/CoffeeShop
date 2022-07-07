import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const UsuariosMain = ({user}:any) => {
  const navigate = useNavigate();

  useEffect(() =>{
    if(user){
      if(user.roles[0] !== 'admin') navigate('/')
    }else{navigate('/')}
  },[]) 

  return (
    <div>UsuariosMain</div>
  )
}

export default UsuariosMain