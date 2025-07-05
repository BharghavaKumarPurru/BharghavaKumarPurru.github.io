"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Download, Calendar } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // Add the resume download function:
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 netflix-font">GET IN TOUCH</h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Ready to collaborate? Let's discuss your next project or opportunity
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-20 bg-black py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="lg:col-span-2"
            >
              <Card className="bg-gray-900 border-gray-700 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-gray-800 border-gray-600 text-white focus:border-red-500"
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-gray-800 border-gray-600 text-white focus:border-red-500"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-gray-600 text-white focus:border-red-500 min-h-[120px]"
                      placeholder="Tell me about your project or opportunity..."
                      required
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-semibold"
                    >
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info & Actions */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6"
            >
              {/* Contact Information */}
              <Card className="bg-gray-900 border-gray-700 p-6">
                <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-red-400" />
                    <div>
                      <p className="text-gray-300">Email</p>
                      <p className="text-white">bhargavbhargav995@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-red-400" />
                    <div>
                      <p className="text-gray-300">Phone</p>
                      <p className="text-white">216-457-0576</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-red-400" />
                    <div>
                      <p className="text-gray-300">Location</p>
                      <p className="text-white">Cleveland, OH</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-gray-900 border-gray-700 p-6">
                <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>

                <div className="space-y-3">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      className="w-full bg-white text-black hover:bg-gray-200 justify-start"
                      onClick={handleResumeDownload}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      variant="outline"
                      className="w-full border-gray-600 text-white hover:bg-gray-800 justify-start bg-transparent"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule Meeting
                    </Button>
                  </motion.div>
                </div>
              </Card>

              {/* Social Links */}
              <Card className="bg-gray-900 border-gray-700 p-6">
                <h3 className="text-xl font-bold text-white mb-4">Connect With Me</h3>

                <div className="flex gap-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-red-600 rounded-lg transition-colors"
                  >
                    <Github className="h-6 w-6 text-white" />
                  </motion.a>

                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors"
                  >
                    <Linkedin className="h-6 w-6 text-white" />
                  </motion.a>

                  <motion.a
                    href="mailto:bhargavbhargav995@gmail.com"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-red-600 rounded-lg transition-colors"
                  >
                    <Mail className="h-6 w-6 text-white" />
                  </motion.a>
                </div>
              </Card>

              {/* Availability Status */}
              <Card className="bg-gray-900 border-gray-700 p-6">
                <h3 className="text-xl font-bold text-white mb-4">Availability</h3>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium">Available for new opportunities</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">
                  Currently seeking full-time positions in Full Stack Development
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
