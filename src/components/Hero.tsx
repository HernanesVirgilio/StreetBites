import React from 'react';
import { Clock, Truck, Award, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-orange-500 via-red-500 to-yellow-500 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/30 to-red-600/30"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-red-400 rounded-full opacity-20 animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Sabores <span className="text-yellow-300 drop-shadow-lg">Incríveis</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">
            Os melhores hambúrgueres, sanduíches e refeições. 
            <br className="hidden md:block" />
            <span className="font-semibold text-yellow-200">Entrega imediata e reserva rápida!</span>
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="flex flex-col items-center group">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-2xl mb-4 group-hover:bg-opacity-30 transition-all duration-300 shadow-lg">
                <Zap className="w-8 h-8 text-yellow-300" />
              </div>
              <h3 className="text-lg font-bold mb-2">Entrega Imediata</h3>
              <p className="text-sm opacity-90">Rapidez garantida</p>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-2xl mb-4 group-hover:bg-opacity-30 transition-all duration-300 shadow-lg">
                <Clock className="w-8 h-8 text-yellow-300" />
              </div>
              <h3 className="text-lg font-bold mb-2">Reserva Rápida</h3>
              <p className="text-sm opacity-90">Encomende com antecedência</p>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-2xl mb-4 group-hover:bg-opacity-30 transition-all duration-300 shadow-lg">
                <Award className="w-8 h-8 text-yellow-300" />
              </div>
              <h3 className="text-lg font-bold mb-2">Qualidade Premium</h3>
              <p className="text-sm opacity-90">Ingredientes frescos</p>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-2xl mb-4 group-hover:bg-opacity-30 transition-all duration-300 shadow-lg">
                <Truck className="w-8 h-8 text-yellow-300" />
              </div>
              <h3 className="text-lg font-bold mb-2">Pedido Mínimo</h3>
              <p className="text-sm opacity-90">Apenas 75MT</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};