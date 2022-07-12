import axios, {AxiosResponse} from 'axios';

const URL = 'https://maf2qxs1f6.execute-api.us-east-1.amazonaws.com/prod/';

const login = async (user: any, password: any) => {
   const body = {
      client_id: user,
      client_secret: password,
      audience: "https://escalab.academy",
      grant_type: "client_credentials"
  };
   const { data } = await axios.post(`${URL}oauth/token`, body);
   return data;
};

const getMenu = () => {
   return axios.get(`${URL}api/menus`)
      .then((response: AxiosResponse) => response.data)
};

const getUser = async (tokenType:string, accessToken:string) => {
   const headers:{} = {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `${tokenType} ${accessToken}`
   };
   const { data } = await axios.get(`${URL}api/users`, {headers});
   return data;
};

const getOrder = async (tokenType:string, accessToken:string) => {
   const headers:{} = {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `${tokenType} ${accessToken}`
   };
   const { data } = await axios.get(`${URL}api/orders`, {headers});
   return data;
};

const postOrder = async (tokenType:string, accessToken:string, body:any) => {
   const headers:{} = {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `${tokenType} ${accessToken}`
   };
   const { data } = await axios.put(`${URL}api/orders`,  body, {headers});
   return data;
};

export {
   getMenu,
   login,
   getUser,
   getOrder,
   postOrder
};