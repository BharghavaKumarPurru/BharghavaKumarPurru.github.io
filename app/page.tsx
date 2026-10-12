"use client"

import { useEffect } from "react"

export default function HomePage() {
  useEffect(() => {
    const callbackParams = new URLSearchParams(window.location.search)
    const hasAuthCallback =
      window.location.hash.includes("access_token=") ||
      window.location.hash.includes("error_code=") ||
      callbackParams.has("code") ||
      callbackParams.has("error")

    if (hasAuthCallback) {
      window.location.replace(`/notes/${window.location.search}${window.location.hash}`)
    }
  }, [])

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#111311] px-6 text-[#f4f3ec]">
      <section className="max-w-lg text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#e45b43]">Temporary page</p>
        <h1 className="text-4xl font-semibold">Page not loading</h1>
        <p className="mt-4 leading-7 text-white/60">The main portfolio page is temporarily unavailable.</p>
      </section>
    </main>
  )
}
