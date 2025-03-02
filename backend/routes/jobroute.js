const express = require('express');
const router = express.Router();
const authController = require('./../controllers/authController');
const JobController = require('./../controllers/jobController');

router.get('/', JobController.getAllJobs);

router.get('/:id', JobController.getJobById);

router.use(authController.protect);

router.post('/', JobController.createJob);

module.exports = router;
