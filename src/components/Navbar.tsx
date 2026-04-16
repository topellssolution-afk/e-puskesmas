import Link from "next/link";
import { Activity } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <Activity className="h-6 w-6" />
              <span>e-Puskesmas</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Dashboard
              </Link>
              <Link
                href="/registration"
                className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Pendaftaran Pasien
              </Link>
              <Link
                href="/patients"
                className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Daftar Pasien
              </Link>
              <Link
                href="/schedule"
                className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Jadwal Dokter
              </Link>
              <Link
                href="/medical-records"
                className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Rekam Medis
              </Link>
              <Link
                href="/medical-services"
                className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Pelayanan Medis
              </Link>
              <Link
                href="/settings"
                className="hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Pengaturan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
