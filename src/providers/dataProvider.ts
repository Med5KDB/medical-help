import simpleRestProvider from "ra-data-simple-rest";
import { fetchUtils } from 'react-admin';


const httpClient = (url: any, options = {}) => {
  const token = localStorage.getItem('token');
  const user = { token: `Bearer ${token}`, authenticated: !!token };
  return fetchUtils.fetchJson(url, { ...options, user });
}

export const dataProvider = simpleRestProvider(import.meta.env.VITE_SIMPLE_REST_URL,
  httpClient
);
