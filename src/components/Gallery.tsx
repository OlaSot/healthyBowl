import React from 'react';
import { Instagram, Heart, MessageCircle } from 'lucide-react';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      likes: 245,
      comments: 32
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400",
      likes: 189,
      comments: 24
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=400",
      likes: 312,
      comments: 45
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=400",
      likes: 156,
      comments: 18
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400",
      likes: 278,
      comments: 36
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400",
      likes: 203,
      comments: 29
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-pink-100 px-4 py-2 rounded-full text-sm font-medium text-pink-700 mb-4">
            <Instagram className="w-4 h-4" />
            Gallery
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Share the
            <span className="text-pink-500"> Healthy Vibes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Join our community and share your Healthy Bowl moments. Tag us @healthybowl for a chance to be featured!
          </p>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer">
            <Instagram className="w-5 h-5" />
            Follow @healthybowl
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={item.image}
                alt={`Gallery item ${item.id}`}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4 text-red-400 fill-current" />
                        <span className="text-sm font-medium">{item.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm font-medium">{item.comments}</span>
                      </div>
                    </div>
                    <Instagram className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Heart className="w-4 h-4 text-white" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Want to see more delicious content?</p>
          <div className="flex justify-center gap-4">
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
              View All Photos
            </button>
            <button className="bg-white text-gray-700 border-2 border-gray-200 px-6 py-3 rounded-full font-semibold hover:border-gray-300 transition-all duration-300">
              Submit Your Photo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;