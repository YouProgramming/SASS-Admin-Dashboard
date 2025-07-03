/**
 * TAILWIND CSS CONFIGURATION
 * This file configures Tailwind CSS with custom colors, animations, and utilities
 * specifically designed for our admin dashboard theme system.
 */

import type { Config } from "tailwindcss"

const config = {
  // Enable dark mode using CSS classes
  darkMode: ["class"],

  // Specify which files Tailwind should scan for classes
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],

  // Prefix for Tailwind classes (none in this case)
  prefix: "",

  theme: {
    // Container configuration for responsive layouts
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      // Custom color palette using CSS custom properties
      // This allows for easy theme switching between light and dark modes
      colors: {
        // Border colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        // Background colors
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        // Primary brand colors
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },

        // Secondary colors
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },

        // Destructive/error colors
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },

        // Muted colors for less prominent elements
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },

        // Accent colors for highlights
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },

        // Popover colors
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },

        // Card colors
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        // Sidebar specific colors
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },

      // Custom border radius values
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      // Custom font families
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },

      // Custom animations
      keyframes: {
        // Accordion expand/collapse animation
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },

        // Fade in animation
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },

        // Slide in from left animation
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },

        // Pulse animation for loading states
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },

      // Animation classes
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "slide-in-left": "slide-in-left 0.3s ease-out",
        "pulse-slow": "pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },

      // Custom spacing values
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
      },

      // Custom screen sizes for responsive design
      screens: {
        xs: "475px",
        "3xl": "1600px",
      },

      // Custom box shadows
      boxShadow: {
        soft: "0 2px 8px 0 rgba(0, 0, 0, 0.05)",
        medium: "0 4px 16px 0 rgba(0, 0, 0, 0.1)",
        hard: "0 8px 32px 0 rgba(0, 0, 0, 0.15)",
      },
    },
  },

  // Tailwind plugins
  plugins: [
    // Plugin for adding Tailwind's default animations
    require("tailwindcss-animate"),
  ],
} satisfies Config

export default config
