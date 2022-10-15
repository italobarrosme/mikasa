import create from "zustand";
import { RegisterGameType } from './types'

type State = {
  registerGameData: RegisterGameType,
  setRegisterGame: (payload: RegisterGameType) => void
  clearRegisterGame: () => void
}

const registerGameData = {
  orderFinished: 0,
  description: '',
  finishedDate: '',
  image: {
    url: '',
  },
  rating: 0,
  title: '',
} as RegisterGameType;

export const useRegisterGameStore = create<State>(set => ({
  registerGameData,
  setRegisterGame: (payload: RegisterGameType) => set({ registerGameData: payload }),
  clearRegisterGame: () => set({ registerGameData: registerGameData }),
}));