export default (filename) => {
	if (!filename) {
		return undefined;
	}
	return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename) : undefined;
};
