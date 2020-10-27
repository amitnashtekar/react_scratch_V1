import React from 'react';
import spiderManImg from '@Assets/images/spiderman.png';
import styled from 'styled-components';

const StyledImage = styled.img``;
const Image = () => {
	const foo = {
		greeting: 'hey',
		audiences: ['world', 'friends', 'bros'],

		bar() {
			return this.audiences.map((audience) => {
				return `${this.greeting} ${audience}`; // `this` is `undefined` when inspecting
			});
		}
	};
	console.log('process.env.DB_KEY', process.env.DB_KEY);
	return (
		<div>
			<div>{foo.bar()}</div>
			<StyledImage src={spiderManImg} alt="logo" />
		</div>
	);
};

export { Image };
