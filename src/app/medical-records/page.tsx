"use client";

import { Search, FileText } from "lucide-react";
import { useEffect, useState } from "react";

type MedicalRecord = {
  id: string;
  createdAt: string;
  diagnosis: string;
  doctorId: string;
  patient: {
    nik: string;
    name: string;
  }
};

export default function MedicalRecords() {
  const [records, setRecords] = useState<MedicalRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const res = await fetch("/api/medical-records");
        if (res.ok) {
          const data = await res.json();
          setRecords(data.records);
        }
      } catch (error) {
        console.error("Failed to fetch medical records", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecords();
  }, []);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Rekam Medis Pasien</h2>
          <p className="text-gray-600 mt-1">Kelola riwayat kesehatan pasien</p>
        </div>

        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Cari pasien atau No RM..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </header>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-4 font-semibold text-gray-900">No. RM</th>
                <th className="px-6 py-4 font-semibold text-gray-900">Nama Pasien</th>
                <th className="px-6 py-4 font-semibold text-gray-900">Kunjungan Terakhir</th>
                <th className="px-6 py-4 font-semibold text-gray-900">Diagnosis Terakhir</th>
                <th className="px-6 py-4 font-semibold text-gray-900">Dokter Penanggung Jawab</th>
                <th className="px-6 py-4 font-semibold text-gray-900">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                    Memuat data rekam medis...
                  </td>
                </tr>
              ) : records.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                    Belum ada data rekam medis.
                  </td>
                </tr>
              ) : (
                records.map((record) => (
                  <tr key={record.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-blue-600">{record.patient.nik}</td>
                    <td className="px-6 py-4 text-gray-900">{record.patient.name}</td>
                    <td className="px-6 py-4 text-gray-600">{new Date(record.createdAt).toLocaleDateString('id-ID')}</td>
                    <td className="px-6 py-4 text-gray-600">{record.diagnosis}</td>
                    <td className="px-6 py-4 text-gray-600">{record.doctorId === 'dr1' ? 'dr. Andi Wijaya' : 'drg. Rina Mulyani'}</td>
                    <td className="px-6 py-4">
                      <button className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium">
                        <FileText className="h-4 w-4" /> Detail
                      </button>
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
