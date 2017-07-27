<script>
	import {Doughnut, mixins} from "vue-chartjs";

	export default Doughnut.extend({
		name: 'status-chart',
		mixins: [mixins.reactiveProp],
		props: ['chartData', 'options'],
		mounted () {
			this.renderChart(this.chartData, this.options);
		}
	});
</script>

<style scoped>
	canvas {
		margin: 0 auto;
		max-width: 300px;
	}
</style>
