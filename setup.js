const fs = require('fs');
const path = require('path');

// Create .env file if it doesn't exist
const envPath = path.join(__dirname, '.env');
const envExamplePath = path.join(__dirname, 'env.example');

if (!fs.existsSync(envPath)) {
    if (fs.existsSync(envExamplePath)) {
        fs.copyFileSync(envExamplePath, envPath);
        console.log('✅ Created .env file from env.example');
    } else {
        const envContent = `# Email Configuration
EMAIL_USER=shaikismailll54@gmail.com
EMAIL_PASS=your-app-password-here

# Server Configuration
PORT=3001
NODE_ENV=development`;
        
        fs.writeFileSync(envPath, envContent);
        console.log('✅ Created .env file with default values');
    }
} else {
    console.log('✅ .env file already exists');
}

console.log('\n🚀 Setup Instructions:');
console.log('1. Update .env file with your email credentials');
console.log('2. For Gmail: Enable 2FA and create an App Password');
console.log('3. Run: npm install');
console.log('4. Run: npm start');
console.log('\n📧 Contact form will send emails to: shaikismailll54@gmail.com');
console.log('🌐 Website will be available at: http://localhost:3001');
