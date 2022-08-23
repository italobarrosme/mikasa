import create from 'zustand'

type State = {
  isSideForm: boolean
  setIsSideForm: (isSideForm: boolean) => void
}

export const useUiStore = create<State>(set => ({
  isSideForm: false,
  setIsSideForm: (isSideForm: boolean) => set({ isSideForm }),
}));