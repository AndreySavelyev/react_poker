/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var _ = require('lodash')
var MessageListItem = require('./MessageListItem')
// var Routes = require('react-router');
// var Link = Routes.Link;

var MessageList = React.createClass({
  renderItems: function(){
    return _.map(this.props.messages, function(message) {
      return (<MessageListItem message={message} key={message.id}/>);
    });
  },
  render: function () {
    return (<div>{this.renderItems()}</div>);
  }
});

module.exports = MessageList;
