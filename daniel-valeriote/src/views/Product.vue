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
		return {
			product: undefined,
			isLoading: true,
			hasError: false
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