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
import ContractStore from '../../stores/ContractStore';
import Web3Store from '../../stores/Web3Store';
import TokenStore from '../../stores/TokenStore';
import TierStore from '../../stores/TierStore';
import ReservedTokenStore from '../../stores/ReservedTokenStore';
import TierCrowdsaleListStore from '../../stores/TierCrowdsaleListStore';
import DeploymentStore from '../../stores/DeploymentStore';
import GeneralStore from '../../stores/GeneralStore';
import GasPriceStore from '../../stores/GasPriceStore';
import CrowdsaleStore from '../../stores/CrowdsaleStore';
import CrowdsaleBlockListStore from '../../stores/CrowdsaleBlockListStore';
import PricingStrategyStore from '../../stores/PricingStrategyStore';

const browserHistory = createBrowserHistory();
const contractStore = new ContractStore
const web3Store = new Web3Store
const tokenStore = new TokenStore
const tierStore = new TierStore
const reservedTokenStore = new ReservedTokenStore
const tierCrowdsaleListStore = new TierCrowdsaleListStore
const deploymentStore = new DeploymentStore
const generalStore = new GeneralStore
const gasPriceStore = new GasPriceStore
const crowdsaleStore = new CrowdsaleStore
const crowdsaleBlockListStore = new CrowdsaleBlockListStore
const pricingStrategyStore = new PricingStrategyStore

export const renderRoutes = () => (
	<Provider 
		contractStore={contractStore}
		web3Store={web3Store}
		tokenStore={tokenStore}
		tierStore={tierStore}
		reservedTokenStore={reservedTokenStore}
		tierCrowdsaleListStore={tierCrowdsaleListStore}
		deploymentStore={deploymentStore}
		generalStore={generalStore}
		gasPriceStore={gasPriceStore}
		crowdsaleStore={crowdsaleStore}		
		crowdsaleBlockListStore = {crowdsaleBlockListStore}
		pricingStrategyStore = {pricingStrategyStore}
	>
	<Router history={browserHistory} >		
	    <AppContainer>	   
	    	<Switch>	 
			<Route path="/login" component={LoginPage}/>
			<Route path="/logout" component={LogoutPage}/>
			<Route path="/signup" component={SignupPage}/>	    	
	      	<Route path="/test" component={TestPage}/>
	      	<Route path="/features" component={NotFoundPage}/>
      	   	<Route path="/" >	    		
	    		<MainContainer>
	    			<Switch>	    			
	    			<Route path="/crowdsale/new/1" component={CrowdsaleContractStep1}/>
	    			<Route path="/crowdsale/new/2" component={CrowdsaleContractStep2}/>
	    			<Route path="/crowdsale/new/3" component={CrowdsaleContractStep3}/>
	    			<Route path="/crowdsale/new/4" component={CrowdsaleContractStep3}/>
	    			</Switch>
	    		</MainContainer>
	    	</Route>
	    	</Switch>
	    </AppContainer>	    
	</Router>
	</Provider>
	
);