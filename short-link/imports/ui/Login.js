import React from 'react';
import { Meteor } from 'meteor/meteor';
//Prevents full page refresh and helps with browserHistory
import { Link } from 'react-router';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    //Set internal component state
    this.state = {
      error: ''
    };
  }

  login(e){
    //Prevent reload
    e.preventDefault();

    //Get values from the form by REF
    let email = this.refs.refEmail.value.trim();
    let password = this.refs.refPassword.value.trim();

    Meteor.loginWithPassword({email}, password, (err) => {
      if (err) {
        this.setState({error: 'Login Failed. Check email and password.'});
      } else {
        this.setState({error: ''});
      }
    });

  }

  render() {
    return (
      <div>
        <h1>Login to Short Link</h1>

        {/* If error is not empty, then render a paragraph to display it */}
        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form onSubmit={this.login.bind(this)} noValidate>
          <input type="email" ref="refEmail" name="email" placeholder="Email"/>
          <input type="password" ref="refPassword" name="password" placeholder="Password"/>
          <button>Login</button>
        </form>

        <Link to="/signup">Create an account</Link>
      </div>
    );
  }
}
