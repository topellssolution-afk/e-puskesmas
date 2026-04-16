import { NextResponse } from 'next/server';

// In-memory mock database
const patients = [
  {
    id: '1',
    nik: '3201010101900001',
    name: 'Budi Santoso',
    birthdate: '1990-01-01',
    gender: 'l',
    address: 'Jl. Merdeka No. 1, Jakarta',
    phone: '081234567890',
    poli: 'umum',
    registrationDate: new Date().toISOString(),
  },
  {
    id: '2',
    nik: '3201010202920002',
    name: 'Siti Aminah',
    birthdate: '1992-02-02',
    gender: 'p',
    address: 'Jl. Jend. Sudirman No. 10, Jakarta',
    phone: '081987654321',
    poli: 'gigi',
    registrationDate: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
  }
];

export async function GET() {
  return NextResponse.json({ patients }, { status: 200 });
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Create new patient with ID and current date
    const newPatient = {
      ...data,
      id: Math.random().toString(36).substring(2, 9),
      registrationDate: new Date().toISOString(),
    };

    // Add to in-memory array
    patients.push(newPatient);

    return NextResponse.json({ message: 'Patient registered successfully', patient: newPatient }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to register patient' }, { status: 500 });
  }
}
