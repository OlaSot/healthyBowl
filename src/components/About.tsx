import React from 'react';
import { Heart, Leaf, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Organic & Fresh",
      description: "We source only the finest organic ingredients from local farms, ensuring every bowl is packed with nutrients and flavor."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Made with Love",
      description: "Every dish is crafted with passion and care, bringing you meals that nourish both body and soul."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community First",
      description: "We believe in building a community of health-conscious food lovers who support sustainable living."
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-green-400 rounded-full"></div>
        <div className="absolute bottom-1/4 right-10 w-24 h-24 bg-purple-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full text-sm font-medium text-green-700 mb-4">
            Our Story
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Healthy Food, 
            <span className="text-green-500"> Happy Life</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded in 2020 with a simple mission: to make healthy eating accessible, delicious, and fun. 
            We believe that good food is the foundation of a vibrant life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Our Kitchen"
              className="w-full h-96 object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-3xl font-bold">1000+</div>
              <div className="text-sm opacity-90">Happy Customers</div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              From Farm to Bowl, We Care About Every Step
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our journey began when our founder, Maria, realized that healthy food doesn't have to be boring. 
              After traveling the world and discovering amazing flavors, she decided to create a place where 
              nutrition meets taste.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Today, we're proud to serve our community with bowls that are not just Instagram-worthy, 
              but truly nourishing. Every ingredient is carefully selected, every recipe thoughtfully crafted.
            </p>
            
            <div className="flex items-center gap-4 pt-4">
              <img 
                src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt="Maria, Founder"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-gray-800">Maria Rodriguez</div>
                <div className="text-sm text-gray-600">Founder & Head Chef</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 text-white rounded-2xl mb-6 group-hover:shadow-xl transition-shadow duration-300">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;