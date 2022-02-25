import dayjs from 'src/utils/moment';

export default (date, format = 'YYYY.MM.DD HH:mm') => {
	if (!date) {
		return '--';
	}

	return (dayjs(date).format(format) + ' (UTC' + dayjs(date).format('Z')?.split(':')?.[0] + ')').toUpperCase();
};
