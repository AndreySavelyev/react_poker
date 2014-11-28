'use strict';

var _ = require('lodash');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var MessagesConstants = require('../constants/MessagesConstants');
var moment = require('moment');

function addMessage(user, text) {
  AppDispatcher.handleAction(MessagesConstants.ADD_START);
  ChatApi.createMessage(text, moment().unix(), user);
  AppDispatcher.handleAction(MessagesConstants.ADD_SUCCESS);
}

function changed(){
  AppDispatcher.handleAction(MessagesConstants.CHANGED);
}

module.exports = {
  addMessage: addMessage,
  changed: changed
};
