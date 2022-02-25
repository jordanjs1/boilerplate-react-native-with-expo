export default (url) => {
	if (!url || (typeof url !== 'string')) {
		return false;
	}

	return !!url.match(/\w+\.(caf|m4a)$/gi);
};
