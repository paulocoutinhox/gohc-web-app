<template>
	<div class="container is-fluid">
		<div class="">
			<div v-for="hc in hcList" class="column is-2-desktop is-3-tablet is-6-mobile">
				<div class="hc-item" v-bind:class="hcItemContainerClass(hc.status)">
					<span class="icon">
						<span class="fa" v-bind:class="hcItemIconClass(hc.status)"></span>
					</span>

					<p class="title">{{ hc.description }}</p>

					<span>
						<span v-if="hcTypeIsPing(hc.type)">
							<small class="type">Ping</small>
							<p class="ping">{{ hc.ping | pingFormat }}</p>
						</span>

						<span v-if="hcTypeIsRange(hc.type)">
							<small class="type">Range</small>
							<p class="range">{{ hc.range }}</p>
						</span>

						<span v-if="hcTypeIsManual(hc.type)">
							<small class="type">Manual</small>
							<p class="manual">{{ hc.status }}</p>
						</span>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import AppFooter from "./AppFooter";
	import {HC_TYPE_PING, HC_TYPE_RANGE, HC_TYPE_MANUAL} from "../utils/hc-type-constants";
	import {HC_STATUS_SUCCESS, HC_STATUS_WARNING, HC_STATUS_ERROR} from "../utils/hc-status-constants";

	export default {
		components: {AppFooter},
		name: 'dashboard',
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
			},
			hcItemContainerClass(value) {
				if (value === HC_STATUS_SUCCESS) {
					return 'success';
				} else if (value === HC_STATUS_WARNING) {
					return 'warning';
				} else if (value === HC_STATUS_ERROR) {
					return 'error';
				}

				return '';
			},
			hcItemIconClass(value) {
				console.log(value + '++++');
				return 'fa-check-circle';
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
		padding: 5px;
		margin: 10px 0 0 0;
	}

	.column {
		padding: 0.3rem;
		float: left;
	}

	.hc-item {
		border-radius: 5px;
		padding: 5px;
		border: 1px solid #aaaaaa;
		background-color: #cccccc;
		text-align: center;
		color: #ffffff;
	}

	.hc-item.success {
		background-color: #1ab394;
		color: #ffffff;
		border-color: #1ab394;
	}

	.hc-item.warning {
		background-color: #f8ac59;
		color: #ffffff;
		border-color: #f8ac59;
	}

	.hc-item.error {
		background-color: #ed5565;
		color: #ffffff;
		border-color: #ed5565;
	}

	.hc-item .title {
		line-height: 1.5em;
		height: 3em;
		overflow: hidden;
		font-size: 15px;
		color: #ffffff;
		margin: 6px 0 6px 0;
	}

	.hc-item .icon span {
		padding: 0;
		margin: 0;
		font-size: 30px;
	}

	.hc-item .ping,
	.hc-item .range,
	.hc-item .manual {
		margin: 0;
		font-size: 12px;
	}
</style>
