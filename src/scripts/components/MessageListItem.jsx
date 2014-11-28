/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
// var _ = require('lodash')

// var Routes = require('react-router');
// var Link = Routes.Link;

var MessageListItem = React.createClass({
  render: function () {
    return (<div>[{this.props.message.timestamp.format()}] {this.props.message.user}: {this.props.message.text}</div>);
  }
});

module.exports = MessageListItem;
