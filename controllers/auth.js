const models  = require('../models');

exports.signup = function (req, res, next) {
    try {
        res.render('auth/signup', {title: 'Express'});
    }
    catch (e) {
        next(e);
    }
};
exports.submit_signup = function (req, res, next) {
    try{
        const params = {};
        params['username'] = req.body.username;
        params['email'] = req.body.email;
        params['password'] = req.body.password;
        const member = models.Member.createOrAuthenticate(params);
        res.render('login/submit_signup', {layout: false});
    }
    catch (e) {
        next(e);
    }
};
exports.signin = function (req, res, next) {
    try {
        res.render('auth/signin');
    }
    catch (e) {
        next(e)
    }
};

