"use client"

import { useEffect, useState } from "react"

export function ScrollIndicator() {
  const [activeSection, setActiveSection] = useState("home")
  const sections = ["home", "about", "projects", "achievements", "contact"]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (const section of sections) {
        const element = document.getElementById(section)
        if (!element) continue

        const { offsetTop, offsetHeight } = element

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="scroll-indicator hidden lg:flex flex-col">
      {sections.map((section) => (
        <div
          key={section}
          className={`scroll-indicator-dot cursor-pointer ${activeSection === section ? "active" : ""}`}
          onClick={() => scrollToSection(section)}
          title={section.charAt(0).toUpperCase() + section.slice(1)}
        />
      ))}
    </div>
  )
}
