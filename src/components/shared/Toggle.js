import React from 'react';
import styled from 'styled-components';

const TogglerWrapper = styled.div`
	width: 50px;
	min-width: 50px;
	height: 25px;
	border-radius: 25px;
	border: 1px solid #666;
	background: black;
	margin: auto;
	display: flex;
`;

const Notch = styled.div`
	width: 21px;
	height: 21px;
	border-radius: 50%;
	border: 1px solid #666;
	background: white;
	margin-top: 1px;
	transition: transform 0.1s linear;
	transform: translate(${(p) => (p.isActive ? '26px' : '1px')});
`;

const Toggle = ({ isActive, onToggle }) => {
	return (
		<TogglerWrapper>
			<Notch isActive={isActive} onClick={onToggle} />
		</TogglerWrapper>
	);
};

export { Toggle };
