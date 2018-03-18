import React, { Component } from 'react';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import NavBar from '../components/NavBar/NavBar.js'
import SidebarMenu from '../components/SidebarMenu/SidebarMenu.js'
import Content from '../components/Content/Content.js'
import Footer from '../components/Footer/Footer.js'
import MainContainer from './MainContainer.js';
import { withHistory } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
export const history = createBrowserHistory()

// App component - represents the whole app
export default class AppContainer extends Component {

  constructor(props){    
    super(props);
    this.state = this.getMeteorData();
    this.logout = this.logout.bind(this);    
  }
  getMeteorData(){
    return { isAuthenticated: Meteor.userId() !== null };
  }
  componentWillMount(){
    if (!this.state.isAuthenticated) {
      this.props.history.push('/login');
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (!this.state.isAuthenticated) {
      this.props.history.push('/login');
    }
  }
  logout(e){
    e.preventDefault();

  }  
  render() {
    return (      
      <Fabric className="App">
        <div className="header">
          <NavBar />
        </div>      
        <div className="body">  
          {this.props.children}
        </div>
        <div className="footer ms-bgColor-themePrimary">
          <Footer />
        </div>
      </Fabric>
   
      
    );
  }
}