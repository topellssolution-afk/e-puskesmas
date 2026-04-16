"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Sen', pasien: 120 },
  { name: 'Sel', pasien: 150 },
  { name: 'Rab', pasien: 180 },
  { name: 'Kam', pasien: 140 },
  { name: 'Jum', pasien: 160 },
  { name: 'Sab', pasien: 90 },
];

export default function VisitsChart() {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-[300px]">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Kunjungan Pasien Minggu Ini</h3>
      <div className="w-full h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip
              cursor={{fill: '#f1f5f9'}}
              contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
            />
            <Bar dataKey="pasien" fill="#3b82f6" radius={[4, 4, 0, 0]} isAnimationActive={false} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
