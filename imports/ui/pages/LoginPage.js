import React, { Component } from 'react'
import { withHistory, Link } from 'react-router-dom'
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar';
import createBrowserHistory from 'history/createBrowserHistory'
import { Accounts } from 'meteor/accounts-base';
export const history = createBrowserHistory()

// This handles the user login and user creation
export default class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: ''
    };
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    if(Meteor.userId() !== null ){
      this.props.history.push('/');
    }
  }

  // This handles the user login
  login(e){
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;
    Meteor.loginWithPassword(email, password, (err) => {
      if(err){
        this.setState({
          error: err.reason
        });
      } else {
        this.props.history.push('/');
      }
    });
  }

  // This handles the user login
  signup(e){
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;
    Accounts.createUser({email: email, username: email, password: password}, (err) => {
      if(err){
        this.setState({
          error: err.reason
        });
      } else {
        this.props.history.push('/');
      }
    });

  }

  render(){
    const error = this.state.error;    
    return (
      <div>
          <Dialog
            hidden= {false}
            onDismiss={ this._closeDialog }
            dialogContentProps={ {
              type: DialogType.largeHeader,
              title: 'Login',
              subText: 'Some short comments and instructions here'
            } }
            modalProps={ {
              isBlocking: true,
              containerClassName: 'ms-dialogMainOverride'
            } }
          >  
            <div>
            { error.length > 0 ?
                <MessageBar
                  messageBarType={ MessageBarType.error }
                  isMultiline={ false }
                >
                {this.state.error}
                </MessageBar>
              :''}              
            </div>                
            <TextField label='Email ' id='login-email' required={ true } / >
            <TextField label='Password ' type='password' id='login-password' required={ true } / >
            <DialogFooter>
              <PrimaryButton onClick={ this.login } text='Submit' />
              <DefaultButton onClick={ this.signup } text='Signup' />
            </DialogFooter>
          </Dialog>
      </div>    
    );
  }
}