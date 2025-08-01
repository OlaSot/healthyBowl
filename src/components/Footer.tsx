import React, { useState } from 'react';
import { Heart, Instagram, Facebook, Twitter, Mail, Leaf } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-pink-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Newsletter Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-600/20 px-4 py-2 rounded-full text-sm font-medium text-green-400 mb-4">
            <Mail className="w-4 h-4" />
            Newsletter
          </div>
          <h3 className="text-3xl font-bold mb-4">Stay in the Loop</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the latest updates on new menu items, special offers, and healthy living tips delivered straight to your inbox.
          </p>
          
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold">Healthy Bowl</h4>
                <p className="text-sm text-gray-400">Healthy food restaurant</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Nourishing your body and soul with fresh, organic ingredients and vibrant flavors that make healthy eating a joy.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: Instagram, color: 'from-pink-500 to-purple-500' },
                { icon: Facebook, color: 'from-blue-500 to-blue-600' },
                { icon: Twitter, color: 'from-blue-400 to-cyan-500' }
              ].map((social, index) => (
                <button
                  key={index}
                  className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-110`}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-bold mb-6">Quick Links</h5>
            <ul className="space-y-3">
              {['Menu', 'About Us', 'Locations', 'Catering', 'Nutrition Info', 'Gift Cards'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h5 className="text-lg font-bold mb-6">Customer Care</h5>
            <ul className="space-y-3">
              {['Contact Us', 'FAQ', 'Order Status', 'Rewards Program', 'Feedback', 'Careers'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-lg font-bold mb-6">Get in Touch</h5>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm mb-1">Address</p>
                <p className="text-gray-300">123 Health Street<br />Wellness District, NY 10001</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Phone</p>
                <p className="text-gray-300">(555) 123-BOWL</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Email</p>
                <p className="text-gray-300">hello@healthybowl.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <span>© 2024 Healthy Bowl. Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>for your health.</span>
            </div>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;