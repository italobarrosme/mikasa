import create from "zustand";
import { RegisterGameType } from './types'

type State = {
  registerGameData: RegisterGameType,
  setRegisterGame: (registerGame: RegisterGameType) => void
}

export const useRegisterGameStore = create<State>(set => ({
  registerGameData: {} as RegisterGameType,
  setRegisterGame: (registerGameData: RegisterGameType) => set({ registerGameData }),
}));