// src/App.js
import React, { useState } from 'react';
import './App.css';
import { QRCodeCanvas as QRCode } from 'qrcode.react';

import patientsData from './dataPatients';
import PatientForm from './PatientForm';
import PatientList from './PatientList';

// این خط رو اضافه کردیم:
import logo from './assets/ismile-logo.png';

function App() {
  const [activeTab, setActiveTab] = useState('Patients');
  const [patients, setPatients] = useState(patientsData);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleAddPatient = newPatient => {
    setPatients(prev => [...prev, newPatient]);
    setActiveTab('Patients');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Patients':
        return (
          <div>
            <PatientForm onAdd={handleAddPatient} />
            <PatientList
              patients={patients}
              onSelect={p => {
                setSelectedPatient(p);
                setActiveTab('Analytics');
              }}
            />
          </div>
        );
      case 'QR Code':
        return (
          <div>
            <h2>QR Code Generator</h2>
            <p>Scan this code to open the patient intake form:</p>
            <QRCode value="https://ismile.health/patient-intake" size={180} />
          </div>
        );
      case 'Analytics':
        return selectedPatient ? (
          <div>
            <h2>Health Analytics for {selectedPatient.name}</h2>
            <p>Doctor: {selectedPatient.doctor}</p>
            <p>Blood Pressure: {selectedPatient.bloodPressure}</p>
            <p>Cholesterol: {selectedPatient.cholesterol}</p>
          </div>
        ) : (
          <p>Please select a patient first.</p>
        );
      case 'About Us':
        return (
          <div>
            <h2>About iSmile</h2>
            <p>Our mission, team, and story.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="App">
      {/* =======   هدر با لوگو و عنوان   ======= */}
      <header className="App-header">
        <img src={logo} alt="iSmile Logo" className="App-logo" />
        <h1>
          <span className="highlight">iSmile</span> Health Dashboard
        </h1>
      </header>

      {/* =======   تب‌ها ======= */}
      <div className="tabs">
        {['Patients', 'QR Code', 'Analytics', 'About Us'].map(tab => (
          <button
            key={tab}
            className={tab === activeTab ? 'active-tab' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* =======   محتوای تب فعال ======= */}
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
}

export default App;
