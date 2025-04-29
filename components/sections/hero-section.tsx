"use client"

import { motion } from "framer-motion"
import { ArrowDown, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const words = [
    { text: "AI/ML" },
    { text: "Enthusiast" },
    { text: "•" },
    { text: "Full-Stack" },
    { text: "Developer" },
    { text: "•" },
    { text: "Problem" },
    { text: "Solver" },
  ]

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center px-4 md:px-8 relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="blob w-[300px] h-[300px] top-[10%] left-[10%] from-purple-300 via-primary/30 to-blue-300"></div>
      <div className="blob w-[250px] h-[250px] bottom-[10%] right-[10%] from-blue-300 via-primary/30 to-purple-300"></div>

      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-30"></div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl"
        >
          <div className="mb-8 flex justify-center">
            <motion.div
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/50 glow"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img src="/images/profile.png" alt="Aritra Basak" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient text-shadow">Hi, I'm Aritra Basak</h1>

          <div className="mb-8 text-xl md:text-2xl">
            <TypewriterEffect words={words} />
          </div>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            B.Tech CSE Core at SRM. I build impactful tech solutions using AI/ML and Full-Stack Web Development. I'm
            passionate about solving real-world problems through code.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          >
            <Button
              size="lg"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-primary hover:bg-primary/90 rounded-full px-8"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-full px-8 border-primary/50 hover:border-primary"
            >
              Contact Me
            </Button>
            <Button size="lg" variant="ghost" className="rounded-full px-8 hover:text-primary">
              <ExternalLink className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.5 }}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToAbout}
          className="animate-bounce hover:text-primary transition-colors"
        >
          <ArrowDown />
          <span className="sr-only">Scroll Down</span>
        </Button>
      </motion.div>
    </section>
  )
}
