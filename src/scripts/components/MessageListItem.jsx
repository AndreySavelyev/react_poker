/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var UsersStore = require('../stores/UsersStore');
var _ = require('lodash');

var MessageListItem = React.createClass({
  render: function () {
    var users = UsersStore.all();
    console.log(users);
    user = _.find(users, {_id: this.props.message.user})
    var name = (user && user.name) || '<без имени>';

    return (<div>[{this.props.message.time}] {name}: {this.props.message.text}</div>);
  }
});

module.exports = MessageListItem;
