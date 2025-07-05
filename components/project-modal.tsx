"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X, Github, Play } from "lucide-react"

interface ProjectModalProps {
  project: any
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-900 relative">
              {project.image && (
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />

              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-black/50"
                onClick={onClose}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                <p className="text-lg text-gray-400 mb-4">{project.role}</p>
              </div>

              <div className="flex gap-3">
                <Button className="bg-white text-black hover:bg-gray-200">
                  <Play className="mr-2 h-4 w-4" />
                  Demo
                </Button>
                <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 bg-transparent">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold text-white mb-3">Description</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>

                <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
                <ul className="text-gray-300 space-y-2">
                  {project.features?.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech?.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm border border-red-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.metrics && (
                  <>
                    <h3 className="text-xl font-semibold text-white mb-3">Impact</h3>
                    <div className="space-y-3">
                      {project.metrics.map((metric: any, index: number) => (
                        <div key={index} className="bg-gray-800 p-3 rounded-lg">
                          <div className="text-2xl font-bold text-red-400">{metric.value}</div>
                          <div className="text-sm text-gray-400">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
