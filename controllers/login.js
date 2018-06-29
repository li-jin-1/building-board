exports.singup = function (req, res, next) {
    res.render('login/signup', { title: 'Express' });
};
exports.signin = function (req, res, next) {
    res.render('login/signin');
};

exports.submit_signup = function (req, res, next) {
    res.render('login/submit_signup', {layout: false});
};