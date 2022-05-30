import fakestoreapi from '@/axios/fakeStoreApi';

export default async function fetchProducts({ category, id, amount }) {
  const INCLUDE_AMOUNT = `${amount ? `?limit=${amount}` : ''}`;
  if (id) {
    try {
      const response = await fakestoreapi.get(`/${id}`);
      return [response.data];
    } catch (e) {
      return e;
    }
  } else if (category) {
    try {
      const response = await fakestoreapi.get(`/category/${category}${INCLUDE_AMOUNT}`);
      return response.data;
    } catch (e) {
      return e;
    }
  } else {
    try {
      const response = await fakestoreapi.get(INCLUDE_AMOUNT);
      return response.data;
    } catch (e) {
      return e;
    }
  }
}
