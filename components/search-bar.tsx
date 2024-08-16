"use client";

import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type {
  HighSchoolType,
  EvaluationMethodType,
  GraduationYearType,
  RequirementType,
} from "@/lib/types";
import {
  academicRequirementState,
  admissionYearState,
  departmentNameState,
  evaluationMethodState,
  graduationYearState,
  highSchoolTypeState,
  loadingState,
  requirementState,
  universityNameState,
} from "@/lib/recoil";
import RecoilMultiSelector from "./recoil-multi-selector";
import RecoilSingleSelector from "./recoil-single-selector";
import { motion } from "framer-motion";

interface Inputs {
  university: string;
  department: string;
}
const evaluationMethods: { name: string; value: EvaluationMethodType }[] = [
  { name: "교과", value: "academic" },
  { name: "학종", value: "comprehensive" },
  { name: "논술", value: "essay" },
  { name: "특기자", value: "talent" },
];
const highSchoolTypes: { name: string; value: HighSchoolType }[] = [
  { name: "일반고", value: "general" },
  { name: "특목고", value: "special_purpose" },
  { name: "특성화고", value: "vocational" },
  { name: "자율고", value: "autonomous" },
  { name: "검정고시", value: "GED" },
  { name: "해외고", value: "overseas" },
  {
    name: "국내 학력인정 외국교육기관",
    value: "foreignEducationalInstitutionsInKorea",
  },
  { name: "대안학교", value: "alternative" },
  { name: "영재학교", value: "gifted" },
];
const admissionYears: { name: string; value: number }[] = [
  { name: "2025학년도", value: 2025 },
];
const graduationYears: { name: string; value: GraduationYearType }[] = [
  {
    name: "2025년 2월",
    value: "2025.02",
  },
  { name: "2024년 8월 이전", value: "before 2024.08" },
];
const academicRequirements: { name: string; value: boolean }[] = [
  { name: "최저 있음", value: true },
  { name: "최저 없음", value: false },
];
const requirementList: { name: string; value: RequirementType }[] = [
  { name: "농어촌", value: "ruralFishing" },
  { name: "국가유공자", value: "nationalMeritRecipient" },
  { name: "기초생활수급자", value: "basicLivelihoodSecurityRecipients" },
  { name: "차상위계층", value: "lowerMiddleClass" },
  { name: "한부모가족", value: "singleParentFamily" },
  { name: "서해 5도", value: "fiveWestSeaIslands" },
  { name: "자립지원 대상자", value: "self-supportRecipient" },
  { name: "농생명계열 고교 졸업예정자", value: "lifeScienceHighSchools" },
  { name: "산업체 근무", value: "industrialWork" },
  { name: "북한이탈주민", value: "fromNorthKorea" },
  { name: "특성화고 출신자", value: "fromVocationalHighSchool" },
  { name: "다문화가정", value: "multiculturalFamily" },
  { name: "군인 자녀", value: "militaryChild" },
  { name: "소방경찰 자녀", value: "firefighterPoliceChild" },
  { name: "가톨릭 지도자 추천", value: "catholicLeaderRecommender" },
];

export default function SearchBar() {
  const { register, handleSubmit, setValue } = useForm<Inputs>();

  const evaluationMethod = useRecoilValue(evaluationMethodState);
  const highSchoolType = useRecoilValue(highSchoolTypeState);
  const admissionYear = useRecoilValue(admissionYearState);
  const graduationYear = useRecoilValue(graduationYearState);
  const academicRequirement = useRecoilValue(academicRequirementState);
  const requirement = useRecoilValue(requirementState);
  const [universityName, setUniversityName] =
    useRecoilState(universityNameState);
  const [departmentName, setDepartmentName] =
    useRecoilState(departmentNameState);

  const [requirementOn, setRequirementOn] = useState(false);

  const loading = useRecoilValue(loadingState);

  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setUniversityName(data.university);
    setDepartmentName(data.department);
    router.push(
      `/search?university=${data.university}&department=${data.department}&evaluationMethod=${JSON.stringify(evaluationMethod)}&highSchoolType=${highSchoolType}&admissionYear=${admissionYear}&graduationYear=${graduationYear}&academicRequirement=${academicRequirement}&requirement=${JSON.stringify(requirement)}`,
    );
  };

  useEffect(() => {
    if (universityName) {
      setValue("university", universityName);
    }
    if (departmentName) {
      setValue("department", departmentName);
    }
  });

  return (
    <form
      className="w-full grid grid-cols-1 md:grid-cols-2 items-start gap-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <motion.div
        className={"flex gap-2 flex-col"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div>
          <div className="text-lg font-semibold">학교명</div>
          <input
            {...register("university")}
            className="w-full rounded-full p-2 px-4 text-lg outline-none ring-2 ring-cyan-600 transition focus:ring-4 focus:ring-cyan-700"
            placeholder="학교명을 입력해주세요."
            type="text"
          />
        </div>
        <div>
          <div className="text-lg font-semibold">학과명</div>
          <input
            {...register("department")}
            className="w-full rounded-full p-2 px-4 text-lg outline-none ring-2 ring-cyan-600 transition focus:ring-4 focus:ring-cyan-700"
            placeholder="학과명을 입력해주세요."
            type="text"
          />
        </div>
      </motion.div>
      <div className={"flex flex-col gap-2"}>
        <RecoilMultiSelector
          recoilState={evaluationMethodState}
          title="평가 방식"
          valueList={evaluationMethods}
        />
        <RecoilSingleSelector
          recoilState={highSchoolTypeState}
          title="학교 유형"
          valueList={highSchoolTypes}
        />
        <RecoilSingleSelector
          gridCols={1}
          recoilState={admissionYearState}
          title="입학년도"
          valueList={admissionYears}
        />
        <RecoilSingleSelector
          gridCols={2}
          recoilState={graduationYearState}
          title="고등학교 졸업"
          valueList={graduationYears}
        />
        <RecoilSingleSelector
          gridCols={2}
          recoilState={academicRequirementState}
          title="최저학력기준"
          valueList={academicRequirements}
        />
        <motion.button
          type={"button"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setRequirementOn(!requirementOn)}
          className={`${requirementOn ? "bg-cyan-600 text-white" : "bg-neutral-200 text-neutral-800 hover:ring-2 ring-neutral-500"} p-2 px-4 rounded-full transition-colors`}
        >
          필수 조건이 포함된 전형
        </motion.button>
        {requirementOn ? (
          <RecoilMultiSelector
            recoilState={requirementState}
            title="필요 조건"
            valueList={requirementList}
          />
        ) : null}
      </div>

      <motion.button
        className={`flex w-full md:col-span-2 items-center justify-center gap-1 rounded-full p-2 text-white transition-colors ${loading ? "bg-neutral-500" : "bg-cyan-700 hover:bg-cyan-600"}`}
        disabled={loading}
        type="submit"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="text-xl font-bold">
          {!loading ? "검색" : "검색중..."}
        </div>
        {!loading ? <MagnifyingGlassCircleIcon className="size-7" /> : null}
      </motion.button>
    </form>
  );
}
