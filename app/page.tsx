import Link from "next/link"

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#111311] px-6 text-[#f4f3ec]">
      <section className="max-w-lg text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#e45b43]">Temporary page</p>
        <h1 className="text-4xl font-semibold">Page not loading</h1>
        <p className="mt-4 leading-7 text-white/60">The main portfolio page is temporarily unavailable.</p>
        <Link
          href="/notes/"
          className="mt-8 inline-flex h-11 items-center justify-center bg-[#e45b43] px-5 font-medium text-white transition hover:bg-[#cc4933]"
        >
          Open shared notes
        </Link>
      </section>
    </main>
  )
}
