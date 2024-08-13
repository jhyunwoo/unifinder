import { atom } from 'recoil'
import type {
  EvaluationMethodType,
  GraduationYearType,
  HighSchoolType,
} from './types'

const universityNameState = atom<string>({
  key: 'universityNameState',
  default: '',
})

const deparmtnetNameState = atom<string>({
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

export {
  universityNameState,
  deparmtnetNameState,
  evaluationMethodState,
  highSchoolTypeState,
  admissionYearState,
  graduationYearState,
  academicRequirementState,
  loadingState,
}
