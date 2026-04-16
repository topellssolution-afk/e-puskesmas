export default function Schedule() {
  const schedules = [
    {
      doctor: "dr. Budi Santoso",
      specialty: "Poli Umum",
      days: "Senin - Jumat",
      hours: "08:00 - 12:00",
      status: "Tersedia",
    },
    {
      doctor: "dr. Siti Aminah",
      specialty: "Poli Umum",
      days: "Senin - Jumat",
      hours: "13:00 - 15:00",
      status: "Tersedia",
    },
    {
      doctor: "drg. Andi Wijaya",
      specialty: "Poli Gigi",
      days: "Selasa & Kamis",
      hours: "09:00 - 14:00",
      status: "Tersedia",
    },
    {
      doctor: "dr. Rina Mulyani, Sp.A",
      specialty: "Poli Anak",
      days: "Senin, Rabu, Jumat",
      hours: "08:00 - 12:00",
      status: "Cuti",
    },
    {
      doctor: "Bd. Nining Lestari, S.Tr.Keb",
      specialty: "Poli KIA/KB",
      days: "Senin - Jumat",
      hours: "08:00 - 14:00",
      status: "Tersedia",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <header>
        <h2 className="text-2xl font-bold text-gray-900">Jadwal Praktik Dokter</h2>
        <p className="text-gray-600 mt-1">Informasi jadwal pelayanan poli e-Puskesmas</p>
      </header>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-4 font-semibold text-gray-900">Nama Dokter/Bidan</th>
                <th className="px-6 py-4 font-semibold text-gray-900">Poli</th>
                <th className="px-6 py-4 font-semibold text-gray-900">Hari</th>
                <th className="px-6 py-4 font-semibold text-gray-900">Jam Praktik</th>
                <th className="px-6 py-4 font-semibold text-gray-900">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {schedules.map((schedule, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{schedule.doctor}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {schedule.specialty}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{schedule.days}</td>
                  <td className="px-6 py-4 text-gray-600">{schedule.hours}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        schedule.status === 'Tersedia'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {schedule.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
        <strong>Catatan:</strong> Jadwal dapat berubah sewaktu-waktu. Untuk pasien BPJS, harap membawa kartu KIS/BPJS yang aktif saat melakukan kunjungan.
      </div>
    </div>
  );
}
