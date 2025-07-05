"use client"

import { useEffect, useState, useRef } from "react"

export default function IntroAnimation() {
  const [playSound, setPlaySound] = useState(false)
  const nameRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Create Netflix-style sound effect
    const playIntroSound = async () => {
      try {
        const audio = new Audio("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/netflix_Into%20sound-afhsZqwLPmiWoBGCboAfBzLGnHNhqE.mp3")
        audio.volume = 0.5
        await audio.play()
      } catch (error) {
        console.log("Audio not available")
      }
    }

    // Animation logic
    const animate = () => {
      const name = nameRef.current
      if (!name) return

      const nameValue = name.getAttribute("data-value") || "BHARGHAVA"

      const insert = (x: string, i: number) => {
        let s = 0
        let ss = 1

        // Calculate rotation and scale based on position
        const totalLetters = nameValue.length
        const center = Math.floor(totalLetters / 2)
        const distance = Math.abs(i - center)

        if (distance === 0) {
          s = 0
          ss = 1
        } else if (distance === 1) {
          s = i < center ? 5 : -5
          ss = 1.03
        } else if (distance === 2) {
          s = i < center ? 15 : -15
          ss = 1.1
        } else if (distance === 3) {
          s = i < center ? 20 : -20
          ss = 1.15
        } else {
          s = i < center ? 25 : -25
          ss = 1.2
        }

        const container = document.createElement("div")
        container.classList.add("container")

        const div = document.createElement("div")
        div.textContent = x
        div.classList.add("character")
        div.style.transform = `rotateY(${s}deg) scale(${ss})`

        container.appendChild(div)
        name.appendChild(container)

        container.style.animation = `zoom 1.5s ${i / 20}s cubic-bezier(.23,1.62,.65,.87) forwards`
        div.style.animation = `long-shadow 1.5s ${i / 20}s cubic-bezier(.23,1.62,.65,.87) forwards`
      }

      // Clear previous content
      name.innerHTML = ""

      // Insert each character
      ;[...nameValue].forEach((x, i) => insert(x, i))

      // Change to red after 1 second
      setTimeout(() => {
        name.style.animation = "shrink 4s ease-out forwards"
        const characters = document.querySelectorAll(".character")
        characters.forEach((c) => {
          ;(c as HTMLElement).style.color = "#db0000"
        })
      }, 1000)

      // Reset after 4 seconds
      setTimeout(() => {
        name.innerHTML = ""
        name.style.animation = "grow 1s ease forwards"
      }, 4000)
    }

    // Start animation after a short delay
    const timer = setTimeout(() => {
      playIntroSound()
      setPlaySound(true)
      animate()
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 netflix-intro-container">
      <div
        ref={nameRef}
        className="name"
        data-value="BHARGHAVA"
        style={{
          color: "transparent",
          letterSpacing: "0.3vw", // Further reduced from 0.5vw
          display: "flex",
          perspective: "600px",
          animation: "grow 1s ease forwards",
          fontSize: "7vw", // Significantly reduced from 10vw to 7vw
          maxWidth: "9vw", // Use almost full viewport
          overflow: "visible",
          justifyContent: "center",
          width: "100%",
          flexWrap: "nowrap",
        }}
      ></div>
    </div>
  )
}
