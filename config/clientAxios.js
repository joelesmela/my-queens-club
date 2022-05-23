import axios from 'axios';
import { GetLocalStorage } from '../helper/GetLocalStorage';

const token = GetLocalStorage('accessToken');

const clientAxios = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    accessToken: token,
  },
});
export default clientAxios;
