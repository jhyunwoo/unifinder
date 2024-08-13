import { NextResponse } from 'next/server'
import { universityData } from '@/generate-data/top-universities'
import {
  admissions,
  colleges,
  departments,
  universities,
} from '@/db/schema'
import db from "@/db";

export const dynamic = 'force-dynamic'

export async function GET() {
  for (const university of universityData) {
    // eslint-disable-next-line no-await-in-loop -- This is intentional
    const createUniversity = await db
      .insert(universities)
      .values({
        id: university.id,
        name: university.name,
        universityType: university.universityType,
        address: university.address,
        admissionGuide: university.admissionGuide,
        admissionType: university.admissionType,
        educationType: university.educationType,
        symbolImage: university.symbolImage,
      })
      .returning()
    for (const college of university.college) {
      // eslint-disable-next-line no-await-in-loop -- This is intentional
      const createCollege = await db
        .insert(colleges)
        .values({ universityId: createUniversity[0].id, name: college.name })
        .returning()
      for (const department of college.department) {
        // eslint-disable-next-line no-await-in-loop -- This is intentional
        const createDepartment = await db
          .insert(departments)
          .values({ collegeId: createCollege[0].id, name: department.name })
          .returning()
        for (const admission of department.admission) {
          // eslint-disable-next-line no-await-in-loop -- This is intentional
          await db
            .insert(admissions)
            .values({
              name: admission.name,
              admissionYear: admission.admissionYear,
              admissionQuota: admission.admissionQuota,
              admissionTrack: admission.admissionTrack,
              departmentId: createDepartment[0]?.id,
              cautions: admission.cautions,
              highSchoolType: admission.highSchoolType,
              requirements: admission.requirements,
              graduationYear: admission.graduationYear,
              minimumAcademicRequirement: admission.minimumAcademicRequirement,
              evaluationMethod: admission.evaluationMethod,
            })
            .returning()
        }
      }
    }
  }
  return NextResponse.json({ success: true })
}
