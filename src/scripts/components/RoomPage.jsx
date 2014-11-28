/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var Routes = require('react-router');
var Link = Routes.Link;

var RoomPage = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <Link to="login">Back</Link>
      </div>
    );
  }
});

module.exports = RoomPage;
