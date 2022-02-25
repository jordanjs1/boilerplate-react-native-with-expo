import { combineReducers } from 'redux';

import auth, { initialState as authInitial } from './auth';
import loader, { initialState as initialLoader } from './loader';

export const initialState = {
	auth: authInitial,
	loader: initialLoader,
};

const appReducer = combineReducers({
	auth,
	loader,
});

export default (state, action) => {
	return appReducer(action.type === 'LOGOUT_SUCCESS' ? initialState : state, action);
};
