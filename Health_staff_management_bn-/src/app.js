
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const authRoutes = require('./routes/authRoutes');
const contactRoutes = require('./routes/contactRoutes');
const errorHandler = require('./utils/errorHandler'); 

const app = express();
app.use(helmet());
app.use(cors());


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100, 
  message: "Too many requests from this IP, please try again after 15 minutes"
});
app.use(limiter);


app.use(express.json());

app.use(express.urlencoded({ extended: false }));



app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Health Staff Management API!' });
});


app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);
app.use(errorHandler);

module.exports = app;