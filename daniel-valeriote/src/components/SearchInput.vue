<template>
	<div class="input-container">
		<input 
		id="searchInput" 
		type="text" 
		:value="modelValue" 
		@input="$emit('update:modelValue', $event.target.value)"
		placeholder="Digite o que você procura..."
		autocomplete="off"
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
	border-radius: 5px;
	outline: 0;
	border: 1px solid #3030304f;
	min-width: 200px;
	width: 70%;
	max-width: 700px;
	margin: 0 auto;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}
</style>