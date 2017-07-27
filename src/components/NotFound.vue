<template>
	<div class="container">
		<h1 class="title">Not Found</h1>

		<br/>
		<br/>

		<p>
			<span class="icon is-large is-info">
				<span class="fa fa-exclamation"></span>
			</span>
		</p>

		<p>
			Sorry, but this page doesn't exists.
		</p>

		<br/>

		<app-footer></app-footer>
	</div>
</template>

<script>
	import AppFooter from "./AppFooter";

	export default {
		components: {AppFooter},
		name: 'not-found'
	}
</script>

<style scoped>
	.container {
		text-align: center;
	}

	.container h1 {
		margin-top: 30px;
	}

	.icon span {
		font-size: 30px;
	}
</style>
