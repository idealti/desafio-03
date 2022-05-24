<template>
	<li class="product-item">
		<div class="product-image-container">
			<img :src="img" :alt="title" class="product-image">
		</div>
		<div class="product-info-container">
			<h2	 class="product-title">
				<router-link :to="'/products/' + id">
					{{title}}
				</router-link>
				</h2>
			<h4 class="product-price">R${{Number(price).toLocaleString()}}</h4>
			<h4 class="product-rating">
				<abbr :title="rating.count + ' votos'">
					<star-rating :read-only="true" :round-start-rating="false" :star-size="15" :rating="rating.rate"/>
				</abbr>
			</h4>
		</div>
		<button class="add-to-cart-btn">
			Adicionar ao carrinho
		</button>
	</li>
</template>

<script>
	import StarRating from 'vue-star-rating';
	export default {
		props: {
			id: Number || String,
			title: String,
			img: String,
			price: Number,
			rating: {
				rate: Number,
				count: Number
			}
		},
		components: {
			StarRating
		},
	}
</script>

<style>
	.product-item {
		overflow: hidden;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
		border-radius: 5px;
	}
	.product-image-container {
		width: 100%;
		height: 250px;
		padding: 10px;
		border-bottom: 1px solid #3030302f;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.product-image {
		height: 100%;
		width: 100%;
		object-fit: contain;
	}
	.product-title {
		grid-area: title;
		font-size: 15px;
		text-align: center;
		overflow: hidden;
	}
	.product-price {
		grid-area: price;
		text-align: center;
		color: var(--main-green);
		font-weight: 600;
		font-size: 15px;
	}
	.product-rating {
		grid-area: rating;
		text-align: center;
	}
	.product-info-container {
		height: 120px;
		width: 100%;
		display: grid;
		grid-template: 
		"title title" 80px
		"price rating" auto
		/ 2fr 3fr;
		padding: 5px;
		justify-content: center;
		align-items: center;
		max-width: 300px;
		margin: 0 auto;
	}
	.add-to-cart-btn {
		background-color: var(--main-blue);
		height: 40px;
		outline: 0;
		border: 0;
		color: var(--main-white);
		width: 100%;
		font-size: 16px;
		font-weight: bold;
		text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
	}
	.add-to-cart-btn:hover {
		background-color: var(--dark-blue);
		cursor: pointer
	}
	.vue-star-rating {
		justify-content: center;
	}
	.vue-star-rating-rating-text {
		font-weight: 600;
		font-size: 12px
	}
	abbr {
		text-decoration: none;
	}
</style>