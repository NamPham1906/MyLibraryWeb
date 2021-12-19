var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
  
const { raw } = require('express');
const { NULL } = require('node-sass');
const {models} = require('../../models/index');
const { Op } = require("sequelize");
const loginService = require('../loginRoutes/loginService');


passport.use(new LocalStrategy(
  async function(username, password, done) {
   const account = await loginService.findAccount(username);
    if (!account){
    return done(null, false, { message: 'Incorrect username.' });
    } 
    else if (account.PASS === password){
      return done(null, account);
    }
    else{
      return done(null, false, { message: 'Incorrect password.' });
    }
  }
));

function validPassword(user, password){
    return user.matkhau == password;
}

passport.serializeUser(function(user, done) {
  done(null, {manv: user.manv, tentaikhoan: user.tentaikhoan});
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = passport;

