const express = require('express');
const router = express.Router();

const middleware = require('../controllers/middleware_helper');
router.use(middleware.checkLogin);

//home controller
const homeController = require('../controllers/home');
//router.get('/', middleware.loginRequired, homeController.home);
router.get('/', homeController.home);
//home controller end

//auth controller
const authController = require('../controllers/auth');
router.get('/signup', authController.signup);
router.post('/signup', authController.submit_signup);
router.get('/signin', authController.signin);
router.post('/signin', authController.submit_signin);
router.get('/signout', authController.signout);
//auth controller end

//member controller
const memberController = require('../controllers/members');
//member controller end

//posts controller
const postsController = require('../controllers/posts');
router.get('/new_post', postsController.new_post);
router.post('/submit_post', postsController.submit_post);
//posts controller end

// Custom error handler
router.use((err, req, res, next) => {
    console.log('In custom error handler. Error: ', err);
    res.send('Custom error handler. Error: ', err)
});

module.exports = router;