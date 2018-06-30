const db = require('../config/database');

exports.singup = function (req, res, next) {
    res.render('login/signup', {title: 'Express'});
};
exports.signin = function (req, res, next) {
    res.render('login/signin');
};

exports.submit_signup = async function (req, res, next) {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    console.log('got into post')
    // db.query('select username, email, password from members ',
    //     [username, email, password], function(error, results, fields){
    //         if(error) throw error;
    //         console.log(results)
    //         console.log(fields)
    //         res.render('login/submit_signup', {layout: false});
    //     });
    // db.query('select username, email, password from members ',
    //     [username, email, password])
    //     .then((results, fields) => {
    //         console.log(results)
    //         console.log(fields)
    //         res.render('login/submit_signup', {layout: false});
    //     })
    //     .catch((err) => {
    //         console.error(err);
    //         next(err)
    //     });
    db.query('select username, email, password from members ',
        [username, email, password], function(error, results, fields){
            if(error) throw error;
            console.log('...............')
            console.log(results)
            console.log(fields)
            console.log('...............')
            res.render('login/submit_signup', {layout: false});
        });

    try {
        const results = await db.query('select username, email, password from members');
        console.log(results)
        res.render('login/submit_signup', {layout: false});
    } catch (err) {
        console.log(err)
        next(err);
    }
};