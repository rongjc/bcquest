import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// route components
import AppContainer from '../../ui/containers/AppContainer.js';
import NotFoundPage from '../../ui/pages/NotFoundPage.js';
import TestPage from '../../ui/pages/TestPage.js';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
	<Router history={browserHistory}>
	    <AppContainer>	   
	    	<Route exact={true} path="/" component={NotFoundPage} />   
	      	<Route path='/test' component={TestPage} />
	      	<Route path='/features' component={NotFoundPage} />
	    </AppContainer>
	</Router>
);