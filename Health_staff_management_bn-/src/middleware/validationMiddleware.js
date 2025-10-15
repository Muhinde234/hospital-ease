
const { z } = require('zod');
const { ROLES } = require('../utils/constants');

const registerSchema = z.object({
  firstName: z.string().min(2, 'First name is required').max(50),
  lastName: z.string().min(2, 'Last name is required').max(50),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters long')
                     .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
                     .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
                     .regex(/[0-9]/, 'Password must contain at least one number')
                     .regex(/[^a-zA-Z0-9]/, 'Password must contain at least one special character'),
  confirmPassword: z.string(),
  role: z.enum([ROLES.ADMIN, ROLES.WORKER]).default(ROLES.WORKER),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'), 
});

const forgotPasswordSchema = z.object({
  email: z.string().email('Invalid email address'),
});

const resetPasswordSchema = z.object({
  password: z.string().min(8, 'Password must be at least 8 characters long')
                     .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
                     .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
                     .regex(/[0-9]/, 'Password must contain at least one number')
                     .regex(/[^a-zA-Z0-9]/, 'Password must contain at least one special character'),
  confirmPassword: z.string(),
  token: z.string().min(1, 'Reset token is required'),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required').max(100),
  email: z.string().email('Invalid email address'),
  subject: z.string().max(200).optional(),
  messageBody: z.string().min(10, 'Message cannot be empty').max(1000),
});


const validate = (schema) => (req, next) => {
  try {
    
    schema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      const customError = new Error('Validation Failed');
      customError.statusCode = 400;
      customError.errors = error.errors; 
      next(customError);
    } else {
      next(error); 
    }
  }
};

module.exports = {
  validateRegister: validate(registerSchema),
  validateLogin: validate(loginSchema),
  validateForgotPassword: validate(forgotPasswordSchema),
  validateResetPassword: validate(resetPasswordSchema),
  validateContact: validate(contactSchema),
  
};