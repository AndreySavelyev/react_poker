'use strict';

var _ = require('lodash');

var Store = require('../lib/Store');

var moment = require('moment');

var MessagesConstants = require('../constants/MessagesConstants');

var messages = [
        {
          id: 1,
          user: 'username 1',
          text: 'Message1',
          timestamp: moment()
        },
        {
          id: 2,
          user: 'username2',
          text: 'Message2',
          timestamp: moment()
        }
      ];

var loaded = false;
var active = null;

var MessageStore = new Store({
  all: function() {
    return messages;
  },

  isLoaded: function() {
    return loaded;
  },

  active: function() {
    return active;
  }
});

MessageStore.registerHandler(MessagesConstants.ADD_START, function(payload) {
  active = payload;

  this.emitChange();
});

MessageStore.registerHandler(MessagesConstants.ADD_SUCCESS, function(payload) {
  active = payload;
  messages.push(
        {
          id: moment().unix(),
          user: payload.user,
          text: payload.text,
          timestamp: moment()
        });

  this.emitChange();
});

module.exports = MessageStore;


