/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

import UserController from '../modules/user/user.controller';
  console.log('Adding user');
  let user = {};
  user.body = {
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }

  //UserController.getAllUsers();

  