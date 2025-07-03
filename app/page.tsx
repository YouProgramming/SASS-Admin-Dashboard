/**
 * MAIN DASHBOARD PAGE
 * This is the entry point of our admin dashboard application.
 * It combines the sidebar and main content area in a responsive layout.
 */

import { AppSidebar } from "@/components/app-sidebar"
import { DashboardContent } from "@/components/dashboard-content"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { ThemeProvider } from "@/components/theme-provider"

export default function DashboardPage() {
  return (
    // ThemeProvider enables dark/light mode switching across the entire app
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {/* SidebarProvider manages the sidebar state (open/closed) */}
      <SidebarProvider>
        {/* AppSidebar contains all navigation items and user info */}
        <AppSidebar />

        {/* SidebarInset is the main content area that adjusts based on sidebar state */}
        <SidebarInset>
          {/* DashboardContent contains all the dashboard widgets and data */}
          <DashboardContent />
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  )
}
