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
		data () {
			return {
				timerHcList: null,
				hcCount: {},
				hcList: {}
			};
		},
		methods: {
			getHealthcheckList() {
				axios.get('/api/healthcheck/list')
					.then(response => {
						this.hcCount = response.data.data.count;
						this.hcList = response.data.data.list;

						this.$emit('hcCountUpdated', this.hcCount);
						this.$emit('hcListUpdated', this.hcList);
					})
					.catch(e => {
						console.log(e);
					});
			},
			stopTimer() {
				if (this.timerHcList != null) {
					window.clearInterval(this.timerHcList);
				}
			}
		},
		mounted() {
			this.stopTimer();
			this.timerHcList = window.setInterval(this.getHealthcheckList, 1000);
		}
	}
</script>

<style lang="scss">
	@import "scss/custom-bulma";
</style>
