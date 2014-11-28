'use strict';

var _ = require('lodash');

var Store = require('../lib/Store');

var UsersConstants = require('../constants/UsersConstants');

// var users = [ {name: 'username'}, {name: 'username2'}, {name: 'username3'} ];

var loaded = false;
var active = null;
var currentUser = null;

var UsersStore = new Store({
  all: function() {
    console.log('users');
    var userlist = ChatApi.getUsers().list();
    console.log(userlist);
    return userlist;
  },

  currentUser: function() {
    return currentUser;
  },

  isLoaded: function() {
    return loaded;
  },

  active: function() {
    return active;
  }
});

UsersStore.registerHandler(UsersConstants.LOGIN_SUCCESS, function(payload) {
  currentUser = payload.user;
  this.emitChange();
});

UsersStore.registerHandler(UsersConstants.CHANGED, function(payload) {
  this.emitChange();
});


module.exports = UsersStore;


