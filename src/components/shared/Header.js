import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import styled, { ThemeContext } from 'styled-components';
import { Toggle } from '@Components/shared';

const HeaderWrapper = styled.header`
	height: 60px;
	width: 100%;
	box-sizing: border-box;
	display: flex;
	padding: 0 16px;
	position: fixed;
	background: #eeeeee;
	top: 0;
`;

const MobileMenuIcon = styled.div`
	margin: auto 0 auto auto;
	width: 25px;
	min-width: 25px;
	padding: 5px;
	> div {
		height: 3px;
		background: black;
		margin: 5px 0;
		width: 100%;
	}

	@media (min-width: 768px) {
		display: none;
	}
`;

const Menu = styled.nav`
	display: ${(p) => (p.open ? 'block' : 'none')};
	font-family: 'Open Sans';
	position: absolute;
	left: 0;
	top: 60px;
	padding: 8px;
	box-sizing: border-box;

	@media (min-width: 768px) {
		display: flex;
		background: none;
		left: initial;
		top: initial;
		position: relative;
		width: initial;
		border-bottom: none;
		margin: auto 0 auto auto;
	}
`;
//here we declared Link component who accepts "isActive" props but doesnt
//pass down to HTML element which is going to render.
const Link = ({ isActive, children, ...props }) => {
	return <ReactRouterLink {...props}>{children}</ReactRouterLink>;
};

//Above "isActive" props is used to add conditional styling
const StyledLink = styled(Link)`
	padding: 4px 8px;
	display: block;
	text-align: center;
	box-sizing: border-box;
	margin: auto 0;
	font-weight: ${(p) => (p.isActive ? 'bold' : 'normal')};
`;

const Header = () => {
	const [menuOpen, setMenu] = useState(false);
	const { id, setTheme } = React.useContext(ThemeContext);
	return (
		<HeaderWrapper>
			<MobileMenuIcon onClick={() => setMenu((s) => !s)}>
				<div />
				<div />
				<div />
			</MobileMenuIcon>
			<Menu open={menuOpen}>
				<StyledLink to="/" isActive>
					Home
				</StyledLink>
				<StyledLink to="/Login"> Login</StyledLink>
				<Toggle isActive={id === 'Dark' ? true : false} onToggle={setTheme} />
			</Menu>
		</HeaderWrapper>
	);
};

export default Header;
