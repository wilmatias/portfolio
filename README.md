# Wilard Marquez Matias - Portfolio

A modern, responsive portfolio website built with Vue.js and Vite, showcasing my experience as a Full-Stack Developer & IT Specialist.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with desktop optimization
- **Interactive Elements**: Smooth animations and transitions
- **Modern Tech Stack**: Vue.js 3, Vite, and modern CSS
- **Contact Form**: EmailJS integration for direct contact
- **Performance Optimized**: Fast loading and SEO friendly

## 🛠️ Technologies Used

- **Frontend**: Vue.js 3, HTML5, CSS3, JavaScript ES6+
- **Build Tool**: Vite
- **Deployment**: Vercel
- **Email Service**: EmailJS
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Inter)

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🌐 Deployment

### Deploy to Vercel

1. **Install Vercel CLI** (if not already installed)
   ```bash
   npm install -g vercel
   ```

2. **Deploy to Vercel**
   ```bash
   vercel
   ```

3. **Or connect your GitHub repository to Vercel**
   - Push your code to GitHub
   - Import the project in Vercel dashboard
   - Configure build settings:
     - Build Command: `npm run build`
     - Output Directory: `dist`

### Environment Setup

1. **EmailJS Configuration**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create an email service and template
   - Replace `YOUR_EMAILJS_PUBLIC_KEY` in `script.js` with your actual key
   - Update service ID and template ID in the contact form submission

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets
├── dist/               # Production build (generated)
├── index.html          # Main HTML file
├── script.js           # Vue.js application logic
├── styles.css          # Styling
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
├── vercel.json         # Vercel deployment config
└── README.md          # Project documentation
```

## 🎯 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📱 Responsive Features

- **Mobile Navigation**: Collapsible hamburger menu
- **Touch Gestures**: Swipe navigation for carousels on mobile
- **Adaptive Layouts**: Different layouts for desktop and mobile
- **Performance**: Optimized images and lazy loading

## 🔧 Customization

1. **Personal Information**: Update contact details in `script.js`
2. **Content**: Modify experience, skills, and projects data
3. **Styling**: Customize colors and layouts in `styles.css`
4. **EmailJS**: Configure your email service integration

## 📞 Contact

- **Email**: wilardmatias.work@gmail.com
- **Phone**: +63 916 870 5957

---

Built with ❤️ by Wilard Marquez Matias
