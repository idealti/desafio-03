<template>
	<SearchInput v-model="searchText" v-show="!isLoading && !hasError"/>
	<TheLoader v-if="isLoading"/>
	<NotFound customMessage="Erro, Produtos não encontrados." :backHomeBtn="false" v-else-if="hasError"/>
	<ProductsList v-else-if="products" :products="filteredProducts"/>
	<TemporaryModal v-show="modalActive">Produto adicionado ao carrinho.</TemporaryModal>
</template>

<script setup>
import ProductsList from '../components/ProductsList.vue';
import TheLoader from './TheLoader.vue';
import SearchInput from './SearchInput.vue';
import NotFound from '../views/NotFound.vue';
import TemporaryModal from './FeedbackModal.vue';

import filterProducts from '../utils/filterProducts';
import fetchProducts from '../utils/fetchProducts';
import {ref, onMounted, watch} from 'vue';

const products = ref([]);
const filteredProducts = ref([]);
const isLoading = ref(true);
const hasError = ref(false);
const searchText = ref('');
const modalActive = ref(false);

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
		.catch(err => {
			console.error(err)
			hasError.value = true;
			isLoading.value = false
		})
})

watch(searchText, () => {
	filteredProducts.value = filterProducts(searchText.value.toLowerCase(), products.value);
})
</script>