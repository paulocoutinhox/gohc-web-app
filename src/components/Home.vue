<template>
	<div class="container">
		<div>
			<h1 class="title">Healthcheck System</h1>
			<p>
				<img src="../assets/images/logo.png" border="0" alt="" class="logo"/>
			</p>
			<br/>
			<p>Welcome! Click on button below to open dashboard!</p>
			<br/>
			<br/>
			<p>
				<router-link to="/dashboard" class="button is-large">Dashboard</router-link>
			</p>
		</div>

		<br/>
		<br/>
		<br/>

		<div class="columns">
			<div class="column">
				<h4 class="subtitle is-4">Simple structure</h4>
				<p>With a file based structure you can easily versioning all files</p>
			</div>
			<div class="column">
				<h4 class="subtitle is-4">Simple API</h4>
				<p>It works with a simple API, using HTTP requests to make everything - if you want</p>
			</div>
			<div class="column">
				<h4 class="subtitle is-4">Friendly Interface</h4>
				<p>You can see your checks with a nice and friendly web responsive interface</p>
			</div>
		</div>

		<app-footer></app-footer>
	</div>
</template>

<script>
	import AppFooter from "./AppFooter";

	export default {
		components: {AppFooter},
		name: 'home',
		data () {
			return {}
		}
	}
</script>

<style scoped>
	.container {
		text-align: center;
	}

	.container h1 {
		margin-top: 80px;
	}

	.container .logo {
		height: 200px;
	}

	.columns {
		margin: 0;
	}
</style>
