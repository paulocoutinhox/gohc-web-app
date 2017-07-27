<template>
	<div class="container">
		<h1 class="title">About</h1>
		<br/>
		<br/>

		<h4 class="subtitle is-4">E-mail:</h4>
		<p>
			<a href="mailto:paulo@prsolucoes.com">paulo@prsolucoes.com</a>
		</p>
		<br/>
		<br/>

		<h4 class="subtitle is-4">Open source:</h4>
		<p>
			GoHC is an open source project. The code is on
			<a href="https://github.com/prsolucoes/gohc">GitHub</a>,
			it has MIT license, and is accepting contributions.
		</p>
		<br/>
		<br/>

		<h4 class="subtitle is-4">Reliability Guarantees:</h4>
		<p>
			No warranties!
			<br/>
			This project is free and open source, but you can contact me if you want paid support to implement in your server or company.
		</p>
		<app-footer></app-footer>
	</div>
</template>

<script>
	import AppFooter from "./AppFooter";
	export default {
		components: {AppFooter},
		name: 'about',
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
		margin-top: 30px;
	}
</style>
