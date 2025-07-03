/**
 * THEME PROVIDER COMPONENT
 * This component wraps the entire application and provides theme context.
 * It uses next-themes library to manage light/dark mode state and persistence.
 *
 * Features:
 * - Automatic system theme detection
 * - Theme persistence across page reloads
 * - Smooth theme transitions
 * - Support for custom themes
 */

"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
