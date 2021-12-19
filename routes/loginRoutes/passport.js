var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
  
const { raw } = require('express');
const { NULL } = require('node-sass');
const {models} = require('../../models/index');
const { Op } = require("sequelize");
const loginService = require('../loginRoutes/loginService');


passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
},
  	async function(username, password, done) {
		try {
			const account = await loginService.findAccount(username);
			if (!account){
				return done(null, false, { message: 'Incorrect username.' });
			} 
			else if (validPassword(account, password)){
				try {
					const user = await loginService.findUser(account.manv);
					user.tentaikhoan = account.tentaikhoan;
					user.matkhau = account.matkhau;
					return done(null, user);
				} catch (error) {
					console.log(error);
					return done(error);
				}
			}
			else{
				return done(null, false, { message: 'Incorrect password.' });
			}
			
		} catch (error) {
			console.log(error);
			return done(error);
		}
	}
));


function validPassword(user, password){
    return user.matkhau === password;
}

passport.serializeUser(function(user, done) {
	done(null, user);

});

passport.deserializeUser( function(user, done) {
	done(null, user);
});

module.exports = passport;

