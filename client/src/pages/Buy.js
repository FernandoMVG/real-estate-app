import React, { useState, useEffect } from 'react';
import PropertyCard from '../components/PropertyCard';
import Pagination from '../components/pagination';
import Filters from '../components/Filters';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import api from '../api';

const Buy = () => {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchProperties = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await api.get('/catalog', {
          params: {
            page: currentPage,
            pageSize,
            search,
            filter: JSON.stringify(filters),
          },
        });
        setProperties(response.data.catalog.data);
        setTotalPages(Math.ceil(response.data.catalog.metadata.totalCount / pageSize));
      } catch (error) {
        setError(error.response ? error.response.data.error : 'Error al obtener las propiedades');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProperties();
  }, [currentPage, pageSize, search, filters]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset to the first page on new filter
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1); // Reset to the first page on new search
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <section className="relative h-full max-h-[640px] mb-8 xl:mb-15 bg-lime-100 block rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0 py-8">
            <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
              <span className="text-indigo-700">Encuentra</span> el hogar de tus sueños.
            </h1>
            <p className="max-w-[600px] mb-8 text-lg font-semibold text-gray-700">
              Explora nuestra amplia selección de propiedades y descubre el lugar perfecto para ti.
              Desde elegantes apartamentos en el corazón de la ciudad hasta tranquilas casas en los suburbios,
              tenemos la opción ideal que se adapta a tu estilo de vida y presupuesto.
              Inicia tu búsqueda hoy y da el primer paso hacia el hogar de tus sueños.
            </p>
          </div>
          <div className="hidden flex-1 lg:flex justify-end items-end">
            <img src="/Imagenes/dreamhome.jpg" alt="casa alquiler" className="object-cover h-full w-full" />
          </div>
        </div>
      </section>
      
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-indigo-700">Propiedades en Venta</h2>
          <div className="flex items-center">
            <form onSubmit={handleSearchSubmit} className="flex items-center">
              <input
                type="text"
                placeholder="Buscar propiedades..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border border-gray-300 px-4 py-2 rounded-md"
              />
              <button type="submit" className="ml-2 px-4 py-2 bg-indigo-500 text-white rounded-md">Buscar</button>
            </form>
            <IconButton onClick={toggleSidebar} color="primary" className="ml-4">
              <FilterListIcon />
            </IconButton>
          </div>
        </div>
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar}>
          <Filters onFilterChange={handleFilterChange} />
        </Sidebar>
        {isLoading ? (
          <p className="text-center">Cargando propiedades...</p>
        ) : error ? (
          <p className="text-center text-red-500">Error: {error}</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {properties.map((property) => (
                <Link key={property._id} to={`/property/buy/${property._id}`}>
                  <PropertyCard property={property} />
                </Link>
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Buy;