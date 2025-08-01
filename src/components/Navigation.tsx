import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf, ShoppingBag, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartDropdown from './CartDropdown';

interface NavigationProps {
  onCartClick: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onCartClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { state, toggleCart, closeCart, getTotalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                Healthy Bowl
              </h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-300 hover:text-green-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className={`p-2 rounded-full transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}>
              <User className="w-5 h-5" />
            </button>
            <div className="relative">
              <button 
                onClick={toggleCart}
                className={`p-2 rounded-full transition-colors duration-300 relative ${
                  isScrolled 
                    ? 'text-gray-700 hover:bg-gray-100' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <ShoppingBag className="w-5 h-5" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                    {getTotalItems()}
                  </span>
                )}
              </button>
              <CartDropdown isOpen={state.isOpen} onCheckout={onCartClick} />
            </div>
            <button 
              onClick={() => {
                closeCart();
                onCartClick();
              }}
              className={`p-2 rounded-full transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
            >
              <ShoppingBag className="w-5 h-5" />
            </button>
            <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Order Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-full transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 font-medium py-2 border-b border-gray-100 hover:text-green-500 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-4">
                <button className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-full font-semibold">
                  Order Now
                </button>
                <button 
                  onClick={() => {
                    setIsOpen(false);
                    onCartClick();
                  }}
                  className="p-3 bg-gray-100 rounded-full relative"
                >
                  <ShoppingBag className="w-5 h-5 text-gray-700" />
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                      {getTotalItems()}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;