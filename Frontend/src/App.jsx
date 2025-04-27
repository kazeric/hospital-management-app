// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HealthProgramForm from "./components/HealthProgramForm";
import ClientRegistration from "./components/ClientRegistration";
import ClientEnrollment from "./components/ClientEnrollment";
import ClientSearch from "./components/ClientSearch";
import ClientProfile from "./components/ClientProfile";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<ClientSearch />} />
            <Route path="/programs/new" element={<HealthProgramForm />} />
            <Route path="/clients/new" element={<ClientRegistration />} />
            <Route path="/clients/enroll" element={<ClientEnrollment />} />
            <Route path="/clients/:id" element={<ClientProfile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
