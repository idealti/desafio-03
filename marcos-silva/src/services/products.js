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
    getProductFromCategory: async (category, amount) => {
      try {
        const response = await fakestoreapi.get(`/category/${category}${amount ? `?limit/${amount}` : ''}`);

        if (amount > 1) return response.data.slice(0, amount);

        return response.data[0];
      } catch (e) {
        return e;
      }
    },
    getCategories: async () => {
      try {
        const response = await fakestoreapi.get('/categories');
        return response.data;
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
