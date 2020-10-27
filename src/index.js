import React from 'react';
import ReactDOM from 'react-dom';
import { Image, Button } from '@Components/shared';
import './index.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Login from '@Components/pages/login/Login';
import Home from '@Components/pages/home/Home';
import DarkTheme from './Theme/Dark';
import Lighttheam from './Theme/Light';

const GlobalStyle = createGlobalStyle`
	body{
		background: white;
		min-height:100vh;
		margin:0;
		color:black;
		font-family:'Roboto';
		
	}
`;

const App = () => {
	const [theme, setTheme] = React.useState(Lighttheam); //default Theme
	return (
		<ThemeProvider
			theme={{
				...theme,
				setTheme: () => {
					setTheme((s) => (s.id === 'Dark' ? Lighttheam : DarkTheme));
				}
			}}
		>
			<GlobalStyle />
			<BrowserRouter>
				<Route exact path="/" component={Home} />
				<Route path="/login" component={Login} />
			</BrowserRouter>
		</ThemeProvider>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
