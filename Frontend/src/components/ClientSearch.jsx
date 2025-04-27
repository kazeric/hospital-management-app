// src/components/ClientSearch.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchClients } from '../api/Api';

function ClientSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [clients, setClients] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      const results = await searchClients(searchTerm);
      setClients(results);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-2xl font-bold mb-4">Search Clients</h2>
        <form onSubmit={handleSearch} className="flex gap-4">
          <input
            type="text"
            className="flex-1 border rounded p-2"
            placeholder="Search by name or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Search
          </button>
        </form>
      </div>

      {clients.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-4">Search Results</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Gender</th>
                  <th className="px-4 py-2 text-left">Contact</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client) => (
                  <tr key={client._id} className="border-b">
                    <td className="px-4 py-2">
                      {client.fullName}
                    </td>
                    <td className="px-4 py-2">{client.gender}</td>
                    <td className="px-4 py-2">{client.contactNumber}</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => navigate(`/clients/${client._id}`)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        View Profile
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default ClientSearch;