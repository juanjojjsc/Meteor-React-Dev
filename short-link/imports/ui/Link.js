import React from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class Link extends React.Component {

  logout() {
    Accounts.logout();
  }

  render() {
    return (
      <div>
        <h1>Your links</h1>
        <button onClick={this.logout.bind(this)}>Logout</button>
      </div>
    );
  }
}
