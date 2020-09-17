import Vue from 'vue';
import Axios from 'axios';

const axiosInstance = Axios.create();

axiosInstance.interceptors.request.use(
  config => {
    // Do something before request is sent
    // console.log('request interceptor -> request about sending ...');

    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log('response interceptor -> response received ...');
    // console.log({ response });

    return response;
  },
  error => {
    // console.log('status code is not 2xx ...');

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

Vue.prototype.$axios = axiosInstance;
Vue.prototype.http = axiosInstance;

export default { axiosInstance };
