import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { WebResponse } from "../models/WebResponse";
import { Healthcheck } from "../models/Healthcheck";
import "rxjs/add/operator/toPromise";

@Injectable()
export class SystemkService {

	constructor(private http: Http) {

	}

	reload(): Promise<WebResponse> {
		return this.http.get('/api/system/reload')
			.toPromise()
			.then((response: Response) => {
				return response.json() as WebResponse;
			})
			.catch(this.handleError);
	}

	private handleError(error: any) {
		return Promise.reject(error.message || error);
	}

}