const crypto = require('crypto');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('./../models/Usermodel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/AppError');
const Email = require('./../utils/email');
const sendEmail = require('../utils/email');

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000,
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
  };

  res.cookie('jwt', token, cookieOptions);
  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: { user },
  });
};

// SIGNUP CONTROLLER
exports.signup = catchAsync(async (req, res, next) => {
  const { firstName, email, password, lastName, role } = req.body;

  console.log(req.body);

  const newUser = await User.create({
    firstName,
    lastName,
    email,
    password,
    role,
  });

  const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
    expiresIn: '10m',
  });

  const verificationLink = `http://localhost:5173/verify-email?token=${token}`;

  await sendEmail({
    email: newUser.email,
    subject: 'Verify Your Email - MSME Portal',
    html: `<p>Dear ${newUser.firstName + newUser.lastName},</p>
           <p>Welcome to <strong>MSME Portal</strong>! Please verify your email:</p>
           <p><a href="${verificationLink}" style="color: #007bff;">Verify Email</a></p>
           <p><strong>Note:</strong> This link expires in 10 minutes.</p>`,
  });

  res.status(201).json({
    status: 'success',
    message:
      'Registration successful! Please verify your email before logging in.',
  });
});

// VERIFY EMAIL
exports.verifyEmail = catchAsync(async (req, res, next) => {
  const { token } = req.query;

  console.log(token);
  if (!token) {
    return next(new AppError('Invalid or missing token.', 400));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('decoded :- ', decoded);
    const user = await User.findById(decoded.userId);

    console.log('user :- ', user);

    if (!user) return next(new AppError('User not found', 404));

    user.isVerified = true;
    await user.save({ validateBeforeSave: false });

    res.status(200).json({
      status: 'success',
      message: 'Email verified successfully! You can now log in.',
    });
  } catch (err) {
    return next(new AppError('Token expired or invalid.', 400));
  }
});

// LOGIN CONTROLLER
exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError('Please provide email and password', 400));
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return next(new AppError('User not found', 404));
  }

  if (!user.isVerified) {
    return next(
      new AppError('Please verify your email before logging in.', 401),
    );
  }

  if (!(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }

  createSendToken(user, 200, res);
});

// AUTHENTICATION MIDDLEWARE
exports.protect = catchAsync(async (req, res, next) => {
  let token;
  if (req.headers.authorization?.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(new AppError('Not logged in! Please log in to access.', 401));
  }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  const currentUser = await User.findById(decoded.id);

  if (!currentUser) {
    return next(new AppError('User no longer exists!', 401));
  }

  req.user = currentUser;
  next();
});

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError('You do not have permission for this action.', 403),
      );
    }
    next();
  };
};

exports.logout = (req, res) => {
  console.log('Logging out...');
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 10 * 1000), // Expiring in 10 seconds
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
  });

  res.status(200).json({ status: 'success' });
};
