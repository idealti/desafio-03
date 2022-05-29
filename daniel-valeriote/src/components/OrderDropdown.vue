<template>
<div class="dropdown-container">
	<button 
	class="dropdown-btn"
	:class="{activeDropdownBtn: isDropdownOpen}"
	@click="isDropdownOpen = !isDropdownOpen"
	>
	Ordenar por:
	</button>
	<transition>
	<ul class="dropdown-list" v-if="isDropdownOpen">
		<li class="dropdown-item" @click="$emit('sortBy', 'lowestPrice'); isDropdownOpen = false">Menor preço</li>
		<li class="dropdown-item" @click="$emit('sortBy', 'highestPrice'); isDropdownOpen = false">Maior preço</li>
		<li class="dropdown-item" @click="$emit('sortBy', 'highestRating'); isDropdownOpen = false">Melhor avaliação</li>
	</ul>
	</transition>
</div>
</template>

<script setup>
	import {ref} from 'vue';
	const isDropdownOpen = ref(false);
</script>

<style scoped>
.dropdown-container {
	width: 80%;
	margin: 20px auto;
	position: relative;
	max-width: 250px;
}
.dropdown-btn {
	width: 100%;
	height: 27px;
	padding: 5px;
	background-color: var(--main-black);
	color: #fff;
	border: 1px solid #3030304f;
	border-radius: 5px;
	box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
}
.dropdown-btn:hover {
	cursor: pointer;
}
.dropdown-list {
	position: absolute;
	left: 0;
	top: 27px;
	width: 100%;
	background-color: #fff;
	border-radius: 0px 0px 5px 5px;
	padding: 0;
	border: 1px solid rgba(0,0,0,0.3);
	box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
}
.activeDropdownBtn {
	border-radius: 5px 5px 0px 0px;
}
.dropdown-item {
	padding: 5px;
	font-size: 12px;
}
.dropdown-item:hover {
	cursor: pointer;
	background-color: rgba(177, 177, 177, 0.3);
}
.v-enter-from, .v-leave-to {
	opacity: 0;
}
.v-enter-to, .v-leave-from {
	opacity: 1;
}
.v-enter-active, .v-leave-active {
	transition: opacity .19s ease;
}
</style>