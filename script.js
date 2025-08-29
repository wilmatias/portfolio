// Initialize EmailJS
emailjs.init("YOUR_EMAILJS_PUBLIC_KEY"); // Replace with your actual EmailJS public key

const { createApp } = Vue;

createApp({
    data() {
        return {
            showMobileMenu: false,
            isSubmitting: false,
            submitMessage: '',
            submitStatus: '',
            isAnimatingBrand: false, // Flag to prevent overlapping animations
            activeSection: 'home', // Track current active section
            
            // Carousel states
            currentSkillSlide: 0,
            currentIntegrationSlide: 0,
            currentProjectSlide: 0,
            currentExperienceSlide: 0,
            
            // Touch/swipe variables
            touchStartX: null,
            touchStartY: null,
            touchEndX: null,
            touchEndY: null,
            touchSection: null,
            
            // Personal Information
            contactInfo: {
                email: 'wilardmatias.work@gmail.com',
                phone: '+63 916 870 5957'
            },
            
            objective: 'Results-driven Full-Stack Developer & IT Specialist with 7+ years of experience in software development, IT operations, and system support. Skilled in leading development teams, building scalable applications, and delivering high-quality solutions across web, cloud, and enterprise systems. Seeking to contribute technical expertise and leadership to drive innovation and efficiency within a growth-oriented organization.',
            
            // Contact Form
            form: {
                name: '',
                email: '',
                subject: '',
                message: ''
            },
            
            errors: {},
            
            // Tech Stack for Animation
            techStack: [
                { icon: 'fab fa-vuejs', style: { top: '20%', left: '20%', fontSize: '4rem' } },
                { icon: 'fab fa-react', style: { top: '15%', left: '80%', fontSize: '2.5rem' } },
                { icon: 'fab fa-node-js', style: { top: '25%', left: '15%', fontSize: '2rem' } },
                { icon: 'fab fa-js-square', style: { top: '30%', left: '85%', fontSize: '2.8rem' } },
                { icon: 'fab fa-php', style: { top: '45%', left: '5%', fontSize: '2.3rem' } },
                { icon: 'fab fa-laravel', style: { top: '40%', left: '90%', fontSize: '2rem' } },
                { icon: 'fas fa-database', style: { top: '60%', left: '20%', fontSize: '2.5rem' } },
                { icon: 'fab fa-aws', style: { top: '65%', left: '75%', fontSize: '3rem' } },
                { icon: 'fab fa-docker', style: { top: '80%', left: '10%', fontSize: '2.8rem' } },
                { icon: 'fab fa-git-alt', style: { top: '75%', left: '85%', fontSize: '2.3rem' } },
                { icon: 'fab fa-html5', style: { top: '20%', left: '50%', fontSize: '2rem' } },
                { icon: 'fab fa-css3-alt', style: { top: '55%', left: '50%', fontSize: '2.4rem' } },
                { icon: 'fab fa-angular', style: { top: '35%', left: '35%', fontSize: '2.6rem' } },
                { icon: 'fas fa-server', style: { top: '70%', left: '40%', fontSize: '2.2rem' } },
                { icon: 'fas fa-cloud', style: { top: '90%', left: '60%', fontSize: '2.7rem' } }
            ],
            
            // Professional Experience
            experience: [
                {
                    company: 'Pinoy Online Travel Solution Biz',
                    position: 'Team Lead Web Developer',
                    period: 'Sep 2024 – Present',
                    responsibilities: [
                        'Lead development of all-in-one travel agency platform (B2B & B2C)',
                        'Manage scrum meetings, task distribution, and project progress monitoring',
                        'Oversee code reviews, manual testing, and deployment',
                        'Contribute to full-stack development using modern frameworks'
                    ],
                    technologies: ['Vue 3', 'React', 'TypeScript', 'Tailwind', 'Laravel', 'MySQL', 'Firebase', 'AWS', 'GCP']
                },
                {
                    company: 'LIVE700 Software Inc',
                    position: 'Full-stack Developer',
                    period: 'Apr 2024 – Nov 2024',
                    responsibilities: [
                        'Built crypto trading & mining platform with secure backend & frontend',
                        'Deployed and managed on IIS cloud server',
                        'Delivered frontend modules and API integrations'
                    ],
                    technologies: ['Vue 3', 'ASP.Net Core', 'Tailwind', 'Node.js', 'C#', 'MySQL']
                },
                {
                    company: 'LIVE700 Software Inc',
                    position: 'Mid-Level Front-end Developer',
                    period: 'Jan 2024 – Mar 2024',
                    responsibilities: [
                        'Developed frontend for Live700 web chat app and HRIS platform',
                        'Built API endpoints & automated testing (frontend + API)'
                    ],
                    technologies: ['Vue', 'Pinia', 'Laravel', 'MySQL']
                },
                {
                    company: 'NBGroup',
                    position: 'Senior Software Developer',
                    period: 'Aug 2023 – Dec 2023',
                    responsibilities: [
                        'Frontend Team Lead for Hall betting site project',
                        'Designed and implemented APIs with Redux Saga',
                        'Guided junior developers, conducted code reviews, and managed task distribution'
                    ],
                    technologies: ['React', 'Redux Saga', 'Ant Design', 'Bootstrap']
                },
                {
                    company: 'Freelance',
                    position: 'Web Developer',
                    period: 'Feb 2022 – Mar 2024',
                    responsibilities: [
                        'Delivered end-to-end web solutions for clients using modern stacks',
                        'Handled deployments on Heroku & AWS, including Dockerized apps',
                        'Collaborated with clients on feature requests, bug fixes, and QA testing'
                    ],
                    technologies: ['Vue', 'Angular', 'PHP', 'Laravel', 'Node.js', 'MongoDB', 'MySQL']
                },
                {
                    company: 'AllValue Holding Corp',
                    position: 'Operations System Support',
                    period: 'Jan 2020 – Aug 2023',
                    responsibilities: [
                        'Provided L2 IT support for POS, SAP, NAV, and retail operations',
                        'Automated reporting using SQL + SSRS',
                        'Trained staff on POS systems and new software rollouts',
                        'Handled server/network maintenance, device troubleshooting, CCTV, and IT inventory'
                    ],
                    technologies: ['SQL Server', 'SAP', 'MS Dynamics NAV', 'SSRS']
                }
            ],
            
            // Skills Categories
            skillCategories: [
                {
                    name: 'Frontend Development',
                    skills: [
                        { name: 'Vue.js', icon: 'fab fa-vuejs' },
                        { name: 'React', icon: 'fab fa-react' },
                        { name: 'Angular', icon: 'fab fa-angular' },
                        { name: 'TypeScript', icon: 'fab fa-js-square' },
                        { name: 'HTML5', icon: 'fab fa-html5' },
                        { name: 'CSS3', icon: 'fab fa-css3-alt' },
                        { name: 'Tailwind', icon: 'fas fa-palette' },
                        { name: 'Bootstrap', icon: 'fab fa-bootstrap' }
                    ]
                },
                {
                    name: 'Backend Development',
                    skills: [
                        { name: 'Node.js', icon: 'fab fa-node-js' },
                        { name: 'PHP', icon: 'fab fa-php' },
                        { name: 'Laravel', icon: 'fab fa-laravel' },
                        { name: 'ASP.Net Core', icon: 'fas fa-code' },
                        { name: 'Java', icon: 'fab fa-java' },
                        { name: 'Express', icon: 'fas fa-server' },
                        { name: 'CodeIgniter', icon: 'fas fa-fire' },
                        { name: 'C#', icon: 'fas fa-hashtag' }
                    ]
                },
                {
                    name: 'Database & Cloud',
                    skills: [
                        { name: 'MySQL', icon: 'fas fa-database' },
                        { name: 'MongoDB', icon: 'fas fa-leaf' },
                        { name: 'Firebase', icon: 'fas fa-fire-alt' },
                        { name: 'Supabase', icon: 'fas fa-bolt' },
                        { name: 'SQL Server', icon: 'fas fa-server' },
                        { name: 'AWS', icon: 'fab fa-aws' },
                        { name: 'GCP', icon: 'fab fa-google' },
                        { name: 'Docker', icon: 'fab fa-docker' },
                        { name: 'Heroku', icon: 'fas fa-cloud' }
                    ]
                },
                {
                    name: 'Tools & Others',
                    skills: [
                        { name: 'Git', icon: 'fab fa-git-alt' },
                        { name: 'SVN', icon: 'fas fa-code-branch' },
                        { name: 'Postman', icon: 'fas fa-paper-plane' },
                        { name: 'Jira', icon: 'fab fa-atlassian' },
                        { name: 'Photoshop', icon: 'fas fa-image' },
                        { name: 'Canva', icon: 'fas fa-paint-brush' },
                        { name: 'MS Office', icon: 'fab fa-microsoft' },
                        { name: 'Cypress', icon: 'fas fa-vial' }
                    ]
                }
            ],
            
            // Third-Party Integrations
            integrations: [
                {
                    name: 'Payment Gateways',
                    icon: 'fas fa-credit-card',
                    items: [
                        {
                            name: 'PayPal',
                            description: 'Global payment processing with subscription and one-time payment support',
                            icon: 'fab fa-paypal'
                        },
                        {
                            name: 'Stripe',
                            description: 'Advanced payment infrastructure with custom checkout flows',
                            icon: 'fab fa-stripe'
                        },
                        {
                            name: 'PayMongo',
                            description: 'Philippines payment gateway with local payment methods',
                            icon: 'fas fa-peso-sign'
                        },
                        {
                            name: 'Xendit',
                            description: 'Southeast Asian payment platform with multi-currency support',
                            icon: 'fas fa-coins'
                        },
                        {
                            name: 'BUX',
                            description: 'Digital wallet and payment solution integration',
                            icon: 'fas fa-wallet'
                        },
                        {
                            name: 'Bayad Center',
                            description: 'Bills payment and remittance service integration',
                            icon: 'fas fa-money-bill-wave'
                        }
                    ]
                },
                {
                    name: 'Travel & Booking APIs',
                    icon: 'fas fa-plane',
                    items: [
                        {
                            name: '2GO Travel',
                            description: 'Ferry booking and schedule management API integration',
                            icon: 'fas fa-ship'
                        },
                        {
                            name: 'TBO Air & Hotel',
                            description: 'Flight and hotel booking API with real-time availability',
                            icon: 'fas fa-plane-departure'
                        },
                        {
                            name: 'GlobalTix Hotel',
                            description: 'Global hotel reservation system with inventory management',
                            icon: 'fas fa-hotel'
                        },
                        {
                            name: 'Starr Insurance',
                            description: 'Travel insurance API for booking protection',
                            icon: 'fas fa-shield-alt'
                        }
                    ]
                },
                {
                    name: 'Automation & Marketing',
                    icon: 'fas fa-robot',
                    items: [
                        {
                            name: 'Zapier',
                            description: 'Workflow automation connecting 1000+ apps and services',
                            icon: 'fas fa-bolt'
                        },
                        {
                            name: 'Pabbly Connect',
                            description: 'Multi-step automation workflows for business processes',
                            icon: 'fas fa-link'
                        },
                        {
                            name: 'Thinkific LMS',
                            description: 'Learning management system integration for course delivery',
                            icon: 'fas fa-graduation-cap'
                        },
                        {
                            name: 'SendFox',
                            description: 'Email marketing automation and newsletter management',
                            icon: 'fas fa-envelope-open-text'
                        },
                        {
                            name: 'Drip',
                            description: 'Advanced email marketing with customer journey mapping',
                            icon: 'fas fa-tint'
                        },
                        {
                            name: 'HelpSpace',
                            description: 'Customer support and FAQ management system',
                            icon: 'fas fa-question-circle'
                        }
                    ]
                }
            ],
            
            // Selected Projects
            projects: [
                {
                    name: 'LakbayHub',
                    description: 'All-in-one B2B2C travel booking platform providing comprehensive travel solutions for agents and end customers with integrated booking management.',
                    icon: 'fas fa-globe-asia',
                    technologies: ['Vue 3', 'Laravel', 'TypeScript', 'Tailwind', 'MySQL', 'AWS', 'Payment APIs']
                },
                {
                    name: 'LakbayNow',
                    description: 'Advanced B2B2C travel booking system with real-time inventory management, multi-supplier integration, and seamless booking experience.',
                    icon: 'fas fa-rocket',
                    technologies: ['Vue 3', 'React', 'Laravel', 'Firebase', 'Travel APIs', 'Payment Gateways', 'GCP']
                },
                {
                    name: 'ISELCO Online Electric Meter Application',
                    description: 'Digital application & payment platform for electric meter management with integrated payment gateway and customer portal.',
                    icon: 'fas fa-bolt',
                    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Payment API']
                },
                {
                    name: 'QR-Code Document Monitoring System',
                    description: 'Paperless approval workflow system for Cabatuan LGU with QR code tracking and email notifications.',
                    icon: 'fas fa-qrcode',
                    technologies: ['Vue.js', 'PHP', 'MySQL', 'QR Generator', 'Email Service']
                },
                {
                    name: 'Financial & Inventory System (Casarosa)',
                    description: 'Comprehensive hotel booking system with integrated inventory management and sales reporting dashboard.',
                    icon: 'fas fa-hotel',
                    technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js']
                },
                {
                    name: 'PCMS Public Safety Division',
                    description: 'Violation reporting & monitoring system for public safety with real-time tracking and analytics.',
                    icon: 'fas fa-shield-alt',
                    technologies: ['Angular', 'Laravel', 'MySQL', 'Real-time Updates']
                },
                {
                    name: 'V-unite Virtual Showroom & LMS',
                    description: 'Web-based learning management system with virtual showroom capabilities for events and education.',
                    icon: 'fas fa-graduation-cap',
                    technologies: ['Vue.js', 'Laravel', 'WebRTC', 'Video Streaming']
                },
                {
                    name: 'Crypto Trading & Mining Platform',
                    description: 'Secure cryptocurrency trading platform with mining capabilities and real-time market data integration.',
                    icon: 'fab fa-bitcoin',
                    technologies: ['Vue 3', 'ASP.Net Core', 'C#', 'WebSocket', 'IIS']
                }
            ]
        }
    },
    
    methods: {
        // Navigation
        toggleMobileMenu() {
            this.showMobileMenu = !this.showMobileMenu;
        },
        
        scrollTo(elementId) {
            const element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                this.showMobileMenu = false;
                // Immediately update active section when clicking
                this.activeSection = elementId;
            }
        },
        
        // Set up scroll spy functionality
        setupScrollSpy() {
            const sections = ['home', 'about', 'experience', 'skills', 'integrations', 'projects', 'contact'];
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.activeSection = entry.target.id;
                    }
                });
            }, {
                threshold: 0.2, // Lower threshold - section becomes active when 20% is visible
                rootMargin: '-10% 0px -10% 0px' // Reduced margin for better detection
            });
            
            // Observe all sections
            sections.forEach(sectionId => {
                const section = document.getElementById(sectionId);
                if (section) {
                    observer.observe(section);
                }
            });
            
            // Fallback scroll listener for more accurate detection
            let ticking = false;
            window.addEventListener('scroll', () => {
                if (!ticking) {
                    requestAnimationFrame(() => {
                        this.checkActiveSection();
                        ticking = false;
                    });
                    ticking = true;
                }
            });
        },
        
        // Manual check for active section based on scroll position
        checkActiveSection() {
            const sections = ['home', 'about', 'experience', 'skills', 'integrations', 'projects', 'contact'];
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    if (this.activeSection !== sections[i]) {
                        this.activeSection = sections[i];
                    }
                    break;
                }
            }
        },
        
        // Brand animation method
        animateBrand() {
            // Prevent multiple animations from running simultaneously
            if (this.isAnimatingBrand) return;
            this.isAnimatingBrand = true;
            
            const brandText = this.$refs.brandText;
            if (!brandText) return;
            
            const originalText = '</Wil>';
            const messages = ['</Dev>', '</Code>', '</Vue>', '</JS>', '</Full-Stack>', '</Wil>'];
            let messageIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            
            const typeEffect = () => {
                const currentMessage = messages[messageIndex];
                
                if (!isDeleting) {
                    brandText.textContent = currentMessage.substring(0, charIndex + 1);
                    charIndex++;
                    
                    if (charIndex === currentMessage.length) {
                        setTimeout(() => {
                            isDeleting = true;
                            typeEffect();
                        }, 1200);
                        return;
                    }
                } else {
                    brandText.textContent = currentMessage.substring(0, charIndex - 1);
                    charIndex--;
                    
                    if (charIndex === 0) {
                        isDeleting = false;
                        messageIndex = (messageIndex + 1) % messages.length;
                        
                        if (messageIndex === messages.length - 1) {
                            setTimeout(() => {
                                brandText.textContent = originalText;
                                this.isAnimatingBrand = false; // Reset animation flag
                            }, 500);
                            return;
                        }
                    }
                }
                
                setTimeout(typeEffect, isDeleting ? 80 : 120);
            };
            
            typeEffect();
        },
        
        // Carousel Methods - Skills
        nextSkill() {
            if (this.currentSkillSlide < this.skillCategories.length - 1) {
                this.currentSkillSlide++;
            }
        },
        
        prevSkill() {
            if (this.currentSkillSlide > 0) {
                this.currentSkillSlide--;
            }
        },
        
        goToSkillSlide(index) {
            this.currentSkillSlide = index;
        },
        
        // Carousel Methods - Integrations
        nextIntegration() {
            if (this.currentIntegrationSlide < this.integrations.length - 1) {
                this.currentIntegrationSlide++;
            }
        },
        
        prevIntegration() {
            if (this.currentIntegrationSlide > 0) {
                this.currentIntegrationSlide--;
            }
        },
        
        goToIntegrationSlide(index) {
            this.currentIntegrationSlide = index;
        },
        
        // Carousel Methods - Projects
        nextProject() {
            if (this.currentProjectSlide < this.projects.length - 1) {
                this.currentProjectSlide++;
            }
        },
        
        prevProject() {
            if (this.currentProjectSlide > 0) {
                this.currentProjectSlide--;
            }
        },
        
        goToProjectSlide(index) {
            this.currentProjectSlide = index;
        },
        
        // Carousel Methods - Experience
        nextExperience() {
            if (this.currentExperienceSlide < this.experience.length - 1) {
                this.currentExperienceSlide++;
            }
        },
        
        prevExperience() {
            if (this.currentExperienceSlide > 0) {
                this.currentExperienceSlide--;
            }
        },
        
        goToExperienceSlide(index) {
            this.currentExperienceSlide = index;
        },
        
        // Touch/Swipe functionality
        handleTouchStart(event, section) {
            this.touchStartX = event.touches[0].clientX;
            this.touchStartY = event.touches[0].clientY;
            this.touchSection = section;
            
            // Add touching class to disable transitions during swipe
            const track = event.currentTarget;
            track.classList.add('touching');
        },
        
        handleTouchMove(event) {
            if (!this.touchStartX || !this.touchStartY) return;
            
            this.touchEndX = event.touches[0].clientX;
            this.touchEndY = event.touches[0].clientY;
            
            const diffX = this.touchStartX - this.touchEndX;
            const diffY = this.touchStartY - this.touchEndY;
            
            // Prevent vertical scroll if horizontal swipe is detected
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 10) {
                event.preventDefault();
            }
        },
        
        handleTouchEnd(event) {
            if (!this.touchStartX || !this.touchStartY) return;
            
            // Remove touching class to re-enable transitions
            const track = event.currentTarget;
            track.classList.remove('touching');
            
            const diffX = this.touchStartX - this.touchEndX;
            const diffY = this.touchStartY - this.touchEndY;
            
            // Only process horizontal swipes with minimum distance
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                if (this.touchSection === 'skills') {
                    if (diffX > 0 && this.currentSkillSlide < this.skillCategories.length - 1) {
                        // Swipe left - next slide
                        this.nextSkill();
                    } else if (diffX < 0 && this.currentSkillSlide > 0) {
                        // Swipe right - previous slide  
                        this.prevSkill();
                    }
                } else if (this.touchSection === 'integrations') {
                    if (diffX > 0 && this.currentIntegrationSlide < this.integrations.length - 1) {
                        this.nextIntegration();
                    } else if (diffX < 0 && this.currentIntegrationSlide > 0) {
                        this.prevIntegration();
                    }
                } else if (this.touchSection === 'projects') {
                    if (diffX > 0 && this.currentProjectSlide < this.projects.length - 1) {
                        this.nextProject();
                    } else if (diffX < 0 && this.currentProjectSlide > 0) {
                        this.prevProject();
                    }
                } else if (this.touchSection === 'experience') {
                    if (diffX > 0 && this.currentExperienceSlide < this.experience.length - 1) {
                        this.nextExperience();
                    } else if (diffX < 0 && this.currentExperienceSlide > 0) {
                        this.prevExperience();
                    }
                }
            }
            
            // Reset touch variables
            this.touchStartX = null;
            this.touchStartY = null;
            this.touchEndX = null;
            this.touchEndY = null;
            this.touchSection = null;
        },
        
        // Form Validation
        validateForm() {
            this.errors = {};
            let isValid = true;
            
            // Name validation
            if (!this.form.name.trim()) {
                this.errors.name = 'Name is required';
                isValid = false;
            } else if (this.form.name.trim().length < 2) {
                this.errors.name = 'Name must be at least 2 characters';
                isValid = false;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!this.form.email.trim()) {
                this.errors.email = 'Email is required';
                isValid = false;
            } else if (!emailRegex.test(this.form.email)) {
                this.errors.email = 'Please enter a valid email address';
                isValid = false;
            }
            
            // Subject validation
            if (!this.form.subject.trim()) {
                this.errors.subject = 'Subject is required';
                isValid = false;
            } else if (this.form.subject.trim().length < 3) {
                this.errors.subject = 'Subject must be at least 3 characters';
                isValid = false;
            }
            
            // Message validation
            if (!this.form.message.trim()) {
                this.errors.message = 'Message is required';
                isValid = false;
            } else if (this.form.message.trim().length < 10) {
                this.errors.message = 'Message must be at least 10 characters';
                isValid = false;
            }
            
            return isValid;
        },
        
        // Contact Form Submission
        async submitForm() {
            if (!this.validateForm()) {
                return;
            }
            
            this.isSubmitting = true;
            this.submitMessage = '';
            
            try {
                // EmailJS integration
                const templateParams = {
                    from_name: this.form.name,
                    from_email: this.form.email,
                    subject: this.form.subject,
                    message: this.form.message,
                    to_name: 'Wilard Marquez Matias',
                    to_email: 'wilardmatias.work@gmail.com'
                };
                
                // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual EmailJS service and template IDs
                await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams);
                
                this.submitMessage = 'Thank you! Your message has been sent successfully. I will get back to you soon.';
                this.submitStatus = 'success';
                
                // Reset form
                this.form = {
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                };
                
            } catch (error) {
                console.error('EmailJS Error:', error);
                
                // Fallback - open default email client
                const subject = encodeURIComponent(this.form.subject);
                const body = encodeURIComponent(`From: ${this.form.name} (${this.form.email})\n\n${this.form.message}`);
                const mailtoLink = `mailto:wilardmatias.work@gmail.com?subject=${subject}&body=${body}`;
                
                window.location.href = mailtoLink;
                
                this.submitMessage = 'Opening your default email client. If it doesn\'t work, please email me directly at wilardmatias.work@gmail.com';
                this.submitStatus = 'success';
            }
            
            this.isSubmitting = false;
            
            // Clear message after 5 seconds
            setTimeout(() => {
                this.submitMessage = '';
                this.submitStatus = '';
            }, 5000);
        }
    },
    
    mounted() {
        // Start brand animation automatically when component mounts
        setTimeout(() => {
            this.animateBrand();
        }, 2000); // 2 second delay for dramatic effect after page loads
        
        // Set up periodic auto-animation every 15 seconds
        setInterval(() => {
            this.animateBrand();
        }, 15000);
        
        // Set up scroll spy for navigation highlighting
        this.setupScrollSpy();
        
        // Smooth scrolling for navigation links
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
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.navbar')) {
                this.showMobileMenu = false;
            }
        });
        
        // Add scroll effect to navbar
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            } else {
                navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            }
        });
        
        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe sections for animation
        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });
    }
}).mount('#app');
