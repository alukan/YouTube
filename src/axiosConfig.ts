import axios from 'axios';

const baseURL = 'http://localhost:3001';

const axiosInstance = axios.create({
    baseURL: baseURL,
});

export default axiosInstance;
//eslint-disable-next-line
export const isAxiosError = (error : any) => { return axios.isAxiosError(error) };
