import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export const useStore = create<Count>()(
  devtools(
    persist(
      (set) => ({
        count: 0,
        increase: () =>
          set((state) => {
            return { count: state.count + 1 }
          }),
        decrease: () =>
          set((state) => {
            return { count: state.count - 1}
          })
      }),
      {
        name: 'count-store'
      },
    )
  )
)

type Count = {
  count: number,
  increase: () => void,
  decrease: () => void
}