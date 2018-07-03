const path = require('path');
const models  = require('../models');

exports.signup = function (req, res, next) {
    try {
        res.render('auth/signup', {title: 'Express'});
    }
    catch (e) {
        next(e);
    }
};
exports.submit_signup = async function (req, res, next) {
    try{
        const params = {};
        params['username'] = req.body.username;
        params['email'] = req.body.email;
        params['password'] = req.body.password;
        let member = await models.Member.createOrAuthenticate(params);
        console.log('after await.....')
        console.log(member)

        console.log(error)
        console.log('lllllllllll---------')
        //res.sendFile(path.join(appRoot+'/views/auth/submit_signup.js'));
      //  res.render('auth/submit_signup', {layout: false});
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
        res.render('auth/signin');
    }
    catch (e) {
        next(e)
    }
};

