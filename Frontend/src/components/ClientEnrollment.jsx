// src/components/ClientEnrollment.jsx
import React, { useState, useEffect } from 'react';
import { getPrograms, getClients, enrollClient } from '../api/Api';

function ClientEnrollment() {
  const [programs, setPrograms] = useState([]);
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState('');
  const [selectedPrograms, setSelectedPrograms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [programsData, clientsData] = await Promise.all([
        getPrograms(),
        getClients()
      ]);
      setPrograms(programsData);
      setClients(clientsData);
    };
    fetchData();
  }, []);
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await enrollClient(selectedClient, selectedPrograms);
      alert('Client enrolled successfully!');
      setSelectedClient('');
      setSelectedPrograms([]);
    } catch (error) {
      alert('Error enrolling client: ' + error.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Enroll Client in Programs</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Select Client</label>
          <select
            className="w-full border rounded p-2"
            value={selectedClient}
            onChange={(e) => setSelectedClient(e.target.value)}
            required
          >
            <option value="">Select a client</option>
            {clients.map((client) => (
              <option key={client._id} value={client._id}>
                {client.fullName} 
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Select Programs</label>
          <div className="space-y-2">
            {programs.map((program) => (
              <div key={program._id} className="flex items-center">
                <input
                  type="checkbox"
                  id={program._id}
                  value={program._id}
                  checked={selectedPrograms.includes(program._id)}
                  onChange={(e) => {
                    const programId = e.target.value;
                    setSelectedPrograms(
                      e.target.checked
                        ? [...selectedPrograms, programId]
                        : selectedPrograms.filter((_id) => _id !== programId)
                    );
                  }}
                  className="mr-2"
                />
                <label htmlFor={program._id}>{program.name}</label>
              </div>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={!selectedClient || selectedPrograms.length === 0}
        >
          Enroll Client
        </button>
      </form>
    </div>
  );
}

export default ClientEnrollment;