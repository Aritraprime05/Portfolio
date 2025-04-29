import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { PortfolioSidebar } from "@/components/portfolio-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { Toaster } from "@/components/ui/toaster"

export const metadata = {
  title: "Aritra Basak | Portfolio",
  description: "Software Engineering student specializing in AI/ML and Full-Stack Web Development",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SidebarProvider>
            <div className="flex min-h-screen">
              <PortfolioSidebar />
              <main className="flex-1 overflow-auto">{children}</main>
              <ScrollIndicator />
            </div>
          </SidebarProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
