<template>
	<div class="column is-2-desktop is-3-tablet is-6-mobile">
		<div class="hc-item" v-bind:class="hcItemContainerClass(item.status)">
			<span class="icon">
				<span class="fa" v-bind:class="hcItemIconClass(item.status)"></span>
			</span>

			<p class="title">{{ item.description }}</p>

			<span>
				<span v-if="hcTypeIsPing(item.type)">
					<small class="type">Ping</small>
					<p class="ping">{{ item.ping | pingFormat }}</p>
				</span>

				<span v-if="hcTypeIsRange(item.type)">
					<small class="type">Range</small>
					<p class="range">{{ item.range }}</p>
				</span>

				<span v-if="hcTypeIsManual(item.type)">
					<small class="type">Manual</small>
					<p class="manual">{{ item.status }}</p>
				</span>
			</span>
		</div>
	</div>
</template>

<script>
	import {HC_TYPE_PING, HC_TYPE_RANGE, HC_TYPE_MANUAL} from "../utils/hc-type-constants";
	import {HC_STATUS_SUCCESS, HC_STATUS_WARNING, HC_STATUS_ERROR} from "../utils/hc-status-constants";

	export default {
		name: 'dashboard-item',
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
				if (value === HC_STATUS_SUCCESS) {
					return 'fa-check-circle';
				} else if (value === HC_STATUS_WARNING) {
					return 'fa-exclamation-circle';
				} else if (value === HC_STATUS_ERROR) {
					return 'fa-times-circle';
				}

				return '';
			}
		},
		props: ['item']
	}
</script>

<style scoped>
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
