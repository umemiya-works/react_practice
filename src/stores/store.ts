import { create } from 'zustand'

export const useStore = create<StoreState>(set => ({
  count: 0,
  increase: () => set((state: StoreState) => ({ count: state.count + 1 })),
  decrease: () => set((state: StoreState) => ({ count: state.count - 1 }))
}))

type StoreState = {
  count: number,
  increase: () => void,
  decrease: () => void
}