# Deployment Guide

## Quick Start

The NT Events Management website is successfully pushed to GitHub and ready for deployment!

**Repository**: https://github.com/lunexhub/winnie-events.git

## Prerequisites

Before deploying, replace the placeholder logo:
1. Save your actual NT Events logo (the one with the mother-daughter silhouette) as `logo.png`, `logo.svg`, or `logo.jpeg`
2. Place it in the `public/` folder
3. The site will automatically use it

## Deployment Options

### Option 1: Netlify (Recommended)

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select `lunexhub/winnie-events`
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click "Deploy site"

**Custom Domain Setup**:
- Go to Site settings → Domain management
- Add your custom domain (e.g., nteventsmanagement.co.za)
- Follow the DNS configuration instructions

### Option 2: Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import from GitHub: `lunexhub/winnie-events`
4. Framework Preset: Vite
5. Build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click "Deploy"

### Option 3: GitHub Pages

1. In your GitHub repository, go to Settings → Pages
2. Source: Deploy from a branch
3. Branch: Select `main` and `/root`
4. Or use GitHub Actions for automated deployment

**Add this workflow** (`.github/workflows/deploy.yml`):
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Option 4: Cloudflare Pages

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect your GitHub account
3. Select `lunexhub/winnie-events`
4. Build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Click "Save and Deploy"

## Environment Variables

No environment variables are required for the basic site to function.

## Post-Deployment Checklist

- [ ] Replace placeholder logo with actual logo
- [ ] Test on multiple devices (mobile, tablet, desktop)
- [ ] Verify all links work
- [ ] Test contact form / WhatsApp button
- [ ] Check Google Search Console
- [ ] Set up Google Analytics (optional)
- [ ] Configure custom domain
- [ ] Set up SSL certificate (usually automatic)
- [ ] Test performance with Lighthouse
- [ ] Verify meta tags for SEO

## Custom Domain Setup

### For Netlify:
1. Go to Site settings → Domain management
2. Add custom domain
3. Update DNS records at your domain registrar:
   - **A Record**: Point to Netlify's load balancer
   - **CNAME**: `www` → your-site.netlify.app

### For Vercel:
1. Go to Settings → Domains
2. Add your domain
3. Update DNS records:
   - **A Record**: Point to Vercel's IP
   - **CNAME**: `www` → your-site.vercel.app

## Performance Optimization

The site is already optimized with:
- ✅ Image optimization (JPEG format)
- ✅ Code splitting
- ✅ Minified CSS and JS
- ✅ Tree-shaking unused code
- ✅ Lazy loading images below the fold

## Monitoring

After deployment, monitor:
- **Uptime**: Use UptimeRobot or Pingdom
- **Analytics**: Google Analytics or Plausible
- **Performance**: Google PageSpeed Insights
- **Errors**: Sentry or LogRocket (optional)

## Support

For deployment issues:
- Check the build logs in your deployment platform
- Ensure Node.js version is 18 or higher
- Verify all dependencies are installed
- Check that the dist folder is being generated correctly

## Updating the Site

To make changes:
```bash
# Make your changes locally
git add .
git commit -m "Your commit message"
git push origin main
```

Your deployment platform will automatically rebuild and deploy the changes!

---

Built with ❤️ by Lunexweb
