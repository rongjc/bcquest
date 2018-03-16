import React, { Component } from 'react';
import { withHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Content from '../components/Content/Content.js'
import SidebarMenu from '../components/SidebarMenu/SidebarMenu.js'

export default class MainPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: ''
    };
  }

  render(){
    let currentUser = this.props.currentUser;
    let userDataAvailable = (currentUser !== undefined);
    let loggedIn = (currentUser && userDataAvailable);
    return (
      <div>
          <div className="content">
            <Content>
            {this.props.children}            
            </Content>
            
          </div>
          <div className="sidebar">
          <SidebarMenu />
          </div>      
      </div>
    );
  }
}

