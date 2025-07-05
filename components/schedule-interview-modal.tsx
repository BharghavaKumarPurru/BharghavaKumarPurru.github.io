"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { X, Calendar, Clock, User, Mail, MessageSquare, CheckCircle } from "lucide-react"

interface ScheduleInterviewModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ScheduleInterviewModal({ isOpen, onClose }: ScheduleInterviewModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    position: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate sending email and calendar invite
    try {
      // In a real implementation, this would:
      // 1. Send email to bharghava with interview details
      // 2. Send calendar invite to both parties
      // 3. Store in database for tracking

      await new Promise((resolve) => setTimeout(resolve, 2000))

      // For now, we'll log the data and show success
      console.log("Interview scheduled:", {
        ...formData,
        scheduledAt: new Date().toISOString(),
        status: "pending_confirmation",
      })

      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after 4 seconds and close modal
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: "",
          email: "",
          company: "",
          position: "",
          preferredDate: "",
          preferredTime: "",
          message: "",
        })
        onClose()
      }, 4000)
    } catch (error) {
      console.error("Error scheduling interview:", error)
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

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
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Calendar className="h-6 w-6 text-red-400" />
                <h2 className="text-2xl font-bold text-white">Schedule Interview</h2>
              </div>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white" onClick={onClose}>
                <X className="h-6 w-6" />
              </Button>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <User className="inline h-4 w-4 mr-2" />
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-gray-600 text-white focus:border-red-500"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <Mail className="inline h-4 w-4 mr-2" />
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-gray-600 text-white focus:border-red-500"
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-gray-600 text-white focus:border-red-500"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Position</label>
                    <Input
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-gray-600 text-white focus:border-red-500"
                      placeholder="Position you're hiring for"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <Calendar className="inline h-4 w-4 mr-2" />
                      Preferred Date *
                    </label>
                    <Input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-gray-600 text-white focus:border-red-500"
                      min={new Date().toISOString().split("T")[0]}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <Clock className="inline h-4 w-4 mr-2" />
                      Preferred Time *
                    </label>
                    <Input
                      type="time"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-gray-600 text-white focus:border-red-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <MessageSquare className="inline h-4 w-4 mr-2" />
                    Additional Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-gray-800 border-gray-600 text-white focus:border-red-500 min-h-[100px]"
                    placeholder="Tell me about the role, interview format, or any specific topics you'd like to discuss..."
                  />
                </div>

                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-white font-semibold mb-2">What happens next?</h3>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• I'll receive your interview request via email</li>
                    <li>• You'll get a confirmation email within 24 hours</li>
                    <li>• I'll send a calendar invite with Google Meet/Zoom link</li>
                    <li>• Duration: 45-60 minutes | Available: Mon-Fri, 9 AM - 6 PM EST</li>
                  </ul>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-semibold"
                  >
                    {isSubmitting ? "Scheduling..." : "Schedule Interview"}
                  </Button>
                </motion.div>
              </form>
            ) : (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-8">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Interview Request Sent!</h3>
                <p className="text-gray-300 mb-4">
                  Thank you for your interest. I'll review your request and send you a confirmation email with calendar
                  invite within 24 hours.
                </p>
                <div className="bg-gray-800 p-4 rounded-lg mb-4">
                  <p className="text-sm text-gray-400">
                    <strong className="text-white">Next Steps:</strong>
                    <br />
                    1. Check your email for confirmation
                    <br />
                    2. Look out for calendar invite
                    <br />
                    3. Prepare for our conversation!
                  </p>
                </div>
                <p className="text-sm text-gray-400">This modal will close automatically...</p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
