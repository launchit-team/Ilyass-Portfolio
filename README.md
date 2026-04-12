# Professional Photography Portfolio

A modern, responsive portfolio website for professional photographers built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, minimal aesthetic focused on showcasing media content
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Performance Optimized**: Image lazy loading, optimized Next.js Image component
- **Smooth Animations**: Framer Motion for elegant transitions and interactions
- **SEO-Friendly**: Built-in SEO optimization with Next.js metadata API
- **Component-Based**: Modular, reusable components for easy maintenance

## Pages

### Home
- Hero section with featured imagery
- Introduction to the photographer
- Portfolio preview gallery
- Call-to-action sections

### About
- Photographer biography
- Experience and skills showcase
- Client testimonials
- Stats and achievements

### Portfolio
- Image and video gallery
- Category filtering system
- Lightbox modal for full-size viewing
- Hover effects and smooth transitions

### FAQs
- Accordion-style UI
- Common questions about services, pricing, and booking
- Smooth animations

### Contact
- Contact form with validation
- Contact information display
- Social media links
- Optional booking button

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Font**: Google Fonts (Inter, Playfair Display)
- **Image Optimization**: Next.js Image component

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository or download the project files

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure

```
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── faqs/
│   │   └── page.tsx          # FAQs page
│   ├── portfolio/
│   │   └── page.tsx          # Portfolio gallery page
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
├── components/
│   ├── Footer.tsx            # Footer component
│   └── Navbar.tsx            # Navigation component
├── public/                   # Static assets
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies
```

## Customization

### Images
Replace the placeholder Unsplash images with your own:
- Update image URLs in page components
- Add images to `/public` folder for local hosting
- Consider using a CMS or image hosting service for production

### Colors
Modify the color scheme in `tailwind.config.ts` and `globals.css`

### Content
Update the content in each page component:
- Bio and testimonials in `about/page.tsx`
- Portfolio items in `portfolio/page.tsx`
- FAQs in `faqs/page.tsx`
- Contact information in `contact/page.tsx`

### Form Submission
The contact form currently uses a simulated submission. For production:
- Set up an API route in `app/api/contact/route.ts`
- Integrate with email service (SendGrid, Resend, etc.)
- Add proper validation and error handling

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

```bash
# Build the project
npm run build

# The output will be in the .next folder
npm run start
```

## Performance Tips

1. **Images**: Use Next.js Image component for automatic optimization
2. **Fonts**: Fonts are optimized using next/font
3. **Code Splitting**: Automatic with Next.js App Router
4. **Lazy Loading**: Images load as needed during scroll
5. **Static Generation**: Consider ISR or SSG for better performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal and commercial use.

## Support

For questions or issues, please open an issue on the repository or contact the developer.

## Credits

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Placeholder images from [Unsplash](https://unsplash.com/)

---

Made with ❤️ for photographers worldwide
