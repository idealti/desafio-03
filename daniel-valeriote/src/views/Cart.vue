<template>
	<div>
		<h1 class="page-title">Meu Carrinho</h1>
		<TheCartProductsList  v-show="products.length > 0" :products="products"/>
		<h2 v-if="products.length == 0" class="empty-cart-message">O carrinho está vazio.</h2>
	</div>

</template>

<script setup>
	import TheCartProductsList from '../components/TheCartProductsList.vue';
	import {ref} from 'vue';
	import { useCartStore } from "../store/cart";
	const cart = useCartStore();
	const products = ref(cart.products);
</script>

<style scoped>
	.page-title {
		text-transform: uppercase;
		font-size: 1.4rem;
		font-weight: 600;
		text-align: center;
		border-bottom: 1px solid rgba(0,0,0,0.3);
	}
	.empty-cart-message {
		font-weight: normal;
		color: gray;
	}
	.page-title, .empty-cart-message {
		text-align: center;
		padding: 20px 0px;
	}
</style>