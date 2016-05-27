'use strict';
var gulp = require('gulp');
var config = require('./config').server;
var babel = require('gulp-babel');

module.exports = function() {
  return function() {
    return gulp.src(config.source)
    	.pipe(babel({
            presets: ['es2015']
        }))
      	.pipe(gulp.dest(config.destination));
  }
};
