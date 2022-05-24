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
import ProductItem from './ProductItem.vue';
export default {
	props: {
		products: Array
	},
	components: {
		ProductItem,
	}
}
</script>

<style>
.products-list-container {
	margin: 25px 0px 50px 0px;
	padding: 25px;
}
.product-title {
	padding: 0px 5px;
}
.products-list {
	display: grid;
	gap: 25px;
	grid-template-columns:repeat(auto-fill,minmax(240px,1fr));
	margin: 0 auto;
}
@media screen and (max-width: 535px) {
	.products-list {
		margin: 5px
	}
}

</style>