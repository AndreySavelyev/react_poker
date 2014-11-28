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

var UsersStore = require('./../stores/UsersStore');
// var MessagesActions = require('./../actions/MessagesActions');

var MessageList = require('./MessageList');
var UserList = require('./UserList');
var SendForm = require('./SendForm');

var moment = require('moment');

var RoomPage = React.createClass({
  mixins: [Fluxable],
  watchStores: [MessagesStore, UsersStore],
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
        <MessageList messages={this.state.messages} />
        <SendForm user={this.state.currentUser} onsubmit={this.addMessage}/>
        <UserList userlist={this.state.userlist} />
      </div>
    );
  }
});

module.exports = RoomPage;
