export function toggleLoader() {
	return {
		type: 'TOGGLE_LOADING',
	};
}

export function startLoader() {
	return {
		type: 'START_LOADING',
	};
}

export function stopLoader() {
	return {
		type: 'STOP_LOADING',
	};
}
