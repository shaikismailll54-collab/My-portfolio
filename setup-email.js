const fs = require('fs');
const path = require('path');

console.log('🔧 Email Setup for SHAIK ISMAIL Portfolio');
console.log('==========================================\n');

// Check if .env exists
const envPath = path.join(__dirname, '.env');
if (!fs.existsSync(envPath)) {
    console.log('📝 Creating .env file...');
    const envContent = `# Email Configuration for Portfolio
EMAIL_USER=shaikismailll54@gmail.com
EMAIL_PASS=your-app-password-here

# Server Configuration
PORT=3001
NODE_ENV=development`;
    
    fs.writeFileSync(envPath, envContent);
    console.log('✅ .env file created');
} else {
    console.log('✅ .env file already exists');
}

console.log('\n📧 EMAIL SETUP INSTRUCTIONS:');
console.log('============================');
console.log('1. Go to: https://myaccount.google.com/security');
console.log('2. Enable "2-Step Verification" if not already enabled');
console.log('3. Go to: https://myaccount.google.com/apppasswords');
console.log('4. Select "Mail" and generate a password');
console.log('5. Copy the 16-character password (like: abcd efgh ijkl mnop)');
console.log('6. Edit the .env file and replace "your-app-password-here" with your password');
console.log('7. Restart the server: npm start');
console.log('\n📬 After setup:');
console.log('- All contact form messages will be sent to: shaikismailll54@gmail.com');
console.log('- Messages are also saved in contact_messages.log file');
console.log('- Check server console for email status');
console.log('\n🚀 Test the setup:');
console.log('- Fill out the contact form on your website');
console.log('- Check your email inbox');
console.log('- Check the server console for status messages');
