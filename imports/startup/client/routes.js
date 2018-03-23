import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
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

import CrowdsaleContractStep1 from '../../ui/components/CrowdsaleContractStep1/CrowdsaleContractStep1.js'
import CrowdsaleContractStep2 from '../../ui/components/CrowdsaleContractStep2/CrowdsaleContractStep2.js'
import CrowdsaleContractStep3 from '../../ui/components/CrowdsaleContractStep3/CrowdsaleContractStep3.js'
import CrowdsaleContractStep4 from '../../ui/components/CrowdsaleContractStep4/CrowdsaleContractStep4.js'
import Manage from '../../ui/components/Manage/index.js'
import CrowdsaleAll from '../../ui/components/CrowdsaleAll/CrowdsaleAll.js'
import Invest from '../../ui/components/Invest/index.js'

// read ../../stores/index.js for configuration
import * as stores from '../../stores'

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
	<Provider 
		{...stores}
	>
	<Router history={browserHistory} >		
	    <AppContainer>	   
	    	<Switch>	 
			<Route path="/login" component={LoginPage}/>
			<Route path="/logout" component={LogoutPage}/>	      	    	
      	   	<Route path="/" >
	    		<MainContainer>
	    			<Switch>	    			
	    			<Route path="/crowdsale/new/1" component={CrowdsaleContractStep1}/>
	    			<Route path="/crowdsale/new/2" component={CrowdsaleContractStep2}/>
	    			<Route path="/crowdsale/new/3" component={CrowdsaleContractStep3}/>
	    			<Route path="/crowdsale/new/4" component={CrowdsaleContractStep4}/>	    			
	    			<Route path="/crowdsale/manage/:crowdsaleAddress" component={Manage}/>
	    			<Route path="/crowdsale/invest" component={Invest}/>	  
	    			<Route path="/crowdsale/list" component={CrowdsaleAll}/>
	    			</Switch>
	    		</MainContainer>
	    	</Route>
	    	</Switch>
	    </AppContainer>	    
	</Router>
	</Provider>
	
);