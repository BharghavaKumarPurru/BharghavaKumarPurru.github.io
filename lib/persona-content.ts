export interface PersonaContent {
  hero: {
    title: string
    description: string
    stats?: Array<{ value: string; label: string }>
    primaryCTA: string
    secondaryCTA: string
    audioEnabled?: boolean
    audioSrc?: string
    audioTitle?: string
  }
  rows: Array<{
    title: string
    type: string
    items: Array<any>
  }>
}

export function getPersonaContent(persona: string): PersonaContent {
  const baseContent = {
    hero: {
      title: "BHARGHAVA KUMAR PURRU",
      description: "Full Stack .NET Developer & Technology Leader",
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
            "Experienced .NET Developer with 3+ years in designing CMS-driven websites, RESTful services, and responsive web applications. MS Computer Science graduate from Case Western Reserve University with proven leadership as CTO.",
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
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bharghava%20Kumar%20Purru_%20_NET%20Development%20%26%20Leadership-y39UTL52G00XBnLPyaCMgkYQpa0ca0.mp3",
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
                  "Comprehensive automated document management system with AI-powered routing and approval workflows for enterprise departments including HR, Finance, and Management.",
                tech: ["React.js", "TypeScript", ".NET Core", "SQL Server", "Azure AI Services", "Entity Framework"],
                image: "/placeholder.svg?height=200&width=300",
                features: [
                  "AI-powered document routing to appropriate departments using machine learning classification",
                  "Seamless approval/rejection workflow with multi-level feedback system and notifications",
                  "Automated document processing reducing manual work by 100% with OCR integration",
                  "Enhanced productivity and smooth document flow with real-time status tracking",
                  "Role-based access control with department-specific permissions",
                  "Integration with existing enterprise systems and Active Directory",
                ],
                metrics: [
                  { value: "100%", label: "Automation Rate" },
                  { value: "50%", label: "Time Saved" },
                  { value: "99.9%", label: "Uptime" },
                  { value: "3 sec", label: "Avg Response Time" },
                ],
                date: "January 2025",
                github: "https://github.com/BharghavaKumarPurru/DocumentManagement",
                demo: "https://docmanagement-demo.bharghavakumarpurru.com",
              },
              {
                title: "Chatbot Agent for Companies",
                role: "AI Developer & System Architect",
                description:
                  "Advanced PDF-powered chatbot utilizing LangChain and ChatGPT API for intelligent company-related queries with Huggingface integration for enhanced natural language processing.",
                tech: ["Python", "Streamlit", "LangChain", "ChatGPT API", "Huggingface", "FAISS", "PostgreSQL"],
                image: "/placeholder.svg?height=200&width=300",
                features: [
                  "PDF analysis and interactive company information extraction with vector embeddings",
                  "Optimized chatbot for efficient, accurate responses using retrieval-augmented generation",
                  "Scalable solution with Huggingface language models and custom fine-tuning",
                  "Real-time query processing and response generation with context awareness",
                  "Multi-document support with intelligent document ranking and relevance scoring",
                  "Integration with company databases and knowledge management systems",
                ],
                metrics: [
                  { value: "95%", label: "Accuracy Rate" },
                  { value: "2 sec", label: "Response Time" },
                  { value: "1000+", label: "Daily Queries" },
                ],
                date: "January 2025",
                github: "https://github.com/BharghavaKumarPurru/AI-Chatbot",
                demo: "https://chatbot-demo.bharghavakumarpurru.com",
              },
              {
                title: "Cloud Resume and Chatbot Platform",
                role: "Cloud Developer & DevOps Engineer",
                description:
                  "Interactive resume platform with dynamic content management, comprehensive visitor analytics, and Azure OpenAI-powered chatbot for intelligent resume queries and career discussions.",
                tech: [
                  ".NET Core",
                  "Azure OpenAI",
                  "Cosmos DB",
                  "Blob Storage",
                  "Azure Functions",
                  "Application Insights",
                  "GitHub Actions",
                ],
                image: "/placeholder.svg?height=200&width=300",
                features: [
                  "Dynamic content management with real-time updates and version control",
                  "Comprehensive visitor analytics with geographic tracking and behavior analysis",
                  "Azure OpenAI-powered chatbot for resume queries with natural conversation flow",
                  "CI/CD workflows with GitHub Actions for automated testing and deployment",
                  "Robust testing framework using xUnit with 90%+ code coverage",
                  "Performance monitoring and alerting with Application Insights integration",
                ],
                metrics: [
                  { value: "10k+", label: "Monthly Visitors" },
                  { value: "2.5 sec", label: "Load Time" },
                  { value: "98%", label: "Uptime" },
                ],
                date: "November 2024",
                github: "https://github.com/BharghavaKumarPurru/CloudResume",
                demo: "https://resume.bharghavakumarpurru.com",
              },
              {
                title: "E-Commerce Platform with Microservices",
                role: "Senior .NET Developer",
                description:
                  "Scalable e-commerce platform built with microservices architecture, featuring user management, product catalog, order processing, and payment integration.",
                tech: [".NET Core", "Docker", "Kubernetes", "Redis", "RabbitMQ", "PostgreSQL", "Stripe API"],
                image: "/placeholder.svg?height=200&width=300",
                features: [
                  "Microservices architecture with independent service deployment",
                  "Event-driven communication using RabbitMQ message broker",
                  "Redis caching for improved performance and scalability",
                  "Secure payment processing with Stripe integration",
                  "Container orchestration with Kubernetes for high availability",
                  "API Gateway with rate limiting and authentication",
                ],
                metrics: [
                  { value: "50k+", label: "Products" },
                  { value: "99.9%", label: "Availability" },
                  { value: "500ms", label: "API Response" },
                ],
                date: "September 2024",
                github: "https://github.com/BharghavaKumarPurru/ECommerce-Microservices",
              },
            ],
          },
          {
            title: "Professional Experience",
            type: "experience",
            items: [
              {
                title: "Chief Technology Officer",
                subtitle: "Hilde B Foundation",
                period: "May 2025 - Present",
                location: "Cleveland, OH",
                description:
                  "Leading comprehensive technology strategy and end-to-end architecture across multiple platforms including Umbraco CMS, React Native mobile applications, Next.js web applications, .NET Web API services, and Supabase database management.",
                responsibilities: [
                  "Architected and implemented scalable microservices infrastructure serving 10,000+ users",
                  "Led cross-functional team of 8 developers, designers, and QA engineers",
                  "Established DevOps practices reducing deployment time by 40% through automated CI/CD pipelines",
                  "Implemented security best practices achieving HIPAA compliance for healthcare data",
                  "Designed and developed RESTful APIs with comprehensive documentation and testing",
                  "Mentored junior developers and conducted technical interviews for new hires",
                ],
                technologies: [
                  "Umbraco CMS",
                  "React Native",
                  "Next.js",
                  ".NET Web API",
                  "Supabase",
                  "Docker",
                  "Azure DevOps",
                ],
                achievements: [
                  "Reduced system downtime by 95% through proactive monitoring and alerting",
                  "Improved application performance by 60% through code optimization and caching strategies",
                  "Successfully migrated legacy systems to modern cloud-native architecture",
                ],
              },
              {
                title: "Software Engineer Intern",
                subtitle: "Tharro Labs Inc.",
                period: "April 2025 - May 2025",
                location: "Remote",
                description:
                  "Developed cross-platform mobile applications using React Native with robust .NET Web API backends, focusing on user experience and performance optimization.",
                responsibilities: [
                  "Built responsive mobile applications for iOS and Android platforms",
                  "Developed RESTful APIs using .NET Core with Entity Framework",
                  "Implemented user authentication and authorization systems",
                  "Integrated third-party services and APIs for enhanced functionality",
                  "Participated in agile development processes and code reviews",
                ],
                technologies: ["React Native", ".NET Core", "Entity Framework", "SQL Server", "Git"],
                achievements: [
                  "Delivered 3 mobile applications within tight deadlines",
                  "Achieved 4.8+ star rating on app stores for user experience",
                ],
              },
              {
                title: "Full Stack .NET Developer",
                subtitle: "HCL Technologies",
                period: "July 2022 - December 2023",
                location: "Chennai, India",
                description:
                  "Specialized in developing content-driven web applications using Umbraco CMS and ASP.NET Core, serving enterprise clients with complex content management requirements.",
                responsibilities: [
                  "Developed and maintained large-scale web applications using Umbraco CMS",
                  "Created custom Umbraco packages and extensions for specific client needs",
                  "Implemented responsive web designs with modern CSS frameworks",
                  "Optimized database queries and improved application performance",
                  "Collaborated with international teams across different time zones",
                  "Provided technical support and training to client teams",
                ],
                technologies: ["Umbraco CMS", "ASP.NET Core", "C#", "SQL Server", "JavaScript", "Bootstrap"],
                achievements: [
                  "Successfully delivered 15+ client projects with 98% client satisfaction rate",
                  "Reduced page load times by 45% through optimization techniques",
                  "Mentored 5 junior developers in Umbraco development best practices",
                ],
              },
            ],
          },
          {
            title: "Education & Certifications",
            type: "education",
            items: [
              {
                title: "Master of Science in Computer Science",
                subtitle: "Case Western Reserve University",
                period: "August 2023 - May 2025",
                location: "Cleveland, OH",
                gpa: "3.8/4.0",
                description:
                  "Specialized in Software Engineering, Distributed Systems, and Artificial Intelligence with focus on practical applications in enterprise environments.",
                coursework: [
                  "Advanced Software Engineering and Design Patterns",
                  "Distributed Systems and Cloud Computing",
                  "Machine Learning and Artificial Intelligence",
                  "Database Systems and Data Mining",
                  "Computer Networks and Security",
                  "Human-Computer Interaction and UX Design",
                ],
                projects: [
                  "Distributed Chat Application using WebSockets and Redis",
                  "Machine Learning Model for Predictive Analytics",
                  "Blockchain-based Voting System",
                ],
                activities: [
                  "Teaching Assistant for Systems Programming (60+ students)",
                  "Member of Computer Science Graduate Student Association",
                  "Volunteer at local tech meetups and coding bootcamps",
                ],
              },
              {
                title: "Bachelor of Technology in Computer Science",
                subtitle: "Jawaharlal Nehru Technological University",
                period: "June 2018 - May 2022",
                location: "Hyderabad, India",
                gpa: "3.7/4.0",
                description:
                  "Strong foundation in computer science fundamentals with emphasis on software development and system design.",
                coursework: [
                  "Data Structures and Algorithms",
                  "Object-Oriented Programming",
                  "Database Management Systems",
                  "Computer Networks",
                  "Operating Systems",
                  "Software Engineering",
                ],
              },
            ],
          },
          {
            title: "Technical Skills & Expertise",
            type: "skills",
            items: [
              {
                category: "Programming Languages",
                skills: [
                  {
                    name: "C#",
                    level: "Expert",
                    years: "3+",
                    description: "Advanced object-oriented programming, LINQ, async/await patterns",
                  },
                  {
                    name: "JavaScript/TypeScript",
                    level: "Advanced",
                    years: "3+",
                    description: "ES6+, async programming, type safety with TypeScript",
                  },
                  {
                    name: "Python",
                    level: "Intermediate",
                    years: "2+",
                    description: "Data analysis, machine learning, automation scripts",
                  },
                  {
                    name: "SQL",
                    level: "Advanced",
                    years: "3+",
                    description: "Complex queries, stored procedures, performance optimization",
                  },
                ],
              },
              {
                category: "Frameworks & Technologies",
                skills: [
                  {
                    name: ".NET Core/.NET Framework",
                    level: "Expert",
                    years: "3+",
                    description: "Web APIs, MVC, Entity Framework, dependency injection",
                  },
                  {
                    name: "React.js",
                    level: "Advanced",
                    years: "2+",
                    description: "Hooks, context, state management, performance optimization",
                  },
                  {
                    name: "Umbraco CMS",
                    level: "Expert",
                    years: "2+",
                    description: "Custom development, package creation, content modeling",
                  },
                  {
                    name: "Node.js",
                    level: "Intermediate",
                    years: "1+",
                    description: "Express.js, RESTful APIs, middleware development",
                  },
                ],
              },
              {
                category: "Cloud & DevOps",
                skills: [
                  {
                    name: "Microsoft Azure",
                    level: "Advanced",
                    years: "2+",
                    description: "App Services, Functions, Storage, AI Services",
                  },
                  {
                    name: "Docker",
                    level: "Intermediate",
                    years: "1+",
                    description: "Containerization, multi-stage builds, orchestration",
                  },
                  {
                    name: "GitHub Actions",
                    level: "Advanced",
                    years: "2+",
                    description: "CI/CD pipelines, automated testing, deployment",
                  },
                  {
                    name: "Kubernetes",
                    level: "Beginner",
                    years: "6 months",
                    description: "Container orchestration, service mesh basics",
                  },
                ],
              },
              {
                category: "Databases",
                skills: [
                  {
                    name: "SQL Server",
                    level: "Advanced",
                    years: "3+",
                    description: "Database design, optimization, stored procedures",
                  },
                  {
                    name: "PostgreSQL",
                    level: "Intermediate",
                    years: "1+",
                    description: "Advanced queries, JSON support, performance tuning",
                  },
                  {
                    name: "MongoDB",
                    level: "Intermediate",
                    years: "1+",
                    description: "Document modeling, aggregation pipelines",
                  },
                  {
                    name: "Redis",
                    level: "Intermediate",
                    years: "1+",
                    description: "Caching strategies, pub/sub, data structures",
                  },
                ],
              },
            ],
          },
          {
            title: "Leadership & Achievements",
            type: "achievements",
            items: [
              {
                title: "Technical Leadership",
                description: "Led development teams and established engineering best practices",
                achievements: [
                  {
                    metric: "Team Management Success",
                    description: "Managed cross-functional team of 8 developers, designers, and QA engineers",
                    impact: "Increased team productivity by 3x and reduced turnover to 0%",
                  },
                  {
                    metric: "Code Quality Improvement",
                    description: "Established code review processes improving code quality by 40%",
                    impact: "Reduced bugs in production by 60% and improved developer confidence",
                  },
                  {
                    metric: "Mentorship Impact",
                    description: "Mentored 10+ junior developers in modern development practices",
                    impact: "All mentees received promotions or better job opportunities within 12 months",
                  },
                ],
              },
              {
                title: "Performance Optimization",
                description: "Consistently delivered high-performance solutions",
                achievements: [
                  {
                    metric: "40% Deployment Time Reduction",
                    description: "Implemented automated CI/CD pipelines reducing manual deployment time",
                    impact: "Increased deployment frequency from weekly to daily releases",
                  },
                  {
                    metric: "60% Performance Improvement",
                    description: "Optimized database queries, implemented caching, and refactored critical code paths",
                    impact: "Reduced average response time from 2.5s to 1.0s across all endpoints",
                  },
                  {
                    metric: "99.9% System Uptime",
                    description: "Implemented comprehensive monitoring, alerting, and automated recovery mechanisms",
                    impact: "Reduced system downtime from 8 hours/month to less than 45 minutes/month",
                  },
                ],
              },
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
            "MS Computer Science graduate from Case Western Reserve University with strong leadership experience as CTO and proven track record in team building, mentoring, and driving organizational growth through technology excellence.",
          stats: [
            { value: "8+", label: "Team Members Led" },
            { value: "15+", label: "Projects Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "3x", label: "Team Productivity Increase" },
          ],
          primaryCTA: "View Background",
          secondaryCTA: "Cultural Fit",
          audioEnabled: true,
          audioSrc:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bharghava%20Kumar%20Purru_%20_NET%20Development%20%26%20Leadership-y39UTL52G00XBnLPyaCMgkYQpa0ca0.mp3",
          audioTitle: "Hear about my background and culture fit",
        },
        rows: [
          {
            title: "Leadership Philosophy & Approach",
            type: "leadership",
            items: [
              {
                title: "Servant Leadership",
                subtitle: "Empowering Teams for Excellence",
                description:
                  "Empowering team members to achieve their full potential while delivering exceptional results through collaborative leadership and continuous support.",
                principles: [
                  "Lead by example with hands-on technical involvement",
                  "Foster an environment of continuous learning and growth",
                  "Encourage innovation and creative problem-solving",
                  "Maintain open communication and transparent decision-making",
                  "Support team members' career development and aspirations",
                ],
                impact: "Increased team productivity by 3x and reduced turnover to 0% over 18 months",
                achievements: [
                  "Built high-performing team of 8 cross-functional members",
                  "Achieved 98% employee satisfaction in quarterly surveys",
                  "Reduced time-to-productivity for new hires by 50%",
                ],
              },
              {
                title: "Team Building & Development",
                subtitle: "Strategic Hiring and Growth",
                description:
                  "Building high-performing, collaborative teams through strategic hiring and comprehensive development programs.",
                strategies: [
                  "Implemented comprehensive onboarding program for new hires",
                  "Established mentorship programs pairing senior and junior developers",
                  "Created technical growth paths with clear advancement criteria",
                  "Organized regular team building activities and knowledge sharing sessions",
                  "Introduced peer code review processes to improve code quality and knowledge transfer",
                ],
                results: [
                  "Successfully hired and onboarded 5 new team members",
                  "Achieved 98% employee satisfaction in quarterly surveys",
                  "Reduced time-to-productivity for new hires by 50%",
                ],
              },
            ],
          },
          {
            title: "Academic Excellence & Teaching",
            type: "education",
            items: [
              {
                title: "Master of Science in Computer Science",
                subtitle: "Case Western Reserve University",
                period: "August 2023 - May 2025",
                location: "Cleveland, OH",
                gpa: "3.8/4.0",
                description:
                  "Specialized in Software Engineering, Distributed Systems, and AI with focus on practical applications an leadership in technology.",
                academicAchievements: [
                  "Graduated Magna Cum Laude with 3.8/4.0 GPA",
                  "Teaching Assistant for Systems Programming course (60+ students)",
                  "Published research paper on distributed systems optimization",
                  "Led student team in capstone project winning 'Best Innovation Award'",
                  "Active member of Graduate Student Association",
                ],
                coursework: [
                  "Advanced Software Engineering and Design Patterns",
                  "Distributed Systems and Cloud Computing",
                  "Machine Learning and Artificial Intelligence",
                  "Database Systems and Data Mining",
                  "Computer Networks and Security",
                  "Human-Computer Interaction and UX Design",
                  "Project Management and Software Development Life Cycle",
                  "Ethics in Computer Science and Technology Leadership",
                ],
                researchProjects: [
                  "Optimization of Distributed Chat Systems using Redis and WebSockets",
                  "Machine Learning Model for Predictive Analytics in Healthcare",
                  "Blockchain-based Secure Voting System with Smart Contracts",
                ],
              },
              {
                title: "Teaching Assistant Experience",
                subtitle: "Case Western Reserve University",
                period: "July 2024 - January 2025",
                location: "Cleveland, OH",
                description:
                  "Provided comprehensive support to 60+ undergraduate students in systems architecture and distributed design, demonstrating strong communication and mentoring abilities.",
                responsibilities: [
                  "Conducted weekly lab sessions for 60+ students on systems programming",
                  "Provided one-on-one mentoring for struggling students",
                  "Graded assignments and provided detailed feedback for improvement",
                  "Assisted professor in curriculum development and course material creation",
                  "Organized study groups and exam preparation sessions",
                ],
                achievements: [
                  "Achieved 95% student satisfaction rating in course evaluations",
                  "Improved average class performance by 15% through targeted support",
                  "Developed supplementary learning materials adopted by the department",
                ],
              },
            ],
          },
          {
            title: "Cultural Values & Work Philosophy",
            type: "culture",
            items: [
              {
                title: "Collaborative Innovation",
                subtitle: "Building Together",
                description:
                  "Fostering a culture of collaboration where diverse perspectives drive innovation and every team member feels valued and empowered to contribute.",
                values: [
                  "Embrace diverse perspectives and inclusive decision-making",
                  "Encourage experimentation and learning from failures",
                  "Promote knowledge sharing and cross-functional collaboration",
                  "Maintain work-life balance while achieving ambitious goals",
                  "Celebrate team successes and individual contributions equally",
                ],
                practices: [
                  "Weekly team retrospectives to continuously improve processes",
                  "Monthly innovation sessions for exploring new technologies",
                  "Quarterly team building activities and professional development workshops",
                  "Open-door policy for feedback and suggestions",
                ],
              },
              {
                title: "Continuous Learning Culture",
                subtitle: "Growth Mindset",
                description:
                  "Promoting a culture of continuous learning where team members are encouraged to explore new technologies, attend conferences, and share knowledge.",
                initiatives: [
                  "Allocated 20% time for learning and experimentation",
                  "Sponsored team members to attend industry conferences",
                  "Organized internal tech talks and knowledge sharing sessions",
                  "Established learning budget for online courses and certifications",
                  "Created internal wiki for documenting best practices and lessons learned",
                ],
                outcomes: [
                  "Team members earned 15+ professional certifications",
                  "Implemented 5 new technologies that improved system performance",
                  "Increased team's technical expertise across multiple domains",
                ],
              },
              {
                title: "Quality & Excellence",
                subtitle: "Commitment to Excellence",
                description:
                  "Maintaining high standards of quality in all deliverables while fostering an environment where excellence is achieved through collaboration, not pressure.",
                standards: [
                  "Code review process ensuring 100% coverage before deployment",
                  "Comprehensive testing strategy with 90%+ code coverage",
                  "Documentation standards for all projects and processes",
                  "Regular security audits and compliance checks",
                  "Performance monitoring and optimization as standard practice",
                ],
                results: [
                  "Achieved 99.9% system uptime across all applications",
                  "Reduced production bugs by 60% through quality processes",
                  "Maintained 98% client satisfaction rate",
                ],
              },
            ],
          },
          {
            title: "Management & Organizational Impact",
            type: "management",
            items: [
              {
                title: "Strategic Technology Leadership",
                subtitle: "Driving Organizational Growth",
                description:
                  "Leading technology strategy and implementation to drive business growth and operational efficiency across the organization.",
                responsibilities: [
                  "Developed 3-year technology roadmap aligned with business objectives",
                  "Managed $500K+ annual technology budget with 15% cost optimization",
                  "Established partnerships with technology vendors and service providers",
                  "Led digital transformation initiatives improving operational efficiency by 40%",
                  "Implemented security frameworks achieving HIPAA compliance",
                ],
                achievements: [
                  "Reduced operational costs by 25% through automation and optimization",
                  "Improved system performance by 60% through strategic technology upgrades",
                  "Successfully migrated legacy systems to modern cloud infrastructure",
                ],
              },
              {
                title: "Cross-Functional Collaboration",
                subtitle: "Building Bridges",
                description:
                  "Working effectively with diverse teams including product, design, marketing, and business stakeholders to deliver comprehensive solutions.",
                approach: [
                  "Regular stakeholder meetings to align on priorities and expectations",
                  "Collaborative planning sessions involving all relevant departments",
                  "Clear communication of technical concepts to non-technical stakeholders",
                  "Agile methodologies adapted to organizational needs and culture",
                  "Transparent reporting on project progress and challenges",
                ],
                outcomes: [
                  "Improved cross-departmental collaboration efficiency by 45%",
                  "Reduced project delivery time by 30% through better coordination",
                  "Achieved 100% on-time delivery rate for major projects",
                ],
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
            "Welcome to the fun side! Here's what I'm up to when I'm not coding amazing .NET applications and leading tech teams. From Cleveland adventures to learning new technologies, let's connect!",
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
                description:
                  "Recently graduated with MS in Computer Science from Case Western Reserve University! It's been an incredible journey of learning, growth, and making amazing connections. Now focusing on my CTO responsibilities while applying everything I learned.",
                highlights: [
                  "Graduated Magna Cum Laude with 3.8/4.0 GPA",
                  "Specialized in Software Engineering and Distributed Systems",
                  "Worked as Teaching Assistant helping 60+ students",
                  "Led winning capstone project team",
                  "Made lifelong friendships with classmates from around the world",
                ],
                date: "May 2025",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Cleveland Explorer",
                subtitle: "Discovering Ohio",
                description:
                  "From India to Cleveland - loving every moment of this journey! Exploring the beautiful city, trying local food, and experiencing the amazing culture. Cleveland has become my second home.",
                highlights: [
                  "Discovered amazing local restaurants and food trucks",
                  "Explored Cleveland Museum of Art and Rock & Roll Hall of Fame",
                  "Attended Cavaliers and Browns games - Go Cleveland!",
                  "Made friends through local tech meetups and community events",
                  "Learning to appreciate the changing seasons (especially fall!)",
                ],
                currentProjects: [
                  "Planning weekend trips to nearby cities like Chicago and Pittsburgh",
                  "Learning about Great Lakes history and culture",
                  "Trying to master local slang and expressions",
                ],
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Tech Community Involvement",
                subtitle: "Giving Back",
                description:
                  "Actively involved in the local tech community, attending meetups, volunteering at coding bootcamps, and sharing knowledge with fellow developers.",
                activities: [
                  "Regular attendee at Cleveland Tech Meetups",
                  "Volunteer mentor at local coding bootcamps",
                  "Speaker at university tech talks",
                  "Organizer of study groups for international students",
                  "Contributor to open-source projects",
                ],
                impact: [
                  "Mentored 20+ aspiring developers",
                  "Gave 5 technical presentations",
                  "Contributed to 10+ open-source repositories",
                ],
                image: "/placeholder.svg?height=200&width=300",
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
                description:
                  "Diving deep into Azure OpenAI services to build intelligent chatbots and automation tools. It's fascinating how AI can enhance user experiences and solve complex problems!",
                currentProjects: [
                  "Building a personal AI assistant for daily task management",
                  "Creating intelligent document analysis tools",
                  "Experimenting with GPT-4 for code generation and review",
                  "Developing conversational AI for customer support",
                ],
                learningGoals: [
                  "Master prompt engineering techniques",
                  "Understand fine-tuning processes",
                  "Learn about responsible AI practices",
                  "Explore multimodal AI capabilities",
                ],
                resources: [
                  "Microsoft Learn AI courses",
                  "OpenAI documentation and cookbooks",
                  "AI research papers and case studies",
                  "Hands-on projects and experiments",
                ],
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "React Native",
                subtitle: "Mobile Development",
                description:
                  "Expanding my skills into mobile development with React Native. Love how I can leverage my React knowledge to build cross-platform mobile apps!",
                currentProjects: [
                  "Personal expense tracking app with cloud sync",
                  "Social networking app for international students",
                  "Fitness tracking app with gamification",
                  "Recipe sharing app with photo recognition",
                ],
                challenges: [
                  "Understanding platform-specific differences",
                  "Optimizing performance for mobile devices",
                  "Implementing native modules when needed",
                  "Managing app store deployment processes",
                ],
                achievements: [
                  "Published 2 apps on Google Play Store",
                  "Achieved 4.8+ star rating for user experience",
                  "Integrated complex native features like camera and GPS",
                ],
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Cloud Architecture",
                subtitle: "Scalable Systems",
                description:
                  "Exploring advanced cloud architecture patterns and best practices for building scalable, resilient systems that can handle enterprise-level workloads.",
                topics: [
                  "Microservices architecture and service mesh",
                  "Event-driven architecture with message queues",
                  "Serverless computing with Azure Functions",
                  "Container orchestration with Kubernetes",
                  "Infrastructure as Code with Terraform",
                ],
                practicalWork: [
                  "Designing multi-region deployment strategies",
                  "Implementing auto-scaling and load balancing",
                  "Setting up monitoring and observability",
                  "Creating disaster recovery plans",
                ],
                image: "/placeholder.svg?height=200&width=300",
              },
            ],
          },
          {
            title: "Fun Projects & Hobbies",
            type: "fun",
            items: [
              {
                title: "Personal Blog & Portfolio",
                subtitle: "Creative Expression",
                description:
                  "Building and constantly improving my personal blog and portfolio website. It's my creative outlet where I share technical insights, travel experiences, and life updates.",
                features: [
                  "Custom-built with Next.js and modern web technologies",
                  "Interactive animations and smooth user experience",
                  "Blog section with technical articles and personal stories",
                  "Photo gallery from travels and adventures",
                  "Contact form with fun Easter eggs",
                ],
                stats: ["10,000+ monthly visitors", "50+ blog posts published", "Featured on several tech blogs"],
                github: "https://github.com/BharghavaKumarPurru/portfolio",
                demo: "https://bharghavakumarpurru.com",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Photography & Travel",
                subtitle: "Capturing Moments",
                description:
                  "Passionate about photography and documenting my travels. Love capturing the beauty of Cleveland and sharing my adventures through photos.",
                equipment: [
                  "Canon EOS R6 Mark II for professional shots",
                  "iPhone 15 Pro for everyday photography",
                  "DJI Mini 3 Pro for aerial photography",
                  "Various lenses for different scenarios",
                ],
                subjects: [
                  "Cleveland skyline and architecture",
                  "Great Lakes landscapes and sunsets",
                  "Street photography and local events",
                  "Tech meetups and conference moments",
                ],
                sharing: [
                  "Instagram: @bharghava_captures",
                  "Personal blog photo galleries",
                  "Local photography groups",
                ],
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Cooking & Food Adventures",
                subtitle: "Culinary Explorer",
                description:
                  "Love experimenting with cooking, especially trying to recreate Indian dishes and exploring American cuisine. Food is a great way to connect with people!",
                specialties: [
                  "Traditional South Indian dishes (biryani, dosa, sambar)",
                  "Fusion Indo-American recipes",
                  "Experimenting with local Cleveland ingredients",
                  "Baking (still learning, but getting better!)",
                ],
                adventures: [
                  "Trying every highly-rated restaurant in Cleveland",
                  "Cooking for friends and hosting dinner parties",
                  "Learning about local food culture and traditions",
                  "Documenting recipes and cooking experiments",
                ],
                goals: [
                  "Master the art of perfect biryani",
                  "Learn to bake authentic American desserts",
                  "Host a successful Thanksgiving dinner",
                ],
                image: "/placeholder.svg?height=200&width=300",
              },
            ],
          },
          {
            title: "Interests & Passions",
            type: "interests",
            items: [
              {
                title: "Technology Trends",
                subtitle: "Staying Current",
                description:
                  "Always excited about emerging technologies and their potential impact. Love discussing the future of tech and how it can solve real-world problems.",
                following: [
                  "AI and Machine Learning advancements",
                  "Web3 and blockchain technologies",
                  "Quantum computing developments",
                  "Sustainable technology solutions",
                  "Space technology and exploration",
                ],
                activities: [
                  "Reading tech blogs and research papers",
                  "Attending virtual conferences and webinars",
                  "Participating in online tech communities",
                  "Experimenting with new tools and frameworks",
                ],
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Sports & Fitness",
                subtitle: "Staying Active",
                description:
                  "Believe in maintaining a healthy work-life balance through regular exercise and sports. Cleveland has great facilities and I'm making the most of them!",
                activities: [
                  "Regular gym workouts and strength training",
                  "Playing cricket with the local Indian community",
                  "Learning American sports (basketball and football)",
                  "Hiking in nearby Cuyahoga Valley National Park",
                  "Cycling around Cleveland's beautiful lakefront",
                ],
                goals: [
                  "Run a half-marathon in Cleveland",
                  "Learn to play basketball properly",
                  "Complete a challenging hiking trail",
                ],
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Music & Entertainment",
                subtitle: "Cultural Exploration",
                description:
                  "Enjoying the rich music and entertainment scene in Cleveland while staying connected to my Indian roots through music and movies.",
                preferences: [
                  "Indian classical and Bollywood music",
                  "American rock and pop (thanks to Rock Hall!)",
                  "Live concerts and music festivals",
                  "Netflix series and international cinema",
                  "Podcasts about technology and entrepreneurship",
                ],
                experiences: [
                  "Attended concerts at Blossom Music Center",
                  "Explored Cleveland's music history",
                  "Joined local music appreciation groups",
                ],
                image: "/placeholder.svg?height=200&width=300",
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
            "Welcome to the technical deep dive. Here's everything about my tech stack, architecture decisions, system design philosophy, and the advanced engineering practices I use to build scalable, maintainable systems.",
          stats: [
            { value: "8+", label: "Technologies" },
            { value: "15+", label: "Projects" },
            { value: "3+", label: "Years Experience" },
            { value: "HIPAA", label: "Compliant Systems" },
          ],
          primaryCTA: "View Code",
          secondaryCTA: "Architecture Docs",
        },
        rows: [
          {
            title: "Full Stack Architecture",
            type: "tech-stack",
            items: [
              {
                title: "Frontend Ecosystem",
                subtitle: "Modern SPA Development",
                description:
                  "Component-based architecture with modern JavaScript frameworks, focusing on performance, accessibility, and developer experience.",
                technologies: {
                  "React.js": {
                    expertise: "Advanced",
                    experience: "2+ years",
                    details: [
                      "Hooks and Context API for state management",
                      "Performance optimization with React.memo and useMemo",
                      "Custom hooks for reusable logic",
                      "Server-side rendering with Next.js",
                      "Testing with Jest and React Testing Library",
                    ],
                  },
                  TypeScript: {
                    expertise: "Advanced",
                    experience: "2+ years",
                    details: [
                      "Advanced type definitions and generics",
                      "Utility types and conditional types",
                      "Integration with React and Node.js",
                      "Type-safe API client generation",
                      "Custom type guards and assertions",
                    ],
                  },
                  "Next.js": {
                    expertise: "Intermediate",
                    experience: "1+ years",
                    details: [
                      "App Router and Server Components",
                      "API routes and middleware",
                      "Static site generation and ISR",
                      "Image optimization and performance",
                      "Deployment on Vercel and custom servers",
                    ],
                  },
                },
                architecturalPatterns: [
                  "Component composition over inheritance",
                  "Container/Presentational component pattern",
                  "Custom hooks for business logic separation",
                  "Context providers for global state management",
                  "Error boundaries for graceful error handling",
                ],
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Backend Powerhouse",
                subtitle: "Scalable API Development",
                description:
                  "Microservices architecture with .NET Core, focusing on scalability, maintainability, and performance optimization.",
                technologies: {
                  ".NET Core": {
                    expertise: "Expert",
                    experience: "3+ years",
                    details: [
                      "Web API development with OpenAPI documentation",
                      "Entity Framework Core with Code First approach",
                      "Dependency injection and service lifetime management",
                      "Middleware pipeline customization",
                      "Background services and hosted services",
                    ],
                  },
                  "C#": {
                    expertise: "Expert",
                    experience: "3+ years",
                    details: [
                      "Advanced LINQ and expression trees",
                      "Async/await patterns and Task-based programming",
                      "Generic programming and constraints",
                      "Reflection and dynamic programming",
                      "Memory management and performance optimization",
                    ],
                  },
                  "RESTful APIs": {
                    expertise: "Expert",
                    experience: "3+ years",
                    details: [
                      "Richardson Maturity Model Level 3 implementation",
                      "HATEOAS and hypermedia-driven APIs",
                      "Versioning strategies and backward compatibility",
                      "Rate limiting and throttling",
                      "Comprehensive error handling and status codes",
                    ],
                  },
                },
                architecturalPatterns: [
                  "Clean Architecture with CQRS pattern",
                  "Repository and Unit of Work patterns",
                  "Mediator pattern for request handling",
                  "Decorator pattern for cross-cutting concerns",
                  "Factory pattern for service instantiation",
                ],
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Database Architecture",
                subtitle: "Data Persistence & Optimization",
                description:
                  "Multi-database approach with relational and NoSQL databases, focusing on data integrity, performance, and scalability.",
                technologies: {
                  "SQL Server": {
                    expertise: "Advanced",
                    experience: "3+ years",
                    details: [
                      "Complex query optimization and execution plans",
                      "Stored procedures and user-defined functions",
                      "Indexing strategies and performance tuning",
                      "Transaction management and isolation levels",
                      "Backup and recovery strategies",
                    ],
                  },
                  PostgreSQL: {
                    expertise: "Intermediate",
                    experience: "1+ years",
                    details: [
                      "Advanced JSON and JSONB operations",
                      "Full-text search and GIN indexes",
                      "Window functions and CTEs",
                      "Partitioning and sharding strategies",
                      "Extensions and custom data types",
                    ],
                  },
                  Redis: {
                    expertise: "Intermediate",
                    experience: "1+ years",
                    details: [
                      "Caching strategies and cache invalidation",
                      "Pub/Sub messaging patterns",
                      "Data structures optimization",
                      "Lua scripting for atomic operations",
                      "Cluster setup and high availability",
                    ],
                  },
                },
                principles: [
                  "Database normalization and denormalization strategies",
                  "ACID properties and eventual consistency",
                  "Connection pooling and resource management",
                  "Data migration and schema versioning",
                  "Monitoring and performance metrics",
                ],
                image: "/placeholder.svg?height=200&width=300",
              },
            ],
          },
          {
            title: "Cloud & DevOps Mastery",
            type: "cloud-devops",
            items: [
              {
                title: "Microsoft Azure",
                subtitle: "Cloud-Native Solutions",
                description:
                  "Comprehensive Azure ecosystem utilization for building scalable, secure, and cost-effective cloud solutions.",
                services: {
                  "App Services": {
                    expertise: "Advanced",
                    experience: "2+ years",
                    details: [
                      "Auto-scaling and load balancing configuration",
                      "Deployment slots for blue-green deployments",
                      "Application Insights integration",
                      "Custom domain and SSL certificate management",
                      "Performance monitoring and optimization",
                    ],
                  },
                  "Azure Functions": {
                    expertise: "Intermediate",
                    experience: "1+ years",
                    details: [
                      "Event-driven serverless architecture",
                      "Durable Functions for workflow orchestration",
                      "Trigger bindings and output bindings",
                      "Cold start optimization techniques",
                      "Cost optimization and resource management",
                    ],
                  },
                  "Azure Storage": {
                    expertise: "Advanced",
                    experience: "2+ years",
                    details: [
                      "Blob storage with CDN integration",
                      "Table storage for NoSQL scenarios",
                      "Queue storage for asynchronous processing",
                      "Access policies and shared access signatures",
                      "Lifecycle management and archiving",
                    ],
                  },
                },
                achievements: [
                  {
                    metric: "99.9% Uptime Achievement",
                    description: "Implemented comprehensive monitoring and auto-recovery mechanisms",
                    impact: "Reduced downtime from 8 hours/month to less than 45 minutes/month",
                  },
                  {
                    metric: "40% Cost Reduction",
                    description: "Optimized resource allocation and implemented auto-scaling",
                    impact: "Saved $50,000+ annually while improving performance",
                  },
                ],
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "CI/CD & Automation",
                subtitle: "DevOps Excellence",
                description:
                  "Automated deployment pipelines and infrastructure management for reliable, fast, and secure software delivery.",
                tools: {
                  "GitHub Actions": {
                    expertise: "Advanced",
                    experience: "2+ years",
                    details: [
                      "Multi-environment deployment workflows",
                      "Automated testing and quality gates",
                      "Security scanning and vulnerability assessment",
                      "Artifact management and versioning",
                      "Notification and reporting systems",
                    ],
                  },
                  Docker: {
                    expertise: "Intermediate",
                    experience: "1+ years",
                    details: [
                      "Multi-stage builds for optimization",
                      "Container orchestration with Docker Compose",
                      "Security best practices and image scanning",
                      "Registry management and image versioning",
                      "Performance optimization and resource limits",
                    ],
                  },
                  Terraform: {
                    expertise: "Beginner",
                    experience: "6 months",
                    details: [
                      "Infrastructure as Code principles",
                      "State management and remote backends",
                      "Module development and reusability",
                      "Azure provider configuration",
                      "Plan and apply automation",
                    ],
                  },
                },
                achievements: [
                  {
                    metric: "40% Deployment Time Reduction",
                    description: "Implemented automated CI/CD pipelines with comprehensive testing",
                    impact: "Reduced deployment time from 2 hours to 45 minutes",
                  },
                  {
                    metric: "Zero-Downtime Deployments",
                    description: "Blue-green deployment strategy with automated rollback",
                    impact: "Achieved 100% deployment success rate with instant rollback capability",
                  },
                ],
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Monitoring & Observability",
                subtitle: "System Health & Performance",
                description:
                  "Comprehensive monitoring, logging, and alerting systems for proactive issue detection and resolution.",
                tools: {
                  "Application Insights": {
                    expertise: "Advanced",
                    experience: "2+ years",
                    details: [
                      "Custom telemetry and performance counters",
                      "Dependency tracking and failure analysis",
                      "User behavior analytics and funnels",
                      "Alert rules and action groups",
                      "Dashboard creation and KPI tracking",
                    ],
                  },
                  "Azure Monitor": {
                    expertise: "Intermediate",
                    experience: "1+ years",
                    details: [
                      "Log Analytics workspace configuration",
                      "Kusto Query Language (KQL) for log analysis",
                      "Metric alerts and log alerts",
                      "Workbook creation for visualization",
                      "Integration with third-party tools",
                    ],
                  },
                },
                metrics: [
                  "Application performance and response times",
                  "Error rates and exception tracking",
                  "Resource utilization and capacity planning",
                  "User experience and satisfaction scores",
                  "Security events and compliance monitoring",
                ],
                image: "/placeholder.svg?height=200&width=300",
              },
            ],
          },
          {
            title: "Advanced Engineering Practices",
            type: "practices",
            items: [
              {
                title: "Code Quality & Testing",
                subtitle: "Reliability Through Testing",
                description:
                  "Comprehensive testing strategy ensuring code quality, reliability, and maintainability across all layers of the application.",
                testingPyramid: {
                  "Unit Tests": {
                    coverage: "90%+",
                    tools: ["xUnit", "NUnit", "Jest", "React Testing Library"],
                    practices: [
                      "Test-driven development (TDD) approach",
                      "Arrange-Act-Assert pattern",
                      "Mock and stub usage for isolation",
                      "Parameterized tests for edge cases",
                      "Code coverage analysis and reporting",
                    ],
                  },
                  "Integration Tests": {
                    coverage: "70%+",
                    tools: ["ASP.NET Core Test Host", "TestContainers", "Cypress"],
                    practices: [
                      "Database integration testing with in-memory providers",
                      "API endpoint testing with real HTTP calls",
                      "External service integration testing",
                      "End-to-end workflow validation",
                      "Performance and load testing",
                    ],
                  },
                  "E2E Tests": {
                    coverage: "Critical paths",
                    tools: ["Playwright", "Selenium", "Cypress"],
                    practices: [
                      "User journey automation",
                      "Cross-browser compatibility testing",
                      "Visual regression testing",
                      "Accessibility testing automation",
                      "Mobile responsiveness validation",
                    ],
                  },
                },
                qualityGates: [
                  "Minimum 90% code coverage for new code",
                  "Zero critical security vulnerabilities",
                  "Performance benchmarks within acceptable limits",
                  "All tests passing before merge",
                  "Code review approval from senior developers",
                ],
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Security & Compliance",
                subtitle: "Security-First Development",
                description:
                  "Implementing security best practices and compliance requirements throughout the development lifecycle.",
                securityPractices: {
                  "Authentication & Authorization": {
                    implementation: "JWT with refresh tokens",
                    details: [
                      "OAuth 2.0 and OpenID Connect integration",
                      "Role-based access control (RBAC)",
                      "Multi-factor authentication support",
                      "Session management and timeout handling",
                      "API key management and rotation",
                    ],
                  },
                  "Data Protection": {
                    implementation: "Encryption at rest and in transit",
                    details: [
                      "AES-256 encryption for sensitive data",
                      "TLS 1.3 for all communications",
                      "Personal data anonymization",
                      "Secure key management with Azure Key Vault",
                      "Data retention and deletion policies",
                    ],
                  },
                  "Vulnerability Management": {
                    implementation: "Automated scanning and remediation",
                    details: [
                      "Static Application Security Testing (SAST)",
                      "Dynamic Application Security Testing (DAST)",
                      "Dependency vulnerability scanning",
                      "Regular security audits and penetration testing",
                      "Incident response and recovery procedures",
                    ],
                  },
                },
                compliance: [
                  "HIPAA compliance for healthcare applications",
                  "GDPR compliance for European users",
                  "SOC 2 Type II controls implementation",
                  "Regular compliance audits and reporting",
                ],
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Performance Optimization",
                subtitle: "Speed & Efficiency",
                description:
                  "Systematic approach to performance optimization across all layers of the application stack.",
                optimizationStrategies: {
                  "Frontend Performance": {
                    techniques: "Bundle optimization and lazy loading",
                    details: [
                      "Code splitting and dynamic imports",
                      "Image optimization and WebP conversion",
                      "Service worker implementation for caching",
                      "Critical CSS inlining and resource hints",
                      "Performance budgets and monitoring",
                    ],
                  },
                  "Backend Performance": {
                    techniques: "Caching and query optimization",
                    details: [
                      "Redis caching with intelligent invalidation",
                      "Database query optimization and indexing",
                      "Connection pooling and resource management",
                      "Asynchronous processing for heavy operations",
                      "Response compression and minification",
                    ],
                  },
                  "Database Performance": {
                    techniques: "Indexing and query optimization",
                    details: [
                      "Execution plan analysis and optimization",
                      "Proper indexing strategies",
                      "Query result caching",
                      "Database connection optimization",
                      "Partitioning for large datasets",
                    ],
                  },
                },
                achievements: [
                  {
                    metric: "60% Performance Improvement",
                    description: "Comprehensive optimization across all application layers",
                    impact: "Reduced average response time from 2.5s to 1.0s",
                  },
                  {
                    metric: "50% Reduction in Server Costs",
                    description: "Optimized resource utilization and caching strategies",
                    impact: "Maintained same performance with half the server resources",
                  },
                ],
                image: "/placeholder.svg?height=200&width=300",
              },
            ],
          },
          {
            title: "Technical Achievements & Impact",
            type: "achievements",
            items: [
              {
                title: "System Architecture Excellence",
                subtitle: "Scalable Solutions",
                description:
                  "Designed and implemented scalable system architectures that handle enterprise-level workloads with high availability and performance.",
                achievements: [
                  {
                    metric: "10,000+ Concurrent Users",
                    description: "Architected system to handle high-traffic loads with auto-scaling",
                    impact: "Successfully supported 10x traffic increase during peak periods",
                  },
                  {
                    metric: "99.9% System Uptime",
                    description: "Implemented comprehensive monitoring and auto-recovery mechanisms",
                    impact: "Reduced system downtime by 95% through proactive monitoring",
                  },
                  {
                    metric: "Microservices Migration",
                    description: "Successfully migrated monolithic application to microservices architecture",
                    impact: "Improved deployment frequency by 10x and reduced time-to-market",
                  },
                ],
                technicalDetails: [
                  "Event-driven architecture with message queues",
                  "Circuit breaker pattern for fault tolerance",
                  "API Gateway for service orchestration",
                  "Distributed caching for performance",
                  "Comprehensive logging and monitoring",
                ],
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Innovation & Technology Adoption",
                subtitle: "Cutting-Edge Solutions",
                description:
                  "Leading adoption of new technologies and innovative solutions to solve complex business problems.",
                innovations: [
                  {
                    metric: "AI-Powered Document Processing",
                    description: "Implemented machine learning for automated document classification",
                    impact: "Reduced manual processing time by 100% with 95% accuracy",
                  },
                  {
                    metric: "Real-Time Analytics Dashboard",
                    description: "Built real-time data visualization with SignalR and Chart.js",
                    impact: "Enabled data-driven decision making with live insights",
                  },
                  {
                    metric: "Automated Testing Framework",
                    description: "Created comprehensive testing framework with 90%+ coverage",
                    impact: "Reduced bugs in production by 60% and improved developer confidence",
                  },
                ],
                technologies: [
                  "Azure Cognitive Services for AI integration",
                  "SignalR for real-time communication",
                  "Entity Framework Core for data access",
                  "AutoMapper for object mapping",
                  "FluentValidation for input validation",
                ],
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Team & Process Improvements",
                subtitle: "Engineering Excellence",
                description:
                  "Established engineering best practices and processes that improved team productivity and code quality.",
                improvements: [
                  {
                    metric: "40% Deployment Time Reduction",
                    description: "Implemented automated CI/CD pipelines with comprehensive testing",
                    impact: "Increased deployment frequency from weekly to daily releases",
                  },
                  {
                    metric: "Code Review Process",
                    description: "Established mandatory code review process with quality gates",
                    impact: "Improved code quality by 40% and reduced production bugs by 60%",
                  },
                  {
                    metric: "Documentation Standards",
                    description: "Created comprehensive documentation standards and templates",
                    impact: "Reduced onboarding time for new developers by 50%",
                  },
                ],
                processes: [
                  "Agile development with Scrum methodology",
                  "Git flow branching strategy",
                  "Automated code quality checks",
                  "Performance monitoring and alerting",
                  "Regular architecture reviews and refactoring",
                ],
                image: "/placeholder.svg?height=200&width=300",
              },
            ],
          },
        ],
      }

    default:
      return baseContent
  }
}
