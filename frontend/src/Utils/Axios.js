import axios from "axios";

const createAxios = (baseUrl) => {
  return axios.create({
    baseURL: baseUrl,
  });
};

const productApi = createAxios("https://fakestoreapi.com/products");

export { productApi };
