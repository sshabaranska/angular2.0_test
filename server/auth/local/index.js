import express from 'express';
import passport from 'passport';
import auth from '../auth.service';

let router = express.Router();

router.post('/', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    let error = err || info;
    if (error) return res.json(401, error);
    if (!user) return res.json(404, {message: 'Something went wrong, please try again.'});

    let token = auth.signToken(user._id, user.role);
    res.json({token: token});
  })(req, res, next)
});

module.exports = router;