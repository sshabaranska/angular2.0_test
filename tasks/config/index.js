'use strict';

module.exports = {
  client: {
    source: ['client/**/*.{html,css,ico}', '!**/app/**'],
    csssource: 'client/style/app.less',
    destination: 'client/dist',
    cssdestination: 'client/style',
    app: ['client/**/*.js']
  },
  server: {
    source: ['server/**/*.{js,json}', '!server/**/*.spec.*'],
    destination: 'server-dist'
  },
  general: {
    source: ['package.json', 'Procfile'],
    destination: 'dist'
  },
  build: {
    client_destination: 'client/dist',
    server_destination: 'server-dist'
  }
};
