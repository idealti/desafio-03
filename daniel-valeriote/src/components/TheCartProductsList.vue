<template>
<ul class="cart-products-list">
	<CartProductItem v-for="product in products" :product="product" :key="product.id" @removeFromCart="openModal"/>
</ul>
<div class="total-price" v-if="products.length">
	Total: <b>R${{totalPrice}}</b>
</div>
<FeedbackModal :open="isModalOpen">
	<template v-slot:icon>
		<CloseCircle :size="45" />
	</template>
	Produto removido do carrinho de compras
</FeedbackModal>
</template>
<script setup>
	import {ref, computed} from 'vue';
	import CartProductItem from './CartProductItem.vue';
	import FeedbackModal from './FeedbackModal.vue';
	import CloseCircle from 'vue-material-design-icons/CloseCircle.vue';
	const props = defineProps({products: Array});
	const isModalOpen = ref(false);
	const totalPrice = computed(() => {
		return props.products.reduce((acc, curr) => acc+= (curr.price * curr.count), 0)
			.toLocaleString(undefined, {minimumFractionDigits: 2})
	});

	function openModal () {
		isModalOpen.value = true;
		setTimeout(() => isModalOpen.value = false, 1350);
	}
</script>

<style>
.total-price {
	text-align: center;
	padding: 50px;
	font-size: 1.2rem;
}
</style>