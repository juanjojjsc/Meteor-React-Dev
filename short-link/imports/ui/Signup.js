import React from 'react';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    //Set internal component state
    this.state = {
      error: ''
    };
  }

  submit(e){
    //Prevent reload
    e.preventDefault();

    //Get values from the form by REF
    let email = this.refs.refEmail.value.trim();
    let password = this.refs.refPassword.value.trim();

    if (password.length < 9) {
      return this.setState({error: 'Password must be at least 8 characters long.'});
      //like a break from the function. never create users
    }

    //Sign users up
    Accounts.createUser({email,password}, (err) => {
      if (err) {
        this.setState({error: err.reason});
      } else {
        this.setState({error: ''});
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Create an account</h1>

        {/* If error is not empty, then render a paragraph to display it */}
        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form onSubmit={this.submit.bind(this)} noValidate>
          <input type="email" ref="refEmail" name="email" placeholder="Email"/>
          <input type="password" ref="refPassword" name="password" placeholder="Password"/>
          <button>Register</button>
        </form>

        <Link to="/">Already have an account?</Link>
      </div>
    );
  }
}
