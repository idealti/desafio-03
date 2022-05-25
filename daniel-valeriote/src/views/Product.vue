<template>
	<TheLoader v-if="isLoading"/>
	<DetailedProduct v-else-if="product" :product="product"/>
</template>

<script>
import fetchProducts from '../utils/fetchProducts';
import TheLoader from '../components/TheLoader.vue';
import DetailedProduct from '../components/DetailedProduct.vue';
export default {
	data() {
		let product = {};
		let isLoading = true;
		return {
			product,
			isLoading
		}
	},
	mounted() {
		const id = this.$route.params.id
		fetchProducts('https://fakestoreapi.com/products/' + id)
			.then(res => {
				this.isLoading = false;
				this.product = res
			})
	},
	components: {
		TheLoader,
		DetailedProduct
	}
}
</script>