"use client"

import { motion } from "framer-motion"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Code, BadgeIcon as Certificate, Github } from "lucide-react"

export function AchievementsSection() {
  const achievements = [
    {
      title: "1st Prize, SRM Coding Competition",
      description: "₹6000 cash prize",
      icon: Award,
    },
    {
      title: "3rd place in AI domain, BITS PILANI HYD",
      description: "National Hackathon",
      icon: Award,
    },
    {
      title: "Multiple Hackathon Participations",
      description: "National level competitions",
      icon: Code,
    },
    {
      title: "Certifications",
      description: "AI/ML, Full-Stack, Cybersecurity",
      icon: Certificate,
    },
    {
      title: "Strong GitHub Presence",
      description: "github.com/Aritraprime05",
      icon: Github,
    },
  ]

  return (
    <section id="achievements" className="py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-dots opacity-50"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-shadow">
            <span className="text-gradient">Achievements</span> & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Highlights of my academic and professional accomplishments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Card className="border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-md card-hover-effect glass-effect">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                    <achievement.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="group-hover:text-gradient transition-all duration-300">
                      {achievement.title}
                    </CardTitle>
                    <CardDescription>{achievement.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 glass-effect p-6 rounded-xl max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-center text-gradient">Education</h3>
          <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[2px] before:bg-primary/30">
            <div className="mb-6 relative before:absolute before:w-4 before:h-4 before:bg-primary before:rounded-full before:-left-[25px] before:top-1.5">
              <h4 className="text-lg font-medium">B.Tech in Software Engineering</h4>
              <p className="text-muted-foreground">SRM Institute of Science and Technology</p>
              <p className="text-sm text-muted-foreground">2023 - Present</p>
            </div>
            <div className="relative before:absolute before:w-4 before:h-4 before:bg-primary before:rounded-full before:-left-[25px] before:top-1.5">
              <h4 className="text-lg font-medium">Higher Secondary Education</h4>
              <p className="text-muted-foreground">HemSheelaModel School</p>
              <p className="text-sm text-muted-foreground">2021 - 2023</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
