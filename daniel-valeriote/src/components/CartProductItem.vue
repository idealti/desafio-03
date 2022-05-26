<template>
<li class="cart-product-item">
	<img class="cart-product-image" :src="product.image" :alt="product.title">
	<h3 class="cart-product-title">{{product.title}}</h3>
	<div class="price-container">
		<h4 class="product-count-and-price">{{product.count}}x R$ {{treatedPrice}}</h4>
		<h4 class="product-total">Total: <b>R$ {{total}}</b></h4>
	</div>
	<div class="buttons">
		<div class="change-count-buttons">
			<button class="change-count-btn" @click="cart.decreaseProductCount(product.id)">-</button>
			{{product.count}}
			<button class="change-count-btn" @click="cart.increaseProductCount(product.id)">+</button>
		</div>
		<button class="remove-product-btn" @click="cart.removeProduct(product.id)"><DeleteIcon /></button>
	</div>
</li>
</template>

<script setup>
import {computed} from 'vue';
import DeleteIcon from 'vue-material-design-icons/Delete.vue';
import { useCartStore } from '../store/cart';
const cart = useCartStore();

const props = defineProps({
	product: {
		title: String,
		image: String,
		price: Number,
		count: Number,
		id: Number
	}
});
const total = computed(() => (props.product.price * props.product.count).toLocaleString(undefined, {minimumFractionDigits: 2}));
const treatedPrice = computed(() => props.product.price.toLocaleString(undefined, {minimumFractionDigits: 2}))

</script>

<style>
	.cart-product-item {
		display: grid;
		height: 180px;
		overflow: hidden;
		padding: 20px;
		grid-template: 
		"img title title" 3fr
		"img price buttons" 1fr
		/1fr 1fr 1fr;
		column-gap: 20px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.3);
		background-color: #fff;
		box-shadow: 0px 0px 3px rgba(0,0,0,0.3);
	}
	.cart-product-image {
		width: 180px;
		max-height: 100%;
		object-fit: contain;
		grid-area: img;
	}
	.cart-product-title {
		grid-area: title;
		font-weight: 600;
	}
	.price-container {
		grid-area: price;
		justify-self: start;
	}
	.buttons {
		grid-area: buttons;
	}
	.product-count-and-price, .product-total {
		font-weight: normal;
		justify-self: start;
	}
	.change-count-btn {
		padding: 5px;
		border: 0;
		outline: 0;
		font-size: 1.2rem;
		background-color: transparent;
	}
	.change-count-btn:hover {
		cursor: pointer;
	}
	.remove-product-btn {
		background-color: transparent;
		border: 0;
		outline: 0;
		margin-left: 15px;
	}
	.remove-product-btn:hover {
		cursor: pointer;
	}

	@media screen and (max-width: 765px) {
		.cart-product-item {
			display: flex;
			flex-direction: column;
			height: 350px;
			justify-content: center;
			gap: 10px;
			text-align: center;
		}
		.cart-product-title {
			font-size: 1rem;
		}
		.cart-product-image {
			max-height: 100px;
			margin: 0 auto;
			gap: 5px;
			margin-bottom: 10px;
		}
		.buttons {
			display: flex;
			align-items: center;
			justify-content: center;
			padding-top: 20px;
			gap: 20px;
		}
	}
</style>