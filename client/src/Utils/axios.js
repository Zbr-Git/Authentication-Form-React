import axios from "axios";

const ApiRequest = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
  timeout: 1000,
});

export default ApiRequest;
 