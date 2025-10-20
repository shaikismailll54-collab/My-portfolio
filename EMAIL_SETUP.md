# 📧 Email Setup Instructions

## To receive contact form messages in your email:

### 1. Enable 2-Factor Authentication on Gmail
- Go to your Google Account settings
- Security → 2-Step Verification
- Enable it if not already enabled

### 2. Generate App Password
- Go to Google Account → Security
- 2-Step Verification → App passwords
- Select "Mail" as the app
- Generate a 16-character password
- Copy this password

### 3. Update .env file
Edit the `.env` file in your project:
```env
EMAIL_USER=shaikismailll54@gmail.com
EMAIL_PASS=your-16-character-app-password-here
PORT=3001
NODE_ENV=development
```

### 4. Restart the server
```bash
npm start
```

## ✅ After setup:
- Contact form messages will be sent to: **shaikismailll54@gmail.com**
- You'll receive beautifully formatted emails
- Messages include sender's contact info for easy replies

## 🔧 Test the setup:
1. Fill out the contact form on your website
2. Check your email inbox
3. You should receive a formatted email with the message details

---
**Note**: Without email setup, messages are still logged to the server console for development purposes.
