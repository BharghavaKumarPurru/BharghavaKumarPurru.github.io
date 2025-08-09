"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Download, ExternalLink, ChevronRight, MapPin, Calendar, Building2, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function ResumePage() {
  const [isDownloading, setIsDownloading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleDownload = async () => {
    setIsDownloading(true)
    try {
      const response = await fetch("/resume/Bharghava_Kumar_Purru_Resume.pdf")
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.style.display = "none"
      a.href = url
      a.download = "Bharghava_Kumar_Purru_Resume.pdf"
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      console.error("Download failed:", error)
    } finally {
      setIsDownloading(false)
    }
  }

  const experiences = [
    {
      title: "Chief Technology Officer (CTO)",
      company: "Hilde B Foundation",
      location: "San Jose, CA",
      period: "May 2025 – Present",
      type: "Full-time",
      description:
        "Promoted from SDE to CTO; led secure, scalable portal development for HR, donor tracking, and attendance logging.",
      achievements: [
        "Delivered Next.js + Supabase solutions with RBAC, OAuth2/JWT, input validation, and telemetry logging",
        "Built a Trauma-Informed Domestic Violence App in React Native + Supabase with encrypted local storage, evidence management, crisis resources, and multilingual support",
        "Launched a campus challenge platform for secure student project submissions",
        "Oversaw hiring, AI adoption training, and enforced secure-by-design coding standards",
      ],
      technologies: ["Next.js", "Supabase", "React Native", "OAuth2", "JWT", "RBAC"],
    },
    {
      title: "App Developer",
      company: "Tharro Labs Inc.",
      location: "New York, NY",
      period: "Apr 2025 – May 2025, Jul 2025 – Present",
      type: "Contract",
      description: "Developed cross-platform mobile applications with secure authentication and offline capabilities.",
      achievements: [
        "Dating App (Prototype): Developed a cross-platform React Native app with modular components, secure navigation, and AsyncStorage for session tokens and preferences",
        "Construction Reporting App: Created a mobile tool for field workers to capture geotagged job data and submit reports; implemented RBAC-enabled manager dashboards and SQLite for offline-first storage",
        "Integrated secure API endpoints, token-based authentication, and optimized for low-bandwidth environments",
      ],
      technologies: ["React Native", "SQLite", "AsyncStorage", "RBAC", "Geolocation"],
    },
    {
      title: "Software Engineer – Full Stack Developer",
      company: "HCL Technologies",
      location: "India",
      period: "Jul 2022 – Dec 2023",
      type: "Full-time",
      description:
        "Collaborated with cross-functional teams to build C#/.NET Core microservices and Teams-integrated solutions.",
      achievements: [
        "Built Teams-integrated chatbot using SSO and Microsoft Identity Platform for secure, real-time support",
        "Enhanced agent/admin portals with secure chat routing, scheduling, supervisor assignment, and RBAC, improving resolution workflows",
        "Contributed to password management system migrating from on-prem AD to Azure AD, adding MFA (email, SMS, security questions) and multi-language support for compliance with global standards",
        "Integrated Azure Web Apps, Functions, and Monitor for deployment, automation, and telemetry; secured credentials in Azure Key Vault",
        "Applied secure coding best practices, peer code reviews, and regression testing to ensure reliability and maintainability",
      ],
      technologies: ["C#", ".NET Core", "Azure", "Microsoft Teams", "SSO", "MFA"],
    },
    {
      title: "Web Developer",
      company: "Waverly Partners (Ward Howell International)",
      location: "Cleveland, OH",
      period: "Apr 2025 – May 2025",
      type: "Contract",
      description: "Delivered modern web solutions with accessibility compliance and SEO optimization.",
      achievements: [
        "Delivered a Next.js + Tailwind CSS transition microsite with smooth animations (Framer Motion), WCAG 2.1 AA accessibility, and SEO optimization",
        "Integrated a Google Forms backend with scripts to auto-route submissions, eliminating SMTP dependencies",
        "Collaborated on a BERT-based resume parsing system with NER to generate ATS-ready documents and automate employer verification emails with secure logging",
      ],
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "BERT", "NER", "SEO"],
    },
    {
      title: "Website & CRM Optimization Intern",
      company: "Summer on the Cuyahoga",
      location: "Cleveland, OH",
      period: "Dec 2024 – May 2025",
      type: "Internship",
      description: "Migrated legacy systems and optimized CRM workflows for improved donor management.",
      achievements: [
        "Migrated a legacy WordPress site to HubSpot CMS, preserving SEO, analytics, and UX",
        "Built 15+ HubSpot pages, including event pages with HubSpot Payments integration for secure transactions",
        "Configured DonorDock CRM for donor tracking, workflow automation, and reporting",
        "Upgraded a legacy .NET job posting site, redesigning it for the new listing format and improved usability",
      ],
      technologies: ["HubSpot", "WordPress", "DonorDock", ".NET", "CRM"],
    },
    {
      title: "Teaching Assistant – Computer Networks",
      company: "Case Western Reserve University",
      location: "Cleveland, OH",
      period: "Jun 2024 – Dec 2024",
      type: "Part-time",
      description: "Supported coursework on network security and guided 60+ students in secure network design.",
      achievements: [
        "Supported coursework on OSI/TCP-IP models, routing, subnetting, firewalls, VPNs, and network security",
        "Guided 60+ students in encryption protocols, IAM, and secure network design",
        "Developed curriculum materials for network security best practices",
        "Conducted lab sessions on secure network configuration",
      ],
      technologies: ["Network Security", "Encryption", "IAM", "Firewalls", "VPNs"],
    },
    {
      title: "Research Assistant",
      company: "Case Western Reserve University",
      location: "Cleveland, OH",
      period: "Sep 2024 – Dec 2024",
      type: "Research",
      description: "Built privacy-preserving applications using AWS Nitro Enclaves and Federated Learning.",
      achievements: [
        "Built a multi-user, privacy-preserving application where service provider requests are processed in AWS Nitro Enclaves to filter and share only required user data securely",
        "Developed with MongoDB, React frontend, Java backend, and Python Federated Learning for distributed model training without exposing raw data",
        "Deployed using Docker Swarm for multi-instance scaling; transitioned to JWT-based authentication to support multi-user access without port conflicts",
      ],
      technologies: ["AWS Nitro Enclaves", "MongoDB", "React", "Java", "Python", "Docker Swarm", "JWT"],
    },
  ]

  const skills = {
    Languages: ["C#", "Python", "Java", "JavaScript", "TypeScript", "HTML", "CSS"],
    "Frameworks & Libraries": [
      "ASP.NET Core",
      "Angular",
      "Next.js",
      "React",
      "React Native",
      "FastAPI",
      "SignalR",
      "Tailwind CSS",
      "Framer Motion",
    ],
    Security: [
      "OAuth2",
      "JWT",
      "HTTPS",
      "RBAC",
      "MFA",
      "API Authentication",
      "Input Validation",
      "Encryption",
      "AWS Nitro Enclaves",
      "Federated Learning",
    ],
    Databases: ["SQL Server", "MySQL", "MongoDB", "Supabase (Postgres)", "SQLite"],
    "Cloud & DevOps": [
      "Azure (Web Apps, Functions, Monitor, Key Vault, AD)",
      "AWS (EC2, Nitro Enclaves)",
      "Azure DevOps",
      "GitHub Actions",
      "Vercel",
      "Docker",
      "Docker Swarm",
    ],
    Testing: ["Unit Testing", "Regression Testing", "API Testing", "Accessibility & Compliance Testing"],
    Methodologies: ["Agile (Scrum)", "Secure SDLC", "CI/CD Automation"],
  }

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  const scrollTo = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = 400 // Approximate card width + gap
      const scrollAmount = cardWidth * 2
      const newScrollLeft =
        direction === "left" ? scrollRef.current.scrollLeft - scrollAmount : scrollRef.current.scrollLeft + scrollAmount

      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scrollRef.current) {
      setIsDragging(true)
      setStartX(e.pageX - scrollRef.current.offsetLeft)
      setScrollLeft(scrollRef.current.scrollLeft)
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        scrollTo("left")
      } else if (e.key === "ArrowRight") {
        scrollTo("right")
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  useEffect(() => {
    checkScrollButtons()
    const handleScroll = () => checkScrollButtons()

    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", handleScroll)
      return () => scrollRef.current?.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] bg-cover bg-center opacity-10" />
        <div className="relative container mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              BHARGHAVA KUMAR PURRU
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Software Engineer skilled in C#, Python, Java, and JavaScript, specializing in secure, scalable
              applications. Experienced in Agile teams, applying security best practices to deliver maintainable,
              privacy-focused solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleDownload}
                disabled={isDownloading}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                {isDownloading ? "Downloading..." : "Download Resume"}
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 text-lg bg-transparent"
                onClick={() => window.open("/resume/Bharghava_Kumar_Purru_Resume.pdf", "_blank")}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View PDF
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">Master's in Computer Science</h3>
                  <p className="text-xl text-gray-300 mb-2">Case Western Reserve University</p>
                  <div className="flex items-center text-gray-400 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Cleveland, OH</span>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="secondary" className="bg-green-600/20 text-green-400 border-green-600/30">
                    Graduated - May 2025
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Technical Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
          <div className="grid gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={category} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-400">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-gray-700/50 text-gray-300 border-gray-600/30 hover:bg-gray-600/50 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Professional Experience - Netflix Style Horizontal Scroll */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>

          <div className="relative group">
            {/* Left Arrow */}
            {canScrollLeft && (
              <Button
                variant="ghost"
                size="lg"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-black/90 text-white opacity-0 group-hover:opacity-100 transition-opacity w-12 h-12 rounded-full backdrop-blur-sm"
                onClick={() => scrollTo("left")}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            )}

            {/* Right Arrow */}
            {canScrollRight && (
              <Button
                variant="ghost"
                size="lg"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-black/90 text-white opacity-0 group-hover:opacity-100 transition-opacity w-12 h-12 rounded-full backdrop-blur-sm"
                onClick={() => scrollTo("right")}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            )}

            {/* Fade Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-900 to-transparent z-[5] pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-900 to-transparent z-[5] pointer-events-none" />

            {/* Scrollable Container */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4 cursor-grab active:cursor-grabbing"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex-none w-96 snap-start"
                >
                  <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm h-full hover:scale-105 transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-2">
                        <Badge
                          variant="secondary"
                          className={`${
                            exp.type === "Full-time"
                              ? "bg-green-600/20 text-green-400 border-green-600/30"
                              : exp.type === "Contract"
                                ? "bg-blue-600/20 text-blue-400 border-blue-600/30"
                                : exp.type === "Internship"
                                  ? "bg-yellow-600/20 text-yellow-400 border-yellow-600/30"
                                  : exp.type === "Part-time"
                                    ? "bg-purple-600/20 text-purple-400 border-purple-600/30"
                                    : "bg-orange-600/20 text-orange-400 border-orange-600/30"
                          }`}
                        >
                          {exp.type}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl text-blue-400 mb-2 leading-tight">{exp.title}</CardTitle>
                      <div className="space-y-2">
                        <div className="flex items-center text-gray-300">
                          <Building2 className="h-4 w-4 mr-2 flex-shrink-0" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">{exp.description}</p>

                      <Separator className="bg-gray-700 mb-4" />

                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-200 text-sm">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.slice(0, 3).map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start text-sm text-gray-300">
                              <ChevronRight className="h-3 w-3 mr-2 mt-0.5 flex-shrink-0 text-blue-400" />
                              <span className="leading-relaxed line-clamp-2">{achievement}</span>
                            </li>
                          ))}
                          {exp.achievements.length > 3 && (
                            <li className="text-sm text-gray-400">+{exp.achievements.length - 3} more achievements</li>
                          )}
                        </ul>
                      </div>

                      <Separator className="bg-gray-700 my-4" />

                      <div>
                        <h4 className="font-semibold text-gray-200 text-sm mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-1">
                          {exp.technologies.slice(0, 6).map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs bg-gray-700/30 text-gray-300 border-gray-600/50 hover:bg-gray-600/30 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {exp.technologies.length > 6 && (
                            <Badge
                              variant="outline"
                              className="text-xs bg-gray-600/30 text-gray-400 border-gray-500/50"
                            >
                              +{exp.technologies.length - 6}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Scroll indicator */}
            <div className="flex justify-center mt-4">
              <div className="flex items-center text-gray-400 text-sm">
                <ChevronRight className="h-4 w-4 mr-1" />
                <span>Scroll horizontally to view all experiences</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-500/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Connect?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                I'm always interested in discussing new opportunities, innovative projects, and ways to contribute to
                meaningful technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
                >
                  <Download className="mr-2 h-4 w-4" />
                  {isDownloading ? "Downloading..." : "Download Resume"}
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 px-6 py-2 bg-transparent"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Get In Touch
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}
