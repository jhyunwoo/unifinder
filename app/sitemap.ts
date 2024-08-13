import type { MetadataRoute } from 'next'
import { eq } from 'drizzle-orm'
import db from '@/db'
import {
  admissions,
  colleges,
  departments,
  universities,
} from '@/db/schema'

function addUniqueItem<T>(item: T, array: T[]): void {
  const stringArray = array.map((data) => JSON.stringify(data))
  if (!stringArray.includes(JSON.stringify(item))) {
    array.push(item)
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await db
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

  const site: {
    url: string
    lastModified: Date
    changeFrequency:
      | 'always'
      | 'yearly'
      | 'monthly'
      | 'daily'
      | 'weekly'
      | 'hourly'
      | 'never'
      | undefined
    priority: number
  }[] = [
    {
      url: `${process.env.SITE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${process.env.SITE_URL}/search`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${process.env.SITE_URL}/info`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ]

  for (const university of data) {
    addUniqueItem(
      {
        url: `${process.env.SITE_URL}/info/${university.universityName}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      site
    )
    if (university.collegeName) {
      addUniqueItem(
        {
          url: `${process.env.SITE_URL}/info/${university.universityName}/${university.collegeName}`,
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 0.8,
        },
        site
      )
      if (university.departmentName) {
        addUniqueItem(
          {
            url: `${process.env.SITE_URL}/info/${university.universityName}/${university.collegeName}/${university.departmentName}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
          },
          site
        )
        if (university.admissionName) {
          addUniqueItem(
            {
              url: `${process.env.SITE_URL}/info/${university.universityName}/${university.collegeName}/${university.departmentName}/${university.admissionName}`,
              lastModified: new Date(),
              changeFrequency: 'weekly',
              priority: 0.8,
            },
            site
          )
        }
      }
    }
  }

  return site
}
