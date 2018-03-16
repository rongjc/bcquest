import React, { Component } from 'react'
import { withHistory, Link } from 'react-router-dom'
import { createContainer } from 'meteor/react-meteor-data'

export default class SignupPage extends Component {
  constructor(props){
    super(props);
  }

  handleSubmit(e){

  }

  render(){
    const error = this.state.error;
    return (
      <div className="modal show">
	       test
      </div>
    );
  }
}