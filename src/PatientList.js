// src/PatientList.js
import React from 'react';
// QRCodeCanvas را از پکیج qrcode.react ایمپورت می‌کنیم
import { QRCodeCanvas } from 'qrcode.react';

export default function PatientList({ patients, onSelect }) {
  return (
    <div>
      <h3>Patient List</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {patients.map(patient => (
          <li
            key={patient.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1rem',
              gap: '1rem'
            }}
          >
            {/* دکمه انتخاب بیمار */}
            <button
              onClick={() => onSelect(patient)}
              style={{
                flexGrow: 1,
                padding: '0.5rem 1rem',
                textAlign: 'left'
              }}
            >
              {patient.name} — {patient.doctor}
            </button>

            {/* QR Code اختصاصی هر بیمار */}
            <QRCodeCanvas
              value={`https://ismile.health/patient/${patient.id}`}
              size={64}
              level="H"
              includeMargin={true}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
