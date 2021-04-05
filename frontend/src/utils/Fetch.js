import axios from "axios";

export default {
  post: function (url, data) {
    return axios.post(url, data);
  },
  get: function (url, data) {
    return axios.get(url, data);
  },
};
