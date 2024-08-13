import { atom } from 'recoil'
import {
  EvaluationMethodType,
  GraduationYearType,
  HighSchoolType, RequirementType,
} from './types'

const universityNameState = atom<string>({
  key: 'universityNameState',
  default: '',
})

const departmentNameState = atom<string>({
  key: 'departmentNameState',
  default: '',
})

const evaluationMethodState = atom<EvaluationMethodType[]>({
  key: 'evaluationMethodState',
  default: ['comprehensive'],
})

const highSchoolTypeState = atom<HighSchoolType>({
  key: 'highSchoolTypeState',
  default: 'general',
})

const admissionYearState = atom<number>({
  key: 'admissionYearState',
  default: 2025,
})

const graduationYearState = atom<GraduationYearType>({
  key: 'graduationYearState',
  default: '2025.02',
})

const academicRequirementState = atom<boolean>({
  key: 'academicRequirementState',
  default: false,
})

const loadingState = atom<boolean>({
  key: 'loadingState',
  default: false,
})

const requirementState = atom<RequirementType[]>({
  key:"requirementState",
  default:[]
})

export {
  universityNameState,
  departmentNameState,
  evaluationMethodState,
  highSchoolTypeState,
  admissionYearState,
  graduationYearState,
  academicRequirementState,
  loadingState,
  requirementState
}
