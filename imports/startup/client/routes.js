import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// route components
import AppContainer from '../../ui/containers/AppContainer.js';
import MainContainer from '../../ui/containers/MainContainer.js';

// pages
import NotFoundPage from '../../ui/pages/NotFoundPage.js';
import TestPage from '../../ui/pages/TestPage.js';
import SignupPage from '../../ui/pages/SignupPage.js'
import LoginPage from '../../ui/pages/LoginPage.js'
import LogoutPage from '../../ui/pages/LogoutPage.js'

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
	<Router history={browserHistory}>
	    <AppContainer>	   
	    	<Route exact={true} path="/" component={MainContainer} />
			<Route path="/login" component={LoginPage}/>
			<Route path="/logout" component={LogoutPage}/>
			<Route path="/signup" component={SignupPage}/>	    	
	      	<Route path="/test" component={TestPage}/>
	      	<Route path="/features" component={NotFoundPage}/>
	    </AppContainer>
	</Router>
);