import { asc } from 'drizzle-orm'
import db from '@/db'
import InfoListHolder from '@/components/info-list-holder'
import InfoItem from '@/components/info-item'
import { universities } from '@/db/schema'
import InfoTitle from '@/components/info-title'
import BackPageButton from '@/components/back-page-button'

// export const dynamic = 'force-dynamic'

export default async function UniversityPage() {
  const universityData = await db.query.universities.findMany({
    orderBy: [asc(universities.id)],
  })

  return (
    <div className="flex w-full flex-col">
      <BackPageButton href="/" name="홈" />
      <InfoTitle>대학 목록</InfoTitle>
      <InfoListHolder>
        {universityData.map((data) => (
          <InfoItem
            href={`/info/${data.name}`}
            key={data.id}
            name={data.name}
            symbolImage={data.symbolImage}
          >
            <div className="flex flex-col">
              <div className="text-xl font-bold">{data.name}</div>
              <div className="text-sm">{data.address}</div>
            </div>
          </InfoItem>
        ))}
      </InfoListHolder>
    </div>
  )
}
