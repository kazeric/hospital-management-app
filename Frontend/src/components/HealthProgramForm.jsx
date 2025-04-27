// src/components/HealthProgramForm.jsx
import React, { useState } from 'react';
import { createProgram } from '../api/Api';


function HealthProgramForm() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    duration: '',
    requirements: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProgram(formData);
      alert('Program created successfully!');
      setFormData({ name: '', description: '', duration: '', requirements: '' });
    } catch (error) {
      alert('Error creating program: ' + error.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Create New Health Program</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Program Name</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Description</label>
          <textarea
            className="w-full border rounded p-2"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Duration (months)</label>
          <input
            type="number"
            className="w-full border rounded p-2"
            value={formData.duration}
            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Requirements</label>
          <textarea
            className="w-full border rounded p-2"
            value={formData.requirements}
            onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Create Program
        </button>
      </form>
    </div>
  );
}

export default HealthProgramForm;