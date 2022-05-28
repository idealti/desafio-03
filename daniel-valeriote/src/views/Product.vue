<template>
	<TheLoader v-if="isLoading"/>
	<DetailedProduct v-else-if="product" :product="product" @addToCart="openModal"/>
	<NotFound v-if="hasError" customMessage="Produto não encontrado."/>
	<FeedbackModal :open="isModalOpen">Produto adicionado ao carrinho de compras</FeedbackModal>
</template>

<script>
import fetchProduct from '../utils/fetchProducts';
import TheLoader from '../components/TheLoader.vue';
import DetailedProduct from '../components/DetailedProduct.vue';
import NotFound from './NotFound.vue';
export default {
	data() {
		return {
			product: undefined,
			isLoading: true,
			hasError: false
		}
	},
	mounted() {
		const id = this.$route.params.id
		fetchProduct('https://fakestoreapi.com/products/' + id)
			.then(res => {
				if(!res) this.hasError = true;
				else {
					this.product = res;
					if(res.title) document.title = res.title.trim()
				} 
				this.isLoading = false;
			})
			.catch(err => {
				console.error(err)
				this.hasError = true;
				this.isLoading = false;
			})
	},
	components: {
		TheLoader,
		DetailedProduct,
		NotFound
	}
}
</script>

<script setup>
// modal logic
import FeedbackModal from '../components/FeedbackModal.vue';
import {ref} from 'vue';
const isModalOpen = ref(false);

function openModal () {
	isModalOpen.value = true;
	setTimeout(() => {
		isModalOpen.value = false;
	}, 1350)
}
</script>