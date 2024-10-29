import { PRODUCTION_API_BASE_URL, DEVELOPMENT_API_BASE_URL } from '../constants';

export const getApiBaseUrl = () => {
  return process.env.NODE_ENV === 'development'
    ? DEVELOPMENT_API_BASE_URL
    : PRODUCTION_API_BASE_URL;
};