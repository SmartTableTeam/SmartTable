import axios from 'axios';

export const GET_USER = 'GET_USER'
const LOGIN_URL = '/api/auth/login'



export function loginUser(obj){
  console.log(obj);
  const request = axios.post(`${LOGIN_URL}`, obj)
  return {
    type: GET_USER,
    payload: request
  }
}
