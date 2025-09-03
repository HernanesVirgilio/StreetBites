import React from 'react';
import { ShoppingCart, Phone, MapPin, Waves } from 'lucide-react';
import { useCart } from '../hooks/useCart';

interface HeaderProps {
  onCartClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
  const { getOrderSummary } = useCart();
  const { itemCount } = getOrderSummary();

  return (
    <header className="bg-white shadow-xl sticky top-0 z-50 border-b-2 border-orange-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-orange-500 via-red-500 to-yellow-500 p-3 rounded-full shadow-lg">
              <Waves className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                BurgStreet
              </h1>
              <p className="text-sm text-orange-600 font-medium">Matola Rio Foods</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-600 bg-orange-50 px-3 py-2 rounded-lg">
              <Phone className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium">+258 87 320 8008</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 bg-orange-50 px-3 py-2 rounded-lg">
              <MapPin className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium">Matola Rio, Moçambique</span>
            </div>
          </div>

          <button
            onClick={onCartClick}
            className="relative bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-xl flex items-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="hidden sm:inline font-medium">Carrinho</span>
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg animate-pulse">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};