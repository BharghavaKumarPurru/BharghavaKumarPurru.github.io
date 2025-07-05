"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2 } from "lucide-react"

interface HeroSectionProps {
  content: {
    title: string
    description: string
    stats?: Array<{ value: string; label: string }>
    primaryCTA: string
    secondaryCTA: string
    audioEnabled?: boolean
    audioSrc?: string
    audioTitle?: string
  }
  onPrimaryCTA: () => void
  onSecondaryCTA: () => void
}

export default function HeroSection({ content, onPrimaryCTA, onSecondaryCTA }: HeroSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      const handleEnded = () => setIsPlaying(false)
      audio.addEventListener("ended", handleEnded)
      return () => audio.removeEventListener("ended", handleEnded)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 text-center px-8 max-w-6xl mx-auto">
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 netflix-font tracking-tight"
        >
          {content.title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          {content.description}
        </motion.p>

        {/* Stats */}
        {content.stats && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-2xl mx-auto"
          >
            {content.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-red-400 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Audio Player */}
        {content.audioEnabled && content.audioSrc && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-8"
          >
            <Button
              onClick={toggleAudio}
              variant="outline"
              className="bg-gray-900/50 border-gray-700 text-white hover:bg-gray-800 hover:border-red-600"
            >
              <Volume2 className="mr-2 h-4 w-4" />
              {isPlaying ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
              {content.audioTitle || "Play Audio"}
            </Button>
            <audio ref={audioRef} src={content.audioSrc} preload="metadata" />
          </motion.div>
        )}

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={onPrimaryCTA}
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold min-w-[200px]"
          >
            {content.primaryCTA}
          </Button>
          <Button
            onClick={onSecondaryCTA}
            variant="outline"
            size="lg"
            className="border-gray-600 text-white hover:bg-gray-800 hover:border-red-600 px-8 py-3 text-lg min-w-[200px] bg-transparent"
          >
            {content.secondaryCTA}
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-red-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}
