import React, { useState, useEffect } from 'react';

const AddService = ({ onAddService }) => {
  const [newServiceName, setNewServiceName] = useState('');
  const [newServiceCategory, setNewServiceCategory] = useState('');
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/services')
      .then(response => response.json())
      .then(data => setServices(data))
      .catch(error => console.error('Error fetching services:', error));
  }, []);

  const handleAddService = async () => {
    if (newServiceName.trim() === '' || newServiceCategory.trim() === '') {
      alert('Please enter both service name and category');
      return;
    }

    try {
      const response = await fetch('/services', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          name: newServiceName,
          category: newServiceCategory 
        }),
      });
      if (response.ok) {
        const newService = await response.json();
        onAddService(newService);
        setNewServiceName('');
        setNewServiceCategory('');
        setServices([...services, newService]); // Add the new service to the list
        window.alert('Service added successfully!');
      } else {
        console.error('Failed to add new service');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDeleteService = async (serviceId) => {
    try {
      const response = await fetch(`/services/${serviceId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        // Remove the deleted service from the list
        setServices(services.filter(service => service.id !== serviceId));
        window.alert('Service deleted successfully!');
      } else {
        console.error('Failed to delete service');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Add New Service</h2>
      <input
        type="text"
        id="serviceName"
        name="serviceName"
        placeholder="Enter service name"
        value={newServiceName}
        onChange={e => setNewServiceName(e.target.value)}
        className="block w-full mb-2 p-2 border rounded"
      />
      <input
        type="text"
        id="serviceCategory"
        name="serviceCategory"
        placeholder="Enter service category"
        value={newServiceCategory}
        onChange={e => setNewServiceCategory(e.target.value)}
        className="block w-full mb-2 p-2 border rounded"
      />
      <button
        onClick={handleAddService}
        className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Service
      </button>

      {/* Search input field */}
      <input
        type="text"
        placeholder="Search by service name"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="block w-full mb-2 p-2 border rounded"
      />

      {/* Display added services in table format */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Services</h2>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredServices.map(service => (
              <tr key={service.id}>
                <td className="border px-4 py-2">{service?.name}</td>
                <td className="border px-4 py-2">{service?.category}</td>
                <td className="border px-4 py-2">
                  <button onClick={() => handleDeleteService(service.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddService;
