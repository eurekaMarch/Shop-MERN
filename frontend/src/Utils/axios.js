import axios from "axios";

const createAxios = (baseUrl) => {
  return axios.create({
    baseURL: baseUrl,
  });
};

const productApi = createAxios("https://fakestoreapi.com/");
const mongoDBApi = createAxios("http://localhost:5000/api/");

export { productApi, mongoDBApi };
