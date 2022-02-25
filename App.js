import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';

import useColorScheme from 'src/hooks/useColorScheme';
import Navigation from 'src/navigation';

import ReduxProvider from 'src/redux';

export default function App() {
	const colorScheme = useColorScheme();

	React.useEffect(() => {
		SplashScreen.preventAutoHideAsync();
	}, []);

	return (
		<ReduxProvider>
			<SafeAreaProvider>
				<Navigation colorScheme={colorScheme} />
			</SafeAreaProvider>
		</ReduxProvider>
	);
}
