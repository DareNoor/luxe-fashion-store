import { useState } from "react"
import { MapPin, Mail, Phone, Clock } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: "" })
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email"
    if (!formData.subject.trim()) newErrors.subject = "Subject is required"
    if (!formData.message.trim()) newErrors.message = "Message is required"
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail size={28} className="text-white" />
          </div>
          <h2 className="font-heading text-3xl text-gray-900 mb-3">Message Sent!</h2>
          <p className="font-body text-sm text-gray-500">
            We'll get back to you within 24 hours.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream">

      {/* Header */}
      <div className="bg-gray-900 py-16 text-center">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-3">
          Get In Touch
        </p>
        <h1 className="font-heading text-5xl text-white">Contact Us</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left — Info */}
          <div>
            <h2 className="font-heading text-3xl text-gray-900 mb-6">
              We'd love to hear from you
            </h2>
            <p className="font-body text-sm text-gray-500 leading-relaxed mb-10">
              Have a question about an order, need styling advice, or want to collaborate? 
              Our team is here to help you.
            </p>

            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-gold" />
                </div>
                <div>
                  <p className="font-body text-sm font-medium text-gray-900 mb-1">Visit Us</p>
                  <p className="font-body text-sm text-gray-500">DHA Phase 6, Karachi, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-gold" />
                </div>
                <div>
                  <p className="font-body text-sm font-medium text-gray-900 mb-1">Email Us</p>
                  <p className="font-body text-sm text-gray-500">hello@luxefashion.pk</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-gold" />
                </div>
                <div>
                  <p className="font-body text-sm font-medium text-gray-900 mb-1">Call Us</p>
                  <p className="font-body text-sm text-gray-500">+92 300 1234567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-gold" />
                </div>
                <div>
                  <p className="font-body text-sm font-medium text-gray-900 mb-1">Working Hours</p>
                  <p className="font-body text-sm text-gray-500">Mon - Sat: 10am - 8pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-white border border-primary-200 p-8">
            <h3 className="font-heading text-2xl text-gray-900 mb-8">Send a Message</h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="font-body text-xs tracking-widest uppercase text-gray-500 mb-2 block">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Your Name"
                    className={`w-full border px-4 py-3 font-body text-sm bg-cream focus:outline-none focus:border-gold transition-colors ${
                      errors.name ? "border-red-400" : "border-primary-200"
                    }`}
                  />
                  {errors.name && <p className="font-body text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="font-body text-xs tracking-widest uppercase text-gray-500 mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                    className={`w-full border px-4 py-3 font-body text-sm bg-cream focus:outline-none focus:border-gold transition-colors ${
                      errors.email ? "border-red-400" : "border-primary-200"
                    }`}
                  />
                  {errors.email && <p className="font-body text-xs text-red-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="font-body text-xs tracking-widest uppercase text-gray-500 mb-2 block">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Order inquiry, Returns..."
                  className={`w-full border px-4 py-3 font-body text-sm bg-cream focus:outline-none focus:border-gold transition-colors ${
                    errors.subject ? "border-red-400" : "border-primary-200"
                  }`}
                />
                {errors.subject && <p className="font-body text-xs text-red-400 mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label className="font-body text-xs tracking-widest uppercase text-gray-500 mb-2 block">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={5}
                  className={`w-full border px-4 py-3 font-body text-sm bg-cream focus:outline-none focus:border-gold transition-colors resize-none ${
                    errors.message ? "border-red-400" : "border-primary-200"
                  }`}
                />
                {errors.message && <p className="font-body text-xs text-red-400 mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 hover:bg-black text-white font-body text-sm tracking-widest uppercase py-4 transition-colors duration-300"
              >
                Send Message
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact