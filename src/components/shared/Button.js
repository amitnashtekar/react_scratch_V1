import React from 'react';
import styled, { css } from 'styled-components';
// import _ from 'lodash';

const largeStyle = ({ large }) => {
	if (large) {
		return css`
			padding: 10px;
			border-radius: 5px;
			font-size: 1.5em;
		`;
	} else {
		return css`
			padding: 8px;
			border-radius: 4px;
			font-size: 1em;
		`;
	}
};
const StyledButton = styled.button`
	width: 100%;
	background: ${(p) =>
		p.secondary ? p.theme.secondaryColor : p.theme.primaryColor};
	${largeStyle};
	&:disabled {
		color: gray;
		background: gray;
	}
`;
let myObj = null;
const Button = ({ children, ...props }) => {
	const onClickHandlr = (evt) => {
		const _ = import(/*webpackChunkName: "lodash" */ 'lodash')
			.then((module) => module.default)
			.then((_) => (myObj = _.clone({ name: 'Amit' })));
		//const myObj = _.clone({'name': 'Amit'});
	};

	return (
		<StyledButton onClick={onClickHandlr} {...props}>
			{children}Click me baba!! {myObj}
		</StyledButton>
	);
};

export { Button, StyledButton };
