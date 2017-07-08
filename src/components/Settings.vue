<template>
	<div class="container">
		<h1 class="title">Settings</h1>
		<br/>
		<br/>

		<h4 class="subtitle is-4">Reload healthchecks and notifiers</h4>

		<p>
			<button class="button is-danger" @click="reloadSettings()">Reload</button>
		</p>

		<br/>

		<app-footer></app-footer>
	</div>
</template>

<script>
	import AppFooter from "./AppFooter";
	import axios from "axios";

	export default {
		components: {AppFooter},
		name: 'settings',
		methods: {
			reloadSettings() {
				this.$dialog.confirm({
					message: 'Are you sure?',
					type: 'is-danger',
					hasIcon: true,
					onConfirm: () => {
						axios.get('/api/system/reload')
							.then(response => {
								if (response.data.success) {
									this.$toast.open({
										message: 'Settings was reloaded!',
										type: 'is-success'
									});
								} else {
									this.$toast.open({
										message: 'Error when execute your request, try again!',
										type: 'is-danger'
									});
								}
							})
							.catch(e => {
								console.log(e);

								this.$toast.open({
									message: 'Error when execute your request, try again!',
									type: 'is-danger'
								});
							});
					}
				});
			}
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
