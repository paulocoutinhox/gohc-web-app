import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { WebResponse } from "../models/WebResponse";
import { Healthcheck } from "../models/Healthcheck";
import "rxjs/add/operator/toPromise";

@Injectable()
export class HealthcheckService {

	constructor(private http: Http) {

	}

	count(): Promise<WebResponse> {
		return this.http.get('/api/healthcheck/count')
			.toPromise()
			.then((response: Response) => {
				return response.json() as WebResponse;
			})
			.catch(this.handleError);
	}

	list(): Promise<WebResponse> {
		return this.http.get('/api/healthcheck/list')
			.toPromise()
			.then((response: Response) => {
				let wr = response.json() as WebResponse;
				wr.data['list'] = wr.data['list'] as Healthcheck[];
				wr.data['count'] = wr.data['count'] as number;
				return wr;
			})
			.catch(this.handleError);
	}

	private handleError(error: any) {
		return Promise.reject(error.message || error);
	}

}