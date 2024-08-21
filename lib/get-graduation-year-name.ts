import type { GraduationYearType } from "./types";

export default function getGraduationYearName(
  year: GraduationYearType | null,
): string {
  switch (year) {
    case "2025.02":
      return "2025년 2월 졸업";
    case "before 2025.02":
      return "2024년 8월 이전 졸업";
    default:
      return "모두 지원 가능";
  }
}
