import React, { useState } from 'react';
import PageLayout from '@Components/shared/PageLayout';
import styled from 'styled-components';
import { Input, PasswordInput, Button, StyledButton } from '@Components/shared';

const Form = styled.form`
	width: 100%;
	max-width: 400px;
	background: white;
	border: 1px solid #eee;
	padding: 16px;
	box-sizing: border-border-box;
	color: black;

	> ${StyledButton}:first-of-type {
		margin-top: 30px;
		background: gray;
	}
	.alt-text {
		margin: 4px 0;
		text-align: center;
	}
`;

const Login = () => {
	const [formFields, setFormFields] = useState({ userName: '', passowrd: '' });
	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		setFormFields({
			...formFields,
			[name]: value
		});
	};
	return (
		<PageLayout>
			<h1>Login</h1>
			<Form>
				<Input
					value={formFields.userName}
					onChange={onChangeHandler}
					name="userName"
					placeholder="username"
				/>
				<PasswordInput
					value={formFields.passowrd}
					onChange={onChangeHandler}
					name="passowrd"
					placeholder="anvd"
				/>
				<Button secondary>Login</Button>
				<div className="alt-text">Or</div>
				<Button>register</Button>
				<Button>normal</Button>
				<Button large>large</Button>
			</Form>
		</PageLayout>
	);
};
export default Login;
