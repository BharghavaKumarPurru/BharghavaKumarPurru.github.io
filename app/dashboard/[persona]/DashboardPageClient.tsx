"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { getPersonaContent } from "@/lib/persona-content"
import HeroSection from "@/components/hero-section"
import ContentRows from "@/components/content-rows"
import Navbar from "@/components/navbar"

interface DashboardPageClientProps {
  persona: string
}

export default function DashboardPageClient({ persona }: DashboardPageClientProps) {
  const [content, setContent] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    try {
      const personaContent = getPersonaContent(persona)
      setContent(personaContent)
    } catch (error) {
      console.error("Error loading persona content:", error)
      // Fallback to default content
      setContent(getPersonaContent("default"))
    } finally {
      setLoading(false)
    }
  }, [persona])

  const handlePrimaryCTA = () => {
    switch (persona) {
      case "recruiter":
        // Download resume
        window.open("/resume/Bharghava_Kumar_Purru_Resume.pdf", "_blank")
        break
      case "tech-stalker":
        // View Code - GitHub repositories
        window.open("https://github.com/BharghavaKumarPurru?tab=repositories", "_blank")
        break
      case "friend":
        // Let's Chat - WhatsApp
        window.open(
          "https://wa.me/12164570576?text=Hi%20Bharghava!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20chat.",
          "_blank",
        )
        break
      default:
        router.push("/projects")
    }
  }

  const handleSecondaryCTA = () => {
    switch (persona) {
      case "recruiter":
        // Schedule Interview - Open scheduling modal or Calendly
        window.open("https://calendly.com/bharghavakumarpurru", "_blank")
        break
      case "tech-stalker":
        // Architecture Docs - GitHub repositories
        window.open("https://github.com/BharghavaKumarPurru?tab=repositories", "_blank")
        break
      case "friend":
        // Send Message - Contact page
        router.push("/contact")
        break
      default:
        router.push("/contact")
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  if (!content) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Content not found</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <HeroSection content={content.hero} onPrimaryCTA={handlePrimaryCTA} onSecondaryCTA={handleSecondaryCTA} />

        <ContentRows persona={persona} content={content} />
      </motion.div>
    </div>
  )
}
