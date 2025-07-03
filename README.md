# SaaS Admin Dashboard

A modern, responsive admin dashboard built with Next.js, React, and Tailwind CSS. This dashboard provides a clean and intuitive interface for managing your SaaS application.

![Dashboard Preview](/public/screenshot.png)

## Features

- 📊 Responsive design that works on desktop and mobile
- 🌓 Light and dark mode support
- 🧭 Intuitive navigation with collapsible sidebar
- 📈 Analytics and reporting widgets
- 🛠️ Built with modern web technologies

## Technologies Used

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI Primitives
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Form Handling**: React Hook Form
- **Data Visualization**: Recharts
- **Theming**: next-themes

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- pnpm package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/saas-admin-dashboard.git
   cd saas-admin-dashboard
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
saas-admin-dashboard/
├── app/                    # App router pages
├── components/             # Reusable components
│   ├── ui/                # UI components
│   └── dashboard/         # Dashboard specific components
├── lib/                   # Utility functions
├── hooks/                 # Custom hooks
├── public/                # Static files
└── styles/                # Global styles
```

## Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint

## Customization

### Theming

This project uses `next-themes` for theme management. You can customize the theme by modifying the `theme-provider.tsx` component.

### Adding New Pages

1. Create a new folder in the `app` directory with a `page.tsx` file
2. Use the existing layout components for consistency
3. Import and use the sidebar component for navigation

## License
No license needed — feel free to use, copy, or modify it! 😉
