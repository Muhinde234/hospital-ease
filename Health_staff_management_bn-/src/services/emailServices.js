import { transporter } from "../config/email.js";

export const sendEmail = async (to, subject, text, html = "") => {
  try {
    await transporter.sendMail({
      from: `"Health Staff Manager" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
      html
    });
    console.log("✅ Email sent to", to);
  } catch (error) {
    console.error("❌ Email sending failed:", error);
  }
};
