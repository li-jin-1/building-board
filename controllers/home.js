//const db = require('../config/database');

exports.home = function (req, res, next) {

    var r;
    /*db.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
        if (error) throw error;
        r = results[0].solution;
        expect(r).to.equal(2);
        res.render('home/index', { title: 'aaa' });
    });*/
res.render('home/index', { title: 'aaa' });
};