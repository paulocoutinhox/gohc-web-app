<template>
	<div class="container is-fluid">
		<dashboard-item v-for="hc in hcList" v-bind:item="hc" v-bind:key="hc.token"></dashboard-item>
	</div>
</template>

<script>
	import DashboardItem from "./DashboardItem";

	export default {
		components: {DashboardItem},
		name: 'dashboard',
		data () {
			return {}
		},
		computed: {
			hcList() {
				return this.$store.getters.hcList;
			},
			hcCount() {
				return this.$store.getters.hcCount;
			}
		}
	}
</script>

<style scoped>
	.container {
		padding: 5px;
		margin: 10px 0 0 0;
	}

	.column {
		padding: 0.3rem;
		float: left;
	}
</style>
