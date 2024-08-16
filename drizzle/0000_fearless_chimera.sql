DO $$ BEGIN
 CREATE TYPE "public"."admissionType" AS ENUM('in-group', 'out-group');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."educationEnum" AS ENUM('university', 'junior_college');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."evaluationMethod" AS ENUM('comprehensive', 'academic', 'essay', 'talent');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."universityEnum" AS ENUM('main', 'branch');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "account" (
	"userId" text NOT NULL,
	"type" text NOT NULL,
	"provider" text NOT NULL,
	"providerAccountId" text NOT NULL,
	"refresh_token" text,
	"access_token" text,
	"expires_at" integer,
	"token_type" text,
	"scope" text,
	"id_token" text,
	"session_state" text,
	CONSTRAINT "account_provider_providerAccountId_pk" PRIMARY KEY("provider","providerAccountId")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "admission" (
	"id" serial PRIMARY KEY NOT NULL,
	"admissionYear" integer DEFAULT 2025 NOT NULL,
	"evaluationMethod" "evaluationMethod" DEFAULT 'comprehensive',
	"name" text NOT NULL,
	"admissionQuota" integer DEFAULT 0 NOT NULL,
	"admissionTrack" text,
	"highSchoolType" jsonb DEFAULT '[]'::jsonb,
	"graduationYear" jsonb DEFAULT '[]'::jsonb,
	"requirements" jsonb DEFAULT '[]'::jsonb,
	"departmentId" serial NOT NULL,
	"cautions" jsonb DEFAULT '[]'::jsonb,
	"minimumAcademicRequirement" jsonb DEFAULT '[]'::jsonb
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "college" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"universityId" serial NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "department" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"collegeId" serial NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "session" (
	"sessionToken" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"expires" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "university" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"symbolImage" text,
	"address" text,
	"admissionType" "admissionType" DEFAULT 'in-group',
	"universityType" "universityEnum" DEFAULT 'main',
	"educationType" "educationEnum" DEFAULT 'university',
	"admissionGuide" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"email" text,
	"emailVerified" timestamp,
	"image" text,
	"role" text DEFAULT 'user' NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "account" ADD CONSTRAINT "account_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "admission" ADD CONSTRAINT "admission_departmentId_department_id_fk" FOREIGN KEY ("departmentId") REFERENCES "public"."department"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "college" ADD CONSTRAINT "college_universityId_university_id_fk" FOREIGN KEY ("universityId") REFERENCES "public"."university"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "department" ADD CONSTRAINT "department_collegeId_college_id_fk" FOREIGN KEY ("collegeId") REFERENCES "public"."college"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "session" ADD CONSTRAINT "session_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
