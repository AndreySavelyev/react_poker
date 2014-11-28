/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var SendForm = React.createClass({
  getInitialState: function(){
    return {message: ""};
  },
  handleClick: function(e) {
    e.preventDefault();
    this.props.onsubmit(this.props.user, this.state.message);
    this.setState({message: ''});
  },
  handleChange: function(e) {
    this.setState({message: e.target.value});
  },
  render: function() {
    return (
      <form onSubmit={this.handleClick} action="#">
        <input type="text" value={this.state.message} onChange={this.handleChange} />
        <input type="submit" value="Send" />
      </form>
    );
  }
});

module.exports = SendForm;
