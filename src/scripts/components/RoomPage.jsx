/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var _ = require('lodash')

var Routes = require('react-router');
var Link = Routes.Link;

var Fluxable = require('./../behaviors/Fluxable');
var MessagesStore = require('./../stores/MessagesStore');
var MessagesActions = require('./../actions/MessagesActions');
var UsersActions = require('./../actions/UsersActions');
var UsersStore = require('./../stores/UsersStore');
// var MessagesActions = require('./../actions/MessagesActions');

var MessageList = require('./MessageList');
var UserList = require('./UserList');
var SendForm = require('./SendForm');

var moment = require('moment');

var RoomPage = React.createClass({
  mixins: [Fluxable],
  watchStores: [MessagesStore, UsersStore],
  tick: function() {
    ChatApi.activeUser(this.state.currentUser);
    console.log('setInterval');
  },
  componentDidMount: function() {
    setInterval(this.tick.bind(this), 1000);
    ChatApi.onMessagesChange(function(){
      MessagesActions.changed();
      console.log('onMessagesChange');
    });
    ChatApi.onUsersChange(function(){
      UsersActions.changed();
      console.log('onUsersChange');
    });
  },
  addMessage: function(user, text){
    MessagesActions.addMessage(user, text);
  },
  getStateFromStores: function () {
    return {
      currentUser: UsersStore.currentUser(),
      userlist: UsersStore.all(),
      messages: MessagesStore.all()
    };
  },
  render: function() {
    return (
      <div>
        <SendForm user={this.state.currentUser} onsubmit={this.addMessage}/>
        <MessageList messages={this.state.messages} />
        <UserList userlist={this.state.userlist} />
      </div>
    );
  }
});

module.exports = RoomPage;
