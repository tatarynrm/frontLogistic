import axios from "axios";

const api = axios.create({
  baseURL: "https://api.tatarynmira.pp.ua",

  // baseURL: process.env.REACT_APP_API_URL,
  // withCredentials: true,
  // headers: {
  //   "Content-type": "application/json",
  //   Accept: "application/json",
  // },
});

export default api;
