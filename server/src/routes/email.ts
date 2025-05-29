import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

// Create a transporter using corporate SMTP
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASSWORD:', process.env.EMAIL_PASSWORD ? '***set***' : '***missing***');
const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com', // Microsoft 365 SMTP server
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  },
  tls: {
    ciphers: 'SSLv3'
  }
});

// Endpoint to send try-now form email
router.post('/send-try-now', async (req, res) => {
  try {
    const { firstName, lastName, email, company, updates } = req.body;

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to AIagentBot!',
      html: `
        <h1>Welcome to AIagentBot!</h1>
        <p>Dear ${firstName} ${lastName},</p>
        <p>Thank you for your interest in AIagentBot. We're excited to have you on board!</p>
        <p>Here's a summary of your registration:</p>
        <ul>
          <li>Name: ${firstName} ${lastName}</li>
          <li>Email: ${email}</li>
          <li>Company: ${company}</li>
          <li>Receive Updates: ${updates ? 'Yes' : 'No'}</li>
        </ul>
        <p>We'll be in touch soon with more information about getting started with AIagentBot.</p>
        <p>Best regards,<br>The AIagentBot Team</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

export default router; 