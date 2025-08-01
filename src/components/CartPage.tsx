import React from 'react';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, CreditCard } from 'lucide-react';

interface CartPageProps {
  onBack: () => void;
}

const CartPage: React.FC<CartPageProps> = ({ onBack }) => {
  const { state, updateQuantity, removeItem, clearCart, getTotalPrice } = useCart();

  const subtotal = getTotalPrice();
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={onBack}
            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Your Cart</h1>
            <p className="text-gray-600">Review your order before checkout</p>
          </div>
        </div>

        {state.items.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center shadow-lg">
            <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Looks like you haven't added any items yet.</p>
            <button
              onClick={onBack}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold text-gray-800">Order Items</h2>
                    <button
                      onClick={clearCart}
                      className="text-red-500 hover:text-red-600 text-sm font-medium transition-colors duration-200"
                    >
                      Clear All
                    </button>
                  </div>
                </div>

                <div className="divide-y divide-gray-100">
                  {state.items.map((item) => (
                    <div key={item.id} className="p-6">
                      <div className="flex items-start gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 rounded-2xl object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                            </div>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-red-400 hover:text-red-600 transition-colors duration-200"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>

                          <div className="flex gap-2 mb-3">
                            {item.badges.map((badge, index) => (
                              <span
                                key={index}
                                className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium"
                              >
                                {badge}
                              </span>
                            ))}
                          </div>

                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="text-lg font-semibold w-8 text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
                              >
                                <Plus className="w-4 h-4 text-white" />
                              </button>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-gray-500">${item.price.toFixed(2)} each</p>
                              <p className="text-xl font-bold text-green-600">
                                ${(item.price * item.quantity).toFixed(2)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl shadow-lg p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax (8%)</span>
                    <span className="font-semibold">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between">
                      <span className="text-lg font-bold text-gray-800">Total</span>
                      <span className="text-2xl font-bold text-green-600">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-2xl font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 mb-4">
                  <CreditCard className="w-5 h-5" />
                  Proceed to Checkout
                </button>

                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-2">Estimated delivery time</p>
                  <p className="font-semibold text-gray-800">25-35 minutes</p>
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-2xl">
                  <p className="text-sm text-green-700 font-medium">🚚 Free delivery on orders over $25!</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;