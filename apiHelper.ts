import axios from 'axios';
import { navigate } from './src/navigation/navigationReference';

const API_URL: any = '';

const api = axios.create({
  baseURL: API_URL, // your backend URL
  timeout: 10000, // optional
});

api.interceptors.response.use(
  (response) => {
    // Any custom response handling
    return response;
  },
  (error) => {
    // Handle errors globally
    if (error.response?.status === 400 ) {
        logoutFunction();
        navigate('LoginScreen')
      // Example: redirect to login
    }
    return Promise.reject(error);
  }
);

const logoutFunction=  async()=>{
    try {
    console.log('User signed out!');
  } catch (error) {
    console.error('Error signing out: ', error);
  } 
} 
// Debounce function
export const debounce = (func: any, timeout: any) => {
    let timer: any;

    return (...args: any) => {
        clearTimeout(timer);
        // New promise is basically used to perform Asynchronous or synchronous operations
        return new Promise((resolve, reject) => {
            // It give us 2 parameter resolve and reject both of them perform async asynchronous operations resolve is used on succes while reject on error
            timer = setTimeout(async () => {
                try {
                    const result = await func(...args);
                    resolve(result);
                } catch (error) {
                    reject(error); // Propagate the error to the caller
                }
            }, timeout);
        });
    };
};

// API functions
export const getApi = async (url: any, config: any) => {
    return await api.get(url, config);
};

export const postApi = async (url: any, data: any, config: any) => {
    return await api.post(url, data, config);
};

export const deleteApi = async (url: any) => {
    return await api.delete(url);
};

export const allApi = async (url: Array<any>) => {
    return await axios.all(url);
};
