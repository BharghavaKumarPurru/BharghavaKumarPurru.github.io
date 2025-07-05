"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

const profiles = [
  {
    id: "recruiter",
    name: "Recruiter",
    description: "Professional Overview",
    backgroundColor: "bg-blue-600",
    faceType: "smile",
  },
  {
    id: "hr",
    name: "HR",
    description: "Background & Culture",
    backgroundColor: "bg-green-600",
    faceType: "smile",
  },
  {
    id: "friend",
    name: "Friend",
    description: "Personal Side",
    backgroundColor: "bg-purple-600",
    faceType: "smile",
  },
  {
    id: "tech-stalker",
    name: "Tech Stalker",
    description: "Deep Technical Dive",
    backgroundColor: "bg-red-600",
    faceType: "smile",
  },
]

const ProfileFace = ({ faceType, backgroundColor }: { faceType: string; backgroundColor: string }) => {
  return (
    <div
      className={`w-32 h-32 mx-auto mb-6 rounded-lg ${backgroundColor} flex items-center justify-center relative overflow-hidden`}
    >
      {/* Simple smiley face */}
      <div className="relative">
        {/* Eyes */}
        <div className="flex gap-6 mb-3">
          <div className="w-3 h-3 bg-white rounded-full"></div>
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
        {/* Smile */}
        <div className="w-8 h-4 border-b-2 border-white rounded-b-full mx-auto"></div>
      </div>
    </div>
  )
}

export default function ProfileSelector() {
  const router = useRouter()

  const handleProfileSelect = (profileId: string) => {
    router.push(`/dashboard/${profileId}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 flex flex-col items-center justify-center p-8">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1
          className="text-6xl md:text-7xl font-normal text-white mb-6"
          style={{ fontFamily: "Netflix Sans, Helvetica Neue, Arial, sans-serif" }}
        >
          Who's watching?
        </h1>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl">
        {profiles.map((profile, index) => (
          <motion.div
            key={profile.id}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleProfileSelect(profile.id)}
            className="cursor-pointer group text-center"
          >
            <ProfileFace faceType={profile.faceType} backgroundColor={profile.backgroundColor} />

            <h3 className="text-xl font-normal text-gray-400 group-hover:text-white transition-colors duration-200 mb-2">
              {profile.name}
            </h3>

            <p className="text-sm text-gray-500 max-w-32">{profile.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-16"
      >
        <button className="px-8 py-3 border border-gray-600 text-gray-400 hover:text-white hover:border-white transition-colors duration-200 text-lg tracking-wider">
          MANAGE PROFILES
        </button>
      </motion.div>
    </div>
  )
}
