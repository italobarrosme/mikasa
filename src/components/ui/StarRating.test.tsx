import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { StarRating } from './StarRating'

describe('StarRating', () => {
  it('renders the configured number of stars', () => {
    render(<StarRating value={0} max={5} onChange={() => {}} />)
    expect(screen.getAllByRole('radio')).toHaveLength(5)
  })

  it('marks stars up to the current value as checked', () => {
    render(<StarRating value={3} onChange={() => {}} />)
    const checked = screen.getAllByRole('radio', { checked: true })
    expect(checked).toHaveLength(3)
  })

  it('emits the selected value when a star is clicked', async () => {
    const onChange = vi.fn()
    render(<StarRating value={0} onChange={onChange} />)

    await userEvent.click(screen.getByRole('radio', { name: '4 stars' }))

    expect(onChange).toHaveBeenCalledWith(4)
  })
})
