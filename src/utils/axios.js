import axios from "axios";

const api = axios.create({
  baseURL: "http://3.237.176.222:8800",
  // baseURL: process.env.REACT_APP_API_URL,
  // withCredentials: true,
  // headers: {
  //   "Content-type": "application/json",
  //   Accept: "application/json",
  // },
});

export default api;
