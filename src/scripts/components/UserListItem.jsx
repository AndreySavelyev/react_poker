/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var UserListItem = React.createClass({
  render: function () {
    return (<div>{this.props.user.name}</div>);
  }
});

module.exports = UserListItem;
