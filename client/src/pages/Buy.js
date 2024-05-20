// Buy.js
import React from 'react';
import PropertyCard from '../components/PropertyCard';
import { buyProperties } from '../propertiesData'; // Importa buyProperties
import { Link } from 'react-router-dom';
import '../Styles.css';

const Buy = () => {

  // Aquí podrías tener alguna lógica para obtener las propiedades y establecerlas en el estado

  return (
    <>
      <section className='h-full max-h-[640px] mb-8 xl:mb-15 bg-lime-100 block rounded-lg shadow-lg overflow-hidden'>
        <div className='flex flex-col lg:flex-row'>
          <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
            <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
              <span className='text-indigo-700'>Encuentra</span> el hogar de tus sueños.
            </h1>
            <p className='max-w mb-8 text-lg font-semibold text-gray-700'>
            Explora nuestra amplia selección de propiedades y descubre el lugar perfecto para ti. 
            Desde elegantes apartamentos en el corazón de la ciudad hasta tranquilas casas en los suburbios, tenemos la opción ideal que se adapta a tu estilo de vida y presupuesto. 
            Inicia tu búsqueda hoy y da el primer paso hacia el hogar de tus sueños.
            </p>
          </div>
          {/* image */}
          <div className='hidden flex-1 lg:flex justify-end items-end '>
            <img src="https://via.placeholder.com/800x600" alt="casa alquiler" />
          </div>
        </div>
      </section>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Propiedades en Venta</h2>
        <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {buyProperties.map((property) => (
            <Link key={property._id} to={`/property/buy/${property._id}`}>
              <PropertyCard property={property} /> 
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Buy;