type GraduationYearType = "2025.02" | "before 2024.08";
type RequirementType =
  | "ruralFishing" // 농어촌
  | "nationalMeritRecipient" // 국가유공자
  | "basicLivelihoodSecurityRecipients" // 기초생활수급자
  | "lowerMiddleClass" // 차상위계층
  | "singleParentFamily" // 한부모가족
  | "fiveWestSeaIslands" // 서해 5도
  | "self-supportRecipient" // 자립지원 대상자
  | "lifeScienceHighSchools" // 농생명계열 고교 졸업예정자
  | "industrialWork" // 산업체 근무
  | "fromNorthKorea" // 북한이탈주민
  | "fromVocationalHighSchool" // 특성화고 출신자
  | "multiculturalFamily" // 다문화가정
  | "militaryChild" // 군인 자녀
  | "firefighterPoliceChild" // 소방경찰 자녀
  | "catholicLeaderRecommender" // 가톨릭 지도자 추천
  | "disabledPerson"; // 장애인

type HighSchoolType =
  | "general" // 일반고
  | "special_purpose" // 특목고
  | "vocational" // 특성화고
  | "autonomous" // 자율고
  | "GED" // 검정고시
  | "overseas" // 해외고
  | "alternative" // 대안학교
  | "foreignEducationalInstitutionsInKorea" // 국내 학력인정 외국교육기관
  | "gifted"; // 영재학교

type EvaluationMethodType = "comprehensive" | "academic" | "essay" | "talent";

interface SearchType {
  universityName: string;
  universitySymbol: string | null;
  departmentName: string;
  collegeName: string;
  admissionName: string;
  admissionQuota: number;
  admissionTrack: string | null;
  highSchoolType: HighSchoolType[];
  graduationYear: GraduationYearType[];
  requirements: RequirementType[];
  cautions: string[];
  minimumAcademicRequirement: string | null;
  admissionYear: number;
  evaluationMethod: EvaluationMethodType;
}

export type {
  GraduationYearType,
  RequirementType,
  HighSchoolType,
  EvaluationMethodType,
  SearchType,
};
