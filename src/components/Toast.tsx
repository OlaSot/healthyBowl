import React, { useEffect, useState } from 'react';
import { CheckCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose, duration = 3000 }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setTimeout(onClose, 300); // Wait for exit animation
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible && !isAnimating) return null;

  return (
    <div className={`fixed top-24 right-6 z-50 transition-all duration-300 ${
      isAnimating ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
    }`}>
      <div className="bg-white rounded-2xl shadow-2xl border border-green-100 p-4 flex items-center gap-3 min-w-[280px]">
        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
          <CheckCircle className="w-5 h-5 text-white" />
        </div>
        <p className="text-gray-800 font-medium flex-1">{message}</p>
        <button
          onClick={() => {
            setIsAnimating(false);
            setTimeout(onClose, 300);
          }}
          className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Toast;