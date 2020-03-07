import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080"
});

api.interceptors.request.use(request => {
  const token = localStorage.getItem("token");

  if (token) {
    request.headers.authorization = `Bearer ${token}`;
  }

  return request;
});

export default api;
