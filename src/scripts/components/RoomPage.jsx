/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var _ = require('lodash')

var Routes = require('react-router');
var Link = Routes.Link;

var MessageList = require('./MessageList');
var UserList = require('./UserList');
var SendForm = require('./SendForm');
var moment = require('moment')

var RoomPage = React.createClass({
  addMessage: function(user, text){
    console.log(user);
    console.log(text);
    var messages = this.state.messages
    var m = moment();
    messages.push({
      id: m.unix(),
      text: text,
      user: user,
      timestamp: m
    })
    this.setState({messages: messages});
  },
  getInitialState: function () {
    return {
      currentUser: {
        name: 'username',
      },
      userlist: [{name: 'username'}, {name: 'username2'}, {name: 'username3'}],
      messages: [
        {
          id: 1,
          user: 'username 1',
          text: 'Message1',
          timestamp: moment()
        },
        {
          id: 2,
          user: 'username2',
          text: 'Message2',
          timestamp: moment()
        }
      ]
    };
  },
  render: function() {
    return (
      <div>
        <MessageList messages={this.state.messages} />
        <UserList userlist={this.state.userlist} />
        <SendForm user={this.state.currentUser} onsubmit={this.addMessage}/>
      </div>
    );
  }
});

module.exports = RoomPage;
