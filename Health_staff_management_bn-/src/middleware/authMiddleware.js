
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/jwt');
const { findUserById } = require('../models/userModel');
const { ROLES } = require('../utils/constants');

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      
      token = req.headers.authorization.split(' ')[1];

    
      const decoded = jwt.verify(token, jwtSecret);

      
      req.user = await findUserById(decoded.id);

      if (!req.user) {
        return res.status(401).json({ message: 'Not authorized, user not found' });
      }

      next();
    } catch (error) {
      console.error(error);
      
      next(error); 
    }
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }
};

const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ message: `User role ${req.user ? req.user.role : 'unauthenticated'} is not authorized to access this route` });
    }
    next();
  };
};

module.exports = {
  protect,
  authorize,
};