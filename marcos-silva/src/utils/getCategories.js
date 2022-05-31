import fakestoreapi from '@/axios/fakeStoreApi';

export default async function getCategories() {
  try {
    const response = await fakestoreapi.get('/categories');
    return response.data;
  } catch (e) {
    return e;
  }
}
