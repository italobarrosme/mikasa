'use client'

import type { FormEvent } from 'react'
import { useUiStore } from '@/store/ui.store'
import { useRegisterGameStore } from '@/store/register-game.store'
import { SideForm } from '@/components/forms/SideForm'
import { TextField } from '@/components/ui/TextField'
import { TextAreaField } from '@/components/ui/TextAreaField'
import { FileField } from '@/components/ui/FileField'
import { StarRating } from '@/components/ui/StarRating'

export function RegisterGame() {
  const isOpen = useUiStore((state) => state.isSideFormOpen)
  const setOpen = useUiStore((state) => state.setSideFormOpen)
  const draft = useRegisterGameStore((state) => state.draft)
  const updateDraft = useRegisterGameStore((state) => state.updateDraft)
  const resetDraft = useRegisterGameStore((state) => state.resetDraft)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // TODO: wire to the createGame mutation through a server action.
    console.log('Game to register:', draft)
    resetDraft()
    setOpen(false)
  }

  return (
    <section className="flex flex-col items-center gap-6">
      <button
        type="button"
        className="rounded-md bg-brand-accent p-4 text-brand-light shadow-md transition-colors hover:bg-brand-primary"
        onClick={() => setOpen(true)}
      >
        Add a game
      </button>

      <SideForm title="Insert game to catalog" open={isOpen} onClose={() => setOpen(false)}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <TextField
            type="number"
            min={0}
            name="orderFinished"
            label="What was the order of the finished game?"
            placeholder="Order finished"
            value={draft.orderFinished}
            onChange={(event) =>
              updateDraft({
                orderFinished: event.target.value === '' ? '' : Number(event.target.value),
              })
            }
          />
          <TextField
            name="title"
            label="What was the game's title?"
            placeholder="Title"
            value={draft.title}
            onChange={(event) => updateDraft({ title: event.target.value })}
          />
          <TextAreaField
            name="description"
            label="What's this game about?"
            placeholder="Description"
            value={draft.description}
            onChange={(event) => updateDraft({ description: event.target.value })}
          />
          <FileField
            name="image"
            label="Add a cover image"
            file={draft.image}
            onSelect={(file) => updateDraft({ image: file })}
          />
          <StarRating
            label="How many stars does this game deserve?"
            value={draft.rating}
            onChange={(rating) => updateDraft({ rating })}
          />
          <button
            type="submit"
            className="w-full rounded-md bg-brand-accent px-6 py-2 text-brand-light transition-colors hover:bg-brand-primary"
          >
            Save
          </button>
        </form>
      </SideForm>
    </section>
  )
}
