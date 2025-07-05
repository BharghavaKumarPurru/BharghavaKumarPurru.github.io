"use client"
import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Github, Calendar, MapPin, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ContentDetailModalProps {
  item: any
  type: string
  isOpen: boolean
  onClose: () => void
}

export default function ContentDetailModal({ item, type, isOpen, onClose }: ContentDetailModalProps) {
  if (!isOpen || !item) return null

  const renderProjectDetails = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">{item.title}</h2>
          {item.role && <p className="text-red-400 text-lg font-medium mb-4">{item.role}</p>}
        </div>
        <div className="flex gap-2">
          {item.github && (
            <Button
              variant="outline"
              onClick={() => window.open(item.github, "_blank")}
              className="border-gray-600 bg-transparent"
            >
              <Github className="mr-2 h-4 w-4" />
              Code
            </Button>
          )}
          {item.demo && (
            <Button
              variant="outline"
              onClick={() => window.open(item.demo, "_blank")}
              className="border-gray-600 bg-transparent"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </Button>
          )}
        </div>
      </div>

      <p className="text-gray-300 text-lg leading-relaxed">{item.description}</p>

      {item.tech && (
        <div className="space-y-2">
          <h3 className="text-white font-semibold text-xl">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {item.tech.map((tech: string, index: number) => (
              <Badge key={index} variant="secondary" className="bg-red-600/20 text-red-300 border-red-600/30">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {item.features && (
        <div className="space-y-3">
          <h3 className="text-white font-semibold text-xl">Key Features</h3>
          <ul className="space-y-2">
            {item.features.map((feature: string, index: number) => (
              <li key={index} className="flex items-start gap-3 text-gray-300">
                <span className="text-red-400 mt-1">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {item.metrics && (
        <div className="space-y-3">
          <h3 className="text-white font-semibold text-xl">Performance Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {item.metrics.map((metric: any, index: number) => (
              <div key={index} className="text-center p-4 bg-gray-800 rounded-lg">
                <div className="text-red-400 font-bold text-2xl">{metric.value}</div>
                <div className="text-gray-400 text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )

  const renderExperienceDetails = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">{item.title}</h2>
        <p className="text-red-400 text-lg font-medium mb-2">{item.subtitle}</p>
        <div className="flex items-center gap-4 text-gray-400">
          {item.period && (
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{item.period}</span>
            </div>
          )}
          {item.location && (
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{item.location}</span>
            </div>
          )}
        </div>
      </div>

      <p className="text-gray-300 text-lg leading-relaxed">{item.description}</p>

      <Tabs defaultValue="responsibilities" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-gray-800">
          <TabsTrigger value="responsibilities">Responsibilities</TabsTrigger>
          <TabsTrigger value="technologies">Technologies</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="responsibilities" className="space-y-3">
          <ul className="space-y-2">
            {item.responsibilities?.map((resp: string, index: number) => (
              <li key={index} className="flex items-start gap-3 text-gray-300">
                <span className="text-blue-400 mt-1">•</span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </TabsContent>

        <TabsContent value="technologies" className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {item.technologies?.map((tech: string, index: number) => (
              <Badge key={index} variant="secondary" className="bg-blue-600/20 text-blue-300 border-blue-600/30">
                {tech}
              </Badge>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-3">
          <ul className="space-y-2">
            {item.achievements?.map((achievement: string, index: number) => (
              <li key={index} className="flex items-start gap-3 text-gray-300">
                <span className="text-yellow-400 mt-1">★</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </TabsContent>
      </Tabs>
    </div>
  )

  const renderSkillsDetails = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">{item.category}</h2>
        <p className="text-gray-400">Technical expertise and proficiency levels</p>
      </div>

      <div className="space-y-4">
        {item.skills?.map((skill: any, index: number) => (
          <Card key={index} className="bg-gray-800 border-gray-700">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-white">{skill.name}</CardTitle>
                <div className="flex gap-2">
                  <Badge variant="outline" className="border-green-600 text-green-400">
                    {skill.level}
                  </Badge>
                  <Badge variant="outline" className="border-blue-600 text-blue-400">
                    {skill.years}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">{skill.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderEducationDetails = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">{item.title}</h2>
        <p className="text-red-400 text-lg font-medium mb-2">{item.subtitle}</p>
        <div className="flex items-center gap-4 text-gray-400">
          {item.period && (
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{item.period}</span>
            </div>
          )}
          {item.location && (
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{item.location}</span>
            </div>
          )}
          {item.gpa && (
            <div className="flex items-center gap-1">
              <TrendingUp className="h-4 w-4" />
              <span>GPA: {item.gpa}</span>
            </div>
          )}
        </div>
      </div>

      <p className="text-gray-300 text-lg leading-relaxed">{item.description}</p>

      <Tabs defaultValue="coursework" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-gray-800">
          <TabsTrigger value="coursework">Coursework</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="activities">Activities</TabsTrigger>
        </TabsList>

        <TabsContent value="coursework" className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {item.coursework?.map((course: string, index: number) => (
              <div key={index} className="flex items-center gap-2 text-gray-300">
                <span className="text-blue-400">•</span>
                <span>{course}</span>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-3">
          <ul className="space-y-2">
            {item.academicAchievements?.map((achievement: string, index: number) => (
              <li key={index} className="flex items-start gap-3 text-gray-300">
                <span className="text-yellow-400 mt-1">★</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </TabsContent>

        <TabsContent value="activities" className="space-y-3">
          <ul className="space-y-2">
            {item.activities?.map((activity: string, index: number) => (
              <li key={index} className="flex items-start gap-3 text-gray-300">
                <span className="text-green-400 mt-1">•</span>
                <span>{activity}</span>
              </li>
            ))}
          </ul>
        </TabsContent>
      </Tabs>
    </div>
  )

  const renderPersonalDetails = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">{item.title}</h2>
        {item.subtitle && <p className="text-red-400 text-lg font-medium mb-4">{item.subtitle}</p>}
      </div>

      <p className="text-gray-300 text-lg leading-relaxed">{item.description}</p>

      {item.highlights && (
        <div className="space-y-3">
          <h3 className="text-white font-semibold text-xl">Highlights</h3>
          <ul className="space-y-2">
            {item.highlights.map((highlight: string, index: number) => (
              <li key={index} className="flex items-start gap-3 text-gray-300">
                <span className="text-green-400 mt-1">✓</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {item.currentProjects && (
        <div className="space-y-3">
          <h3 className="text-white font-semibold text-xl">Current Projects</h3>
          <ul className="space-y-2">
            {item.currentProjects.map((project: string, index: number) => (
              <li key={index} className="flex items-start gap-3 text-gray-300">
                <span className="text-purple-400 mt-1">→</span>
                <span>{project}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {item.learningGoals && (
        <div className="space-y-3">
          <h3 className="text-white font-semibold text-xl">Learning Goals</h3>
          <ul className="space-y-2">
            {item.learningGoals.map((goal: string, index: number) => (
              <li key={index} className="flex items-start gap-3 text-gray-300">
                <span className="text-blue-400 mt-1">🎯</span>
                <span>{goal}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )

  const renderDefaultDetails = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">{item.title}</h2>
        {item.subtitle && <p className="text-red-400 text-lg font-medium mb-4">{item.subtitle}</p>}
      </div>

      <p className="text-gray-300 text-lg leading-relaxed">{item.description}</p>

      {item.features && (
        <div className="space-y-3">
          <h3 className="text-white font-semibold text-xl">Features</h3>
          <ul className="space-y-2">
            {item.features.map((feature: string, index: number) => (
              <li key={index} className="flex items-start gap-3 text-gray-300">
                <span className="text-red-400 mt-1">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )

  const renderContent = () => {
    switch (type) {
      case "projects":
        return renderProjectDetails()
      case "experience":
        return renderExperienceDetails()
      case "skills":
        return renderSkillsDetails()
      case "education":
        return renderEducationDetails()
      case "personal":
      case "learning":
      case "fun":
      case "interests":
        return renderPersonalDetails()
      default:
        return renderDefaultDetails()
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-red-400 font-semibold">Details</span>
              {item.date && (
                <Badge variant="outline" className="border-gray-600 text-gray-400">
                  {item.date}
                </Badge>
              )}
            </div>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-gray-400 hover:text-white">
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="p-6">{renderContent()}</div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
