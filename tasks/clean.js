'use strict';
var del = require('del');
var config = require('./config').build;

module.exports = function() {
  return function() {
    return del([config.client_destination, config.server_destination]);
  };
};
