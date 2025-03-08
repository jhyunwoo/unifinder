import { eq } from "drizzle-orm";
import db from "@/db";
import { colleges, universities } from "@/db/schema";
import InfoItem from "@/components/info-item";
import InfoListHolder from "@/components/info-list-holder";
import BackPageButton from "@/components/back-page-button";
import InfoTitle from "@/components/info-title";

export async function generateStaticParams() {
  return db
    .select({ universityName: universities.name })
    .from(universities)
    .orderBy(universities.id);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ universityName: string }>;
}) {
  const { universityName } = await params;

  return {
    title: `유니파인더 | ${decodeURIComponent(universityName)}`,
    description: `${decodeURIComponent(universityName)} 정보`,
  };
}

export default async function CollegePage({
  params,
}: {
  params: Promise<{ universityName: string }>;
}) {
  const { universityName } = await params;
  const collegeData = await db
    .select({
      id: colleges.id,
      name: colleges.name,
      universityName: universities.name,
      universitySymbol: universities.symbolImage,
    })
    .from(universities)
    .leftJoin(colleges, eq(colleges.universityId, universities.id))
    .where(eq(universities.name, decodeURIComponent(universityName)));

  return (
    <div className="flex flex-col">
      <BackPageButton href="/info" name="대학 목록" />
      <InfoTitle>{decodeURIComponent(universityName)}</InfoTitle>
      <InfoListHolder>
        {collegeData.map((data) => (
          <InfoItem
            href={`/info/${universityName}/${data.name}`}
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
  );
}
