import React from 'react';
import { Phone, MapPin, Clock, MessageCircle, ExternalLink, Navigation, Car } from 'lucide-react';

export const Contact: React.FC = () => {
  const handleWhatsAppContact = () => {
    const message = 'Olá! Gostaria de saber mais sobre o BurgStreet.';
    const whatsappUrl = `https://wa.me/258873208008?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleOpenGoogleMaps = () => {
    const mapsUrl = 'https://www.google.com/maps/search/Matola+Rio,+Matola,+Mozambique';
    window.open(mapsUrl, '_blank');
  };

  const handleGetDirections = () => {
    const directionsUrl = 'https://www.google.com/maps/dir//Matola+Rio,+Matola,+Mozambique';
    window.open(directionsUrl, '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Entre em Contacto</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tem alguma dúvida ou sugestão? Estamos aqui para ajudar!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="bg-gradient-to-br from-orange-100 to-red-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-orange-200 group-hover:to-red-200 transition-all duration-300 shadow-lg">
              <Phone className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-800">Telefone</h3>
            <p className="text-gray-600 font-medium">+258 87 320 8008</p>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-orange-100 to-red-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-orange-200 group-hover:to-red-200 transition-all duration-300 shadow-lg">
              <MapPin className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-800">Localização</h3>
            <p className="text-gray-600 font-medium">Matola Rio<br />Matola, Moçambique</p>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-orange-100 to-red-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-orange-200 group-hover:to-red-200 transition-all duration-300 shadow-lg">
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-800">Horário</h3>
            <p className="text-gray-600 font-medium">Segunda - Domingo<br />10:00 - 22:00</p>
          </div>

          <div className="text-center group">
            <button
              onClick={handleWhatsAppContact}
              className="bg-gradient-to-br from-green-100 to-green-200 hover:from-green-200 hover:to-green-300 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <MessageCircle className="w-8 h-8 text-green-600" />
            </button>
            <h3 className="text-lg font-bold mb-2 text-gray-800">WhatsApp</h3>
            <button
              onClick={handleWhatsAppContact}
              className="text-green-600 hover:text-green-700 transition-colors font-medium"
            >
              Falar connosco
            </button>
          </div>
        </div>

        {/* Location Card - Alternative to Map */}
        <div className="mt-12">
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-orange-200">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-full">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Nossa Localização</h3>
                    <p className="text-orange-100 text-lg">Encontre-nos facilmente</p>
                  </div>
                </div>
                <div className="hidden md:flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-lg">
                  <Navigation className="w-5 h-5" />
                  <span className="font-medium">Matola Rio</span>
                </div>
              </div>
            </div>

            {/* Visual Map Representation */}
            <div className="relative bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 p-8">
              {/* Decorative Map Elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-32 h-32 bg-green-400 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-24 h-24 bg-blue-400 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-orange-300 rounded-full"></div>
              </div>

              {/* Location Info Card */}
              <div className="relative z-10 max-w-2xl mx-auto">
                <div className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-orange-200">
                  <div className="text-center mb-6">
                    <div className="bg-gradient-to-br from-orange-500 to-red-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <MapPin className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">BurgStreet</h4>
                    <p className="text-lg text-orange-600 font-semibold">Matola Rio Foods</p>
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">Street Bites</h4>
                    <p className="text-lg text-orange-600 font-semibold">Delicious Food</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="text-center p-4 bg-orange-50 rounded-xl">
                      <MapPin className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                      <h5 className="font-bold text-gray-800 mb-1">Endereço</h5>
                      <p className="text-gray-600">Matola Rio<br />Matola, Moçambique</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-xl">
                      <Phone className="w-6 h-6 text-green-500 mx-auto mb-2" />
                      <h5 className="font-bold text-gray-800 mb-1">Contacto</h5>
                      <p className="text-gray-600">+258 87 320 8008</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <button
                      onClick={handleOpenGoogleMaps}
                      className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-4 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-medium"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Ver no Maps</span>
                    </button>
                    
                    <button
                      onClick={handleGetDirections}
                      className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 py-4 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-medium"
                    >
                      <Car className="w-5 h-5" />
                      <span>Como Chegar</span>
                    </button>
                    
                    <button
                      onClick={handleWhatsAppContact}
                      className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-4 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-medium"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Info */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 border-t border-orange-200">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                <div className="flex items-center space-x-3 text-gray-600">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Clock className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-semibold">Horário de Funcionamento</p>
                    <p className="text-sm">Segunda a Domingo: 10:00 - 22:00</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-600">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Car className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="font-semibold">Entrega Disponível</p>
                    <p className="text-sm">Entrega imediata • Reserva rápida</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Location Info */}
        <div className="mt-8 text-center">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-200 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-4">🗺️ Como nos encontrar</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <MapPin className="w-4 h-4 text-blue-500" />
                </div>
                <div>
                  <p className="font-semibold">Localização</p>
                  <p>Zona de Matola Rio, fácil acesso</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Car className="w-4 h-4 text-green-500" />
                </div>
                <div>
                  <p className="font-semibold">Transporte</p>
                  <p>Acessível por carro e transporte público</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Phone className="w-4 h-4 text-orange-500" />
                </div>
                <div>
                  <p className="font-semibold">Contacto</p>
                  <p>Ligue para mais informações</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};