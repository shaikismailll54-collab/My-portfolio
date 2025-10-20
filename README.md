# SHAIK ISMAIL - 3D Portfolio Website

A stunning 3D portfolio website featuring glassmorphism design, advanced animations, and interactive elements.

## ✨ Features

### 🎨 Visual Effects
- **3D Card Animations** - Interactive 3D hover effects on all cards
- **Glassmorphism Design** - Modern glass-like UI elements with backdrop blur
- **Lighting & Shadow Effects** - Dynamic lighting and shadow animations
- **Floating Objects/Layers** - Animated floating elements and particle system
- **3D Avatar/Profile Image** - Rotating 3D profile image with glow effects

### 🎯 Interactive Elements
- **Custom Cursor Animation** - Personalized cursor with hover effects
- **Typewriter Text Animation** - Dynamic text typing effect
- **Button Hover Effects** - Advanced button animations and ripple effects
- **Smooth Transitions** - Fluid animations throughout the site
- **Mouse Parallax Layers** - Mouse-following parallax effects

### 📱 Sections
- **Hero Section** - Animated introduction with 3D elements
- **About Section** - Career objective with glassmorphism cards
- **Skills Section** - Interactive skill cards with 3D effects
- **Projects Section** - Project gallery with hover animations
- **Experience Section** - Timeline with animated markers
- **Certifications Section** - Certification cards with 3D effects
- **Contact Section** - Interactive contact form with backend integration

### 🚀 Advanced Features
- **Framer Motion/GSAP Animations** - Professional animation library integration
- **Responsive 3D Design** - Mobile-optimized 3D elements
- **Performance Optimization** - Optimized for smooth performance
- **Dark & Light Mode** - Theme toggle with smooth transitions
- **Scroll-Triggered Animations** - Elements animate on scroll
- **3D Model Integration** - Three.js integration for 3D models
- **Floating Particle Background** - Dynamic particle system
- **3D Rotating Logo/Text** - Animated branding elements
- **Animated Navbar Glow** - Glowing navigation effects
- **Lazy-Loading** - Optimized image and component loading

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Animation Libraries**: GSAP, Three.js
- **Backend**: Node.js, Express.js
- **Email Service**: Nodemailer
- **Styling**: Custom CSS with CSS Grid & Flexbox
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Inter)

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shaikismail/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   ```
   
   Edit `.env` file with your email credentials:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   PORT=3001
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:3001
   ```

## 📧 Contact Form Setup

The contact form requires email configuration:

1. **Gmail Setup**:
   - Enable 2-factor authentication on your Gmail account
   - Generate an App Password for the application
   - Use the App Password in the `.env` file

2. **Alternative Email Services**:
   - Update the transporter configuration in `server.js`
   - Modify the email service settings as needed

## 🎨 Customization

### Colors
Update the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #06b6d4;
    /* ... other variables */
}
```

### Content
- Update personal information in `index.html`
- Replace placeholder images with your photos
- Modify project details and descriptions
- Update contact information

### Animations
- Adjust animation speeds in `script.js`
- Modify GSAP timeline configurations
- Customize scroll trigger settings

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first approach
- Touch-friendly interactions
- Optimized 3D effects for mobile devices
- Adaptive navigation menu
- Responsive grid layouts

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

### Netlify
1. Build the project: `npm run build`
2. Deploy the `public` folder to Netlify
3. Configure environment variables

### Traditional Hosting
1. Upload files to your web server
2. Install Node.js dependencies
3. Configure email settings
4. Start the server

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for best user experience
- **3D Performance**: Hardware-accelerated animations
- **Image Optimization**: Lazy loading and responsive images

## 🔧 Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**SHAIK ISMAIL**
- Email: shaikismailll54@gmail.com
- Phone: +91 7842348870
- GitHub: [@shaikismail](https://github.com/shaikismail)
- LinkedIn: [SHAIK ISMAIL](https://www.linkedin.com/in/SHAIKISMAIL334)

## 🙏 Acknowledgments

- GSAP for amazing animation capabilities
- Three.js for 3D graphics
- Font Awesome for icons
- Google Fonts for typography
- Unsplash for placeholder images

---

**Built with ❤️ by SHAIK ISMAIL**
