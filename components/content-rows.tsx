"use client"

import { motion } from "framer-motion"
import ContentCarousel from "./content-carousel"

interface ContentRowsProps {
  persona: string
  content: any
}

export default function ContentRows({ persona, content }: ContentRowsProps) {
  return (
    <div className="relative z-30 bg-black py-12 md:py-20">
      {content.rows.map((row: any, index: number) => (
        <motion.div
          key={index}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
          data-section={index === 0 ? "first" : index === 1 && persona === "hr" ? "culture" : undefined}
        >
          <div className="px-6 md:px-8 lg:px-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-8">{row.title}</h2>
            <ContentCarousel items={row.items} type={row.type} />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
