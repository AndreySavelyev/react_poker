/**
 * @jsx React.DOM
 */

'use strict';

var Routes = require('react-router');
var Link = Routes.Link;
var React = require('react/addons');

var LoginPage = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <Link to="room">Room</Link>
      </div>
    );
  }
});

module.exports = LoginPage;
