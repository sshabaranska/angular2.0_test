'use strict';
var gulp = require('gulp');
var runSequence = require('run-sequence');

var clientCopyTask = require('./tasks/client_copy');
var clientBuildTask = require('./tasks/client_build');
var stylesheetTask = require('./tasks/stylesheet');
var serverStartTasks = require('./tasks/server_start');
var serverCopyTask = require('./tasks/server_copy');
var cleanTask = require('./tasks/clean');
var eslintTask = require('./tasks/eslint');
//var libsCopyTask = require('./tasks/libs_copy');

gulp.task('server-start', serverStartTasks());
gulp.task('server-copy-dist', serverCopyTask());

gulp.task('client-copy', clientCopyTask(false));
gulp.task('client-build', clientBuildTask(false));
gulp.task('client-stylesheet', stylesheetTask(false));
gulp.task('client-style', eslintTask());

//gulp.task('libs-copy', libsCopyTask());

gulp.task('clean', cleanTask());

gulp.task('dev', function(done) {
  runSequence(
    'clean',
    ['client-build', 'client-copy', 'client-stylesheet', 'server-copy-dist'],
    'server-start',
    done
  )
});
