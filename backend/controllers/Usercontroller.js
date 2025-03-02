const factory = require('./handleFactory');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/UserModel');

exports.getMe = (req, res, next) => {
  console.log('getMe');
  req.params.id = req.user.id;
  next();
};

exports.getUser = factory.getOne(User);
