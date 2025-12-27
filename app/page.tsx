"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

const words = ["READY", "TO", "DIVE!"]

type Phase = "intro" | "worm"

export default function Home() {
  const [phase, setPhase] = useState<Phase>("intro")
  const [wordIndex, setWordIndex] = useState(0)
  const router = useRouter()

  /* ───────── INTRO → WORM ───────── */
  useEffect(() => {
    const t = setTimeout(() => {
      setPhase("worm")
    }, 5000)
    return () => clearTimeout(t)
  }, [])

  /* ───────── WORD SEQUENCE ───────── */
  useEffect(() => {
    if (phase !== "worm") return

    if (wordIndex < words.length - 1) {
      const t = setTimeout(() => {
        setWordIndex(i => i + 1)
      }, 1200)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => {
        router.push("/about")
      }, 1400)
      return () => clearTimeout(t)
    }
  }, [phase, wordIndex, router])

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black">
      {/* ───────── VIDEO LAYER ───────── */}
      {phase === "intro" ? (
        <video
          autoPlay
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/vid.mp4" type="video/mp4" />
        </video>
      ) : (
        <video
          key="worm-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/worm.mp4" type="video/mp4" />
        </video>
      )}

      {/* ───────── GLOBAL WATERMARK HUD (FIXED) ───────── */}
      <div
        className="
          absolute bottom-0 left-0
          h-[7vh] w-full
          backdrop-blur-xl
          bg-gradient-to-t
          from-black/80
          via-black/40
          to-transparent
          z-20
          pointer-events-none
        "
      />

      {/* ───────── WORMHOLE TEXT ───────── */}
      {phase === "worm" && (
        <div className="absolute inset-0 z-30 flex items-center justify-center">
          <div
            key={wordIndex}
            className="worm-word text-4xl md:text-5xl text-center"
          >
            {words[wordIndex]}
          </div>
        </div>
      )}
    </main>
  )
}
