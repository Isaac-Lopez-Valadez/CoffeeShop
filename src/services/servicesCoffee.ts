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
} 

const getMenu = () => {
   return axios.get(`${URL}api/menus`)
      .then((response: AxiosResponse) => response.data)
};

export {
   getMenu,
   login
};