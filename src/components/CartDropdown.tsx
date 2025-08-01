import React from 'react';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

interface CartDropdownProps {
  isOpen: boolean;
  onCheckout: () => void;
}

const CartDropdown: React.FC<CartDropdownProps> = ({ isOpen, onCheckout }) => {
  const { state, updateQuantity, removeItem, getTotalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <div className="absolute top-full right-0 mt-2 w-96 bg-white rounded-3xl shadow-2xl border border-gray-100 z-50 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <ShoppingBag className="w-5 h-5 text-green-500" />
          <h3 className="text-lg font-bold text-gray-800">Your Cart</h3>
        </div>

        {state.items.length === 0 ? (
          <div className="text-center py-8">
            <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">Your cart is empty</p>
            <p className="text-sm text-gray-400">Add some delicious items to get started!</p>
          </div>
        ) : (
          <>
            <div className="space-y-4 max-h-64 overflow-y-auto">
              {state.items.map((item) => (
                <div key={item.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm truncate">{item.name}</h4>
                    <p className="text-green-600 font-bold text-sm">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-200"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
                    >
                      <Plus className="w-3 h-3 text-white" />
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center hover:bg-red-200 transition-colors duration-200 ml-1"
                    >
                      <Trash2 className="w-3 h-3 text-red-500" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-bold text-gray-800">Total:</span>
                <span className="text-2xl font-bold text-green-600">${getTotalPrice().toFixed(2)}</span>
              </div>
              <button
                onClick={onCheckout}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Proceed to Checkout
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartDropdown;