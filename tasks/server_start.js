'use strict';
var nodemon = require('gulp-nodemon');

module.exports = function() {
  return function () {
    return nodemon({
      script: 'server-dist/app.js',
      watch: ['server'],
      ignore: ['node_modules/**'],
      ext: 'js html',
      env: {
        'NODE_ENV': 'development'
      }
    });
  };
};
