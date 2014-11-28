'use strict';

var _ = require('lodash');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var MessagesConstants = require('../constants/MessagesConstants');

function addMessage(user, text) {
  AppDispatcher.handleAction(MessagesConstants.ADD_START);
  AppDispatcher.handleAction(MessagesConstants.ADD_SUCCESS, {user: user, text: text});
}

module.exports = {
  addMessage: addMessage
};
