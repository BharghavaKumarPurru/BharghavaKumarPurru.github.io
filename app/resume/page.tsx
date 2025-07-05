"use client"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Download, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ResumePage() {
  const handleResumeDownload = () => {
    const link = document.createElement("a")
    link.href = "/resume/Bharghava_Kumar_Purru_Resume.pdf"
    link.download = "Bharghava_Kumar_Purru_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 netflix-font">RESUME</h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
              Download my complete professional resume
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold"
                  onClick={handleResumeDownload}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume PDF
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/">
                  <Button
                    variant="outline"
                    className="border-gray-600 text-white hover:bg-gray-800 px-8 py-4 text-lg bg-transparent"
                  >
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Back to Portfolio
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Resume Preview Section */}
      <div className="relative z-20 bg-black py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-gray-900 border border-gray-700 rounded-lg p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Resume Preview</h2>

            <div className="bg-white rounded-lg p-8 text-black min-h-[600px]">
              <div className="text-center mb-6">
                <h1 className="text-3xl font-bold mb-2">Bharghava Kumar Purru</h1>
                <p className="text-lg text-gray-600">Full Stack .NET Developer & QA Engineer</p>
                <div className="flex justify-center gap-4 mt-2 text-sm">
                  <span>bhargavbhargav995@gmail.com</span>
                  <span>|</span>
                  <span>216-457-0576</span>
                  <span>|</span>
                  <span>Cleveland, OH</span>
                </div>
              </div>

              <div className="space-y-6">
                <section>
                  <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">PROFESSIONAL SUMMARY</h2>
                  <p className="text-sm leading-relaxed">
                    Experienced .NET Developer with 3+ years of experience in designing and developing CMS-driven
                    websites, RESTful services, and responsive web applications. Proficient in Umbraco Cloud, MVC
                    architecture, C#, .NET, JavaScript, and front-end frameworks with a focus on web accessibility,
                    security, and performance.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">EDUCATION</h2>
                  <div className="mb-2">
                    <h3 className="font-semibold">Case Western Reserve University – Cleveland, OH</h3>
                    <p className="text-sm">Master's in Computer Science | Aug 2023 – May 2025</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">TECHNICAL SKILLS</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <div>
                      <strong>Languages & Frameworks:</strong> C#, .NET, JavaScript, HTML5, CSS3, SQL, Angular.js,
                      React.js, jQuery
                    </div>
                    <div>
                      <strong>CMS & Libraries:</strong> Umbraco Cloud, Umbraco Forms, Razor, REST APIs, Bootstrap, AJAX
                    </div>
                    <div>
                      <strong>Tools & DevOps:</strong> Git, GitHub Actions, Azure DevOps, CI/CD, Playwright
                    </div>
                    <div>
                      <strong>Database & Backend:</strong> MySQL, SQL Server, Entity Framework, RESTful Services
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">WORK EXPERIENCE</h2>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h3 className="font-semibold">Chief Technology Officer (CTO) | Hilde B Foundation</h3>
                      <p className="text-gray-600 mb-1">Remote (San Francisco, CA) | May 2025 – Present</p>
                      <ul className="list-disc list-inside space-y-1 text-xs">
                        <li>
                          Led end-to-end architecture across Umbraco CMS, React Native, Next.js, .NET Web API, and
                          Supabase
                        </li>
                        <li>
                          Delivered HIPAA-compliant mental wellness platform with secure login and encrypted
                          communication
                        </li>
                        <li>Built cross-functional team, reducing deployment time by 40%</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold">Software Engineer Intern | Tharro Labs Inc.</h3>
                      <p className="text-gray-600 mb-1">Remote (New York, NY) | April 2025 – May 2025</p>
                      <ul className="list-disc list-inside space-y-1 text-xs">
                        <li>Built cross-platform mobile apps using React Native with .NET Web API backends</li>
                        <li>Contributed to dating app with real-time chat and construction reporting app</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold">Full Stack .NET Developer | HCL Technologies</h3>
                      <p className="text-gray-600 mb-1">Hyderabad, India | July 2022 – Dec 2023</p>
                      <ul className="list-disc list-inside space-y-1 text-xs">
                        <li>Developed content-driven web applications using Umbraco CMS and ASP.NET Core</li>
                        <li>Built RESTful APIs and integrated with Umbraco templates and Razor views</li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3" onClick={handleResumeDownload}>
                <Download className="mr-2 h-4 w-4" />
                Download Full Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
