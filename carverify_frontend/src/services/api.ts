import { APIResponse, AxiosAPI } from '../types/AxiosAPi';
import instance from './axios';

const API = (): AxiosAPI => {
  return {
    get: (path: string): Promise<APIResponse> => {
      return new Promise((resolve, reject) => {
        document.body.classList.add('loading');
        instance
          .get(path)
          .then(data => {
            document.body.classList.remove('loading');
            resolve(data);
          })
          .catch(error => {
            document.body.classList.remove('loading');
            reject(error.data);
          });
      });
    },
  };
};
export default API();
