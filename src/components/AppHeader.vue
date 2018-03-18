<template>
	<nav class="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<router-link to="/" class="navbar-item">
				<img src="../assets/images/logo-header.png" alt="GoHC" style="margin-right: 10px;">
				GoHC
			</router-link>

			<span class="navbar-burger" v-on:click="toggleMenu()">
				<span></span>
				<span></span>
				<span></span>
			</span>
		</div>		

		<div class="navbar-end navbar-menu" v-bind:class="{ 'is-active': menuActive }">
			<router-link to="/healthcheck/list" class="navbar-item is-tab" v-on:click.native="closeMenu()">{{ hcCount }} healtchchecks</router-link>
			<router-link to="/dashboard" class="navbar-item is-tab" v-on:click.native="closeMenu()">Dashboard</router-link>
			<router-link to="/" class="navbar-item is-tab" v-on:click.native="closeMenu()">Home</router-link>
			<router-link to="/settings" class="navbar-item is-tab" v-on:click.native="closeMenu()">Settings</router-link>
			<router-link to="/about" class="navbar-item is-tab" v-on:click.native="closeMenu()">About</router-link>
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
