import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3301",
});

export default api;
