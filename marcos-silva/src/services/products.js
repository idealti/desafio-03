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
        if (amount == null) {
          const response = await fakestoreapi.get(`/category/${category}`);
          console.log(`/category/${category}`);
          // console.log(response);
          return response.data;
        }

        if (amount > 1) {
          const response = await fakestoreapi.get(`/category/${category}?limit/${amount}`);
          return response.data.slice(0, amount);
        }

        const response = await fakestoreapi.get(`/category/${category}?limit/1`);
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
    sortByQuery: (products, query) => {
      // this will match query in any value inside the object
      const checkValues = (product) => Object.values(product)
        .some((value) => value.toString().toLowerCase().includes(query));

      return products.filter((product) => checkValues(product));
    },
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
