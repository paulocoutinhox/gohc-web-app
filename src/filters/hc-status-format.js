import {HC_STATUS_ERROR, HC_STATUS_SUCCESS, HC_STATUS_WARNING, HC_STATUS_TIMEOUT} from "../utils/hc-status-constants";

export default function (value) {
	if (!value) return '';

	if (value === HC_STATUS_SUCCESS) {
		return '<span class="tag is-success">success</span>';
	} else if (value === HC_STATUS_WARNING) {
		return '<span class="tag is-warning">warning</span>';
	} else if (value === HC_STATUS_ERROR) {
		return '<span class="tag is-danger">error</span>';
	} else if (value === HC_STATUS_TIMEOUT) {
		return '<span class="tag is-dark">timeout</span>';
	}

	return '<span class="tag is-light">' + value + '</span>';
}
