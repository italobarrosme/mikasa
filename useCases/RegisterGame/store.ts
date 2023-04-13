import create from "zustand";
import { RegisterGameType } from './types'

type State = {
  registerGameData: RegisterGameType,
  setRegisterGame: (payload: RegisterGameType) => void
  clearRegisterGame: () => void
}

const registerGameData = {
  orderFinished: '',
  description: '',
  finishedDate: '',
  image: {
    url: null,
  },
  rating: 0,
  title: '',
} as RegisterGameType;

export const useRegisterGameStore = create<State>(set => ({
  registerGameData,
  setRegisterGame: (payload: RegisterGameType) => set({ registerGameData: payload }),
  clearRegisterGame: () => set({ registerGameData: registerGameData }),
}));