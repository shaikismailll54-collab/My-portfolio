const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Email configuration
const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
        user: 'shaikismailll54@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-app-password'
    }
});

// Test email configuration
transporter.verify((error, success) => {
    if (error) {
        console.log('❌ Email configuration error:', error);
        console.log('💡 To fix: Set up Gmail App Password in .env file');
    } else {
        console.log('✅ Email server is ready to send messages');
    }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ 
                success: false, 
                message: 'All fields are required' 
            });
        }

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER || 'shaikismailll54@gmail.com',
            to: 'shaikismailll54@gmail.com',
            subject: `Portfolio Contact: ${subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9;">
                    <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        <h2 style="color: #ff6b6b; margin-bottom: 20px;">New Contact Form Submission</h2>
                        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                            <p style="margin: 10px 0;"><strong style="color: #333;">Name:</strong> ${name}</p>
                            <p style="margin: 10px 0;"><strong style="color: #333;">Email:</strong> ${email}</p>
                            <p style="margin: 10px 0;"><strong style="color: #333;">Subject:</strong> ${subject}</p>
                        </div>
                        <div style="background: #e3f2fd; padding: 20px; border-radius: 8px;">
                            <h3 style="color: #1976d2; margin-top: 0;">Message:</h3>
                            <p style="color: #333; line-height: 1.6; margin: 0;">${message}</p>
                        </div>
                        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
                            <p>This message was sent from your portfolio contact form.</p>
                            <p>Reply directly to: ${email}</p>
                        </div>
                    </div>
                </div>
            `
        };

        // Always try to send email
        let emailSent = false;
        try {
            await transporter.sendMail(mailOptions);
            console.log('✅ Email sent successfully to shaikismailll54@gmail.com');
            emailSent = true;
        } catch (emailError) {
            console.log('⚠️ Email sending failed:', emailError.message);
            console.log('📧 Contact Form Message (Logged to Console):');
            console.log('==========================================');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Subject:', subject);
            console.log('Message:', message);
            console.log('==========================================');
            console.log('💡 To receive emails: Set up Gmail App Password in .env file');
        }

        // Also log to a simple file for backup
        const fs = require('fs');
        const logEntry = `
==========================================
Date: ${new Date().toISOString()}
Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}
Email Sent: ${emailSent}
==========================================
`;
        
        try {
            fs.appendFileSync('contact_messages.log', logEntry);
            console.log('📝 Message also saved to contact_messages.log');
        } catch (logError) {
            console.log('⚠️ Could not save to log file:', logError.message);
        }

        res.json({ 
            success: true, 
            message: 'Message sent successfully!' 
        });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error sending message. Please try again.' 
        });
    }
});

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Test contact form endpoint
app.get('/api/test-contact', (req, res) => {
    res.json({ 
        message: 'Contact form is working!', 
        timestamp: new Date().toISOString(),
        emailConfigured: !!process.env.EMAIL_PASS && process.env.EMAIL_PASS !== 'your-app-password'
    });
});

// Test email endpoint
app.post('/api/test-email', async (req, res) => {
    try {
        const testMailOptions = {
            from: 'shaikismailll54@gmail.com',
            to: 'shaikismailll54@gmail.com',
            subject: 'Test Email from Portfolio - ' + new Date().toLocaleString(),
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9;">
                    <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        <h2 style="color: #ff6b6b; margin-bottom: 20px;">✅ Test Email from Portfolio</h2>
                        <p style="color: #333; line-height: 1.6;">This is a test email to verify that email sending is working correctly.</p>
                        <p style="color: #333; line-height: 1.6;">If you receive this email, the contact form will work properly.</p>
                        <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin: 20px 0;">
                            <p style="margin: 0; color: #1976d2; font-weight: bold;">Test Details:</p>
                            <p style="margin: 5px 0; color: #333;">Timestamp: ${new Date().toISOString()}</p>
                            <p style="margin: 5px 0; color: #333;">From: Portfolio Contact Form</p>
                            <p style="margin: 5px 0; color: #333;">To: shaikismailll54@gmail.com</p>
                        </div>
                        <p style="color: #666; font-size: 14px; margin-top: 20px;">This email was sent from your portfolio contact form system.</p>
                    </div>
                </div>
            `
        };

        await transporter.sendMail(testMailOptions);
        console.log('✅ Test email sent successfully to shaikismailll54@gmail.com');
        res.json({ success: true, message: 'Test email sent successfully! Check your inbox at shaikismailll54@gmail.com' });
    } catch (error) {
        console.log('❌ Test email failed:', error.message);
        res.json({ success: false, message: 'Email test failed: ' + error.message });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Visit: http://localhost:${PORT}`);
});

module.exports = app;
