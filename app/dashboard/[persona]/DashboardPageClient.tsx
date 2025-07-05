"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ContentRows from "@/components/content-rows"
import AudioPlayer from "@/components/audio-player"
import ScheduleInterviewModal from "@/components/schedule-interview-modal"

interface DashboardPageClientProps {
  content: any
  persona: string
}

export default function DashboardPageClient({ content, persona }: DashboardPageClientProps) {
  const [showScheduleModal, setShowScheduleModal] = useState(false)
  const router = useRouter()

  const handlePrimaryCTA = () => {
    switch (persona) {
      case "recruiter":
        // Download Resume
        const link = document.createElement("a")
        link.href = "/resume/Bharghava_Kumar_Purru_Resume.pdf"
        link.download = "Bharghava_Kumar_Purru_Resume.pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        break
      case "tech-stalker":
        // View Code - Open GitHub repositories
        window.open("https://github.com/BharghavaKumarPurru?tab=repositories", "_blank")
        break
      case "friend":
        // Let's Chat - Open WhatsApp
        window.open("https://wa.me/12164570576", "_blank")
        break
      default:
        // Default action
        router.push("/projects")
        break
    }
  }

  const handleSecondaryCTA = () => {
    switch (persona) {
      case "recruiter":
        // Schedule Interview
        setShowScheduleModal(true)
        break
      case "tech-stalker":
        // Architecture Docs - Open GitHub repositories
        window.open("https://github.com/BharghavaKumarPurru?tab=repositories", "_blank")
        break
      case "friend":
        // Send Message - Navigate to contact page
        router.push("/contact")
        break
      default:
        // Default action
        router.push("/contact")
        break
    }
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <HeroSection content={content.hero} onPrimaryCTA={handlePrimaryCTA} onSecondaryCTA={handleSecondaryCTA} />

      {content.hero.audioEnabled && <AudioPlayer src={content.hero.audioSrc} title={content.hero.audioTitle} />}

      <ContentRows rows={content.rows} />

      {showScheduleModal && (
        <ScheduleInterviewModal isOpen={showScheduleModal} onClose={() => setShowScheduleModal(false)} />
      )}
    </div>
  )
}
