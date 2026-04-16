export default function Registration() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-4">Pendaftaran Pasien Baru</h2>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nik" className="block text-sm font-medium text-gray-700 mb-1">NIK</label>
              <input
                type="text"
                id="nik"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="16 Digit NIK"
                required
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="Nama sesuai KTP"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700 mb-1">Tanggal Lahir</label>
              <input
                type="date"
                id="birthdate"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">Jenis Kelamin</label>
              <select
                id="gender"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white"
                required
              >
                <option value="">Pilih...</option>
                <option value="l">Laki-laki</option>
                <option value="p">Perempuan</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Alamat Lengkap</label>
            <textarea
              id="address"
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder="Alamat domisili saat ini"
              required
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Nomor Telepon/HP</label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="08..."
                required
              />
            </div>
            <div>
              <label htmlFor="poli" className="block text-sm font-medium text-gray-700 mb-1">Poli Tujuan</label>
              <select
                id="poli"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white"
                required
              >
                <option value="">Pilih Poli...</option>
                <option value="umum">Poli Umum</option>
                <option value="gigi">Poli Gigi</option>
                <option value="kia">Poli KIA/KB</option>
                <option value="anak">Poli Anak</option>
              </select>
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
            >
              Daftar Sekarang
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
