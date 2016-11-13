import { Injectable, EventEmitter } from "@angular/core";
import { Healthcheck } from "../models/Healthcheck";

@Injectable()
export class GlobalService {

	public hcCount: number = 0;
	public hcList: Healthcheck[];
	public hcCountEmitter = new EventEmitter<number>();
	public hcListEmitter = new EventEmitter<Healthcheck[]>();

	public loadingDelayTime: number = 0;

	constructor() {

	}

	emitJobsCount() {
		this.hcCountEmitter.emit(this.hcCount);
	}

	emitJobList() {
		this.hcListEmitter.emit(this.hcList);
	}

}