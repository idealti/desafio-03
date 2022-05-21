<template>
	<div class="products-list-container">
		<ul class="products-list">
			<ProductItem 
			v-for="product in products"
			:title="product.title"
			:img="product.image"
			:price="product.price"
			:rating="product.rating"
			:id="product.id"
			:key="product.id"
			/>
		</ul>
	</div>
</template>

<script>
import ProductItem from './ProductItem.vue'
export default {
	props: {
		products: Array
	},
	components: {
		ProductItem
	}
}
</script>

<style>
.products-list {
	display: flex;
	gap: 20px;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
}
@media screen and (max-width: 535px) {
	.product-item {
		min-width: 220px;
		max-width: 350px;
	}
	.products-list {
		margin: 5px
	}
}

</style>