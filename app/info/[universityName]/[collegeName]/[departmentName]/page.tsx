import { and, eq } from 'drizzle-orm'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import db from '@/db'
import {
  admissions,
  colleges,
  departments,
  universities,
} from '@/db/schema'
import BackPageButton from '@/components/back-page-button'
import InfoTitle from '@/components/info-title'

export async function generateStaticParams() {
  return db
    .select({
      universityName: universities.name,
      collegeName: colleges.name,
      departmentName: departments.name,
    })
    .from(universities)
    .leftJoin(colleges, eq(colleges.universityId, universities.id))
    .leftJoin(departments, eq(departments.collegeId, colleges.id))
}

export function generateMetadata({
  params,
}: {
  params: {
    universityName: string
    collegeName: string
    departmentName: string
  }
}): Metadata {
  return {
    title: `내수6 | ${decodeURIComponent(params.universityName)} ${decodeURIComponent(params.collegeName)} ${decodeURIComponent(params.departmentName)}`,
    description: `${decodeURIComponent(params.universityName)} ${decodeURIComponent(params.collegeName)} ${decodeURIComponent(params.departmentName)} 정보`,
  }
}

export default async function AdmissionPage({
  params,
}: {
  params: {
    universityName: string
    collegeName: string
    departmentName: string
  }
}) {
  const admissionData = await db
    .select({
      id: admissions.id,
      name: admissions.name,
      universityName: universities.name,
      collegeName: colleges.name,
      departmentName: departments.name,
      universitySymbol: universities.symbolImage,
    })
    .from(universities)
    .leftJoin(colleges, eq(colleges.universityId, universities.id))
    .leftJoin(departments, eq(departments.collegeId, colleges.id))
    .leftJoin(admissions, eq(admissions.departmentId, departments.id))
    .where(
      and(
        eq(universities.name, decodeURIComponent(params.universityName)),
        eq(colleges.name, decodeURIComponent(params.collegeName)),
        eq(departments.name, decodeURIComponent(params.departmentName))
      )
    )
  return (
    <div>
      <BackPageButton
        href={`/info/${params.universityName}/${params.collegeName}`}
        name={`${decodeURIComponent(params.universityName)} ${decodeURIComponent(params.collegeName)}`}
      />
      <InfoTitle>
        {decodeURIComponent(params.universityName)}{' '}
        {decodeURIComponent(params.collegeName)}{' '}
        {decodeURIComponent(params.departmentName)}
      </InfoTitle>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {admissionData.map((data) => (
          <Link
            className="flex h-32 items-center gap-2 rounded-lg bg-white p-2 transition hover:shadow-lg"
            href={`/info/${params.universityName}/${params.collegeName}/${params.departmentName}/${data.name}`}
            key={data.id}
          >
            {data.universitySymbol ? (
              <Image
                alt={data.universityName}
                height={50}
                src={data.universitySymbol}
                width={50}
              />
            ) : (
              <div />
            )}
            <div className="grid w-full grid-cols-2">
              <div>
                <div>{data.universityName}</div>
                <div className="text-lg font-semibold">{data.collegeName}</div>
              </div>
              <div>
                <div className="text-lg font-semibold">
                  {data.departmentName}
                </div>
                <div className="flex items-center text-xl font-bold">
                  {data.name}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
