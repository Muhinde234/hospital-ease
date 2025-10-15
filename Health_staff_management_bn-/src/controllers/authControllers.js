
const { findUserByEmail, createUser, findUserById, updateUserPassword, setResetToken, findUserByResetToken } = require('../models/userModel');
const { hashPassword, comparePassword } = require('../utils/hashHelper');
const { generateToken } = require('../services/jwtService');
const { sendEmail } = require('../services/emailService');
const crypto = require('crypto'); 
const { ROLES } = require('../utils/constants');


const registerUser = async (req, res, next) => {
  const { firstName, lastName, email, password, role } = req.body;

  try {
   
    const userExists = await findUserByEmail(email);
    if (userExists) {
      
      return res.status(400).json({ message: 'User with this email already exists.' });
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    const userId = await createUser(firstName, lastName, email, hashedPassword, role || ROLES.WORKER); // Default to worker if role not provided

    const user = await findUserById(userId); // Fetch the newly created user for response

  
    const token = generateToken({ id: user.id, role: user.role });

    res.status(201).json({
      message: 'Registration successful!',
      user: {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    next(error); 
  }
};


const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
  
    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

   
    const token = generateToken({ id: user.id, role: user.role });

    res.status(200).json({
      message: 'Login successful!',
      user: {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    next(error);
  }
};


const forgotPassword = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await findUserByEmail(email);
    if (!user) {
      
      return res.status(200).json({ message: 'If a user with that email exists, a password reset link has been sent.' });
    }

    
    const resetToken = crypto.randomBytes(32).toString('hex');

   
    const expireTime = new Date(Date.now() + 30 * 60 * 1000);
    await setResetToken(user.email, resetToken, expireTime);

    
    const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

    const emailSubject = 'Password Reset Request';
    const emailHtml = `
      <p>You are receiving this because you (or someone else) have requested the reset of the password for your account.</p>
      <p>Please click on the following link, or paste this into your browser to complete the process within 30 minutes of receiving it:</p>
      <p><a href="${resetUrl}">${resetUrl}</a></p>
      <p>If you did not request this, please ignore this email and your password will remain unchanged.</p>
    `;

    try {
      await sendEmail({
        to: user.email,
        subject: emailSubject,
        html: emailHtml,
      });
      res.status(200).json({ message: 'Password reset email sent successfully.' });
    } catch (emailError) {
      console.error("Error sending password reset email:", emailError);
    
      next(new Error('Failed to send password reset email.'));
    }
  } catch (error) {
    next(error);
  }
};


const resetPassword = async (req, res, next) => {
  const { password } = req.body; 
  const { token } = req.params; 

  try {
    const user = await findUserByResetToken(token);

    if (!user) {
      
      return res.status(400).json({ message: 'Password reset token is invalid or has expired.' });
    }

   
    const newHashedPassword = await hashPassword(password);

    
    await updateUserPassword(user.id, newHashedPassword);

  
    const confirmationSubject = 'Your password has been changed';
    const confirmationHtml = `<p>This is a confirmation that the password for your account ${user.email} has just been changed.</p>`;
    try {
        await sendEmail({
            to: user.email,
            subject: confirmationSubject,
            html: confirmationHtml,
        });
    } catch (emailError) {
        console.error("Error sending password change confirmation email:", emailError);
        
    }


    res.status(200).json({ message: 'Password has been successfully reset.' });
  } catch (error) {
    next(error);
  }
};


const getMe = async (req, res, next) => {
 
  try {
    const user = await findUserById(req.user.id);
    if (!user) {
        return res.status(404).json({ message: 'User not found.' });
    }
    res.status(200).json({
      id: user.id,
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      role: user.role,
      createdAt: user.created_at,
    });
  } catch (error) {
    next(error);
  }
};


module.exports = {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,
  getMe,
};