import DashboardPageClient from "./DashboardPageClient"

// Generate static params for all personas
export async function generateStaticParams() {
  return [{ persona: "recruiter" }, { persona: "client" }, { persona: "collaborator" }]
}

export default function DashboardPage({ params }: { params: { persona: string } }) {
  const persona = params.persona

  return <DashboardPageClient persona={persona} />
}
