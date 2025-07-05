"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import ScheduleInterviewModal from "./schedule-interview-modal"
import AudioPlayer from "./audio-player"
import { Download, User, Heart, Code, FileText, MessageCircle, Send } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

interface HeroSectionProps {
  persona: string
  content: any
}

export default function HeroSection({ persona, content }: HeroSectionProps) {
  const [showScheduleModal, setShowScheduleModal] = useState(false)
  const router = useRouter()

  const handleResumeDownload = () => {
    const link = document.createElement("a")
    link.href = "/resume/Bharghava_Kumar_Purru_Resume.pdf"
    link.download = "Bharghava_Kumar_Purru_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleScheduleInterview = () => {
    setShowScheduleModal(true)
  }

  const handleWhatsApp = () => {
    window.open("https://wa.me/12164570576", "_blank")
  }

  const handleGitHub = () => {
    window.open("https://github.com/BharghavaKumarPurru?tab=repositories", "_blank")
  }

  const handleContactPage = () => {
    router.push("/contact")
  }

  const handlePrimaryCTA = () => {
    if (content.hero.primaryCTA === "Download Resume") {
      handleResumeDownload()
    } else if (content.hero.primaryCTA === "View Background") {
      // Scroll to the first content section
      const firstSection = document.querySelector('[data-section="first"]')
      if (firstSection) {
        firstSection.scrollIntoView({ behavior: "smooth" })
      }
    } else if (content.hero.primaryCTA === "Let's Chat") {
      handleWhatsApp()
    } else if (content.hero.primaryCTA === "View Code") {
      handleGitHub()
    }
  }

  const handleSecondaryCTA = () => {
    if (content.hero.secondaryCTA === "Schedule Interview") {
      handleScheduleInterview()
    } else if (content.hero.secondaryCTA === "Cultural Fit") {
      // Scroll to leadership/culture section
      const cultureSection = document.querySelector('[data-section="culture"]')
      if (cultureSection) {
        cultureSection.scrollIntoView({ behavior: "smooth" })
      }
    } else if (content.hero.secondaryCTA === "Send Message") {
      handleContactPage()
    } else if (content.hero.secondaryCTA === "Architecture Docs") {
      handleGitHub()
    }
  }

  const getPrimaryIcon = () => {
    switch (content.hero.primaryCTA) {
      case "Download Resume":
        return <Download className="mr-2 h-5 w-5" />
      case "View Background":
        return <User className="mr-2 h-5 w-5" />
      case "Let's Chat":
        return <MessageCircle className="mr-2 h-5 w-5" />
      case "View Code":
        return <Code className="mr-2 h-5 w-5" />
      default:
        return null
    }
  }

  const getSecondaryIcon = () => {
    switch (content.hero.secondaryCTA) {
      case "Cultural Fit":
        return <Heart className="mr-2 h-5 w-5" />
      case "Send Message":
        return <Send className="mr-2 h-5 w-5" />
      case "Architecture Docs":
        return <FileText className="mr-2 h-5 w-5" />
      default:
        return null
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-start bg-black">
      {/* Background Image/Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-4xl ml-8 md:ml-16 text-white py-20">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 netflix-font leading-tight">
            {content.hero.title}
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-300 max-w-3xl leading-relaxed">
            {content.hero.description}
          </p>

          {content.hero.stats && (
            <div className="flex flex-wrap gap-4 md:gap-6 mb-10">
              {content.hero.stats.map((stat: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-red-600/20 backdrop-blur-sm px-4 md:px-6 py-3 md:py-4 rounded-lg border border-red-600/30 min-w-[140px]"
                >
                  <div className="text-2xl md:text-3xl font-bold text-red-400">{stat.value}</div>
                  <div className="text-sm md:text-base text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-4 md:gap-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="bg-white text-black hover:bg-gray-200 px-8 md:px-10 py-3 md:py-4 text-lg md:text-xl font-semibold"
                onClick={handlePrimaryCTA}
              >
                {getPrimaryIcon()}
                {content.hero.primaryCTA}
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="border-gray-500 text-white hover:bg-gray-800 px-8 md:px-10 py-3 md:py-4 text-lg md:text-xl bg-transparent"
                onClick={handleSecondaryCTA}
              >
                {getSecondaryIcon()}
                {content.hero.secondaryCTA}
              </Button>
            </motion.div>
          </div>

          {content.hero.audioEnabled && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-8"
            >
              <AudioPlayer audioSrc={content.hero.audioSrc} title={content.hero.audioTitle} />
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 z-0">
        <div className="w-full h-full bg-gradient-to-l from-red-600/20 to-transparent" />
      </div>

      <ScheduleInterviewModal isOpen={showScheduleModal} onClose={() => setShowScheduleModal(false)} />
    </div>
  )
}
