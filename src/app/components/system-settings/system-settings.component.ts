import { Component } from "@angular/core";
import { SystemkService } from "../../services/SystemService";
import { WebResponse } from "../../models/WebResponse";
import { ProgressService } from "../../services/ProgressService";
import { Utils } from "../../models/Utils";

@Component({
	selector: 'system-settings',
	templateUrl: 'system-settings.component.html'
})

export class SystemSettingsComponent {

	constructor(private systemService: SystemkService, private progressService: ProgressService) {

	}

	reload() {
		this.progressService.setProgress(0.5);

		this.systemService.reload()
			.then((wr: WebResponse) => {
				if (wr.success == true) {
					toastr.success('System was reload with success!');
				} else {
					toastr.error('Error when reload system, try again');
				}

				this.progressService.done();
			})
			.catch(error => {
				if (Utils.isEmpty(error)) {
					toastr.error('Error when reload system, try again');
				} else {
					toastr.error(error);
				}

				this.progressService.done();
			});
	}

}
