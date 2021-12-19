var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

const loginService = require('../loginRoutes/loginService');
const Util = require('../../utility/Util');
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
					user.ten = Util.getName(user.hoten);
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

