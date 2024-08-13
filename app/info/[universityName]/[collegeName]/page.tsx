import { and, eq } from 'drizzle-orm'
import type { Metadata } from 'next'
import db from '@/db'
import { colleges, departments, universities } from '@/db/schema'
import InfoItem from '@/components/info-item'
import InfoListHolder from '@/components/info-list-holder'
import BackPageButton from '@/components/back-page-button'
import InfoTitle from '@/components/info-title'

export async function generateStaticParams() {
  return db
    .select({
      universityName: universities.name,
      collegeName: colleges.name,
    })
    .from(universities)
    .leftJoin(colleges, eq(colleges.universityId, universities.id))
}

export function generateMetadata({
  params,
}: {
  params: { universityName: string; collegeName: string }
}): Metadata {
  return {
    title: `내수6 | ${decodeURIComponent(params.universityName)} ${decodeURIComponent(params.collegeName)}`,
    description: `${decodeURIComponent(params.universityName)} ${decodeURIComponent(params.collegeName)} 정보`,
  }
}

export default async function CollegePage({
  params,
}: {
  params: { universityName: string; collegeName: string }
}) {
  const departmentData = await db
    .select({
      id: departments.id,
      name: departments.name,
      universityName: universities.name,
      collegeName: colleges.name,
      universitySymbol: universities.symbolImage,
    })
    .from(universities)
    .leftJoin(colleges, eq(colleges.universityId, universities.id))
    .leftJoin(departments, eq(departments.collegeId, colleges.id))
    .where(
      and(
        eq(universities.name, decodeURIComponent(params.universityName)),
        eq(colleges.name, decodeURIComponent(params.collegeName))
      )
    )
  return (
    <div className="flex w-full flex-col">
      <BackPageButton
        href={`/info/${params.universityName}`}
        name={decodeURIComponent(params.universityName)}
      />
      <InfoTitle>
        {decodeURIComponent(params.universityName)}{' '}
        {decodeURIComponent(params.collegeName)}
      </InfoTitle>

      <InfoListHolder>
        {departmentData.map((data) => (
          <InfoItem
            href={`/info/${params.universityName}/${params.collegeName}/${data.name}`}
            key={data.id}
            name={data.name}
            symbolImage={data.universitySymbol}
          >
            <div className="grid w-full grid-cols-2">
              <div>
                <div>{data.universityName}</div>
                <div className="font-semibold">{data.collegeName}</div>
              </div>
              <div className="flex items-center text-xl font-bold">
                {data.name}
              </div>
            </div>
          </InfoItem>
        ))}
      </InfoListHolder>
    </div>
  )
}
