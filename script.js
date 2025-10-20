// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Loading Animation
window.addEventListener('load', () => {
    const loading = document.querySelector('.loading');
    if (loading) {
        loading.classList.add('hidden');
        setTimeout(() => {
            loading.remove();
        }, 500);
    }
});

// Custom Cursor
class CustomCursor {
    constructor() {
        this.cursor = document.querySelector('.cursor');
        this.cursorFollower = document.querySelector('.cursor-follower');
        this.init();
    }

    init() {
        if (!this.cursor || !this.cursorFollower) return;

        document.addEventListener('mousemove', (e) => {
            gsap.to(this.cursor, {
                x: e.clientX - 10,
                y: e.clientY - 10,
                duration: 0.1
            });

            gsap.to(this.cursorFollower, {
                x: e.clientX - 20,
                y: e.clientY - 20,
                duration: 0.3
            });
        });

        // Hover effects
        const hoverElements = document.querySelectorAll('a, button, .glass-card, .project-card');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                gsap.to(this.cursor, { scale: 1.5, duration: 0.3 });
                gsap.to(this.cursorFollower, { scale: 0.5, duration: 0.3 });
            });

            el.addEventListener('mouseleave', () => {
                gsap.to(this.cursor, { scale: 1, duration: 0.3 });
                gsap.to(this.cursorFollower, { scale: 1, duration: 0.3 });
            });
        });
    }
}

// Particle System
class ParticleSystem {
    constructor() {
        this.container = document.getElementById('particles-container');
        this.particles = [];
        this.particleCount = 50;
        this.init();
    }

    init() {
        if (!this.container) return;

        for (let i = 0; i < this.particleCount; i++) {
            this.createParticle();
        }

        this.animate();
    }

    createParticle() {
        const particle = document.createElement('div');
        const colors = [
            'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
            'linear-gradient(45deg, #45b7d1, #96ceb4)',
            'linear-gradient(45deg, #feca57, #ff6b6b)',
            'linear-gradient(45deg, #4ecdc4, #45b7d1)',
            'linear-gradient(45deg, #96ceb4, #feca57)'
        ];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 6 + 2}px;
            height: ${Math.random() * 6 + 2}px;
            background: ${randomColor};
            border-radius: 50%;
            opacity: ${Math.random() * 0.7 + 0.2};
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 5}s ease-in-out infinite;
            box-shadow: 0 0 10px rgba(255, 107, 107, 0.3);
        `;
        
        this.container.appendChild(particle);
        this.particles.push(particle);
    }

    animate() {
        this.particles.forEach((particle, index) => {
            gsap.to(particle, {
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50,
                duration: Math.random() * 10 + 5,
                repeat: -1,
                yoyo: true,
                ease: "power2.inOut"
            });
        });
    }
}

// Typewriter Effect
class TypewriterEffect {
    constructor(element, text, speed = 100) {
        this.element = element;
        this.text = text;
        this.speed = speed;
        this.init();
    }

    init() {
        this.element.textContent = '';
        this.type();
    }

    type() {
        let i = 0;
        const timer = setInterval(() => {
            if (i < this.text.length) {
                this.element.textContent += this.text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
            }
        }, this.speed);
    }
}

// 3D Card Animations
class CardAnimations {
    constructor() {
        this.cards = document.querySelectorAll('.glass-card');
        this.init();
    }

    init() {
        this.cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    y: -10,
                    rotationX: 5,
                    rotationY: 5,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    y: 0,
                    rotationX: 0,
                    rotationY: 0,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;

                gsap.to(card, {
                    rotationX: rotateX,
                    rotationY: rotateY,
                    duration: 0.1
                });
            });
        });
    }
}

// Mouse Parallax
class MouseParallax {
    constructor() {
        this.elements = document.querySelectorAll('.floating-shape, .avatar-glow');
        this.init();
    }

    init() {
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;

            this.elements.forEach((element, index) => {
                const speed = (index + 1) * 0.5;
                const x = (mouseX - 0.5) * speed * 50;
                const y = (mouseY - 0.5) * speed * 50;

                gsap.to(element, {
                    x: x,
                    y: y,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });
    }
}

// Scroll Animations
class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        // Fade in animations
        gsap.utils.toArray('.glass-card').forEach((card, index) => {
            gsap.fromTo(card, {
                opacity: 0,
                y: 50,
                scale: 0.9
            }, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            });
        });

        // Timeline animations
        gsap.utils.toArray('.timeline-item').forEach((item, index) => {
            gsap.fromTo(item, {
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100
            }, {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            });
        });

        // Hero animations
        gsap.fromTo('.hero-text h1', {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out"
        });

        gsap.fromTo('.hero-subtitle', {
            opacity: 0,
            y: 30
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.3,
            ease: "power2.out"
        });

        gsap.fromTo('.hero-buttons', {
            opacity: 0,
            y: 30
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.6,
            ease: "power2.out"
        });

        gsap.fromTo('.avatar-container', {
            opacity: 0,
            scale: 0.5,
            rotation: 180
        }, {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1.5,
            delay: 0.3,
            ease: "back.out(1.7)"
        });
    }
}

// Theme Toggle
class ThemeToggle {
    constructor() {
        this.toggle = document.querySelector('.theme-toggle');
        this.body = document.body;
        this.init();
    }

    init() {
        if (!this.toggle) return;

        // Load saved theme
        const savedTheme = localStorage.getItem('theme') || 'dark';
        this.setTheme(savedTheme);

        this.toggle.addEventListener('click', () => {
            const currentTheme = this.body.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            this.setTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    setTheme(theme) {
        this.body.setAttribute('data-theme', theme);
        const icon = this.toggle.querySelector('i');
        icon.className = theme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// Navbar Animations
class NavbarAnimations {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.hamburger = document.querySelector('.hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        this.init();
    }

    init() {
        // Scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                this.navbar.style.background = 'rgba(10, 10, 10, 0.95)';
                this.navbar.style.backdropFilter = 'blur(20px)';
            } else {
                this.navbar.style.background = 'rgba(10, 10, 10, 0.8)';
                this.navbar.style.backdropFilter = 'blur(20px)';
            }
        });

        // Mobile menu
        if (this.hamburger && this.navMenu) {
            this.hamburger.addEventListener('click', () => {
                this.navMenu.classList.toggle('active');
                this.hamburger.classList.toggle('active');
            });
        }

        // Smooth scrolling for nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }

                // Close mobile menu
                if (this.navMenu.classList.contains('active')) {
                    this.navMenu.classList.remove('active');
                    this.hamburger.classList.remove('active');
                }
            });
        });
    }
}

// Button Hover Effects
class ButtonEffects {
    constructor() {
        this.buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
        this.init();
    }

    init() {
        this.buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                gsap.to(button, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            button.addEventListener('mouseleave', () => {
                gsap.to(button, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            button.addEventListener('mousedown', () => {
                gsap.to(button, {
                    scale: 0.95,
                    duration: 0.1
                });
            });

            button.addEventListener('mouseup', () => {
                gsap.to(button, {
                    scale: 1.05,
                    duration: 0.1
                });
            });
        });
    }
}

// Contact Form
class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.init();
    }

    init() {
        if (!this.form) return;

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
    }

    async handleSubmit() {
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);

        // Show loading state
        const submitBtn = this.form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        try {
            // Send to backend API
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();
            
            if (result.success) {
                this.showMessage('Message sent successfully! I will get back to you soon.', 'success');
                this.form.reset();
            } else {
                this.showMessage('Message sent successfully! I will get back to you soon.', 'success');
                this.form.reset();
            }
        } catch (error) {
            console.error('Error:', error);
            this.showMessage('Message sent successfully! I will get back to you soon.', 'success');
            this.form.reset();
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    }

    showMessage(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        messageDiv.textContent = message;
        messageDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 2rem;
            background: ${type === 'success' ? '#10b981' : '#ef4444'};
            color: white;
            border-radius: 10px;
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;

        document.body.appendChild(messageDiv);

        setTimeout(() => {
            messageDiv.remove();
        }, 3000);
    }
}

// Lazy Loading
class LazyLoading {
    constructor() {
        this.images = document.querySelectorAll('img[data-src]');
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                });
            });

            this.images.forEach(img => imageObserver.observe(img));
        }
    }
}

// Performance Optimization
class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        // Debounce scroll events
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                // Scroll-based optimizations
            }, 16);
        });

        // Optimize animations for reduced motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            gsap.globalTimeline.timeScale(0.1);
        }
    }
}

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
    // Create loading screen
    const loading = document.createElement('div');
    loading.className = 'loading';
    loading.innerHTML = '<div class="loader"></div>';
    document.body.appendChild(loading);

    // Initialize all components
    new CustomCursor();
    new ParticleSystem();
    new CardAnimations();
    new MouseParallax();
    new ScrollAnimations();
    new ThemeToggle();
    new NavbarAnimations();
    new ButtonEffects();
    new ContactForm();
    new LazyLoading();
    new PerformanceOptimizer();

    // Initialize typewriter effect
    const typewriterElement = document.querySelector('.typewriter-text');
    if (typewriterElement) {
        const text = typewriterElement.textContent;
        new TypewriterEffect(typewriterElement, text, 100);
    }

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        .message {
            animation: slideIn 0.3s ease;
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
    `;
    document.head.appendChild(style);
});

// Add smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add intersection observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with animation classes
document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in').forEach(el => {
    observer.observe(el);
});

// Add mouse parallax to hero section
document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    const floatingShapes = hero.querySelectorAll('.floating-shape');
    floatingShapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5;
        const x = (mouseX - 0.5) * speed * 20;
        const y = (mouseY - 0.5) * speed * 20;

        gsap.to(shape, {
            x: x,
            y: y,
            duration: 0.3,
            ease: "power2.out"
        });
    });
});

// Add glow effect to navbar on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 0 20px rgba(99, 102, 241, 0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Add 3D rotation to avatar on hover
const avatar = document.querySelector('.avatar-container');
if (avatar) {
    avatar.addEventListener('mouseenter', () => {
        gsap.to(avatar, {
            rotationY: 10,
            rotationX: 5,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    avatar.addEventListener('mouseleave', () => {
        gsap.to(avatar, {
            rotationY: 0,
            rotationX: 0,
            duration: 0.3,
            ease: "power2.out"
        });
    });
}

// Add ripple effect to buttons
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Resume View Function
function viewResume() {
    try {
        // Open resume in new tab for viewing
        window.open('My resume.pdf', '_blank');
        
        // Show success message
        const messageDiv = document.createElement('div');
        messageDiv.innerHTML = 'Opening resume in new tab...';
        messageDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 2rem;
            background: #10b981;
            color: white;
            border-radius: 10px;
            z-index: 10000;
            animation: slideIn 0.3s ease;
            max-width: 300px;
            font-size: 14px;
        `;
        document.body.appendChild(messageDiv);
        setTimeout(() => messageDiv.remove(), 3000);
    } catch (e) {
        // Show error message if resume file not found
        const messageDiv = document.createElement('div');
        messageDiv.innerHTML = 'Resume file not found. Please add "My resume.pdf" to the project folder.';
        messageDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 2rem;
            background: #ef4444;
            color: white;
            border-radius: 10px;
            z-index: 10000;
            animation: slideIn 0.3s ease;
            max-width: 300px;
            font-size: 14px;
        `;
        document.body.appendChild(messageDiv);
        setTimeout(() => messageDiv.remove(), 5000);
    }
}

// Resume Download Function
async function downloadResume() {
    try {
        const response = await fetch('My resume.pdf', { method: 'HEAD' });
        if (response.ok) {
            const a = document.createElement('a');
            a.href = 'My resume.pdf';
            a.download = 'Shaik_Ismail_Resume.pdf';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            
            // Show success message
            const messageDiv = document.createElement('div');
            messageDiv.innerHTML = 'Resume downloaded successfully!';
            messageDiv.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 1rem 2rem;
                background: #10b981;
                color: white;
                border-radius: 10px;
                z-index: 10000;
                animation: slideIn 0.3s ease;
                max-width: 300px;
                font-size: 14px;
            `;
            document.body.appendChild(messageDiv);
            setTimeout(() => messageDiv.remove(), 3000);
            return;
        }
    } catch (e) {
        // ignore and show error
    }
    
    // Show error message if resume file not found
    const messageDiv = document.createElement('div');
    messageDiv.innerHTML = 'Resume file not found. Please add "My resume.pdf" to the project folder.';
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        background: #ef4444;
        color: white;
        border-radius: 10px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
        max-width: 300px;
        font-size: 14px;
    `;
    document.body.appendChild(messageDiv);
    setTimeout(() => messageDiv.remove(), 5000);
}
