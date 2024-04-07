import React, { useState } from 'react';

const AddService = ({ onAddService }) => {
  const [newServiceName, setNewServiceName] = useState('');
  const [newServiceCategory, setNewServiceCategory] = useState('');

  const handleAddService = async () => {
    if (newServiceName.trim() === '' || newServiceCategory.trim() === '') {
      alert('Please enter both service name and category');
      return;
    }

    try {
      // Make a POST request to add the new service
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
      } else {
        console.error('Failed to add new service');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

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
    </div>
  );
};

export default AddService;
