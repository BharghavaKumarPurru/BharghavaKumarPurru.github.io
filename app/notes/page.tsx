"use client"

import { useEffect, useState, type FormEvent } from "react"
import Link from "next/link"
import type { Session, SupabaseClient } from "@supabase/supabase-js"
import { ArrowLeft, Check, LogOut, NotebookPen, Plus, Trash2 } from "lucide-react"
import { getSupabaseClient } from "@/lib/supabase"

interface SharedNote {
  id: string
  owner_id: string
  content: string
  created_at: string
}

const noteEmojis = ["✨", "💛", "🌱", "☀️", "🎉", "🧠"]
const notePrompts = [
  { label: "A little win", text: "A little win from today: " },
  { label: "Remember this", text: "I want to remember: " },
  { label: "Dream it up", text: "One thing I’m looking forward to: " },
]

async function fetchNotes(client: SupabaseClient): Promise<SharedNote[]> {
  const { data, error } = await client
    .from("shared_notes")
    .select("id, owner_id, content, created_at")
    .order("created_at", { ascending: false })

  if (error) throw error
  return (data ?? []) as SharedNote[]
}

export default function SharedNotesPage() {
  const [client] = useState(getSupabaseClient)
  const [session, setSession] = useState<Session | null>(null)
  const [notes, setNotes] = useState<SharedNote[]>([])
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [newContent, setNewContent] = useState("")
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null)
  const [editContent, setEditContent] = useState("")
  const [busy, setBusy] = useState(false)
  const [loadingNotes, setLoadingNotes] = useState(false)
  const [message, setMessage] = useState("")

  useEffect(() => {
    if (!client) return

    let active = true
    client.auth.getSession().then(({ data, error }) => {
      if (!active) return
      if (error) setMessage(error.message)
      setSession(data.session)
    })

    const { data } = client.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession)
      setMessage("")
    })

    return () => {
      active = false
      data.subscription.unsubscribe()
    }
  }, [client])

  useEffect(() => {
    if (!client || !session) {
      setNotes([])
      return
    }

    let active = true
    setLoadingNotes(true)
    fetchNotes(client)
      .then((nextNotes) => {
        if (active) setNotes(nextNotes)
      })
      .catch((error: Error) => {
        if (active) setMessage(error.message)
      })
      .finally(() => {
        if (active) setLoadingNotes(false)
      })

    return () => {
      active = false
    }
  }, [client, session])

  async function handleSignIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!client) return
    setBusy(true)
    setMessage("")
    const { error } = await client.auth.signInWithPassword({ email, password })
    if (error) setMessage(error.message)
    setBusy(false)
  }

  async function handleGoogleSignIn() {
    if (!client) return
    setBusy(true)
    setMessage("")
    const { error } = await client.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/notes/` },
    })
    if (error) {
      setMessage(error.message)
      setBusy(false)
    }
  }

  async function handleSignOut() {
    if (!client) return
    const { error } = await client.auth.signOut()
    if (error) setMessage(error.message)
  }

  function addEmoji(emoji: string) {
    setNewContent((current) => `${current}${current && !current.endsWith(" ") ? " " : ""}${emoji}`)
  }

  async function handleAddNote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!client || !session || !newContent.trim()) return
    setBusy(true)
    setMessage("")
    const { error } = await client.from("shared_notes").insert({
      owner_id: session.user.id,
      content: newContent.trim(),
    })
    if (error) {
      setMessage(error.message)
    } else {
      setNewContent("")
      try {
        setNotes(await fetchNotes(client))
      } catch (fetchError) {
        setMessage((fetchError as Error).message)
      }
    }
    setBusy(false)
  }

  async function handleSaveNote(noteId: string) {
    if (!client || !editContent.trim()) return
    setBusy(true)
    setMessage("")
    const { error } = await client
      .from("shared_notes")
      .update({ content: editContent.trim() })
      .eq("id", noteId)
    if (error) {
      setMessage(error.message)
    } else {
      setNotes(await fetchNotes(client))
      setEditingNoteId(null)
    }
    setBusy(false)
  }

  async function handleDeleteNote(noteId: string) {
    if (!client) return
    setBusy(true)
    setMessage("")
    const { error } = await client.from("shared_notes").delete().eq("id", noteId)
    if (error) {
      setMessage(error.message)
    } else {
      setNotes((currentNotes) => currentNotes.filter((note) => note.id !== noteId))
    }
    setBusy(false)
  }

  return (
    <main className="min-h-screen bg-[#111311] text-[#f4f3ec]">
      <header className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-10">
        <Link href="/portfolio/" aria-label="Back to portfolio" className="inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-white">
          <ArrowLeft size={17} /> Portfolio
        </Link>
        {session && (
          <button onClick={handleSignOut} className="inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-white">
            <LogOut size={16} /> Sign out
          </button>
        )}
      </header>

      {!client ? (
        <section className="mx-auto max-w-xl px-5 py-20">
          <NotebookPen className="mb-6 text-[#e45b43]" size={30} />
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#e45b43]">Shared space</p>
          <h1 className="mb-4 text-4xl font-semibold">Two accounts. One notebook.</h1>
          <p className="leading-7 text-white/65">
            Connect this site to Supabase to enable sign-in and shared notes. Add the project URL and public anon key as
            <code className="mx-1 rounded bg-white/10 px-1.5 py-0.5 text-sm">NEXT_PUBLIC_SUPABASE_URL</code>
            and
            <code className="mx-1 rounded bg-white/10 px-1.5 py-0.5 text-sm">NEXT_PUBLIC_SUPABASE_ANON_KEY</code>
            environment variables, then redeploy.
          </p>
        </section>
      ) : !session ? (
        <section className="mx-auto grid min-h-[calc(100vh-65px)] max-w-5xl items-center gap-12 px-5 py-14 md:grid-cols-[1fr_380px] md:px-10">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#e45b43]">A little corner for your thoughts ✨</p>
            <h1 className="max-w-xl text-5xl font-semibold leading-[1.08]">Two accounts.<br />One notebook. 🌼</h1>
            <p className="mt-6 max-w-lg leading-7 text-white/60">
              Keep tiny wins, big ideas, and everything in between. Your notes stay yours; the good stuff is shared.
            </p>
            <p className="mt-5 text-sm text-white/45">New here? Continue with Google to create your account ☁️</p>
          </div>

          <form onSubmit={handleSignIn} className="space-y-5 border border-white/10 bg-white/[0.035] p-6 sm:p-8">
            <h2 className="text-xl font-medium">Come on in 👋</h2>
            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={busy}
              className="inline-flex h-11 w-full items-center justify-center gap-3 border border-white/20 bg-white px-4 font-medium text-[#202124] transition hover:bg-gray-100 disabled:opacity-60"
            >
              <span aria-hidden="true" className="font-bold text-[#4285f4]">G</span>
              Continue with Google
            </button>
            <div className="flex items-center gap-3 text-xs text-white/40">
              <span className="h-px flex-1 bg-white/10" />
              OR USE EMAIL
              <span className="h-px flex-1 bg-white/10" />
            </div>
            <label className="block space-y-2 text-sm text-white/70">
              Email
              <input
                type="email"
                autoComplete="username"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="h-11 w-full border border-white/15 bg-black/30 px-3 text-white outline-none transition focus:border-[#e45b43]"
              />
            </label>
            <label className="block space-y-2 text-sm text-white/70">
              Password
              <input
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="h-11 w-full border border-white/15 bg-black/30 px-3 text-white outline-none transition focus:border-[#e45b43]"
              />
            </label>
            {message && <p role="alert" className="text-sm text-[#ff8d79]">{message}</p>}
            <button disabled={busy} className="inline-flex h-11 w-full items-center justify-center gap-2 bg-[#e45b43] px-4 font-medium text-white transition hover:bg-[#cc4933] disabled:opacity-60">
              {busy ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </section>
      ) : (
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-10">
          <div className="mb-10">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#e45b43]">Your little note garden 🌱</p>
            <h1 className="text-4xl font-semibold">The good stuff ☀️</h1>
            <p className="mt-3 text-white/60">Hi, {session.user.email}. Write your own notes and peek at the shared ones.</p>
          </div>

          <form onSubmit={handleAddNote} className="mb-10 border border-white/10 bg-white/[0.035] p-5 sm:p-6">
            <label htmlFor="new-note" className="mb-3 block text-sm font-medium">Plant a thought 🌼</label>
            <textarea
              id="new-note"
              required
              value={newContent}
              onChange={(event) => setNewContent(event.target.value)}
              placeholder="A tiny win, a big idea, a reminder for later..."
              rows={3}
              className="w-full resize-y border border-white/15 bg-black/30 p-3 text-white outline-none transition placeholder:text-white/30 focus:border-[#e45b43]"
            />
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-1.5" aria-label="Add an emoji">
                {noteEmojis.map((emoji) => (
                  <button
                    key={emoji}
                    type="button"
                    onClick={() => addEmoji(emoji)}
                    aria-label={`Add ${emoji} to note`}
                    className="grid size-9 place-items-center border border-white/10 bg-black/20 text-lg transition hover:-translate-y-0.5 hover:border-[#e45b43]/60 hover:bg-white/10"
                  >
                    {emoji}
                  </button>
                ))}
              </div>
              <button disabled={busy || !newContent.trim()} className="inline-flex h-10 items-center gap-2 bg-[#e45b43] px-4 text-sm font-medium text-white transition hover:bg-[#cc4933] disabled:opacity-50">
                <Plus size={16} /> Add to the garden
              </button>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-white/10 pt-4">
              <span className="mr-1 text-xs text-white/45">Need a spark?</span>
              {notePrompts.map((prompt) => (
                <button
                  key={prompt.label}
                  type="button"
                  onClick={() => setNewContent(prompt.text)}
                  className="border border-white/10 px-3 py-1.5 text-xs text-white/65 transition hover:border-[#e45b43]/60 hover:text-white"
                >
                  {prompt.label}
                </button>
              ))}
            </div>
          </form>

          <div className="mb-4 flex items-baseline justify-between border-b border-white/10 pb-3">
            <h2 className="text-lg font-medium">Little things worth keeping 💌</h2>
            <span className="text-sm text-white/45">{notes.length} {notes.length === 1 ? "note" : "notes"}</span>
          </div>
          {message && <p role="alert" className="mb-4 text-sm text-[#ff8d79]">{message}</p>}
          {loadingNotes ? (
            <p className="py-10 text-sm text-white/50">Loading notes...</p>
          ) : notes.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-4xl" aria-hidden="true">🪴</p>
              <p className="mt-3 text-white/75">It’s a fresh page!</p>
              <p className="mt-1 text-sm text-white/45">Plant the first thought above and watch the garden grow.</p>
            </div>
          ) : (
            <ul className="divide-y divide-white/10">
              {notes.map((note) => {
                const isOwner = note.owner_id === session.user.id
                const isEditing = editingNoteId === note.id
                return (
                  <li key={note.id} className="py-5">
                    <div className="mb-3 flex items-center justify-between gap-4 text-xs text-white/45">
                      <span>{isOwner ? "Your note 💛" : "From your co-writer 🍊"}</span>
                      <time dateTime={note.created_at}>{new Date(note.created_at).toLocaleDateString()}</time>
                    </div>
                    {isEditing ? (
                      <textarea
                        autoFocus
                        value={editContent}
                        onChange={(event) => setEditContent(event.target.value)}
                        rows={3}
                        className="w-full resize-y border border-white/15 bg-black/30 p-3 text-white outline-none focus:border-[#e45b43]"
                      />
                    ) : (
                      <p className="whitespace-pre-wrap leading-7 text-white/85">{note.content}</p>
                    )}
                    {isOwner && (
                      <div className="mt-3 flex justify-end gap-2">
                        {isEditing ? (
                          <>
                            <button onClick={() => setEditingNoteId(null)} className="px-3 py-2 text-sm text-white/60 hover:text-white">Cancel</button>
                            <button disabled={busy} onClick={() => handleSaveNote(note.id)} className="inline-flex items-center gap-1.5 px-3 py-2 text-sm text-[#f47c65] hover:text-white disabled:opacity-50">
                              <Check size={15} /> Save
                            </button>
                          </>
                        ) : (
                          <>
                            <button onClick={() => { setEditingNoteId(note.id); setEditContent(note.content) }} className="px-3 py-2 text-sm text-white/60 hover:text-white">Edit</button>
                            <button disabled={busy} onClick={() => handleDeleteNote(note.id)} aria-label="Delete note" className="p-2 text-white/45 hover:text-[#ff8d79] disabled:opacity-50">
                              <Trash2 size={16} />
                            </button>
                          </>
                        )}
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      )}
    </main>
  )
}