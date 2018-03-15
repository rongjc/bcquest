import React, { Component } from 'react';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import NavBar from '../components/NavBar/NavBar.js'
import SidebarMenu from '../components/SidebarMenu/SidebarMenu.js'
import Content from '../components/Content/Content.js'
import Footer from '../components/Footer/Footer.js'


// App component - represents the whole app
export default class App extends Component {

  render() {
    return (      
      <Fabric className="App">
        <div className="header">
          <NavBar />
        </div>        
        <div className="body">
          <div className="content">
            <Content>
            {this.props.children}
            </Content>
            
          </div>
          <div className="sidebar">
            <SidebarMenu />
          </div>      
        </div>
        <div className="footer ms-bgColor-themePrimary">
          <Footer />
        </div>
      </Fabric>
   
      
    );
  }
}