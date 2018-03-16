import React, { Component } from 'react'
import { withHistory, Link } from 'react-router-dom'
import { createContainer } from 'meteor/react-meteor-data'
import createBrowserHistory from 'history/createBrowserHistory'

export const history = createBrowserHistory()

export default class LogoutPage extends Component {
  constructor(props){
    super(props);
    Meteor.logout( (err) => {
      if (err) {
          console.log( err.reason );
      } else {
          this.props.history.push('/login');
      }
    });
  }
  render(){
    
    return (
      <div className="modal show">
         test
      </div>
    );
  }
}