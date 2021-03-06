import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Links } from '../api/links';
import LinksList from './LinksList';


export default class Link extends React.Component {

  logout() {
    Accounts.logout();
  }

  onSubmit(e) {
    e.preventDefault();
    const url = this.refs.url.value.trim();
    if (url) {
      Links.insert({ url, userId: Meteor.userId() });
      this.refs.url.value = '';
    }
  }

  render() {
    return (
      <div>
        <h1>Your links</h1>
        <LinksList/>
        <p>Add Link</p>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="url" placeholder="URL"/>
          <button>Add</button>
        </form>
        <button onClick={this.logout.bind(this)}>Logout</button>
      </div>
    );
  }
}
