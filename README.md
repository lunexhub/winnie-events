# NT Events Management Website

A modern, fully responsive website for NT Events Management - a premier South African event planning and management company founded by Winnie Malete.

## 🌟 Features

- ✅ **Fully Mobile Responsive** - Optimized for all screen sizes from mobile to desktop
- ✅ **Modern Tech Stack** - Built with React, TanStack Router, and Tailwind CSS
- ✅ **Fast Performance** - Vite-powered development and build process
- ✅ **Clear Above-the-Fold** - All key information and CTAs visible on first screen
- ✅ **Professional Design** - Royal blue and magenta brand colors with elegant typography
- ✅ **WhatsApp Integration** - Floating WhatsApp button for instant communication
- ✅ **SEO Optimized** - Proper meta tags and semantic HTML

## 🚀 Tech Stack

- **Framework**: React 19
- **Routing**: TanStack Router
- **Styling**: Tailwind CSS 4
- **Build Tool**: Vite 8
- **State Management**: TanStack Query
- **Icons**: Lucide React
- **Package Manager**: npm/bun

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Development

The site runs on `http://localhost:5173` in development mode with hot module replacement.

### Project Structure

```
├── src/
│   ├── assets/          # Images and static assets
│   ├── components/      # Reusable UI components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── routes/         # TanStack Router pages
│   ├── main.tsx        # Application entry point
│   ├── router.tsx      # Router configuration
│   └── styles.css      # Global styles and design system
├── public/             # Static files (logo, favicon)
├── index.html          # HTML entry point
└── vite.config.ts      # Vite configuration
```

## 🎨 Design System

The site uses a custom design system with:
- **Primary Color**: Royal Blue (`oklch(0.55 0.21 265)`)
- **Secondary Color**: Magenta Pink (`oklch(0.62 0.26 350)`)
- **Typography**: Playfair Display (headings) + Inter (body)
- **Responsive Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)

## 📱 Mobile Responsiveness

All sections are fully responsive with:
- Fluid typography scaling
- Adaptive grid layouts
- Touch-friendly tap targets (44px minimum)
- Optimized spacing for mobile viewports
- Above-the-fold content optimization

## 🔧 Configuration

### Vite Configuration
The project uses standard Vite configuration with:
- React plugin for JSX/TSX support
- TanStack Router plugin for file-based routing
- Tailwind CSS plugin for styling
- TypeScript path resolution

### Tailwind Configuration
Custom design tokens defined in `src/styles.css`:
- Color system using oklch color space
- Custom animations and transitions
- Responsive utilities
- Typography system

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code with ESLint
- `npm run format` - Format code with Prettier

## 🌐 Deployment

The site can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages

Build command: `npm run build`  
Output directory: `dist`

## 📄 License

© 2026 NT Events Management. All rights reserved.

## 👥 Contact

- **Website**: [NT Events Management](https://nteventsmanagement.co.za)
- **Email**: winniem@nteventsmanagement.co.za
- **Phone**: +27 73 929 6993
- **Address**: 29 Katakoroe Street, Birch Acres, Kempton Park, 1618

---

Built with ❤️ by [Lunexweb](https://www.lunexweb.com)
