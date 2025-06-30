const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');
require('dotenv').config();

// POST: /api/contact
router.post('/', async (req, res) => {
  const { name, email, phone, service, message } = req.body;

  try {
    // Save to MongoDB
    const newContact = new Contact({ name, email, phone, service, message });
    await newContact.save();

    // Set up Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Beyond Career" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // you can also cc the user using: `${email}, ${process.env.EMAIL_USER}`
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Message from Beyond Career Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send Email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Message sent & email delivered!' });
  } catch (error) {
    console.error('Error sending contact form:', error);
    res.status(500).json({ success: false, error: 'Server Error. Try again later.' });
  }
});

module.exports = router;
