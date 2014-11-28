/**
 * @jsx React.DOM
 */

'use strict';

var Routes = require('react-router');
var Link = Routes.Link;
var React = require('react/addons');

var UsersActions = require('../actions/UsersActions');

var LoginPage = React.createClass({
  getInitialState: function() {
      return {username: 'user'};
  },
  handleChange: function(event) {
    this.setState({username: event.target.value});
  },
  handleClick: function() {
    console.log('click');
    UsersActions.login(this.state.username);
    console.log('click2');
  },
  render: function() {
    return (
      <div className='main'>
        <input type="text" value={this.state.username} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Login</button>
      </div>
    );
  }
});

module.exports = LoginPage;
