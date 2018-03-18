import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'mobx-react';

// route components
import AppContainer from '../../ui/containers/AppContainer.js';
import MainContainer from '../../ui/containers/MainContainer.js';

// pages
import NotFoundPage from '../../ui/pages/NotFoundPage.js';
import TestPage from '../../ui/pages/TestPage.js';
import SignupPage from '../../ui/pages/SignupPage.js'
import LoginPage from '../../ui/pages/LoginPage.js'
import LogoutPage from '../../ui/pages/LogoutPage.js'
import CrowdSaleContractPage from '../../ui/pages/CrowdSaleContractPage.js'
<<<<<<< HEAD

import CrowdsaleContractStep1 from '../../ui/components/CrowdsaleContractStep1/CrowdsaleContractStep1.js'
import ContractStore from '../../stores/ContractStore';
import Web3Store from '../../stores/Web3Store';

=======
>>>>>>> c836d8e339f81873babe2e2ca3a9218d3d6a728c

const browserHistory = createBrowserHistory();
const contractStore = new ContractStore
const web3Store = new Web3Store

export const renderRoutes = () => (
<<<<<<< HEAD
	<Provider 
		contractStore={contractStore}
		web3Store={web3Store}
	>
	<Router history={browserHistory} >		
=======
	<Router history={browserHistory} >
>>>>>>> c836d8e339f81873babe2e2ca3a9218d3d6a728c
	    <AppContainer>	   
	    	<Switch>	 
			<Route path="/login" component={LoginPage}/>
			<Route path="/logout" component={LogoutPage}/>
			<Route path="/signup" component={SignupPage}/>	    	
	      	<Route path="/test" component={TestPage}/>
	      	<Route path="/features" component={NotFoundPage}/>
      	   	<Route path="/" >	    		
	    		<MainContainer>
<<<<<<< HEAD
	    			<Switch>
	    			<Route path="/crowdsale/new" component={CrowdsaleContractStep1}/>
	    			<Route path="/crowdsale/new/1" component={CrowdsaleContractStep1}/>
	    			</Switch>
	    		</MainContainer>
	    	</Route>
	    	</Switch>
	    </AppContainer>	    
=======
	    			<Route path="/crowdsale/new" component={CrowdSaleContractPage}/>	    		
	    		</MainContainer>
	    	</Route>
	    	</Switch>
	    </AppContainer>
>>>>>>> c836d8e339f81873babe2e2ca3a9218d3d6a728c
	</Router>
	</Provider>
	
);