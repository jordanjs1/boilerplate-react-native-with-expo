import React from 'react';
// import PropTypes from 'prop-types';
import { StatusBar } from 'expo-status-bar';

import { useIsFocused } from '@react-navigation/native';

// import { View } from 'react-native';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const FocusAwareStatusBar = (props) => {
	const isFocused = useIsFocused();

	return isFocused ? <StatusBar {...props} /> : null;
};

FocusAwareStatusBar.propTypes = propTypes;

FocusAwareStatusBar.defaultProps = defaultProps;

export default FocusAwareStatusBar;
