const models = require('../models');
exports.checkLogin = async function(req, res, next) {
    res.locals.isAuthenticated = req.isAuthenticated();
    if(res.locals.isAuthenticated){
        res.locals.member = await models.Member.findById(req.user);
    }
    next();
};
exports.loginRequired = function(req, res, next) {
    if(res.locals.isAuthenticated){
        next();
    }
    else{
        res.redirect('/');
    }
};