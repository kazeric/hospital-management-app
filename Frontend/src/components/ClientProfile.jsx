// src/components/ClientProfile.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getClientProfile } from '../api/Api';

function ClientProfile() {
  const { id } = useParams();
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClientProfile = async () => {
      try {
        const data = await getClientProfile(id);
        setClient(data);
      } catch (error) {
        alert('Error fetching client profile: ' + error.message);
      } finally {
        setLoading(false);id;
      }
    };
    fetchClientProfile();
  }, [id]);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (!client) {
    return <div className="text-center py-8">Client not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Client Profile</h2>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
          <div className="space-y-2">
            <p>
              <span className="font-medium">Name:</span> {client.fullName}
              
            </p>
            <p>
              <span className="font-medium">Date of Birth:</span>{" "}
              {new Date(client.dateOfBirth).toLocaleDateString()}
            </p>
            <p>
              <span className="font-medium">Gender:</span> {client.gender}
            </p>
            <p>
              <span className="font-medium">Contact:</span>{" "}
              {client.contactNumber}
            </p>
            <p>
              <span className="font-medium">Address:</span> {client.address}
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Medical History</h3>
          <p className="whitespace-pre-wrap">{client.medicalHistory}</p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Enrolled Programs</h3>
        {client.enrolledPrograms.length > 0 ? (
          <div className="grid gap-4">
            {client.enrolledPrograms.map((program) => (
              <div key={program._id} className="border p-4 rounded">
                <h4 className="font-medium">{program.name}</h4>
                <p className="text-gray-600">{program.description}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Duration: {program.duration} months
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Not enrolled in any programs</p>
        )}
      </div>
    </div>
  );
}

export default ClientProfile;