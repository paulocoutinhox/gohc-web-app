<template>
	<nav class="nav">
		<div class="container">
			<div class="nav-left">
				<router-link to="/" class="nav-item">
					<img src="../assets/images/logo-header.png" alt="GoHC">
					GoHC
				</router-link>
			</div>
			<span class="nav-toggle">
				<span></span>
				<span></span>
				<span></span>
            </span>
			<div class="nav-right nav-menu">
				<router-link to="/" class="nav-item is-tab is-hidden-mobile">Home</router-link>
				<router-link to="/about" class="nav-item is-tab is-hidden-mobile">About</router-link>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		name: 'app-header',
		data () {
			return {}
		}
	}
</script>

<style scoped>
	.nav-left .nav-item img {
		margin-right: 10px;
	}
</style>
