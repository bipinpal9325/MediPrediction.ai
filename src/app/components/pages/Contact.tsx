import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'support@medipredict.ai',
      link: 'mailto:support@medipredict.ai',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Office',
      content: '123 Healthcare Blvd, San Francisco, CA 94102',
      link: '#',
    },
  ];

  const departments = [
    { name: 'General Inquiry', value: 'general' },
    { name: 'Technical Support', value: 'support' },
    { name: 'Research Collaboration', value: 'research' },
    { name: 'Institution Inquiry', value: 'institution' },
    { name: 'Media & Press', value: 'media' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl mb-4">Get in Touch</h1>
          <p className="text-xl text-blue-100">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <h2 className="text-2xl mb-6 text-gray-900">Send us a Message</h2>
              {submitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-700">Thank you! Your message has been sent successfully.</span>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    {departments.map((dept) => (
                      <option key={dept.value} value={dept.value}>
                        {dept.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h3 className="text-xl mb-6 text-gray-900">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start space-x-4 p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-100 hover:shadow-md transition-shadow"
                  >
                    <div className="bg-blue-600 text-white rounded-lg p-3">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-600 mb-1">{info.title}</h4>
                      <p className="text-gray-900">{info.content}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h3 className="text-xl mb-4 text-gray-900">Office Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="text-gray-900">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Saturday</span>
                  <span className="text-gray-900">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Sunday</span>
                  <span className="text-gray-900">Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
              <h3 className="text-xl mb-3 text-gray-900">Response Time</h3>
              <p className="text-gray-700 mb-4">
                We typically respond to all inquiries within 24-48 hours during business days.
              </p>
              <div className="bg-white rounded-lg p-4 border border-purple-100">
                <p className="text-sm text-gray-700">
                  <strong>Priority Support:</strong> Researcher and Institution plan members receive
                  priority response within 4-8 hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Quick Links */}
        <div className="mt-12 bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <h3 className="text-2xl mb-6 text-gray-900">Before You Reach Out</h3>
          <p className="text-gray-600 mb-6">
            Check if your question is already answered in our frequently asked questions:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="text-gray-900 mb-2">Getting Started</h4>
              <p className="text-sm text-gray-600">How to create an account and make your first prediction</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="text-gray-900 mb-2">Model Information</h4>
              <p className="text-sm text-gray-600">Learn about our datasets and ML algorithms</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="text-gray-900 mb-2">Research Use</h4>
              <p className="text-sm text-gray-600">Information for students and researchers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
