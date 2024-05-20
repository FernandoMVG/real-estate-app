import React from 'react';

const Home = () => {
  return (
    <div className="relative">
      <img 
        src="/ruta/a/tu/imagen.jpg" // Reemplaza con la ruta a tu imagen
        alt="Imagen de fondo" 
        className="w-full h-screen object-cover" 
      />
      <div className="absolute top-0 left-0 w-full h-full bg-purple-500 opacity-75"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-5xl font-bold mb-4">LLEGATE AL LUGAR QUE ESTABAS BUSCANDO</h1>
        <h2 className="text-7xl font-bold mb-8">Compramos tu vivienda en 10 días*</h2>
        <p className="text-lg mb-6">Solicita una oferta gratis ingresando la dirección, características del inmueble y tus datos de contacto. Uno de nuestros expertos te hará una oferta.</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <input 
            type="text" 
            placeholder="Escribe tu dirección..." 
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white" 
          />
          <button className="bg-white text-purple-500 font-bold py-2 px-6 rounded-lg">
            Solicitar oferta
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;