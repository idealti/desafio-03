<template>
	<div class="container">
		<div class="detailed-product--container">
			<h1 class="product-title">{{product.title}}</h1>
			<img class="product-image" :src="product.image" :alt="product.title">
			<div class="product-price-and-rating">
				<h4 class="product-price">R${{treadedPrice}}</h4>
				<h4 class="product-rating">
					<abbr :title="product.rating.rate">
						<star-rating :read-only="true" :round-start-rating="false" :star-size="15" :rating="product.rating.rate" :show-rating="false"/>
					</abbr>
					({{product.rating.count}})
				</h4>
			</div>
			<button class="add-to-cart-btn">Adicionar ao carrinho</button>
			<div class="product-desc-container">
				<h3>DESCRIÇÃO DO PRODUTO</h3>
				<p class="product-desc">{{product.description}}</p>
			</div>
		</div>
	</div>
</template>
<script setup>
	import {computed} from 'vue';
	import StarRating from 'vue-star-rating';

	const treadedPrice = computed(() => {
		return props.product.price.toLocaleString(undefined, {minimumFractionDigits: 2})
	})

	const props = defineProps({
		product: {
			title: String,
			description: String,
			price: Number,
			category: String,
			image: String,
			rating: {
				rate: Number,
				count: Number
			}
		}
	})
</script>
<style scoped>
.container {
	width: 100%;
	background-color: #fff;
	min-height: calc(100vh - 67px);
}
.detailed-product--container {
	width: 100%;	
	max-width: 900px;
	margin: 0 auto;
	padding: 20px;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	gap: 20px;
	align-items: center;
	justify-content: center;
}
.product-title {
	font-size: 1.3rem;
	font-weight: 600;
}
.product-image {
	object-fit: contain;
	max-height: 270px;
	max-width: 90%;
}
.product-price-and-rating {
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
}
.product-price {
	color: var(--main-green);
	font-weight: 600;
	font-size: 1.2rem
}
.product-rating {
	display: flex;
	font-weight: 600;
	gap: 5px;
}
.add-to-cart-btn {
	width: 100%;
	padding: 10px;
	background-color: var(--main-blue);
	outline: 0;
	border: 0;
	color: var(--main-white);
	font-weight: bold;
	border-radius: 5px;
	cursor: pointer;
	text-transform: uppercase;
}
.add-to-cart-btn:hover {
	background-color: var(--dark-blue);
}
.product-desc-container {
	border-top: 1px solid rgba(0, 0, 0, 0.3);
	text-align: center;
	padding: 20px;
}
.product-desc {
	margin-top: 20px;
	text-align: center;
	max-width: 530px;
}
</style>