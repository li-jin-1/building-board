const express = require('express');
const router = express.Router();

//home controller
const homeController = require('../controllers/home');
router.get('/', homeController.home);
//home controller end

//login controller
const loginController = require('../controllers/login');
router.get('/signup', loginController.singup);
router.get('/signin', loginController.signin);
router.post('/submit_signup', loginController.submit_signup);
//login controller end

//member controller
const memberController = require('../controllers/members');
//member controller end

module.exports = router;