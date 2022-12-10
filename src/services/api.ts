
import axios from 'axios';
import { userI } from '../models/userInterface';

export const registerUser = (user: userI) => {
    const controller = new AbortController()
  return {
    call: axios.post<userI>('http://localhost:5000/users', user)
  };
};
export const getData = () =>{
    return axios.get<userI[]>('http://localhost:5000/users').then(res => { return res.data})
}
export const getCoolMorty = () => {
    const controller = new AbortController()
  return { call: axios.get<userI[]>('https://rickandmortyapi.com/api/character/2', { signal: controller.signal }), controller };
};

export const getCoolRick = () => {
const controller = new AbortController()
  return { call: axios.get<userI>('https://rickandmortyapi.com/api/character/1', { signal: controller.signal }), controller };
};
