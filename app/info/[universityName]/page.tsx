import { eq } from 'drizzle-orm'
import type { Metadata } from 'next'
import db from '@/db'
import { colleges, universities } from '@/db/schema'
import InfoItem from '@/components/info-item'
import InfoListHolder from '@/components/info-list-holder'
import BackPageButton from '@/components/back-page-button'
import InfoTitle from '@/components/info-title'

export async function generateStaticParams() {
  return db.select({ universityName: universities.name }).from(universities)
}

export function generateMetadata({
  params,
}: {
  params: { universityName: string }
}): Metadata {
  return {
    title: `내수6 | ${decodeURIComponent(params.universityName)}`,
    description: `${decodeURIComponent(params.universityName)} 정보`,
  }
}

export default async function CollegePage({
  params,
}: {
  params: { universityName: string }
}) {
  const collegeData = await db
    .select({
      id: colleges.id,
      name: colleges.name,
      universityName: universities.name,
      universitySymbol: universities.symbolImage,
    })
    .from(universities)
    .leftJoin(colleges, eq(colleges.universityId, universities.id))
    .where(eq(universities.name, decodeURIComponent(params.universityName)))

  return (
    <div className="flex flex-col">
      <BackPageButton href="/info" name="대학 목록" />
      <InfoTitle>{decodeURIComponent(params.universityName)}</InfoTitle>
      <InfoListHolder>
        {collegeData.map((data) => (
          <InfoItem
            href={`/info/${params.universityName}/${data.name}`}
            key={data.id}
            name={data.name}
            symbolImage={data.universitySymbol}
          >
            <div className="flex flex-col">
              <div>{data.universityName}</div>
              <div className="text-lg font-semibold">{data.name}</div>
            </div>
          </InfoItem>
        ))}
      </InfoListHolder>
    </div>
  )
}
