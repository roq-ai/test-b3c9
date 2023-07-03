import axios from 'axios';
import queryString from 'query-string';
import { AppInterface, AppGetQueryInterface } from 'interfaces/app';
import { GetQueryInterface } from '../../interfaces';

export const getApps = async (query?: AppGetQueryInterface) => {
  const response = await axios.get(`/api/apps${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createApp = async (app: AppInterface) => {
  const response = await axios.post('/api/apps', app);
  return response.data;
};

export const updateAppById = async (id: string, app: AppInterface) => {
  const response = await axios.put(`/api/apps/${id}`, app);
  return response.data;
};

export const getAppById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/apps/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteAppById = async (id: string) => {
  const response = await axios.delete(`/api/apps/${id}`);
  return response.data;
};
