import { NextResponse } from "next/server";
import type { SQL } from "drizzle-orm";
import { ilike, and, eq, inArray, isNotNull, isNull } from "drizzle-orm";
import getAdmissionSearchParams from "@/lib/get-search-params";
import db from "@/db";
import { admissions, colleges, departments, universities } from "@/db/schema";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const {
    university,
    department,
    evaluationMethod,
    highSchoolType,
    graduationYear,
    academicRequirement,
    requirement,
  } = getAdmissionSearchParams(searchParams);
  const filters: SQL[] = [];

  if (evaluationMethod.length > 0) {
    filters.push(inArray(admissions.evaluationMethod, evaluationMethod));
  }
  if (academicRequirement) {
    filters.push(isNotNull(admissions.minimumAcademicRequirement));
  } else {
    filters.push(isNull(admissions.minimumAcademicRequirement));
  }
  if (university) {
    filters.push(ilike(universities.name, `%${university}%`));
  }
  if (department) {
    filters.push(ilike(departments.name, `%${department}%`));
  }

  const searchResults = await db
    .select({
      universityName: universities.name,
      universitySymbol: universities.symbolImage,
      departmentName: departments.name,
      collegeName: colleges.name,
      admissionName: admissions.name,
      admissionQuota: admissions.admissionQuota,
      admissionTrack: admissions.admissionTrack,
      highSchoolType: admissions.highSchoolType,
      graduationYear: admissions.graduationYear,
      requirements: admissions.requirements,
      cautions: admissions.cautions,
      minimumAcademicRequirement: admissions.minimumAcademicRequirement,
      admissionYear: admissions.admissionYear,
      evaluationMethod: admissions.evaluationMethod,
    })
    .from(admissions)
    .leftJoin(departments, eq(admissions.departmentId, departments.id))
    .leftJoin(colleges, eq(departments.collegeId, colleges.id))
    .leftJoin(universities, eq(colleges.universityId, universities.id))
    .where(and(...filters))
    .orderBy(admissions.id);

  const highSchoolFiltered = [];
  for (const admission of searchResults) {
    if (highSchoolType && admission.highSchoolType?.includes(highSchoolType)) {
      highSchoolFiltered.push(admission);
    }
  }
  console.log(requirement);
  const graduationYearFiltered = [];
  for (const admission of highSchoolFiltered) {
    if (graduationYear && admission.graduationYear?.includes(graduationYear)) {
      graduationYearFiltered.push(admission);
    }
  }

  const requirementFiltered = [];
  if (requirement.length === 0) {
    for (const admission of graduationYearFiltered) {
      if (
        admission.requirements?.length === 0 ||
        admission.requirements === null
      ) {
        requirementFiltered.push(admission);
      }
    }
  } else {
    for (const admission of graduationYearFiltered) {
      if (
        admission.requirements?.length !== undefined &&
        admission.requirements?.length > 0
      ) {
        for (const requirementItem of requirement) {
          if (admission.requirements.includes(requirementItem)) {
            requirementFiltered.push(admission);
          }
        }
      }
    }
  }

  return NextResponse.json(requirementFiltered);
}
