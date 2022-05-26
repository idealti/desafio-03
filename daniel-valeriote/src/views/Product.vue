<template>
	<TheLoader v-if="isLoading"/>
	<DetailedProduct v-else-if="product" :product="product"/>
	<NotFound v-if="hasError" customMessage="Produto não encontrado."/>
</template>

<script>
import fetchProducts from '../utils/fetchProducts';
import TheLoader from '../components/TheLoader.vue';
import DetailedProduct from '../components/DetailedProduct.vue';
import NotFound from './NotFound.vue';
export default {
	data() {
		let product;
		let isLoading = true;
		let hasError = false;
		return {
			product,
			isLoading,
			hasError
		}
	},
	mounted() {
		const id = this.$route.params.id
		fetchProducts('https://fakestoreapi.com/products/' + id)
			.then(res => {
				if(!res) {
					this.hasError = true;
				} 
				else this.product = res;
				this.isLoading = false;
			})
			.catch(err => {
				console.error(err)
				this.hasError = true;
				console.log('has errore')
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