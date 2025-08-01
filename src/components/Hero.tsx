import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 to-purple-50">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-8 h-8 bg-green-400 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full opacity-20 animate-float-delayed"></div>
        <div className="absolute bottom-32 left-1/4 w-10 h-10 bg-orange-400 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-red-400 rounded-full opacity-20 animate-float-delayed"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-green-300 rounded-full opacity-15 animate-float"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-600 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Fresh • Healthy • Delicious
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              Nourish Your
              <span className="block text-transparent bg-gradient-to-r from-green-500 to-purple-500 bg-clip-text">
                Body & Soul
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              Discover vibrant, nutritious bowls crafted with love and the finest organic ingredients. Every bite is a step towards a healthier you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
                Order Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group bg-white/90 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Our Story
              </button>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
              <img 
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Healthy Bowl Signature Dish"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Rainbow Buddha Bowl</h3>
                <p className="text-white/90">Our signature blend of superfoods</p>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full opacity-80 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-80 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;