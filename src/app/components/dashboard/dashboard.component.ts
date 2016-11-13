import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalService } from "../../services/GlobalService";
import { Healthcheck } from "../../models/Healthcheck";
import { HealthcheckStatus } from "../../models/HealthcheckStatus";
import { HealthcheckType } from "../../models/HealthcheckType";

@Component({
	selector: 'dashboard',
	templateUrl: 'dashboard.component.html',
	styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit {

	showData: boolean;
	showEmptyData: boolean;
	showError: boolean;
	showLoading: boolean;

	hcList: Healthcheck[];

	healthcheckStatusEnum: any = HealthcheckStatus;
	healthcheckTypeEnum: any = HealthcheckType;

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
				this.hideAll();
				this.showData = true;
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
