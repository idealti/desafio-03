<template>
<transition>
	<div class="modal-container" v-if="open">
		<slot name="icon">
			<CheckIcon :size="45"/>
		</slot>
		<p>
			<slot />
		</p>
	</div>
</transition>
</template>

<script setup>
import CheckIcon from 'vue-material-design-icons/CheckCircle.vue';
const emit = defineEmits(['closeModal']);
const props = defineProps({open: { type: Boolean, default: false }});
</script>

<style scoped>
.v-enter-active, .v-leave-active {
	transition: all .6s ease;
}
.v-enter-from, .v-leave-to{
	opacity: 0;
}
.modal-container {
	display: flex;
	flex-direction: column;
	gap: 20px;
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	background-color: rgba(0,0,0,0.78);
	padding: 25px;
	border-radius: 10px;
	width: 80%;
	max-width: 530px;
	text-align: center;
	border: 1px solid rgba(0,0,0,0.3);
	box-shadow: 0px 0px 7px rgba(0,0,0,0.3);
	color: white;
}
</style>