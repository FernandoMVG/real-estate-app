// Rent.js
import React from 'react';
import {Typography } from '@mui/material';
import PropertyCard from '../components/PropertyCard';
import { rentProperties } from '../propertiesData';
import { Link } from 'react-router-dom';

const Rent = () => {
  return (
   <>
    <section className='h-full max-h-[640px] mb-8 xl:mb-15 bg-[#FFFFE0] block rounded-lg shadow-lg overflow-hidden'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
            <span className='text-indigo-700'>Renta</span> la casa que se acomode a tí.
          </h1>
          <p className='max-w mb-8 text-lg font-semibold text-gray-700 lg:text-[20px]'>
          Encuentra la casa perfecta para ti, ya sea alquilando o rentando. 
          Descubre opciones que se ajusten a tus necesidades y estilo de vida. 
          Desde acogedores apartamentos hasta amplias casas familiares, nuestra selección ofrece una variedad de opciones para cada presupuesto. Comienza hoy mismo tu búsqueda y encuentra el hogar que realmente se acomode a ti.
          </p>
        </div>
        {/* image */}
        <div className='hidden flex-1 lg:flex justify-end items-end '>
          <img src="https://via.placeholder.com/800x600" alt="casa alquiler" />
        </div>
      </div>
    </section>
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Propiedades en Renta</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> {/* Reemplaza Grid con clases de Tailwind CSS */}
        {rentProperties.map((property) => (
          <Link key={property._id} to={`/property/rent/${property._id}`}>
            <PropertyCard property={property} />
          </Link>
        ))}
      </div>
    </div>
    </>
  );
};

export default Rent;