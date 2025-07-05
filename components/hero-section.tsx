"use client"

import { motion } from "framer-motion"
import { Download, Calendar, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import AudioPlayer from "./audio-player"

interface HeroSectionProps {
  persona: string
  content: any
}

export default function HeroSection({ persona, content }: HeroSectionProps) {
  const handlePrimaryCTA = () => {
    if (content.hero.primaryCTA === "Download Resume") {
      const link = document.createElement("a")
      link.href = "/resume/Bharghava_Kumar_Purru_Resume.pdf"
      link.download = "Bharghava_Kumar_Purru_Resume.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const handleSecondaryCTA = () => {
    if (content.hero.secondaryCTA === "Schedule Interview") {
      window.open("https://calendly.com/bharghavakumarpurru", "_blank")
    } else if (content.hero.secondaryCTA === "Send Message") {
      window.location.href = "/contact"
    } else if (content.hero.secondaryCTA === "Architecture Docs") {
      window.open("https://github.com/BharghavaKumarPurru/architecture-docs", "_blank")
    } else {
      window.location.href = "/contact"
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-start text-left">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl text-left">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {content.hero.title}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              {content.hero.description}
            </p>

            {/* Stats */}
            {content.hero.stats && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-start text-left">
                {content.hero.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="text-left"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-red-400 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Audio Player */}
            {content.hero.audioEnabled && content.hero.audioSrc && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <AudioPlayer
                  src={content.hero.audioSrc}
                  title={content.hero.audioTitle || "Professional Summary"}
                />
              </motion.div>
            )}

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold"
                onClick={handlePrimaryCTA}
              >
                {content.hero.primaryCTA === "Download Resume" && <Download className="mr-2 h-5 w-5" />}
                {content.hero.primaryCTA === "Let's Chat" && <MessageCircle className="mr-2 h-5 w-5" />}
                {content.hero.primaryCTA}
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 text-lg font-semibold bg-transparent"
                onClick={handleSecondaryCTA}
              >
                {content.hero.secondaryCTA === "Schedule Interview" && <Calendar className="mr-2 h-5 w-5" />}
                {content.hero.secondaryCTA}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
