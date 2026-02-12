# Portfolio Website

A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🚀 Built with Next.js 14 (App Router)
- 💻 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 📱 Fully responsive design
- 🌙 Dark mode support
- ⚡ Fast and optimized

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio-website/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Navigation.tsx  # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills section
│   ├── Projects.tsx    # Projects section
│   └── Contact.tsx    # Contact form
└── public/             # Static assets
```

## Customization

1. **Update personal information**: Edit the components in the `components/` directory
2. **Modify colors**: Update the color scheme in `tailwind.config.js`
3. **Add projects**: Edit the `projects` array in `components/Projects.tsx`
4. **Update skills**: Edit the `skills` array in `components/Skills.tsx`
5. **Change metadata**: Update `app/layout.tsx` with your information

## Build for Production

```bash
npm run build
npm start
```

## License

MIT

