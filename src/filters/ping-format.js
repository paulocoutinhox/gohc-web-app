import {PING_TIME_HOURS, PING_TIME_MINUTES, PING_TIME_MS, PING_TIME_SECONDS} from "../utils/constants";

export default function (value) {
	if (!value) return '';

	value = parseInt(value);

	let newValue = 0;
	let text = "";

	if (value < PING_TIME_MS) {
		newValue = value;
		text = "ms";
	} else if (value < PING_TIME_SECONDS) {
		newValue = Math.floor(value / PING_TIME_MS);
		text = "sec";
	} else if (value < PING_TIME_MINUTES) {
		newValue = Math.floor(value / PING_TIME_SECONDS);
		text = "minute";
	} else if (value < PING_TIME_HOURS) {
		newValue = Math.floor(value / PING_TIME_MINUTES);
		text = "hour";
	} else {
		newValue = Math.floor(value / PING_TIME_HOURS);
		text = "day";
	}

	if (newValue === 1) {
		return newValue + " " + text + " ago";
	} else {
		return newValue + " " + text + "s ago";
	}
}
