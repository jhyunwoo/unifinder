import type { MetadataRoute } from "next";
import db from "@/db";
import { admissions, colleges, departments, universities } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemaps: MetadataRoute.Sitemap = [
    {
      url: `${process.env.SITE_URL}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${process.env.SITE_URL}/search`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${process.env.SITE_URL}/info`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];

  const universityList = await db
    .select({ universityName: universities.name })
    .from(universities);

  const collegeList = await db
    .select({ collegeName: colleges.name, universityName: universities.name })
    .from(universities)
    .leftJoin(colleges, eq(colleges.universityId, universities.id));

  const departmentList = await db
    .select({
      departmentName: departments.name,
      collegeName: colleges.name,
      universityName: universities.name,
    })
    .from(universities)
    .leftJoin(colleges, eq(colleges.universityId, universities.id))
    .leftJoin(departments, eq(departments.collegeId, colleges.id));

  const admissionList = await db
    .select({
      admissionName: admissions.name,
      departmentName: departments.name,
      collegeName: colleges.name,
      universityName: universities.name,
    })
    .from(universities)
    .leftJoin(colleges, eq(colleges.universityId, universities.id))
    .leftJoin(departments, eq(departments.collegeId, colleges.id))
    .leftJoin(admissions, eq(admissions.departmentId, departments.id));

  for (const university of universityList) {
    sitemaps.push({
      url: `${process.env.SITE_URL}/info/${university.universityName}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    });
  }
  for (const college of collegeList) {
    sitemaps.push({
      url: `${process.env.SITE_URL}/info/${college.universityName}/${college.collegeName}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    });
  }
  for (const department of departmentList) {
    sitemaps.push({
      url: `${process.env.SITE_URL}/info/${department.universityName}/${department.collegeName}/${department.departmentName?.replaceAll("&", "&amp;")}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    });
  }
  for (const admission of admissionList) {
    sitemaps.push({
      url: `${process.env.SITE_URL}/info/${admission.universityName}/${admission.collegeName}/${admission.departmentName?.replaceAll("&", "&amp;")}/${admission.admissionName}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    });
  }

  return sitemaps;
}
