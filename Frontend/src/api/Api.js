// src/api/Api.js
const API_BASE_URL = import.meta.env.VITE_API_URL;

// Health Programs
export async function createProgram(programData) {
  const response = await fetch(`${API_BASE_URL}/programs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(programData),
  });
  if (!response.ok) throw new Error('Failed to create program');
  return response.json();
}

export async function getPrograms() {
  const response = await fetch(`${API_BASE_URL}/programs`);
  if (!response.ok) throw new Error('Failed to fetch programs');
  return response.json();
}

// Clients
export async function registerClient(clientData) {
  const response = await fetch(`${API_BASE_URL}/clients/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(clientData),
  });
  if (!response.ok) throw new Error('Failed to register client');
  return response.json();
}

export async function getClients() {
  const response = await fetch(`${API_BASE_URL}/clients`);
  if (!response.ok) throw new Error('Failed to fetch clients');
  return response.json();
}

export async function searchClients(searchTerm) {
  const response = await fetch(`${API_BASE_URL}/clients/search?q=${encodeURIComponent(searchTerm)}`);
  if (!response.ok) throw new Error('Failed to search clients');
  return response.json();
}

export async function getClientProfile(clientId) {
  const response = await fetch(`${API_BASE_URL}/clients/${clientId}`);
  if (!response.ok) throw new Error('Failed to fetch client profile');
  return response.json();
}

export async function enrollClient(clientId, programIds) {
  const response = await fetch(`${API_BASE_URL}/clients/${clientId}/enroll`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ programIds }),
  });
  if (!response.ok) throw new Error('Failed to enroll client');
  return response.json();
}