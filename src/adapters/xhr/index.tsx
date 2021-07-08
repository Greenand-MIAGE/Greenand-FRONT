import Axios from "axios";

const initializers = { withCredentials: true };
const BASE_API = "http://localhost:8080";

export const returnAxiosInstance = () => {
  return Axios.create(initializers);
};

export const get = (url) => {
  const axios = returnAxiosInstance();
  return axios.get(BASE_API + url);
};

export const post = (url, requestData) => {
  const axios = returnAxiosInstance();
  return axios.post(BASE_API + url, requestData);
};

export const put = (url, requestData) => {
  const axios = returnAxiosInstance();
  return axios.put(BASE_API + url, requestData);
};

export const deleteAxios = (url, requestData) => {
  const axios = returnAxiosInstance();
  return axios.delete(BASE_API+url, requestData);
}
