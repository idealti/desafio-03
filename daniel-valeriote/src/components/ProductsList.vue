<template>
	<div class="products-list-container">
		<ul class="products-list">
			<ProductItem 
			v-for="product in products"
			:product="product"
			:key="product.id"
			/>
		</ul>
	</div>
</template>

<script setup>
	import ProductItem from './ProductItem.vue';
	const props = defineProps({products: Array});
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
</style>