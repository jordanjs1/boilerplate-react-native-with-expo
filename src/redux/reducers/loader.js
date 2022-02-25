import { REQUEST_ERROR } from 'src/redux/actions/types';

import { Alert } from 'react-native';

export const initialState = {
	sending: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case 'TOGGLE_LOADING':
			return { sending: !state.sending };
		case 'START_LOADING':
			return { sending: true };

		case 'STOP_LOADING':
			return { sending: false };
		case REQUEST_ERROR: {
			setTimeout(() => {
				Alert.alert(
					'Request Error!',
					action?.payload?.message || action.payload,
				);
			}, 200);

			return { sending: false, error: action.payload };
		}
		default:
			return state;
	}
}
