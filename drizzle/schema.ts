import { pgTable, pgEnum, text, timestamp, foreignKey, serial, integer, jsonb, primaryKey } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"

export const admissionType = pgEnum("admissionType", ['in-group', 'out-group'])
export const educationEnum = pgEnum("educationEnum", ['university', 'junior_college'])
export const educationType = pgEnum("educationType", ['university', 'junior_college'])
export const evaluationMethod = pgEnum("evaluationMethod", ['comprehensive', 'academic', 'essay', 'talent'])
export const graduationYear = pgEnum("graduationYear", ['2025.02', 'before 2024.08'])
export const highSchoolType = pgEnum("highSchoolType", ['general', 'special_purpose', 'vocational', 'autonomous', 'GED', 'overseas', 'alternative'])
export const universityEnum = pgEnum("universityEnum", ['main', 'branch'])
export const universityType = pgEnum("universityType", ['main', 'branch'])


export const user = pgTable("user", {
	id: text("id").primaryKey().notNull(),
	name: text("name"),
	email: text("email"),
	emailVerified: timestamp("emailVerified", { mode: 'string' }),
	image: text("image"),
	role: text("role").default('user').notNull(),
});

export const department = pgTable("department", {
	id: serial("id").primaryKey().notNull(),
	name: text("name"),
	collegeId: serial("collegeId").notNull().references(() => college.id, { onDelete: "cascade" } ),
});

export const admission = pgTable("admission", {
	id: serial("id").primaryKey().notNull(),
	admissionYear: integer("admissionYear").default(2025).notNull(),
	evaluationMethod: evaluationMethod("evaluationMethod").default('comprehensive'),
	name: text("name").notNull(),
	admissionQuota: integer("admissionQuota").default(0).notNull(),
	admissionTrack: text("admissionTrack"),
	highSchoolType: jsonb("highSchoolType").default([]),
	graduationYear: jsonb("graduationYear").default([]),
	requirements: jsonb("requirements").default([]),
	departmentId: serial("departmentId").notNull().references(() => department.id, { onDelete: "cascade" } ),
	cautions: jsonb("cautions").default([]),
	minimumAcademicRequirement: text("minimumAcademicRequirement"),
});

export const university = pgTable("university", {
	id: serial("id").primaryKey().notNull(),
	name: text("name").notNull(),
	symbolImage: text("symbolImage"),
	address: text("address"),
	admissionType: admissionType("admissionType").default('in-group'),
	universityType: universityEnum("universityType").default('main'),
	educationType: educationEnum("educationType").default('university'),
});

export const college = pgTable("college", {
	id: serial("id").primaryKey().notNull(),
	name: text("name"),
	universityId: serial("universityId").notNull().references(() => university.id, { onDelete: "cascade" } ),
});

export const session = pgTable("session", {
	sessionToken: text("sessionToken").primaryKey().notNull(),
	userId: text("userId").notNull().references(() => user.id, { onDelete: "cascade" } ),
	expires: timestamp("expires", { mode: 'string' }).notNull(),
});

export const account = pgTable("account", {
	userId: text("userId").notNull().references(() => user.id, { onDelete: "cascade" } ),
	type: text("type").notNull(),
	provider: text("provider").notNull(),
	providerAccountId: text("providerAccountId").notNull(),
	refreshToken: text("refresh_token"),
	accessToken: text("access_token"),
	expiresAt: integer("expires_at"),
	tokenType: text("token_type"),
	scope: text("scope"),
	idToken: text("id_token"),
	sessionState: text("session_state"),
},
(table) => {
	return {
		accountProviderProviderAccountIdPk: primaryKey({ columns: [table.provider, table.providerAccountId], name: "account_provider_providerAccountId_pk"}),
	}
});