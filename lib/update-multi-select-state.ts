import type { SetterOrUpdater } from 'recoil'

export default function updateMultiSelectState<T>(
  state: T[],
  setState: SetterOrUpdater<T[]>,
  value: T
): void {
  if (state.includes(value)) {
    setState(state.filter((v) => v !== value))
  } else {
    setState([...state, value])
  }
}
