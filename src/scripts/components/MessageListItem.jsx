/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var UsersStore = require('../stores/UsersStore');
var _ = require('lodash');
var moment = require('moment');

var MessageListItem = React.createClass({
  render: function () {
    var users = UsersStore.all();
    user = _.find(users, {_id: this.props.message.user})
    var name = (user && user.name) || '<без имени>';
    var mom = moment.unix(this.props.message.time);

    return (<div>[{mom.format()}] {name}: {this.props.message.text}</div>);
  }
});

module.exports = MessageListItem;
