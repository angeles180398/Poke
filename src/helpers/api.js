/*Importamos axios, 
es una libreria que nos permite realizar llamadas API REST[(get, post, delete, put, patch, head, all, spread)] 
con retorno JSON.
*/
import axios from "axios";


//Creamos una constante llamada api , que es  igual al enpdpoint base para nuestras llamadas
//Como vamos a usar diferentes endpoints esta constante nos ayudará a no repetir código

export const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/"
  ,
});


//Es un ejemplo de una constante más completa 
export const myAxios = ({method, url, }) => {
  return axios({
    baseURL: "https://pokeapi.co/api/v2/",
    method,
    url,
  });
};

export default api;