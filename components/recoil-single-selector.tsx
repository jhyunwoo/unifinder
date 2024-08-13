import type { RecoilState } from 'recoil'
import { useRecoilState } from 'recoil'

export default function RecoilSingleSelector<T>({
  recoilState,
  valueList,
  title,
}: {
   recoilState: RecoilState<T>
  valueList: { name: string; value: T }[]
  title: string
  gridCols?: number
}) {
  const [state, setState] = useRecoilState(recoilState)
  return (
    <div className="flex w-full flex-col gap-1">
      <div className="text-lg font-semibold">{title}</div>
      {valueList.length >= 4 && (
        <div className="grid w-full grid-cols-4 gap-1">
          {valueList.map((data) => (
            <button
              className={`${state === data.value ? 'bg-sky-500 text-white' : 'bg-sky-100 text-sky-950'} rounded-lg p-2 transition-colors`}
              key={data.name}
              onClick={() => {
                setState(data.value)
              }}
              type="button"
            >
              {data.name}
            </button>
          ))}
        </div>
      )}
      {valueList.length < 4 && (
        <div className="grid w-full grid-cols-2 gap-1">
          {valueList.map((data) => (
            <button
              className={`${state === data.value ? 'bg-sky-500 text-white' : 'bg-sky-100 text-sky-950'} rounded-lg p-2 transition-colors`}
              key={data.name}
              onClick={() => {
                setState(data.value)
              }}
              type="button"
            >
              {data.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
