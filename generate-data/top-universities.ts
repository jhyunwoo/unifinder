import type {
  GraduationYearType,
  HighSchoolType,
  RequirementType,
} from "@/lib/types";

interface UniversityType {
  name: string;
  universityType: "main" | "branch";
  educationType: "university" | "junior_college";
  symbolImage?: string;
  address?: string;
  id: number;
  admissionType: "in-group" | "out-group";
  admissionGuide?: string;
  college: {
    name: string;
    department: {
      name: string;
      admission: AdmissionType[];
    }[];
  }[];
}

interface AdmissionType {
  name: string;
  admissionYear: number;
  highSchoolType: HighSchoolType[];
  graduationYear: GraduationYearType[];
  requirements?: RequirementType[];
  cautions?: string[];
  admissionQuota?: number;
  minimumAcademicRequirement?: string[];
  admissionTrack?: string;
  evaluationMethod: "comprehensive" | "academic" | "essay" | "talent";
}

const allHighSchools: HighSchoolType[] = [
  "general",
  "special_purpose",
  "vocational",
  "autonomous",
  "GED",
  "overseas",
  "foreignEducationalInstitutionsInKorea",
  "alternative",
  "gifted",
];

// 서울대 수시 입학전형
const 서울대지역균형전형: AdmissionType = {
  name: "지역균형전형",
  admissionYear: 2025,
  highSchoolType: [
    "general",
    "special_purpose",
    "vocational",
    "autonomous",
    "gifted",
  ],
  graduationYear: ["2025.02"],
  cautions: [
    "소속 고등학교장의 추천을 받은 2025년 2월 국내 고등학교 졸업예정자(조기졸업예정자 제외)",
    "고등학교별 추천 인원은 2명 이내임",
  ],
  evaluationMethod: "comprehensive",
};
const 서울대학생부종합전형: AdmissionType = {
  name: "학생부종합전형(일반전형)",
  admissionYear: 2025,
  highSchoolType: allHighSchools,
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  evaluationMethod: "comprehensive",
};
const 서울대실기위주전형: AdmissionType = {
  name: "실기위주전형(일반전형)",
  admissionYear: 2025,
  highSchoolType: allHighSchools,
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  evaluationMethod: "talent",
};
const 서울대기회균형특별전형: AdmissionType = {
  name: "기회균형특별전형(사회통합)",
  admissionYear: 2025,
  highSchoolType: allHighSchools,
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  requirements: [
    "ruralFishing", // 농어촌
    "nationalMeritRecipient", // 국가유공자
    "basicLivelihoodSecurityRecipients", // 기초생활수급자
    "lowerMiddleClass", // 차상위계층
    "singleParentFamily", // 한부모가족
    "fiveWestSeaIslands", // 서해 5도
    "self-supportRecipient", // 자립지원 대상자
    "lifeScienceHighSchools", // 농생명계열 고교 졸업예정자
  ],
  cautions: [
    "읍·면 또는 도서·벽지 지역 소재 과학고, 영재고, 외국어고, 국제고, 예술고, 체육고, 국내학력인정 외국교육기관, 대안교육기관(학력미인정학교)은 농어촌 학교로 인정하지 않음",
    "농어촌 학생 및 서해 5도 학생이 2개 이상의 학교에서 재학한 경우 해당 학교가 모두 읍·면이나 도서·벽지 지역에 소재해야 함",
    "농어촌 학생이 고등학교(초·중학교) 재학 중 행정구역 개편 등으로 읍·면 지역이 동 지역으로 변경된 경우에는 고등학교(초·중학교) 재학 기간 중 당해 지역을 읍·면 지역으로 인정함",
    "농어촌 학생 및 서해 5도 학생이 고등학교 졸업일 이전 농어촌 및 서해 5도 이외의 지역으로 전학하거나, 주소지가 변동될 경우 지원자격 미달로 입학이 취소됨",
    "농어촌 학생 및 서해 5도 학생의 거주지, 부모(친권자 혹은 후견인)의 거주지, 재학한 학교 소재지가 동일한 읍·면이나 도서·벽지 지역이 아니어도 됨",
    "농어촌 학생 및 서해 5도 학생의 부모(친권자 혹은 후견인)가 주민등록 직권말소 또는 신고말소된 경우에는 원칙적으로 읍·면이나 도서·벽지 지역에 거주하지 않은 것으로 간주함",
    "농어촌 학생 및 서해 5도 학생이 재학 중 교환학생으로서 외국 소재 학교에 재학한 사실이 있는 경우, 학교장이 해당 프로그램의 배경을 설명하는 별도 자료를 제출하면 이를 심사하여 해당 기간 농어촌 및 서해 5도 소재 학교에 재학한 것으로 인정할 수 있음",
    "부모의 사망, 이혼 등의 경우에는 양육권을 우선으로 하며 이를 포함한 지원자격과 관련하여 별도로 심사할 수 있음",
    "지원자격 확인을 위해 전형 기간 중 또는 합격 이후에도 별도의 서류를 요청할 수 있음",
  ],
  evaluationMethod: "comprehensive",
};

// 연세대 수시 입학전형
const 연세대학추: AdmissionType = {
  name: "학생부교과전형[추천형]",
  admissionYear: 2025,
  graduationYear: ["2025.02"],
  highSchoolType: ["general", "special_purpose", "autonomous"],
  cautions: [
    "소속 고등학교장의 추천을 받은 자만 지원 가능",
    "고교별 추천가능 인원은 학교별 최대 10명까지 가능",
    "학교폭력예방 및 대책에 관한 법률 제 17조에 따른 처분을 받은 자는 지원 불가",
    "최소 이수 과목 요건을 충족해야 함 (수시 모집 요강 20쪽 확인)",
    "조기졸업 예정자 및 상급학교 조기진학 허가자는 지원할 수 없음",
  ],
  evaluationMethod: "academic",
};
const 연세대활우: AdmissionType = {
  name: "학생부종합전형[활동우수형]",
  admissionYear: 2025,
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  highSchoolType: allHighSchools,
  evaluationMethod: "comprehensive",
  cautions: ["조기졸업 예정자 및 상급학교 조기진학 허가자는 지원할 수 없음"],
};
const 연세대국제국내고: AdmissionType = {
  name: "학생부종합전형[국제형-국내고]",
  admissionYear: 2025,
  highSchoolType: [
    "general",
    "special_purpose",
    "vocational",
    "autonomous",
    "alternative",
    "gifted",
  ],
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  cautions: [
    "국내 고등학교는 고교 졸업 학력 인정학교에 한함",
    "상급학교 조기진학 허가자는 졸업예정자로 인정하지 않으므로 지원할 수 없음",
    "국내학력인증 외국교육기관 출신자 및 검정고시 합격자는 지원할 수 없음",
  ],
  evaluationMethod: "comprehensive",
};
const 연세대국제해외고: AdmissionType = {
  name: "학생부종합전형[국제형-해외고]",
  admissionYear: 2025,
  highSchoolType: ["overseas", "GED", "foreignEducationalInstitutionsInKorea"],
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  cautions: [
    "외국 소재 고등학교 졸업(예정)자는 외국에서 고등학교를 졸업(예정)하고 국내·외에서 12년 학제 이상의 학교 교육과정을 이수한 자를 원칙으로 하며, 해당 국가별 학제 및 학기 등을 고려하여 지원자격을 종합적으로 판단함",
    "특별법에 의한 국제학교 졸업자로서 국내 고등학교 학력 인정을 받은 자",
    "국내 소재 외국교육기관, 외국인학교, 특별법에 의한 국제학교 출신자로서 국내 고등학교 졸업학력 검정고시 합격자",
    "국내 고등학교 졸업학력 검정고시 합격자",
  ],
  evaluationMethod: "comprehensive",
};
const 연세대기회균형: AdmissionType = {
  name: "학생부종합전형[기회균형]",
  admissionYear: 2025,
  highSchoolType: allHighSchools,
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  requirements: [
    "ruralFishing", // 농어촌
    "nationalMeritRecipient", // 국가유공자
    "basicLivelihoodSecurityRecipients", // 기초생활수급자
    "lowerMiddleClass", // 차상위계층
    "singleParentFamily", // 한부모가족
    "self-supportRecipient", // 자립지원 대상자
  ],
  cautions: [
    "상급학교 조기진학 허가자는 졸업예정자로 인정하지 않으므로 지원할 수 없음",
    "읍·면 소재 영재학교, 과학고, 외국어고, 국제고, 예술고, 체육고, 특성화고/마이스터고 등에 재학한 사실이 있는 자와 검정고시 합격자는 지원할 수 없음",
    "원서접수 마감일까지 해당 지원자격을 유지해야 함(단, 농어촌학생의 경우 고교졸업 시까지 해당 자격 유지)",
  ],
  evaluationMethod: "comprehensive",
};
const 연세대논술: AdmissionType = {
  name: "논술전형",
  admissionYear: 2025,
  highSchoolType: allHighSchools,
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  cautions: [
    "상급학교 조기진학 허가자는 졸업예정자로 인정하지 않으므로 지원할 수 없음",
  ],
  evaluationMethod: "essay",
};
const 연세대특기자국제: AdmissionType = {
  name: "특기자전형[국제인재]",
  admissionYear: 2025,
  highSchoolType: [
    "general",
    "special_purpose",
    "vocational",
    "autonomous",
    "alternative",
    "gifted",
  ],
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  cautions: [
    "상급학교 조기진학 허가자는 졸업예정자로 인정하지 않으므로 지원할 수 없음",
  ],
  evaluationMethod: "talent",
};
const 연세대특기자체육: AdmissionType = {
  name: "특기자전형[체육인재]",
  admissionYear: 2025,
  highSchoolType: allHighSchools,
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  cautions: [
    "지원자격을 충족해야 지원 가능",
    "국내 고등학교는 고교 졸업 학력 인정학교에 한하며, 상급학교 조기진학 허가자는 졸업예정자로 인정하지 않음(지원 불가)",
    "외국 소재 고등학교 졸업(예정)자는 외국에서 고등학교를 졸업(예정)하고 국내·외에서 12년 학제 이상의 학교 교육과정을 이수한 자를 원칙으로 하며, 해당 국가별 학제 및 학기 등을 고려하여 지원자격을 종합적으로 판단함",
    "외국 소재 고등학교 졸업(예정)자는 입상실적, 경기실적 등을 바탕으로 지원자격 충족여부를 심의함",
    "검정고시 출신자의 입상실적, 경기실적 등은 검정고시 합격일로부터 과거 3년 이내의 실적에 한함",
  ],
  evaluationMethod: "talent",
};
const 연세대특수교육: AdmissionType = {
  name: "고른기회전형(특수교육대상자)",
  admissionYear: 2025,
  highSchoolType: allHighSchools,
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  cautions: [
    "상급학교 조기진학 허가자는 졸업예정자로 인정하지 않으므로 지원할 수 없음",
    "「장애인복지법」 제32조에 의하여 장애인 등록을 필한 장애정도가 심한 자 또는 「국가유공 자 등 예우 및 지원에 관한 법률」 제4조 등에 의한 상이등급자로 등록(1급부터 6급까지만 인정)되어 있는 자",
  ],
  evaluationMethod: "comprehensive",
  requirements: ["disabledPerson"],
};

// 고려대 수시 입학전형
const 고려대학추: AdmissionType = {
  name: "학생부교과(학교장추천전형)",
  admissionYear: 2025,
  graduationYear: ["2025.02"],
  highSchoolType: ["general", "autonomous", "special_purpose"],
  cautions: [
    "소속 고등학교장의 추천을 받은 자만 지원 가능",
    "학교추천전형, 학업우수전형 간에는 복수지원할 수 없음(2개 전형 중 1개만 선택 가능)",
    "국내 고등학교 졸업예정자 중 학생부에 5학기 교과 성적이 기재되어 있는 자",
  ],
  evaluationMethod: "academic",
};
const 고려대학우: AdmissionType = {
  name: "학생부종합(학업우수전형)",
  admissionYear: 2025,
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  highSchoolType: allHighSchools,
  cautions: [
    "상급학교 조기진학 허가자는 졸업예정자로 인정하지 않으므로 지원할 수 없음",
  ],
  evaluationMethod: "comprehensive",
};
const 고려대계적: AdmissionType = {
  name: "학생부종합(계열적합전형)",
  admissionYear: 2025,
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  highSchoolType: allHighSchools,
  cautions: [
    "상급학교 조기진학 허가자는 졸업예정자로 인정하지 않으므로 지원할 수 없음",
  ],
  evaluationMethod: "comprehensive",
};
const 고려대고른: AdmissionType = {
  name: "학생부종합(고른기회전형)",
  admissionYear: 2025,
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  highSchoolType: allHighSchools,
  requirements: [
    "ruralFishing",
    "nationalMeritRecipient",
    "basicLivelihoodSecurityRecipients",
    "lowerMiddleClass",
    "singleParentFamily",
    "self-supportRecipient",
  ],
  cautions: [
    "특수목적고(과학고‧외국어고‧국제고‧예술고‧체육고‧산업수요 맞춤형 고등학교) 출신자는 농어촌 학생으로 인정하지 않음",
  ],
  evaluationMethod: "comprehensive",
};
const 고려대재직: AdmissionType = {
  name: "학생부종합(재직자전형)",
  admissionYear: 2025,
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  highSchoolType: ["vocational"],
  requirements: ["industrialWork", "fromVocationalHighSchool"],
  cautions: [
    "국내 소재 산업체 근무경력이 3년 이상인 재직자",
    "지원 자격 조건 반드시 확인 필요",
  ],
  evaluationMethod: "comprehensive",
};
const 고려대사국: AdmissionType = {
  name: "학생부종합(사이버국방전형)",
  admissionYear: 2025,
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  highSchoolType: allHighSchools,
  cautions: [
    "군인사법 제 10조(결격사유등)에 저촉되지 않는 만 16세 이상 25세 이하인 자만 지원 가능",
  ],
  admissionQuota: 5,
  minimumAcademicRequirement: [
    "국어, 수학(미적, 기하, 확통), 영어, 탐구(과탐, 서로 다른 2개 분야 응시, 상위 1과목) 4개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
  ],
  admissionTrack: "자연",
  evaluationMethod: "comprehensive",
};
const 고려대논술: AdmissionType = {
  name: "논술(논술전형)",
  admissionYear: 2025,
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  highSchoolType: allHighSchools,
  cautions: [
    "상급학교 조기진학 허가자는 졸업예정자로 인정하지 않으므로 지원 불가",
  ],
  evaluationMethod: "essay",
};
const 고려대특기자: AdmissionType = {
  name: "실기|실적(특기자전형)",
  admissionYear: 2025,
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  highSchoolType: allHighSchools,
  evaluationMethod: "talent",
};

// 서강대 수시 입학전형
const 서강대교과지균: AdmissionType = {
  name: "학생부교과 지역균형",
  admissionYear: 2025,
  graduationYear: ["2025.02"],
  highSchoolType: ["general", "autonomous", "special_purpose"],
  evaluationMethod: "academic",
  cautions: [
    "국내고 졸업 예정자 중 국내고교 4학기 이상 성적 취득한 자로서 출신 고교장의 추천을 받은 자만 지원 가능",
    "마이스터고, 예술고, 체육고 지원 불가",
    "전문계 과정(일반고, 종합고) 지원 물가",
  ],
  minimumAcademicRequirement: [
    "국어, 수학, 영어, 탐구(1과목), 4개 영역 중 3개 영역 각 3등급 이내, 한국사 4등급 이내",
  ],
};
const 서강대학종일반: AdmissionType = {
  name: "학생부종합 일반",
  admissionYear: 2025,
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  highSchoolType: allHighSchools,
  evaluationMethod: "comprehensive",
  cautions: ["상급학교 조기입학 자격 부여자도 지원 가능"],
};
const 서강대학종기균: AdmissionType = {
  name: "학생부종합 기회균형",
  admissionYear: 2025,
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  highSchoolType: allHighSchools,
  evaluationMethod: "comprehensive",
  cautions: [
    "농어촌학생 자격으로 지원 불가한 학교: 특목고, 영재학교, 검정고시, 국외고",
    "특성화고교 자격으로 지원 불가한 학교: 일반고(전문계 과정 이수자 제외), 자율고(전문계 과정 이수자 제외), 특목고, 영재학교, 검정고시, 국외고",
    "특성화고교졸업자 지원자격은 동일계열 조건을 충족하는 경우만 지원할 수 있으므로, ‘경제학과, 경영학부, 지식융합미디어학부, 전자공학과, 화공생명공학과, 기계공학과, 컴퓨터공학과’만 지원 가능함",
    "특성화고교졸업자 지원자격으로 지식융합미디어학부에 최종합격하는 경우, 추후 전공 선택 시 신문방송학과, 미디어&엔터테인먼트학과만 선택 가능함",
  ],
  requirements: [
    "nationalMeritRecipient",
    "ruralFishing",
    "basicLivelihoodSecurityRecipients",
    "self-supportRecipient",
    "fromNorthKorea",
    "fromVocationalHighSchool",
  ],
};
const 서강대학종가치: AdmissionType = {
  name: "학생부종합 서강가치",
  admissionYear: 2025,
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  highSchoolType: allHighSchools,
  evaluationMethod: "comprehensive",
  requirements: [
    "multiculturalFamily",
    "militaryChild",
    "firefighterPoliceChild",
    "catholicLeaderRecommender",
  ],
  cautions: ["상급학교 조기입학 자격 부여자 지원 불가능"],
};
const 서강대논술: AdmissionType = {
  name: "논술 일반",
  admissionYear: 2025,
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  highSchoolType: allHighSchools,
  evaluationMethod: "essay",
  minimumAcademicRequirement: [
    "국어, 수학, 영어, 탐구(1과목), 4개 영역 중 3개 영역 등급 합 7이내, 한국사 4등급 이내",
  ],
  cautions: ["상급학교 조기입학 자격 부여자 지원 불가능"],
};

// 성균관대 수시 입학전형
const 성균관학종융합: AdmissionType = {
  name: "학생부종합(융합형)",
  admissionYear: 2025,
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  highSchoolType: allHighSchools,
  evaluationMethod: "comprehensive",
};
const 성균관학종탐구: AdmissionType = {
  name: "학생부종합(탐구형)",
  admissionYear: 2025,
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  highSchoolType: allHighSchools,
  evaluationMethod: "comprehensive",
};
const 성균관학종과학인재: AdmissionType = {
  name: "학생부종합(과학인재)",
  admissionYear: 2025,
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  highSchoolType: allHighSchools,
  evaluationMethod: "comprehensive",
};
const 성균관학종기균: AdmissionType = {
  name: "학생부종합(기회균형)",
  admissionYear: 2025,
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  highSchoolType: allHighSchools,
  evaluationMethod: "comprehensive",
  cautions: [
    "농어촌학생 자격 지원가능 고교 유형 : 일반고, 특성화고, 자율학교, 대안학교(농어촌 지역에 소재한 특수목적고(과학고, 외국어고, 국제고, 예술고, 체육고, 마이스터고) 및 영재학교에 재학한 사실이 있는 자와 고졸 검정고시 합격자는 지원자격을 인정하지 않음)",
    "지원 자격 수시 모집 요강 확인 필요",
  ],
  requirements: [
    "nationalMeritRecipient",
    "fiveWestSeaIslands",
    "ruralFishing",
    "fromVocationalHighSchool",
    "basicLivelihoodSecurityRecipients",
    "singleParentFamily",
    "disabledPerson",
  ],
};
const 성균관교과: AdmissionType = {
  name: "학생부교과(학교장추천)",
  admissionYear: 2025,
  graduationYear: ["2025.02"],
  highSchoolType: ["general", "special_purpose", "autonomous"],
  evaluationMethod: "academic",
};
const 성균관논술: AdmissionType = {
  name: "논술위주(논술우수)",
  admissionYear: 2025,
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  highSchoolType: allHighSchools,
  evaluationMethod: "essay",
};
const 성균관특기자: AdmissionType = {
  name: "실기|실적(예체능 특기자)",
  admissionYear: 2025,
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  highSchoolType: allHighSchools,
  evaluationMethod: "talent",
};
const 성균관실기: AdmissionType = {
  name: "실기|실적(예체능 실기우수자)",
  admissionYear: 2025,
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  highSchoolType: allHighSchools,
  evaluationMethod: "talent",
};
const 성균관학종농어촌: AdmissionType = {
  name: "학생부종합(농어촌학생)(정원외 농어촌학생 특별전형)",
  admissionYear: 2025,
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  highSchoolType: ["general", "autonomous", "vocational"],
  evaluationMethod: "comprehensive",
  requirements: ["ruralFishing"],
};
const 성균관학종특성화고: AdmissionType = {
  name: "학생부종합(특성화고)(정원외 특성화고교 졸업자 특별전형)",
  admissionYear: 2025,
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  highSchoolType: ["vocational"],
  evaluationMethod: "comprehensive",
  requirements: ["fromVocationalHighSchool"],
  cautions: [
    "산업수요 맞춤형 마이스터고 제외",
    "특성화고와 동일한 교육과정을 이수한 일반고(종합고) 출신자 포함",
  ],
};
const 성균관학종이웃사랑: AdmissionType = {
  name: "학생부종합(이웃사랑)(정원외저소득층특별전형)",
  admissionYear: 2025,
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  highSchoolType: allHighSchools,
  evaluationMethod: "comprehensive",
  requirements: ["basicLivelihoodSecurityRecipients", "singleParentFamily"],
  cautions: [
    "「국민기초생활보장법」 제2조 제1호(수급권자), 제2호(수급자), 제10호(차상위계층)",
    "「한부모가족지원법」 제5조 및 제5조의2에 따른 지원대상자",
  ],
};
const 성균관학종장애인: AdmissionType = {
  name: "학생부종합(장애인등)(정원외장애인등대상자특별전형)",
  admissionYear: 2025,
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  highSchoolType: allHighSchools,
  evaluationMethod: "comprehensive",
  requirements: ["disabledPerson"],
  cautions: [
    "「장애인복지법」 제32조에 의하여 장애인 등록이 되어 있는 자(※장애의 정도가 심하지 않은 장애인 포함)",
    "「장애인 등에 대한 특수교육법」 제15조 제1항의 규정에 따른 대상자",
    "기타 국가보훈 관계법령*에 의한 상이등급자로 등록되어 있는 자",
  ],
};
const 성균관학종특성화재직: AdmissionType = {
  name: "학생부종합(특성화고졸재직자)(정원외 특성화고 졸 재직자 특별전형)",
  admissionYear: 2025,
  graduationYear: ["before 2025.02"],
  highSchoolType: ["vocational"],
  evaluationMethod: "comprehensive",
  requirements: ["industrialWork", "fromVocationalHighSchool"],
  cautions: [
    "지원 시점 기준으로 산업체* 3년 이상 재직자",
    "특성화고등학교 등을 졸업한 자, 「초·중등교육법 시행령」 제90조 제1항 제10호에 따른 산업수요 맞춤형 고등학교를 졸업한 자, 「초·중등교육법 시행령」 제76조의3 제1호에 따른 일반고등학교에 재학하는 동안 시·도 교육감이 「직업교육훈련촉진법」에 따른 직업 교육훈련기관 중 직업교육훈련위탁기관으로 선정한 기관에서 1년 이상의 직업교육 훈련과정을 이수하고 해당 일반고등학교를 졸업한 자, 「평생교육법」 제31조제2항에 따른 학력인정 평생교육시설 중 특성화고등학교 등에서 제공하는 것과 같은 교육과정을 운영하는 평생 교육시설에서 해당 교육과정을 이수한 자 중 한가지 만족",
    "산업체 적용 범위 및 재직 기간 산정 상세 사항은 수시모집요강 확인 필요",
  ],
};
const 성균교과최저37: string[] = [
  "국어(화작, 언매), 수학(미적, 기하, 확통), 영어, 탐구(사탐, 과탐), 탐구(사탐, 과탐) 5개 영역/과목 중 3개 등급합 7등급 이내",
  "국어, 수학, 영어, 탐구(직업탐구 제외), 한국사 응시 필요",
  "제2외국어/한문을 탐구영역 1개 과목으로 대체 가능",
];
const 성균교과최저36: string[] = [
  "국어(화작, 언매), 수학(미적, 기하, 확통), 영어, 탐구(사탐, 과탐), 탐구(사탐, 과탐) 5개 영역/과목 중 3개 등급합 6등급 이내",
  "국어, 수학, 영어, 탐구(직업탐구 제외), 한국사 응시 필요",
  "제2외국어/한문을 탐구영역 1개 과목으로 대체 가능",
];
const 성균논술최저36: string[] = [
  "국어(화작, 언매), 수학(미적, 기하, 확통), 영어, 탐구(사탐, 과탐), 탐구(사탐, 과탐) 5개 영역/과목 중 3개 등급합 6등급 이내",
  "국어, 수학, 영어, 탐구(직업탐구 제외), 한국사 응시 필요",
  "제2외국어/한문을 탐구영역 1개 과목으로 대체 가능",
];
const 성균논술최저35: string[] = [
  "국어(화작, 언매), 수학(미적, 기하, 확통), 영어, 탐구(사탐, 과탐), 탐구(사탐, 과탐) 5개 영역/과목 중 3개 등급합 5등급 이내",
  "국어, 수학, 영어, 탐구(직업탐구 제외), 한국사 응시 필요",
  "제2외국어/한문을 탐구영역 1개 과목으로 대체 가능",
];
const 성균논술의예: string[] = [
  "국어(화작, 언매), 수학(미적, 기하, 확통), 영어, 탐구(2개 과목 평균) 5개 영역 중 3개 등급합 4등급 이내",
  "국어, 수학, 영어, 탐구(직업탐구 제외), 한국사 응시 필요",
];

// 한양대 수시 입학전형
const 한양교과추천: AdmissionType = {
  name: "학생부교과(추천형)",
  admissionYear: 2025,
  graduationYear: ["2025.02", "before 2025.02"],
  highSchoolType: ["general", "autonomous", "special_purpose"],
  evaluationMethod: "academic",
  cautions: [
    "소속 고등학교장의 추천을 받은 2024년 2월 이후(2024년 2월 졸업자 포함) 국내 정규 고교 졸업(예정)자로서 통산 5개 학기 이상 국내 고교 성적 취득자만 지원 가능",
    "특성화고, 마이스터고, 예술고, 체육고, 방송통신고, 학력인정고(각종학교 포함), 일반/종합고의 전문계반(학과), 학생부 성적체계가 다른 고교 지원 불가",
    "2024년 4월 1일자 학교알리미 공시자료 기준, 3학년 재적인원 11% 인원만큼 추천 가능 (학생부종합(추천형)과 추천 인원 별도 산정)",
    "학교생활기록부에 학교폭력이력이 있는 자에 대해서 학교장 추천 불가",
  ],
  minimumAcademicRequirement: [
    "국어, 수학, 영어, 사탐 또는 과탐(1과목) 중 3개 영역 등급합 7 이내",
    "국어, 수학, 영어, 사탐 또는 과탐(2과목) 필수 응시",
  ],
};
const 한양학종추천: AdmissionType = {
  name: "학생부종합(추천형)",
  admissionYear: 2025,
  graduationYear: ["2025.02", "before 2025.02"],
  highSchoolType: [
    "general",
    "autonomous",
    "special_purpose",
    "gifted",
    "vocational",
  ],
  evaluationMethod: "comprehensive",
  cautions: [
    "소속 고등학교장의 추천을 받은 2024년 2월 이후(2024년 2월 졸업자 포함) 국내 정규 고교 졸업(예정)자로서 통산 5개 학기 이상 국내 고교 성적 취득자만 지원 가능",
    "2024년 4월 1일자 학교알리미 공시자료 기준, 3학년 재적인원 11% 인원만큼 추천 가능 (학생부종합(추천형)과 추천 인원 별도 산정)",
    "학교생활기록부에 학교폭력이력이 있는 자에 대해서 학교장 추천 불가",
  ],
  minimumAcademicRequirement: [
    "국어, 수학, 영어, 사탐 또는 과탐(1과목) 중 3개 영역 등급합 7 이내",
    "국어, 수학, 영어, 사탐 또는 과탐(2과목) 필수 응시",
  ],
};
const 한양학종서류: AdmissionType = {
  name: "학생부종합(서류형)",
  admissionYear: 2025,
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  highSchoolType: allHighSchools,
  evaluationMethod: "comprehensive",
  cautions: [
    "학교생활기록부 기재사항 중 학교 폭력 관련 내용이 확인될 경우 전형관리위원회의 심의 결과에 따라 불이익이 있을 수 있음",
  ],
};
const 한양학종면접: AdmissionType = {
  name: "학생부종합(면접형)",
  admissionYear: 2025,
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  highSchoolType: allHighSchools,
  evaluationMethod: "comprehensive",
  cautions: [
    "학교생활기록부 기재사항 중 학교 폭력 관련 내용이 확인될 경우 전형관리위원회의 심의 결과에 따라 불이익이 있을 수 있음",
  ],
};
const 한양학종고른: AdmissionType = {
  name: "학생부종합(고른기회)",
  admissionYear: 2025,
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  highSchoolType: allHighSchools,
  evaluationMethod: "comprehensive",
  cautions: [
    "특목고, 영재고, 외국고, 검정고시 졸업자는 농어촌으로 지원할 수 없음",
    "학교생활기록부 기재사항 중 학교 폭력 관련 내용이 확인될 경우 전형관리위원회의 심의 결과에 따라 불이익이 있을 수 있음",
  ],
  requirements: [
    "basicLivelihoodSecurityRecipients",
    "lowerMiddleClass",
    "nationalMeritRecipient",
    "ruralFishing",
    "fromVocationalHighSchool",
    "disabledPerson",
  ],
};
const 한양학종특성화재직: AdmissionType = {
  name: "학생부종합(특성화고졸재직자)",
  admissionYear: 2025,
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  highSchoolType: ["vocational"],
  evaluationMethod: "comprehensive",
  requirements: ["industrialWork"],
  cautions: [
    "지원 자격 수시 모집요강 확인 필요",
    "학교생활기록부 기재사항 중 학교 폭력 관련 내용이 확인될 경우 전형관리위원회의 심의 결과에 따라 불이익이 있을 수 있음",
  ],
};

const 한양논술: AdmissionType = {
  name: "논술",
  admissionYear: 2025,
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  highSchoolType: allHighSchools,
  evaluationMethod: "essay",
  cautions: [
    "학교생활기록부 기재사항 중 학교 폭력 관련 내용이 확인될 경우 전형관리위원회의 심의 결과에 따라 불이익이 있을 수 있음",
  ],
};
const 한양실기미술: AdmissionType = {
  name: "실기|실적(미술특기자)",
  admissionYear: 2025,
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  highSchoolType: [
    "general",
    "autonomous",
    "special_purpose",
    "gifted",
    "vocational",
  ],
  evaluationMethod: "talent",
  cautions: [
    "학교생활기록부가 없는 자(검정고시 출신자, 외국고교 졸업자 등)는 지원할 수 없음",
    "학교생활기록부 기재사항 중 학교 폭력 관련 내용이 확인될 경우 전형관리위원회의 심의 결과에 따라 불이익이 있을 수 있음",
  ],
};
const 한양실기음악: AdmissionType = {
  name: "실기|실적(음악특기자)",
  admissionYear: 2025,
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  highSchoolType: allHighSchools,
  evaluationMethod: "talent",
  cautions: [
    "학교생활기록부 기재사항 중 학교 폭력 관련 내용이 확인될 경우 전형관리위원회의 심의 결과에 따라 불이익이 있을 수 있음",
  ],
};
const 한양실기체육: AdmissionType = {
  name: "실기|실적(체육특기자)",
  admissionYear: 2025,
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  highSchoolType: allHighSchools,
  evaluationMethod: "talent",
  cautions: [
    "체육특기자 심사년도를 기준으로 3년 이내 대한체육회 산하 가맹 경기단체가 경기실적 증명서를 발급 하는 전국 또는 국제 규모대회 1, 2, 3위 입상자",
    "단체 구기종목은 대한체육회 산하 가맹 경기단체가 경기실적 증명서를 발급하는 전국 또는 국제 규모의 대회에서 고등학교 재학 중 8강 이내에 입상한 자",
    "국가대표, 청소년대표, 유스대표에 선발된 자",
    "고교 재학 중 또는 졸업 후 대한체육회 산하 가맹 경기단체의 실적을 보유한 자",
    "한양대학교는 본교 예체능계열 지원자·재학생의 도핑(Doping : 경기능력 향상을 위해 호르몬제, 신경안정제, 흥분제 등의 약물을 복용하는 행위)을 엄격히 금지함",
    "한양대학교 체육특기자 수시전형에 지원 후 프로배구·농구 신인 드래프트에 신청하여 선발 시 이중 등록으로 합격이 취소될 수 있음",
    "학교생활기록부 기재사항 중 학교 폭력 관련 내용이 확인될 경우 전형관리위원회의 심의 결과에 따라 불이익이 있을 수 있음",
  ],
};
const 한양실기연기: AdmissionType = {
  name: "실기|실적(연기특기자)",
  admissionYear: 2025,
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  highSchoolType: allHighSchools,
  evaluationMethod: "talent",
  cautions: [
    "국내 공인된 영화, TV 등 기타 매체에서 활동한 경력자 혹은 수상자",
    "학교생활기록부 기재사항 중 학교 폭력 관련 내용이 확인될 경우 전형관리위원회의 심의 결과에 따라 불이익이 있을 수 있음",
  ],
};
const 한양실기무용: AdmissionType = {
  name: "실기|실적(무용특기자)",
  admissionYear: 2025,
  graduationYear: ["2025.02", "before 2025.02", "before 2024.02"],
  highSchoolType: allHighSchools,
  evaluationMethod: "talent",
  cautions: [
    "학교생활기록부 기재사항 중 학교 폭력 관련 내용이 확인될 경우 전형관리위원회의 심의 결과에 따라 불이익이 있을 수 있음",
  ],
};

export const universityData: UniversityType[] = [
  {
    name: "서울대학교",
    universityType: "main",
    educationType: "university",
    address: "서울특별시 관악구 관악로 1",
    symbolImage: "/snu-symbol.svg",
    admissionGuide:
      "https://admission.snu.ac.kr/webdata/admission/files/2025susi.pdf",
    id: 1,
    admissionType: "in-group",
    college: [
      {
        name: "인문대학",
        department: [
          {
            name: "인문계열",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 28,
                minimumAcademicRequirement: [
                  "국어, 수학(확통, 미적, 기하), 영어, 탐구(사탐, 과탐 중 구분없이 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구(사탐, 과탐)는 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 제2외국어/한문 응시 필요",
                ],
              },
              { ...서울대기회균형특별전형, admissionQuota: 14 },
            ],
          },
          {
            name: "국어국문학과",
            admission: [{ ...서울대학생부종합전형, admissionQuota: 9 }],
          },
          {
            name: "중어중문학과",
            admission: [{ ...서울대학생부종합전형, admissionQuota: 9 }],
          },
          {
            name: "영어영문학과",
            admission: [{ ...서울대학생부종합전형, admissionQuota: 9 }],
          },
          {
            name: "불어불문학과",
            admission: [{ ...서울대학생부종합전형, admissionQuota: 9 }],
          },
          {
            name: "독어독문학과",
            admission: [{ ...서울대학생부종합전형, admissionQuota: 9 }],
          },
          {
            name: "노어노문학과",
            admission: [{ ...서울대학생부종합전형, admissionQuota: 9 }],
          },
          {
            name: "서어서문학과",
            admission: [{ ...서울대학생부종합전형, admissionQuota: 9 }],
          },
          {
            name: "언어학과",
            admission: [{ ...서울대학생부종합전형, admissionQuota: 9 }],
          },
          {
            name: "아시아언어문명학부",
            admission: [{ ...서울대학생부종합전형, admissionQuota: 9 }],
          },
          {
            name: "역사학부",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 9,
                minimumAcademicRequirement: [
                  "국어, 수학(확통, 미적, 기하), 영어, 탐구(사탐, 과탐 중 구분없이 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구(사탐, 과탐)는 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 제2외국어/한문 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 9 },
            ],
          },
          {
            name: "고고미술사학과",
            admission: [{ ...서울대학생부종합전형, admissionQuota: 9 }],
          },
          {
            name: "철학과",
            admission: [{ ...서울대학생부종합전형, admissionQuota: 9 }],
          },
          {
            name: "종교학과",
            admission: [{ ...서울대학생부종합전형, admissionQuota: 9 }],
          },
          {
            name: "미학과",
            admission: [{ ...서울대학생부종합전형, admissionQuota: 9 }],
          },
        ],
      },
      {
        name: "사회과학대학",
        department: [
          {
            name: "정치외교학부",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 17,
                minimumAcademicRequirement: [
                  "국어, 수학(확통, 미적, 기하), 영어, 탐구(사탐, 과탐 중 구분없이 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구(사탐, 과탐)는 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 제2외국어/한문 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 25 },
              { ...서울대기회균형특별전형, admissionQuota: 4 },
            ],
          },
          {
            name: "경제학부",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 7,
                minimumAcademicRequirement: [
                  "국어, 수학(확통, 미적, 기하), 영어, 탐구(사탐, 과탐 중 구분없이 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구(사탐, 과탐)는 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 제2외국어/한문 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 60 },
              { ...서울대기회균형특별전형, admissionQuota: 8 },
            ],
          },
          {
            name: "사회학과",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 6,
                minimumAcademicRequirement: [
                  "국어, 수학(확통, 미적, 기하), 영어, 탐구(사탐, 과탐 중 구분없이 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구(사탐, 과탐)는 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 제2외국어/한문 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 10 },
              { ...서울대기회균형특별전형, admissionQuota: 1 },
            ],
          },
          {
            name: "인류학과",
            admission: [
              { ...서울대학생부종합전형, admissionQuota: 12 },
              { ...서울대기회균형특별전형, admissionQuota: 1 },
            ],
          },
          {
            name: "심리학과",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 6,
                minimumAcademicRequirement: [
                  "국어, 수학(확통, 미적, 기하), 영어, 탐구(사탐, 과탐 중 구분없이 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구(사탐, 과탐)는 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 제2외국어/한문 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 8 },
              { ...서울대기회균형특별전형, admissionQuota: 1 },
            ],
          },
          {
            name: "지리학과",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 6,
                minimumAcademicRequirement: [
                  "국어, 수학(확통, 미적, 기하), 영어, 탐구(사탐, 과탐 중 구분없이 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구(사탐, 과탐)는 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 제2외국어/한문 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 9 },
              { ...서울대기회균형특별전형, admissionQuota: 1 },
            ],
          },
          {
            name: "사회복지학과",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 6,
                minimumAcademicRequirement: [
                  "국어, 수학(확통, 미적, 기하), 영어, 탐구(사탐, 과탐 중 구분없이 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구(사탐, 과탐)는 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 제2외국어/한문 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 6 },
              { ...서울대기회균형특별전형, admissionQuota: 1 },
            ],
          },
          {
            name: "언론정보학과",
            admission: [
              { ...서울대학생부종합전형, admissionQuota: 13 },
              { ...서울대기회균형특별전형, admissionQuota: 1 },
            ],
          },
        ],
      },
      {
        name: "자연과학대학",
        department: [
          {
            name: "수리과학부",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 7,
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하), 영어, 탐구(과탐 중 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구 영역은 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                  "탐구과목 1 + 2 조합의 경우 다른 과목 분야 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 16 },
              { ...서울대기회균형특별전형, admissionQuota: 2 },
            ],
          },
          {
            name: "통계학과",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 6,
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하), 영어, 탐구(과탐 중 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구 영역은 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                  "탐구과목 1 + 2 조합의 경우 다른 과목 분야 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 13 },
              { ...서울대기회균형특별전형, admissionQuota: 2 },
            ],
          },
          {
            name: "물리천문학부-물리학전공",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 8,
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하), 영어, 탐구(과탐 중 택2 - 두 과목 평균 반영) 중 3개 영역 등급 합이 7등급 이내",
                  "물1, 물2, 화1, 화2 중 1개 과목 이상 반드시 응시",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                  "탐구과목 1 + 2 조합의 경우 다른 과목 분야 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 20 },
              { ...서울대기회균형특별전형, admissionQuota: 2 },
            ],
          },
          {
            name: "물리천문학부-천문학전공",
            admission: [{ ...서울대학생부종합전형, admissionQuota: 6 }],
          },
          {
            name: "화학부",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 7,
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하), 영어, 탐구(과탐 중 택2 - 두 과목 평균 반영) 중 3개 영역 등급 합이 7등급 이내",
                  "물1, 물2, 화1, 화2 중 1개 과목 이상 반드시 응시",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                  "탐구과목 1 + 2 조합의 경우 다른 과목 분야 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 20 },
              { ...서울대기회균형특별전형, admissionQuota: 2 },
            ],
          },
          {
            name: "생명과학부",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 7,
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하), 영어, 탐구(과탐 중 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구 영역은 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                  "탐구과목 1 + 2 조합의 경우 다른 과목 분야 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 27 },
              { ...서울대기회균형특별전형, admissionQuota: 3 },
            ],
          },
          {
            name: "지구환경과학부",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 5,
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하), 영어, 탐구(과탐 중 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구 영역은 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                  "탐구과목 1 + 2 조합의 경우 다른 과목 분야 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 19 },
              { ...서울대기회균형특별전형, admissionQuota: 2 },
            ],
          },
        ],
      },
      {
        name: "간호대학",
        department: [
          {
            name: "간호대학",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 10,
                minimumAcademicRequirement: [
                  "국어, 수학(확통, 미적, 기하), 영어, 탐구(사탐, 과탐 중 구분없이 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구(사탐, 과탐)는 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 제2외국어/한문 응시 필요",
                  "-- 위 아래 두 개 조건 중 하나 만족 --",
                  "국어, 수학(미적, 기하), 영어, 탐구(과탐 중 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구 영역은 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                  "탐구과목 1 + 2 조합의 경우 다른 과목 분야 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 27 },
              { ...서울대기회균형특별전형, admissionQuota: 3 },
            ],
          },
        ],
      },
      {
        name: "경영대학",
        department: [
          {
            name: "경영대학",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 26,
                minimumAcademicRequirement: [
                  "국어, 수학(확통, 미적, 기하), 영어, 탐구(사탐, 과탐 중 구분없이 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구(사탐, 과탐)는 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 제2외국어/한문 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 47 },
              { ...서울대기회균형특별전형, admissionQuota: 7 },
            ],
          },
        ],
      },
      {
        name: "공과대학",
        department: [
          {
            name: "건설환경공학부",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 8,
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하), 영어, 탐구(과탐 중 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구 영역은 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                  "탐구과목 1 + 2 조합의 경우 다른 과목 분야 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 26 },
              { ...서울대기회균형특별전형, admissionQuota: 2 },
            ],
          },
          {
            name: "기계공학부",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 16,
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하), 영어, 탐구(과탐 중 택2 - 두 과목 평균 반영) 중 3개 영역 등급 합이 7등급 이내",
                  "물1, 물2, 화1, 화2 중 1개 과목 이상 반드시 응시",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                  "탐구과목 1 + 2 조합의 경우 다른 과목 분야 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 54 },
              { ...서울대기회균형특별전형, admissionQuota: 6 },
            ],
          },
          {
            name: "재료공학부",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 15,
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하), 영어, 탐구(과탐 중 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구 영역은 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                  "탐구과목 1 + 2 조합의 경우 다른 과목 분야 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 37 },
              { ...서울대기회균형특별전형, admissionQuota: 5 },
            ],
          },
          {
            name: "전기정보공학부",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 11,
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하), 영어, 탐구(과탐 중 택2 - 두 과목 평균 반영) 중 3개 영역 등급 합이 7등급 이내",
                  "물1, 물2, 화1, 화2 중 1개 과목 이상 반드시 응시",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                  "탐구과목 1 + 2 조합의 경우 다른 과목 분야 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 80 },
              { ...서울대기회균형특별전형, admissionQuota: 8 },
            ],
          },
          {
            name: "컴퓨터공학부",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 6,
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하), 영어, 탐구(과탐 중 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구 영역은 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                  "탐구과목 1 + 2 조합의 경우 다른 과목 분야 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 28 },
              { ...서울대기회균형특별전형, admissionQuota: 3 },
            ],
          },
          {
            name: "화학생물공학부",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 12,
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하), 영어, 탐구(과탐 중 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구 영역은 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                  "탐구과목 1 + 2 조합의 경우 다른 과목 분야 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 41 },
              { ...서울대기회균형특별전형, admissionQuota: 4 },
            ],
          },
          {
            name: "건축학과",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 8,
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하), 영어, 탐구(과탐 중 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구 영역은 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                  "탐구과목 1 + 2 조합의 경우 다른 과목 분야 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 25 },
              { ...서울대기회균형특별전형, admissionQuota: 2 },
            ],
          },
          {
            name: "산업공학과",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 4,
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하), 영어, 탐구(과탐 중 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구 영역은 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                  "탐구과목 1 + 2 조합의 경우 다른 과목 분야 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 12 },
              { ...서울대기회균형특별전형, admissionQuota: 2 },
            ],
          },
          {
            name: "에너지자원공학과",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 5,
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하), 영어, 탐구(과탐 중 택2 - 두 과목 평균 반영) 중 3개 영역 등급 합이 7등급 이내",
                  "물1, 물2, 화1, 화2 중 1개 과목 이상 반드시 응시",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                  "탐구과목 1 + 2 조합의 경우 다른 과목 분야 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 15 },
              { ...서울대기회균형특별전형, admissionQuota: 1 },
            ],
          },
          {
            name: "원자핵공학과",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 9,
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하), 영어, 탐구(과탐 중 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구 영역은 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                  "탐구과목 1 + 2 조합의 경우 다른 과목 분야 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 15 },
              { ...서울대기회균형특별전형, admissionQuota: 2 },
            ],
          },
          {
            name: "조선해양공학과",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 6,
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하), 영어, 탐구(과탐 중 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구 영역은 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                  "탐구과목 1 + 2 조합의 경우 다른 과목 분야 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 22 },
              { ...서울대기회균형특별전형, admissionQuota: 1 },
            ],
          },
          {
            name: "항공우주공학과",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 4,
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하), 영어, 탐구(과탐 중 택2 - 두 과목 평균 반영) 중 3개 영역 등급 합이 7등급 이내",
                  "물1, 물2, 화1, 화2 중 1개 과목 이상 반드시 응시",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                  "탐구과목 1 + 2 조합의 경우 다른 과목 분야 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 18 },
              { ...서울대기회균형특별전형, admissionQuota: 2 },
            ],
          },
        ],
      },
      {
        name: "농업생명과학대학",
        department: [
          {
            name: "농경제사회학부",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 11,
                minimumAcademicRequirement: [
                  "국어, 수학(확통, 미적, 기하), 영어, 탐구(사탐, 과탐 중 구분없이 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구(사탐, 과탐)는 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 제2외국어/한문 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 15 },
              { ...서울대기회균형특별전형, admissionQuota: 2 },
            ],
          },
          {
            name: "식물생산과학부",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 6,
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하), 영어, 탐구(과탐 중 택2 - 두 과목 평균 반영) 중 3개 영역 등급 합이 7등급 이내",
                  "물1, 물2, 화1, 화2 중 1개 과목 이상 반드시 응시",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                  "탐구과목 1 + 2 조합의 경우 다른 과목 분야 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 24 },
              { ...서울대기회균형특별전형, admissionQuota: 3 },
            ],
          },
          {
            name: "산림과학부",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 5,
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하), 영어, 탐구(과탐 중 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구 영역은 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                  "탐구과목 1 + 2 조합의 경우 다른 과목 분야 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 19 },
              { ...서울대기회균형특별전형, admissionQuota: 2 },
            ],
          },
          {
            name: "식품동물생명공학부",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 6,
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하), 영어, 탐구(과탐 중 택2 - 두 과목 평균 반영) 중 3개 영역 등급 합이 7등급 이내",
                  "물1, 물2, 화1, 화2 중 1개 과목 이상 반드시 응시",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                  "탐구과목 1 + 2 조합의 경우 다른 과목 분야 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 16 },
              { ...서울대기회균형특별전형, admissionQuota: 2 },
            ],
          },
          {
            name: "응용생물화학부",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 9,
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하), 영어, 탐구(과탐 중 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구 영역은 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                  "탐구과목 1 + 2 조합의 경우 다른 과목 분야 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 15 },
              { ...서울대기회균형특별전형, admissionQuota: 2 },
            ],
          },
          {
            name: "조경지역시스템공학부",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 5,
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하), 영어, 탐구(과탐 중 택2 - 두 과목 평균 반영) 중 3개 영역 등급 합이 7등급 이내",
                  "물1, 물2, 화1, 화2 중 1개 과목 이상 반드시 응시",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                  "탐구과목 1 + 2 조합의 경우 다른 과목 분야 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 14 },
              { ...서울대기회균형특별전형, admissionQuota: 2 },
            ],
          },
          {
            name: "바이오시스템소재학부",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 7,
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하), 영어, 탐구(과탐 중 택2 - 두 과목 평균 반영) 중 3개 영역 등급 합이 7등급 이내",
                  "물1, 물2, 화1, 화2 중 1개 과목 이상 반드시 응시",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                  "탐구과목 1 + 2 조합의 경우 다른 과목 분야 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 13 },
              { ...서울대기회균형특별전형, admissionQuota: 2 },
            ],
          },
          {
            name: "스마트시스템과학과",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 4,
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하), 영어, 탐구(과탐 중 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구 영역은 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                  "탐구과목 1 + 2 조합의 경우 다른 과목 분야 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 10 },
              { ...서울대기회균형특별전형, admissionQuota: 1 },
            ],
          },
        ],
      },
      {
        name: "미술대학",
        department: [
          {
            name: "동양화과",
            admission: [{ ...서울대기회균형특별전형, admissionQuota: 1 }],
          },
          {
            name: "서양화과",
            admission: [{ ...서울대기회균형특별전형, admissionQuota: 1 }],
          },
          {
            name: "조소과",
            admission: [{ ...서울대기회균형특별전형, admissionQuota: 1 }],
          },
          {
            name: "공예과",
            admission: [{ ...서울대기회균형특별전형, admissionQuota: 1 }],
          },
          {
            name: "디자인과",
            admission: [
              {
                ...서울대학생부종합전형,
                admissionQuota: 7,
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(사탐, 과탐 중 구분 없이 택 2) 중 3개 영역 등급 합이 7등급 이내",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                ],
              },
              { ...서울대기회균형특별전형, admissionQuota: 1 },
            ],
          },
        ],
      },
      {
        name: "사범대학",
        department: [
          {
            name: "교육학과",
            admission: [
              { ...서울대학생부종합전형, admissionQuota: 11 },
              { ...서울대기회균형특별전형, admissionQuota: 1 },
            ],
          },
          {
            name: "국어교육과",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 5,
                minimumAcademicRequirement: [
                  "국어, 수학(확통, 미적, 기하), 영어, 탐구(사탐, 과탐 중 구분없이 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구(사탐, 과탐)는 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 제2외국어/한문 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 9 },
              { ...서울대기회균형특별전형, admissionQuota: 1 },
            ],
          },
          {
            name: "영어교육과",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 4,
                minimumAcademicRequirement: [
                  "국어, 수학(확통, 미적, 기하), 영어, 탐구(사탐, 과탐 중 구분없이 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구(사탐, 과탐)는 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 제2외국어/한문 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 12 },
              { ...서울대기회균형특별전형, admissionQuota: 1 },
            ],
          },
          {
            name: "독어교육과",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 4,
                minimumAcademicRequirement: [
                  "국어, 수학(확통, 미적, 기하), 영어, 탐구(사탐, 과탐 중 구분없이 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구(사탐, 과탐)는 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 제2외국어/한문 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 10 },
              { ...서울대기회균형특별전형, admissionQuota: 1 },
            ],
          },
          {
            name: "불어교육과",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 5,
                minimumAcademicRequirement: [
                  "국어, 수학(확통, 미적, 기하), 영어, 탐구(사탐, 과탐 중 구분없이 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구(사탐, 과탐)는 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 제2외국어/한문 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 9 },
              { ...서울대기회균형특별전형, admissionQuota: 1 },
            ],
          },
          {
            name: "사회교육과",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 5,
                minimumAcademicRequirement: [
                  "국어, 수학(확통, 미적, 기하), 영어, 탐구(사탐, 과탐 중 구분없이 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구(사탐, 과탐)는 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 제2외국어/한문 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 6 },
              { ...서울대기회균형특별전형, admissionQuota: 1 },
            ],
          },
          {
            name: "역사교육과",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 5,
                minimumAcademicRequirement: [
                  "국어, 수학(확통, 미적, 기하), 영어, 탐구(사탐, 과탐 중 구분없이 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구(사탐, 과탐)는 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 제2외국어/한문 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 6 },
              { ...서울대기회균형특별전형, admissionQuota: 1 },
            ],
          },
          {
            name: "지리교육과",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 5,
                minimumAcademicRequirement: [
                  "국어, 수학(확통, 미적, 기하), 영어, 탐구(사탐, 과탐 중 구분없이 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구(사탐, 과탐)는 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 제2외국어/한문 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 6 },
              { ...서울대기회균형특별전형, admissionQuota: 1 },
            ],
          },
          {
            name: "윤리교육과",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 3,
                minimumAcademicRequirement: [
                  "국어, 수학(확통, 미적, 기하), 영어, 탐구(사탐, 과탐 중 구분없이 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구(사탐, 과탐)는 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 제2외국어/한문 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 9 },
              { ...서울대기회균형특별전형, admissionQuota: 1 },
            ],
          },
          {
            name: "수학교육과",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 4,
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하), 영어, 탐구(과탐 중 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구 영역은 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                  "탐구과목 1 + 2 조합의 경우 다른 과목 분야 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 11 },
              { ...서울대기회균형특별전형, admissionQuota: 1 },
            ],
          },
          {
            name: "물리교육과",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 3,
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하), 영어, 탐구(과탐 중 택2 - 두 과목 평균 반영) 중 3개 영역 등급 합이 7등급 이내",
                  "물1, 물2, 화1, 화2 중 1개 과목 이상 반드시 응시",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                  "탐구과목 1 + 2 조합의 경우 다른 과목 분야 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 7 },
              { ...서울대기회균형특별전형, admissionQuota: 1 },
            ],
          },
          {
            name: "화학교육과",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 6,
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하), 영어, 탐구(과탐 중 택2 - 두 과목 평균 반영) 중 3개 영역 등급 합이 7등급 이내",
                  "물1, 물2, 화1, 화2 중 1개 과목 이상 반드시 응시",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                  "탐구과목 1 + 2 조합의 경우 다른 과목 분야 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 7 },
              { ...서울대기회균형특별전형, admissionQuota: 1 },
            ],
          },
          {
            name: "생물교육과",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 5,
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하), 영어, 탐구(과탐 중 택2 - 두 과목 평균 반영) 중 3개 영역 등급 합이 7등급 이내",
                  "물1, 물2, 화1, 화2 중 1개 과목 이상 반드시 응시",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                  "탐구과목 1 + 2 조합의 경우 다른 과목 분야 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 7 },
              { ...서울대기회균형특별전형, admissionQuota: 1 },
            ],
          },
          {
            name: "지구과학교육과",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 3,
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하), 영어, 탐구(과탐 중 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구 영역은 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                  "탐구과목 1 + 2 조합의 경우 다른 과목 분야 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 9 },
              { ...서울대기회균형특별전형, admissionQuota: 1 },
            ],
          },
          {
            name: "체육교육과",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 2,
                minimumAcademicRequirement: [
                  "국어, 수학(확통, 미적, 기하), 영어, 탐구(과탐, 사탐 중 구분없이 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구(과탐, 사탐)영역은 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                ],
              },
              {
                ...서울대학생부종합전형,
                admissionQuota: 4,
                cautions: [
                  "지원 가능 종목: 육상(트랙, 필드), 체조, 수영(경영), 테니스, 리듬체조, 배드민턴, 탁구, 태권도, 스키, 빙상, 골프, 유도, 사격, 양궁, 씨름, 농구, 배구, 럭비, 핸드볼, 축구, 야구, 필드하키, 한국무용, 현대부용, 발레",
                ],
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(사탐, 과탐 중 구분 없이 택 2) 중 3개 영역 등급 합이 7등급 이내",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                ],
              },
              { ...서울대기회균형특별전형, admissionQuota: 2 },
            ],
          },
        ],
      },
      {
        name: "생활과학대학",
        department: [
          {
            name: "소비자아동학부-소비자학전공",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 6,
                minimumAcademicRequirement: [
                  "국어, 수학(확통, 미적, 기하), 영어, 탐구(사탐, 과탐 중 구분없이 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구(사탐, 과탐)는 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 제2외국어/한문 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 8 },
              { ...서울대기회균형특별전형, admissionQuota: 1 },
            ],
          },
          {
            name: "소비자아동학부-아동가족학전공",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 5,
                minimumAcademicRequirement: [
                  "국어, 수학(확통, 미적, 기하), 영어, 탐구(사탐, 과탐 중 구분없이 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구(사탐, 과탐)는 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 제2외국어/한문 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 10 },
              { ...서울대기회균형특별전형, admissionQuota: 1 },
            ],
          },
          {
            name: "식품영양학과",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 4,
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하), 영어, 탐구(과탐 중 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구 영역은 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                  "탐구과목 1 + 2 조합의 경우 다른 과목 분야 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 12 },
              { ...서울대기회균형특별전형, admissionQuota: 2 },
            ],
          },
          {
            name: "의류학과",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 8,
                minimumAcademicRequirement: [
                  "국어, 수학(확통, 미적, 기하), 영어, 탐구(사탐, 과탐 중 구분없이 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구(사탐, 과탐)는 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 제2외국어/한문 응시 필요",
                  "-- 두 개 조건 중 하나 만족 --",
                  "국어, 수학(미적, 기하), 영어, 탐구(과탐 중 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구 영역은 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                  "탐구과목 1 + 2 조합의 경우 다른 과목 분야 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 12 },
              { ...서울대기회균형특별전형, admissionQuota: 1 },
            ],
          },
        ],
      },
      {
        name: "수의과대학",
        department: [
          {
            name: "수의예과",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 6,
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하), 영어, 탐구(과탐 중 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구 영역은 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                  "탐구과목 1 + 2 조합의 경우 다른 과목 분야 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 17 },
              { ...서울대기회균형특별전형, admissionQuota: 2 },
            ],
          },
        ],
      },
      {
        name: "약학대학",
        department: [
          {
            name: "약학계열",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 11,
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하), 영어, 탐구(과탐 중 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구 영역은 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                  "탐구과목 1 + 2 조합의 경우 다른 과목 분야 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 29 },
              { ...서울대기회균형특별전형, admissionQuota: 3 },
            ],
          },
        ],
      },
      {
        name: "음악대학",
        department: [
          {
            name: "성악과",
            admission: [
              {
                ...서울대기회균형특별전형,
                admissionQuota: 1,
                cautions: ["여자 1명"],
              },
            ],
          },
          {
            name: "작곡과",
            admission: [
              {
                ...서울대기회균형특별전형,
                admissionQuota: 1,
                cautions: ["작곡 1명"],
              },
            ],
          },
          {
            name: "피아노과",
            admission: [
              {
                ...서울대실기위주전형,
                admissionQuota: 23,
                cautions: ["피아노 23명"],
              },
              {
                ...서울대기회균형특별전형,
                admissionQuota: 1,
                cautions: ["피아노 1명"],
              },
            ],
          },
          {
            name: "관현악과",
            admission: [
              {
                ...서울대실기위주전형,
                admissionQuota: 47,
                cautions: [
                  "바이올린 13명, 비올라 4명, 첼로 6명, 콘트라베이스 3명, 하프 1명, 클래식기타 1명, 플루트 2명, 오보에 2명, 클라리넷 2명, 바순 2명, 혼 3명, 트럼펫 2명, 트롬본 2명, 색소폰 1명, 튜바 1명, 타악기 2명",
                ],
              },
              {
                ...서울대기회균형특별전형,
                admissionQuota: 1,
                cautions: ["바이올린 1명"],
              },
            ],
          },
          {
            name: "국악과",
            admission: [
              {
                ...서울대실기위주전형,
                admissionQuota: 28,
                cautions: [
                  "가야금 5명, 거문고 3명, 해금 3명, 피리 3명, 대금 3명, 아쟁 2명, 타악기 2명, 이론 3명, 작곡 2명, 성악 2명",
                ],
              },
            ],
          },
        ],
      },
      {
        name: "의과대학",
        department: [
          {
            name: "의예과",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 39,
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하), 영어, 탐구(과탐 중 택2 - 두 과목 평균 반영) 중 3개 영역 등급 합이 7등급 이내",
                  "물1, 물2, 화1, 화2 중 1개 과목 이상 반드시 응시",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                  "탐구과목 1 + 2 조합의 경우 다른 과목 분야 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 49 },
              { ...서울대기회균형특별전형, admissionQuota: 7 },
            ],
          },
        ],
      },
      {
        name: "첨단융합학부",
        department: [
          {
            name: "첨단융합학부",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 30,
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하), 영어, 탐구(과탐 중 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구 영역은 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                  "탐구과목 1 + 2 조합의 경우 다른 과목 분야 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 98 },
              { ...서울대기회균형특별전형, admissionQuota: 20 },
            ],
          },
        ],
      },
      {
        name: "학부대학",
        department: [
          {
            name: "자유전공학부",
            admission: [
              {
                ...서울대지역균형전형,
                admissionQuota: 20,
                minimumAcademicRequirement: [
                  "국어, 수학(확통, 미적, 기하), 영어, 탐구(과탐, 사탐 중 구분없이 택2) 중 3개 영역 등급 합이 7등급 이내",
                  "탐구(과탐, 사탐)영역은 두 과목 평균 반영",
                  "국어, 수학, 영어, 한국사, 탐구 응시 필요",
                ],
              },
              { ...서울대학생부종합전형, admissionQuota: 48 },
              { ...서울대기회균형특별전형, admissionQuota: 6 },
            ],
          },
        ],
      },
      {
        name: "치의학대학원",
        department: [
          {
            name: "치의학과",
            admission: [{ ...서울대학생부종합전형, admissionQuota: 25 }],
          },
        ],
      },
    ],
  },
  {
    name: "연세대학교",
    admissionType: "in-group",
    educationType: "university",
    address: "서울특별시 서대문구 연세로 50",
    admissionGuide:
      "https://admission.yonsei.ac.kr/seoul/upload/guide/202407101030333NTXN7.PDF",
    universityType: "main",
    symbolImage: "/yonsei-symbol.svg",
    id: 2,
    college: [
      {
        name: "문과대학",
        department: [
          {
            name: "국어국문학과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 8,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내 (사탐/과탐), 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 11,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내, 영어 3등급 이내, 한국사 4등급 이내",
                ],
              },
              { ...연세대기회균형, admissionQuota: 3, admissionTrack: "인문" },
              { ...연세대논술, admissionQuota: 4, admissionTrack: "인문" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "인문" },
            ],
          },
          {
            name: "중어중문학과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 5,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내 (사탐/과탐), 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 7,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내, 영어 3등급 이내, 한국사 4등급 이내",
                ],
              },
              { ...연세대기회균형, admissionQuota: 2, admissionTrack: "인문" },
              { ...연세대논술, admissionQuota: 4, admissionTrack: "인문" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "인문" },
            ],
          },
          {
            name: "영어영문학과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 13,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내 (사탐/과탐), 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 16,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 사회탐구, 과학탐구 중 선택, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 5, admissionTrack: "인문" },
              { ...연세대논술, admissionQuota: 5, admissionTrack: "인문" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "인문" },
            ],
          },
          {
            name: "독어독문학과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 5,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내 (사탐/과탐), 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 6,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 사회탐구, 과학탐구 중 선택, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 2, admissionTrack: "인문" },
              { ...연세대논술, admissionQuota: 4, admissionTrack: "인문" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "인문" },
            ],
          },
          {
            name: "불어불문학과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 6,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내 (사탐/과탐), 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 7,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 사회탐구, 과학탐구 중 선택, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 2, admissionTrack: "인문" },
              { ...연세대논술, admissionQuota: 4, admissionTrack: "인문" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "인문" },
            ],
          },
          {
            name: "노어노문학과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 5,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내 (사탐/과탐), 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 6,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 사회탐구, 과학탐구 중 선택, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 2, admissionTrack: "인문" },
              { ...연세대논술, admissionQuota: 4, admissionTrack: "인문" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "인문" },
            ],
          },
          {
            name: "사학과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 8,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내 (사탐/과탐), 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 9,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 사회탐구, 과학탐구 중 선택, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 3, admissionTrack: "인문" },
              { ...연세대논술, admissionQuota: 4, admissionTrack: "인문" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "인문" },
            ],
          },
          {
            name: "철학과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 6,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내 (사탐/과탐), 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 7,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 사회탐구, 과학탐구 중 선택, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 2, admissionTrack: "인문" },
              { ...연세대논술, admissionQuota: 4, admissionTrack: "인문" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "인문" },
            ],
          },
          {
            name: "문헌정보학과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 5,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내 (사탐/과탐), 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 6,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 사회탐구, 과학탐구 중 선택, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 2, admissionTrack: "인문" },
              { ...연세대논술, admissionQuota: 4, admissionTrack: "인문" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "인문" },
            ],
          },
          {
            name: "심리학과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 6,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내 (사탐/과탐), 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 8,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 사회탐구, 과학탐구 중 선택, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 3, admissionTrack: "인문" },
              { ...연세대논술, admissionQuota: 4, admissionTrack: "인문" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "인문" },
            ],
          },
        ],
      },
      {
        name: "상경대학",
        department: [
          {
            name: "경제학부",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 29,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내 (사탐/과탐), 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 33,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 사회탐구, 과학탐구 중 선택, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 11, admissionTrack: "인문" },
              { ...연세대논술, admissionQuota: 10, admissionTrack: "인문" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "인문" },
            ],
          },
          {
            name: "응용통계학과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 7,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내 (사탐/과탐), 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 11,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 사회탐구, 과학탐구 중 선택, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 4, admissionTrack: "인문" },
              { ...연세대논술, admissionQuota: 2, admissionTrack: "인문" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "인문" },
            ],
          },
        ],
      },
      {
        name: "경영대학",
        department: [
          {
            name: "경영학과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 45,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내 (사탐/과탐), 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 47,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 사회탐구, 과학탐구 중 선택, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 18, admissionTrack: "인문" },
              { ...연세대논술, admissionQuota: 15, admissionTrack: "인문" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "인문" },
            ],
          },
        ],
      },
      {
        name: "이과대학",
        department: [
          {
            name: "수학과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 5,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 7,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 3, admissionTrack: "자연" },
              { ...연세대논술, admissionQuota: 7, admissionTrack: "자연" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "자연" },
            ],
          },
          {
            name: "물리학과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 5,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 6,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 2, admissionTrack: "자연" },
              { ...연세대논술, admissionQuota: 7, admissionTrack: "자연" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "자연" },
            ],
          },
          {
            name: "화학과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 7,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 10,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 3, admissionTrack: "자연" },
              { ...연세대논술, admissionQuota: 7, admissionTrack: "자연" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "자연" },
            ],
          },
          {
            name: "지구시스템과학과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 5,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 5,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 2, admissionTrack: "자연" },
              { ...연세대논술, admissionQuota: 6, admissionTrack: "자연" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "자연" },
            ],
          },
          {
            name: "천문우주학과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 5,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 5,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 2, admissionTrack: "자연" },
              { ...연세대논술, admissionQuota: 6, admissionTrack: "자연" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "자연" },
            ],
          },
          {
            name: "대기과학과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 5,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 5,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 2, admissionTrack: "자연" },
              { ...연세대논술, admissionQuota: 6, admissionTrack: "자연" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "자연" },
            ],
          },
        ],
      },
      {
        name: "공과대학",
        department: [
          {
            name: "화공생명공학부",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 14,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 16,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 6, admissionTrack: "자연" },
              { ...연세대논술, admissionQuota: 17, admissionTrack: "자연" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "자연" },
            ],
          },
          {
            name: "전기전자공학부",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 31,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 36,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 12, admissionTrack: "자연" },
              { ...연세대논술, admissionQuota: 35, admissionTrack: "자연" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "자연" },
            ],
          },
          {
            name: "건축공학과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 12,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 14,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 6, admissionTrack: "자연" },
              { ...연세대논술, admissionQuota: 15, admissionTrack: "자연" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "자연" },
            ],
          },
          {
            name: "도시공학과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 5,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 6,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 3, admissionTrack: "자연" },
              { ...연세대논술, admissionQuota: 7, admissionTrack: "자연" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "자연" },
            ],
          },
          {
            name: "사회환경시스템공학부",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 13,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 14,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 5, admissionTrack: "자연" },
              { ...연세대논술, admissionQuota: 15, admissionTrack: "자연" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "자연" },
            ],
          },
          {
            name: "기계공학부",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 21,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 22,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 8, admissionTrack: "자연" },
              { ...연세대논술, admissionQuota: 23, admissionTrack: "자연" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "자연" },
            ],
          },
          {
            name: "신소재공학부",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 8,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 11,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 3, admissionTrack: "자연" },
              { ...연세대논술, admissionQuota: 4, admissionTrack: "자연" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "자연" },
            ],
          },
          {
            name: "산업공학과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 5,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 7,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 2, admissionTrack: "자연" },
              { ...연세대논술, admissionQuota: 8, admissionTrack: "자연" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "자연" },
            ],
          },
          {
            name: "시스템반도체공학과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 20,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 38,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 5, admissionTrack: "자연" },
              { ...연세대논술, admissionQuota: 12, admissionTrack: "자연" },
            ],
          },
          {
            name: "디스플레이융합공학과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 5,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 14,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대논술, admissionQuota: 4, admissionTrack: "자연" },
            ],
          },
        ],
      },
      {
        name: "생명시스템대학",
        department: [
          {
            name: "시스템생물학과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 5,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 5,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 2, admissionTrack: "자연" },
              { ...연세대논술, admissionQuota: 5, admissionTrack: "자연" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "자연" },
            ],
          },
          {
            name: "생화학과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 4,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 5,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 2, admissionTrack: "자연" },
              { ...연세대논술, admissionQuota: 4, admissionTrack: "자연" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "자연" },
            ],
          },
          {
            name: "생명공학과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 9,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 10,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 4, admissionTrack: "자연" },
              { ...연세대논술, admissionQuota: 11, admissionTrack: "자연" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "자연" },
            ],
          },
        ],
      },
      {
        name: "인공지능융합대학",
        department: [
          {
            name: "첨단컴퓨팅학부",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 25,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 35,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 13, admissionTrack: "자연" },
              { ...연세대논술, admissionQuota: 22, admissionTrack: "자연" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "자연" },
            ],
          },
          {
            name: "IT융합공학전공",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 5,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 5,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대논술, admissionQuota: 5, admissionTrack: "자연" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "자연" },
            ],
          },
          {
            name: "지능형반도체전공",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 6,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 8,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 1, admissionTrack: "자연" },
              { ...연세대논술, admissionQuota: 5, admissionTrack: "자연" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "자연" },
            ],
          },
        ],
      },
      {
        name: "신과대학",
        department: [
          {
            name: "신학과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 10,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내 (사탐/과탐), 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 12,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 사회탐구, 과학탐구 중 선택, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 3, admissionTrack: "인문" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "인문" },
            ],
          },
        ],
      },
      {
        name: "사회과학대학",
        department: [
          {
            name: "정치외교학과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 14,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내 (사탐/과탐), 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 16,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 사회탐구, 과학탐구 중 선택, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 6, admissionTrack: "인문" },
              { ...연세대논술, admissionQuota: 6, admissionTrack: "인문" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "인문" },
            ],
          },
          {
            name: "행정학과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 14,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내 (사탐/과탐), 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 16,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 사회탐구, 과학탐구 중 선택, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 6, admissionTrack: "인문" },
              { ...연세대논술, admissionQuota: 6, admissionTrack: "인문" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "인문" },
            ],
          },
          {
            name: "사회복지학과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 5,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내 (사탐/과탐), 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 7,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 사회탐구, 과학탐구 중 선택, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 2, admissionTrack: "인문" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "인문" },
            ],
          },
          {
            name: "사회학과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 6,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내 (사탐/과탐), 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 8,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 사회탐구, 과학탐구 중 선택, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 3, admissionTrack: "인문" },
              { ...연세대논술, admissionQuota: 5, admissionTrack: "인문" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "인문" },
            ],
          },
          {
            name: "문화인류학과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 4,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내 (사탐/과탐), 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 4,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 사회탐구, 과학탐구 중 선택, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 1, admissionTrack: "인문" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "인문" },
            ],
          },
          {
            name: "언론홍보영상학부",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 7,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내 (사탐/과탐), 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 8,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 사회탐구, 과학탐구 중 선택, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 3, admissionTrack: "인문" },
              { ...연세대논술, admissionQuota: 5, admissionTrack: "인문" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "인문" },
            ],
          },
        ],
      },
      {
        name: "생활과학대학",
        department: [
          {
            name: "의류환경학과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 5,
                admissionTrack: "통합",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내 (사탐/과탐), 영어 3등급 이내, 한국사 4등급 이내",
                  "-- 또는 --",
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 10,
                admissionTrack: "통합",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내(사탐, 과탐)",
                  "-- 또는 --",
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내(과탐), 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 2, admissionTrack: "통합" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "통합" },
            ],
          },
          {
            name: "식품영양학과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 5,
                admissionTrack: "통합",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내 (사탐/과탐), 영어 3등급 이내, 한국사 4등급 이내",
                  "-- 또는 --",
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내 (과탐), 한국사 4등급 이내",
                  "탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 9,
                admissionTrack: "통합",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내(사탐, 과탐)",
                  "-- 또는 --",
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내(과탐), 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 2, admissionTrack: "통합" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "통합" },
            ],
          },
          {
            name: "실내건축학과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 5,
                admissionTrack: "통합",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내 (사탐/과탐), 영어 3등급 이내, 한국사 4등급 이내",
                  "-- 또는 --",
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내 (과탐), 한국사 4등급 이내",
                  "탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 9,
                admissionTrack: "통합",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내(사탐, 과탐)",
                  "-- 또는 --",
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내(과탐), 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 2, admissionTrack: "통합" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "통합" },
            ],
          },
          {
            name: "아동가족학과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 5,
                admissionTrack: "통합",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내 (사탐/과탐), 영어 3등급 이내, 한국사 4등급 이내",
                  "-- 또는 --",
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내 (과탐), 한국사 4등급 이내",
                  "탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 10,
                admissionTrack: "통합",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내(사탐, 과탐)",
                  "-- 또는 --",
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내(과탐), 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 2, admissionTrack: "통합" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "통합" },
            ],
          },
          {
            name: "통합디자인학과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 5,
                admissionTrack: "통합",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내 (사탐/과탐), 영어 3등급 이내, 한국사 4등급 이내",
                  "-- 또는 --",
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내 (과탐), 한국사 4등급 이내",
                  "탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 10,
                admissionTrack: "통합",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내(사탐, 과탐)",
                  "-- 또는 --",
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내(과탐), 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 2, admissionTrack: "통합" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "통합" },
            ],
          },
        ],
      },
      {
        name: "교육과학대학",
        department: [
          {
            name: "교육학부",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 9,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내 (사탐/과탐), 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 12,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 사회탐구, 과학탐구 중 선택, 탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 4, admissionTrack: "인문" },
              { ...연세대논술, admissionQuota: 4, admissionTrack: "인문" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "인문" },
            ],
          },
          {
            name: "체육교육학과",
            admission: [{ ...연세대특기자체육, admissionQuota: 19 }],
          },
          {
            name: "스포츠응용산업학과",
            admission: [{ ...연세대특기자체육, admissionQuota: 19 }],
          },
        ],
      },
      {
        name: "언더우드국제대학",
        department: [
          {
            name: "언더우드학부(인문, 사회)",
            admission: [
              {
                ...연세대국제해외고,
                admissionQuota: 30,
                admissionTrack: "국제",
              },
              {
                ...연세대특기자국제,
                admissionQuota: 110,
                admissionTrack: "국제",
              },
            ],
          },
          {
            name: "언더우드학부(생명과학공학)",
            admission: [
              {
                ...연세대국제해외고,
                admissionQuota: 5,
                admissionTrack: "국제",
              },
              {
                ...연세대특기자국제,
                admissionQuota: 10,
                admissionTrack: "국제",
              },
            ],
          },
          {
            name: "아시아학전공",
            admission: [
              {
                ...연세대국제국내고,
                admissionQuota: 20,
                admissionTrack: "국제",
              },
            ],
          },
          {
            name: "융합인문사회과학부(HASS)",
            admission: [
              {
                ...연세대국제국내고,
                admissionQuota: 100,
                admissionTrack: "국제",
              },
              {
                ...연세대국제해외고,
                admissionQuota: 30,
                admissionTrack: "국제",
              },
            ],
          },

          {
            name: "융합과학공학부(ISE)",
            admission: [
              {
                ...연세대국제국내고,
                admissionQuota: 40,
                admissionTrack: "국제",
                minimumAcademicRequirement: [
                  "국어, 수학, 탐구(사회탐구/과학탐구) 영역에서 국어, 수학 중 1개 과목을 포함하여 2개 과목 등급 합 5 이내",
                  "영어 2등급 이내",
                  "한국사 4등급 이내",
                  "수학: 공통+선택(확률과 통계, 미적분, 기하 중 택 1), 탐구: 사회탐구/과학탐구",
                  "탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대국제해외고,
                admissionQuota: 20,
                admissionTrack: "국제",
              },
            ],
          },
        ],
      },
      {
        name: "글로벌인재학부",
        department: [
          {
            name: "글로벌인재학부",
            admission: [
              {
                ...연세대국제해외고,
                highSchoolType: ["overseas"],
                admissionQuota: 11,
                admissionTrack: "국제",
                cautions: [
                  ...(연세대국제해외고.cautions
                    ? 연세대국제해외고.cautions
                    : []),
                  "글로벌인재학부는 외국 소재 고등학교 졸업(예정)자에 한하여 지원 가능함",
                ],
              },
            ],
          },
        ],
      },
      {
        name: "의과대학",
        department: [
          {
            name: "의예과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 15,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하) 중 1개 과목을 포함하여 1등급 2개 이상, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목 등급 반영",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 45,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하) 중 1개 과목을 포함하여 1등급 2개 이상, 영어 3등급 이내, 한국사 4등급 이내",
                  "과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목 등급 반영",
                ],
              },
              { ...연세대기회균형, admissionQuota: 3, admissionTrack: "자연" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "자연" },
            ],
          },
        ],
      },
      {
        name: "치과대학",
        department: [
          {
            name: "치의예과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 10,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하) 중 1개 과목을 포함하여 1등급 2개 이상, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목 등급 반영",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 12,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하) 중 1개 과목을 포함하여 1등급 2개 이상, 영어 3등급 이내, 한국사 4등급 이내",
                  "과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목 등급 반영",
                ],
              },
              { ...연세대기회균형, admissionQuota: 2, admissionTrack: "자연" },
              { ...연세대논술, admissionQuota: 10, admissionTrack: "자연" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "자연" },
            ],
          },
        ],
      },
      {
        name: "간호대학",
        department: [
          {
            name: "간호학과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 10,
                admissionTrack: "통합",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내 (사탐/과탐), 영어 3등급 이내, 한국사 4등급 이내",
                  "-- 또는 --",
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내, 영어 3등급 이내 (과탐), 한국사 4등급 이내",
                  "탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 24,
                admissionTrack: "통합",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통) 중 1개 과목을 포함하여 2개 과목 등급 합 4 이내(사탐, 과탐)",
                  "-- 또는 --",
                  "수학(미적, 기하)을 포함하여 2개 과목 등급 합 5 이내(과탐), 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구영역은 평균등급이 아닌 개별 과목등급 기준으로 최저학력기준을 인정함",
                ],
              },
              { ...연세대기회균형, admissionQuota: 3, admissionTrack: "통합" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "통합" },
            ],
          },
        ],
      },
      {
        name: "약학대학",
        department: [
          {
            name: "약학과",
            admission: [
              {
                ...연세대학추,
                admissionQuota: 5,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하) 중 1개 과목을 포함하여 1등급 2개 이상, 영어 3등급 이내, 한국사 4등급 이내",
                  "탐구는 과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목 등급 반영",
                ],
              },
              {
                ...연세대활우,
                admissionQuota: 7,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하) 중 1개 과목을 포함하여 1등급 2개 이상, 영어 3등급 이내, 한국사 4등급 이내",
                  "과학탐구만 반영, 탐구영역은 평균등급이 아닌 개별 과목 등급 반영",
                ],
              },
              { ...연세대기회균형, admissionQuota: 1, admissionTrack: "자연" },
              { ...연세대논술, admissionQuota: 5, admissionTrack: "자연" },
              { ...연세대특수교육, admissionQuota: 0, admissionTrack: "자연" },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "고려대학교",
    id: 3,
    universityType: "main",
    address: "서울특별시 성북구 안암로 145",
    symbolImage: "/korea-symbol.svg",
    admissionGuide:
      "https://oku.korea.ac.kr/oku/ajaxf/FR_SVC/FileDownload.do?FILE_ORG_NM=2025%25ED%2595%2599%25EB%2585%2584%25EB%258F%2584%2520%25EA%25B3%25A0%25EB%25A0%25A4%25EB%258C%2580%25ED%2595%2599%25EA%25B5%2590%2520%25EC%2584%259C%25EC%259A%25B8%25EC%25BA%25A0%25ED%258D%25BC%25EC%258A%25A4%2520%25EC%2588%2598%25EC%258B%259C%25EB%25AA%25A8%25EC%25A7%2591%2520%25EC%259A%2594%25EA%25B0%2595(%25EC%2595%2588)(%25EC%25B2%25B4%25EC%259C%25A1%25EA%25B5%2590%25EC%259C%25A1%25EA%25B3%25BC%2520%25EC%25A0%2591%25EC%2588%2598%25EC%259D%25BC%2520%25EC%2597%25B0%25EC%259E%25A5).pdf&FILE_NM=202408/1723092336826_0.pdf",
    admissionType: "in-group",
    educationType: "university",
    college: [
      {
        name: "경영대학",
        department: [
          {
            name: "경영대학",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 52,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 72,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 46, admissionTrack: "인문" },
              { ...고려대고른, admissionQuota: 15, admissionTrack: "인문" },
              {
                ...고려대논술,
                admissionQuota: 16,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
        ],
      },
      {
        name: "문과대학",
        department: [
          {
            name: "국어국문학과",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 9,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 11,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 7, admissionTrack: "인문" },
              { ...고려대고른, admissionQuota: 3, admissionTrack: "인문" },
              {
                ...고려대논술,
                admissionQuota: 4,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "철학과",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 11,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 5,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 3, admissionTrack: "인문" },
              { ...고려대고른, admissionQuota: 2, admissionTrack: "인문" },
              {
                ...고려대논술,
                admissionQuota: 4,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "한국사학과",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 4,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 5,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 3, admissionTrack: "인문" },
              { ...고려대고른, admissionQuota: 1, admissionTrack: "인문" },
              {
                ...고려대논술,
                admissionQuota: 2,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "사학과",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 7,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 8,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 5, admissionTrack: "인문" },
              { ...고려대고른, admissionQuota: 2, admissionTrack: "인문" },
              {
                ...고려대논술,
                admissionQuota: 5,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "사회학과",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 12,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 15,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 9, admissionTrack: "인문" },
              { ...고려대고른, admissionQuota: 4, admissionTrack: "인문" },
              {
                ...고려대논술,
                admissionQuota: 6,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "한문학과",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 4,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 5,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 3, admissionTrack: "인문" },
              { ...고려대고른, admissionQuota: 1, admissionTrack: "인문" },
              {
                ...고려대논술,
                admissionQuota: 2,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "영어영문학과",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 16,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 20,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 12, admissionTrack: "인문" },
              { ...고려대고른, admissionQuota: 5, admissionTrack: "인문" },
              {
                ...고려대논술,
                admissionQuota: 9,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "독어독문학과",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 6,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 7,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 4, admissionTrack: "인문" },
              { ...고려대고른, admissionQuota: 2, admissionTrack: "인문" },
              {
                ...고려대논술,
                admissionQuota: 3,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "불어불문학과",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 6,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 7,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 15, admissionTrack: "인문" },
              { ...고려대고른, admissionQuota: 2, admissionTrack: "인문" },
              {
                ...고려대논술,
                admissionQuota: 4,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "중어중문학과",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 8,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 10,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 6, admissionTrack: "인문" },
              { ...고려대고른, admissionQuota: 2, admissionTrack: "인문" },
              {
                ...고려대논술,
                admissionQuota: 6,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "노어노문학과",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 6,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 7,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 4, admissionTrack: "인문" },
              { ...고려대고른, admissionQuota: 2, admissionTrack: "인문" },
              {
                ...고려대논술,
                admissionQuota: 3,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "일어일문학과",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 7,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 8,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 5, admissionTrack: "인문" },
              { ...고려대고른, admissionQuota: 2, admissionTrack: "인문" },
              {
                ...고려대논술,
                admissionQuota: 3,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "서어서문학과",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 7,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 9,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 6, admissionTrack: "인문" },
              { ...고려대고른, admissionQuota: 2, admissionTrack: "인문" },
              {
                ...고려대논술,
                admissionQuota: 5,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "언어학과",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 4,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 6,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 3, admissionTrack: "인문" },
              { ...고려대고른, admissionQuota: 1, admissionTrack: "인문" },
              {
                ...고려대논술,
                admissionQuota: 4,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
        ],
      },
      {
        name: "생명과학대학",
        department: [
          {
            name: "생명과학부",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 15,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 19,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 11, admissionTrack: "자연" },
              { ...고려대고른, admissionQuota: 5, admissionTrack: "자연" },
              { ...고려대재직, admissionQuota: 0, admissionTrack: "자연" },
              {
                ...고려대논술,
                admissionQuota: 10,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "생명공학부",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 17,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 23,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 13, admissionTrack: "자연" },
              { ...고려대고른, admissionQuota: 5, admissionTrack: "자연" },
              { ...고려대재직, admissionQuota: 0, admissionTrack: "자연" },
              {
                ...고려대논술,
                admissionQuota: 10,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "식품공학과",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 7,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 10,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 5, admissionTrack: "자연" },
              { ...고려대고른, admissionQuota: 2, admissionTrack: "자연" },
              { ...고려대재직, admissionQuota: 0, admissionTrack: "자연" },
              {
                ...고려대논술,
                admissionQuota: 5,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "환경생태공학부",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 11,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 13,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 8, admissionTrack: "자연" },
              { ...고려대고른, admissionQuota: 3, admissionTrack: "자연" },
              { ...고려대재직, admissionQuota: 0, admissionTrack: "자연" },
              {
                ...고려대논술,
                admissionQuota: 7,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "식품자원경제학과",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 9,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 10,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 6, admissionTrack: "인문" },
              { ...고려대고른, admissionQuota: 3, admissionTrack: "인문" },
              {
                ...고려대논술,
                admissionQuota: 5,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
        ],
      },
      {
        name: "정경대학",
        department: [
          {
            name: "정치외교학과",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 12,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 15,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 9, admissionTrack: "인문" },
              { ...고려대고른, admissionQuota: 4, admissionTrack: "인문" },
              {
                ...고려대논술,
                admissionQuota: 6,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "경제학과",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 21,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 25,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 15, admissionTrack: "인문" },
              { ...고려대고른, admissionQuota: 6, admissionTrack: "인문" },
              {
                ...고려대논술,
                admissionQuota: 13,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "통계학과",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 13,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 15,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 10, admissionTrack: "인문" },
              { ...고려대고른, admissionQuota: 4, admissionTrack: "인문" },
              {
                ...고려대논술,
                admissionQuota: 7,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "행정학과",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 12,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 14,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 9, admissionTrack: "인문" },
              { ...고려대고른, admissionQuota: 4, admissionTrack: "인문" },
              {
                ...고려대논술,
                admissionQuota: 6,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
        ],
      },
      {
        name: "이과대학",
        department: [
          {
            name: "수학과",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 8,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 10,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 6, admissionTrack: "자연" },
              { ...고려대고른, admissionQuota: 2, admissionTrack: "자연" },
              {
                ...고려대논술,
                admissionQuota: 5,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "물리학과",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 8,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 10,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 6, admissionTrack: "자연" },
              { ...고려대고른, admissionQuota: 2, admissionTrack: "자연" },
              {
                ...고려대논술,
                admissionQuota: 5,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "화학과",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 7,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 9,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 5, admissionTrack: "자연" },
              { ...고려대고른, admissionQuota: 2, admissionTrack: "자연" },
              {
                ...고려대논술,
                admissionQuota: 5,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "지구환경과학과",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 4,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 6,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 5, admissionTrack: "자연" },
              { ...고려대고른, admissionQuota: 2, admissionTrack: "자연" },
              {
                ...고려대논술,
                admissionQuota: 4,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
        ],
      },
      {
        name: "공과대학",
        department: [
          {
            name: "공과대학",
            admission: [
              {
                ...고려대학우,
                admissionQuota: 33,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "화공생명공학과",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 14,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 16,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 5, admissionTrack: "자연" },
              { ...고려대고른, admissionQuota: 4, admissionTrack: "자연" },
              { ...고려대재직, admissionQuota: 0, admissionTrack: "자연" },
              {
                ...고려대논술,
                admissionQuota: 13,
                admissionTrack:
                  "자연,\n" +
                  "                minimumAcademicRequirement:\n" +
                  "                  '국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 과탐, 서로 다른 분야 응시) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내',\n" +
                  "              ",
              },
            ],
          },
          {
            name: "신소재공학부",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 22,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 19,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 17, admissionTrack: "자연" },
              { ...고려대고른, admissionQuota: 7, admissionTrack: "자연" },
              { ...고려대재직, admissionQuota: 0, admissionTrack: "자연" },
              {
                ...고려대논술,
                admissionQuota: 13,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "건축사회환경공학부",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 15,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 15,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 11, admissionTrack: "자연" },
              { ...고려대고른, admissionQuota: 4, admissionTrack: "자연" },
              { ...고려대재직, admissionQuota: 0, admissionTrack: "자연" },
              {
                ...고려대논술,
                admissionQuota: 9,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "건축학과",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 6,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 8,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 5, admissionTrack: "자연" },
              { ...고려대고른, admissionQuota: 2, admissionTrack: "자연" },
              { ...고려대재직, admissionQuota: 0, admissionTrack: "자연" },
              {
                ...고려대논술,
                admissionQuota: 4,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "기계공학부",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 21,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 22,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 16, admissionTrack: "자연" },
              { ...고려대고른, admissionQuota: 6, admissionTrack: "자연" },
              { ...고려대재직, admissionQuota: 0, admissionTrack: "자연" },
              {
                ...고려대논술,
                admissionQuota: 15,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "산업경영공학부",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 8,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 7,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 6, admissionTrack: "자연" },
              { ...고려대고른, admissionQuota: 2, admissionTrack: "자연" },
              { ...고려대재직, admissionQuota: 0, admissionTrack: "자연" },
              {
                ...고려대논술,
                admissionQuota: 7,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "전기전자공학부",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 34,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 43,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 28, admissionTrack: "자연" },
              { ...고려대고른, admissionQuota: 14, admissionTrack: "자연" },
              { ...고려대재직, admissionQuota: 0, admissionTrack: "자연" },
              {
                ...고려대논술,
                admissionQuota: 13,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "반도체공학과",
            admission: [
              {
                ...고려대학우,
                admissionQuota: 10,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 과탐, 서로 다른 분야 응시) 4개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 10, admissionTrack: "자연" },
            ],
          },
          {
            name: "융합에너지공학과",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 5,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 6,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 4, admissionTrack: "자연" },
              { ...고려대고른, admissionQuota: 1, admissionTrack: "자연" },
              { ...고려대재직, admissionQuota: 0, admissionTrack: "자연" },
              {
                ...고려대논술,
                admissionQuota: 3,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "차세대통신학과",
            admission: [
              {
                ...고려대학우,
                admissionQuota: 10,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 과탐, 서로 다른 분야 응시) 4개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 10, admissionTrack: "자연" },
            ],
          },
        ],
      },
      {
        name: "의과대학",
        department: [
          {
            name: "의과대학",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 18,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 과탐, 서로 다른 분야 응시) 4개 영역 등급의 합이 5이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 29,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 과탐, 서로 다른 분야 응시) 4개 영역 등급의 합이 5이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 15, admissionTrack: "자연" },
              { ...고려대고른, admissionQuota: 5, admissionTrack: "자연" },
            ],
          },
        ],
      },
      {
        name: "사범대학",
        department: [
          {
            name: "교육학과",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 8,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 10,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 6, admissionTrack: "인문" },
              { ...고려대고른, admissionQuota: 2, admissionTrack: "인문" },
              {
                ...고려대논술,
                admissionQuota: 4,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "국어교육과",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 8,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 9,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 6, admissionTrack: "인문" },
              { ...고려대고른, admissionQuota: 2, admissionTrack: "인문" },
              {
                ...고려대논술,
                admissionQuota: 5,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "영어교육과",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 9,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 11,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 7, admissionTrack: "인문" },
              { ...고려대고른, admissionQuota: 3, admissionTrack: "인문" },
              {
                ...고려대논술,
                admissionQuota: 6,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "지리교육과",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 6,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 7,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 4, admissionTrack: "인문" },
              { ...고려대고른, admissionQuota: 2, admissionTrack: "인문" },
              {
                ...고려대논술,
                admissionQuota: 3,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "역사교육과",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 5,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 6,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 4, admissionTrack: "인문" },
              { ...고려대고른, admissionQuota: 1, admissionTrack: "인문" },
              {
                ...고려대논술,
                admissionQuota: 3,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "가정교육과",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 7,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 7,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 4, admissionTrack: "자연" },
              { ...고려대고른, admissionQuota: 2, admissionTrack: "자연" },
              {
                ...고려대논술,
                admissionQuota: 2,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "수학교육과",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 6,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 7,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 4, admissionTrack: "자연" },
              { ...고려대고른, admissionQuota: 2, admissionTrack: "자연" },
              {
                ...고려대논술,
                admissionQuota: 4,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "체육교육과",
            admission: [
              {
                ...고려대특기자,
                admissionQuota: 40,
                admissionTrack: "체능",
                minimumAcademicRequirement: [
                  "최저학력 기준 고려대 수시모집 요강 확인 필요",
                ],
              },
            ],
          },
        ],
      },
      {
        name: "간호대학",
        department: [
          {
            name: "간호대학",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 10,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 12,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 7, admissionTrack: "자연" },
              { ...고려대고른, admissionQuota: 3, admissionTrack: "자연" },
              {
                ...고려대논술,
                admissionQuota: 5,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
        ],
      },
      {
        name: "정보대학",
        department: [
          {
            name: "컴퓨터학과",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 20,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 25,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 15, admissionTrack: "자연" },
              { ...고려대고른, admissionQuota: 7, admissionTrack: "자연" },
              { ...고려대재직, admissionQuota: 0, admissionTrack: "자연" },
              {
                ...고려대논술,
                admissionQuota: 11,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "데이터과학과",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 7,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 8,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 6, admissionTrack: "자연" },
              { ...고려대고른, admissionQuota: 2, admissionTrack: "자연" },
              { ...고려대재직, admissionQuota: 0, admissionTrack: "자연" },
              {
                ...고려대논술,
                admissionQuota: 3,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "인공지능학과",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 16,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 21,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 13, admissionTrack: "자연" },
              { ...고려대고른, admissionQuota: 5, admissionTrack: "자연" },
              { ...고려대재직, admissionQuota: 0, admissionTrack: "자연" },
              {
                ...고려대논술,
                admissionQuota: 9,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
        ],
      },
      {
        name: "디자인조형학부",
        department: [
          {
            name: "디자인조형학부",
            admission: [
              {
                ...고려대특기자,
                admissionQuota: 15,
                admissionTrack: "예능",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
        ],
      },
      {
        name: "국제대학",
        department: [
          {
            name: "국제학부",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 7,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 10,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 10, admissionTrack: "인문" },
              { ...고려대고른, admissionQuota: 2, admissionTrack: "인문" },
              {
                ...고려대논술,
                admissionQuota: 5,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "글로벌한귝융합학부",
            admission: [
              { ...고려대계적, admissionQuota: 5, admissionTrack: "인문" },
            ],
          },
        ],
      },
      {
        name: "미디어대학",
        department: [
          {
            name: "미디어학부",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 12,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 14,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 9, admissionTrack: "인문" },
              { ...고려대고른, admissionQuota: 4, admissionTrack: "인문" },
              {
                ...고려대논술,
                admissionQuota: 6,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
        ],
      },
      {
        name: "보건과학대학",
        department: [
          {
            name: "바이오의공학부",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 12,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 17,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 10, admissionTrack: "자연" },
              { ...고려대고른, admissionQuota: 4, admissionTrack: "자연" },
              { ...고려대재직, admissionQuota: 0, admissionTrack: "자연" },
              {
                ...고려대논술,
                admissionQuota: 7,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "바이오시스템의과학부",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 10,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 13,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 8, admissionTrack: "자연" },
              { ...고려대고른, admissionQuota: 3, admissionTrack: "자연" },
              { ...고려대재직, admissionQuota: 0, admissionTrack: "자연" },
              {
                ...고려대논술,
                admissionQuota: 6,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "보건환경융합과학부",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 18,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 22,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 13, admissionTrack: "자연" },
              { ...고려대고른, admissionQuota: 6, admissionTrack: "자연" },
              { ...고려대재직, admissionQuota: 0, admissionTrack: "자연" },
              {
                ...고려대논술,
                admissionQuota: 11,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "보건정책관리학부",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 12,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 15,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 9, admissionTrack: "인문" },
              { ...고려대고른, admissionQuota: 4, admissionTrack: "인문" },
              {
                ...고려대논술,
                admissionQuota: 6,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
        ],
      },
      {
        name: "자유전공학부",
        department: [
          {
            name: "자유전공학부",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 18,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 22,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대고른, admissionQuota: 5, admissionTrack: "인문" },
              {
                ...고려대논술,
                admissionQuota: 15,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
        ],
      },
      {
        name: "스마트보안학부",
        department: [
          {
            name: "스마트보안학부",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 8,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 10,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 6, admissionTrack: "자연" },
              { ...고려대고른, admissionQuota: 3, admissionTrack: "자연" },
              { ...고려대재직, admissionQuota: 0, admissionTrack: "자연" },
              {
                ...고려대논술,
                admissionQuota: 5,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
          {
            name: "사이버국방학과",
            admission: [
              고려대사국,
              { ...고려대특기자, admissionQuota: 10, admissionTrack: "자연" },
            ],
          },
        ],
      },
      {
        name: "심리학부",
        department: [
          {
            name: "심리학부",
            admission: [
              {
                ...고려대학추,
                admissionQuota: 7,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 중 3개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              {
                ...고려대학우,
                admissionQuota: 8,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 5, admissionTrack: "인문" },
              { ...고려대고른, admissionQuota: 2, admissionTrack: "인문" },
              {
                ...고려대논술,
                admissionQuota: 4,
                admissionTrack: "인문",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(상위 1과목, 사탐/과탐) 4개 영역 등급의 합이 8이내 및 한국사 4등급 이내",
                ],
              },
            ],
          },
        ],
      },
      {
        name: "스마트모빌리티학부",
        department: [
          {
            name: "스마트모빌리티학부",
            admission: [
              {
                ...고려대학우,
                admissionQuota: 10,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학(미적, 기하, 확통), 영어, 탐구(2과목 평균, 과탐, 서로 다른 분야 응시) 4개 영역 등급의 합이 7이내 및 한국사 4등급 이내",
                ],
              },
              { ...고려대계적, admissionQuota: 20, admissionTrack: "자연" },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "서강대학교",
    admissionType: "in-group",
    educationType: "university",
    address: "서울특별시 마포구 백범로 35",
    admissionGuide:
      "https://admission.sogang.ac.kr/upload/BBS0014/20240702162805D8ZQKD.PDF",
    universityType: "main",
    symbolImage: "/sogang-symbol.svg",
    id: 4,
    college: [
      {
        name: "인문대학",
        department: [
          {
            name: "인문학부",
            admission: [
              {
                ...서강대교과지균,
                admissionQuota: 12,
                cautions: 서강대교과지균.cautions
                  ? [
                      ...서강대교과지균.cautions,
                      "국어국문학과, 사학과, 철학과, 종교학과",
                    ]
                  : undefined,
              },
              {
                ...서강대학종기균,
                admissionQuota: 7,
                cautions: 서강대학종기균.cautions
                  ? [
                      ...서강대학종기균.cautions,
                      "국어국문학과, 사학과, 철학과, 종교학과",
                    ]
                  : undefined,
              },
              {
                ...서강대학종가치,
                admissionQuota: 3,
                cautions: 서강대학종가치.cautions
                  ? [
                      ...서강대학종가치.cautions,
                      "국어국문학과, 사학과, 철학과, 종교학과",
                    ]
                  : undefined,
              },
              {
                ...서강대논술,
                admissionQuota: 16,
                cautions: 서강대논술.cautions
                  ? [
                      ...서강대논술.cautions,
                      "국어국문학과, 사학과, 철학과, 종교학과",
                    ]
                  : undefined,
              },
            ],
          },
          {
            name: "국어국문학과",
            admission: [{ ...서강대학종일반, admissionQuota: 10 }],
          },
          {
            name: "사학과",
            admission: [{ ...서강대학종일반, admissionQuota: 10 }],
          },
          {
            name: "철학과",
            admission: [{ ...서강대학종일반, admissionQuota: 10 }],
          },
          {
            name: "종교학과",
            admission: [{ ...서강대학종일반, admissionQuota: 8 }],
          },
          {
            name: "영문학부",
            admission: [
              { ...서강대교과지균, admissionQuota: 8 },
              { ...서강대학종일반, admissionQuota: 28 },
              { ...서강대학종기균, admissionQuota: 5 },
              { ...서강대학종가치, admissionQuota: 3 },
              { ...서강대논술, admissionQuota: 10 },
            ],
          },
          {
            name: "유럽문화학과",
            admission: [
              { ...서강대교과지균, admissionQuota: 6 },
              { ...서강대학종일반, admissionQuota: 20 },
              { ...서강대학종기균, admissionQuota: 4 },
            ],
          },
          {
            name: "중국문화학과",
            admission: [
              { ...서강대교과지균, admissionQuota: 4 },
              { ...서강대학종일반, admissionQuota: 14 },
              { ...서강대학종기균, admissionQuota: 3 },
            ],
          },
        ],
      },
      {
        name: "사회과학대학",
        department: [
          {
            name: "사회과학부",
            admission: [
              {
                ...서강대교과지균,
                admissionQuota: 9,
                cautions: 서강대교과지균.cautions
                  ? [
                      ...서강대교과지균.cautions,
                      "사회학과, 정치외교학과, 심리학과",
                    ]
                  : undefined,
              },
              {
                ...서강대학종기균,
                admissionQuota: 5,
                cautions: 서강대학종기균.cautions
                  ? [
                      ...서강대학종기균.cautions,
                      "사회학과, 정치외교학과, 심리학과",
                    ]
                  : undefined,
              },
              {
                ...서강대학종가치,
                admissionQuota: 3,
                cautions: 서강대학종가치.cautions
                  ? [
                      ...서강대학종가치.cautions,
                      "사회학과, 정치외교학과, 심리학과",
                    ]
                  : undefined,
              },
              {
                ...서강대논술,
                admissionQuota: 14,
                cautions: 서강대논술.cautions
                  ? [...서강대논술.cautions, "사회학과, 정치외교학과, 심리학과"]
                  : undefined,
              },
            ],
          },
          {
            name: "사회학과",
            admission: [{ ...서강대학종일반, admissionQuota: 11 }],
          },
          {
            name: "정치외교학과",
            admission: [{ ...서강대학종일반, admissionQuota: 11 }],
          },
          {
            name: "심리학과",
            admission: [{ ...서강대학종일반, admissionQuota: 11 }],
          },
        ],
      },
      {
        name: "경제대학",
        department: [
          {
            name: "경제학과",
            admission: [
              { ...서강대교과지균, admissionQuota: 16 },
              { ...서강대학종일반, admissionQuota: 50 },
              { ...서강대학종기균, admissionQuota: 8 },
              { ...서강대학종가치, admissionQuota: 3 },
              { ...서강대논술, admissionQuota: 21 },
            ],
          },
        ],
      },
      {
        name: "경영대학",
        department: [
          {
            name: "경영학부",
            admission: [
              { ...서강대교과지균, admissionQuota: 26 },
              { ...서강대학종일반, admissionQuota: 84 },
              { ...서강대학종기균, admissionQuota: 14 },
              { ...서강대학종가치, admissionQuota: 5 },
              { ...서강대논술, admissionQuota: 38 },
            ],
          },
        ],
      },
      {
        name: "지식융합미디어대학",
        department: [
          {
            name: "지식융합미디어학부",
            admission: [
              {
                ...서강대교과지균,
                admissionQuota: 10,
                cautions: 서강대교과지균.cautions
                  ? [
                      ...서강대교과지균.cautions,
                      "신문방송학과, 미디어&엔터테이먼트학과, 아트&테크놀로지학과",
                    ]
                  : undefined,
              },
              {
                ...서강대학종기균,
                admissionQuota: 6,
                cautions: 서강대학종기균.cautions
                  ? [
                      ...서강대학종기균.cautions,
                      "신문방송학과, 미디어&엔터테이먼트학과, 아트&테크놀로지학과",
                    ]
                  : undefined,
              },
              {
                ...서강대학종가치,
                admissionQuota: 3,
                cautions: 서강대학종가치.cautions
                  ? [
                      ...서강대학종가치.cautions,
                      "신문방송학과, 미디어&엔터테이먼트학과, 아트&테크놀로지학과",
                    ]
                  : undefined,
              },
              {
                ...서강대논술,
                admissionQuota: 10,
                cautions: 서강대논술.cautions
                  ? [
                      ...서강대논술.cautions,
                      "신문방송학과, 미디어&엔터테이먼트학과, 아트&테크놀로지학과",
                    ]
                  : undefined,
              },
            ],
          },
          {
            name: "신문방송학과",
            admission: [{ ...서강대학종일반, admissionQuota: 18 }],
          },
          {
            name: "미디어&엔터테이먼트학과",
            admission: [{ ...서강대학종일반, admissionQuota: 14 }],
          },
          {
            name: "아트&테크놀로지학과",
            admission: [{ ...서강대학종일반, admissionQuota: 14 }],
          },
        ],
      },
      {
        name: "로율라국제대학",
        department: [
          {
            name: "글로벌한국학부",
            admission: [
              { ...서강대교과지균, admissionQuota: 3 },
              { ...서강대학종일반, admissionQuota: 6 },
            ],
          },
          {
            name: "게페르트국제학부",
            admission: [{ ...서강대학종일반, admissionQuota: 5 }],
          },
        ],
      },
      {
        name: "자연과학대학",
        department: [
          {
            name: "수학과",
            admission: [
              { ...서강대교과지균, admissionQuota: 5 },
              { ...서강대학종일반, admissionQuota: 16 },
              { ...서강대학종기균, admissionQuota: 3 },
              { ...서강대학종가치, admissionQuota: 2 },
              { ...서강대논술, admissionQuota: 6 },
            ],
          },
          {
            name: "물리학과",
            admission: [
              { ...서강대교과지균, admissionQuota: 5 },
              { ...서강대학종일반, admissionQuota: 14 },
              { ...서강대학종기균, admissionQuota: 3 },
              { ...서강대학종가치, admissionQuota: 2 },
              { ...서강대논술, admissionQuota: 6 },
            ],
          },
          {
            name: "화학과",
            admission: [
              { ...서강대교과지균, admissionQuota: 5 },
              { ...서강대학종일반, admissionQuota: 21 },
              { ...서강대학종기균, admissionQuota: 4 },
              { ...서강대학종가치, admissionQuota: 2 },
            ],
          },
          {
            name: "생명과학과",
            admission: [
              { ...서강대교과지균, admissionQuota: 5 },
              { ...서강대학종일반, admissionQuota: 21 },
              { ...서강대학종기균, admissionQuota: 4 },
              { ...서강대학종가치, admissionQuota: 2 },
            ],
          },
        ],
      },
      {
        name: "공과대학",
        department: [
          {
            name: "전자공학과",
            admission: [
              { ...서강대교과지균, admissionQuota: 10 },
              { ...서강대학종일반, admissionQuota: 30 },
              { ...서강대학종기균, admissionQuota: 5 },
              { ...서강대학종가치, admissionQuota: 2 },
              { ...서강대논술, admissionQuota: 12 },
            ],
          },
          {
            name: "화공생명공학과",
            admission: [
              { ...서강대교과지균, admissionQuota: 10 },
              { ...서강대학종일반, admissionQuota: 30 },
              { ...서강대학종기균, admissionQuota: 5 },
              { ...서강대학종가치, admissionQuota: 2 },
              { ...서강대논술, admissionQuota: 12 },
            ],
          },
          {
            name: "기계공학과",
            admission: [
              { ...서강대교과지균, admissionQuota: 8 },
              { ...서강대학종일반, admissionQuota: 27 },
              { ...서강대학종기균, admissionQuota: 4 },
              { ...서강대학종가치, admissionQuota: 2 },
              { ...서강대논술, admissionQuota: 10 },
            ],
          },
          {
            name: "시스템반도체공학과",
            admission: [
              { ...서강대교과지균, admissionQuota: 3 },
              { ...서강대학종일반, admissionQuota: 14 },
              { ...서강대논술, admissionQuota: 3 },
            ],
          },
        ],
      },
      {
        name: "소프트웨어융합대학",
        department: [
          {
            name: "컴퓨터공학과",
            admission: [
              { ...서강대교과지균, admissionQuota: 10 },
              { ...서강대학종일반, admissionQuota: 29 },
              { ...서강대학종기균, admissionQuota: 5 },
              { ...서강대학종가치, admissionQuota: 2 },
              { ...서강대논술, admissionQuota: 12 },
            ],
          },
          {
            name: "인공지능학과",
            admission: [
              { ...서강대교과지균, admissionQuota: 3 },
              { ...서강대학종일반, admissionQuota: 12 },
              { ...서강대논술, admissionQuota: 3 },
            ],
          },
        ],
      },
      {
        name: "자유전공학부",
        department: [
          {
            name: "Science기반자유전공학부",
            admission: [{ ...서강대교과지균, admissionQuota: 5 }],
          },
          {
            name: "인문학기반자유전공학부",
            admission: [
              { ...서강대교과지균, admissionQuota: 10 },
              { ...서강대학종일반, admissionQuota: 10 },
            ],
          },
          {
            name: "AI기반자유전공학부",
            admission: [
              { ...서강대교과지균, admissionQuota: 5 },
              { ...서강대학종일반, admissionQuota: 10 },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "성균관대학교",
    admissionType: "in-group",
    educationType: "university",
    address: "서울특별시 종로구 성균관로 25-2",
    admissionGuide:
      "https://admission.skku.edu/common/download.php?fpath=board/20240819155726PHYDSU.pdf&fname=%5B성균관대학교%5D+2025학년도+수시+모집요강.pdf",
    universityType: "main",
    symbolImage: "/skku.svg",
    id: 5,
    college: [
      {
        name: "문과대학",
        department: [
          {
            name: "인문과학계열",
            admission: [
              {
                ...성균관학종융합,
                admissionQuota: 34,
                cautions: [
                  "유학·동양학과, 국어국문학과, 영어영문학과, 프랑스어문학과, 중어중문학과, 독어독문학과, 러시아어문학과, 한문학과, 사학과, 철학과, 문헌정보학과",
                ],
              },
              {
                ...성균관학종기균,
                admissionQuota: 6,
                cautions: [
                  ...(성균관학종기균.cautions ? 성균관학종기균.cautions : []),
                  "유학·동양학과, 국어국문학과, 영어영문학과, 프랑스어문학과, 중어중문학과, 독어독문학과, 러시아어문학과, 한문학과, 사학과, 철학과, 문헌정보학과",
                ],
              },
              {
                ...성균관교과,
                admissionQuota: 16,
                cautions: [
                  "유학·동양학과, 국어국문학과, 영어영문학과, 프랑스어문학과, 중어중문학과, 독어독문학과, 러시아어문학과, 한문학과, 사학과, 철학과, 문헌정보학과",
                ],
                minimumAcademicRequirement: 성균교과최저37,
              },
              {
                ...성균관논술,
                admissionQuota: 35,
                cautions: [
                  "유학·동양학과, 국어국문학과, 영어영문학과, 프랑스어문학과, 중어중문학과, 독어독문학과, 러시아어문학과, 한문학과, 사학과, 철학과, 문헌정보학과",
                ],
                minimumAcademicRequirement: 성균논술최저36,
              },
              {
                ...성균관학종농어촌,
                admissionQuota: 0,
                cautions: [
                  "유학·동양학과, 국어국문학과, 영어영문학과, 프랑스어문학과, 중어중문학과, 독어독문학과, 러시아어문학과, 한문학과, 사학과, 철학과, 문헌정보학과",
                  "인문과학계열, 사회과학계열, 경영학과, 자연과학계열, 전자전기공학부, 공학계열, 소프트웨어학과, 반도체융합공학과, 에너지학과, 양자정보공학과에서 총 109명 모집",
                  "인문과학계열 최대 선발가능인원: 40명",
                ],
              },
              {
                ...성균관학종특성화고,
                admissionQuota: 0,
                cautions: [
                  "유학·동양학과, 국어국문학과, 영어영문학과, 프랑스어문학과, 중어중문학과, 독어독문학과, 러시아어문학과, 한문학과, 사학과, 철학과, 문헌정보학과",
                  "인문과학계열, 사회과학계열, 경영학과, 자연과학계열, 전자전기공학부, 공학계열, 소프트웨어학과에서 총 25명 모집",
                  "인문과학계열 최대 선발가능인원: 25명",
                ],
              },
              {
                ...성균관학종이웃사랑,
                admissionQuota: 0,
                cautions: [
                  "유학·동양학과, 국어국문학과, 영어영문학과, 프랑스어문학과, 중어중문학과, 독어독문학과, 러시아어문학과, 한문학과, 사학과, 철학과, 문헌정보학과",
                  "인문과학계열, 사회과학계열, 경영학과, 자연과학계열, 전자전기공학부, 공학계열, 소프트웨어학과, 반도체융합공학과, 에너지학과, 양자정보공학과에서 총 55명 모집",
                  "인문과학계열 최대 선발가능인원: 55명",
                ],
              },
              {
                ...성균관학종장애인,
                admissionQuota: 0,
                cautions: [
                  "유학·동양학과, 국어국문학과, 영어영문학과, 프랑스어문학과, 중어중문학과, 독어독문학과, 러시아어문학과, 한문학과, 사학과, 철학과, 문헌정보학과",
                  "인문과학계열, 사회과학계열, 경영학과, 자연과학계열, 전자전기공학부, 공학계열, 소프트웨어학과에서 총 6명 모집",
                ],
              },
            ],
          },
          {
            name: "국어국문학과",
            admission: [
              {
                ...성균관교과,
                admissionQuota: 12,
                minimumAcademicRequirement: 성균교과최저37,
              },
            ],
          },
          {
            name: "프랑스어문학과",
            admission: [
              {
                ...성균관학종탐구,
                admissionQuota: 12,
                minimumAcademicRequirement: 성균교과최저37,
              },
            ],
          },
          {
            name: "독어독문학과",
            admission: [
              {
                ...성균관학종탐구,
                admissionQuota: 12,
                minimumAcademicRequirement: 성균교과최저37,
              },
            ],
          },
          {
            name: "러시아어문학과",
            admission: [
              {
                ...성균관학종탐구,
                admissionQuota: 12,
                minimumAcademicRequirement: 성균교과최저37,
              },
            ],
          },
          {
            name: "한문학과",
            admission: [
              {
                ...성균관교과,
                admissionQuota: 20,
                minimumAcademicRequirement: 성균교과최저37,
              },
            ],
          },
          {
            name: "사학과",
            admission: [
              {
                ...성균관교과,
                admissionQuota: 12,
                minimumAcademicRequirement: 성균교과최저37,
              },
            ],
          },
          {
            name: "철학과",
            admission: [
              {
                ...성균관교과,
                admissionQuota: 12,
                minimumAcademicRequirement: 성균교과최저37,
              },
            ],
          },
        ],
      },
      {
        name: "유학대학",
        department: [
          {
            name: "유학동양학과",
            admission: [
              { ...성균관학종탐구, admissionQuota: 20 },
              {
                ...성균관교과,
                admissionQuota: 10,
                minimumAcademicRequirement: 성균교과최저37,
              },
            ],
          },
        ],
      },
      {
        name: "경제대학",
        department: [
          {
            name: "글로벌경제학과",
            admission: [
              { ...성균관학종탐구, admissionQuota: 35 },
              {
                ...성균관교과,
                admissionQuota: 10,
                minimumAcademicRequirement: 성균교과최저36,
              },
              {
                ...성균관논술,
                admissionQuota: 15,
                minimumAcademicRequirement: 성균논술최저35,
              },
            ],
          },
          {
            name: "통계학과",
            admission: [
              {
                ...성균관교과,
                admissionQuota: 12,
                minimumAcademicRequirement: 성균교과최저37,
              },
            ],
          },
        ],
      },
      {
        name: "경영대학",
        department: [
          {
            name: "경영학과",
            admission: [
              {
                ...성균관학종융합,
                admissionQuota: 53,
              },
              {
                ...성균관교과,
                admissionQuota: 10,
                minimumAcademicRequirement: 성균교과최저37,
              },
              {
                ...성균관논술,
                admissionQuota: 30,
                minimumAcademicRequirement: 성균논술최저36,
              },
              {
                ...성균관학종농어촌,
                admissionQuota: 0,
                cautions: [
                  "인문과학계열, 사회과학계열, 경영학과, 자연과학계열, 전자전기공학부, 공학계열, 소프트웨어학과, 반도체융합공학과, 에너지학과, 양자정보공학과에서 총 109명 모집",
                  "경영학과 최대 선발가능인원: 18명",
                ],
              },
              {
                ...성균관학종특성화고,
                admissionQuota: 0,
                cautions: [
                  "인문과학계열, 사회과학계열, 경영학과, 자연과학계열, 전자전기공학부, 공학계열, 소프트웨어학과에서 총 25명 모집",
                  "경영학과 최대 선발가능인원: 18명",
                ],
              },
              {
                ...성균관학종이웃사랑,
                admissionQuota: 0,
                cautions: [
                  "인문과학계열, 사회과학계열, 경영학과, 자연과학계열, 전자전기공학부, 공학계열, 소프트웨어학과, 반도체융합공학과, 에너지학과, 양자정보공학과에서 총 55명 모집",
                  "경영학과 최대 선발가능인원: 36명",
                ],
              },
              {
                ...성균관학종장애인,
                admissionQuota: 0,
                cautions: [
                  "인문과학계열, 사회과학계열, 경영학과, 자연과학계열, 전자전기공학부, 공학계열, 소프트웨어학과에서 총 6명 모집",
                ],
              },
            ],
          },
          {
            name: "글로벌경영학과",
            admission: [
              { ...성균관학종탐구, admissionQuota: 33 },
              {
                ...성균관교과,
                admissionQuota: 10,
                minimumAcademicRequirement: 성균교과최저36,
              },
              {
                ...성균관논술,
                admissionQuota: 15,
                minimumAcademicRequirement: 성균논술최저35,
              },
            ],
          },
        ],
      },
      {
        name: "사범대학",
        department: [
          {
            name: "교육학과",
            admission: [
              { ...성균관학종탐구, admissionQuota: 15 },
              {
                ...성균관교과,
                admissionQuota: 5,
                minimumAcademicRequirement: 성균교과최저37,
              },
              {
                ...성균관학종장애인,
                admissionQuota: 1,
              },
            ],
          },
          {
            name: "한문교육과",
            admission: [
              { ...성균관학종탐구, admissionQuota: 15 },
              {
                ...성균관교과,
                admissionQuota: 5,
                minimumAcademicRequirement: 성균교과최저37,
              },
              {
                ...성균관학종장애인,
                admissionQuota: 1,
              },
            ],
          },
          {
            name: "수학교육과",
            admission: [
              { ...성균관학종탐구, admissionQuota: 15 },
              {
                ...성균관교과,
                admissionQuota: 5,
                minimumAcademicRequirement: 성균교과최저37,
              },
              {
                ...성균관학종장애인,
                admissionQuota: 1,
              },
            ],
          },
          {
            name: "컴퓨터교육과",
            admission: [
              { ...성균관학종탐구, admissionQuota: 15 },
              {
                ...성균관교과,
                admissionQuota: 5,
                minimumAcademicRequirement: 성균교과최저37,
              },
              {
                ...성균관학종장애인,
                admissionQuota: 1,
              },
            ],
          },
        ],
      },
      {
        name: "예술대학",
        department: [
          {
            name: "영상학과",
            admission: [
              { ...성균관학종탐구, admissionQuota: 12 },
              {
                ...성균관교과,
                admissionQuota: 5,
                minimumAcademicRequirement: 성균교과최저37,
              },
              { ...성균관특기자, admissionQuota: 5 },
            ],
          },
          {
            name: "의상학과",
            admission: [
              { ...성균관학종탐구, admissionQuota: 16 },
              {
                ...성균관교과,
                admissionQuota: 5,
                minimumAcademicRequirement: 성균교과최저37,
              },
            ],
          },
          {
            name: "연기예술학과-연기",
            admission: [{ ...성균관실기, admissionQuota: 20 }],
          },
          {
            name: "연기예술학과-연출",
            admission: [{ ...성균관실기, admissionQuota: 9 }],
          },
          {
            name: "무용학과-한국무용",
            admission: [{ ...성균관실기, admissionQuota: 13 }],
          },
          {
            name: "무용학과-발레",
            admission: [{ ...성균관실기, admissionQuota: 12 }],
          },
          {
            name: "무용학과-컨템포러리댄스",
            admission: [{ ...성균관실기, admissionQuota: 12 }],
          },
        ],
      },
      {
        name: "사회과학대학",
        department: [
          {
            name: "사회과학계열",
            admission: [
              {
                ...성균관학종융합,
                admissionQuota: 40,
                cautions: [
                  "행정학과, 정치외교학과, 미디어커뮤니케이션학과, 사회학과, 사회복지학과, 심리학과, 소비자학과, 아동·청소년학과, 경제학과, 통계학과",
                ],
              },
              {
                ...성균관학종기균,
                admissionQuota: 5,
                cautions: [
                  ...(성균관학종기균.cautions ? 성균관학종기균.cautions : []),

                  "행정학과, 정치외교학과, 미디어커뮤니케이션학과, 사회학과, 사회복지학과, 심리학과, 소비자학과, 아동·청소년학과, 경제학과, 통계학과",
                ],
              },
              {
                ...성균관교과,
                admissionQuota: 17,
                cautions: [
                  "행정학과, 정치외교학과, 미디어커뮤니케이션학과, 사회학과, 사회복지학과, 심리학과, 소비자학과, 아동·청소년학과, 경제학과, 통계학과",
                ],
                minimumAcademicRequirement: 성균교과최저37,
              },
              {
                ...성균관논술,
                admissionQuota: 45,
                cautions: [
                  "행정학과, 정치외교학과, 미디어커뮤니케이션학과, 사회학과, 사회복지학과, 심리학과, 소비자학과, 아동·청소년학과, 경제학과, 통계학과",
                ],
                minimumAcademicRequirement: 성균논술최저36,
              },
              {
                ...성균관학종농어촌,
                admissionQuota: 0,
                cautions: [
                  "행정학과, 정치외교학과, 미디어커뮤니케이션학과, 사회학과, 사회복지학과, 심리학과, 소비자학과, 아동·청소년학과, 경제학과, 통계학과",
                  "인문과학계열, 사회과학계열, 경영학과, 자연과학계열, 전자전기공학부, 공학계열, 소프트웨어학과, 반도체융합공학과, 에너지학과, 양자정보공학과에서 총 109명 모집",
                  "사회과학계열 최대 선발가능인원: 40명",
                ],
              },
              {
                ...성균관학종특성화고,
                admissionQuota: 0,
                cautions: [
                  "행정학과, 정치외교학과, 미디어커뮤니케이션학과, 사회학과, 사회복지학과, 심리학과, 소비자학과, 아동·청소년학과, 경제학과, 통계학과",
                  "인문과학계열, 사회과학계열, 경영학과, 자연과학계열, 전자전기공학부, 공학계열, 소프트웨어학과에서 총 25명 모집",
                  "사회과학계열 최대 선발가능인원: 25명",
                ],
              },
              {
                ...성균관학종이웃사랑,
                admissionQuota: 0,
                cautions: [
                  "행정학과, 정치외교학과, 미디어커뮤니케이션학과, 사회학과, 사회복지학과, 심리학과, 소비자학과, 아동·청소년학과, 경제학과, 통계학과",
                  "인문과학계열, 사회과학계열, 경영학과, 자연과학계열, 전자전기공학부, 공학계열, 소프트웨어학과, 반도체융합공학과, 에너지학과, 양자정보공학과에서 총 55명 모집",
                  "사회과학계열 최대 선발가능인원: 55명",
                ],
              },
              {
                ...성균관학종장애인,
                admissionQuota: 0,
                cautions: [
                  "행정학과, 정치외교학과, 미디어커뮤니케이션학과, 사회학과, 사회복지학과, 심리학과, 소비자학과, 아동·청소년학과, 경제학과, 통계학과",
                  "인문과학계열, 사회과학계열, 경영학과, 자연과학계열, 전자전기공학부, 공학계열, 소프트웨어학과에서 총 6명 모집",
                ],
              },
            ],
          },
          {
            name: "글로벌리더학부",
            admission: [
              { ...성균관학종탐구, admissionQuota: 20 },
              {
                ...성균관교과,
                admissionQuota: 10,
                minimumAcademicRequirement: 성균교과최저36,
              },
              {
                ...성균관논술,
                admissionQuota: 15,
                minimumAcademicRequirement: 성균논술최저35,
              },
            ],
          },
          {
            name: "사회학과",
            admission: [
              {
                ...성균관교과,
                admissionQuota: 20,
                minimumAcademicRequirement: 성균교과최저37,
              },
            ],
          },
          {
            name: "사회복지학과",
            admission: [
              {
                ...성균관교과,
                admissionQuota: 20,
                minimumAcademicRequirement: 성균교과최저37,
              },
            ],
          },
          {
            name: "심리학과",
            admission: [
              {
                ...성균관교과,
                admissionQuota: 12,
                minimumAcademicRequirement: 성균교과최저37,
              },
            ],
          },
          {
            name: "아동청소년학과",
            admission: [
              {
                ...성균관교과,
                admissionQuota: 20,
                minimumAcademicRequirement: 성균교과최저37,
              },
            ],
          },
        ],
      },
      {
        name: "자연과학대학",
        department: [
          {
            name: "자연과학계열",
            admission: [
              {
                ...성균관학종융합,
                admissionQuota: 45,
                cautions: [
                  "생명과학과, 수학과, 물리학과, 화학과, 식품생명공학과, 바이오메카트로닉스학과, 융합생명공학과",
                ],
              },
              {
                ...성균관학종기균,
                admissionQuota: 3,
                cautions: [
                  ...(성균관학종기균.cautions ? 성균관학종기균.cautions : []),
                  "생명과학과, 수학과, 물리학과, 화학과, 식품생명공학과, 바이오메카트로닉스학과, 융합생명공학과",
                ],
              },
              {
                ...성균관교과,
                admissionQuota: 16,
                cautions: [
                  "생명과학과, 수학과, 물리학과, 화학과, 식품생명공학과, 바이오메카트로닉스학과, 융합생명공학과",
                ],
                minimumAcademicRequirement: 성균교과최저37,
              },
              {
                ...성균관논술,
                admissionQuota: 30,
                cautions: [
                  "생명과학과, 수학과, 물리학과, 화학과, 식품생명공학과, 바이오메카트로닉스학과, 융합생명공학과",
                ],
                minimumAcademicRequirement: 성균논술최저36,
              },
              {
                ...성균관학종농어촌,
                admissionQuota: 0,
                cautions: [
                  "생명과학과, 수학과, 물리학과, 화학과, 식품생명공학과, 바이오메카트로닉스학과, 융합생명공학과",
                  "인문과학계열, 사회과학계열, 경영학과, 자연과학계열, 전자전기공학부, 공학계열, 소프트웨어학과, 반도체융합공학과, 에너지학과, 양자정보공학과에서 총 109명 모집",
                  "자연과학계열 최대 선발가능인원: 29명",
                ],
              },
              {
                ...성균관학종특성화고,
                admissionQuota: 0,
                cautions: [
                  "생명과학과, 수학과, 물리학과, 화학과, 식품생명공학과, 바이오메카트로닉스학과, 융합생명공학과",
                  "인문과학계열, 사회과학계열, 경영학과, 자연과학계열, 전자전기공학부, 공학계열, 소프트웨어학과에서 총 25명 모집",
                  "자연과학계열 최대 선발가능인원: 25명",
                ],
              },
              {
                ...성균관학종이웃사랑,
                admissionQuota: 0,
                cautions: [
                  "생명과학과, 수학과, 물리학과, 화학과, 식품생명공학과, 바이오메카트로닉스학과, 융합생명공학과",
                  "인문과학계열, 사회과학계열, 경영학과, 자연과학계열, 전자전기공학부, 공학계열, 소프트웨어학과, 반도체융합공학과, 에너지학과, 양자정보공학과에서 총 55명 모집",
                  "자연과학계열 최대 선발가능인원: 55명",
                ],
              },
              {
                ...성균관학종장애인,
                admissionQuota: 0,
                cautions: [
                  "생명과학과, 수학과, 물리학과, 화학과, 식품생명공학과, 바이오메카트로닉스학과, 융합생명공학과",
                  "인문과학계열, 사회과학계열, 경영학과, 자연과학계열, 전자전기공학부, 공학계열, 소프트웨어학과에서 총 6명 모집",
                ],
              },
            ],
          },
          {
            name: "생명과학과",
            admission: [
              { ...성균관학종과학인재, admissionQuota: 5 },
              {
                ...성균관교과,
                admissionQuota: 7,
                minimumAcademicRequirement: 성균교과최저37,
              },
            ],
          },
          {
            name: "수학과",
            admission: [
              { ...성균관학종과학인재, admissionQuota: 5 },
              {
                ...성균관교과,
                admissionQuota: 7,
                minimumAcademicRequirement: 성균교과최저37,
              },
            ],
          },
          {
            name: "물리학과",
            admission: [
              { ...성균관학종과학인재, admissionQuota: 5 },
              {
                ...성균관교과,
                admissionQuota: 7,
                minimumAcademicRequirement: 성균교과최저37,
              },
            ],
          },
          {
            name: "화학과",
            admission: [
              { ...성균관학종과학인재, admissionQuota: 5 },
              {
                ...성균관교과,
                admissionQuota: 7,
                minimumAcademicRequirement: 성균교과최저37,
              },
            ],
          },
        ],
      },
      {
        name: "정보통신대학",
        department: [
          {
            name: "전자전기공학부",
            admission: [
              {
                ...성균관학종융합,
                admissionQuota: 40,
              },
              { ...성균관학종과학인재, admissionQuota: 10 },
              {
                ...성균관교과,
                admissionQuota: 10,
                minimumAcademicRequirement: 성균교과최저37,
              },
              {
                ...성균관논술,
                admissionQuota: 30,
                minimumAcademicRequirement: 성균논술최저36,
              },
              {
                ...성균관학종농어촌,
                admissionQuota: 0,
                cautions: [
                  "인문과학계열, 사회과학계열, 경영학과, 자연과학계열, 전자전기공학부, 공학계열, 소프트웨어학과, 반도체융합공학과, 에너지학과, 양자정보공학과에서 총 109명 모집",
                  "전자전기공학부 최대 선발가능인원: 29명",
                ],
              },
              {
                ...성균관학종특성화고,
                admissionQuota: 0,
                cautions: [
                  "인문과학계열, 사회과학계열, 경영학과, 자연과학계열, 전자전기공학부, 공학계열, 소프트웨어학과에서 총 25명 모집",
                  "전자전기공학부 최대 선발가능인원: 17명",
                ],
              },
              {
                ...성균관학종이웃사랑,
                admissionQuota: 0,
                cautions: [
                  "인문과학계열, 사회과학계열, 경영학과, 자연과학계열, 전자전기공학부, 공학계열, 소프트웨어학과, 반도체융합공학과, 에너지학과, 양자정보공학과에서 총 55명 모집",
                  "전자전기공학부 최대 선발가능인원: 34명",
                ],
              },
              {
                ...성균관학종장애인,
                admissionQuota: 0,
                cautions: [
                  "인문과학계열, 사회과학계열, 경영학과, 자연과학계열, 전자전기공학부, 공학계열, 소프트웨어학과에서 총 6명 모집",
                ],
              },
            ],
          },
          {
            name: "반도체시스템공학과",
            admission: [
              { ...성균관학종탐구, admissionQuota: 10 },
              { ...성균관학종과학인재, admissionQuota: 30 },
              {
                ...성균관논술,
                admissionQuota: 10,
                minimumAcademicRequirement: 성균논술최저35,
              },
            ],
          },
          {
            name: "반도체융합공학과",
            admission: [
              { ...성균관학종탐구, admissionQuota: 15 },
              { ...성균관학종과학인재, admissionQuota: 10 },
              {
                ...성균관교과,
                admissionQuota: 6,
                minimumAcademicRequirement: 성균교과최저36,
              },
              {
                ...성균관논술,
                admissionQuota: 5,
                minimumAcademicRequirement: 성균논술최저35,
              },
              {
                ...성균관학종농어촌,
                admissionQuota: 0,
                cautions: [
                  "인문과학계열, 사회과학계열, 경영학과, 자연과학계열, 전자전기공학부, 공학계열, 소프트웨어학과, 반도체융합공학과, 에너지학과, 양자정보공학과에서 총 109명 모집",
                  "반도체융합공학과 최대 선발가능인원: 6명",
                ],
              },
              {
                ...성균관학종이웃사랑,
                admissionQuota: 0,
                cautions: [
                  "인문과학계열, 사회과학계열, 경영학과, 자연과학계열, 전자전기공학부, 공학계열, 소프트웨어학과, 반도체융합공학과, 에너지학과, 양자정보공학과에서 총 55명 모집",
                  "반도체융합공학과 최대 선발가능인원: 6명",
                ],
              },
            ],
          },
          {
            name: "양자정보공학과",
            admission: [
              { ...성균관학종탐구, admissionQuota: 13 },
              { ...성균관학종과학인재, admissionQuota: 5 },
              {
                ...성균관학종농어촌,
                admissionQuota: 0,
                cautions: [
                  "인문과학계열, 사회과학계열, 경영학과, 자연과학계열, 전자전기공학부, 공학계열, 소프트웨어학과, 반도체융합공학과, 에너지학과, 양자정보공학과에서 총 109명 모집",
                  "양자정보공학과 최대 선발가능인원: 2명",
                ],
              },
              {
                ...성균관학종이웃사랑,
                admissionQuota: 0,
                cautions: [
                  "인문과학계열, 사회과학계열, 경영학과, 자연과학계열, 전자전기공학부, 공학계열, 소프트웨어학과, 반도체융합공학과, 에너지학과, 양자정보공학과에서 총 55명 모집",
                  "양자정보공학과 최대 선발가능인원: 2명",
                ],
              },
            ],
          },
        ],
      },
      {
        name: "약학대학",
        department: [
          {
            name: "약학과",
            admission: [
              { ...성균관학종탐구, admissionQuota: 30 },
              {
                ...성균관논술,
                admissionQuota: 5,
                minimumAcademicRequirement: 성균논술최저35,
              },
              {
                ...성균관학종이웃사랑,
                admissionQuota: 5,
              },
            ],
          },
        ],
      },
      // {
      //   name: "생명공학대학",
      //   department: [],
      // },
      {
        name: "성균융합원",
        department: [
          {
            name: "글로벌바이오메디컬공학과",
            admission: [
              { ...성균관학종탐구, admissionQuota: 11 },
              { ...성균관학종과학인재, admissionQuota: 20 },
              {
                ...성균관논술,
                admissionQuota: 10,
                minimumAcademicRequirement: 성균논술최저35,
              },
            ],
          },
          {
            name: "에너지학과",
            admission: [
              { ...성균관학종탐구, admissionQuota: 15 },
              { ...성균관학종과학인재, admissionQuota: 10 },
              {
                ...성균관교과,
                admissionQuota: 6,
                minimumAcademicRequirement: 성균교과최저36,
              },
              {
                ...성균관논술,
                admissionQuota: 5,
                minimumAcademicRequirement: 성균논술최저35,
              },
              {
                ...성균관학종농어촌,
                admissionQuota: 0,
                cautions: [
                  "인문과학계열, 사회과학계열, 경영학과, 자연과학계열, 전자전기공학부, 공학계열, 소프트웨어학과, 반도체융합공학과, 에너지학과, 양자정보공학과에서 총 109명 모집",
                  "에너지학과 최대 선발가능인원: 4명",
                ],
              },
              {
                ...성균관학종이웃사랑,
                admissionQuota: 0,
                cautions: [
                  "인문과학계열, 사회과학계열, 경영학과, 자연과학계열, 전자전기공학부, 공학계열, 소프트웨어학과, 반도체융합공학과, 에너지학과, 양자정보공학과에서 총 55명 모집",
                  "에너지학과 최대 선발가능인원: 4명",
                ],
              },
            ],
          },
          {
            name: "응용AI융합학부-AI융합운영",
            admission: [{ ...성균관학종특성화재직, admissionQuota: 95 }],
          },
          {
            name: "응용AI융합학부-산업인공지능",
            admission: [{ ...성균관학종특성화재직, admissionQuota: 95 }],
          },
        ],
      },
      {
        name: "소프트웨어융합대학",
        department: [
          {
            name: "소프트웨어학과",
            admission: [
              { ...성균관학종탐구, admissionQuota: 28 },
              { ...성균관학종과학인재, admissionQuota: 10 },
              {
                ...성균관교과,
                admissionQuota: 10,
                minimumAcademicRequirement: 성균교과최저36,
              },
              {
                ...성균관논술,
                admissionQuota: 10,
                minimumAcademicRequirement: 성균논술최저35,
              },
              {
                ...성균관학종농어촌,
                admissionQuota: 0,
                cautions: [
                  "인문과학계열, 사회과학계열, 경영학과, 자연과학계열, 전자전기공학부, 공학계열, 소프트웨어학과, 반도체융합공학과, 에너지학과, 양자정보공학과에서 총 109명 모집",
                  "소프트웨어학과 최대 선발가능인원: 8명",
                ],
              },
              {
                ...성균관학종특성화고,
                admissionQuota: 0,
                cautions: [
                  "인문과학계열, 사회과학계열, 경영학과, 자연과학계열, 전자전기공학부, 공학계열, 소프트웨어학과에서 총 25명 모집",
                  "소프트웨어학과 최대 선발가능인원: 8명",
                ],
              },
              {
                ...성균관학종이웃사랑,
                admissionQuota: 0,
                cautions: [
                  "인문과학계열, 사회과학계열, 경영학과, 자연과학계열, 전자전기공학부, 공학계열, 소프트웨어학과, 반도체융합공학과, 에너지학과, 양자정보공학과에서 총 55명 모집",
                  "소프트웨어학과 최대 선발가능인원: 17명",
                ],
              },
              {
                ...성균관학종장애인,
                admissionQuota: 0,
                cautions: [
                  "인문과학계열, 사회과학계열, 경영학과, 자연과학계열, 전자전기공학부, 공학계열, 소프트웨어학과에서 총 6명 모집",
                ],
              },
            ],
          },
          {
            name: "지능형소프트웨어학과",
            admission: [
              { ...성균관학종탐구, admissionQuota: 10 },
              { ...성균관학종과학인재, admissionQuota: 15 },
              {
                ...성균관논술,
                admissionQuota: 5,
                minimumAcademicRequirement: 성균논술최저35,
              },
            ],
          },
          {
            name: "글로벌융합학부",
            admission: [
              {
                ...성균관학종융합,
                admissionQuota: 14,
              },
              {
                ...성균관교과,
                admissionQuota: 10,
                minimumAcademicRequirement: 성균교과최저37,
              },
              {
                ...성균관논술,
                admissionQuota: 8,
                minimumAcademicRequirement: 성균논술최저36,
              },
            ],
          },
        ],
      },
      {
        name: "공과대학",
        department: [
          {
            name: "공학계열",
            admission: [
              {
                ...성균관학종융합,
                admissionQuota: 100,
                cautions: [
                  "화학공학/고분자공학부, 신소재공학부, 기계공학부, 건설환경공학부, 시스템경영공학과, 나노공학과",
                ],
              },
              {
                ...성균관학종과학인재,
                admissionQuota: 20,
                cautions: [
                  "화학공학/고분자공학부, 신소재공학부, 기계공학부, 건설환경공학부, 시스템경영공학과, 나노공학과",
                ],
              },
              {
                ...성균관학종기균,
                admissionQuota: 4,
                cautions: [
                  ...(성균관학종기균.cautions ? 성균관학종기균.cautions : []),
                  "화학공학/고분자공학부, 신소재공학부, 기계공학부, 건설환경공학부, 시스템경영공학과, 나노공학과",
                ],
              },
              {
                ...성균관교과,
                admissionQuota: 38,
                cautions: [
                  "화학공학/고분자공학부, 신소재공학부, 기계공학부, 건설환경공학부, 시스템경영공학과, 나노공학과",
                ],
                minimumAcademicRequirement: 성균교과최저37,
              },
              {
                ...성균관논술,
                admissionQuota: 53,
                cautions: [
                  "화학공학/고분자공학부, 신소재공학부, 기계공학부, 건설환경공학부, 시스템경영공학과, 나노공학과",
                ],
                minimumAcademicRequirement: 성균논술최저36,
              },
              {
                ...성균관학종농어촌,
                admissionQuota: 0,
                cautions: [
                  "화학공학/고분자공학부, 신소재공학부, 기계공학부, 건설환경공학부, 시스템경영공학과, 나노공학과",
                  "인문과학계열, 사회과학계열, 경영학과, 자연과학계열, 전자전기공학부, 공학계열, 소프트웨어학과, 반도체융합공학과, 에너지학과, 양자정보공학과에서 총 109명 모집",
                  "공학계열 최대 선발가능인원: 57명",
                ],
              },
              {
                ...성균관학종특성화고,
                admissionQuota: 0,
                cautions: [
                  "화학공학/고분자공학부, 신소재공학부, 기계공학부, 건설환경공학부, 시스템경영공학과, 나노공학과",
                  "인문과학계열, 사회과학계열, 경영학과, 자연과학계열, 전자전기공학부, 공학계열, 소프트웨어학과에서 총 25명 모집",
                  "공학계열 최대 선발가능인원: 25명",
                ],
              },
              {
                ...성균관학종이웃사랑,
                admissionQuota: 0,
                cautions: [
                  "화학공학/고분자공학부, 신소재공학부, 기계공학부, 건설환경공학부, 시스템경영공학과, 나노공학과",
                  "인문과학계열, 사회과학계열, 경영학과, 자연과학계열, 전자전기공학부, 공학계열, 소프트웨어학과, 반도체융합공학과, 에너지학과, 양자정보공학과에서 총 55명 모집",
                  "공학계열 최대 선발가능인원: 55명",
                ],
              },
              {
                ...성균관학종장애인,
                admissionQuota: 0,
                cautions: [
                  "화학공학/고분자공학부, 신소재공학부, 기계공학부, 건설환경공학부, 시스템경영공학과, 나노공학과",
                  "인문과학계열, 사회과학계열, 경영학과, 자연과학계열, 전자전기공학부, 공학계열, 소프트웨어학과에서 총 6명 모집",
                ],
              },
            ],
          },
          {
            name: "건축학과",
            admission: [
              { ...성균관학종탐구, admissionQuota: 24 },
              {
                ...성균관교과,
                admissionQuota: 18,
                minimumAcademicRequirement: 성균교과최저37,
              },
            ],
          },
          {
            name: "건설환경공학부",
            admission: [
              { ...성균관학종탐구, admissionQuota: 35 },
              {
                ...성균관논술,
                admissionQuota: 25,
                minimumAcademicRequirement: 성균논술최저36,
              },
            ],
          },
        ],
      },
      {
        name: "스포츠과학대학",
        department: [
          {
            name: "스포트과학과",
            admission: [
              { ...성균관학종탐구, admissionQuota: 17 },
              { ...성균관특기자, admissionQuota: 22 },
              { ...성균관실기, admissionQuota: 13 },
            ],
          },
        ],
      },
      {
        name: "의과대학",
        department: [
          {
            name: "의예과",
            admission: [
              { ...성균관학종탐구, admissionQuota: 50 },
              {
                ...성균관논술,
                admissionQuota: 10,
                minimumAcademicRequirement: 성균논술의예,
              },
            ],
          },
        ],
      },
      {
        name: "학부대학",
        department: [
          {
            name: "자유전공계열",
            admission: [
              { ...성균관학종탐구, admissionQuota: 114 },
              { ...성균관학종기균, admissionQuota: 6 },
              { ...성균관교과, admissionQuota: 20 },
              {
                ...성균관논술,
                admissionQuota: 30,
                minimumAcademicRequirement: 성균논술최저35,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "한양대학교",
    admissionType: "in-group",
    educationType: "university",
    address: "서울특별시 성동구 왕십리로 222",
    admissionGuide:
      "https://go.hanyang.ac.kr/file/download.do?menu=mojib&file_no=341&type=pdf",
    universityType: "main",
    symbolImage: "/hyu-symbol.svg",
    id: 6,
    college: [
      {
        name: "공과대학",
        department: [
          {
            name: "건축학부(5년제)",
            admission: [
              { ...한양교과추천, admissionQuota: 5, admissionTrack: "자연" },
              { ...한양학종서류, admissionQuota: 10, admissionTrack: "자연" },
              { ...한양학종고른, admissionQuota: 2, admissionTrack: "자연" },
              { ...한양논술, admissionQuota: 4, admissionTrack: "자연" },
            ],
          },
          {
            name: "건축공학부",
            admission: [
              { ...한양교과추천, admissionQuota: 5, admissionTrack: "자연" },
              { ...한양학종서류, admissionQuota: 9, admissionTrack: "자연" },
              { ...한양학종고른, admissionQuota: 3, admissionTrack: "자연" },
              { ...한양논술, admissionQuota: 4, admissionTrack: "자연" },
            ],
          },
          {
            name: "건설환경공학과",
            admission: [
              { ...한양교과추천, admissionQuota: 6, admissionTrack: "자연" },
              { ...한양학종서류, admissionQuota: 11, admissionTrack: "자연" },
              { ...한양학종고른, admissionQuota: 4, admissionTrack: "자연" },
              { ...한양논술, admissionQuota: 4, admissionTrack: "자연" },
            ],
          },
          {
            name: "도시공학과",
            admission: [
              { ...한양교과추천, admissionQuota: 5, admissionTrack: "자연" },
              { ...한양학종서류, admissionQuota: 8, admissionTrack: "자연" },
              { ...한양학종고른, admissionQuota: 3, admissionTrack: "자연" },
              { ...한양논술, admissionQuota: 4, admissionTrack: "자연" },
            ],
          },
          {
            name: "자원환경공학과",
            admission: [
              { ...한양교과추천, admissionQuota: 3, admissionTrack: "자연" },
              { ...한양학종서류, admissionQuota: 10, admissionTrack: "자연" },
              { ...한양학종고른, admissionQuota: 2, admissionTrack: "자연" },
            ],
          },
          {
            name: "융합전자공학부",
            admission: [
              { ...한양교과추천, admissionQuota: 13, admissionTrack: "자연" },
              { ...한양학종추천, admissionQuota: 8, admissionTrack: "자연" },
              { ...한양학종서류, admissionQuota: 21, admissionTrack: "자연" },
              { ...한양학종고른, admissionQuota: 5, admissionTrack: "자연" },
              { ...한양논술, admissionQuota: 9, admissionTrack: "자연" },
            ],
          },
          {
            name: "컴퓨터소프트웨어학부",
            admission: [
              { ...한양교과추천, admissionQuota: 13, admissionTrack: "자연" },
              { ...한양학종추천, admissionQuota: 11, admissionTrack: "자연" },
              { ...한양학종서류, admissionQuota: 25, admissionTrack: "자연" },
              { ...한양학종고른, admissionQuota: 6, admissionTrack: "자연" },
              { ...한양논술, admissionQuota: 10, admissionTrack: "자연" },
            ],
          },
          {
            name: "정보시스템학과(상경)",
            admission: [
              { ...한양교과추천, admissionQuota: 5, admissionTrack: "상경" },
              { ...한양학종서류, admissionQuota: 6, admissionTrack: "상경" },
              { ...한양학종고른, admissionQuota: 2, admissionTrack: "상경" },
              { ...한양논술, admissionQuota: 4, admissionTrack: "자연" },
            ],
          },
          {
            name: "전기생체공학부(전기공학)",
            admission: [
              { ...한양교과추천, admissionQuota: 5, admissionTrack: "자연" },
              { ...한양학종추천, admissionQuota: 5, admissionTrack: "자연" },
              { ...한양학종서류, admissionQuota: 13, admissionTrack: "자연" },
              { ...한양학종고른, admissionQuota: 4, admissionTrack: "자연" },
              { ...한양논술, admissionQuota: 5, admissionTrack: "자연" },
            ],
          },
          {
            name: "전기생체공학부(바이오메디컬공학)",
            admission: [
              { ...한양학종추천, admissionQuota: 4, admissionTrack: "자연" },
              { ...한양학종서류, admissionQuota: 8, admissionTrack: "자연" },
            ],
          },
          {
            name: "신소재공학부",
            admission: [
              { ...한양교과추천, admissionQuota: 8, admissionTrack: "자연" },
              { ...한양학종추천, admissionQuota: 5, admissionTrack: "자연" },
              { ...한양학종서류, admissionQuota: 14, admissionTrack: "자연" },
              { ...한양학종고른, admissionQuota: 4, admissionTrack: "자연" },
              { ...한양논술, admissionQuota: 7, admissionTrack: "자연" },
            ],
          },
          {
            name: "화학공학과",
            admission: [
              { ...한양교과추천, admissionQuota: 5, admissionTrack: "자연" },
              { ...한양학종추천, admissionQuota: 5, admissionTrack: "자연" },
              { ...한양학종서류, admissionQuota: 7, admissionTrack: "자연" },
              { ...한양학종고른, admissionQuota: 4, admissionTrack: "자연" },
              { ...한양논술, admissionQuota: 4, admissionTrack: "자연" },
            ],
          },
          {
            name: "생명공학과",
            admission: [
              { ...한양교과추천, admissionQuota: 3, admissionTrack: "자연" },
              { ...한양학종서류, admissionQuota: 9, admissionTrack: "자연" },
            ],
          },
          {
            name: "유기나노공학과",
            admission: [
              { ...한양교과추천, admissionQuota: 4, admissionTrack: "자연" },
              { ...한양학종서류, admissionQuota: 8, admissionTrack: "자연" },
              { ...한양학종고른, admissionQuota: 2, admissionTrack: "자연" },
            ],
          },
          {
            name: "에너지공학과",
            admission: [
              { ...한양교과추천, admissionQuota: 4, admissionTrack: "자연" },
              { ...한양학종서류, admissionQuota: 10, admissionTrack: "자연" },
              { ...한양학종고른, admissionQuota: 2, admissionTrack: "자연" },
            ],
          },
          {
            name: "기계공학부",
            admission: [
              { ...한양교과추천, admissionQuota: 17, admissionTrack: "자연" },
              { ...한양학종추천, admissionQuota: 11, admissionTrack: "자연" },
              { ...한양학종서류, admissionQuota: 29, admissionTrack: "자연" },
              { ...한양학종고른, admissionQuota: 4, admissionTrack: "자연" },
              { ...한양논술, admissionQuota: 9, admissionTrack: "자연" },
            ],
          },
          {
            name: "원자력공학과",
            admission: [
              { ...한양교과추천, admissionQuota: 5, admissionTrack: "자연" },
              { ...한양학종서류, admissionQuota: 9, admissionTrack: "자연" },
              { ...한양학종고른, admissionQuota: 2, admissionTrack: "자연" },
            ],
          },
          {
            name: "산업공학과",
            admission: [
              { ...한양교과추천, admissionQuota: 5, admissionTrack: "자연" },
              { ...한양학종서류, admissionQuota: 7, admissionTrack: "자연" },
              { ...한양학종고른, admissionQuota: 2, admissionTrack: "자연" },
              { ...한양논술, admissionQuota: 5, admissionTrack: "자연" },
            ],
          },
          {
            name: "미래자동차공학과",
            admission: [
              { ...한양교과추천, admissionQuota: 4, admissionTrack: "자연" },
              { ...한양학종서류, admissionQuota: 8, admissionTrack: "자연" },
              { ...한양학종고른, admissionQuota: 2, admissionTrack: "자연" },
              { ...한양논술, admissionQuota: 5, admissionTrack: "자연" },
            ],
          },
          {
            name: "데이터사이언스학부",
            admission: [
              { ...한양교과추천, admissionQuota: 5, admissionTrack: "자연" },
              { ...한양학종추천, admissionQuota: 5, admissionTrack: "자연" },
              { ...한양학종서류, admissionQuota: 8, admissionTrack: "자연" },
            ],
          },
          {
            name: "반도체공학과",
            admission: [
              { ...한양교과추천, admissionQuota: 6, admissionTrack: "자연" },
              { ...한양학종서류, admissionQuota: 22, admissionTrack: "자연" },
            ],
          },
        ],
      },
      {
        name: "의과대학",
        department: [
          {
            name: "의예과",
            admission: [
              {
                ...한양학종추천,
                admissionQuota: 25,
                admissionTrack: "자연",
                minimumAcademicRequirement: [
                  "국어, 수학, 여어, 사탐 또는 과탐(1과목) 중 3개 영역 등급합 4이내",
                  "국어, 수학, 영어, 사탐 또는 과탐(2과목) 필수 응시",
                ],
              },
              { ...한양학종서류, admissionQuota: 30, admissionTrack: "자연" },
              { ...한양학종고른, admissionQuota: 3, admissionTrack: "자연" },
            ],
          },
        ],
      },
      {
        name: "간호대학",
        department: [
          {
            name: "간호학과",
            admission: [
              { ...한양교과추천, admissionQuota: 4, admissionTrack: "자연" },
              { ...한양학종서류, admissionQuota: 13, admissionTrack: "자연" },
              { ...한양학종고른, admissionQuota: 3, admissionTrack: "자연" },
              { ...한양논술, admissionQuota: 5, admissionTrack: "자연" },
            ],
          },
        ],
      },
      {
        name: "인문대학",
        department: [
          {
            name: "국어국문학과",
            admission: [
              { ...한양교과추천, admissionQuota: 4, admissionTrack: "인문" },
              { ...한양학종서류, admissionQuota: 7, admissionTrack: "인문" },
              { ...한양학종고른, admissionQuota: 2, admissionTrack: "인문" },
              { ...한양논술, admissionQuota: 4, admissionTrack: "인문" },
            ],
          },
          {
            name: "중어중문학과",
            admission: [
              { ...한양교과추천, admissionQuota: 6, admissionTrack: "인문" },
              { ...한양학종서류, admissionQuota: 13, admissionTrack: "인문" },
              { ...한양학종고른, admissionQuota: 2, admissionTrack: "인문" },
            ],
          },
          {
            name: "영어영문학과",
            admission: [
              { ...한양교과추천, admissionQuota: 7, admissionTrack: "인문" },
              { ...한양학종추천, admissionQuota: 5, admissionTrack: "인문" },
              { ...한양학종서류, admissionQuota: 11, admissionTrack: "인문" },
              { ...한양학종고른, admissionQuota: 2, admissionTrack: "인문" },
            ],
          },
          {
            name: "독어독문학과",
            admission: [
              { ...한양교과추천, admissionQuota: 4, admissionTrack: "인문" },
              { ...한양학종서류, admissionQuota: 13, admissionTrack: "인문" },
            ],
          },
          {
            name: "사학과",
            admission: [
              { ...한양교과추천, admissionQuota: 3, admissionTrack: "인문" },
              { ...한양학종서류, admissionQuota: 6, admissionTrack: "인문" },
              { ...한양논술, admissionQuota: 4, admissionTrack: "인문" },
            ],
          },
          {
            name: "철학과",
            admission: [
              { ...한양교과추천, admissionQuota: 3, admissionTrack: "인문" },
              { ...한양학종서류, admissionQuota: 4, admissionTrack: "인문" },
              { ...한양논술, admissionQuota: 3, admissionTrack: "인문" },
            ],
          },
        ],
      },
      {
        name: "사회과학대학",
        department: [
          {
            name: "정치외교학과",
            admission: [
              { ...한양교과추천, admissionQuota: 4, admissionTrack: "인문" },
              { ...한양학종서류, admissionQuota: 8, admissionTrack: "인문" },
              { ...한양논술, admissionQuota: 4, admissionTrack: "인문" },
            ],
          },
          {
            name: "사회학과",
            admission: [
              { ...한양교과추천, admissionQuota: 4, admissionTrack: "인문" },
              { ...한양학종서류, admissionQuota: 8, admissionTrack: "인문" },
              { ...한양논술, admissionQuota: 4, admissionTrack: "인문" },
            ],
          },
          {
            name: "미디어커뮤니케이션학과",
            admission: [
              { ...한양교과추천, admissionQuota: 5, admissionTrack: "인문" },
              { ...한양학종추천, admissionQuota: 4, admissionTrack: "인문" },
              { ...한양학종서류, admissionQuota: 9, admissionTrack: "인문" },
              { ...한양학종고른, admissionQuota: 2, admissionTrack: "인문" },
              { ...한양논술, admissionQuota: 5, admissionTrack: "인문" },
            ],
          },
          {
            name: "관광학부",
            admission: [
              { ...한양교과추천, admissionQuota: 5, admissionTrack: "인문" },
              { ...한양학종추천, admissionQuota: 4, admissionTrack: "인문" },
              { ...한양학종서류, admissionQuota: 5, admissionTrack: "인문" },
              { ...한양학종고른, admissionQuota: 2, admissionTrack: "인문" },
              { ...한양논술, admissionQuota: 4, admissionTrack: "인문" },
            ],
          },
        ],
      },
      {
        name: "자연과학대학",
        department: [
          {
            name: "수학과",
            admission: [
              { ...한양교과추천, admissionQuota: 5, admissionTrack: "자연" },
              { ...한양학종서류, admissionQuota: 8, admissionTrack: "자연" },
              { ...한양학종고른, admissionQuota: 3, admissionTrack: "자연" },
              { ...한양논술, admissionQuota: 8, admissionTrack: "자연" },
            ],
          },
          {
            name: "물리학과",
            admission: [
              { ...한양교과추천, admissionQuota: 4, admissionTrack: "자연" },
              { ...한양학종서류, admissionQuota: 10, admissionTrack: "자연" },
              { ...한양학종고른, admissionQuota: 2, admissionTrack: "자연" },
              { ...한양논술, admissionQuota: 5, admissionTrack: "자연" },
            ],
          },
          {
            name: "화학과",
            admission: [
              { ...한양교과추천, admissionQuota: 6, admissionTrack: "자연" },
              { ...한양학종서류, admissionQuota: 13, admissionTrack: "자연" },
              { ...한양학종고른, admissionQuota: 3, admissionTrack: "자연" },
              { ...한양논술, admissionQuota: 5, admissionTrack: "자연" },
            ],
          },
          {
            name: "생명과학과",
            admission: [
              { ...한양교과추천, admissionQuota: 6, admissionTrack: "자연" },
              { ...한양학종서류, admissionQuota: 12, admissionTrack: "자연" },
              { ...한양학종고른, admissionQuota: 3, admissionTrack: "자연" },
              { ...한양논술, admissionQuota: 5, admissionTrack: "자연" },
            ],
          },
        ],
      },
      {
        name: "정책과학대학",
        department: [
          {
            name: "정책학과",
            admission: [
              { ...한양교과추천, admissionQuota: 9, admissionTrack: "인문" },
              { ...한양학종추천, admissionQuota: 10, admissionTrack: "인문" },
              { ...한양학종서류, admissionQuota: 24, admissionTrack: "인문" },
              { ...한양학종고른, admissionQuota: 4, admissionTrack: "인문" },
              { ...한양논술, admissionQuota: 4, admissionTrack: "인문" },
            ],
          },
          {
            name: "행정학과",
            admission: [
              { ...한양교과추천, admissionQuota: 5, admissionTrack: "인문" },
              { ...한양학종서류, admissionQuota: 12, admissionTrack: "인문" },
              { ...한양학종고른, admissionQuota: 2, admissionTrack: "인문" },
            ],
          },
        ],
      },
      {
        name: "경제금융대학",
        department: [
          {
            name: "경제금융학부",
            admission: [
              { ...한양교과추천, admissionQuota: 9, admissionTrack: "상경" },
              { ...한양학종추천, admissionQuota: 8, admissionTrack: "상경" },
              { ...한양학종서류, admissionQuota: 19, admissionTrack: "상경" },
              { ...한양학종고른, admissionQuota: 4, admissionTrack: "상경" },
              { ...한양논술, admissionQuota: 9, admissionTrack: "상경" },
            ],
          },
        ],
      },
      {
        name: "경영대학",
        department: [
          {
            name: "경영학부",
            admission: [
              { ...한양교과추천, admissionQuota: 26, admissionTrack: "상경" },
              { ...한양학종추천, admissionQuota: 18, admissionTrack: "상경" },
              { ...한양학종서류, admissionQuota: 60, admissionTrack: "상경" },
              { ...한양학종고른, admissionQuota: 5, admissionTrack: "상경" },
              { ...한양논술, admissionQuota: 12, admissionTrack: "상경" },
            ],
          },
          {
            name: "파이낸스경영학과",
            admission: [
              { ...한양교과추천, admissionQuota: 5, admissionTrack: "상경" },
              { ...한양학종추천, admissionQuota: 5, admissionTrack: "상경" },
              { ...한양학종서류, admissionQuota: 9, admissionTrack: "상경" },
              { ...한양학종고른, admissionQuota: 2, admissionTrack: "상경" },
              { ...한양논술, admissionQuota: 4, admissionTrack: "상경" },
            ],
          },
        ],
      },
      {
        name: "사범대학",
        department: [
          {
            name: "교육학과",
            admission: [
              { ...한양교과추천, admissionQuota: 3, admissionTrack: "인문" },
              { ...한양학종면접, admissionQuota: 6, admissionTrack: "인문" },
              { ...한양학종고른, admissionQuota: 2, admissionTrack: "인문" },
            ],
          },
          {
            name: "교육공학과",
            admission: [
              { ...한양교과추천, admissionQuota: 3, admissionTrack: "인문" },
              { ...한양학종면접, admissionQuota: 6, admissionTrack: "인문" },
              { ...한양학종고른, admissionQuota: 2, admissionTrack: "인문" },
            ],
          },
          {
            name: "국어교육과",
            admission: [
              { ...한양교과추천, admissionQuota: 3, admissionTrack: "인문" },
              { ...한양학종면접, admissionQuota: 8, admissionTrack: "인문" },
              { ...한양학종고른, admissionQuota: 2, admissionTrack: "인문" },
            ],
          },
          {
            name: "영어교육과",
            admission: [
              { ...한양교과추천, admissionQuota: 4, admissionTrack: "인문" },
              { ...한양학종면접, admissionQuota: 6, admissionTrack: "인문" },
              { ...한양학종고른, admissionQuota: 2, admissionTrack: "인문" },
            ],
          },
          {
            name: "수학교육과",
            admission: [
              { ...한양교과추천, admissionQuota: 3, admissionTrack: "자연" },
              { ...한양학종면접, admissionQuota: 3, admissionTrack: "자연" },
              { ...한양학종고른, admissionQuota: 2, admissionTrack: "자연" },
              { ...한양논술, admissionQuota: 3, admissionTrack: "자연" },
            ],
          },
          {
            name: "응용미술교육과",
            admission: [
              { ...한양실기미술, admissionQuota: 22, admissionTrack: "예체능" },
            ],
          },
        ],
      },
      {
        name: "생활과학대학",
        department: [
          {
            name: "의류학과",
            admission: [
              { ...한양교과추천, admissionQuota: 9, admissionTrack: "인문" },
              { ...한양학종서류, admissionQuota: 12, admissionTrack: "인문" },
              { ...한양학종고른, admissionQuota: 2, admissionTrack: "인문" },
            ],
          },
          {
            name: "식품영양학과",
            admission: [
              { ...한양교과추천, admissionQuota: 8, admissionTrack: "자연" },
              { ...한양학종서류, admissionQuota: 11, admissionTrack: "자연" },
              { ...한양학종고른, admissionQuota: 2, admissionTrack: "자연" },
              { ...한양논술, admissionQuota: 4, admissionTrack: "자연" },
            ],
          },
          {
            name: "실내건축디자인학과",
            admission: [
              { ...한양교과추천, admissionQuota: 10, admissionTrack: "인문" },
              { ...한양학종서류, admissionQuota: 13, admissionTrack: "인문" },
              { ...한양학종고른, admissionQuota: 2, admissionTrack: "인문" },
            ],
          },
        ],
      },
      {
        name: "음악대학",
        department: [
          // {
          //   name: "성악과",
          //   admission: [],
          // },
          // {
          //   name: "작곡과",
          //   admission: [],
          // },
          {
            name: "피아노과",
            admission: [
              { ...한양실기음악, admissionQuota: 9, admissionTrack: "예체능" },
            ],
          },
          {
            name: "관현악과",
            admission: [
              {
                ...한양실기음악,
                admissionQuota: 10,
                admissionTrack: "예체능",
                cautions: [
                  ...(한양실기음악.cautions ? 한양실기음악.cautions : []),
                  "플루트1, 오보에1, 클라리넷1, 바순1, 색소폰1, 호른1, 트럼펫1, 테너트롬본1, 튜바1, 타악기1",
                ],
              },
            ],
          },
          {
            name: "국악과",
            admission: [
              {
                ...한양실기음악,
                admissionQuota: 31,
                admissionTrack: "예체능",
                cautions: [
                  ...(한양실기음악.cautions ? 한양실기음악.cautions : []),
                  "가야금4, 거문고3, 대금4, 피리3, 해금4, 아쟁2, 타악2, 성악4(경서도소리1, 판소리3), 작곡3, 이론2",
                ],
              },
            ],
          },
        ],
      },
      {
        name: "예술체육대학",
        department: [
          {
            name: "스포트산업과학부(소포츠매니지먼트)",
            admission: [
              { ...한양학종서류, admissionQuota: 7, admissionTrack: "예체능" },
              {
                ...한양실기체육,
                admissionQuota: 6,
                admissionTrack: "예체능",
                cautions: [
                  ...(한양실기체육.cautions ? 한양실기체육.cautions : []),
                  "농구(남): 가드 3명",
                  "배구(남): 리베로 1명, 라이트 1명, 세터 1명",
                ],
              },
            ],
          },
          {
            name: "스포트산업과학부(스포츠사이언스)",
            admission: [
              { ...한양학종서류, admissionQuota: 6, admissionTrack: "예체능" },
              {
                ...한양실기체육,
                admissionQuota: 6,
                admissionTrack: "예체능",
                cautions: [
                  ...(한양실기체육.cautions ? 한양실기체육.cautions : []),
                  "농구(남): 포워드 2명, 센터 1명",
                  "배구(남): 레프트 1명, 센터 1명, 리베로 1명",
                ],
              },
            ],
          },
          {
            name: "연극영화학과(영화)",
            admission: [
              { ...한양학종서류, admissionQuota: 7, admissionTrack: "인문" },
              { ...한양논술, admissionQuota: 4, admissionTrack: "인문" },
            ],
          },
          // {
          //   name: "연극영화학과(연출및스탭)",
          //   admission: [],
          // },
          {
            name: "연극영화학과(연기)",
            admission: [
              { ...한양실기연기, admissionQuota: 2, admissionTrack: "예체능" },
            ],
          },
          {
            name: "무용학과",
            admission: [
              { ...한양실기무용, admissionQuota: 31, admissionTrack: "예체능" },
            ],
          },
        ],
      },
      {
        name: "국제대학",
        department: [
          {
            name: "국제학부",
            admission: [
              { ...한양학종추천, admissionQuota: 9, admissionTrack: "인문" },
              { ...한양학종서류, admissionQuota: 27, admissionTrack: "인문" },
            ],
          },
        ],
      },
      {
        name: "산업융합대학",
        department: [
          {
            name: "산업융합학부",
            admission: [
              {
                ...한양학종특성화재직,
                admissionQuota: 154,
                admissionTrack: "자연/인문",
              },
            ],
          },
        ],
      },
      {
        name: "한양인터칼리지대학",
        department: [
          {
            name: "한양인터칼리지학부(자연)",
            admission: [
              {
                ...한양교과추천,
                admissionQuota: 40,
                admissionTrack: "인문",
                cautions: [
                  ...(한양교과추천.cautions ? 한양교과추천.cautions : []),
                  "한양인터칼리지학부(자연), 한양인터칼리지학부(인문)에서 총 40명 선발",
                ],
              },
              { ...한양학종추천, admissionQuota: 30, admissionTrack: "자연" },
              { ...한양학종서류, admissionQuota: 45, admissionTrack: "자연" },
              { ...한양학종고른, admissionQuota: 5, admissionTrack: "자연" },
              { ...한양논술, admissionQuota: 35, admissionTrack: "자연" },
            ],
          },
          {
            name: "한양인터칼리지학부(인문)",
            admission: [
              {
                ...한양교과추천,
                admissionQuota: 40,
                admissionTrack: "인문",
                cautions: [
                  ...(한양교과추천.cautions ? 한양교과추천.cautions : []),
                  "한양인터칼리지학부(자연), 한양인터칼리지학부(인문)에서 총 40명 선발",
                ],
              },
              { ...한양학종추천, admissionQuota: 10, admissionTrack: "인문" },
              { ...한양학종서류, admissionQuota: 10, admissionTrack: "인문" },
              { ...한양논술, admissionQuota: 15, admissionTrack: "인문" },
            ],
          },
        ],
      },
    ],
  },
];
