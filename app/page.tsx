import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { AchievementsSection } from "@/components/sections/achievements-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
    </div>
  )
}
