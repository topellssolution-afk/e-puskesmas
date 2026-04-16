import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const records = await prisma.medicalRecord.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        patient: true,
      }
    });
    return NextResponse.json({ records }, { status: 200 });
  } catch (error) {
    console.error('Error in GET /api/medical-records:', error);
    return NextResponse.json({ error: 'Failed to fetch medical records' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const newRecord = await prisma.medicalRecord.create({
      data: {
        patientId: data.patientId,
        doctorId: data.doctorId,
        anamnesis: data.anamnesis,
        bloodPressure: data.bloodPressure,
        temperature: data.temperature,
        diagnosis: data.diagnosis,
        procedures: data.procedures,
        prescriptions: data.prescriptions,
      },
    });

    return NextResponse.json({ message: 'Medical record saved successfully', record: newRecord }, { status: 201 });
  } catch (error) {
    console.error('Error in POST /api/medical-records:', error);
    return NextResponse.json({ error: 'Failed to save medical record', details: error }, { status: 500 });
  }
}
