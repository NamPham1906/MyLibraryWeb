var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require("express-session");

var loginRouter = require('./routes/loginRoutes/index');
var chairmanRouter = require('./routes/chairmanRoutes/index');
var stockkeeperRouter = require('./routes/stockkeeperRoutes/index');
var librarianRouter = require('./routes/librarianRoutes/index');
var cashierRouter = require('./routes/cashierRoutes/index');
const bodyParser = require('body-parser');
const passport = require('./routes/loginRoutes/passport');
var flash = require('connect-flash');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(function (req, res, next) {
	res.locals.user = req.user
	next();
})
app.use(flash());

app.use('/', loginRouter);
app.use(function(req, res, next){
	if(req.user){
		next();
	}else{
		res.redirect('/');
	}
})
app.use('/chairman', function(req, res, next){
	if(req.user){
		const bophan = req.user.bophan;
		if(bophan==="Ban Giám Đốc"){
			next();
		}else{
			res.redirect('/');
		}
	}else{
		res.redirect('/');
	}
}, chairmanRouter);

app.use('/stockkeeper',function(req, res, next){
	if(req.user){
		const bophan = req.user.bophan;
		if(bophan==="Thủ Kho"){
			next();
		}else{
			res.redirect('/');
		}
	}else{
		res.redirect('/');
	}
}, stockkeeperRouter);

app.use('/librarian', function(req, res, next){
	if(req.user){
		const bophan = req.user.bophan;
		if(bophan==="Thủ Thư"){
			next();
		}else{
			res.redirect('/');
		}
	}else{
		res.redirect('/');
	}
},librarianRouter);

app.use('/cashier',function(req, res, next){
	if(req.user){
		const bophan = req.user.bophan;
		if(bophan==="Thủ Quỹ"){
			next();
		}else{
			res.redirect('/');
		}
	}else{
		res.redirect('/');
	}
}, cashierRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  console.log(err);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
