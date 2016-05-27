'use strict';
var gulp = require('gulp');
var watch = require('gulp-watch');
var deleteLines = require('gulp-delete-lines');
var config = require('./config').client;

module.exports = function(singleRun) {
  return function() {
    var gulpStream = gulp.src(config.source);

    if (!singleRun) {
      var clientWatch = watch(config.source, {verbose: true});

      gulpStream.pipe(clientWatch);
    }
    return gulpStream.pipe(gulp.dest(config.destination));
  }
};
