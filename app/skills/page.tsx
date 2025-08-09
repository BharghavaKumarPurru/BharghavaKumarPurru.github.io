"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight } from "lucide-react"

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React.js", level: 90, years: "4+", projects: 15 },
      { name: "Angular", level: 85, years: "3+", projects: 12 },
      { name: "Vue.js", level: 75, years: "2+", projects: 8 },
      { name: "TypeScript", level: 88, years: "3+", projects: 20 },
      { name: "HTML/CSS", level: 95, years: "5+", projects: 25 },
      { name: "Tailwind CSS", level: 90, years: "2+", projects: 18 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "C# / .NET", level: 95, years: "5+", projects: 22 },
      { name: "Node.js", level: 85, years: "3+", projects: 16 },
      { name: "Python", level: 80, years: "2+", projects: 10 },
      { name: "Java", level: 75, years: "2+", projects: 8 },
      { name: "REST APIs", level: 92, years: "5+", projects: 30 },
      { name: "GraphQL", level: 70, years: "1+", projects: 5 },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "SQL Server", level: 90, years: "5+", projects: 20 },
      { name: "MongoDB", level: 85, years: "3+", projects: 15 },
      { name: "PostgreSQL", level: 80, years: "2+", projects: 12 },
      { name: "Redis", level: 75, years: "2+", projects: 8 },
      { name: "Entity Framework", level: 88, years: "4+", projects: 18 },
    ],
  },
  {
    name: "Cloud & DevOps",
    skills: [
      { name: "Azure", level: 85, years: "3+", projects: 14 },
      { name: "Docker", level: 80, years: "2+", projects: 12 },
      { name: "Kubernetes", level: 70, years: "1+", projects: 6 },
      { name: "CI/CD", level: 85, years: "3+", projects: 16 },
      { name: "GitHub Actions", level: 80, years: "2+", projects: 10 },
    ],
  },
  {
    name: "Testing & QA",
    skills: [
      { name: "Selenium", level: 90, years: "4+", projects: 18 },
      { name: "Playwright", level: 85, years: "2+", projects: 12 },
      { name: "Jest", level: 80, years: "3+", projects: 15 },
      { name: "Postman", level: 88, years: "4+", projects: 25 },
      { name: "Unit Testing", level: 92, years: "5+", projects: 30 },
    ],
  },
  {
    name: "Tools & Others",
    skills: [
      { name: "Git", level: 95, years: "5+", projects: 50 },
      { name: "Jira", level: 85, years: "4+", projects: 20 },
      { name: "Figma", level: 70, years: "2+", projects: 8 },
      { name: "Umbraco CMS", level: 80, years: "2+", projects: 6 },
      { name: "Agile/Scrum", level: 88, years: "4+", projects: 25 },
    ],
  },
]

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [viewMode, setViewMode] = useState<"grid" | "detailed">("grid")
  const scrollRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const [scrollStates, setScrollStates] = useState<{
    [key: string]: { canScrollLeft: boolean; canScrollRight: boolean }
  }>({})

  const filteredCategories =
    selectedCategory === "All" ? skillCategories : skillCategories.filter((cat) => cat.name === selectedCategory)

  const checkScrollButtons = (categoryName: string) => {
    const scrollRef = scrollRefs.current[categoryName]
    if (scrollRef) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef
      setScrollStates((prev) => ({
        ...prev,
        [categoryName]: {
          canScrollLeft: scrollLeft > 0,
          canScrollRight: scrollLeft < scrollWidth - clientWidth - 1,
        },
      }))
    }
  }

  const scrollTo = (categoryName: string, direction: "left" | "right") => {
    const scrollRef = scrollRefs.current[categoryName]
    if (scrollRef) {
      const cardWidth = viewMode === "grid" ? 280 : 600
      const scrollAmount = cardWidth * 2
      const newScrollLeft =
        direction === "left" ? scrollRef.scrollLeft - scrollAmount : scrollRef.scrollLeft + scrollAmount

      scrollRef.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    filteredCategories.forEach((category) => {
      checkScrollButtons(category.name)
    })
  }, [filteredCategories, viewMode])

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 netflix-font">
              TECHNICAL SKILLS
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive overview of my technical expertise and proficiency levels
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-20 bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters and View Toggle */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap items-center justify-between gap-4 mb-12"
          >
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === "All" ? "default" : "outline"}
                className={
                  selectedCategory === "All"
                    ? "bg-red-600 hover:bg-red-700"
                    : "border-gray-600 text-gray-300 hover:bg-gray-800"
                }
                onClick={() => setSelectedCategory("All")}
              >
                All Skills
              </Button>
              {skillCategories.map((category) => (
                <Button
                  key={category.name}
                  variant={selectedCategory === category.name ? "default" : "outline"}
                  className={
                    selectedCategory === category.name
                      ? "bg-red-600 hover:bg-red-700"
                      : "border-gray-600 text-gray-300 hover:bg-gray-800"
                  }
                  onClick={() => setSelectedCategory(category.name)}
                >
                  {category.name}
                </Button>
              ))}
            </div>

            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                className={
                  viewMode === "grid"
                    ? "bg-red-600 hover:bg-red-700"
                    : "border-gray-600 text-gray-300 hover:bg-gray-800"
                }
                onClick={() => setViewMode("grid")}
              >
                Grid View
              </Button>
              <Button
                variant={viewMode === "detailed" ? "default" : "outline"}
                className={
                  viewMode === "detailed"
                    ? "bg-red-600 hover:bg-red-700"
                    : "border-gray-600 text-gray-300 hover:bg-gray-800"
                }
                onClick={() => setViewMode("detailed")}
              >
                Detailed View
              </Button>
            </div>
          </motion.div>

          {/* Skills Display */}
          <div className="space-y-12">
            {filteredCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-1 h-8 bg-red-600 rounded"></span>
                  {category.name}
                </h2>

                {/* Netflix-style Horizontal Scroll */}
                <div className="relative group">
                  {/* Left Arrow */}
                  {scrollStates[category.name]?.canScrollLeft && (
                    <Button
                      variant="ghost"
                      size="lg"
                      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-black/90 text-white opacity-0 group-hover:opacity-100 transition-opacity w-12 h-12 rounded-full backdrop-blur-sm"
                      onClick={() => scrollTo(category.name, "left")}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                  )}

                  {/* Right Arrow */}
                  {scrollStates[category.name]?.canScrollRight && (
                    <Button
                      variant="ghost"
                      size="lg"
                      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-black/90 text-white opacity-0 group-hover:opacity-100 transition-opacity w-12 h-12 rounded-full backdrop-blur-sm"
                      onClick={() => scrollTo(category.name, "right")}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                  )}

                  {/* Fade Edges */}
                  <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent z-[5] pointer-events-none" />
                  <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent z-[5] pointer-events-none" />

                  {viewMode === "grid" ? (
                    <div
                      ref={(el) => {
                        scrollRefs.current[category.name] = el
                      }}
                      className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4"
                      onScroll={() => checkScrollButtons(category.name)}
                    >
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: skillIndex * 0.05, duration: 0.3 }}
                          className="flex-none w-64 snap-start"
                        >
                          <Card className="bg-gray-900 border-gray-700 hover:border-red-500 p-4 text-center h-full transition-all duration-300 hover:scale-105">
                            <h3 className="font-semibold text-white mb-2">{skill.name}</h3>
                            <div className="mb-3">
                              <Progress value={skill.level} className="h-2 bg-gray-700" />
                            </div>
                            <div className="flex justify-between text-sm text-gray-400">
                              <span>{skill.level}%</span>
                              <span>{skill.years} years</span>
                            </div>
                            <div className="mt-2 text-xs text-gray-500">{skill.projects} projects</div>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div
                      ref={(el) => {
                        scrollRefs.current[category.name] = el
                      }}
                      className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4"
                      onScroll={() => checkScrollButtons(category.name)}
                    >
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ x: -50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: skillIndex * 0.05, duration: 0.3 }}
                          className="flex-none w-96 snap-start"
                        >
                          <Card className="bg-gray-900 border-gray-700 hover:border-red-500 p-6 h-full transition-all duration-300 hover:scale-105">
                            <div className="flex items-center justify-between mb-4">
                              <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                              <div className="flex gap-2">
                                <Badge variant="outline" className="border-red-600 text-red-400">
                                  {skill.level}% Proficiency
                                </Badge>
                                <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                                  {skill.years} Experience
                                </Badge>
                              </div>
                            </div>

                            <div className="mb-4">
                              <div className="flex justify-between text-sm text-gray-400 mb-2">
                                <span>Proficiency Level</span>
                                <span>{skill.level}%</span>
                              </div>
                              <Progress value={skill.level} className="h-3 bg-gray-700" />
                            </div>

                            <div className="flex justify-between text-sm text-gray-400">
                              <span>
                                Years of Experience: <strong className="text-white">{skill.years}</strong>
                              </span>
                              <span>
                                Projects Completed: <strong className="text-white">{skill.projects}</strong>
                              </span>
                            </div>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Summary */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16"
          >
            <Card className="bg-gray-900 border-gray-700 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Skills Overview</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-red-400 mb-2">50+</div>
                  <div className="text-gray-400">Technologies</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-400 mb-2">5+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-400 mb-2">100+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-400 mb-2">15+</div>
                  <div className="text-gray-400">Certifications</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
