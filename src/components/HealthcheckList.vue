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
		},
		filters: {
			pingFormat: value => {
				if (!value) return '';

				value = parseInt(value);

				const TIME_MS = 1000;
				const TIME_SECONDS = (TIME_MS * 60);
				const TIME_MINUTES = (TIME_SECONDS * 60);
				const TIME_HOURS = (TIME_MINUTES * 60);
				const TIME_DAYS = (TIME_HOURS * 24);

				let newValue = 0;
				let text = "";

				if (value < TIME_MS) {
					newValue = value;
					text = "m";
				} else if (value < TIME_SECONDS) {
					newValue = Math.floor(value / TIME_MS);
					text = "sec";
				} else if (value < TIME_MINUTES) {
					newValue = Math.floor(value / TIME_SECONDS);
					text = "minute";
				} else if (value < TIME_HOURS) {
					newValue = Math.floor(value / TIME_MINUTES);
					text = "hour";
				} else {
					newValue = Math.floor(value / TIME_HOURS);
					text = "day";
				}

				if (newValue == 1) {
					return newValue + " " + text + " ago";
				} else {
					return newValue + " " + text + "s ago";
				}
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
