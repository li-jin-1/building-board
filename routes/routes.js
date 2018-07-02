const express = require('express');
const router = express.Router();

//home controller
const homeController = require('../controllers/home');
router.get('/', homeController.home);
//home controller end

//auth controller
const authController = require('../controllers/auth');
router.get('/signup', authController.signup);
router.get('/signin', authController.signin);
router.post('/signup', authController.submit_signup);
//auth controller end

//member controller
const memberController = require('../controllers/members');
//member controller end

// Custom error handler
router.use((err, req, res, next) => {
    console.log('In custom error handler. Error: ', err)
    res.send('Custom error handler. Error: ', err)
})

module.exports = router;