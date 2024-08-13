import {
  timestamp,
  pgTable,
  text,
  primaryKey,
  integer,
  pgEnum,
  jsonb,
  serial,
} from 'drizzle-orm/pg-core'
import type { AdapterAccountType } from 'next-auth/adapters'
import type {
  GraduationYearType,
  HighSchoolType,
  RequirementType,
} from '@/lib/types'

export const users = pgTable('user', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text('name'),
  email: text('email'),
  emailVerified: timestamp('emailVerified', { mode: 'date' }),
  image: text('image'),
  role: text('role').default('user').notNull(),
})

export const accounts = pgTable(
  'account',
  {
    userId: text('userId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    type: text('type').$type<AdapterAccountType>().notNull(),
    provider: text('provider').notNull(),
    providerAccountId: text('providerAccountId').notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: integer('expires_at'),
    token_type: text('token_type'),
    scope: text('scope'),
    id_token: text('id_token'),
    session_state: text('session_state'),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  })
)

export const sessions = pgTable('session', {
  sessionToken: text('sessionToken').primaryKey(),
  userId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  expires: timestamp('expires', { mode: 'date' }).notNull(),
})

export const universityEnum = pgEnum('universityEnum', ['main', 'branch'])
export const educationEnum = pgEnum('educationEnum', [
  'university',
  'junior_college',
])
export const admissionType = pgEnum('admissionType', ['in-group', 'out-group'])
export const evaluationMethod = pgEnum('evaluationMethod', [
  'comprehensive',
  'academic',
  'essay',
  'talent',
])

export const universities = pgTable('university', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  symbolImage: text('symbolImage'),
  address: text('address'),
  admissionType: admissionType('admissionType').default('in-group'),
  universityType: universityEnum('universityType').default('main'),
  educationType: educationEnum('educationType').default('university'),
  admissionGuide: text('admissionGuide'),
})

export const colleges = pgTable('college', {
  id: serial('id').primaryKey(),
  name: text('name'),
  universityId: serial('universityId')
    .references(() => universities.id, {
      onDelete: 'cascade',
    })
    .notNull(),
})

export const departments = pgTable('department', {
  id: serial('id').primaryKey(),
  name: text('name'),
  collegeId: serial('collegeId')
    .references(() => colleges.id, {
      onDelete: 'cascade',
    })
    .notNull(),
})

export const admissions = pgTable('admission', {
  id: serial('id').primaryKey(),
  admissionYear: integer('admissionYear').notNull().default(2025),
  evaluationMethod:
    evaluationMethod('evaluationMethod').default('comprehensive'),
  name: text('name').notNull(),
  admissionQuota: integer('admissionQuota').notNull().default(0),
  admissionTrack: text('admissionTrack'),
  highSchoolType: jsonb('highSchoolType').$type<HighSchoolType[]>().default([]),
  graduationYear: jsonb('graduationYear')
    .$type<GraduationYearType[]>()
    .default([]),
  requirements: jsonb('requirements').$type<RequirementType[]>().default([]),
  departmentId: serial('departmentId')
    .references(() => departments.id, {
      onDelete: 'cascade',
    })
    .notNull(),
  cautions: jsonb('cautions').$type<string[]>().default([]),
  minimumAcademicRequirement: text('minimumAcademicRequirement'),
})
