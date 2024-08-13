'use client'

import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import type {
  HighSchoolType,
  EvaluationMethodType,
  GraduationYearType,
} from '@/lib/types'
import {
  academicRequirementState,
  admissionYearState,
  deparmtnetNameState,
  evaluationMethodState,
  graduationYearState,
  highSchoolTypeState,
  loadingState,
  universityNameState,
} from '@/lib/recoil'
import RecoilMultiSelector from './recoil-multi-selector'
import RecoilSingleSelector from './recoil-single-selector'

interface Inputs {
  university: string
  department: string
}

export default function SearchBar() {
  const { register, handleSubmit, setValue } = useForm<Inputs>()
  const evaluationMethods: { name: string; value: EvaluationMethodType }[] = [
    { name: '교과', value: 'academic' },
    { name: '학종', value: 'comprehensive' },
    { name: '논술', value: 'essay' },
    { name: '특기자', value: 'talent' },
  ]
  const highSchoolTypes: { name: string; value: HighSchoolType }[] = [
    { name: '일반고', value: 'general' },
    { name: '특목고', value: 'special_purpose' },
    { name: '특성화고', value: 'vocational' },
    { name: '자율고', value: 'autonomous' },
    { name: '검정고시', value: 'GED' },
    { name: '해외고', value: 'overseas' },
    { name: '대안학교', value: 'alternative' },
    { name: '영재학교', value: 'gifted' },
  ]
  const admissionYears: { name: string; value: number }[] = [
    { name: '2025학년도', value: 2025 },
  ]
  const graduationYears: { name: string; value: GraduationYearType }[] = [
    {
      name: '2025년 2월',
      value: '2025.02',
    },
    { name: '2024년 8월 이전', value: 'before 2024.08' },
  ]
  const academicRequirements: { name: string; value: boolean }[] = [
    { name: '최저 있음', value: true },
    { name: '최저 없음', value: false },
  ]

  const evaluationMethod = useRecoilValue(evaluationMethodState)
  const highSchoolType = useRecoilValue(highSchoolTypeState)
  const admissionYear = useRecoilValue(admissionYearState)
  const graduationYear = useRecoilValue(graduationYearState)
  const academicRequirement = useRecoilValue(academicRequirementState)
  const [universityName, setUniversityName] =
    useRecoilState(universityNameState)
  const [departmentName, setDepartmentName] =
    useRecoilState(deparmtnetNameState)

  const loading = useRecoilValue(loadingState)

  const router = useRouter()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setUniversityName(data.university)
    setDepartmentName(data.department)
    router.push(
      `/search?university=${data.university}&department=${data.department}&evaluationMethod=${JSON.stringify(evaluationMethod)}&highSchoolType=${highSchoolType}&admissionYear=${admissionYear}&graduationYear=${graduationYear}&academicRequirement=${academicRequirement}`
    )
  }

  useEffect(() => {
    if (universityName) {
      setValue('university', universityName)
    }
    if (departmentName) {
      setValue('department', departmentName)
    }
  })

  return (
    <form
      className="flex w-full flex-col items-center gap-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        {...register('university')}
        className="w-full rounded-full p-2 px-4 text-lg outline-none ring-2 ring-sky-400 transition focus:ring-4 focus:ring-sky-500"
        placeholder="학교명"
        type="text"
      />
      <input
        {...register('department')}
        className="w-full rounded-full p-2 px-4 text-lg outline-none ring-2 ring-sky-400 transition focus:ring-4 focus:ring-sky-500"
        placeholder="학과명"
        type="text"
      />

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

      <button
        className={`flex w-full items-center justify-center gap-1 rounded-full p-2 text-white transition-colors ${loading ? 'bg-neutral-500' : 'bg-sky-600 hover:bg-sky-500'}`}
        disabled={loading}
        type="submit"
      >
        <div className="text-xl font-bold">
          {!loading ? '검색' : '검색중...'}
        </div>
        {!loading ? <MagnifyingGlassCircleIcon className="size-7" /> : null}
      </button>
    </form>
  )
}
