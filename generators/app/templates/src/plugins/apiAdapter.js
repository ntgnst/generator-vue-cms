import Vue from 'vue';
import { authenticationApi } from '@/api';
import axios from 'axios';

const axiosInstance = axios.create();

const apiAdapter = adapter => {
  Vue.prototype.$api = {
    auth: authenticationApi(adapter)
  };
};

export default apiAdapter(axiosInstance);
