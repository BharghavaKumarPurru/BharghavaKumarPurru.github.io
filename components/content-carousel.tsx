"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ProjectModal from "./project-modal"

interface ContentCarouselProps {
  items: any[]
  type: string
}

export default function ContentCarousel({ items, type }: ContentCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedProject, setSelectedProject] = useState(null)
  const itemsPerView = 4

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + itemsPerView >= items.length ? 0 : prev + itemsPerView))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, items.length - itemsPerView) : prev - itemsPerView))
  }

  const visibleItems = items.slice(currentIndex, currentIndex + itemsPerView)

  return (
    <div className="relative group">
      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="lg"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity w-12 h-12"
        onClick={prevSlide}
        disabled={currentIndex === 0}
      >
        ‹
      </Button>

      <Button
        variant="ghost"
        size="lg"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity w-12 h-12"
        onClick={nextSlide}
        disabled={currentIndex + itemsPerView >= items.length}
      >
        ›
      </Button>

      {/* Carousel Content */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <AnimatePresence mode="wait">
          {visibleItems.map((item, index) => (
            <motion.div
              key={`${currentIndex}-${index}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="card-hover"
            >
              <Card
                className="bg-gray-900 border-gray-700 hover:border-red-500 cursor-pointer overflow-hidden group/card"
                onClick={() => type === "projects" && setSelectedProject(item)}
              >
                <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-900 relative overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-5xl">
                      {item.icon || item.emoji || "📁"}
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h4 className="font-semibold mb-2 text-lg">{item.title}</h4>
                      {item.description && <p className="text-sm text-gray-300 px-3">{item.description}</p>}
                      {type === "projects" && (
                        <div className="flex gap-3 mt-3 justify-center">
                          {item.github && (
                            <Button size="sm" variant="outline" className="text-xs bg-transparent">
                              Code
                            </Button>
                          )}
                          {item.demo && (
                            <Button size="sm" variant="outline" className="text-xs bg-transparent">
                              Demo
                            </Button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-semibold text-white mb-2 text-lg">{item.title}</h3>
                  {item.subtitle && <p className="text-sm text-gray-400 mb-3">{item.subtitle}</p>}
                  {item.tech && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.tech.slice(0, 3).map((tech: string, i: number) => (
                        <span key={i} className="text-xs bg-red-600/20 text-red-400 px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Project Modal */}
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  )
}
