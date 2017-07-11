<template>
	<div class="container">
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

		<app-footer></app-footer>
	</div>
</template>

<script>
	import AppFooter from "./AppFooter";
	import {HC_TYPE_PING, HC_TYPE_RANGE, HC_TYPE_MANUAL} from "../utils/hc-type-constants";

	export default {
		components: {AppFooter},
		name: 'healthcheck-list',
		data () {
			return {}
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
			}
		},
		mounted() {
			this.$refs.hcTable.initSort();
			console.log('MOUNTED');
		}
	}
</script>

<style scoped>
	.container {
		margin-top: 20px;
	}
</style>
