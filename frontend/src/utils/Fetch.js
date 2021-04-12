import axios from "axios";

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  const token = localStorage.getItem("auth-token");
  if (token) config.headers["auth-token"] = token;
  return config;
});

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
export const post = (url, data) => {
  return axios.post(url, data);
};
export const get = (url, data) => {
  return axios.get(url, data);
};
