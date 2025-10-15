import User from "../models/User.js";
import { generateToken } from "../utils/generateToken.js";
import { sendEmail } from "../services/emailService.js";
import crypto from "crypto";

// Register
export const register = async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword, role } = req.body;

  if (password !== confirmPassword)
    return res.status(400).json({ message: "Passwords do not match" });

  const userExists = await User.findOne({ email });
  if (userExists) return res.status(400).json({ message: "User already exists" });

  const user = await User.create({ firstName, lastName, email, password, role });
  res.status(201).json({ message: "User registered successfully" });
};

// Login
export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password)))
    return res.status(400).json({ message: "Invalid email or password" });

  const token = generateToken(user._id, user.role);
  res.json({ token, role: user.role, user: user.firstName });
};

// Forgot password
export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });

  const token = crypto.randomBytes(32).toString("hex");
  user.resetToken = token;
  user.resetTokenExpiry = Date.now() + 3600000; // 1h
  await user.save();

  const resetLink = `${process.env.FRONTEND_URL}/reset-password/${token}`;
  await sendEmail(
    email,
    "Password Reset Request",
    `Click this link to reset your password: ${resetLink}`,
    `<p>Click this link to reset your password: <a href="${resetLink}">${resetLink}</a></p>`
  );

  res.json({ message: "Password reset email sent" });
};

// Reset password
export const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  const user = await User.findOne({
    resetToken: token,
    resetTokenExpiry: { $gt: Date.now() }
  });

  if (!user) return res.status(400).json({ message: "Invalid or expired token" });

  user.password = newPassword;
  user.resetToken = undefined;
  user.resetTokenExpiry = undefined;
  await user.save();

  res.json({ message: "Password reset successful" });
};
