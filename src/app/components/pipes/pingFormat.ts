import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'pingFormat'
})

export class PingFormat implements PipeTransform {

	TIME_MS: number      = 1000;
	TIME_SECONDS: number = (this.TIME_MS * 60);
	TIME_MINUTES: number = (this.TIME_SECONDS * 60);
	TIME_HOURS: number   = (this.TIME_MINUTES * 60);
	TIME_DAYS: number    = (this.TIME_HOURS * 24);

	transform(value: any, ...args: string[]): any {
		if (value) {
			var newValue = 0;
			var text = "";

			if (value < this.TIME_MS) {
				newValue = value;
				text = "m";
			} else if (value < this.TIME_SECONDS) {
				newValue = Math.floor(value / this.TIME_MS);
				text = "sec";
			} else if (value < this.TIME_MINUTES) {
				newValue = Math.floor(value / this.TIME_SECONDS);
				text = "minute";
			} else if (value < this.TIME_HOURS) {
				newValue = Math.floor(value / this.TIME_MINUTES);
				text = "hour";
			} else {
				newValue = Math.floor(value / this.TIME_HOURS);
				text = "day";
			}

			if (newValue == 1) {
				return newValue + " " + text + " ago";
			} else {
				return newValue + " " + text + "s ago";
			}
		}
	}

}