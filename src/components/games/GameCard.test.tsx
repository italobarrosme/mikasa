import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { GameCard } from './GameCard'

describe('GameCard', () => {
  const props = {
    title: 'Half-Life 2',
    orderFinished: 7,
    image: { url: 'https://example.com/hl2.jpg' },
  }

  it('renders the title and finished order', () => {
    render(<GameCard {...props} />)

    expect(screen.getByRole('heading', { name: 'Half-Life 2' })).toBeInTheDocument()
    expect(screen.getByText(/Order finished 7º/)).toBeInTheDocument()
  })

  it('renders the cover image with an accessible name', () => {
    render(<GameCard {...props} />)

    const image = screen.getByRole('img', { name: 'Half-Life 2' })
    expect(image).toHaveAttribute('src', props.image.url)
  })
})
