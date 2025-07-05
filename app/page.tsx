"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import IntroAnimation from "@/components/intro-animation"
import ProfileSelector from "@/components/profile-selector"

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true)
  const [showProfiles, setShowProfiles] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false)
      setShowProfiles(true)
    }, 5500) // Extended to accommodate the new animation

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-black">
      <AnimatePresence mode="wait">
        {showIntro && (
          <motion.div key="intro" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <IntroAnimation />
          </motion.div>
        )}

        {showProfiles && (
          <motion.div key="profiles" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <ProfileSelector />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
