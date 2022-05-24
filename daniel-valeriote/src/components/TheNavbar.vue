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
		</nav>
		<!-- Mobile navbar -->
		<nav v-if="isMobile" class="mobile-navbar">
			<router-link to="/" class="nav-link">Início</router-link>
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
		</nav>
		<button v-show="isMobile" @click="toggleShowMobileNav" class="toggle-categories-btn" :class="[showMobileNav ? 'spinNavBtn' : 'spinNavBtnReverse']">≡</button>
	</header>
</template>

<script setup>
import {ref, onMounted} from 'vue';
let isMobile = ref(false);
let showMobileNav = ref(false);

function checkForMobile() {
	isMobile.value = window.innerWidth <= 740;
};

function toggleShowMobileNav() {
	showMobileNav.value = !showMobileNav.value;
};

onMounted(() => {
	window.addEventListener('resize', checkForMobile);
	checkForMobile();
});
</script>

<style scoped>
	.header {
		background-color: var(--main-black);
		display: flex;
		align-items: center;
		padding: 20px;
		position: relative;
	}
	.navbar-item:hover {
		cursor: pointer;
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
	.toggle-categories-btn {
		position: absolute;
		right: 10px;
		width: 40px;
		height: 40px;
		font-size: 35px;
		color: var(--main-white);
		background-color: transparent;
		border-radius: 8px;
		border: 0;
		outline: 0;
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
	}
	.showNavbar {
		left: 0;
	}
	.hideNavbar {
		left: -200px;
	}
</style>