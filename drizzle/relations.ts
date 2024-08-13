import { relations } from "drizzle-orm/relations";
import { college, department, admission, university, user, session, account } from "./schema";

export const departmentRelations = relations(department, ({one, many}) => ({
	college: one(college, {
		fields: [department.collegeId],
		references: [college.id]
	}),
	admissions: many(admission),
}));

export const collegeRelations = relations(college, ({one, many}) => ({
	departments: many(department),
	university: one(university, {
		fields: [college.universityId],
		references: [university.id]
	}),
}));

export const admissionRelations = relations(admission, ({one}) => ({
	department: one(department, {
		fields: [admission.departmentId],
		references: [department.id]
	}),
}));

export const universityRelations = relations(university, ({many}) => ({
	colleges: many(college),
}));

export const sessionRelations = relations(session, ({one}) => ({
	user: one(user, {
		fields: [session.userId],
		references: [user.id]
	}),
}));

export const userRelations = relations(user, ({many}) => ({
	sessions: many(session),
	accounts: many(account),
}));

export const accountRelations = relations(account, ({one}) => ({
	user: one(user, {
		fields: [account.userId],
		references: [user.id]
	}),
}));