const createError = require('http-errors');
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redis_client = require("redis").createClient();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const lessMiddleware = require('less-middleware');
let logger = require('morgan');
global.appRoot = path.resolve(__dirname);

const app = express();
require('dotenv').config();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.set('view options', {layout: 'layouts/layout'});
hbs.registerPartials(__dirname + '/views/layouts/partials');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public/source/less'), {
    dest: path.join(__dirname, 'public'),
    force: true
}));
app.use(express.static(path.join(__dirname, 'public')));
let sess = {
    store: new RedisStore({
        host: '127.0.0.1',
        port: '6379',
        client: redis_client
    }),
    secret: process.env.SESSION_SECRET,
    resave: process.env.SESSION_RESAVE,
    saveUninitialized: process.env.SESSION_SAVEUNINITIALIZED,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 30} // session expire in 30 days
};
if (app.get('env') === 'production') {
    app.set('trust proxy', 1); // trust first proxy
    sess.cookie.secure = true; // serve secure cookies
}
app.use(session(sess));
app.use(passport.initialize());
app.use(passport.session());
//routes file
const routes = require('./routes/routes.js');
app.use('/', routes);

const models  = require('./models');

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    models.Member.authenticate
));
passport.serializeUser(function(member_id, done) {
    done(null, member_id);
});

passport.deserializeUser(function(member_id, done) {
    done(null, member_id);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;