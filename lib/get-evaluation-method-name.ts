import type { EvaluationMethodType } from './types'

export default function getEvaluationMethodName(
  method: EvaluationMethodType | null
): string {
  switch (method) {
    case 'academic':
      return '학생부 교과전형'
    case 'comprehensive':
      return '학생부 종합전형'
    case 'talent':
      return '특기자 전형'
    case 'essay':
      return '논술 전형'
    default:
      return '기타'
  }
}
