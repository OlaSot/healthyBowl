import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Fitness Enthusiast",
      avatar: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100",
      rating: 5,
      text: "Healthy Bowl has completely transformed my eating habits! The Rainbow Buddha Bowl is my absolute favorite - it's both nutritious and incredibly satisfying. The quality of ingredients is outstanding.",
      favorite: "Rainbow Buddha Bowl"
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Busy Professional",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100",
      rating: 5,
      text: "As someone with a hectic schedule, I love that I can grab a nutritious meal quickly. The Power Protein Bowl gives me the energy I need to power through my workday. Highly recommend!",
      favorite: "Power Protein Bowl"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Yoga Instructor",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100",
      rating: 5,
      text: "I'm so grateful for Healthy Bowl! Being vegan, it's wonderful to have so many delicious options. The Green Goddess Smoothie is like drinking liquid sunshine - pure perfection!",
      favorite: "Green Goddess Smoothie"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-purple-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-pink-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-green-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full text-sm font-medium text-yellow-700 mb-4">
            <Star className="w-4 h-4 fill-current" />
            Reviews
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            What Our Customers
            <span className="text-yellow-500"> Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from the amazing people who make our community so special.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative"
            >
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full p-3">
                <Quote className="w-6 h-6 text-white" />
              </div>

              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </p>

              <div className="bg-gradient-to-r from-green-100 to-purple-100 rounded-2xl p-4">
                <p className="text-sm text-gray-600 mb-1">Favorite Dish:</p>
                <p className="font-semibold text-gray-800">{testimonial.favorite}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-800">4.9</span>
            </div>
            <p className="text-gray-600">Based on 500+ reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;