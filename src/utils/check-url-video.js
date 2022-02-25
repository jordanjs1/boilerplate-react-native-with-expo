export default (url) => {
	if (!url || (typeof url !== 'string')) {
		return false;
	}

	return !!url.match(/\w+\.(mp4|mov)$/gi);
};
