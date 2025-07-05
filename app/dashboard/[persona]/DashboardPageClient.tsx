"use client"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ContentRows from "@/components/content-rows"
import { getPersonaContent } from "@/lib/persona-content"

export default function DashboardPageClient({ persona }: { persona: string }) {
  const content = getPersonaContent(persona)

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <HeroSection persona={persona} content={content} />
        <ContentRows persona={persona} content={content} />
      </motion.div>
    </div>
  )
}
