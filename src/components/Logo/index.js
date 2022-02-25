import React from 'react';
import PropTypes from 'prop-types';

import { Image } from 'react-native';

const propTypes = {
	style: PropTypes.object,
	size: PropTypes.number,
};

const defaultProps = {
	style: {},
	size: 50,
};

const Logo = (props) => {
	const { style, size } = props;

	return (
		<Image
			style={[
				style,
				{
					width: size,
					height: size,
				},
			]}
			resizeMode="contain"
			source={require('./images/logo.png')}
		/>
	);
};

Logo.propTypes = propTypes;

Logo.defaultProps = defaultProps;

export default Logo;
