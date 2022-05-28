<template>
	<div class="products-list-container">
		<ul class="products-list">
			<ProductItem 
			v-for="product in products"
			:product="product"
			:key="product.id"
			@addToCart="openModal"
			/>
		</ul>
	</div>
	<FeedbackModal :open="isModalOpen" @closeModal="isModalOpen = false">Produto adicionado ao carrinho de compras</FeedbackModal>
</template>

<script setup>
	import {ref} from 'vue';
	import ProductItem from './ProductItem.vue';
	import FeedbackModal from './FeedbackModal.vue';
	defineProps({products: Array});
	const isModalOpen = ref(false)
	function openModal () {
		isModalOpen.value = true;
		// closes modal after 2 seconds
		setTimeout(() => {
			isModalOpen.value = false;
		}, 1350)
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
</style>