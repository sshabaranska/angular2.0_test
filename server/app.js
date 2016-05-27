// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

import express from 'express';
import http from 'http'; 

let config = require('./config/environment');

// Populate DB with sample data
if(config.seedDB) { require('./config/seed'); }

// Setup server
let app = express();
let server = http.createServer(app);

require('./config/express')(app);
let router = require('./routes');
router(app);
require('./db');

// Start server
server.listen(config.port, config.ip, () => {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;
