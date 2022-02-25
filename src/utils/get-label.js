export default (options = [], val) => {
	if (options.length === 0 || !val) {
		return '';
	}

	const option = options.find(el => {
		return el.value === val.trim();
	});

	return option ? option.label : '';
};
