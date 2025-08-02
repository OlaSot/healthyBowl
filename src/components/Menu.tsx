import React, { useState } from 'react';
import { Filter, Star, Clock, Leaf } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Toast from './Toast';

const Menu = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [toast, setToast] = useState({ show: false, message: '' });
  const { addItem } = useCart();

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'bowls', label: 'Bowls' },
    { id: 'smoothies', label: 'Smoothies' },
    { id: 'salads', label: 'Salads' },
    { id: 'vegan', label: 'Vegan' },
    { id: 'protein', label: 'High Protein' }
  ];

  const menuItems = [
    {
      id: 1,
      name: "Rainbow Buddha Bowl",
      description: "Quinoa, roasted sweet potato, avocado, chickpeas, red cabbage, and tahini dressing",
      price: "$14.99",
      image: "/rainbowl.webp",
      category: ['all', 'bowls', 'vegan'],
      rating: 4.9,
      time: "10 min",
      badges: ['Vegan', 'Gluten-Free']
    },
    {
      id: 2,
      name: "Green Goddess Smoothie",
      description: "Spinach, mango, banana, coconut milk, chia seeds, and spirulina",
      price: "$8.99",
      image: "/greenSmoothie.webp",
      category: ['all', 'smoothies', 'vegan'],
      rating: 4.8,
      time: "5 min",
      badges: ['Vegan', 'Raw']
    },
    {
      id: 3,
      name: "Power Protein Bowl",
      description: "Grilled chicken, quinoa, broccoli, sweet potato, and almond butter sauce",
      price: "$16.99",
      image: "/proteinBow.webp",
      category: ['all', 'bowls', 'protein'],
      rating: 4.7,
      time: "12 min",
      badges: ['High Protein', 'Gluten-Free']
    },
    {
      id: 4,
      name: "Mediterranean Salad",
      description: "Mixed greens, cherry tomatoes, olives, feta cheese, and olive oil dressing",
      price: "$12.99",
      image: "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: ['all', 'salads'],
      rating: 4.6,
      time: "8 min",
      badges: ['Vegetarian']
    },
    {
      id: 5,
      name: "Tropical Paradise Bowl",
      description: "Acai base, mango, pineapple, coconut flakes, and granola",
      price: "$13.99",
      image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: ['all', 'bowls', 'vegan'],
      rating: 4.9,
      time: "7 min",
      badges: ['Vegan', 'Raw']
    },
    {
      id: 6,
      name: "Chocolate Protein Smoothie",
      description: "Chocolate protein, banana, almond milk, peanut butter, and cacao",
      price: "$9.99",
      image: "/chocoProtein.webp",
      category: ['all', 'smoothies', 'protein'],
      rating: 4.8,
      time: "5 min",
      badges: ['High Protein', 'Vegan']
    }
  ];

  const handleAddToCart = (item: typeof menuItems[0]) => {
    addItem({
      id: item.id,
      name: item.name,
      description: item.description,
      price: parseFloat(item.price.replace('$', '')),
      image: item.image,
      badges: item.badges
    });
    
    setToast({
      show: true,
      message: `✅ ${item.name} added to cart!`
    });
  };

  const filteredItems = menuItems.filter(item => 
    activeFilter === 'all' || item.category.includes(activeFilter)
  );

  return (
    <>
      <Toast
        message={toast.message}
        isVisible={toast.show}
        onClose={() => setToast({ show: false, message: '' })}
      />
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full text-sm font-medium text-purple-700 mb-4">
            <Filter className="w-4 h-4" />
            Our Menu
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Fresh & Flavorful
            <span className="text-purple-500"> Creations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each dish is carefully crafted with premium ingredients to fuel your body and delight your taste buds.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {item.badges.map((badge, index) => (
                    <span
                      key={index}
                      className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <Leaf className="w-4 h-4 text-green-500" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                  <span className="text-2xl font-bold text-green-500">{item.price}</span>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{item.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{item.time}</span>
                  </div>
                </div>

                <button 
                  onClick={() => handleAddToCart(item)}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white text-gray-700 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
    </>
  );
};

export default Menu;