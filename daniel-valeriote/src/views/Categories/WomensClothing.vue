<template>
	<ProductsPageTemplate :urlPath="urlPath" v-if="urlPath"/>
</template>

<script setup>
import ProductsPageTemplate from '../../components/ProductsPageTemplate.vue';
defineProps({urlPath: String})
</script>