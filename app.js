


// Middleware to parse JSON

import express from 'express';
import session from 'express-session';
import passport from 'passport';
const app = express();
import dotenv from 'dotenv';
import './utils/passport.js';
import  aiRoutes from'./routes/ai.js';


// Middleware to parse 
app.use(express.json());

dotenv.config();
app.use(session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Adjust based on your environment
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/api/ai', aiRoutes);
// routes starts here 

app.get('/auth/google', passport.authenticate("google", { scope: [
    "profile",
    "email",
    "https://www.googleapis.com/auth/gmail.readonly",
]}));
app.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: '/success',
    failureRedirect: '/failure'
}));

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
// const passportConfig = require('../utils/passport');
