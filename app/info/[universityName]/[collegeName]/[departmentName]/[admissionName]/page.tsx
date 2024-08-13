import { and, eq } from 'drizzle-orm'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
  admissions,
  colleges,
  departments,
  universities,
} from '@/db/schema'
import db from '@/db'
import getEvaluationMethodName from '@/lib/get-evaluation-method-name'
import getGraduationYearName from '@/lib/get-graduation-year-name'
import BackPageButton from '@/components/back-page-button'

export async function generateStaticParams() {
  return db
    .select({
      universityName: universities.name,
      collegeName: colleges.name,
      departmentName: departments.name,
      admissionName: admissions.name,
    })
    .from(universities)
    .leftJoin(colleges, eq(colleges.universityId, universities.id))
    .leftJoin(departments, eq(departments.collegeId, colleges.id))
    .leftJoin(admissions, eq(admissions.departmentId, departments.id))
}

export function generateMetadata({
  params,
}: {
  params: {
    universityName: string
    collegeName: string
    departmentName: string
    admissionName: string
  }
}): Metadata {
  return {
    title: `내수6 | ${decodeURIComponent(params.universityName)} ${decodeURIComponent(params.collegeName)} ${decodeURIComponent(params.departmentName)} ${decodeURIComponent(params.admissionName)}`,
    description: `${decodeURIComponent(params.universityName)} ${decodeURIComponent(params.collegeName)} ${decodeURIComponent(params.departmentName)} ${decodeURIComponent(params.admissionName)} 정보`,
  }
}

export default async function AdmissionPage({
  params,
}: {
  params: {
    universityName: string
    collegeName: string
    departmentName: string
    admissionName: string
  }
}) {
  const universityData = await db.query.universities.findFirst({
    where: eq(universities.name, decodeURIComponent(params.universityName)),
  })
  const collegeData = await db.query.colleges.findFirst({
    where: and(
      eq(colleges.universityId, Number(universityData?.id)),
      eq(colleges.name, decodeURIComponent(params.collegeName))
    ),
  })
  const departmentData = await db.query.departments.findFirst({
    where: and(
      eq(departments.collegeId, Number(collegeData?.id)),
      eq(departments.name, decodeURIComponent(params.departmentName))
    ),
  })
  const admissionData = await db.query.admissions.findFirst({
    where: and(
      eq(admissions.departmentId, Number(departmentData?.id)),
      eq(admissions.name, decodeURIComponent(params.admissionName))
    ),
  })

  if (universityData && collegeData && departmentData && admissionData) {
    return (
      <div className="flex flex-col gap-2">
        <BackPageButton
          href={`/info/${params.universityName}/${params.collegeName}/${params.departmentName}`}
          name={`${decodeURIComponent(params.universityName)} ${decodeURIComponent(params.collegeName)} ${decodeURIComponent(params.departmentName)}`}
        />
        <div className="flex w-full gap-4">
          {universityData.symbolImage ? (
            <Image
              alt={universityData.name}
              height={100}
              src={universityData.symbolImage}
              width={100}
            />
          ) : (
            <div />
          )}
          <div className="flex flex-col">
            <div className="text-xl font-bold">{universityData.name}</div>
            <div className="text-lg font-semibold">{collegeData.name}</div>
            <div>{departmentData.name}</div>
            {universityData.admissionGuide ? (
              <a
                className="rounded-lg bg-sky-500 p-1 px-2 text-center text-sm text-white transition-colors hover:bg-sky-600"
                download
                href={universityData.admissionGuide}
                rel="noopener"
                target="_blank"
              >
                수시모집요강 다운로드
              </a>
            ) : null}
          </div>
        </div>
        <div className="px-2 py-8 text-2xl font-bold">{admissionData.name}</div>
        <div className="grid grid-cols-1 gap-2 *:rounded-xl *:bg-white *:p-4 md:grid-cols-2 xl:grid-cols-3">
          <div>
            <div className="text-lg font-semibold">
              {getEvaluationMethodName(admissionData.evaluationMethod)}
            </div>
            <div>{admissionData.admissionYear}학년도</div>
            <div>
              {admissionData.admissionTrack
                ? `${admissionData.admissionTrack}계열`
                : ''}
            </div>
            <div className="font-semibold">
              모집인원: {admissionData.admissionQuota}명
            </div>
          </div>
          <div>
            <div className="text-neutral-700">최저학력기준</div>
            <div className="text-lg font-semibold">
              {admissionData.minimumAcademicRequirement
                ? admissionData.minimumAcademicRequirement
                : '없음'}
            </div>
          </div>
          <div>
            <div className="text-neutral-700">지원 자격</div>
            <div className="text-lg font-semibold">
              {admissionData.graduationYear?.map((year) => (
                <div key={year}>- {getGraduationYearName(year)}</div>
              ))}
            </div>
          </div>
          <div className="xl:col-span-3">
            <div className="text-lg font-semibold text-neutral-700">
              주의사항
            </div>
            {admissionData.cautions?.map((data) => (
              <div key={data}>● {data}</div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  return <div>404 Not Found</div>
}
