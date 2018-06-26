exports.singup = function (req, res, next) {
    res.render('members/signup', { title: 'Express' });
};
exports.signin = function (req, res, next) {
    res.render('members/signin');
};