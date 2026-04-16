import Link from "next/link";
import { Users, Calendar, Stethoscope, Clock } from "lucide-react";
import VisitsChart from "@/components/VisitsChart";

export default function Home() {
  return (
    <div className="space-y-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Selamat Datang di e-Puskesmas</h1>
        <p className="mt-2 text-gray-600">Sistem Informasi Manajemen Puskesmas Terpadu</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <VisitsChart />
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 mb-1">Total Pasien</h3>
              <p className="text-2xl font-bold text-gray-900">1,248</p>
            </div>
            <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
              <Users className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 mb-1">Antrean Hari Ini</h3>
              <p className="text-2xl font-bold text-gray-900">45</p>
            </div>
            <div className="p-3 bg-green-100 text-green-600 rounded-full">
              <Calendar className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
          <div className="p-3 bg-purple-100 text-purple-600 rounded-full mb-4">
            <Stethoscope className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Dokter Aktif</h3>
          <p className="text-3xl font-bold text-purple-600">8</p>
          <p className="text-sm text-gray-500 mt-2">Poli Umum & Gigi</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
          <div className="p-3 bg-orange-100 text-orange-600 rounded-full mb-4">
            <Clock className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Waktu Operasional</h3>
          <p className="text-xl font-bold text-orange-600">08:00 - 15:00</p>
          <p className="text-sm text-gray-500 mt-2">Senin - Jumat</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <Link href="/registration" className="block group">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full">
            <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">Daftar Pasien Baru &rarr;</h2>
            <p className="text-gray-600">Registrasi pasien baru untuk mendapatkan nomor rekam medis dan antrean.</p>
          </div>
        </Link>
        <Link href="/schedule" className="block group">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full">
            <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">Lihat Jadwal Dokter &rarr;</h2>
            <p className="text-gray-600">Cek jadwal praktek dokter di berbagai poli yang tersedia hari ini.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
