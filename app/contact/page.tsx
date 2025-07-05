"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Github, Linkedin, Calendar, MessageCircle } from "lucide-react"
import Navbar from "@/components/navbar"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleScheduleMeeting = () => {
    window.open("https://calendly.com/bharghavakumarpurru", "_blank")
  }

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/12164570576?text=Hi%20Bharghava!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.",
      "_blank",
    )
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <div className="pt-20 pb-16 px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 netflix-font">Let's Connect</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to discuss your next project or just want to say hello? I'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-gray-900/50 border-gray-800 mb-8">
                <CardHeader>
                  <CardTitle className="text-white text-2xl mb-4">Get In Touch</CardTitle>
                  <CardDescription className="text-gray-400">
                    Choose your preferred way to connect with me
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-red-600/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-red-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <a
                        href="mailto:bharghavbhargav995@gmail.com"
                        className="text-gray-400 hover:text-red-400 transition-colors"
                      >
                        bharghavbhargav995@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-red-600/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-red-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <a href="tel:+12164570576" className="text-gray-400 hover:text-red-400 transition-colors">
                        +1 (216) 457-0576
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-red-600/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-red-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Location</p>
                      <p className="text-gray-400">Cleveland, OH, USA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button onClick={handleScheduleMeeting} className="w-full bg-red-600 hover:bg-red-700 text-white">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Meeting
                  </Button>

                  <Button
                    onClick={handleWhatsApp}
                    variant="outline"
                    className="w-full border-gray-600 text-white hover:bg-gray-800 bg-transparent"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp Me
                  </Button>

                  <div className="flex space-x-4 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-gray-600 text-white hover:bg-gray-800 bg-transparent"
                      onClick={() => window.open("https://github.com/BharghavaKumarPurru", "_blank")}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-gray-600 text-white hover:bg-gray-800 bg-transparent"
                      onClick={() => window.open("https://linkedin.com/in/bharghavakumarpurru", "_blank")}
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Send Message</CardTitle>
                  <CardDescription className="text-gray-400">
                    Fill out the form below and I'll get back to you soon
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-gray-800 border-gray-700 text-white focus:border-red-600"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-gray-800 border-gray-700 text-white focus:border-red-600"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-800 border-gray-700 text-white focus:border-red-600"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="bg-gray-800 border-gray-700 text-white focus:border-red-600"
                        placeholder="Tell me about your project or just say hello..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>

                    {submitStatus === "success" && (
                      <div className="text-green-400 text-center">
                        Message sent successfully! I'll get back to you soon.
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="text-red-400 text-center">
                        Something went wrong. Please try again or contact me directly.
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
