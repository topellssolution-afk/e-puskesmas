-- CreateTable
CREATE TABLE "Patient" (
    "id" TEXT NOT NULL,
    "nik" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "birthdate" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "poli" TEXT NOT NULL,
    "registrationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MedicalRecord" (
    "id" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "doctorId" TEXT NOT NULL,
    "anamnesis" TEXT NOT NULL,
    "bloodPressure" TEXT NOT NULL,
    "temperature" TEXT NOT NULL,
    "diagnosis" TEXT NOT NULL,
    "procedures" TEXT NOT NULL,
    "prescriptions" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MedicalRecord_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Patient_nik_key" ON "Patient"("nik");

-- AddForeignKey
ALTER TABLE "MedicalRecord" ADD CONSTRAINT "MedicalRecord_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
