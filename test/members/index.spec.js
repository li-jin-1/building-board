'use strict';
const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();

const db = require('../../config/database');

it('MYSQL server is up', function(){
    let r;
    db.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
        if (error) throw error;
        r = results[0].solution;
        expect(r).to.equal(2);
        console.log('The solution is: ', results[0].solution);
    });

});

