"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  Briefcase,
  GraduationCap,
  Users,
  Heart,
  Lightbulb,
  Award,
  Target,
  Zap,
  Database,
  Cloud,
  Smartphone,
} from "lucide-react"

interface ContentRowsProps {
  persona: string
  content: any
}

export default function ContentRows({ persona, content }: ContentRowsProps) {
  if (!content || !content.rows || content.rows.length === 0) {
    return null
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "projects":
        return <Code className="h-6 w-6" />
      case "experience":
        return <Briefcase className="h-6 w-6" />
      case "education":
        return <GraduationCap className="h-6 w-6" />
      case "skills":
        return <Zap className="h-6 w-6" />
      case "leadership":
        return <Users className="h-6 w-6" />
      case "personal":
        return <Heart className="h-6 w-6" />
      case "learning":
        return <Lightbulb className="h-6 w-6" />
      case "fun":
        return <Target className="h-6 w-6" />
      case "tech-deep":
        return <Database className="h-6 w-6" />
      case "projects-detailed":
        return <Cloud className="h-6 w-6" />
      case "metrics":
        return <Award className="h-6 w-6" />
      case "patterns":
        return <Smartphone className="h-6 w-6" />
      default:
        return <Code className="h-6 w-6" />
    }
  }

  return (
    <div className="py-20 px-8 md:px-16 bg-black">
      {content.rows.map((row: any, rowIndex: number) => (
        <motion.section
          key={rowIndex}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: rowIndex * 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
          data-section={rowIndex === 0 ? "first" : rowIndex === 1 ? "culture" : undefined}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="text-red-400">{getIcon(row.type)}</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white netflix-font">{row.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {row.items.map((item: any, itemIndex: number) => (
              <motion.div
                key={itemIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="h-full"
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-red-600/50 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-white text-lg mb-2">{item.title}</CardTitle>
                        {item.subtitle && (
                          <CardDescription className="text-gray-400 text-sm">{item.subtitle}</CardDescription>
                        )}
                        {item.role && (
                          <Badge variant="outline" className="mt-2 border-red-600 text-red-400">
                            {item.role}
                          </Badge>
                        )}
                      </div>
                      {item.icon && (
                        <div className="ml-4 text-red-400 bg-red-600/10 p-2 rounded-lg">
                          <span className="text-xs font-bold">{item.icon}</span>
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{item.description}</p>

                    {item.tech && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tech.map((tech: string, techIndex: number) => (
                          <Badge key={techIndex} variant="secondary" className="bg-gray-800 text-gray-300 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}

                    {item.features && (
                      <ul className="text-gray-400 text-xs space-y-1 mb-4">
                        {item.features.map((feature: string, featureIndex: number) => (
                          <li key={featureIndex} className="flex items-start">
                            <span className="text-red-400 mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}

                    {item.metrics && (
                      <div className="flex gap-4 mt-4">
                        {item.metrics.map((metric: any, metricIndex: number) => (
                          <div key={metricIndex} className="text-center">
                            <div className="text-red-400 font-bold text-sm">{metric.value}</div>
                            <div className="text-gray-500 text-xs">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {item.date && (
                      <div className="mt-4 text-right">
                        <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs">
                          {item.date}
                        </Badge>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      ))}
    </div>
  )
}
