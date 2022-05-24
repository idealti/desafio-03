<template>
	<SearchInput v-model="searchText"/>
	<TheLoader v-if="isLoading"/>
	<ProductsList v-else :products="filteredProducts"/>
</template>

<script setup>
import ProductsList from '../components/ProductsList.vue';
import TheLoader from './TheLoader.vue';
import SearchInput from './SearchInput.vue';

import filterProducts from '../utils/filterProducts';
import fetchProducts from '../utils/fetchProducts';
import {ref, onMounted, watch} from 'vue';

const products = ref([]);
const filteredProducts = ref([]);
const isLoading = ref(true);
const searchText = ref('');

const props = defineProps({
	urlPath: String
})

onMounted(() => {
	fetchProducts(`https://fakestoreapi.com/${props.urlPath}`)
		.then(res => {
			products.value = res;
			filteredProducts.value = res;
			isLoading.value = false;
		})
		.catch(err => console.error(err))
})

watch(searchText, () => {
	filteredProducts.value = filterProducts(searchText.value.toLowerCase(), products.value);
})
</script>