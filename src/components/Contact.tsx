import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    type: 'reservation'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full text-sm font-medium text-green-700 mb-4">
            <MapPin className="w-4 h-4" />
            Visit Us
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Come Visit or
            <span className="text-green-500"> Get in Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to serve you! Visit our location or reach out for catering, special events, or just to say hello.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-green-50 to-purple-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Location & Hours</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-500 rounded-full p-3">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-600">123 Health Street<br />Wellness District, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-500 rounded-full p-3">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Hours</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Mon - Fri: 7:00 AM - 9:00 PM</p>
                      <p>Sat - Sun: 8:00 AM - 10:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-500 rounded-full p-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600">(555) 123-BOWL</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-pink-500 rounded-full p-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">hello@healthybowl.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-3xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Interactive Map</p>
                <p className="text-sm text-gray-400">Click to view in Google Maps</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                  How can we help?
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="reservation">Make a Reservation</option>
                  <option value="catering">Catering Inquiry</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-2xl font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;