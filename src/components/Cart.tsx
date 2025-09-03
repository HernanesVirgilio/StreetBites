import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { OrderForm } from './OrderForm';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { cartItems, updateQuantity, removeFromCart, getOrderSummary, isMinimumOrderMet, clearCart } = useCart();
  const { items, total, itemCount } = getOrderSummary();
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);

  const handleOrderSubmit = () => {
    if (!isMinimumOrderMet()) {
      alert('Pedido mínimo de 75MT não atingido!');
      return;
    }

    setIsOrderFormOpen(true);
  };

  const handleOrderFormClose = () => {
    setIsOrderFormOpen(false);
    clearCart();
    onClose();
  };

  if (!isOpen) return null;

  const orderItemsText = items.map(item => 
    `${item.quantity}x ${item.name} - ${item.price * item.quantity}MT`
  ).join('%0A');

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
        <div className="bg-white w-full max-w-md h-full overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 flex items-center justify-between shadow-lg">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-6 h-6" />
              <h2 className="text-xl font-bold">Seu Carrinho</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="p-4">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="w-16 h-16 text-orange-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">Seu carrinho está vazio</p>
                <p className="text-gray-400 text-sm mt-2">Adicione alguns itens deliciosos!</p>
              </div>
            ) : (
              <>
                {/* Cart Items */}
                <div className="space-y-4 mb-6">
                  {items.map(item => (
                    <div key={item.id} className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 border border-orange-200 shadow-sm">
                      <div className="flex items-start space-x-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-xl shadow-md"
                        />
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-800">{item.name}</h3>
                          <p className="text-orange-600 font-bold">{item.price}MT cada</p>
                          
                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center space-x-2 bg-white rounded-lg p-1 shadow-sm">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors shadow-sm"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="font-bold px-3 text-gray-800">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors shadow-sm"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                            
                            <div className="text-right">
                              <div className="text-lg font-bold text-red-600">
                                {item.price * item.quantity}MT
                              </div>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 hover:text-red-700 transition-colors mt-1"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Summary */}
                <div className="border-t-2 border-orange-200 pt-4">
                  <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-4 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">Subtotal ({itemCount} itens)</span>
                      <span className="font-bold text-gray-800">{total}MT</span>
                    </div>
                    <div className="flex justify-between items-center text-xl font-bold">
                      <span className="text-gray-800">Total</span>
                      <span className="text-orange-600">{total}MT</span>
                    </div>
                  </div>

                  {/* Minimum Order Warning */}
                  {!isMinimumOrderMet() && (
                    <div className="bg-yellow-100 border-2 border-yellow-300 rounded-xl p-4 mb-4">
                      <p className="text-yellow-800 font-medium text-center">
                        ⚠️ Pedido mínimo: 75MT<br />
                        <span className="text-sm">(faltam {75 - total}MT)</span>
                      </p>
                    </div>
                  )}

                  {/* Order Button */}
                  <button
                    onClick={handleOrderSubmit}
                    disabled={!isMinimumOrderMet()}
                    className={`w-full py-4 px-4 rounded-xl flex items-center justify-center space-x-2 font-bold transition-all duration-300 shadow-lg ${
                      isMinimumOrderMet()
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white hover:shadow-xl transform hover:-translate-y-1'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span>Finalizar Pedido</span>
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-3">
                    Preencha seus dados para confirmar o pedido
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <OrderForm
        isOpen={isOrderFormOpen}
        onClose={handleOrderFormClose}
        orderItems={orderItemsText}
        totalAmount={total}
      />
    </>
  );
};