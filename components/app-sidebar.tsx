/**
 * SIDEBAR COMPONENT
 * This component creates a comprehensive navigation sidebar with:
 * - User profile section
 * - Main navigation menu with icons
 * - Collapsible submenus
 * - Settings and logout options
 * - Mobile responsive behavior
 */

"use client"

import React from "react"
import { useTheme } from "next-themes"
import {
  BarChart3,
  Building2,
  Calendar,
  ChevronUp,
  CreditCard,
  FileText,
  Home,
  Inbox,
  LogOut,
  Settings,
  ShoppingCart,
  Users,
  Wallet,
  Bell,
  HelpCircle,
  User2,
  ChevronDown,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

// NAVIGATION DATA STRUCTURE
// This object defines all the navigation items, their icons, URLs, and sub-items
const navigationData = {
  // Main navigation items that appear in the sidebar
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: Home,
      isActive: true, // Marks this item as currently active
    },
    {
      title: "Analytics",
      url: "#",
      icon: BarChart3,
      badge: "New", // Shows a badge next to the menu item
      items: [
        {
          title: "Overview",
          url: "#",
        },
        {
          title: "Revenue",
          url: "#",
        },
        {
          title: "Traffic",
          url: "#",
        },
        {
          title: "Conversions",
          url: "#",
        },
      ],
    },
    {
      title: "E-commerce",
      url: "#",
      icon: ShoppingCart,
      items: [
        {
          title: "Products",
          url: "#",
        },
        {
          title: "Orders",
          url: "#",
          isActive: false,
        },
        {
          title: "Customers",
          url: "#",
        },
        {
          title: "Inventory",
          url: "#",
        },
      ],
    },
    {
      title: "Users",
      url: "#",
      icon: Users,
      badge: "12", // Shows number of notifications/items
    },
    {
      title: "Finance",
      url: "#",
      icon: Wallet,
      items: [
        {
          title: "Transactions",
          url: "#",
        },
        {
          title: "Invoices",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
      ],
    },
    {
      title: "Reports",
      url: "#",
      icon: FileText,
    },
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Messages",
      url: "#",
      icon: Inbox,
      badge: "3", // Shows unread message count
    },
  ],

  // Secondary navigation items (usually settings, help, etc.)
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
    {
      title: "Help & Support",
      url: "#",
      icon: HelpCircle,
    },
    {
      title: "Notifications",
      url: "#",
      icon: Bell,
      badge: "5",
    },
  ],
}

// USER DATA
// Information about the currently logged-in user
const userData = {
  name: "John Doe",
  email: "john@company.com",
  avatar: "/placeholder.svg?height=32&width=32",
  role: "Administrator",
}

// Theme indicator component
function ThemeIndicator() {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const currentTheme = theme === "system" ? systemTheme : theme
  const themeIcon = currentTheme === "dark" ? "🌙" : "☀️"
  const themeText = theme === "system" ? `System (${currentTheme})` : theme

  return (
    <div className="flex items-center gap-2 px-2 py-1 text-xs text-muted-foreground">
      <span>{themeIcon}</span>
      <span className="capitalize">{themeText}</span>
    </div>
  )
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      {/* SIDEBAR HEADER */}
      {/* Contains the company logo and branding */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#" className="flex items-center">
                {/* Company logo - uses a colored background with icon */}
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Building2 className="size-4" />
                </div>
                {/* Company name and version */}
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">SASS Admin</span>
                  <span className="truncate text-xs text-muted-foreground">v2.1.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* SIDEBAR CONTENT */}
      {/* Contains all the navigation menus */}
      <SidebarContent>
        {/* MAIN NAVIGATION GROUP */}
        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationData.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {/* Check if item has sub-items to make it collapsible */}
                  {item.items ? (
                    // COLLAPSIBLE MENU ITEM (with sub-items)
                    <Collapsible key={item.title} asChild defaultOpen={item.isActive} className="group/collapsible">
                      <div>
                        {/* Main menu button that triggers collapse/expand */}
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton tooltip={item.title}>
                            {item.icon && <item.icon />}
                            <span>{item.title}</span>
                            {/* Show badge if present */}
                            {item.badge && (
                              <Badge variant="secondary" className="ml-auto">
                                {item.badge}
                              </Badge>
                            )}
                            {/* Chevron icon that rotates when expanded */}
                            <ChevronDown className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>

                        {/* Sub-menu items that show/hide when collapsed/expanded */}
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.items?.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton asChild>
                                  <a href={subItem.url}>
                                    <span>{subItem.title}</span>
                                  </a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </div>
                    </Collapsible>
                  ) : (
                    // SIMPLE MENU ITEM (no sub-items)
                    <SidebarMenuButton tooltip={item.title} isActive={item.isActive} asChild>
                      <a href={item.url}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                        {/* Show badge if present */}
                        {item.badge && (
                          <Badge variant="secondary" className="ml-auto">
                            {item.badge}
                          </Badge>
                        )}
                      </a>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* SECONDARY NAVIGATION GROUP */}
        {/* Contains settings, help, and other secondary items */}
        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationData.navSecondary.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton tooltip={item.title} size="sm" asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                      {/* Show badge if present */}
                      {item.badge && (
                        <Badge variant="secondary" className="ml-auto">
                          {item.badge}
                        </Badge>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* SIDEBAR FOOTER */}
      {/* Contains user profile and account options */}
      <SidebarFooter>
        <ThemeIndicator />
        <SidebarMenu>
          <SidebarMenuItem>
            {/* User dropdown menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  {/* User avatar */}
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={userData.avatar || "/placeholder.svg"} alt={userData.name} />
                    <AvatarFallback className="rounded-lg">
                      {userData.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  {/* User info */}
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">{userData.name}</span>
                    <span className="truncate text-xs text-muted-foreground">{userData.email}</span>
                  </div>

                  {/* Chevron up icon */}
                  <ChevronUp className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>

              {/* Dropdown menu content */}
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side="bottom"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={userData.avatar || "/placeholder.svg"} alt={userData.name} />
                      <AvatarFallback className="rounded-lg">
                        {userData.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">{userData.name}</span>
                      <span className="truncate text-xs text-muted-foreground">{userData.role}</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                {/* Account options */}
                <DropdownMenuItem>
                  <User2 className="mr-2 h-4 w-4" />
                  Account Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  Billing
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Bell className="mr-2 h-4 w-4" />
                  Notifications
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
