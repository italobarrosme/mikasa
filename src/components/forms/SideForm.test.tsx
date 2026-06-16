import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SideForm } from './SideForm'

describe('SideForm', () => {
  it('renders its title and children', () => {
    render(
      <SideForm title="Insert game" open onClose={() => {}}>
        <p>form body</p>
      </SideForm>,
    )

    expect(screen.getByRole('dialog', { name: 'Insert game' })).toBeInTheDocument()
    expect(screen.getByText('form body')).toBeInTheDocument()
  })

  it('is translated off-screen when closed', () => {
    render(
      <SideForm open={false} onClose={() => {}}>
        <p>hidden</p>
      </SideForm>,
    )

    expect(screen.getByRole('dialog')).toHaveClass('translate-x-full')
  })

  it('calls onClose when the close button is clicked', async () => {
    const onClose = vi.fn()
    render(
      <SideForm open onClose={onClose}>
        <p>body</p>
      </SideForm>,
    )

    await userEvent.click(screen.getByRole('button', { name: 'Close form' }))

    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
