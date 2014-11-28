/** @jsx React.DOM */

var ReactPokerApp = require('./ReactPokerApp');
var React = require('react');
var {DefaultRoute, Route, Routes} = require('react-router');

React.renderComponent((
  <Routes location="history">
    <Route path="/" handler={ReactPokerApp}>
    </Route>
  </Routes>
), document.getElementById('content'));
