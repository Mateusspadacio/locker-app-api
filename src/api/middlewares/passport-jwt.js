import Passport from 'passport';
import PassportJWT from 'passport-jwt';
import env from '../../config/env';
import User from '../resources/user/user.model';

export const configJWTStrategy = () => {
  const opts = {
    jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: env.secret,
  };
  Passport.use(
    new PassportJWT.Strategy(opts, (paylod, done) => {
      User.findOne({ _id: paylod.id }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      });
    })
  );
};
