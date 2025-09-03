import React, { useState } from 'react';
import { X, User, Phone, MapPin, MessageCircle, Loader2, CheckCircle } from 'lucide-react';
import { supabase, OrderRequest } from '../lib/supabase';

interface OrderFormProps {
  isOpen: boolean;
  onClose: () => void;
  orderItems: string;
  totalAmount: number;
}

export const OrderForm: React.FC<OrderFormProps> = ({ 
  isOpen, 
  onClose, 
  orderItems, 
  totalAmount 
}) => {
  const [formData, setFormData] = useState({
    customerName: '',
    phoneNumber: '',
    address: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const orderRequest: Omit<OrderRequest, 'id' | 'created_at'> = {
        customer_name: formData.customerName,
        phone_number: formData.phoneNumber,
        address: formData.address,
        order_items: orderItems,
        total_amount: totalAmount,
        notes: formData.notes,
        status: 'pending'
      };

      const { error } = await supabase
        .from('order_requests')
        .insert([orderRequest]);

      if (error) {
        throw error;
      }

      setSubmitSuccess(true);
      
      // Create formatted WhatsApp message
      const currentTime = new Date().toLocaleString('pt-MZ', {
        timeZone: 'Africa/Maputo',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

      const orderItemsFormatted = orderItems.split('%0A').map(item => 
        `• ${item.replace(/%20/g, ' ')}`
      ).join('%0A');

      const message = `🍔 *NOVO PEDIDO - BurgStreet*%0A` +
        `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━%0A%0A` +
        `👤 *DADOS DO CLIENTE*%0A` +
        `📝 Nome: ${formData.customerName}%0A` +
        `📱 Telefone: ${formData.phoneNumber}%0A` +
        `📍 Endereço: ${formData.address}%0A%0A` +
        `🛒 *ITENS DO PEDIDO*%0A` +
        `${orderItemsFormatted}%0A%0A` +
        `💰 *VALOR TOTAL: ${totalAmount}MT*%0A%0A` +
        `${formData.notes ? `📝 *OBSERVAÇÕES*%0A${formData.notes}%0A%0A` : ''}` +
        `⏰ *Data/Hora:* ${currentTime}%0A` +
        `🏪 *Restaurante:* Street Bites%0A%0A` +
        `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━%0A` +
        `✅ *Pedido registrado no sistema*%0A` +
        `🚚 *Entrega imediata disponível*`;

      const whatsappUrl = `https://wa.me/258873208008?text=${message}`;
      window.open(whatsappUrl, '_blank');

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          customerName: '',
          phoneNumber: '',
          address: '',
          notes: ''
        });
        setSubmitSuccess(false);
        onClose();
      }, 3000);

    } catch (error) {
      console.error('Error submitting order:', error);
      alert('Erro ao enviar pedido. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-xl font-bold">Finalizar Pedido</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <div className="p-6">
          {submitSuccess ? (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Pedido Enviado!</h3>
              <p className="text-gray-600 leading-relaxed">
                Seu pedido foi registrado com sucesso e enviado via WhatsApp. 
                <br />
                <span className="font-semibold text-orange-600">Entraremos em contacto em breve!</span>
              </p>
              <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                <p className="text-sm text-orange-700">
                  🚚 Preparando para entrega imediata
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Customer Name */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-2 text-orange-500" />
                  Nome Completo *
                </label>
                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-2 text-orange-500" />
                  Número de Telefone *
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="84 123 4567"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 inline mr-2 text-orange-500" />
                  Endereço de Entrega *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="Rua, bairro, referências..."
                />
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Observações (opcional)
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="Instruções especiais, preferências..."
                />
              </div>

              {/* Order Summary */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 border-2 border-orange-200">
                <h3 className="font-bold text-gray-800 mb-3 text-center">📋 Resumo do Pedido</h3>
                <div className="text-sm text-gray-700 mb-3 space-y-1">
                  {orderItems.split('%0A').map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <span>• {item.replace(/%20/g, ' ').split(' - ')[0]}</span>
                      <span className="font-semibold">{item.replace(/%20/g, ' ').split(' - ')[1]}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t-2 border-orange-300 pt-3 text-center">
                  <span className="text-lg font-bold text-orange-600">
                    💰 Total: {totalAmount}MT
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 px-4 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <MessageCircle className="w-5 h-5" />
                    <span>Enviar Pedido via WhatsApp</span>
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center leading-relaxed">
                Ao enviar, você será redirecionado para o WhatsApp para confirmação final.
                <br />
                Seu pedido será registrado em nosso sistema.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};