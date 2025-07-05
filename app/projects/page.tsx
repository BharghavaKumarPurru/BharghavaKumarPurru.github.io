"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Filter } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Document Management System",
    description:
      "Enterprise-level document management solution with advanced search capabilities and workflow automation.",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["C#", ".NET Core", "React", "SQL Server", "Azure", "Docker"],
    category: "Full Stack",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Resume Chatbot Platform",
    description:
      "AI-powered chatbot for automated resume screening and candidate interaction using natural language processing.",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["Python", "OpenAI", "React", "Node.js", "MongoDB"],
    category: "AI/ML",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Nova Company Platform",
    description: "Comprehensive business management platform for small to medium enterprises with CRM and analytics.",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["Angular", ".NET", "PostgreSQL", "Docker", "AWS"],
    category: "Enterprise",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    id: 4,
    title: "University Class Scheduler",
    description: "Automated scheduling system for university courses and resources with conflict resolution.",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["Java", "Spring Boot", "MySQL", "React"],
    category: "Backend",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    id: 5,
    title: "E-commerce Analytics Dashboard",
    description: "Real-time analytics dashboard for e-commerce platforms with advanced reporting features.",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["React", "D3.js", "Node.js", "MongoDB", "Redis"],
    category: "Frontend",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Microservices API Gateway",
    description: "Scalable API gateway for microservices architecture with load balancing and monitoring.",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["Go", "Docker", "Kubernetes", "Redis", "Prometheus"],
    category: "DevOps",
    github: "#",
    demo: "#",
    featured: false,
  },
]

const categories = ["All", "Full Stack", "AI/ML", "Enterprise", "Backend", "Frontend", "DevOps"]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [showFeatured, setShowFeatured] = useState(false)

  const filteredProjects = projects.filter((project) => {
    const categoryMatch = selectedCategory === "All" || project.category === selectedCategory
    const featuredMatch = !showFeatured || project.featured
    return categoryMatch && featuredMatch
  })

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 netflix-font">PROJECT GALLERY</h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Explore my portfolio of full-stack applications, AI projects, and enterprise solutions
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-20 bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <span className="text-gray-400">Filter by:</span>
            </div>

            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`${
                  selectedCategory === category
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "border-gray-600 text-gray-300 hover:bg-gray-800"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}

            <Button
              variant={showFeatured ? "default" : "outline"}
              className={`${
                showFeatured
                  ? "bg-red-600 hover:bg-red-700 text-white"
                  : "border-gray-600 text-gray-300 hover:bg-gray-800"
              }`}
              onClick={() => setShowFeatured(!showFeatured)}
            >
              Featured Only
            </Button>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="card-hover"
              >
                <Card className="bg-gray-900 border-gray-700 hover:border-red-500 overflow-hidden group">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />

                    {project.featured && (
                      <Badge className="absolute top-3 left-3 bg-red-600 hover:bg-red-700">Featured</Badge>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <Button size="sm" className="bg-white text-black hover:bg-gray-200">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-white group-hover:text-red-400 transition-colors">
                        {project.title}
                      </h3>
                      <Badge variant="outline" className="border-gray-600 text-gray-400">
                        {project.category}
                      </Badge>
                    </div>

                    <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-red-600/20 text-red-400 hover:bg-red-600/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <p className="text-gray-400 text-lg">No projects found for the selected filters.</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
