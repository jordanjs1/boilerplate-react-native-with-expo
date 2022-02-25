/* eslint-disable react/prop-types */
import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef, isReadyRef } from 'src/navigation/navigation';

import NotFoundScreen from 'src/screens/NotFoundScreen';

import useCachedResources from 'src/hooks/useCachedResources';

import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

import screenOptionsDefault from './configs';

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator();

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }) {
	const [isLoadingComplete, loggedIn] = useCachedResources();

	React.useEffect(() => {
		isReadyRef.current = true;

		return () => {
			isReadyRef.current = false;
		};
	}, []);

	if (!isLoadingComplete) {
		return null;
	}

	return (
		<NavigationContainer
			ref={navigationRef}
			linking={LinkingConfiguration}
			theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
			onReady={() => {
				isReadyRef.current = true;
			}}
		>
			<Stack.Navigator
				screenOptions={{
					...screenOptionsDefault,
					headerShown: false,
				}}
			>
				{
					// !loggedIn ?
					// 	<>
					// 		<Stack.Screen name="Login" component={LoginScreen} />
					// 	</> :
					// 	<>
					// 		<Stack.Screen name="Root" component={BottomTabNavigator} />
					// 	</>
				}
				<Stack.Screen name="Root" component={BottomTabNavigator} />
				<Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
