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
    return ChatApi.getMessages().list();
  },

  isLoaded: function() {
    return loaded;
  },

  active: function() {
    return active;
  }
});

MessageStore.registerHandler(MessagesConstants.ADD_SUCCESS, function(payload) {
  this.emitChange();
});

module.exports = MessageStore;


