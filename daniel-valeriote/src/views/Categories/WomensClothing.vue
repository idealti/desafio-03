<template>
	<h1>Moda Feminina</h1>
	<TheLoader v-if="isLoading"/>
	<ProductsList v-else :products="products"/>
</template>

<script setup>
import ProductsList from '../../components/ProductsList.vue';
import TheLoader from '../../components/TheLoader.vue';
import fetchProducts from '../../utils/fetchProducts';
import {ref, onMounted} from 'vue';

const products = ref([]);
const isLoading = ref(true);
onMounted(() => {
	fetchProducts("https://fakestoreapi.com/products/category/women's clothing")
		.then(res => {
			products.value = res;
			isLoading.value = false;
		})
		.then(err => console.error(err.error))
})
</script>