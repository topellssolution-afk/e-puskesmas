import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const patients = await prisma.patient.findMany({
      orderBy: {
        registrationDate: 'desc',
      },
    });
    return NextResponse.json({ patients }, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Failed to fetch patients' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const newPatient = await prisma.patient.create({
      data: {
        nik: data.nik,
        name: data.name,
        birthdate: data.birthdate,
        gender: data.gender,
        address: data.address,
        phone: data.phone,
        poli: data.poli,
      },
    });

    return NextResponse.json({ message: 'Patient registered successfully', patient: newPatient }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to register patient' }, { status: 500 });
  }
}
