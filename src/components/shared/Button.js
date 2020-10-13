import React from 'react';
import styled from 'styled-components';
// import _ from 'lodash';

const StyledButton = styled.button`
	width: 100%;
`;
let myObj = null;
const Button = (props) => {
	const onClickHandlr = (evt) => {
		const _ = import(/*webpackChunkName: "lodash" */ 'lodash')
			.then((module) => module.default)
			.then((_) => (myObj = _.clone({ name: 'Amit' })));
		//const myObj = _.clone({'name': 'Amit'});
	};

	return (
		<StyledButton onClick={onClickHandlr}>Click me baba!! {myObj}</StyledButton>
	);
};

export default Button;
