import { Component, OnInit } from "@angular/core";
import { GlobalService } from "../../services/GlobalService";
import { Observable } from "rxjs/Rx";
import { WebResponse } from "../../models/WebResponse";
import { HealthcheckService } from "../../services/HealthcheckService";

@Component({
	selector: 'app-main',
	templateUrl: 'app-main.component.html'
})

export class AppMainComponent implements OnInit {

	constructor(private globalService: GlobalService, private hcService: HealthcheckService) {

	}

	ngOnInit(): any {
		let jobsCountTimer = Observable.timer(1000, 1000);
		jobsCountTimer.subscribe(() => this.setJobCount());
	}

	setJobCount() {
		this.hcService.list()
			.then((wr: WebResponse) => {
				this.globalService.hcCount = wr.data['count'];
				this.globalService.hcList = wr.data['list'];
				this.globalService.emitJobsCount();
				this.globalService.emitJobList();
			})
			.catch(() => {
				this.globalService.hcCount = 0;
				this.globalService.hcList = null;
				this.globalService.emitJobsCount();
				this.globalService.emitJobList();
			});
	}

}
