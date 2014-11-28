'use strict';

var _ = require('lodash');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var UsersConstants = require('../constants/UsersConstants');

function login(name) {
  AppDispatcher.handleAction(UsersConstants.LOGIN_START);

  var user = ChatApi.createUser(name);

  AppDispatcher.handleAction(UsersConstants.LOGIN_SUCCESS, {user: user});
}

module.exports = {
  login: login
};
