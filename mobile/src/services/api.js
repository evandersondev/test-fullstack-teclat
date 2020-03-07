import { AsyncStorage } from "react-native";
import axios from "axios";

const api = axios.create({
  // http://YOUR_IP:19000 - Device
  // HTTP://localhost:8080 - PC
  baseURL: "http://192.168.100.104:8080"
});

api.interceptors.request.use(async request => {
  const token = await AsyncStorage.getItem("token");

  if (token) {
    request.headers.authorization = `Bearer ${token}`;
  }

  return request;
});

export default api;
