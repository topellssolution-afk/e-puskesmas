"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  nik: z.string().length(16, { message: "NIK harus 16 digit" }),
  name: z.string().min(2, { message: "Nama terlalu pendek" }),
  birthdate: z.string().min(1, { message: "Tanggal lahir wajib diisi" }),
  gender: z.enum(["l", "p"], { message: "Pilih jenis kelamin" }),
  address: z.string().min(5, { message: "Alamat terlalu pendek" }),
  phone: z.string().min(10, { message: "Nomor telepon tidak valid" }),
  poli: z.string().min(1, { message: "Pilih poli tujuan" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await fetch('/api/patients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to submit');

      toast.success("Registrasi Berhasil!", {
        description: `Pasien ${data.name} telah didaftarkan.`,
      });

      reset();
      // Optional: router.push('/patients');
    } catch (error) {
      toast.error("Gagal melakukan registrasi", {
        description: "Terjadi kesalahan sistem, silakan coba lagi.",
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-4">Pendaftaran Pasien Baru</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nik" className="block text-sm font-medium text-gray-700 mb-1">NIK</label>
              <input
                {...register("nik")}
                type="text"
                id="nik"
                className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${errors.nik ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="16 Digit NIK"
              />
              {errors.nik && <p className="mt-1 text-sm text-red-500">{errors.nik.message}</p>}
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
              <input
                {...register("name")}
                type="text"
                id="name"
                className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Nama sesuai KTP"
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700 mb-1">Tanggal Lahir</label>
              <input
                {...register("birthdate")}
                type="date"
                id="birthdate"
                className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${errors.birthdate ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.birthdate && <p className="mt-1 text-sm text-red-500">{errors.birthdate.message}</p>}
            </div>
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">Jenis Kelamin</label>
              <select
                {...register("gender")}
                id="gender"
                className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white ${errors.gender ? 'border-red-500' : 'border-gray-300'}`}
              >
                <option value="">Pilih...</option>
                <option value="l">Laki-laki</option>
                <option value="p">Perempuan</option>
              </select>
              {errors.gender && <p className="mt-1 text-sm text-red-500">{errors.gender.message}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Alamat Lengkap</label>
            <textarea
              {...register("address")}
              id="address"
              rows={3}
              className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Alamat domisili saat ini"
            ></textarea>
            {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address.message}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Nomor Telepon/HP</label>
              <input
                {...register("phone")}
                type="tel"
                id="phone"
                className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="08..."
              />
              {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
            </div>
            <div>
              <label htmlFor="poli" className="block text-sm font-medium text-gray-700 mb-1">Poli Tujuan</label>
              <select
                {...register("poli")}
                id="poli"
                className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white ${errors.poli ? 'border-red-500' : 'border-gray-300'}`}
              >
                <option value="">Pilih Poli...</option>
                <option value="umum">Poli Umum</option>
                <option value="gigi">Poli Gigi</option>
                <option value="kia">Poli KIA/KB</option>
                <option value="anak">Poli Anak</option>
              </select>
              {errors.poli && <p className="mt-1 text-sm text-red-500">{errors.poli.message}</p>}
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-2 px-6 rounded-md transition-colors"
            >
              {isSubmitting ? 'Memproses...' : 'Daftar Sekarang'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
