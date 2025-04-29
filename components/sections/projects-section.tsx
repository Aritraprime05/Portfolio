"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Railway Incident Map",
      description: "Visualized real-time incident data from MySQL on Google Maps using a full-stack solution.",
      tech: ["React.js", "Node.js", "Google Maps API", "MySQL"],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "AI-Powered Meal Planner",
      description: "Personalized and sustainable meal plan generator with API integration.",
      tech: ["Django", "PostgreSQL", "Edamam API", "Nutritionix"],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Crop Disease Detection",
      description: "Deep Learning-based system to detect crop diseases via leaf images.",
      tech: ["Python", "CNN", "OpenCV", "Google Colab"],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Network Intrusion Detection System",
      description: "Detected unauthorized access using custom DBMS and React dashboard.",
      tech: ["MongoDB", "Express", "Node.js", "React"],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Furcation: Dental Bone Loss Detector",
      description: "X-ray image-based CNN model to predict bone loss in human teeth.",
      tech: ["Python", "Deep Learning", "Medical Imaging"],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Decentralized Misinformation Resilience Network",
      description: "Built during national hackathon; uses Web3 to counter fake news.",
      tech: ["Web3.js", "Node.js", "MongoDB", "JWT"],
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90"></div>
      <div className="absolute inset-0 bg-grid opacity-30"></div>

      {/* Decorative blobs */}
      <div className="blob w-[250px] h-[250px] top-[20%] right-[5%] from-purple-300/20 via-primary/10 to-blue-300/20"></div>
      <div className="blob w-[300px] h-[300px] bottom-[10%] left-[5%] from-blue-300/20 via-primary/10 to-purple-300/20"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-shadow">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in AI/ML, web development, and
            problem-solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-md card-hover-effect bg-background/80 backdrop-blur-sm">
                <div className="overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-gradient">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-primary/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="ghost" size="sm" className="hover:text-primary transition-colors">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button variant="ghost" size="sm" className="hover:text-primary transition-colors">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Button variant="outline" className="rounded-full border-primary/50 hover:border-primary">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
