<template>
	<header class="header">
		<!-- Default Navbar -->
		<nav v-if="!isMobile" class="navbar">
			<ul class="navbar-list">
				<li class="navbar-item">
					<router-link to="/" class="nav-link">
						Início
					</router-link>
				</li>
				<li class="navbar-item">
					<router-link to="/categories/electronics" class="nav-link">
						Eletrônicos
					</router-link>
				</li>
				<li class="navbar-item">
					<router-link to="/categories/jewelery" class="nav-link">
						Joalheria
					</router-link>
				</li>
				<li class="navbar-item">
					<router-link to="/categories/men's clothing" class="nav-link">
						Moda masculina
					</router-link>
				</li>
				<li class="navbar-item">
					<router-link to="/categories/women's clothing" class="nav-link">
						Moda feminina
					</router-link>
				</li>
			</ul>
			<router-link to="/cart" class="navbar-custom-btn">
				<button class="navbar-custom-btn" :style="{position: 'absolute', right: '20px', top: '22px'}">
					<CartIcon fillColor="#fff" class="navbar">
					</CartIcon>
				</button>
			</router-link>
		</nav>
		<!-- Mobile navbar -->
		<nav v-if="isMobile" class="mobile-navbar">
			<router-link to="/cart" class="navbar-custom-btn">
				<button class="navbar-custom-btn">
					<CartIcon fillColor="#fff" class="navbar">
						</CartIcon>
				</button>
			</router-link>
			<!-- Fixes problem caused by menu taking space at flex -->
			<div></div> 
			<router-link to="/" class="nav-link">Início</router-link>
			<div class="menu">
				<ul class="mobile-navbar-list" :class="[showMobileNav ? 'showNavbar' : 'hideNavbar']">
					<li class="mobile-navbar-item">
						<router-link to="/categories/electronics" class="nav-link" @click="toggleShowMobileNav">
							Eletrônicos
						</router-link>
					</li>
					<li class="mobile-navbar-item">
						<router-link to="/categories/jewelery" class="nav-link" @click="toggleShowMobileNav">
							Joalheria
						</router-link>
					</li>
					<li class="mobile-navbar-item">
						<router-link to="/categories/men's clothing" class="nav-link" @click="toggleShowMobileNav">
							Moda masculina
						</router-link>
					</li>
					<li class="mobile-navbar-item">
						<router-link to="/categories/women's clothing" class="nav-link" @click="toggleShowMobileNav">
							Moda feminina
						</router-link>
					</li>
				</ul>
				<div class="menu-backdrop" v-show="showMobileNav" @click="toggleShowMobileNav"></div>
			</div>
		<button v-show="isMobile" @click="toggleShowMobileNav" class="navbar-custom-btn toggle-categories-btn" :class="[showMobileNav ? 'spinNavBtn' : 'spinNavBtnReverse']">≡</button>
		</nav>
	</header>
</template>

<script setup>
import {ref, onMounted, watch} from 'vue';
import CartIcon from 'vue-material-design-icons/Cart.vue';
let isMobile = ref(false);
let showMobileNav = ref(false);

const checkForMobile = () => isMobile.value = window.innerWidth <= 750;
const toggleShowMobileNav = () => showMobileNav.value = !showMobileNav.value;

onMounted(() => {
	window.addEventListener('resize', checkForMobile);
	checkForMobile();
});

watch(showMobileNav, (curr) => {
	if(curr) return document.body.style.overflow = 'hidden';
	document.body.style.overflow = 'auto';
})
</script>

<style scoped>
	.header {
		background-color: var(--main-black);
		display: flex;
		align-items: center;
		padding: 20px;
		position: relative;
	}
	.mobile-navbar {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.nav-link {
		color: #f6f6f68f;
		font-size: 1.2rem;
		text-decoration: none;	
	}
	.nav-link:hover {
		text-shadow: 0px 0px 4px rgba(246, 246, 246, 0.3);
		color: var(--main-white);
	}
	.router-link-active {
		color: var(--main-white); 
	}
	/* Default navbar */
	.navbar-list {
		display: flex;
		gap: 25px;
		padding-left: 20px
	}
	.navbar-custom-btn {
		border: 0;
		outline: 0;
		background-color: transparent;
	}
	.navbar-custom-btn:hover {
		cursor: pointer;
		opacity: .8;
	}
	.toggle-categories-btn {
		right: 10px;
		font-size: 35px;
		color: var(--main-white);
		border-radius: 8px;
		transition: all .5s ease;
	}
	.spinNavBtn {
		transform: rotate(180deg);
	}
	.spinNavBtnReverse {
		transform: rotate(0deg);
	}
	.toggle-categories-btn:hover {
		cursor: pointer;
		opacity: .9;
	}
	/* Mobile Navbar section */
	.mobile-navbar-list {
		position: absolute;
		left: 0;
		top: 0;
		width: 200px;
		height: 100vh;
		background-color: var(--main-black);
		padding: 15px;
		transition: all ease .4s;
		z-index: 100;
	}
	.menu-backdrop {
		position: absolute;
		left: 0;
		top: 0;
		height: 100vh;
		width: 100%;
		z-index: 99;
		background-color: rgba(0, 0, 0, 0.3);
	}
	.showNavbar {
		left: 0;
	}
	.hideNavbar {
		left: -200px;
	}
</style>