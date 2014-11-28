/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var LoginPage = require('./LoginPage');
var RoomPage = require('./RoomPage');

var Fluxable = require('./../behaviors/Fluxable');
var UsersStore = require('./../stores/UsersStore');

var App = React.createClass({
  mixins: [Fluxable],
  watchStores: [UsersStore],
  getStateFromStores: function () {
    return {
      currentUser: UsersStore.currentUser()
    };
  },
  render: function() {
    if (this.state.currentUser){
      return <RoomPage />
    } else {
      return <LoginPage />
    }
  }
});

module.exports = App;
