<template>
	<div class="container">
		<b-tabs v-model="activeTab" position="is-centered" type="is-toggle">
			<b-tab-item label="List" icon="table">
				<b-table
					ref="hcTable"
					:data="hcList"
					:bordered="true"
					:striped="true"
					:narrowed="false"
					:checkable="false"
					:loading="false"
					:mobile-cards="true"
					:paginated="false"
					:per-page="hcCount"
					:pagination-simple="true"
					:default-sort="['description', 'asc']">

					<template slot-scope="props">
						<b-table-column field="description" label="Description" sortable>
							{{ props.row.description }}
						</b-table-column>

						<b-table-column field="type" label="Type" sortable>
							{{ props.row.type }}
						</b-table-column>

						<b-table-column field="status" label="Status" sortable>
							<span :inner-html.prop="props.row.status | hcStatusFormat"></span>
						</b-table-column>

						<b-table-column field="type" label="Value" width="200">
					<span v-if="hcTypeIsPing(props.row.type)" class="value-field">
						{{ props.row.ping | pingFormat }}
					</span>

							<span v-if="hcTypeIsRange(props.row.type)" class="value-field">
						{{ props.row.range }}
					</span>

							<span v-if="hcTypeIsManual(props.row.type)" class="value-field">
						{{ props.row.status }}
					</span>
						</b-table-column>
					</template>
				</b-table>
			</b-tab-item>

			<b-tab-item label="Chart" icon="pie-chart">
				<status-chart v-bind:chartData="hcChartData" v-bind:options="hcChartOptions" id="chart"></status-chart>
			</b-tab-item>
		</b-tabs>

		<app-footer></app-footer>
	</div>
</template>

<script>
	import AppFooter from "./AppFooter";
	import {HC_TYPE_PING, HC_TYPE_RANGE, HC_TYPE_MANUAL} from "../utils/hc-type-constants";
	import StatusChart from "./StatusChart";
	import {HC_STATUS_ERROR, HC_STATUS_SUCCESS, HC_STATUS_WARNING, HC_STATUS_TIMEOUT} from "../utils/hc-status-constants";

	export default {
		components: {
			StatusChart,
			AppFooter
		},
		name: 'healthcheck-list',
		data () {
			return {
				activeTab: 0,
				hcChartOptions: {
					responsive: true
				}
			}
		},
		methods: {
			hcTypeIsPing(value) {
				return (value === HC_TYPE_PING);
			},
			hcTypeIsRange(value) {
				return (value === HC_TYPE_RANGE);
			},
			hcTypeIsManual(value) {
				return (value === HC_TYPE_MANUAL);
			}
		},
		computed: {
			hcList() {
				return this.$store.getters.hcList;
			},
			hcCount() {
				return this.$store.getters.hcCount;
			},
			hcChartData() {
				const currentHcList = this.$store.getters.hcList;

				let chartLabels = [];
				let chartColors = [];
				let chartDataset = [];

				let chartDataForSuccess = 0;
				let chartDataForWarning = 0;
				let chartDataForError = 0;
				let chartDataForTimeout = 0;

				for (const hc of currentHcList) {
					if (hc.status === HC_STATUS_SUCCESS) {
						chartDataForSuccess += 1;
					} else if (hc.status === HC_STATUS_WARNING) {
						chartDataForWarning += 1;
					} else if (hc.status === HC_STATUS_ERROR) {
						chartDataForError += 1;
					} else if (hc.status === HC_STATUS_TIMEOUT) {
						chartDataForTimeout += 1;
					}
				}

				if (chartDataForSuccess > 0) {
					chartLabels.push("Success");
					chartColors.push("#39c558");
					chartDataset.push(chartDataForSuccess);
				}

				if (chartDataForWarning > 0) {
					chartLabels.push("Warning");
					chartColors.push("#ffbe41");
					chartDataset.push(chartDataForWarning);
				}

				if (chartDataForError > 0) {
					chartLabels.push("Error");
					chartColors.push("#ff3e43");
					chartDataset.push(chartDataForError);
				}

				if (chartDataForTimeout > 0) {
					chartLabels.push("Timeout");
					chartColors.push("#263238");
					chartDataset.push(chartDataForTimeout);
				}

				return {
					labels: chartLabels,
					datasets: [
						{
							backgroundColor: chartColors,
							data: chartDataset
						}
					]
				}
			}
		}
	}
</script>

<style scoped>
	.container {
		margin-top: 80px;
	}
</style>
