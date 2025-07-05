export function getPersonaContent(persona: string) {
  const baseContent = {
    hero: {
      title: "BHARGHAVA KUMAR PURRU",
      description:
        "Experienced .NET Developer with 3+ years in CMS-driven websites, RESTful services, and responsive web applications",
      primaryCTA: "View Projects",
      secondaryCTA: "More Info",
    },
    rows: [],
  }

  switch (persona) {
    case "recruiter":
      return {
        ...baseContent,
        hero: {
          ...baseContent.hero,
          title: "HIRE BHARGHAVA",
          description:
            "Experienced .NET Developer with 3+ years in designing CMS-driven websites, RESTful services, and responsive web applications. Graduated with MS in Computer Science from Case Western Reserve University.",
          stats: [
            { value: "3+", label: "Years Experience" },
            { value: "CTO", label: "Current Role" },
            { value: "40%", label: "Deployment Time Reduction" },
            { value: "HIPAA", label: "Compliant Systems" },
          ],
          primaryCTA: "Download Resume",
          secondaryCTA: "Schedule Interview",
          audioEnabled: true,
          audioSrc:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bharghava%20Kumar%20Purru_%20_NET%20Development%20%26%20Leadership-ciYLS2ttBQEfbEWLP3OziogYgz8Za2.mp3",
          audioTitle: "Listen to my professional summary",
        },
        rows: [
          {
            title: "Featured Projects",
            type: "projects",
            items: [
              {
                title: "Document Management System",
                role: "Full Stack Developer",
                description:
                  "Automated document management system with AI routing and approval workflows for departments like HR, Finance, and Management.",
                tech: ["React.js", "TypeScript", ".NET Core", "SQL Server"],
                features: [
                  "AI-powered document routing to appropriate departments",
                  "Seamless approval/rejection workflow with feedback system",
                  "Automated document processing reducing manual work",
                  "Enhanced productivity and smooth document flow",
                ],
                metrics: [
                  { value: "100%", label: "Automation Rate" },
                  { value: "50%", label: "Time Saved" },
                ],
                date: "01-2025",
              },
              {
                title: "Chatbot Agent for Companies",
                role: "AI Developer",
                description:
                  "PDF-powered chatbot using LangChain and ChatGPT API for company-related queries with Huggingface integration.",
                tech: ["Python", "Streamlit", "LangChain", "ChatGPT API", "Huggingface"],
                features: [
                  "PDF analysis and interactive company information",
                  "Optimized chatbot for efficient, accurate responses",
                  "Scalable solution with Huggingface language models",
                  "Real-time query processing and response generation",
                ],
                date: "01-2025",
              },
              {
                title: "Cloud Resume and Chatbot Platform",
                role: "Cloud Developer",
                description:
                  "Interactive resume platform with dynamic content, visitor analytics, and Azure OpenAI-powered chatbot.",
                tech: [".NET Core", "Azure OpenAI", "Cosmos DB", "Blob Storage", "Azure Functions"],
                features: [
                  "Dynamic content and visitor analytics",
                  "Azure OpenAI-powered chatbot for resume queries",
                  "CI/CD workflows with GitHub Actions",
                  "Robust testing using xUnit framework",
                ],
                date: "11-2024",
              },
            ],
          },
          {
            title: "Current Role & Experience",
            type: "experience",
            items: [
              {
                title: "Chief Technology Officer",
                subtitle: "Hilde B Foundation (May 2025 - Present)",
                description:
                  "Leading end-to-end architecture across Umbraco CMS, React Native, Next.js, .NET Web API, and Supabase",
                icon: "CTO",
              },
              {
                title: "Software Engineer Intern",
                subtitle: "Tharro Labs Inc. (April 2025 - May 2025)",
                description: "Built cross-platform mobile apps with React Native and .NET Web API backends",
                icon: "DEV",
              },
              {
                title: "Full Stack .NET Developer",
                subtitle: "HCL Technologies (July 2022 - Dec 2023)",
                description: "Developed content-driven web applications using Umbraco CMS and ASP.NET Core",
                icon: "NET",
              },
            ],
          },
          {
            title: "Technical Skills",
            type: "skills",
            items: [
              { title: "C# & .NET", subtitle: "3+ years", icon: "C#" },
              { title: "React.js", subtitle: "Expert level", icon: "REACT" },
              { title: "Umbraco CMS", subtitle: "Professional", icon: "CMS" },
              { title: "Azure Cloud", subtitle: "DevOps & Services", icon: "AZURE" },
            ],
          },
        ],
      }

    case "hr":
      return {
        ...baseContent,
        hero: {
          ...baseContent.hero,
          title: "MEET BHARGHAVA",
          description:
            "MS Computer Science graduate from Case Western Reserve University with strong leadership experience as CTO and proven track record in team building and mentoring.",
          primaryCTA: "View Background",
          secondaryCTA: "Cultural Fit",
          audioEnabled: true,
          audioSrc:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bharghava%20Kumar%20Purru_%20_NET%20Development%20%26%20Leadership-ciYLS2ttBQEfbEWLP3OziogYgz8Za2.mp3",
          audioTitle: "Hear about my background and culture fit",
        },
        rows: [
          {
            title: "Education & Academic Journey",
            type: "education",
            items: [
              {
                title: "MS Computer Science",
                subtitle: "Case Western Reserve University (Aug 2023 - May 2025)",
                description: "Focus on Software Engineering, Distributed Systems, and AI",
                icon: "MS",
              },
              {
                title: "Teaching Assistant",
                subtitle: "Case Western Reserve University (July 2024 - Jan 2025)",
                description: "Supported 60+ students on systems architecture and distributed design",
                icon: "TA",
              },
            ],
          },
          {
            title: "Leadership & Team Building",
            type: "leadership",
            items: [
              {
                title: "CTO Leadership",
                subtitle: "Built cross-functional team",
                description: "Hired and mentored Junior Developer and QA Engineer, improving delivery velocity",
                icon: "LEAD",
              },
              {
                title: "Mentoring",
                subtitle: "Student & Team Development",
                description: "Provided in-depth support for 60+ students and junior developers",
                icon: "MENTOR",
              },
            ],
          },
        ],
      }

    case "friend":
      return {
        ...baseContent,
        hero: {
          ...baseContent.hero,
          title: "HEY THERE!",
          description:
            "Welcome to the fun side! Here's what I'm up to when I'm not coding amazing .NET applications...",
          primaryCTA: "Let's Chat",
          secondaryCTA: "Send Message",
        },
        rows: [
          {
            title: "Current Life Updates",
            type: "personal",
            items: [
              {
                title: "MS Graduate",
                subtitle: "Case Western Reserve University",
                description: "Recently graduated with MS in Computer Science, now focusing on CTO responsibilities",
              },
              {
                title: "Cleveland Explorer",
                subtitle: "Discovering Ohio",
                description: "From India to Cleveland - loving the journey!",
              },
            ],
          },
          {
            title: "What I'm Learning",
            type: "learning",
            items: [
              {
                title: "Azure OpenAI",
                subtitle: "AI Integration",
                description: "Building intelligent chatbots and automation",
              },
              {
                title: "React Native",
                subtitle: "Mobile Development",
                description: "Cross-platform mobile apps",
              },
            ],
          },
        ],
      }

    case "tech-stalker":
      return {
        ...baseContent,
        hero: {
          ...baseContent.hero,
          title: "DEEP DIVE MODE",
          description:
            "Welcome to the technical deep dive. Here's everything about my tech stack, architecture decisions, and the systems I've built.",
          stats: [
            { value: "8+", label: "Technologies" },
            { value: "10+", label: "Projects" },
            { value: "3+", label: "Years Experience" },
            { value: "HIPAA", label: "Compliant Systems" },
          ],
          primaryCTA: "View Code",
          secondaryCTA: "Architecture Docs",
        },
        rows: [
          {
            title: "Full Stack Architecture",
            type: "tech-deep",
            items: [
              {
                title: "Frontend Ecosystem",
                subtitle: "React, Angular, TypeScript",
                description: "Modern SPA development with component-based architecture",
                tech: ["React.js", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3"],
              },
              {
                title: "Backend Powerhouse",
                subtitle: ".NET Core, ASP.NET, Web APIs",
                description: "Scalable API development and microservices architecture",
                tech: [".NET Core", "ASP.NET Core", "C#", "RESTful APIs", "Entity Framework"],
              },
            ],
          },
          {
            title: "Technical Achievements",
            type: "metrics",
            items: [
              {
                title: "40% Deployment Time Reduction",
                subtitle: "CI/CD Pipeline Optimization",
                description: "Established automated workflows and engineering standards",
              },
              {
                title: "HIPAA Compliance",
                subtitle: "Security & Privacy",
                description: "Built secure, encrypted communication systems",
              },
            ],
          },
        ],
      }

    default:
      return baseContent
  }
}
