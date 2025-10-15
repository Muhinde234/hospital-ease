const sgMail = require('../config/sendgrid');

const sendEmail = async ({ to, subject, html }) => {
  const msg = {
    to,
    from: process.env.SENDGRID_EMAIL_FROM, 
    subject,
    html,
  };

  try {
    await sgMail.send(msg);
    console.log(`Email sent to ${to} with subject: ${subject}`);
    return true;
  } catch (error) {
    console.error('Error sending email:', error.response ? error.response.body : error);
    throw new Error('Failed to send email.');
  }
};

module.exports = {
  sendEmail,
};