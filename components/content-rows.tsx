"use client"

import { motion } from "framer-motion"
import ContentCarousel from "./content-carousel"

interface ContentRowsProps {
  persona: string
  content: {
    rows: Array<{
      title: string
      type: string
      items: Array<any>
    }>
  }
}

export default function ContentRows({ persona, content }: ContentRowsProps) {
  return (
    <div className="space-y-12">
      {content.rows.map((row, index) => (
        <motion.section
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-1 h-8 bg-red-600 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">{row.title}</h2>
          </div>

          <ContentCarousel items={row.items} type={row.type} />
        </motion.section>
      ))}
    </div>
  )
}
