<template>
	<h1>Home</h1>
	<ProductsList :products="products"/>
</template>

<script setup>
import ProductsList from '../components/ProductsList.vue';
import {ref} from 'vue';

const products = ref([]);
</script>