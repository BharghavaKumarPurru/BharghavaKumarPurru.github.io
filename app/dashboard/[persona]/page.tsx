import DashboardPageClient from "./DashboardPageClient"

export async function generateStaticParams() {
  return [{ persona: "recruiter" }, { persona: "hr" }, { persona: "friend" }, { persona: "tech-stalker" }]
}

interface PageProps {
  params: Promise<{ persona: string }>
}

export default async function DashboardPage({ params }: PageProps) {
  const { persona } = await params

  return <DashboardPageClient persona={persona} />
}
