import { beforeEach, describe, expect, it } from 'vitest'
import { useRegisterGameStore } from './register-game.store'

describe('register-game store', () => {
  beforeEach(() => {
    useRegisterGameStore.getState().resetDraft()
  })

  it('starts with an empty draft', () => {
    expect(useRegisterGameStore.getState().draft).toEqual({
      orderFinished: '',
      title: '',
      description: '',
      finishedDate: '',
      rating: 0,
      image: null,
    })
  })

  it('merges partial updates into the draft', () => {
    useRegisterGameStore.getState().updateDraft({ title: 'Portal', rating: 5 })

    const { draft } = useRegisterGameStore.getState()
    expect(draft.title).toBe('Portal')
    expect(draft.rating).toBe(5)
  })

  it('resets the draft back to empty', () => {
    useRegisterGameStore.getState().updateDraft({ title: 'Doom' })
    useRegisterGameStore.getState().resetDraft()

    expect(useRegisterGameStore.getState().draft.title).toBe('')
  })
})
