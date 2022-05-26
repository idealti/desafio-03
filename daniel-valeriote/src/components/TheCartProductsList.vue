<template>
	<ul class="cart-products-list">
		<CartProductItem v-for="product in products" :product="product" :key="product.id"/>
	</ul>
</template>
<script setup>
	import CartProductItem from './CartProductItem.vue';
	defineProps({products: Array})
</script>