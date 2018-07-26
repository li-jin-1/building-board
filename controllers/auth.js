const passport = require('passport');
const models = require('../models');

exports.signup = function (req, res, next) {
    try {
        res.render('auth/signup', {title: 'Express'});
    }
    catch (e) {
        next(e);
    }
};
exports.submit_signup = async function (req, res, next) {
    try {
        const params = {};
        params['username'] = req.body.username;
        params['email'] = req.body.email;
        params['password'] = req.body.password;
        params['passwordmatch'] = req.body.passwordmatch;
        let [member, errors] = await models.Member.createOrAuthenticate(params);
        if (member) {
            req.login(member.id, function (err) {
                if (err) throw err;
                res.locals.member = member;
            });
        }
        res.render('auth/submit_signup', {errors: errors, member: member, layout: false});
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
exports.submit_signin = function (req, res, next) {
    try {
        passport.authenticate('local', function (err, member, info) {
            if (err) {
                return next(err);
            }
            if (member) {
                req.login(member.id, function (err) {
                    if (err) throw err;
                    res.locals.member = member;
                });
                res.render('auth/submit_signin', {errors: null, member: member, layout: false});
            }
            if (info) {
                if(info['message'] == 'Missing credentials'){
                    info['errors'] = {'password': 'Missing password'};
                }
                res.render('auth/submit_signin', {errors: info['errors'], member: member, layout: false});
            }
        })(req, res, next);
    }
    catch (e) {
        next(e)
    }
};

exports.signout = function (req, res, next) {
    try {
        req.logout();
        req.session.destroy();
        res.redirect('/');
    }
    catch (e) {
        next(e);
    }
};
