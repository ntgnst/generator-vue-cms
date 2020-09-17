const authenticationApi = axios => ({
  login({ email, password }) {
    console.log('test');

    return axios.post(process.env.VUE_APP_TEST_API_URL, { email, password });
  }
});

export default authenticationApi;
