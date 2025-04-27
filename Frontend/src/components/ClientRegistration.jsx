// src/components/ClientRegistration.jsx
import React, { useState } from 'react';
import { registerClient } from '../api/Api';

function ClientRegistration() {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    contactNumber: '',
    address: '',
    medicalHistory: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerClient(formData);
      alert('Client registered successfully!');
      setFormData({
        fullName: '',
        dateOfBirth: '',
        gender: '',
        contactNumber: '',
        address: '',
        medicalHistory: ''
      });
    } catch (error) {
      alert('Error registering client: ' + error.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Register New Client</h2>
      <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              value={formData.fulltName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              required
            />
          </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Date of Birth</label>
            <input
              type="date"
              className="w-full border rounded p-2"
              value={formData.dateOfBirth}
              onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Gender</label>
            <select
              className="w-full border rounded p-2"
              value={formData.gender}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Contact Number</label>
          <input
            type="tel"
            className="w-full border rounded p-2"
            value={formData.contactNumber}
            onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Address</label>
          <textarea
            className="w-full border rounded p-2"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Medical History</label>
          <textarea
            className="w-full border rounded p-2"
            value={formData.medicalHistory}
            onChange={(e) => setFormData({ ...formData, medicalHistory: e.target.value })}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Register Client
        </button>
      </form>
      
    </div>
  );
}

export default ClientRegistration;