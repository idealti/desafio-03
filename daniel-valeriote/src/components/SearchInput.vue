<template>
	<div class="input-container">
		<input 
		id="searchInput" 
		type="text" 
		:value="modelValue" 
		@input="$emit('update:modelValue', $event.target.value)"
		placeholder="Digite o que você procura..."
		>	
	</div>
</template>
<script setup>
	defineProps(['modelValue']);
	defineEmits(['update:modelValue']);
</script>
<style scoped>
.input-container {
	display: flex;
	align-content: center;
	justify-content: center;
	padding-top: 25px;
}
input {
	padding: 10px;
	border-radius: 10px;
	outline: 0;
	border: 1px solid var(--main-black);
	min-width: 200px;
	width: 70%;
	margin: 0 auto;
}
</style>