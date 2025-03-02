const express = require('express');
const authController = require('./../controllers/authController');
const userController = require('./../controllers/userController');
const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/auth/verify-email', authController.verifyEmail);
router.get('/logout', authController.logout);

router.use(authController.protect);
router.get('/me', userController.getMe, userController.getUser);

module.exports = router;
