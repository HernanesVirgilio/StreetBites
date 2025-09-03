import React from 'react';
import { Phone, MapPin, Clock, Heart, Waves, Globe, Code } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-orange-500 via-red-500 to-yellow-500 p-3 rounded-full shadow-lg">
                <Waves className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Street Bites
                </h3>
                <p className="text-sm text-orange-300 font-medium">Delicious Food</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Os melhores sabores, entregues na sua porta. 
              Qualidade, rapidez e sabor em cada pedido.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-300">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400" />
                <span className="text-gray-300">+258 87 320 8008</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span className="text-gray-300">Matola Rio, Matola, Moçambique</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-orange-400" />
                <span className="text-gray-300">10:00 - 22:00 (Todos os dias)</span>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-300">Informações</h4>
            <div className="space-y-2 text-gray-300">
              <p>🚚 Entrega imediata</p>
              <p>⚡ Reserva rápida</p>
              <p>💰 Pedido mínimo: 75MT</p>
              <p>💳 Pagamento na entrega</p>
              <p>🥬 Ingredientes frescos</p>
              <p>📱 Atendimento via WhatsApp</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-1 text-gray-400">
              <span>© 2025 Street Bites. Feito com</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>com amor</span>
            </div>

            {/* Developer Credit */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 text-gray-400">
                <span>Desenvolvido pela</span>
                <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1 rounded-full">
                  <Code className="w-4 h-4 text-white" />
                  <span className="text-white font-bold text-sm">SuriiTech</span>
                </div>
                <span className="text-blue-400 font-medium">Web Design</span>
              </div>
              <div className="flex items-center space-x-1 text-blue-400">
                <Globe className="w-4 h-4" />
                <span className="text-xs">Soluções Digitais</span>
              </div>
            </div>
          </div>

          {/* Additional Professional Touch */}
          <div className="mt-4 pt-4 border-t border-gray-800">
            <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 space-y-2 md:space-y-0">
              <div className="flex items-center space-x-4">
                <span>🌐 Plataforma Web Profissional</span>
                <span>📱 Design Responsivo</span>
                <span>🔒 Sistema Seguro</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>Powered by</span>
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-bold">
                  SuriiTech Solutions
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};