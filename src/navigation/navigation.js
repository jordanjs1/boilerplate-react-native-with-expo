/* eslint-disable no-unused-expressions */
import React from 'react';
import { StackActions } from '@react-navigation/native';

export const isReadyRef = React.createRef();

export const navigationRef = React.createRef();

export default {
	navigate: (name, params) => {
		if (isReadyRef.current && navigationRef.current) {
			navigationRef.current?.navigate(name, params);
		}
	},
	push: (...args) => {
		if (isReadyRef.current && navigationRef.current) {
			navigationRef.current?.dispatch(StackActions.push(...args));
		}
	},
};
