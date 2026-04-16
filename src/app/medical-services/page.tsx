"use client";

import { useForm } from "react-hook-form";
import { toast } from "sonner";

type FormData = {
  patientId: string;
  doctorId: string;
  anamnesis: string;
  bloodPressure: string;
  temperature: string;
  diagnosis: string;
  procedures: string;
  prescriptions: string;
};

export default function MedicalServices() {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast.success("Data pelayanan medis berhasil disimpan!");
    reset();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <header className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Input Pelayanan Medis</h2>
        <p className="text-gray-600 mt-1">Catat diagnosis, tindakan, dan resep pasien</p>
      </header>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nama Pasien</label>
              <select {...register("patientId")} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none bg-white">
                <option value="">Pilih Pasien dari Antrean...</option>
                <option value="1">Budi Santoso (Poli Umum)</option>
                <option value="2">Siti Aminah (Poli Gigi)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Dokter Pemeriksa</label>
              <select {...register("doctorId")} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none bg-white">
                <option value="dr1">dr. Andi Wijaya</option>
                <option value="dr2">drg. Rina Mulyani</option>
              </select>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Pemeriksaan & Diagnosis</h3>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Anamnesis (Keluhan Utama)</label>
                <textarea {...register("anamnesis")} rows={2} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"></textarea>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tekanan Darah</label>
                  <input {...register("bloodPressure")} type="text" placeholder="120/80" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                 </div>
                 <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Suhu (°C)</label>
                  <input {...register("temperature")} type="text" placeholder="36.5" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                 </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Diagnosis (ICD-10)</label>
                <input {...register("diagnosis")} type="text" placeholder="Masukkan kode atau nama penyakit..." className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none" />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Tindakan & Resep</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tindakan Medis</label>
                <textarea {...register("procedures")} rows={2} placeholder="Tindakan yang dilakukan..." className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Resep Obat (E-Prescription)</label>
                <textarea {...register("prescriptions")} rows={3} placeholder="1. Paracetamol 500mg 3x1&#10;2. Amoxicillin 500mg 3x1" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"></textarea>
              </div>
            </div>
          </div>

          <div className="pt-4 flex justify-end gap-4">
            <button type="button" onClick={() => reset()} className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
              Reset
            </button>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors">
              Simpan Pemeriksaan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
