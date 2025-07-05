import { getPersonaContent } from "@/lib/persona-content"
import DashboardPageClient from "./DashboardPageClient"

// Generate static params for all personas
export async function generateStaticParams() {
  return [{ persona: "recruiter" }, { persona: "hr" }, { persona: "friend" }, { persona: "tech-stalker" }]
}

export default function DashboardPage({ params }: { params: { persona: string } }) {
  const content = getPersonaContent(params.persona)

  return <DashboardPageClient content={content} persona={params.persona} />
}
