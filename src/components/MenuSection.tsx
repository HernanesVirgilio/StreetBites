import React, { useState } from 'react';
import { MenuItem } from '../types';
import { Plus, Minus } from 'lucide-react';
import { useCart } from '../hooks/useCart';

interface MenuSectionProps {
  items: MenuItem[];
}

export const MenuSection: React.FC<MenuSectionProps> = ({ items }) => {
  const [activeCategory, setActiveCategory] = useState<string>('hamburger');
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const { addToCart } = useCart();

  const categories = [
    { id: 'hamburger', name: 'Hambúrgueres', icon: '🍔' },
    { id: 'sandwich', name: 'Sanduíches', icon: '🥪' },
    { id: 'takeaway', name: 'Takeaways', icon: '🍽️' }
  ];

  const filteredItems = items.filter(item => item.category === activeCategory);

  const getQuantity = (itemId: string) => quantities[itemId] || 1;

  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantities(prev => ({
        ...prev,
        [itemId]: newQuantity
      }));
    }
  };

  const handleAddToCart = (item: MenuItem) => {
    const quantity = getQuantity(item.id);
    addToCart(item, quantity);
    // Reset quantity after adding to cart
    setQuantities(prev => ({
      ...prev,
      [item.id]: 1
    }));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nosso Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubra nossa seleção de pratos deliciosos, preparados com ingredientes frescos e muito amor
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 bg-white rounded-xl p-2 shadow-lg max-w-2xl mx-auto border border-orange-100">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all font-medium ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg transform scale-105'
                  : 'text-gray-600 hover:bg-orange-50 hover:text-orange-600'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-orange-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  {item.price}MT
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{item.description}</p>
                
                {/* Quantity Selector */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-700">Quantidade:</span>
                  <div className="flex items-center space-x-3 bg-orange-50 rounded-lg p-1">
                    <button
                      onClick={() => updateQuantity(item.id, getQuantity(item.id) - 1)}
                      className="w-8 h-8 bg-white text-orange-600 rounded-lg flex items-center justify-center hover:bg-orange-100 transition-colors shadow-sm border border-orange-200"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-bold text-lg text-gray-800 min-w-[2rem] text-center">
                      {getQuantity(item.id)}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, getQuantity(item.id) + 1)}
                      className="w-8 h-8 bg-white text-orange-600 rounded-lg flex items-center justify-center hover:bg-orange-100 transition-colors shadow-sm border border-orange-200"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Total Price */}
                <div className="text-center mb-4">
                  <span className="text-sm text-gray-600">Total: </span>
                  <span className="text-xl font-bold text-orange-600">
                    {item.price * getQuantity(item.id)}MT
                  </span>
                </div>
                
                <button
                  onClick={() => handleAddToCart(item)}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 px-4 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Plus className="w-5 h-5" />
                  <span>Adicionar ao Carrinho</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};