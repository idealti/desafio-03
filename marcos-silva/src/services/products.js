import axios from 'axios';

const fakestoreapi = axios.create({
  baseURL: 'https://fakestoreapi.com/products',
});

export default {
  fetch: {
    getAll: async () => {
      try {
        const response = await fakestoreapi.get();
        return response.data;
      } catch (e) {
        return e;
      }
    },
    getOne: async (id) => {
      try {
        const response = await fakestoreapi.get(`/${id}`);
        return response.data;
      } catch (e) {
        return e;
      }
    },
    getAllFromCategory: async (category) => {
      try {
        const response = await fakestoreapi.get(`/${category}`);
        return response;
      } catch (e) {
        return e;
      }
    },
  },
  sort: {
    sortbyRate: (products) => {
      products.sort((a, b) => b.rating.rate - a.rating.rate);
      return products;
    },
    sortByRateCount: (products) => {
      products.sort((a, b) => b.rating.count - a.rating.count);
      return products;
    },
    sortByPrice: (products) => {
      products.sort((a, b) => b.price - a.price);
      return products;
    },
  },
};
