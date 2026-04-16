"use client";

import { useEffect, useState } from "react";

type Patient = {
  id: string;
  nik: string;
  name: string;
  birthdate: string;
  gender: string;
  phone: string;
  poli: string;
  registrationDate: string;
};

export default function PatientList() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const res = await fetch("/api/patients");
        if (res.ok) {
          const data = await res.json();
          setPatients(data.patients);
        }
      } catch (error) {
        console.error("Failed to fetch patients", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Memuat data pasien...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <header className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Daftar Pasien Terdaftar</h2>
          <p className="text-gray-600 mt-1">Data pasien yang masuk hari ini</p>
        </div>
      </header>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-4 font-semibold text-gray-900">Nama Lengkap</th>
                <th className="px-6 py-4 font-semibold text-gray-900">NIK</th>
                <th className="px-6 py-4 font-semibold text-gray-900">Tanggal Lahir</th>
                <th className="px-6 py-4 font-semibold text-gray-900">Jenis Kelamin</th>
                <th className="px-6 py-4 font-semibold text-gray-900">Poli Tujuan</th>
                <th className="px-6 py-4 font-semibold text-gray-900">Waktu Daftar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {patients.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                    Belum ada pasien terdaftar.
                  </td>
                </tr>
              ) : (
                patients.map((patient) => (
                  <tr key={patient.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">{patient.name}</td>
                    <td className="px-6 py-4 text-gray-600">{patient.nik}</td>
                    <td className="px-6 py-4 text-gray-600">{patient.birthdate}</td>
                    <td className="px-6 py-4 text-gray-600">
                      {patient.gender === 'l' ? 'Laki-laki' : 'Perempuan'}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 capitalize">
                        {patient.poli}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm">
                      {new Date(patient.registrationDate).toLocaleString('id-ID')}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
