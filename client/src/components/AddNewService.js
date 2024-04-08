import React, { useState } from 'react';
import SearchForm from './SearchForm';
import AddService from './AddService';

const AddNewService = ({ onAddService }) => {
  // State for services if needed
  const [services, setServices] = useState([]);

  // Handler for searching services
  const handleSearch = (query) => {
    // Implement search functionality here
  };

  // Handler for adding a new service
  const handleAddService = (newService) => {
    setServices(prevServices => [...prevServices, newService]);
    onAddService(newService);
  };

  return (
    <div className="max-w-md mx-auto mt-8 mb-8"> {/* Added margin-bottom */}
      <SearchForm onSearch={handleSearch} />
      <AddService onAddService={handleAddService} />
      {/* Display existing services if needed */}
      {services.map(service => (
        <div key={service.id} className="flex items-center mt-4">
          <span className="mr-2">{service.name}</span>
          {/* Delete button can be added if needed */}
        </div>
      ))}
    </div>
  );
};

export default AddNewService;
