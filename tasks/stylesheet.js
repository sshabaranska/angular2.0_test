'use strict';
var gulp = require('gulp');
var less = require('gulp-less'); // compile less to css
var cssnano = require('gulp-cssnano'); //minify css file
var config = require('./config').client; // client destination

module.exports = function (singleRun) {
  return function () {
    var gulpStream = gulp.src(config.csssource).pipe(less());

    if (singleRun) {
      gulpStream = gulpStream.pipe(cssnano());
    }

    return gulpStream.pipe(gulp.dest(config.cssdestination));
  }
};