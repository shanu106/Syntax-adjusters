import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import dotenv from 'dotenv';
dotenv.config();
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));
clientID = process.env.GOOGLE_CLIENT_ID;
clientSecret = process.env.GOOGLE_CLIENT_SECRET;
passport.use(new GoogleStrategy({
    clientID,
    clientSecret,
    callbackURL: "/auth/google/callback"
}, (accessToken, _, profile, done) => {
    profile.accessToken = accessToken;
    return done(null, profile);
}));

export default passport;