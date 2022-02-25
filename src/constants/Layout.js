import { Dimensions } from 'react-native';
import Constants from 'expo-constants';

const { width, height } = Dimensions.get('window');

export default {
	statusBarHeight: Constants.statusBarHeight,
	window: {
		width,
		height,
	},
	isSmallDevice: width < 375,
};
