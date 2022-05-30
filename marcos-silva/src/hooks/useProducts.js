import {
  computed,
  reactive,
  ref,
  watch,
} from 'vue';
import { useStore } from 'vuex';
import fetchProducts from '@/utils/getProducts';

class Products {
  constructor(products) {
    this.list = products;
  }

  filterByQuery(query) {
    // this will match query in any value inside the object
    const checkValues = (product) => Object.values(product)
      .some((value) => value.toString().toLowerCase().includes(query));

    return this.list.filter((product) => checkValues(product));
  }

  sortbyRate(desc = '') {
    if (desc) {
      this.list.sort((a, b) => b.rating.rate - a.rating.rate);
      return;
    }
    this.list.sort((a, b) => a.rating.rate - b.rating.rate);
  }

  sortByRateCount() {
    this.list.sort((a, b) => b.rating.count - a.rating.count);
  }

  sortByPrice(desc = '') {
    if (desc === 'desc') {
      this.list.sort((a, b) => b.price - a.price);
      return;
    }
    this.list.sort((a, b) => a.price - b.price);
  }

  updateList(newProducts) {
    this.list = newProducts;
  }
}

export default async function useProducts(amount, id) {
  let error;
  const isLoading = ref(true);
  const store = useStore();
  const category = computed(() => store.getters['search/getCategory']);
  const query = computed(() => store.getters['search/getQuery']);
  const productsInstance = reactive(new Products(
    await fetchProducts({ amount, id, category: category.value }),
  ));
  const queryFilteredProducts = ref(productsInstance.list);

  productsInstance.sortByPrice();

  if (error) return error;
  isLoading.value = false;

  watch([category, query], async () => {
    isLoading.value = true;

    const newProducts = await fetchProducts({ amount, id, category: category.value });
    productsInstance.updateList(newProducts);
    isLoading.value = false;
  });

  watch(productsInstance, () => {
    queryFilteredProducts.value = productsInstance.filterByQuery(query.value);
  });

  return {
    queryFilteredProducts,
    products: productsInstance,
    query,
    category,
    isLoading,
  };
}
