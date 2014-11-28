/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var UserListItem = require('./UserListItem.jsx');

var UserList = React.createClass({
  render: function() {
    return (<div><UserListItem /><UserListItem /><UserListItem /></div>);
  }
});

module.exports = UserList;
