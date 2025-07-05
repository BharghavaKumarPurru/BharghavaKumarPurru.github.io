"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX, Play, Pause } from "lucide-react"

interface AudioPlayerProps {
  audioSrc: string
  title: string
}

export default function AudioPlayer({ audioSrc, title }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      try {
        await audio.play()
        // isPlaying will become true in onPlay
      } catch (err) {
          console.error("Error while trying to play audio:", err);
          alert("Unable to play audio. Please ensure your browser allows media playback.");
        }

      }
    } else {
      audio.pause()
      // isPlaying will become false in onPause
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleAudioEnd = () => {
    setIsPlaying(false)
  }

  return (
    <div className="flex items-center gap-3 bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 border border-gray-700">
      <audio
        ref={audioRef}
        src={audioSrc}
        preload="none"
        onEnded={handleAudioEnd}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant="ghost"
          size="sm"
          onClick={togglePlay}
          className="text-white hover:text-red-400 hover:bg-red-600/20"
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
      </motion.div>

      <span className="text-sm text-gray-300 flex-1">{title}</span>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleMute}
          className="text-white hover:text-red-400 hover:bg-red-600/20"
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </Button>
      </motion.div>
    </div>
  )
}
