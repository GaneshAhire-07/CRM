import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000", // backend चालतंय तिथं URL टाका
});

// जर token हेडरमध्ये आपोआप लावायचा असेल:
API.interceptors.request.use((req) => {
  const token = sessionStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
