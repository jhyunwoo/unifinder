import type {
  EvaluationMethodType,
  GraduationYearType,
  HighSchoolType,
  RequirementType,
} from "./types";

export default function getAdmissionSearchParams(
  searchParams: URLSearchParams,
): {
  university: string | null;
  department: string | null;
  evaluationMethod: EvaluationMethodType[];
  highSchoolType: HighSchoolType | null;
  admissionYear: string | null;
  graduationYear: GraduationYearType | null;
  academicRequirement: boolean;
  requirement: RequirementType[];
} {
  const university = searchParams.get("university");
  const department = searchParams.get("department");
  const evaluationMethod = JSON.parse(
    searchParams.get("evaluationMethod") ?? "[]",
  ) as EvaluationMethodType[];
  const highSchoolType = searchParams.get(
    "highSchoolType",
  ) as HighSchoolType | null;
  const admissionYear = searchParams.get("admissionYear");
  const graduationYear = searchParams.get(
    "graduationYear",
  ) as GraduationYearType | null;
  const academicRequirement =
    searchParams.get("academicRequirement") === "true";
  const requirement = JSON.parse(
    searchParams.get("requirement") ?? "[]",
  ) as RequirementType[];

  return {
    university,
    department,
    evaluationMethod,
    highSchoolType,
    admissionYear,
    graduationYear,
    academicRequirement,
    requirement,
  };
}
