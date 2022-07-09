import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { getOrders } from '../../services/servicesCoffee';

const PedidosMain = ({ user }: any) => {
  const navigate = useNavigate();
  const ordersFunction = async (tokenType: string, accessToken: string) => {
    try {
    const getUsers = await getOrders(tokenType, accessToken);
    console.log(getUsers);
    } catch (e) {
      console.log(e);
  }
};

  useEffect(() =>{
    if(!user)navigate('/');
    const tokenString:any = window.localStorage.getItem('session');
    if(tokenString){
      const {access_token: accessToken, token_type: tokenType} = JSON.parse(tokenString);
      ordersFunction(tokenType, accessToken)
    }
  },[])
  
  return (
    <div>PedidosMain</div>
  )
}

export default PedidosMain