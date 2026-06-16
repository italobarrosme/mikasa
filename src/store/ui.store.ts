import { create } from 'zustand'

type UiState = {
  isSideFormOpen: boolean
  setSideFormOpen: (open: boolean) => void
  toggleSideForm: () => void
}

export const useUiStore = create<UiState>((set) => ({
  isSideFormOpen: false,
  setSideFormOpen: (open) => set({ isSideFormOpen: open }),
  toggleSideForm: () => set((state) => ({ isSideFormOpen: !state.isSideFormOpen })),
}))
