import type { EvaluationMethodType } from '@/lib/types'

export default function EvaluationMethodTag({
  admissionName,
  evaluationMethod,
}: {
  admissionName: string
  evaluationMethod: EvaluationMethodType
}) {
  if (evaluationMethod === 'comprehensive') {
    return (
      <div className="rounded-lg bg-red-500 p-1 px-3 text-white">
        {admissionName}
      </div>
    )
  } else if (evaluationMethod === 'academic') {
    return (
      <div className="rounded-lg bg-orange-500 p-1 px-3 text-white">
        {admissionName}
      </div>
    )
  } else if (evaluationMethod === 'talent') {
    return (
      <div className="rounded-lg bg-green-500 p-1 px-3 text-white">
        {admissionName}
      </div>
    )
  }
  return (
    <div className="rounded-lg bg-blue-500 p-1 px-3 text-white">
      {admissionName}
    </div>
  )
}
