<template>
<div>
	<h2>404</h2>
	<h3>{{customMessage || 'Página não encontrada.'}}</h3>
	<router-link to="/" class="back-home-btn" v-if="backHomeBtn">
		Volte para o início
	</router-link>
</div>
</template>

<script setup>
defineProps({
	customMessage: {
		type: String,
		required: false
	},
	backHomeBtn: {
		type: Boolean,
		required: false,
		default: true
	}
})
</script>

<style scoped>
	div {
		width: 100%;
		text-align: center;
		margin-top: 100px;
		display: flex;
		flex-direction: column;
		gap: 20px
	}
	h2 {
		color: #f00;
	}
	.back-home-btn {
		font-size: 1.2rem;
		font-weight: bold;
		color: rgb(89, 89, 175);
	}
</style>