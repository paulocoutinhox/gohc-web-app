<template>
	<div class="container">
		<br/>

		<b-table
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
					<span v-html="$options.filters.hcStatusFormat(props.row.status)"></span>
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

		<!--
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
								</span>
				</div>
			</div>

		</div>
		-->
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
		}
	}
</script>

<style scoped>

</style>
