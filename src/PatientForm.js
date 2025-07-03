// src/PatientForm.js
import React, { useState } from 'react';

export default function PatientForm({ onAdd }) {
  const [name, setName] = useState('');
  const [doctor, setDoctor] = useState('');
  const [bp, setBp] = useState('');
  const [cholesterol, setCholesterol] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!name) return;

    onAdd({
      id: `p${Date.now()}`,
      name,
      doctor,
      bloodPressure: bp,
      cholesterol
    });

    // پاک کردن فیلدها
    setName('');
    setDoctor('');
    setBp('');
    setCholesterol('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Patient</h3>
      <div>
        <label>Name: </label>
        <input value={name} onChange={e => setName(e.target.value)} required />
      </div>
      <div>
        <label>Doctor: </label>
        <input value={doctor} onChange={e => setDoctor(e.target.value)} />
      </div>
      <div>
        <label>Blood Pressure: </label>
        <input value={bp} onChange={e => setBp(e.target.value)} />
      </div>
      <div>
        <label>Cholesterol: </label>
        <input value={cholesterol} onChange={e => setCholesterol(e.target.value)} />
      </div>
      <button type="submit">Add Patient</button>
    </form>
  );
}
