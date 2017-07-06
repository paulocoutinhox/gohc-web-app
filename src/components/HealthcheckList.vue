<template>
	<div class="container">
		<div v-for="hc in hcList" class="list-group-item">
			<h4 class="list-group-item-heading">
				<a>{{ hc.description }}</a>
			</h4>

			<div class="list-group-item-text">
				<div v-if="hc.type == 'ping'">
					<div>
						<strong>Type:</strong>
						<span>Ping</span>
					</div>
					<div>
						<strong>Ping:</strong>
						<span>{{hc.ping | pingFormat}}</span>
					</div>
				</div>

				<div v-if="hc.type == 'range'">
					<div>
						<strong>Type:</strong>
						<span>Range</span>
					</div>
					<div>
						<strong>Range:</strong>
						<span>{{hc.range}}</span>
					</div>
				</div>

				<div v-if="hc.type == 'manual'">
					<div>
						<strong>Type:</strong>
						<span>Manual</span>
					</div>
					<div>
						<strong>Status:</strong>
						<span>{{hc.status}}</span>
					</div>
				</div>

				<div>
					<strong>Status:</strong>
					<!--
					<span [ngSwitch]="hc?.status">
									<span *ngSwitchCase="healthcheckStatusEnum.SUCCESS">
										<span class="label label-success">success</span>
									</span>

									<span *ngSwitchCase="healthcheckStatusEnum.WARNING">
										<span class="label label-warning">warning</span>
									</span>

									<span *ngSwitchCase="healthcheckStatusEnum.ERROR">
										<span class="label label-danger">error</span>
									</span>
								</span>-->
				</div>
			</div>
		</div>
		<app-footer></app-footer>
	</div>
</template>

<script>
	import AppFooter from "./AppFooter";

	export default {
		components: {AppFooter},
		name: 'healthcheck-list',
		data () {
			return {}
		},
		computed: {
			hcList() {
				return this.$store.getters.hcList;
			}
		}
	}
</script>

<style scoped>
	h4.list-group-item-heading a {
		text-decoration: none;
		color: #000;
	}

	h4.list-group-item-heading a:focus {
		text-decoration: none;
		color: #000;
	}

	h4.list-group-item-heading a:hover {
		text-decoration: none;
		color: #6e6e6e;
	}
</style>
