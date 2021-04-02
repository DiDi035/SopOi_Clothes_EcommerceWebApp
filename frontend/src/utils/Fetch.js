import axios from "axios";

export default {
  post: async function (url, data) {
    const res = await axios.post(url, data);
    return res;
  },
  get: async function (url, data) {
    const res = await axios.get(url, data);
    return res;
  },
};
