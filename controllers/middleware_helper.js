exports.checkLogin = function(req, res, next) {
    res.locals.isAuthenticated = req.isAuthenticated();
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