<template>
	<div id="app">
		<app-header></app-header>
		<router-view></router-view>
	</div>
</template>

<script>
	import AppHeader from "./components/AppHeader";
	import axios from "axios";

	export default {
		components: {
			AppHeader
		},
		name: 'app',
		methods: {
			startGetHealthcheckList() {
				window.setTimeout(this.getHealthcheckList, 1000);
			},
			getHealthcheckList() {
				axios.get('/api/healthcheck/list')
					.then(response => {
						this.$store.dispatch('setHcCount', response.data.data.count);
						this.$store.dispatch('setHcList', response.data.data.list);

						this.startGetHealthcheckList();
					})
					.catch(e => {
						this.startGetHealthcheckList();
					});
			}
		},
		mounted() {
			this.getHealthcheckList();
		}
	}
</script>

<style lang="scss">
	@import "scss/custom-bulma";
</style>
