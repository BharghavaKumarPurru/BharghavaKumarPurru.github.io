import Link from "next/link"

export const metadata = {
  title: "Privacy | Bharghava Kumar Purru",
  description: "Privacy information for the shared notes page.",
}

export default function PrivacyPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-16 text-white">
      <Link href="/notes/" className="text-sm text-white/60 transition hover:text-white">
        Back to shared notes
      </Link>
      <p className="mt-12 text-xs uppercase tracking-[0.18em] text-[#e45b43]">Privacy</p>
      <h1 className="mt-3 text-4xl font-semibold">Shared notes privacy notice</h1>
      <div className="mt-8 space-y-5 leading-7 text-white/70">
        <p>
          The shared notes page uses Google sign-in through Supabase Auth. When you sign in, the service receives your
          Google account identity and email address to authenticate you and maintain your session.
        </p>
        <p>
          Notes you submit are stored in the site owner&apos;s Supabase database. Signed-in users can read shared notes;
          database policies allow each user to create, edit, and delete only notes they own.
        </p>
        <p>
          Google sign-in is used only to authenticate your account. This site does not request access to Google Drive,
          Gmail, contacts, or other Google services. The site owner can remove notes or users from the Supabase project.
        </p>
        <p>
          The site is hosted by GitHub Pages. Authentication and note storage are provided by Supabase and are subject
          to their respective privacy policies and service terms.
        </p>
      </div>
    </main>
  )
}