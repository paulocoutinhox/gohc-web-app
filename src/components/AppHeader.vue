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
				<router-link to="/healthcheck/list" class="nav-item is-tab" v-on:click.native="closeMenu()">{{ hcCount }} healtchchecks</router-link>
				<router-link to="/dashboard" class="nav-item is-tab" v-on:click.native="closeMenu()">Dashboard</router-link>
				<router-link to="/" class="nav-item is-tab" v-on:click.native="closeMenu()">Home</router-link>
				<router-link to="/about" class="nav-item is-tab" v-on:click.native="closeMenu()">About</router-link>
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
		methods: {
			toggleMenu() {
				this.menuActive = !this.menuActive;
			},
			closeMenu() {
				this.menuActive = false;
			}
		},
		computed: {
			hcCount () {
				return this.$store.getters.hcCount;
			}
		}
	}
</script>

<style scoped>
	.nav-left .nav-item img {
		margin-right: 10px;
	}
</style>
