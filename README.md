# Portfolio Website

Personal portfolio site built with Next.js 14, TypeScript, and Tailwind CSS.

## Current Sections

- `Home` (`components/Hero.tsx`)
- `About` (`components/About.tsx`)
- `Projects` (`components/Projects.tsx`)
- Top navigation (`components/Navigation.tsx`)

## Tech Stack

- `Next.js` 14 (App Router)
- `React` 18
- `TypeScript`
- `Tailwind CSS`

## Getting Started

1. Install dependencies:
```bash
npm install
```
2. Start the dev server:
```bash
npm run dev
```
3. Open `http://localhost:3000`.

## Project Structure

```text
portfolio-website/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Blogs.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   └── Projects.tsx
└── public/
    └── (images and static assets)
```

## Customization

1. Update hero/about copy in `components/Hero.tsx` and `components/About.tsx`.
2. Update project cards in `components/Projects.tsx`.
3. Add project images to `public/` and reference them as `image: '/filename.png'` in `components/Projects.tsx`.
4. Adjust colors/styles in `app/globals.css` and `tailwind.config.js`.
5. Update site metadata in `app/layout.tsx`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```
