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

					<template scope="props">
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
				<status-chart id="chart"></status-chart>
			</b-tab-item>
		</b-tabs>

		<app-footer></app-footer>
	</div>
</template>

<script>
	import AppFooter from "./AppFooter";
	import {HC_TYPE_PING, HC_TYPE_RANGE, HC_TYPE_MANUAL} from "../utils/hc-type-constants";
	import StatusChart from "./StatusChart";

	export default {
		components: {
			StatusChart,
			AppFooter
		},
		name: 'healthcheck-list',
		data () {
			return {
				activeTab: 0
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
			},
			initSort() {
				this.$refs.hcTable.initSort();
				console.log('sorted');
			}
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
		margin-top: 20px;
	}
</style>
