import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

import express from 'express';
import nodemailer from 'nodemailer';


const router = express.Router();

// Create a transporter using corporate SMTP
// console.log('Environment Variables Check:');
// console.log('EMAIL_USER:', process.env.EMAIL_USER);
// console.log('EMAIL_PASSWORD:', process.env.EMAIL_PASSWORD ? '***set***' : '***missing***');
// console.log('NODE_ENV:', process.env.NODE_ENV);
// console.log('All env variables:', process.env);

const transporter = nodemailer.createTransport({
  service: 'smtp',
  host: 'mail.aiagentbot.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER?.trim(),
    pass: process.env.EMAIL_PASSWORD?.trim(),
  },
  tls: {
    minVersion: 'TLSv1.2',
    rejectUnauthorized: false
  }
} as any); // Type assertion to fix TypeScript error

// Endpoint to send try-now form email
router.post('/send-try-now', async (req, res) => {
  try {
    const { firstName, lastName, email, company, updates } = req.body;

    // Email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank You for Contacting AI Agent Bot',
      html: `
        <p>Dear ${firstName},</p>
        <p>Thank you for contacting AI Agent Bot. We've received your message and our team will get back to you shortly.</p>
        <p>If you have any urgent queries, feel free to reach out again. We appreciate your interest in our services!</p>
        <p>Best regards,<br>The AI Agent Bot Team</p>
      `
    };

    // Email to info@aiagentbot.com
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@aiagentbot.com',
      subject: 'Contacting AI Agent Bot',
      html: `
        <h3>New Contact Submission</h3>
        <p><strong>Name:</strong> ${firstName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
      `
    };

    // Send both emails
    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(adminMailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

export default router; 