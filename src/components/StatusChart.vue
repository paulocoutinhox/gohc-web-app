<script>
	import {Doughnut} from "vue-chartjs";

	export default Doughnut.extend({
		name: 'status-chart',
		mounted () {
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
		}
	});
</script>

<style scoped>
	canvas {
		margin: 0 auto;
	}
</style>
