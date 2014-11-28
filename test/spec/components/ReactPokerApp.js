'use strict';

describe('Main', function () {
  var ReactPokerApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ReactPokerApp = require('../../../src/scripts/components/ReactPokerApp.jsx');
    component = ReactPokerApp();
  });

  it('should create a new instance of ReactPokerApp', function () {
    expect(component).toBeDefined();
  });
});
