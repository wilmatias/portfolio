# Vercel Deployment Guide

## Quick Deployment Steps

### Option 1: Vercel CLI (Recommended)

1. **Install Vercel CLI globally**
   ```bash
   npm install -g vercel
   ```

2. **Build your project**
   ```bash
   npm run build
   ```

3. **Deploy to Vercel**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - What's your project's name? **wilard-portfolio** (or your preferred name)
   - In which directory is your code located? **./**
   - Want to override settings? **N**

### Option 2: GitHub + Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Add Vite configuration for deployment"
   git push origin main
   ```

2. **Import in Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Configure settings:
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
     - **Install Command**: `npm install`

3. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete

## Important Notes

### Environment Variables
If you need to set environment variables (like EmailJS keys):

1. **In Vercel Dashboard:**
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add your variables

2. **In your code:**
   - Use `import.meta.env.VITE_YOUR_VAR_NAME` to access them
   - Prefix with `VITE_` for client-side variables

### Custom Domain
- After deployment, you can add a custom domain in Vercel dashboard
- Go to Project Settings → Domains
- Add your domain and follow DNS configuration

### Performance Tips
- Your site is already optimized with Vite's build process
- Static assets are automatically cached
- Vercel provides global CDN automatically

## Troubleshooting

### Common Issues

1. **Build fails:**
   - Check `npm run build` works locally
   - Ensure all dependencies are in `package.json`

2. **Assets not loading:**
   - Verify `base: './'` in `vite.config.js`
   - Check file paths are relative

3. **Vue not working:**
   - Ensure Vue is loaded via CDN in `index.html`
   - Check browser console for errors

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All sections work properly
- [ ] Mobile responsiveness works
- [ ] Contact form functions (after EmailJS setup)
- [ ] All assets load properly
- [ ] Navigation works smoothly

Your portfolio is now ready for deployment! 🚀
