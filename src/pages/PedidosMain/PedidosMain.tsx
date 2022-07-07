import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const PedidosMain = ({ user }: any) => {
  const navigate = useNavigate();

  useEffect(() =>{
    if(!user)navigate('/');
  },[])
  
  return (
    <div>PedidosMain</div>
  )
}

export default PedidosMain