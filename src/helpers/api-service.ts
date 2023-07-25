import axios from 'axios';
import { SERVICES_URL } from '@/config/service.config';
import authService from '@/features/auth/service';

export const get = (path: string, withToken?: boolean | undefined) => {
  const token = authService.getToken();
  const url = SERVICES_URL + path;
  const config =
    withToken && token
      ? {
          headers: {
            'x-access-token': token
          }
        }
      : {};

  return axios.get(url, config);
};

export const getWithToken = (path: string) => get(path, true);

export const post = (
  path: string,
  data: any,
  withToken?: boolean | undefined
) => {
  const token = authService.getToken();
  const config =
    withToken && token
      ? {
          headers: {
            'x-access-token': token
          }
        }
      : {};

  return axios.post(path, data, config);
};

export const put = (
  path: string,
  data: any,
  fullPath?: boolean | undefined,
  withToken?: boolean | undefined
) => {
  const token = authService.getToken();
  const url = fullPath ? path : SERVICES_URL + path;
  const config =
    withToken && token
      ? {
          headers: {
            'x-access-token': token
          }
        }
      : {};

  return axios.put(url, data, config);
};

export const apiDelete = (path: string, withToken?: boolean | undefined) => {
  const token = authService.getToken();
  const url = SERVICES_URL + path;
  const config =
    withToken && token
      ? {
          headers: {
            'x-access-token': token
          }
        }
      : {};

  return axios.delete(url, config);
};
