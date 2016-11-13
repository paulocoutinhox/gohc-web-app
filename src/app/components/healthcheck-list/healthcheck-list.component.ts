import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalService } from "../../services/GlobalService";
import { Healthcheck } from "../../models/Healthcheck";
import { HealthcheckStatus } from "../../models/HealthcheckStatus";
import { HealthcheckType } from "../../models/HealthcheckType";

@Component({
	selector: 'healthcheck-list',
	templateUrl: 'healthcheck-list.component.html',
	styleUrls: ['healthcheck-list.component.css']
})

export class HealthcheckListComponent implements OnInit {

	showData: boolean;
	showEmptyData: boolean;
	showError: boolean;
	showLoading: boolean;

	hcList: Healthcheck[];

	healthcheckStatusEnum: any = HealthcheckStatus;
	healthcheckTypeEnum: any = HealthcheckType;

	chartData: any;
	chartDataDatasets: any[];
	chartDataLabels: string[] = [];
	chartDataOptions: any = {};
	chartDataColors: string[] = [];

	constructor(private globalService: GlobalService, private router: Router) {
		this.hideAll();
		this.showLoading = true;
	}

	ngOnInit(): any {
		this.load();
	}

	load() {
		this.globalService.hcListEmitter.subscribe((hcList: Healthcheck[]) => {
			this.hcList = hcList;

			if (this.hcList == null) {
				this.hideAll();
				this.showError = true;
			} else if (this.hcList.length == 0) {
				this.hideAll();
				this.showEmptyData = true;
			} else {
				// hc list data
				this.hideAll();
				this.showData = true;

				// chart data
				var chartLabels: string[] = [];
				var chartColors: string[] = [];
				var chartDataset: number[] = [];
				var chartOptions: any = {
					animation: false
				};

				var chartDataForSuccess = 0;
				var chartDataForWarning = 0;
				var chartDataForError = 0;

				for (let hcIndex in this.hcList) {
					let hc = this.hcList[hcIndex];
					let hcStatus = hc.status;

					switch (hcStatus) {
						case 'success':
							chartDataForSuccess += 1;
							break;

						case 'warning':
							chartDataForWarning += 1;
							break;

						case 'error':
							chartDataForError += 1;
							break;
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

				this.chartData = {
					type: 'doughnut',
					animation: {
						animateScale: false,
						animateRotate: false
					},
					labels: chartLabels,
					datasets: [
						{
							data: chartDataset,
							backgroundColor: chartColors,
							hoverBackgroundColor: chartColors
						}
					],
					graphOptions: {
						animation: false
					}
				};

				this.chartDataDatasets = [{
					data: chartDataset,
					backgroundColor: chartColors,
					hoverBackgroundColor: chartColors
				}];

				this.chartDataLabels = chartLabels;
				this.chartDataOptions = chartOptions;
				this.chartDataColors = chartColors;
			}
		});
	}

	hideAll() {
		this.showData = false;
		this.showEmptyData = false;
		this.showLoading = false;
		this.showError = false;
	}

	back() {
		this.router.navigate(['/home']);
	}

}
