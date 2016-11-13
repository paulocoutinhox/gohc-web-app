import { Injectable } from "@angular/core";

@Injectable()
export class ProgressService {

	constructor() {

	}

	setProgress(value: number) {
		NProgress.set(value);
	}

	done() {
		NProgress.done(true)
	}

}