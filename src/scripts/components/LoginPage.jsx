/**
 * @jsx React.DOM
 */

'use strict';

var Routes = require('react-router');
var Link = Routes.Link;
var React = require('react/addons');

var LoginPage = React.createClass({
  getInitialState: function() {
      return {username: 'user'};
  },
  // componentDidMount: function() {
  //   this.username = 'user';
  // },
  handleChange: function(event) {
    this.setState({username: event.target.value});
    console.log(event);
  },
  handleClick: function() {
  },
  render: function() {
    return (
      <div className='main'>
        <Link to="room">Room</Link>
        <div>Test6 </div>
        <div>{this.state.username}</div>
        <input type="text" value={this.state.username} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Login</button>
      </div>
    );
  }
});

module.exports = LoginPage;
