<template>
	<ul class="cart-products-list">
		<CartProductItem v-for="product in products" :product="product" :key="product.id" @removeFromCart="openModal"/>
	</ul>
	<FeedbackModal :open="isModalOpen">
		<template v-slot:icon>
			<CloseCircle :size="45" />
		</template>
		Produto removido do carrinho de compras
	</FeedbackModal>
</template>
<script setup>
	import {ref} from 'vue';
	import CartProductItem from './CartProductItem.vue';
	import FeedbackModal from './FeedbackModal.vue';
	import CloseCircle from 'vue-material-design-icons/CloseCircle.vue';
	defineProps({products: Array});
	const isModalOpen = ref(false);

	function openModal () {
		isModalOpen.value = true;
		setTimeout(() => {
			isModalOpen.value = false;
		}, 1350)
	}
</script>