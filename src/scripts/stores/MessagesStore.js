'use strict';

var _ = require('lodash');

var Store = require('../lib/Store');

var MessagesConstants = require('../constants/MessagesConstants');

var messages = [];
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
          timestamp: moment().format()
        });

  this.emitChange();
});

module.exports = RecordStore;


