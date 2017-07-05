<template>
	<div id="app">
		<app-header v-bind:hcCount="hcCount"></app-header>
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
		data () {
			return {
				hcCount: 0,
				hcList: []
			};
		},
		methods: {
			startGetHealthcheckList() {
				window.setTimeout(this.getHealthcheckList, 1000);
			},
			getHealthcheckList() {
				axios.get('/api/healthcheck/list')
					.then(response => {
						this.hcCount = response.data.data.count;
						this.hcList = response.data.data.list;
						this.startGetHealthcheckList();
					})
					.catch(e => {
						console.log(e);
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
