import React, { Component } from 'react';
import SidebarMenu from '../components/SidebarMenu/SidebarMenu.js';
import Content from '../components/Content/Content.js';

export default class MainContainer extends Component {
  constructor(props){
<<<<<<< HEAD
    super(props);    
=======
    super(props);
>>>>>>> c836d8e339f81873babe2e2ca3a9218d3d6a728c
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

