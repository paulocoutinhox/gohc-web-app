<template>
	<nav class="nav">
		<div class="container">
			<div class="nav-left">
				<router-link to="/" class="nav-item">
					<img src="../assets/images/logo-header.png" alt="GoHC">
					GoHC
				</router-link>
			</div>
			<span class="nav-toggle" v-on:click="toggleMenu()">
				<span></span>
				<span></span>
				<span></span>
            </span>
			<div class="nav-right nav-menu" v-bind:class="{ 'is-active': menuActive }">
				<router-link to="/healthcheck/list" class="nav-item is-tab">{{ hcCount }} healtchchecks</router-link>
				<router-link to="/" class="nav-item is-tab">Home</router-link>
				<router-link to="/about" class="nav-item is-tab">About</router-link>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		name: 'app-header',
		data () {
			return {
				menuActive: false
			}
		},
		props: [
			'hcCount',
			'hcList'
		],
		methods: {
			toggleMenu() {
				this.menuActive = !this.menuActive;
			}
		}
	}
</script>

<style scoped>
	.nav-left .nav-item img {
		margin-right: 10px;
	}
</style>
