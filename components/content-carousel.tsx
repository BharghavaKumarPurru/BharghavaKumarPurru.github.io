"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Award, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ContentDetailModal from "./content-detail-modal"

interface ContentCarouselProps {
  items: any[]
  type: string
}

export default function ContentCarousel({ items, type }: ContentCarouselProps) {
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleItemClick = (item: any) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedItem(null)
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
      const cardWidth = 320 // Approximate card width + gap
      const scrollAmount = cardWidth * 3
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

  const handleTouchStart = (e: React.TouchEvent) => {
    if (scrollRef.current) {
      setIsDragging(true)
      setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft)
      setScrollLeft(scrollRef.current.scrollLeft)
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchEnd = () => {
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
  }, [items])

  const renderNetflixCard = (item: any, index: number) => (
    <motion.div
      key={`${item.id || index}`}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="flex-none w-80 snap-start cursor-pointer"
      onClick={() => handleItemClick(item)}
    >
      <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video hover:scale-105 transition-all duration-300 hover:z-10 group">
        {/* Background Image/Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-gray-800 to-gray-900">
          {item.image ? (
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              className="w-full h-full object-cover opacity-60"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-6xl opacity-20">{getTypeIcon(type)}</div>
            </div>
          )}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* View Details Button - Bottom Right on Hover */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="sm" className="bg-white/90 text-black hover:bg-white text-xs px-3 py-1 h-8">
            <Play className="mr-1 h-3 w-3" />
            View Details
          </Button>
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="text-white font-semibold text-lg mb-1 line-clamp-1">{item.title}</h3>
          {item.subtitle && <p className="text-red-400 text-sm font-medium mb-2 line-clamp-1">{item.subtitle}</p>}
          {item.role && <p className="text-red-400 text-sm font-medium mb-2 line-clamp-1">{item.role}</p>}
          {item.category && <p className="text-blue-400 text-sm font-medium mb-2 line-clamp-1">{item.category}</p>}

          {/* Brief description */}
          <p className="text-gray-300 text-sm line-clamp-2 mb-3">{item.description?.substring(0, 100)}...</p>

          {/* Quick info badges */}
          <div className="flex items-center gap-2 flex-wrap">
            {item.tech && (
              <Badge variant="secondary" className="bg-red-600/20 text-red-300 text-xs">
                {item.tech[0]}
                {item.tech.length > 1 && ` +${item.tech.length - 1}`}
              </Badge>
            )}
            {item.technologies && (
              <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 text-xs">
                {item.technologies[0]}
                {item.technologies.length > 1 && ` +${item.technologies.length - 1}`}
              </Badge>
            )}
            {item.skills && (
              <Badge variant="secondary" className="bg-green-600/20 text-green-300 text-xs">
                {item.skills.length} Skills
              </Badge>
            )}
            {item.date && (
              <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs">
                {item.date}
              </Badge>
            )}
            {item.period && (
              <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs">
                {item.period?.split(" - ")[1] || item.period}
              </Badge>
            )}
            {item.gpa && (
              <Badge variant="outline" className="border-green-600 text-green-400 text-xs">
                GPA: {item.gpa}
              </Badge>
            )}
            {item.level && (
              <Badge variant="outline" className="border-yellow-600 text-yellow-400 text-xs">
                {item.level}
              </Badge>
            )}
          </div>

          {/* Quick action buttons */}
          <div className="flex gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {item.github && (
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 bg-transparent text-white hover:bg-gray-800 h-7 px-2"
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(item.github, "_blank")
                }}
              >
                <Github className="h-3 w-3" />
              </Button>
            )}
            {item.demo && (
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 bg-transparent text-white hover:bg-gray-800 h-7 px-2"
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(item.demo, "_blank")
                }}
              >
                <ExternalLink className="h-3 w-3" />
              </Button>
            )}
          </div>
        </div>

        {/* Top right indicators */}
        <div className="absolute top-2 right-2 flex gap-1">
          {item.metrics && <Badge className="bg-green-600 text-white text-xs">{item.metrics[0]?.value}</Badge>}
          {item.achievements && (
            <Badge className="bg-yellow-600 text-white text-xs">
              <Award className="h-3 w-3" />
            </Badge>
          )}
        </div>
      </div>
    </motion.div>
  )

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "projects":
        return "💻"
      case "experience":
        return "🏢"
      case "education":
        return "🎓"
      case "skills":
        return "⚡"
      case "personal":
        return "👤"
      case "learning":
        return "📚"
      case "fun":
        return "🎮"
      case "interests":
        return "❤️"
      case "leadership":
        return "👑"
      case "culture":
        return "🌟"
      case "management":
        return "📊"
      case "tech-stack":
        return "🔧"
      case "architecture":
        return "🏗️"
      case "cloud-devops":
        return "☁️"
      case "practices":
        return "✅"
      case "achievements":
        return "🏆"
      default:
        return "📄"
    }
  }

  if (items.length === 0) return null

  return (
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
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent z-[5] pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent z-[5] pointer-events-none" />

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4 cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((item, index) => renderNetflixCard(item, index))}
      </div>

      {/* Detail Modal */}
      <ContentDetailModal item={selectedItem} type={type} isOpen={isModalOpen} onClose={closeModal} />

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
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
