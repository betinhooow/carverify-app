import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'https://localhost:44339/api/',
  // baseURL: 'http://localhost:7777/api/',
});

export default instance;
