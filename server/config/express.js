/**
 * Express configuration
 */
// Import dependencies

import express from 'express';
import logger from 'morgan'; // Logs each server request to the console
import bodyParser from 'body-parser'; // Takes information from POST requests and puts it into an object
import cookieParser from 'cookie-parser';
import errorHandler from 'errorhandler';
import passport from 'passport';
import methodOverride from 'method-override'; // Allows for PUT and DELETE methods to be used in browsers where they are not supported
import session from 'express-session';
import path from 'path'; // File path utilities to make sure we're using the right type of slash (/ vs \)
import http from 'http'; // To make the periodic DB clean requests
import config from './environment'; // To make the periodic DB clean requests

/**
 * Configure app
 */
let app = express(); // Creates an Express app
app.set('port', process.env.PORT || 3000); // Set port to 3000 or the provided PORT variable
app.use(express.static(path.join(__dirname, '..', 'public'))); // Set the static files directory - /public will be / on the frontend
app.use(logger('dev')); // Log requests to the console
app.use(bodyParser.json()); // Parse JSON data and put it into an object which we can access
app.use(methodOverride()); // Allow PUT/DELETE

module.exports = function(app) {
  let env = app.get('env');

  app.set('views', config.root + '/server/views');
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(cookieParser());
  app.use(passport.initialize());
  
  if ('production' === env) {
    app.use(favicon(path.join(config.root, 'public')));
    app.use(express.static(path.join(config.root, 'public')));
    app.set('appPath', config.root + '/public');
    app.use(morgan('dev'));
  }

  if ('development' === env || 'test' === env) {
    //app.use(require('connect-livereload')());
    app.use(express.static(path.join(config.root, '.tmp')));
    app.use(express.static(path.join(config.root, 'client')));
    app.set('appPath', path.join(config.root, 'client'));
    app.use(errorHandler()); // Error handler - has to be last
  }
}