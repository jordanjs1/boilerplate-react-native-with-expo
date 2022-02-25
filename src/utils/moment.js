import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';

import dayjs from 'dayjs';

dayjs.locale('en');

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

export default dayjs;
