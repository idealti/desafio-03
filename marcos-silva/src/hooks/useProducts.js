import fakestoreapi from '@/axios/fakeStoreApi';

class Products {
  constructor(products) {
    this.products = products;
  }

  sortByQuery(query) {
    // this will match query in any value inside the object
    const checkValues = (product) => Object.values(product)
      .some((value) => value.toString().toLowerCase().includes(query));

    return this.products.filter((product) => checkValues(product));
  }

  sortbyRate(desc) {
    if (desc) {
      return [...this.products].sort((a, b) => b.rating.rate - a.rating.rate);
    }
    return [...this.products].sort((a, b) => a.rating.rate - b.rating.rate);
  }

  sortByRateCount() {
    return [...this.products].sort((a, b) => b.rating.count - a.rating.count);
  }

  sortByPrice(desc = '') {
    if (desc === 'desc') {
      return [...this.products].sort((a, b) => b.price - a.price);
    }
    return [...this.products].sort((a, b) => a.price - b.price);
  }
}

export default async function useProducts(amount, category, id) {
  let products;
  let error;
  const INCLUDE_AMOUNT = `${amount ? `?limit=${amount}` : ''}`;

  if (id) {
    try {
      const response = await fakestoreapi.get(`/${id}`);
      products = response.data;
    } catch (e) {
      error = e;
    }
  } else if (category) {
    try {
      const response = await fakestoreapi.get(`/category/${category}${INCLUDE_AMOUNT}`);
      products = response.data;
    } catch (e) {
      error = e;
    }
  } else {
    try {
      const response = await fakestoreapi.get(INCLUDE_AMOUNT);
      products = response.data;
    } catch (e) {
      error = e;
    }
  }

  if (error) return error;
  const productList = new Products(products);
  return [productList.products, productList];
}
