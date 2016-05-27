import express from 'express';
import controller from './user.controller';
import config from '../../config/environment';
import auth from '../../auth/auth.service';

let router = express.Router();

router.get('/users', auth.hasRole('admin'), controller.getAllUsers);
router.delete('/users/:id', auth.hasRole('admin'), controller.removeUser);
router.get('/users/me', auth.isAuthenticated(), controller.me);
router.put('/users/:id/:password', auth.isAuthenticated(), controller.changePassword);
router.get('/users/:id', auth.isAuthenticated(), controller.getUserById);
router.post('/users', controller.createUser);

module.exports = router;