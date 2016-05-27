'use strict';
var eslint = require('gulp-eslint');
var gulp = require('gulp');
var config = require('./config').client;

module.exports = function() {
  return function() {
    return gulp.src(config.app)
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
  };
};