import Contact from "../models/Contact.js";
import { sendEmail } from "../services/emailService.js";

export const submitContactForm = async (req, res) => {
  const { name, email, subject, message } = req.body;
  const contact = await Contact.create({ name, email, subject, message });

  await sendEmail(
    process.env.ADMIN_EMAIL,
    `New Contact Form: ${subject}`,
    `${name} (${email}) says:\n${message}`
  );

  res.status(200).json({ message: "Your message has been sent" });
};
