# Webelocity

A modern Next.js 15.3 application built with React 19 and TypeScript, featuring a responsive design, Google Maps integration, and form handling capabilities.

## Features

- **Modern Tech Stack**: Built with Next.js 15.3 and React 19
- **TypeScript Support**: Full TypeScript integration for better type safety and developer experience
- **Google Maps Integration**: Using `@react-google-maps/api` for map functionality
- **Form Handling**: Robust form management with `react-hook-form` and `zod` validation
- **Phone Input**: International phone number input support with `react-phone-input-2`
- **Toast Notifications**: User feedback system using `react-toastify`
- **SASS Styling**: Advanced styling capabilities with SASS

## Project Structure

```
webelocity/
├── src/                    # Source code directory
│   ├── app/               # Next.js app directory
│   │   ├── layout.tsx    # Root layout component
│   │   ├── page.tsx      # Home page component
│   │   └── globals.css   # Global styles
│   ├── components/        # Reusable UI components
│   │   ├── location-mark/ # Location marking components
│   │   ├── map/          # Google Maps related components
│   │   ├── form/         # Form components
│   │   ├── header/       # Header components
│   │   ├── theme/        # Theme-related components
│   │   └── ui/           # Basic UI components
│   ├── providers/        # React context providers
│   ├── types/           # TypeScript type definitions
│   └── sections/        # Page sections and layouts
├── public/              # Static files
├── next.config.ts      # Next.js configuration
└── tsconfig.json       # TypeScript configuration
```

## Getting Started

1. **Prerequisites**

   - Node.js (Latest LTS version recommended)
   - npm or yarn
2. **Installation**

   ```bash
   npm install
   # or
   yarn install
   ```
3. **Development**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The application will be available at `http://localhost:3000`
4. **Build**

   ```bash
   npm run build
   # or
   yarn build
   ```
5. **Production**

   ```bash
   npm run start
   # or
   yarn start
   ```

## Dependencies

### Core Dependencies

- `next`: 15.3.1
- `react`: 19.0.0
- `react-dom`: 19.0.0
- `typescript`: 5.x

### Feature Dependencies

- `@react-google-maps/api`: Google Maps integration
- `react-hook-form`: Form handling
- `@hookform/resolvers`: Form validation resolvers
- `zod`: Schema validation
- `react-phone-input-2`: Phone number input
- `react-toastify`: Toast notifications

### Development Dependencies

- `sass`: SCSS/SASS support
- Various TypeScript type definitions
