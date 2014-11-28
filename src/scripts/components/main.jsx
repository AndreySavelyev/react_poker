/** @jsx React.DOM */

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

var App = require('./App');
var React = require('react');
var {DefaultRoute, Route, Routes} = require('react-router');

React.renderComponent(( <App />
), document.getElementById('content'));
