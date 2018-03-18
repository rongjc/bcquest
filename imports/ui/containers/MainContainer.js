import React, { Component } from 'react';
import SidebarMenu from '../components/SidebarMenu/SidebarMenu.js';
import Content from '../components/Content/Content.js';

export default class MainContainer extends Component {
  constructor(props){
    super(props);    
  }

  render(){
    return (
      <div className="main-container">

      	<div className="sidebar">
      		<SidebarMenu />
      	</div>      
        <div className="content">
			<Content>
			{this.props.children}            
			</Content>
      	</div>
      </div>
    );
  }
}

