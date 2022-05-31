/* eslint-disable no-constructor-return */
/* eslint-disable no-underscore-dangle */
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
    // trying out singleton
    if (Products._instance) {
      return Products._instance;
    }
    Products.instance = this;
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
      return this;
    }

    this.list.sort((a, b) => a.rating.rate - b.rating.rate);
    return this;
  }

  sortByRateCount() {
    this.list.sort((a, b) => b.rating.count - a.rating.count);
    return this;
  }

  sortByPrice(desc = '') {
    if (desc === 'desc') {
      this.list.sort((a, b) => b.price - a.price);
      return this;
    }
    this.list.sort((a, b) => a.price - b.price);
    return this;
  }

  updateList(newProducts) {
    this.list = newProducts;
    return this;
  }
}

export default async function useProducts(amount, id) {
  let error = null;
  let productsList;
  let productsController;
  const isFetching = ref(true);
  const store = useStore();
  const category = computed(() => store.getters['search/getCategory']);
  const query = computed(() => store.getters['search/getQuery']);
  try {
    const initialProducts = await fetchProducts({ amount, id, category: category.value });
    productsController = reactive(new Products(initialProducts));
    productsController.sortByPrice();
    productsList = ref(productsController.list);
  } catch (e) {
    error = e;
    console.log(e);
  } finally {
    isFetching.value = false;
  }

  watch([category, query], async () => {
    try {
      isFetching.value = true;
      const newProducts = await fetchProducts({ amount, id, category: category.value });
      productsController.updateList(newProducts);
    } catch (e) {
      error = e;
      console.log(e);
    } finally {
      isFetching.value = false;
    }
  });

  watch(productsController, () => {
    productsList.value = productsController.filterByQuery(query.value);
  });

  return {
    productsController,
    productsList,
    error,
    isFetching,
  };
}
