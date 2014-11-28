/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var UserListItem = require('./UserListItem.jsx');

var Fluxable = require('./../behaviors/Fluxable');
var UsersStore = require('./../stores/UsersStore');

var UserList = React.createClass({
  mixins: [Fluxable],
  watchStores: [UsersStore],
  getStateFromStores: function () {
    return {
      users: UsersStore.all()
    };
  },
  renderUsers: function() {
    return _.map(this.state.users, function(user) {
      return <UserListItem user={user} />
    });
  },
  render: function() {
    return <div>{this.renderUsers()}</div>
  }
});

module.exports = UserList;
