import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://js-post-api.herokuapp.com/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // console.log(config);

    // vd: attach token to request is sent (dinh kem ma token khi gui Request)
    const accessToken = localStorage.getItem('access_token');

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    // truong hop Request la private
    // resource : /private/posts/
    // if (privateRequests && accessToken) {
    //   config.headers.Authorization = `Bearer ${accessToken}`;
    // }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    //defaut -  return response;

    // config chi lay phan data trong response
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (!error.response) throw new Error('Network error. Please try again later.');

    // redirect to login if not login
    if (error.response.status === 401) {
      // clear token, logout
      // ...
      window.location.assign('/login.html');
      return;
    }

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // return Promise.reject(error)
    throw new Error(error);
  }
);

export default axiosClient;
