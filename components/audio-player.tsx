"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { motion } from "framer-motion"

interface AudioPlayerProps {
  audioSrc: string
  title: string
}

/**
 * Small Netflix-style audio player with resilient play / pause logic
 * that avoids “media was removed from the document” AbortErrors.
 */
export default function AudioPlayer({ audioSrc, title }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  /* ----------   sync component state from native events   ---------- */
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleEnded = () => setIsPlaying(false)

    audio.addEventListener("play", handlePlay)
    audio.addEventListener("pause", handlePause)
    audio.addEventListener("ended", handleEnded)

    return () => {
      audio.removeEventListener("play", handlePlay)
      audio.removeEventListener("pause", handlePause)
      audio.removeEventListener("ended", handleEnded)
    }
  }, [])

  /* ----------   UI event handlers   ---------- */
  function togglePlay() {
    const audio = audioRef.current
    if (!audio || busy) return

    if (isPlaying) {
      audio.pause()
      return
    }

    // play:
    setBusy(true)
    setError(null)
    const playPromise = audio.play()
    /* Do NOT await – let React finish the render cycle.  */
    if (playPromise !== undefined) {
      playPromise
        .catch((err) => {
          console.error("Audio play error:", err)
          setError("Click to play – browser blocked autoplay.")
        })
        .finally(() => setBusy(false))
    } else {
      /* Some browsers return void; clear the busy state immediately. */
      setBusy(false)
    }
  }

  function toggleMute() {
    const audio = audioRef.current
    if (!audio) return
    audio.muted = !isMuted
    setIsMuted(!isMuted)
  }

  /* ----------   render   ---------- */
  return (
    <div className="flex items-center gap-3 rounded-lg border border-gray-700 bg-gray-800/50 p-3 backdrop-blur-sm">
      {/* hidden native media element */}
      <audio ref={audioRef} src={audioSrc} preload="metadata" crossOrigin="anonymous" />

      {/* play / pause button */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant="ghost"
          size="sm"
          onClick={togglePlay}
          disabled={busy}
          className="text-white hover:bg-red-600/20 hover:text-red-400 disabled:opacity-50"
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
      </motion.div>

      {/* title (and optional error) */}
      <div className="flex-1 text-sm text-gray-300">
        {title}
        {error && <div className="mt-1 text-xs text-red-400">{error}</div>}
      </div>

      {/* mute / unmute */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleMute}
          disabled={busy}
          className="text-white hover:bg-red-600/20 hover:text-red-400 disabled:opacity-50"
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </Button>
      </motion.div>
    </div>
  )
}
