import { Alert, Platform, Linking } from 'react-native';

export default (message) => {
	if (Platform.OS === 'ios') {
		Alert.alert(
			'Oops!',
			message || 'Sorry, we need this permissions to make this work!',
			[
				{
					text: 'Setting',
					onPress: () => {
						Linking.openURL('app-settings:');
					},
				},
				{
					text: 'Ok',
				},
			],
		);

		return;
	}
	Alert.alert('Oops!', message || 'Sorry, we need this permissions to make this work!');
};
