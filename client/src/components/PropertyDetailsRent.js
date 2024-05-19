import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import BathroomIcon from '@mui/icons-material/Bathroom';
import LocalParkingIcon from '@mui/icons-material/LocalParking';

const PropertyDetailsRent = ({ property }) => {
  const [startDate, setStartDate] = useState('');
  const [months, setMonths] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes implementar la lógica para enviar la solicitud de renta
    console.log('Solicitud de renta:', { propertyId: property._id, startDate, months });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">{property.location.address}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <img src={property.images[0]} alt={property.location.address} className="w-full h-96 object-cover" />
        </div>
        <div>
          <p className="text-gray-700">{property.description}</p>
          <div className="mt-4 flex items-center">
            {/* ... iconos de habitaciones, baños y parking ... */}
            
          </div>
          <p className="mt-4 text-2xl font-bold text-gray-900">${property.price}</p>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="date" 
                value={startDate} 
                onChange={(e) => setStartDate(e.target.value)} 
                className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
              <input 
                type="number" 
                value={months} 
                onChange={(e) => setMonths(e.target.value)} 
                placeholder="Meses" 
                className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
            </div>
            <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Solicitar Renta
            </button>
          </form>
          {/* ... calendario ... */}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsRent;