import React, { useState } from 'react';
import { Input } from './Input';
import styled from 'styled-components';

const PasswordInputStyled = styled(Input).attrs(() => ({
	type: 'password',
	placeholder: 'password'
}))`
	border-top-right-radius: 0;
	border-bottom-left-radius: 0;
`;

const PasswordInput = (props) => {
	const [showPassword, setShowPassword] = useState(false);

	return <PasswordInputStyled {...props} />;
};

export { PasswordInput };
