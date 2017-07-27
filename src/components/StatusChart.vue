<script>
	import {Doughnut, mixins} from "vue-chartjs";

	export default Doughnut.extend({
		name: 'status-chart',
		mixins: [mixins.reactiveProp],
		props: ['chartData', 'options'],
		mounted () {
			//console.log(this.chartData);
			this.renderChart(this.chartData, this.options);
			/*
			this.renderChart({
				labels: ['Success', 'Warning', 'Error'],
				datasets: [
					{
						backgroundColor: ['#39c558', '#ffbe41', '#ff3e43'],
						data: [12, 20, 5]
					}
				]
			}, {
				responsive: false,
				maintainAspectRatio: true
			})
			*/
		}
	});
</script>

<style scoped>
	canvas {
		margin: 0 auto;
	}
</style>
