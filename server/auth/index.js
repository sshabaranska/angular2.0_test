import express from 'express';
import passport from 'passport';
import config from '../config/environment';
import User from '../api/user/user.model';
import local from './local';

// Passport Configuration
require('./local/passport').setup(User, config);

let router = express.Router();

router.use('/local', local);

module.exports = router;