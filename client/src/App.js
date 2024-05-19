import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Buy from './pages/Buy';
import Rent from './pages/Rent';
import Finance from './pages/Finance';
import PropertyDetails from './components/PropertyDetails';
import LoginForm from './components/LoginForm';
import UserDashboard from './components/UserDashboard';
import PropertyDetailsBuy from './components/PropertyDetailsBuy';
import PropertyDetailsRent from './components/PropertyDetailsRent';
import { buyProperties, rentProperties } from './propertiesData'; // Importa los datos


const App = () => {

  const getPropertyById = (id, purpose) => {
    if (purpose === 'buy') {
      return Buy().properties.find(property => property._id === parseInt(id));
    } else if (purpose === 'rent') {
      return Rent().properties.find(property => property._id === parseInt(id));
    }
    return null;
  };

  const PropertyDetailsWrapper = () => {
    const { purpose, id } = useParams();
    const properties = purpose === 'buy' ? buyProperties : rentProperties;
    const property = properties.find(property => property._id === parseInt(id));

    if (purpose === 'buy') {
      return <PropertyDetailsBuy property={property} />;
    } else if (purpose === 'rent') {
      return <PropertyDetailsRent property={property} />;
    }
    return null;
  };

  return (
    <Router>
      <Navbar />
      <div className="pt-16"> {/* Add padding-top here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/property/:purpose/:id" element={<PropertyDetailsWrapper />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<UserDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;