export default function (value) {
	if (!value) return '';

	value = parseInt(value);

	const TIME_MS = 1000;
	const TIME_SECONDS = (TIME_MS * 60);
	const TIME_MINUTES = (TIME_SECONDS * 60);
	const TIME_HOURS = (TIME_MINUTES * 60);
	const TIME_DAYS = (TIME_HOURS * 24);

	let newValue = 0;
	let text = "";

	if (value < TIME_MS) {
		newValue = value;
		text = "m";
	} else if (value < TIME_SECONDS) {
		newValue = Math.floor(value / TIME_MS);
		text = "sec";
	} else if (value < TIME_MINUTES) {
		newValue = Math.floor(value / TIME_SECONDS);
		text = "minute";
	} else if (value < TIME_HOURS) {
		newValue = Math.floor(value / TIME_MINUTES);
		text = "hour";
	} else {
		newValue = Math.floor(value / TIME_HOURS);
		text = "day";
	}

	if (newValue == 1) {
		return newValue + " " + text + " ago";
	} else {
		return newValue + " " + text + "s ago";
	}
}
