"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSetRecoilState } from "recoil";
import useSWR from "swr";
import getAdmissionSearchParams from "@/lib/get-search-params";
import type { SearchType } from "@/lib/types";
import SearchBar from "@/components/search-bar";
import { loadingState } from "@/lib/recoil";
import EvaluationMethodTag from "@/components/evaluation-method-tag";
import fetcher from "@/lib/fetcher";
import BackPageButton from "@/components/back-page-button";
import { AnimatePresence, motion } from "framer-motion";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const setLoading = useSetRecoilState(loadingState);
  const {
    university,
    department,
    evaluationMethod,
    highSchoolType,
    admissionYear,
    graduationYear,
    academicRequirement,
    requirement,
  } = getAdmissionSearchParams(searchParams);

  const { data, isLoading } = useSWR<SearchType[]>(
    `/api/search?university=${university}&department=${department}&evaluationMethod=${JSON.stringify(evaluationMethod)}&highSchoolType=${highSchoolType}&admissionYear=${admissionYear}&graduationYear=${graduationYear}&academicRequirement=${JSON.stringify(academicRequirement)}&requirement=${JSON.stringify(requirement)}`,
    fetcher,
  );

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading, setLoading]);

  return (
    <div className="flex w-full flex-col gap-2">
      <BackPageButton href="/" name="홈" />
      <SearchBar />

      <div className="ml-auto">
        {isLoading ? "검색중..." : `검색 결과: ${data?.length}개의 전형`}
      </div>

      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        <AnimatePresence>
          {data?.map((searchData) => (
            <motion.div
              key={
                searchData.universityName +
                searchData.collegeName +
                searchData.departmentName +
                searchData.admissionName
              }
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Link
                className="flex items-start justify-between gap-2 rounded-lg bg-white p-2 shadow-lg"
                href={`/info/${searchData.universityName}/${searchData.collegeName}/${searchData.departmentName}/${searchData.admissionName}`}
              >
                <div className="flex gap-2">
                  {searchData.universitySymbol ? (
                    <Image
                      alt={searchData.universityName}
                      height={50}
                      src={searchData.universitySymbol}
                      width={50}
                    />
                  ) : (
                    <div />
                  )}
                  <div>
                    <div className="text-lg font-semibold">
                      {searchData.universityName}
                    </div>
                    <div>{searchData.collegeName}</div>
                    <div>{searchData.departmentName}</div>
                  </div>
                </div>
                <div className="flex flex-col items-end text-sm">
                  <EvaluationMethodTag
                    admissionName={searchData.admissionName}
                    evaluationMethod={searchData.evaluationMethod}
                  />
                  <div>모집인원: {searchData.admissionQuota}명</div>
                  <div>
                    최저:{" "}
                    {searchData.minimumAcademicRequirement &&
                    searchData.minimumAcademicRequirement?.length > 0
                      ? "O"
                      : "X"}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
