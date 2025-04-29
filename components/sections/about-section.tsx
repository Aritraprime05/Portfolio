"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  const skills = {
    languages: ["Java", "Python", "JavaScript", "SQL"],
    webDevelopment: ["React.js", "Node.js", "Express", "MongoDB", "PostgreSQL"],
    aiMl: ["TensorFlow", "Keras", "Scikit-learn", "OpenCV"],
    tools: ["Git", "VS Code", "Postman", "Google Colab", "Firebase", "Grafana"],
    other: ["Google Maps API", "Stripe", "Web3.js"],
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-dots opacity-50"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-effect p-6 rounded-xl">
              <p className="text-lg leading-relaxed">
                I'm Aritra Basak, a driven Software Engineering student at SRM Institute of Science and Technology. I
                specialize in AI/ML, Web Development, and problem-solving through code. I've worked on diverse
                projects—from railway incident mapping and crop disease detection to cybersecurity dashboards and
                misinformation resilience networks.
              </p>
              <p className="text-lg mt-4 leading-relaxed">
                I thrive in hackathons, collaborative teams, and fast-paced environments. I'm constantly learning, and I
                enjoy exploring how technology can solve meaningful problems.
              </p>
            </div>

            <motion.div
              className="relative mt-8 animated-border p-[1px] rounded-xl overflow-hidden"
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-background/80 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-gradient">My Approach</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>I approach problems with analytical thinking and creative solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>I value clean code, documentation, and maintainable architecture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>I'm passionate about learning new technologies and methodologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>I believe in building technology that makes a positive impact</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={item} className="parallax">
              <div className="glass-effect p-6 rounded-xl parallax-layer parallax-layer-1">
                <h3 className="text-xl font-semibold mb-3 text-gradient">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="px-3 py-1 text-sm skill-badge border-primary/30 hover:border-primary/80"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={item} className="parallax">
              <div className="glass-effect p-6 rounded-xl parallax-layer parallax-layer-2">
                <h3 className="text-xl font-semibold mb-3 text-gradient">Web Development</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.webDevelopment.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="px-3 py-1 text-sm skill-badge border-primary/30 hover:border-primary/80"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={item} className="parallax">
              <div className="glass-effect p-6 rounded-xl parallax-layer parallax-layer-3">
                <h3 className="text-xl font-semibold mb-3 text-gradient">AI/ML</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.aiMl.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="px-3 py-1 text-sm skill-badge border-primary/30 hover:border-primary/80"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={item} className="parallax">
              <div className="glass-effect p-6 rounded-xl parallax-layer parallax-layer-2">
                <h3 className="text-xl font-semibold mb-3 text-gradient">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="px-3 py-1 text-sm skill-badge border-primary/30 hover:border-primary/80"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={item} className="parallax">
              <div className="glass-effect p-6 rounded-xl parallax-layer parallax-layer-1">
                <h3 className="text-xl font-semibold mb-3 text-gradient">Other</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.other.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="px-3 py-1 text-sm skill-badge border-primary/30 hover:border-primary/80"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
