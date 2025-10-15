// utils/errorHandler.js
const errorHandler = (err,  res) => {
  console.error(err.stack);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Something went wrong on the server.';

  
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({ message: 'Not authorized, token failed' });
  }
  if (err.name === 'TokenExpiredError') {
    return res.status(401).json({ message: 'Not authorized, token expired' });
  }

 
  if (err.errors && err.errors[0] && err.errors[0].message) {
      return res.status(400).json({ message: 'Validation failed', errors: err.errors.map(e => e.message) });
  }

  res.status(statusCode).json({
    message: message,

  });
};

module.exports = errorHandler;
