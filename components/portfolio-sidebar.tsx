"use client"

import { Home, User, Code, Trophy, Mail, Github, Linkedin, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function PortfolioSidebar() {
  const { setTheme, theme } = useTheme()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <Sidebar variant="floating" className="border-r border-border/50">
        <SidebarHeader className="flex flex-col items-center justify-center p-4">
          <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-primary/50 glow">
            <Avatar className="h-24 w-24">
              <AvatarImage src="/images/profile.png" alt="Aritra Basak" className="object-cover" />
              <AvatarFallback className="text-xl">AB</AvatarFallback>
            </Avatar>
          </div>
          <h1 className="text-xl font-bold text-gradient">Aritra Basak</h1>
          <p className="text-sm text-muted-foreground">CSE Core Student</p>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => scrollToSection("home")} tooltip="Home" className="group">
                <Home className="group-hover:text-primary transition-colors" />
                <span>Home</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => scrollToSection("about")} tooltip="About" className="group">
                <User className="group-hover:text-primary transition-colors" />
                <span>About</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => scrollToSection("projects")} tooltip="Projects" className="group">
                <Code className="group-hover:text-primary transition-colors" />
                <span>Projects</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => scrollToSection("achievements")}
                tooltip="Achievements"
                className="group"
              >
                <Trophy className="group-hover:text-primary transition-colors" />
                <span>Achievements</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => scrollToSection("contact")} tooltip="Contact" className="group">
                <Mail className="group-hover:text-primary transition-colors" />
                <span>Contact</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="p-4">
          <div className="flex justify-between items-center">
            <a href="https://github.com/Aritraprime05" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
            <a href="https://linkedin.com/in/aritra-basak-652b0128b" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </a>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:text-primary transition-colors"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </SidebarFooter>
      </Sidebar>
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <SidebarTrigger />
      </div>
    </>
  )
}
