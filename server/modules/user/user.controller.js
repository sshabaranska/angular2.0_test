import User from './user.model';
import passport from 'passport';
import config from '../../config/environment';
import jwt from 'jsonwebtoken';

var validationError = function(res, err) {
  return res.json(422, err);
};

let userController = {
  /**
   * Get list of users
   * restriction: 'admin'
   */
  getAllUsers: (req, res) => {
    User.find({}, '-salt -hashedPassword', (err, users) => {
      if (err) {
        // Send the error to the client if there is one
        return res.json(500, err);
      }
      // Send projects in JSON format
      res.json(200, users);
    });
  },

  /**
   * Create user by mail and password
   */
  createUser: (req, res) => {
    let newUser = new User(req.body);
    newUser.provider = 'local';
    newUser.role = 'user';
    newUser.save((err, user) => {
      console.log('Err: '+ err + ': User: '+ user);
      if (err) return validationError(res, err);
      let token = jwt.sign({_id: user._id }, config.secrets.session);
      res.json({ token: token });
    });
  },

  /**
   * Get a single user
   */
  getUserById: (req, res, next) => {
    let userId = req.params.id;

    User.findById(userId, (err, user) => {
      if (err) return next(err);
      if (!user) return res.json(401, err);
      res.json(200, user.profile);
    });
  },

  /**
   * Deletes a user
   * restriction: 'admin'
   */
  removeUser: (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, user) => {
      if (err) {
        // Send the error to the client if there is one
        return res.json(500, err);
      }
      // Send projects in JSON format
      res.json(204);
    });
  },

  /**
   * changePassword a users password
   */
  changePassword: (req, res, next) => {
    let userId = req.user._id;
    let oldPass = String(req.body.oldPassword);
    let newPass = String(req.body.newPassword);

    User.findById(userId, (err, user) => {
      if(user.authenticate(oldPass)) {
        user.password = newPass;
        user.save((err) => {
          if (err) return validationError(res, err);
          res.json(200, res);
        });
      } else {
        res.json(403);
      }
    });
  },

  /**
   * Get a single user
   */
  me: (req, res, next) => {
    let userId = req.user._id;;

    User.findOne({
      _id: userId
    }, '-salt -hashedPassword', (err, user) => { // don't ever give out the password or salt
      if (err) return next(err);
      if (!user) return res.json(401, err);
      res.json(200, user.profile);
    });
  },

  /**
   * Authentication callback
   */
  authCallback: (req, res, next) => {
    res.redirect('/');
  }

}

export default userController;