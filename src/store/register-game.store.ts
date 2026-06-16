import { create } from 'zustand'
import type { GameDraft } from '@/types/game'

const emptyDraft: GameDraft = {
  orderFinished: '',
  title: '',
  description: '',
  finishedDate: '',
  rating: 0,
  image: null,
}

type RegisterGameState = {
  draft: GameDraft
  updateDraft: (patch: Partial<GameDraft>) => void
  resetDraft: () => void
}

export const useRegisterGameStore = create<RegisterGameState>((set) => ({
  draft: emptyDraft,
  updateDraft: (patch) => set((state) => ({ draft: { ...state.draft, ...patch } })),
  resetDraft: () => set({ draft: emptyDraft }),
}))
