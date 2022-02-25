import Constants from 'expo-constants';

console.log('env', Constants.manifest?.extra);

export default {
	...Constants.manifest?.extra || {},
};
