import { render, screen } from '@testing-library/react'
import Footer from '../components/Footer'

describe('Footer', () => {
  it('test', () => {
    render(<Footer />)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
