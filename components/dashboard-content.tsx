/**
 * DASHBOARD CONTENT COMPONENT
 * This component contains all the main dashboard content including:
 * - Header with breadcrumbs and theme toggle
 * - Key metrics cards
 * - Charts and analytics
 * - Recent activity tables
 * - Mobile responsive layout
 */

"use client"
import {
  ArrowDown,
  ArrowUp,
  Download,
  Filter,
  MoreHorizontal,
  Plus,
  Search,
  TrendingUp,
  Users,
  DollarSign,
  ShoppingCart,
  Activity,
  Eye,
  Moon,
  Sun,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"
import { Progress } from "@/components/ui/progress"
import { useTheme } from "next-themes"
import React from "react"

// SAMPLE DATA FOR DASHBOARD
// In a real application, this data would come from APIs or databases

// Key performance indicators data
const kpiData = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    changeType: "positive" as const,
    icon: DollarSign,
    description: "from last month",
  },
  {
    title: "Subscriptions",
    value: "+2350",
    change: "+180.1%",
    changeType: "positive" as const,
    icon: Users,
    description: "from last month",
  },
  {
    title: "Sales",
    value: "+12,234",
    change: "+19%",
    changeType: "positive" as const,
    icon: ShoppingCart,
    description: "from last month",
  },
  {
    title: "Active Now",
    value: "+573",
    change: "-2.1%",
    changeType: "negative" as const,
    icon: Activity,
    description: "from last hour",
  },
]

// Recent orders data for the table
const recentOrders = [
  {
    id: "ORD-001",
    customer: "Olivia Martin",
    email: "olivia.martin@email.com",
    status: "Completed",
    amount: "$1,999.00",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "ORD-002",
    customer: "Jackson Lee",
    email: "jackson.lee@email.com",
    status: "Processing",
    amount: "$39.00",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "ORD-003",
    customer: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    status: "Completed",
    amount: "$299.00",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "ORD-004",
    customer: "William Kim",
    email: "will@email.com",
    status: "Pending",
    amount: "$99.00",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "ORD-005",
    customer: "Sofia Davis",
    email: "sofia.davis@email.com",
    status: "Completed",
    amount: "$39.00",
    avatar: "/placeholder.svg?height=32&width=32",
  },
]

// Recent activity data
const recentActivity = [
  {
    id: 1,
    action: "New user registered",
    user: "John Doe",
    time: "2 minutes ago",
    type: "user",
  },
  {
    id: 2,
    action: "Order completed",
    user: "Jane Smith",
    time: "5 minutes ago",
    type: "order",
  },
  {
    id: 3,
    action: "Payment received",
    user: "Mike Johnson",
    time: "10 minutes ago",
    type: "payment",
  },
  {
    id: 4,
    action: "New product added",
    user: "Admin",
    time: "15 minutes ago",
    type: "product",
  },
]

// Top products data
const topProducts = [
  {
    name: "Wireless Headphones",
    sales: 1234,
    revenue: "$24,680",
    progress: 85,
  },
  {
    name: "Smart Watch",
    sales: 987,
    revenue: "$19,740",
    progress: 72,
  },
  {
    name: "Laptop Stand",
    sales: 654,
    revenue: "$13,080",
    progress: 58,
  },
  {
    name: "USB-C Cable",
    sales: 432,
    revenue: "$8,640",
    progress: 41,
  },
]

// Quick theme toggle component for instant switching
function QuickThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button variant="ghost" size="sm" onClick={toggleTheme} className="h-8 w-8 p-0">
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Quick toggle theme</span>
    </Button>
  )
}

export function DashboardContent() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      {/* HEADER SECTION */}
      {/* Contains breadcrumbs, search, and action buttons */}
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          {/* Sidebar toggle button - shows/hides sidebar */}
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />

          {/* Breadcrumb navigation */}
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Overview</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Header actions - search, filters, theme toggle */}
        <div className="ml-auto flex items-center gap-2 px-4">
          {/* Search input */}
          <div className="relative hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search..." className="w-[300px] pl-8" />
          </div>

          {/* Action buttons */}
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Add New
          </Button>

          {/* Enhanced Theme toggle with direct light/dark switch */}
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <QuickThemeToggle />
          </div>
        </div>
      </header>

      {/* MAIN DASHBOARD CONTENT */}
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        {/* Welcome section */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening with your business today.</p>
        </div>

        {/* KEY PERFORMANCE INDICATORS (KPI) CARDS */}
        {/* Grid of cards showing important metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {kpiData.map((kpi, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
                <kpi.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{kpi.value}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  {/* Change indicator with arrow */}
                  {kpi.changeType === "positive" ? (
                    <ArrowUp className="mr-1 h-3 w-3 text-green-500" />
                  ) : (
                    <ArrowDown className="mr-1 h-3 w-3 text-red-500" />
                  )}
                  <span className={kpi.changeType === "positive" ? "text-green-500" : "text-red-500"}>
                    {kpi.change}
                  </span>
                  <span className="ml-1">{kpi.description}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CHARTS AND ANALYTICS SECTION */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          {/* MAIN CHART CARD */}
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Revenue Overview</CardTitle>
              <CardDescription>Monthly revenue for the last 6 months</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              {/* Placeholder for chart - in real app, use recharts or similar */}
              <div className="h-[300px] w-full rounded-md bg-muted/50 flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Chart visualization would go here</p>
                  <p className="text-xs text-muted-foreground">Use libraries like Recharts or Chart.js</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* TOP PRODUCTS CARD */}
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Top Products</CardTitle>
              <CardDescription>Best performing products this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={index} className="flex items-center justify-between space-x-4">
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">{product.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {product.sales} sales • {product.revenue}
                      </p>
                      {/* Progress bar showing performance */}
                      <Progress value={product.progress} className="h-1" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* TABLES SECTION */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          {/* RECENT ORDERS TABLE */}
          <Card className="col-span-4">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Latest orders from your customers</CardDescription>
              </div>
              <Button asChild size="sm" className="ml-auto gap-1">
                <a href="#">
                  View All
                  <ArrowUp className="h-4 w-4" />
                </a>
              </Button>
            </CardHeader>
            <CardContent>
              {/* Responsive table */}
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead className="hidden sm:table-cell">Status</TableHead>
                    <TableHead className="hidden md:table-cell">Amount</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={order.avatar || "/placeholder.svg"} alt={order.customer} />
                            <AvatarFallback>
                              {order.customer
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="grid gap-1">
                            <p className="text-sm font-medium leading-none">{order.customer}</p>
                            <p className="text-xs text-muted-foreground">{order.email}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <Badge
                          variant={
                            order.status === "Completed"
                              ? "default"
                              : order.status === "Processing"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell font-medium">{order.amount}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Open menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              View details
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Edit order</DropdownMenuItem>
                            <DropdownMenuItem>Cancel order</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* RECENT ACTIVITY CARD */}
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest activities in your system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                      {activity.type === "user" && <Users className="h-4 w-4" />}
                      {activity.type === "order" && <ShoppingCart className="h-4 w-4" />}
                      {activity.type === "payment" && <DollarSign className="h-4 w-4" />}
                      {activity.type === "product" && <Plus className="h-4 w-4" />}
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">
                        by {activity.user} • {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ADDITIONAL METRICS SECTION */}
        <div className="grid gap-4 md:grid-cols-3">
          {/* CONVERSION RATE CARD */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Conversion Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3.2%</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <ArrowUp className="mr-1 h-3 w-3 text-green-500" />
                <span className="text-green-500">+0.5%</span>
                <span className="ml-1">from last week</span>
              </div>
              <Progress value={32} className="mt-2" />
            </CardContent>
          </Card>

          {/* BOUNCE RATE CARD */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Bounce Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42.3%</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <ArrowDown className="mr-1 h-3 w-3 text-green-500" />
                <span className="text-green-500">-2.1%</span>
                <span className="ml-1">from last week</span>
              </div>
              <Progress value={42} className="mt-2" />
            </CardContent>
          </Card>

          {/* SESSION DURATION CARD */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Avg. Session</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4m 32s</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <ArrowUp className="mr-1 h-3 w-3 text-green-500" />
                <span className="text-green-500">+12s</span>
                <span className="ml-1">from last week</span>
              </div>
              <Progress value={68} className="mt-2" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
